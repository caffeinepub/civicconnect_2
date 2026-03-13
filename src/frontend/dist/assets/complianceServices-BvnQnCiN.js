const COMPLIANCE_SERVICES = [
  {
    slug: "pf-registration",
    title: "PF Registration (Provident Fund)",
    icon: "🏦",
    description: "Provident Fund (PF) Registration under EPFO is mandatory for establishments with 20 or more employees. YMW Compliance ensures smooth PF registration, monthly compliance, and complete ECR filing support so your business remains fully compliant.",
    benefits: [
      "Legal compliance under EPF & MP Act 1952",
      "Protects employees with retirement savings",
      "Mandatory for all companies with 20+ employees",
      "Avoids heavy penalties and prosecution",
      "ECR and monthly return filing support",
      "Expert liaison with EPFO office"
    ],
    documents: [
      "PAN Card and Aadhaar of all directors / proprietor",
      "Certificate of Incorporation / Partnership Deed",
      "List of employees with salary details",
      "Business address proof",
      "Bank account details of the company",
      "Cancelled cheque of company account"
    ]
  },
  {
    slug: "esi-registration",
    title: "ESI Registration (Employee State Insurance)",
    icon: "🏥",
    description: "ESI Registration is mandatory for establishments with 10 or more employees drawing wages up to ₹21,000/month. YMW Compliance handles ESIC registration, monthly contribution filing, and employee card issuance to ensure full compliance.",
    benefits: [
      "Provides medical, sickness, maternity benefits to employees",
      "Mandatory for 10+ employee establishments",
      "Avoids penalties under ESIC Act 1948",
      "Monthly contribution and return filing support",
      "Employee IP card and portal access setup",
      "Ongoing compliance management"
    ],
    documents: [
      "PAN and Aadhaar of directors / proprietor",
      "Certificate of Incorporation / GST Certificate",
      "List of employees with salary and date of joining",
      "Bank account details",
      "Business address proof",
      "Cancelled cheque"
    ]
  },
  {
    slug: "contract-labour-license",
    title: "Contract Labour License",
    icon: "👷",
    description: "The Contract Labour (Regulation & Abolition) Act License is required for principal employers engaging 20+ contract workers and contractors supplying 20+ workers. YMW manages Form I/II application, liaison with Labour Commissioner, and ongoing compliance.",
    benefits: [
      "Legal compliance under CLRA Act 1970",
      "Mandatory for principal employers and contractors",
      "Avoids penalties and prosecution",
      "Expert handling of Labour Commissioner process",
      "Annual renewal support",
      "Contractor registration and compliance guidance"
    ],
    documents: [
      "PAN and Aadhaar of employer / contractor",
      "Certificate of Incorporation / firm registration",
      "List of contract workers deployed",
      "Nature of work and site address",
      "Proof of principal employer agreement",
      "Treasury challan / fee payment"
    ]
  },
  {
    slug: "professional-tax-registration",
    title: "Professional Tax Registration",
    icon: "💼",
    description: "Professional Tax is a state-level tax imposed on employment income and is mandatory in most states. YMW helps businesses obtain Professional Tax Enrollment Certificate (PTEC) and Registration Certificate (PTRC), file monthly/quarterly returns, and maintain compliance.",
    benefits: [
      "State law compliance across Jharkhand, Maharashtra, West Bengal, etc.",
      "Mandatory for all businesses with paid employees",
      "PTEC for business / PTRC for employer registration",
      "Avoids penalties for non-registration and late filing",
      "Monthly / quarterly return filing support",
      "Deduction management for employees"
    ],
    documents: [
      "PAN Card and Aadhaar of applicant",
      "Business registration certificate",
      "Salary register or employee details",
      "Business address proof",
      "Bank account details",
      "State-specific forms as required"
    ]
  },
  {
    slug: "msme-udyam-registration",
    title: "MSME / Udyam Registration",
    icon: "🏭",
    description: "MSME Udyam Registration is a government recognition for micro, small, and medium enterprises. It unlocks priority lending, subsidies, government tenders, and tax benefits. YMW ensures accurate Udyam Registration and post-registration compliance.",
    benefits: [
      "Access to collateral-free MSME loans",
      "Priority sector lending at lower interest",
      "Eligible for government subsidies and schemes",
      "Protection under MSMED Act against delayed payments",
      "Preference in government procurement and tenders",
      "Easy registration with Aadhaar-based process"
    ],
    documents: [
      "Aadhaar Card of proprietor / managing partner / director",
      "PAN Card of business",
      "Business bank account details",
      "NIC Code of business activity",
      "Investment and turnover details",
      "GSTIN (if applicable)"
    ]
  },
  {
    slug: "import-export-code",
    title: "Import Export Code (IEC)",
    icon: "🌏",
    description: "Import Export Code (IEC) is a 10-digit business identification number mandatory for businesses engaged in import or export of goods/services. YMW provides end-to-end IEC registration with DGFT and helps you start global trading quickly.",
    benefits: [
      "Mandatory for all importers and exporters in India",
      "Lifetime validity — no renewal required",
      "Access to export incentives (RoDTEP, MEIS, etc.)",
      "Required for bank foreign exchange transactions",
      "Enables customs clearance for imports and exports",
      "Quick online registration with DGFT portal"
    ],
    documents: [
      "PAN Card of business / proprietor",
      "Aadhaar Card of applicant",
      "Bank certificate or cancelled cheque",
      "Business address proof",
      "Passport-size photograph of applicant",
      "Digital signature (if applicable)"
    ]
  },
  {
    slug: "gem-registration",
    title: "GeM Registration",
    icon: "🛒",
    description: "Government e-Marketplace (GeM) is the national procurement portal for government departments and PSUs. YMW Compliance helps businesses register as sellers on GeM, set up product/service listings, and secure government orders through the platform.",
    benefits: [
      "Access to ₹50,000+ Crore annual government procurement",
      "Direct selling to all central and state government buyers",
      "Transparent and time-bound payment process",
      "No middlemen — direct government contracts",
      "Wide product and service categories available",
      "Simple online registration process with our support"
    ],
    documents: [
      "PAN Card of business",
      "Aadhaar Card of authorized signatory",
      "MSME / Udyam Registration (preferred)",
      "GST Registration Certificate",
      "Bank account details and cancelled cheque",
      "Business address proof"
    ]
  },
  {
    slug: "rera-registration",
    title: "RERA Registration",
    icon: "🏗️",
    description: "Real Estate Regulatory Authority (RERA) Registration is mandatory for real estate developers and agents under the RERA Act 2016. YMW provides complete RERA project and agent registration, compliance support, and renewal services across India.",
    benefits: [
      "Legal compliance under Real Estate (Regulation & Development) Act",
      "Mandatory for projects with 500+ sq.m. or 8+ units",
      "Builds buyer trust and project credibility",
      "Avoids heavy penalties and project stoppage",
      "Quarterly update and compliance filing support",
      "Expert guidance for agent registration and renewal"
    ],
    documents: [
      "PAN and Aadhaar of promoter / director",
      "Certificate of Incorporation",
      "Land title / ownership documents",
      "Approved building plan",
      "Project financial details and escrow account",
      "Encumbrance certificate"
    ]
  }
];
const COMPLIANCE_CATEGORIES = [
  {
    key: "labour",
    title: "Labour & Employment Compliance",
    icon: "👷",
    description: "4 services — PF, ESI, Contract Labour, Professional Tax",
    slugs: [
      "pf-registration",
      "esi-registration",
      "contract-labour-license",
      "professional-tax-registration"
    ]
  },
  {
    key: "registration",
    title: "Government Registrations",
    icon: "🏛️",
    description: "4 services — MSME, IEC, GeM, RERA",
    slugs: [
      "msme-udyam-registration",
      "import-export-code",
      "gem-registration",
      "rera-registration"
    ]
  }
];
function getComplianceServiceBySlug(slug) {
  return COMPLIANCE_SERVICES.find((s) => s.slug === slug);
}
export {
  COMPLIANCE_CATEGORIES as C,
  COMPLIANCE_SERVICES as a,
  getComplianceServiceBySlug as g
};
