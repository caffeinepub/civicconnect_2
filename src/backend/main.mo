import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";


import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";


actor {
  // Include authorization system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  include MixinStorage();

  // Timestamps for unique IDs and sorting
  public type Timestamp = Time.Time;

  // --- User Profile (required by instructions) ---
  public type UserProfile = {
    name : Text;
    email : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can get profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Customer-related types and state
  public type CustomerAccount = {
    customerId : Text;
    fullName : Text;
    mobileNumber : Text;
    email : Text;
    businessName : Text;
    passwordHash : Text;
    createdAt : Timestamp;
  };

  public type CustomerProfile = {
    customerId : Text;
    fullName : Text;
    email : Text;
    mobileNumber : Text;
    businessName : Text;
    createdAt : Timestamp;
  };

  public type ServiceRequest = {
    requestId : Text;
    customerId : Text;
    serviceName : Text;
    notes : Text;
    createdAt : Timestamp;
  };

  let customers = Map.empty<Text, CustomerAccount>();
  let serviceRequests = Map.empty<Text, ServiceRequest>();
  var nextRequestId = 1;

  // Password hash function (with fixed salt)
  func hashPassword(password : Text) : Text {
    let salt : Text = "fixed_secret_salt";
    password # salt;
  };

  // Create Customer Profile — no authentication required (public signup)
  public shared ({ caller }) func signupCustomer(
    fullName : Text,
    mobileNumber : Text,
    email : Text,
    businessName : Text,
    password : Text,
  ) : async {
    #ok : Text;
    #err : Text;
  } {
    let passwordHash = hashPassword(password);

    // Check if email already exists
    let emailExists = customers.values().find(
      func(customer : CustomerAccount) : Bool {
        customer.email == email;
      }
    );

    switch (emailExists) {
      case (?_) {
        #err("Email already registered");
      };
      case (null) {
        // Create new customer
        let nextCustomerId = customers.values().size() + 1;
        let customerId = nextCustomerId.toText();
        let newCustomer : CustomerAccount = {
          customerId;
          fullName;
          mobileNumber;
          email;
          businessName;
          passwordHash;
          createdAt = Time.now();
        };

        customers.add(customerId, newCustomer);
        #ok(customerId.toText());
      };
    };
  };

  // Customer login — no authentication required (public login)
  public query ({ caller }) func loginCustomer(email : Text, password : Text) : async {
    #ok : CustomerProfile;
    #err : Text;
  } {
    let passwordHash = hashPassword(password);

    switch (customers.values().find(func(customer : CustomerAccount) : Bool { customer.email == email })) {
      case (null) {
        #err("No customer with this email. Please signup.");
      };
      case (?customer) {
        if (customer.passwordHash == passwordHash) {
          #ok({
            customerId = customer.customerId;
            fullName = customer.fullName;
            email = customer.email;
            mobileNumber = customer.mobileNumber;
            businessName = customer.businessName;
            createdAt = customer.createdAt;
          });
        } else {
          #err("Wrong password. Please try again.");
        };
      };
    };
  };

  // Query Customer Profile by customerId — open to any caller (profile lookup)
  public query ({ caller }) func getCustomerProfile(customerId : Text) : async ?CustomerProfile {
    switch (customers.get(customerId)) {
      case (null) { null };
      case (?customer) {
        ?{
          customerId = customer.customerId;
          fullName = customer.fullName;
          email = customer.email;
          mobileNumber = customer.mobileNumber;
          businessName = customer.businessName;
          createdAt = customer.createdAt;
        };
      };
    };
  };

  // Get all customers — admin access only
  public query ({ caller }) func getAllCustomers() : async [CustomerProfile] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admin can access all customer data");
    };
    customers.values().map<CustomerAccount, CustomerProfile>(
      func(customer : CustomerAccount) : CustomerProfile {
        {
          customerId = customer.customerId;
          fullName = customer.fullName;
          email = customer.email;
          mobileNumber = customer.mobileNumber;
          businessName = customer.businessName;
          createdAt = customer.createdAt;
        };
      }
    ).toArray();
  };

  // Submit Service Request — accepts customerId, ensures it exists in customers
  public shared ({ caller }) func submitServiceRequest(
    customerId : Text,
    serviceName : Text,
    notes : Text,
  ) : async {
    #ok : Text;
    #err : Text;
  } {
    switch (customers.get(customerId)) {
      case (null) {
        #err("Invalid customer id. Customer not found.");
      };
      case (?_) {
        let serviceRequestId = nextRequestId.toText();
        let newRequest : ServiceRequest = {
          requestId = serviceRequestId;
          customerId;
          serviceName;
          notes;
          createdAt = Time.now();
        };

        serviceRequests.add(serviceRequestId, newRequest);
        nextRequestId += 1;
        #ok(serviceRequestId);
      };
    };
  };

  // Get Service Requests by Customer — open to any caller (customerId acts as access token)
  public query ({ caller }) func getServiceRequestsByCustomer(customerId : Text) : async [ServiceRequest] {
    serviceRequests.values().filter(
      func(request : ServiceRequest) : Bool { request.customerId == customerId }
    ).toArray();
  };

  // Admin-only: Retrieve all service requests
  public query ({ caller }) func getAllServiceRequests() : async [ServiceRequest] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admin can access all service requests");
    };
    serviceRequests.values().toArray();
  };

  // --- Blog Post Types and State ---
  public type BlogPost = {
    id : Text;
    title : Text;
    content : Text;
    excerpt : Text;
    author : Text;
    createdAt : Timestamp;
    updatedAt : Timestamp;
  };

  module BlogPost {
    public func compare(a : BlogPost, b : BlogPost) : Order.Order {
      Text.compare(b.id, a.id); // Reverse order for newest first
    };
  };

  let blogState = Map.empty<Text, BlogPost>();

  // Admin-only: create blog post
  public shared ({ caller }) func createBlogPost(
    title : Text,
    content : Text,
    excerpt : Text,
    author : Text,
  ) : async Text {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can create blog posts");
    };

    let id = Time.now().toText();
    let now = Time.now();
    let blogPost : BlogPost = {
      id;
      title;
      content;
      excerpt;
      author;
      createdAt = now;
      updatedAt = now;
    };
    blogState.add(id, blogPost);
    id;
  };

  // Public: get a single blog post
  public query func getBlogPost(id : Text) : async BlogPost {
    switch (blogState.get(id)) {
      case (null) { Runtime.trap("Blog post not found") };
      case (?blogPost) { blogPost };
    };
  };

  // Public: list all blog posts
  public query func listBlogPosts() : async [BlogPost] {
    blogState.values().toArray().sort();
  };

  // --- Contact Message Types and State ---
  public type ContactMessage = {
    id : Text;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    createdAt : Timestamp;
  };

  let contactState = Map.empty<Text, ContactMessage>();

  // Public: submit a contact message (no auth required)
  public shared func submitContactMessage(
    name : Text,
    email : Text,
    subject : Text,
    message : Text,
  ) : async Text {
    let id = Time.now().toText();
    let contactMessage = {
      id;
      name;
      email;
      subject;
      message;
      createdAt = Time.now();
    };
    contactState.add(id, contactMessage);
    id;
  };

  // Admin-only: list contact messages
  public shared ({ caller }) func listContactMessages() : async [ContactMessage] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view contact messages");
    };
    contactState.values().toArray();
  };

  // --- Grievance Types and State ---
  public type GrievanceCategory = {
    #cleanliness;
    #noise;
    #safety;
    #maintenance;
    #other;
  };

  public type Grievance = {
    id : Text;
    name : Text;
    email : Text;
    category : GrievanceCategory;
    description : Text;
    createdAt : Timestamp;
    referenceNumber : Text;
  };

  let grievanceState = Map.empty<Text, Grievance>();

  // Public: submit a grievance (no auth required)
  public shared func submitGrievance(
    name : Text,
    email : Text,
    category : GrievanceCategory,
    description : Text,
  ) : async Text {
    let id = Time.now().toText();
    let referenceNumber = id;
    let grievance = {
      id;
      name;
      email;
      category;
      description;
      createdAt = Time.now();
      referenceNumber;
    };
    grievanceState.add(id, grievance);
    referenceNumber;
  };

  // Admin-only: list grievances
  public shared ({ caller }) func listGrievances() : async [Grievance] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view grievances");
    };
    grievanceState.values().toArray();
  };

  // --- Consultation Request Types and State ---
  public type ConsultationRequest = {
    id : Text;
    fullName : Text;
    phoneNumber : Text;
    selectedService : Text;
    cityState : Text;
    timestamp : Timestamp;
    utmSource : ?Text;
  };

  let consultationRequestState = Map.empty<Text, ConsultationRequest>();

  // Public: submit a consultation request (no auth required)
  public shared ({ caller }) func submitConsultationRequest(
    fullName : Text,
    phoneNumber : Text,
    selectedService : Text,
    cityState : Text,
    utmSource : ?Text,
  ) : async Text {
    let id = Time.now().toText();
    let request : ConsultationRequest = {
      id;
      fullName;
      phoneNumber;
      selectedService;
      cityState;
      timestamp = Time.now();
      utmSource;
    };
    consultationRequestState.add(id, request);
    id;
  };

  // Admin-only: list all consultation requests
  public shared ({ caller }) func listConsultationRequests() : async [ConsultationRequest] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view consultation requests");
    };
    consultationRequestState.values().toArray();
  };

  // --- Affiliate Application Types and State ---
  public type AffiliateApplication = {
    id : Text;
    name : Text;
    email : Text;
    phone : Text;
    city : Text;
    businessType : Text;
    createdAt : Timestamp;
  };

  let affiliateApplicationState = Map.empty<Text, AffiliateApplication>();

  // Public: submit an affiliate application (no auth required)
  public shared func submitAffiliateApplication(
    name : Text,
    email : Text,
    phone : Text,
    city : Text,
    businessType : Text,
  ) : async Text {
    let id = Time.now().toText();
    let application : AffiliateApplication = {
      id;
      name;
      email;
      phone;
      city;
      businessType;
      createdAt = Time.now();
    };
    affiliateApplicationState.add(id, application);
    id;
  };

  // Admin-only: list all affiliate applications
  public shared ({ caller }) func listAffiliateApplications() : async [AffiliateApplication] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view affiliate applications");
    };
    affiliateApplicationState.values().toArray();
  };

  // --- Company Search ---
  public type Company = {
    cin : Text;
    company_name : Text;
    roc : Text;
    status : Text;
  };

  let companiesState = Map.empty<Text, Company>();

  // Public: search companies by name (case-insensitive substring, max 10)
  // Note: parameter is 'searchTerm' because 'query' is a reserved keyword in Motoko
  public query func searchCompanies(searchTerm : Text) : async [Company] {
    if (searchTerm.size() == 0) return [];
    let q = searchTerm.toLower();
    let allMatches = companiesState.values().filter(
      func(c : Company) : Bool {
        c.company_name.toLower().contains(#text q)
      }
    ).toArray();
    if (allMatches.size() <= 10) {
      allMatches;
    } else {
      Array.tabulate<Company>(10, func(i : Nat) : Company { allMatches[i] });
    };
  };

  // Public: add a company
  public shared func addCompany(cin : Text, company_name : Text, roc : Text, status : Text) : async () {
    companiesState.add(cin, { cin; company_name; roc; status });
  };

  // Admin-only: get all companies
  public query ({ caller }) func getAllCompanies() : async [Company] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admin can access all companies");
    };
    companiesState.values().toArray();
  };

  // --- Authentication - Account Creation / Sign Up with Internet Identity ---
  public shared ({ caller }) func signUpWithInternetIdentity() : async Principal {
    if (caller.isAnonymous()) {
      Runtime.trap("Authentication failed: anonymous principals cannot sign up");
    };
    AccessControl.assignRole(accessControlState, caller, caller, #user);
    caller;
  };
};
