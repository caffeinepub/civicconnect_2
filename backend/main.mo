import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

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

  // --- User Profile Types and State ---
  public type UserProfile = {
    name : Text;
    email : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
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
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
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

  public shared ({ caller }) func createBlogPost(title : Text, content : Text, excerpt : Text, author : Text) : async Text {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
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

  public query func getBlogPost(id : Text) : async BlogPost {
    switch (blogState.get(id)) {
      case (null) { Runtime.trap("Blog post not found") };
      case (?blogPost) { blogPost };
    };
  };

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

  public shared func submitContactMessage(name : Text, email : Text, subject : Text, message : Text) : async Text {
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

  public shared ({ caller }) func listContactMessages() : async [ContactMessage] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
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

  public shared func submitGrievance(name : Text, email : Text, category : GrievanceCategory, description : Text) : async Text {
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

  public shared ({ caller }) func listGrievances() : async [Grievance] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
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
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can view consultation requests");
    };
    consultationRequestState.values().toArray();
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
