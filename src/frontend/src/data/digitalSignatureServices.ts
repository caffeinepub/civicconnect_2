export interface DSCService {
  slug: string;
  title: string;
  icon: string;
  description: string;
  benefits: string[];
  documents: string[];
  process?: { title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
}

export interface DSCCategory {
  key: string;
  title: string;
  description: string;
  icon: string;
  slugs: string[];
}

export const DSC_SERVICES: DSCService[] = [
  {
    slug: "class-3-dsc",
    title: "Class 3 Digital Signature Certificate",
    icon: "🔐",
    description:
      "Class 3 DSC is the highest level of digital signature used for e-tendering, e-auctions, income tax filing, and MCA filings. It provides the strongest identity verification and is mandatory for government portal registrations.",
    benefits: [
      "Mandatory for e-tendering and e-auctions",
      "Accepted by all government portals",
      "Highest identity assurance",
      "Valid for 1-3 years",
      "Legally recognized under IT Act 2000",
      "Speeds up digital document signing",
    ],
    documents: [
      "PAN Card (self-attested)",
      "Aadhaar Card / Passport / Driving License (identity proof)",
      "Address proof (utility bill / bank statement)",
      "Passport-size photograph",
      "Mobile number linked with Aadhaar",
    ],
  },
  {
    slug: "dsc-for-company",
    title: "DSC for Company/LLP",
    icon: "🏢",
    description:
      "Digital Signature Certificate for authorized signatories of Private Limited Companies, LLPs, and other entities. Required for MCA filings, GST registration, and other regulatory submissions on behalf of the company.",
    benefits: [
      "Required for MCA21 portal filings",
      "Needed for GST and income tax filings",
      "Authorized signatory authentication",
      "Reduces paper-based compliance",
      "Secure and tamper-proof signing",
      "Accepted by EPFO and ESIC portals",
    ],
    documents: [
      "Certificate of Incorporation",
      "Director/Authorized Signatory PAN Card",
      "Director/Authorized Signatory Aadhaar",
      "Company address proof",
      "Board resolution authorizing signatory",
    ],
  },
  {
    slug: "dsc-for-gst",
    title: "DSC for GST Filing",
    icon: "📋",
    description:
      "A specific Digital Signature Certificate used for signing GST registration applications and returns. Required for companies and LLPs when applying for GST registration and filing GST returns on the GSTN portal.",
    benefits: [
      "Mandatory for company GST registration",
      "Secure GSTN portal access",
      "Legally valid GST return filing",
      "Eliminates need for physical signatures",
      "Instant verification by GSTN",
      "Reduces compliance errors",
    ],
    documents: [
      "Applicant PAN Card",
      "Aadhaar Card of authorized signatory",
      "Business registration proof",
      "Mobile number for OTP verification",
      "Passport-size photograph",
    ],
  },
  {
    slug: "dsc-for-income-tax",
    title: "DSC for Income Tax Filing",
    icon: "💼",
    description:
      "Digital Signature Certificate used for signing and verifying income tax returns and other documents on the Income Tax e-filing portal. Mandatory for companies and recommended for individuals with complex filings.",
    benefits: [
      "Secure income tax return filing",
      "Mandatory for companies filing ITR",
      "Instant return verification",
      "Accepted by Income Tax Department",
      "Reduces processing time",
      "Legally binding digital signature",
    ],
    documents: [
      "PAN Card",
      "Aadhaar Card",
      "Address proof",
      "Mobile number linked to Aadhaar",
      "Passport-size photograph",
    ],
  },
  {
    slug: "dsc-for-tender",
    title: "DSC for E-Tendering",
    icon: "📑",
    description:
      "Class 3 Digital Signature Certificate used for participation in government e-tenders and e-procurement portals including GeM, CPPP, IREPS, and state procurement portals. Mandatory for all e-tender submissions.",
    benefits: [
      "Mandatory for all government e-tenders",
      "Compatible with all e-procurement portals",
      "Secure bid submission",
      "Prevents bid tampering",
      "Recognized by GeM, CPPP, and IREPS",
      "Fast issuance within 1-2 days",
    ],
    documents: [
      "PAN Card of applicant",
      "Aadhaar Card",
      "Address proof",
      "Organisation authorization letter (if organizational DSC)",
      "Mobile number for OTP",
    ],
  },
  {
    slug: "dsc-renewal",
    title: "DSC Renewal",
    icon: "🔄",
    description:
      "Renew your existing Digital Signature Certificate before it expires. DSCs are valid for 1 or 2 years; timely renewal ensures uninterrupted access to e-filing portals and government services.",
    benefits: [
      "Uninterrupted government portal access",
      "Same USB token can be reused",
      "Quick renewal within 1-2 days",
      "Minimal documentation required",
      "No break in compliance filings",
      "Expert guidance on renewal process",
    ],
    documents: [
      "Existing DSC token",
      "Updated PAN Card",
      "Updated Aadhaar Card",
      "Address proof",
      "Mobile number for OTP",
    ],
  },
];

export const DSC_CATEGORIES: DSCCategory[] = [
  {
    key: "individual-dsc",
    title: "Individual & Professional DSC",
    description: "DSC for individuals, professionals, and sole proprietors",
    icon: "👤",
    slugs: [
      "class-3-dsc",
      "dsc-for-income-tax",
      "dsc-for-tender",
      "dsc-renewal",
    ],
  },
  {
    key: "business-dsc",
    title: "Business & Compliance DSC",
    description: "DSC for companies, LLPs, and compliance filings",
    icon: "🏢",
    slugs: ["dsc-for-company", "dsc-for-gst"],
  },
];

export function getDSCServiceBySlug(slug: string): DSCService | undefined {
  return DSC_SERVICES.find((s) => s.slug === slug);
}
