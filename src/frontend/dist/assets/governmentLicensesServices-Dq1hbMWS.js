const GOVERNMENT_LICENSES_SERVICES = [
  {
    slug: "trade-license",
    title: "Trade License",
    icon: "🏪",
    description: "A Trade License is a certificate/document that gives permission to the applicant to commence a particular trade or business in a specific location. It is issued by the local municipal authority and is mandatory for all businesses operating from a fixed premises.",
    benefits: [
      "Legal permission to carry on trade/business",
      "Mandatory for GST registration and business bank accounts",
      "Builds trust with customers and suppliers",
      "Required for government tenders and contracts",
      "Ensures compliance with local laws",
      "Easy renewal with existing records"
    ],
    documents: [
      "PAN Card and Aadhaar of proprietor / partners / directors",
      "Proof of business address (rent agreement / ownership proof)",
      "Electricity bill or utility bill for the premises",
      "NOC from landlord (if rented premises)",
      "Photographs of the business premises",
      "Municipal tax receipt",
      "Certificate of Incorporation (for companies)"
    ]
  },
  {
    slug: "psara-license",
    title: "PSARA License",
    icon: "🛡️",
    description: "The Private Security Agencies (Regulation) Act (PSARA) License is mandatory for any agency providing security guard services in India. YMW helps you obtain PSARA license from the state government with complete documentation and compliance support.",
    benefits: [
      "Legal authority to operate private security agency",
      "Eligibility to supply security guards to corporates, malls, banks, etc.",
      "Mandatory for empanelment with government bodies",
      "Builds credibility and trust with clients",
      "Avoid heavy penalties for unlicensed operations",
      "Support for multi-state PSARA licenses"
    ],
    documents: [
      "PAN and Aadhaar of all directors / proprietor",
      "Company / firm incorporation documents",
      "Address proof of registered office",
      "Character certificate for directors",
      "Training centre details / MoU with training agency",
      "Employee details (supervisors / guards)",
      "Security bond / surety bond as required by state"
    ]
  },
  {
    slug: "peso-license",
    title: "PESO License",
    icon: "⚗️",
    description: "The Petroleum and Explosives Safety Organisation (PESO) License is required for businesses dealing with petroleum products, explosives, compressed gases, and other hazardous materials. YMW provides end-to-end PESO license application and compliance support.",
    benefits: [
      "Legal authorization to store/handle petroleum/explosives",
      "Compliance with Petroleum Rules and Explosives Act",
      "Mandatory for petrol pumps, gas agencies, and chemical units",
      "Avoids heavy fines and business closure risks",
      "Expert guidance on site safety requirements",
      "Support for renewal and amendments"
    ],
    documents: [
      "PAN and Aadhaar of applicant / company",
      "Site plan / layout of storage facility",
      "Land ownership or lease documents",
      "NOC from local fire department",
      "Insurance documents for the facility",
      "Technical specifications of storage tanks",
      "Qualified site manager certificate"
    ]
  },
  {
    slug: "ayush-license",
    title: "AYUSH License",
    icon: "🌿",
    description: "The AYUSH License is required for manufacturing, sale, and distribution of Ayurvedic, Unani, Siddha, Homeopathic, and other traditional medicine products. YMW helps you navigate the complex state and central AYUSH regulatory requirements.",
    benefits: [
      "Legal permission to manufacture/sell AYUSH products",
      "Compliance with Drugs & Cosmetics Act for AYUSH",
      "Access to export markets for herbal / Ayurvedic products",
      "Enhanced brand credibility",
      "Eligibility for government AYUSH tenders",
      "Support for GMP compliance and inspections"
    ],
    documents: [
      "PAN and Aadhaar of applicant / proprietor / directors",
      "Factory / premises ownership or lease deed",
      "Site plan of manufacturing unit",
      "List of AYUSH products to be manufactured",
      "Technical staff qualifications (qualified Vaidya / Hakim)",
      "GMP compliance documents",
      "State Pollution Control Board NOC"
    ]
  },
  {
    slug: "mining-license",
    title: "Mining License",
    icon: "⛏️",
    description: "A Mining License (Mining Lease / Composite License) is required for extraction of minerals from land. YMW provides expert guidance for obtaining mining leases, reconnaissance permits, prospecting licenses, and related environmental clearances across Indian states.",
    benefits: [
      "Legal authority to mine specified minerals",
      "Compliance with Mines & Minerals Act",
      "Expert handling of state mining department applications",
      "Support for environmental clearances and forest NOCs",
      "Liaison with District Mines Office",
      "Support for renewal and extensions"
    ],
    documents: [
      "PAN and Aadhaar of applicant / company",
      "Land records for mining area (Khasra / Khatauni)",
      "Geological survey report (if available)",
      "Mining Plan prepared by a qualified Mining Engineer",
      "Environmental Impact Assessment (EIA) report",
      "NOC from landowner / panchayat",
      "Technical qualification of mine manager"
    ]
  },
  {
    slug: "drug-license",
    title: "Drug License",
    icon: "💊",
    description: "A Drug License is mandatory for manufacturing, sale, distribution, and storage of drugs and pharmaceuticals in India. YMW helps pharmacies, wholesale distributors, and pharmaceutical companies obtain the correct drug license from state authorities.",
    benefits: [
      "Legal authorization to sell/manufacture drugs",
      "Compliance with Drugs & Cosmetics Act 1940",
      "Required for all pharmacy and medical store operations",
      "Avoid penalties and business closure",
      "Expert guidance on retail vs wholesale license",
      "Support for renewal and additional product endorsements"
    ],
    documents: [
      "PAN and Aadhaar of proprietor / directors",
      "Pharmacy registration certificate (for retail)",
      "Premises rent agreement or ownership proof",
      "Storage area details (cold storage if required)",
      "Registered pharmacist certificate",
      "Floor plan of the premises",
      "Declaration form as required by Drug Authority"
    ]
  },
  {
    slug: "shop-establishment-registration",
    title: "Shop & Establishment Registration",
    icon: "🏬",
    description: "The Shop and Establishment Act Registration is mandatory for all commercial establishments, shops, and offices. It governs working hours, employee rights, wages, and holidays. YMW ensures quick registration with the local labour department.",
    benefits: [
      "Legal compliance for all commercial establishments",
      "Required for bank accounts and GST registration",
      "Employee welfare compliance",
      "Valid proof of business existence",
      "Protection against labour violations",
      "Required for most B2B contracts"
    ],
    documents: [
      "PAN Card and Aadhaar of proprietor / employer",
      "Proof of business address",
      "Electricity bill of the premises",
      "Details of employees (name, designation, salary)",
      "Date of commencement of business",
      "NOC from landlord (if on rented premises)"
    ]
  },
  {
    slug: "fire-noc",
    title: "Fire NOC",
    icon: "🔥",
    description: "A Fire No Objection Certificate (Fire NOC) is mandatory for commercial establishments, hotels, hospitals, factories, and multi-storey buildings. YMW assists in obtaining Fire NOC from the state fire department after ensuring all fire safety compliance requirements are met.",
    benefits: [
      "Legal compliance with fire safety laws",
      "Mandatory for building occupancy certificates",
      "Required for trade license and other business licenses",
      "Protects business from closure by authorities",
      "Advisory on fire safety equipment requirements",
      "Support for renewal and amendments"
    ],
    documents: [
      "Building plan / floor plan approved by local authority",
      "Occupancy certificate or possession letter",
      "List of fire safety equipment installed",
      "NOC from building owner (if tenant)",
      "Photographs of fire safety measures",
      "Previous Fire NOC (for renewal)",
      "Details of electrical fittings and generators"
    ]
  }
];
function getServiceBySlug(slug) {
  return GOVERNMENT_LICENSES_SERVICES.find((s) => s.slug === slug);
}
export {
  GOVERNMENT_LICENSES_SERVICES as G,
  getServiceBySlug as g
};
