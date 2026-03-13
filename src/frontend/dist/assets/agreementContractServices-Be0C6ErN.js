const AGREEMENT_SERVICES = [
  {
    slug: "rental-agreement",
    title: "Rental Agreement / Lease Deed",
    icon: "🏠",
    description: "A legally binding rental or lease agreement between landlord and tenant, covering terms of occupancy, rent, duration, and conditions. Essential for residential and commercial property rentals in India.",
    benefits: [
      "Legally enforceable document",
      "Protects rights of both parties",
      "Clearly defines rent and tenure",
      "Required for address proof",
      "Accepted by banks and government offices",
      "Drafted by legal experts"
    ],
    documents: [
      "PAN and Aadhaar of owner and tenant",
      "Property documents (ownership proof)",
      "Passport-size photographs",
      "Address proof of both parties",
      "Details of property and rent amount"
    ]
  },
  {
    slug: "partnership-deed",
    title: "Partnership Deed",
    icon: "🤝",
    description: "A partnership deed is a legal document that outlines the terms and conditions of a partnership business including profit sharing, roles, capital contribution, and exit clauses. Mandatory for registering a partnership firm.",
    benefits: [
      "Defines roles and responsibilities clearly",
      "Prevents future disputes between partners",
      "Required for firm bank account opening",
      "Legally recognized under Partnership Act 1932",
      "Customized to your business needs",
      "Expert legal drafting"
    ],
    documents: [
      "PAN and Aadhaar of all partners",
      "Address proof of partners",
      "Business address proof",
      "Capital contribution details",
      "Profit/loss sharing ratio details"
    ]
  },
  {
    slug: "mou",
    title: "MoU (Memorandum of Understanding)",
    icon: "📜",
    description: "A Memorandum of Understanding (MoU) is a formal agreement between two or more parties that outlines the intent to collaborate, the scope of work, and terms of engagement. Used in business collaborations, joint ventures, and government tie-ups.",
    benefits: [
      "Establishes clear intent between parties",
      "Defines scope of collaboration",
      "Non-binding or binding as required",
      "Used for business partnerships and JVs",
      "Prevents misunderstanding between parties",
      "Professionally drafted by legal experts"
    ],
    documents: [
      "Identity and address proof of all parties",
      "Details of proposed collaboration",
      "Business registration documents (if applicable)",
      "Scope of work and responsibilities",
      "Duration and exit clauses"
    ]
  },
  {
    slug: "service-agreement",
    title: "Service Agreement / Contract",
    icon: "📄",
    description: "A service agreement is a contract between a service provider and client defining deliverables, timelines, payment terms, and termination conditions. Essential for freelancers, consultants, agencies, and businesses offering services.",
    benefits: [
      "Protects service provider and client",
      "Defines deliverables and payment terms",
      "Reduces dispute risk",
      "Legally enforceable in court",
      "Includes confidentiality and IP clauses",
      "Customized for your service type"
    ],
    documents: [
      "Identity proof of both parties",
      "Business registration documents",
      "Service scope and deliverables",
      "Payment terms and milestones",
      "Duration of engagement"
    ]
  },
  {
    slug: "nda",
    title: "NDA (Non-Disclosure Agreement)",
    icon: "🔒",
    description: "A Non-Disclosure Agreement (NDA) is a legal contract that protects confidential business information shared between parties. Essential for startups, investors, employees, and business partners to prevent unauthorized disclosure.",
    benefits: [
      "Protects trade secrets and confidential data",
      "Legally binding confidentiality obligations",
      "Covers unilateral or mutual disclosure",
      "Essential before sharing business ideas",
      "Used for employees, vendors, and investors",
      "Professionally drafted and customized"
    ],
    documents: [
      "Identity proof of disclosing and receiving parties",
      "Business registration (if company)",
      "Nature of confidential information",
      "Duration of confidentiality",
      "Permitted use and restrictions"
    ]
  },
  {
    slug: "employment-agreement",
    title: "Employment Agreement",
    icon: "👔",
    description: "An employment agreement or offer letter defines the terms of employment including job role, compensation, working hours, leave policy, notice period, and exit clauses. Protects both employer and employee.",
    benefits: [
      "Defines employment terms clearly",
      "Protects employer from wrongful claims",
      "Helps employee understand their rights",
      "Includes non-compete and confidentiality clauses",
      "Reduces HR disputes",
      "Customized to company policies"
    ],
    documents: [
      "Company registration documents",
      "Employee identity and address proof",
      "Designation and CTC details",
      "Working hours and leave policy",
      "Notice period and termination conditions"
    ]
  },
  {
    slug: "sale-deed",
    title: "Sale Deed / Agreement to Sell",
    icon: "🏗️",
    description: "A sale deed is the primary legal document for transfer of property ownership in India. An agreement to sell documents the intention to sell before the final sale deed is registered. Both are essential for property transactions.",
    benefits: [
      "Legally transfers property ownership",
      "Required for property registration",
      "Prevents property disputes",
      "Accepted by banks for home loans",
      "Legally binding on both parties",
      "Expert drafting by legal professionals"
    ],
    documents: [
      "PAN and Aadhaar of buyer and seller",
      "Property documents and title deed",
      "Encumbrance certificate",
      "Property valuation certificate",
      "NOC from housing society (if applicable)"
    ]
  },
  {
    slug: "franchise-agreement",
    title: "Franchise Agreement",
    icon: "🏪",
    description: "A franchise agreement defines the rights, obligations, and terms between a franchisor and franchisee for running a franchise business. Covers territory rights, royalties, branding, and support obligations.",
    benefits: [
      "Protects brand and intellectual property",
      "Defines territory and exclusivity",
      "Covers royalty and fee structures",
      "Ensures consistent brand standards",
      "Legally enforceable exit clauses",
      "Customized for your franchise model"
    ],
    documents: [
      "Identity proof of franchisor and franchisee",
      "Business registration documents",
      "Brand trademark registration certificate",
      "Franchise territory details",
      "Royalty and revenue sharing terms"
    ]
  }
];
const AGREEMENT_CATEGORIES = [
  {
    key: "property-agreements",
    title: "Property & Business Agreements",
    description: "Rental, sale deed, partnership and franchise agreements",
    icon: "🏠",
    slugs: [
      "rental-agreement",
      "partnership-deed",
      "sale-deed",
      "franchise-agreement"
    ]
  },
  {
    key: "corporate-agreements",
    title: "Corporate & Service Contracts",
    description: "MoU, service contracts, NDA, and employment agreements",
    icon: "📋",
    slugs: ["mou", "service-agreement", "nda", "employment-agreement"]
  }
];
function getAgreementServiceBySlug(slug) {
  return AGREEMENT_SERVICES.find((s) => s.slug === slug);
}
export {
  AGREEMENT_CATEGORIES as A,
  AGREEMENT_SERVICES as a,
  getAgreementServiceBySlug as g
};
