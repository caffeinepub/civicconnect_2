const GOVT_REG_SERVICES = [
  {
    slug: "import-export-code",
    title: "Import Export Code (IEC)",
    icon: "🌐",
    description: "Import Export Code (IEC) is a 10-digit code issued by the Directorate General of Foreign Trade (DGFT) and is mandatory for any business involved in importing or exporting goods and services from India. YMW Compliance handles the complete IEC registration process, ensuring quick approval and full compliance with DGFT regulations.",
    benefits: [
      "Mandatory for all importers and exporters",
      "Lifetime validity — no renewal required",
      "Enables DGFT benefits and export incentives",
      "Required for customs clearance",
      "Access to foreign currency transactions",
      "Eligibility for export promotion schemes"
    ],
    documents: [
      "PAN Card of business / proprietor",
      "Aadhaar Card of proprietor / director",
      "Bank certificate or cancelled cheque",
      "Business address proof",
      "Certificate of Incorporation / Partnership Deed",
      "Digital Signature Certificate (DSC)"
    ]
  },
  {
    slug: "icegate-registration",
    title: "ICEGATE Registration",
    icon: "🛃",
    description: "ICEGATE (Indian Customs EDI Gateway) registration is required for importers, exporters, customs house agents, and freight forwarders to electronically file Bills of Entry, Shipping Bills, and other customs documents. YMW Compliance ensures smooth ICEGATE registration and helps clients set up their customs EDI account for seamless trade.",
    benefits: [
      "Mandatory for customs EDI filing",
      "Enables electronic submission of customs documents",
      "Faster customs clearance",
      "Access to ICEGATE portal for tracking",
      "Required for IEC-linked customs compliance",
      "Reduces manual paperwork at customs"
    ],
    documents: [
      "IEC Certificate",
      "PAN Card of business",
      "GST Registration Certificate",
      "Aadhaar / ID of authorized person",
      "Digital Signature Certificate (DSC)",
      "Bank account details"
    ]
  },
  {
    slug: "msme-registration",
    title: "MSME / Udyam Registration",
    icon: "🏭",
    description: "Udyam Registration (formerly MSME Registration) is a government certification for Micro, Small, and Medium Enterprises. It enables access to government schemes, subsidies, priority sector lending, and protection under MSMED Act. YMW Compliance assists businesses in obtaining their Udyam Certificate quickly and at minimal cost.",
    benefits: [
      "Access to government subsidies and schemes",
      "Priority lending from banks at lower interest",
      "Protection against delayed payments under MSMED Act",
      "Eligibility for collateral-free loans",
      "Tax and power tariff concessions",
      "ISO certification fee reimbursement"
    ],
    documents: [
      "Aadhaar Card of proprietor / director",
      "PAN Card of business",
      "GST Registration Certificate (if applicable)",
      "Business name and address details",
      "Bank account details",
      "NIC code of business activity"
    ]
  },
  {
    slug: "rera-registration",
    title: "RERA Registration",
    icon: "🏗️",
    description: "RERA (Real Estate Regulatory Authority) Registration is mandatory for real estate developers, promoters, and agents under the Real Estate (Regulation and Development) Act, 2016. YMW Compliance manages the complete RERA registration process for residential and commercial projects, ensuring compliance and avoiding penalties.",
    benefits: [
      "Mandatory for real estate promoters and agents",
      "Builds buyer trust and credibility",
      "Avoids heavy penalties under RERA Act",
      "Legal protection for developers and buyers",
      "Access to RERA project registration certificate",
      "Ensures transparent project disclosures"
    ],
    documents: [
      "PAN Card of company / promoter",
      "Certificate of Incorporation",
      "Land ownership / title documents",
      "Approved building plan from local authority",
      "Audited financial statements",
      "Details of promoter / director / agent"
    ]
  },
  {
    slug: "fire-noc",
    title: "Fire NOC",
    icon: "🔥",
    description: "Fire No Objection Certificate (Fire NOC) is issued by the State Fire Department and is mandatory for commercial establishments, hotels, factories, hospitals, educational institutions, and high-rise buildings. YMW Compliance handles fire safety inspection coordination, compliance documentation, and Fire NOC application from start to approval.",
    benefits: [
      "Mandatory for commercial establishments and factories",
      "Ensures fire safety compliance",
      "Required for building occupancy certificate",
      "Avoids legal action and prosecution",
      "Reduces insurance premium",
      "Protects employees and premises from fire hazards"
    ],
    documents: [
      "Site plan and building layout",
      "Fire safety equipment installation proof",
      "Business registration certificate",
      "Occupancy / completion certificate",
      "Application form with property details",
      "Property ownership or lease deed"
    ]
  },
  {
    slug: "apeda-registration",
    title: "APEDA Registration",
    icon: "🌾",
    description: "APEDA (Agricultural and Processed Food Products Export Development Authority) Registration is mandatory for exporters of scheduled products including fruits, vegetables, cereals, meat, poultry, dairy, and processed food. YMW Compliance manages the complete APEDA registration and certificate process to help agri-businesses access international markets.",
    benefits: [
      "Mandatory for export of scheduled agricultural products",
      "Access to APEDA export promotion schemes",
      "Financial assistance for export development",
      "Training and quality development support",
      "Access to APEDA AGRI Exchange portal",
      "Eligibility for export subsidies and incentives"
    ],
    documents: [
      "IEC Certificate",
      "PAN Card of business",
      "GST Registration Certificate",
      "Bank account details",
      "Certificate of Incorporation / Firm Registration",
      "Cancelled cheque"
    ]
  },
  {
    slug: "bis-certification",
    title: "BIS Certification",
    icon: "⚙️",
    description: "BIS (Bureau of Indian Standards) Certification is a mandatory quality certification for a wide range of products in India. It confirms that a product meets Indian Standards. YMW Compliance provides end-to-end support for BIS Certification including ISI Mark, Hallmarking, and Compulsory Registration Scheme (CRS) for electronic goods.",
    benefits: [
      "Mandatory for many product categories in India",
      "ISI Mark boosts consumer trust and market acceptance",
      "Required for sale and import of notified products",
      "Enables compliance with Indian Standards",
      "Access to government procurement contracts",
      "Hallmarking certification for gold jewellery"
    ],
    documents: [
      "Company registration certificate",
      "PAN Card of business",
      "Product details and technical specifications",
      "Test reports from BIS-recognized laboratory",
      "Factory inspection documents",
      "Manufacturing process flowchart"
    ]
  }
];
const GOVT_REG_CATEGORIES = [
  {
    key: "trade-import",
    title: "Trade & Import-Export Registrations",
    description: "IEC, ICEGATE, APEDA — for businesses engaged in international trade",
    icon: "🌐",
    slugs: ["import-export-code", "icegate-registration", "apeda-registration"]
  },
  {
    key: "business-govt",
    title: "Business & Government Registrations",
    description: "MSME, RERA, Fire NOC, BIS — essential registrations for business operations",
    icon: "🏛️",
    slugs: [
      "msme-registration",
      "rera-registration",
      "fire-noc",
      "bis-certification"
    ]
  }
];
function getGovtRegServiceBySlug(slug) {
  return GOVT_REG_SERVICES.find((s) => s.slug === slug);
}
export {
  GOVT_REG_CATEGORIES as G,
  GOVT_REG_SERVICES as a,
  getGovtRegServiceBySlug as g
};
