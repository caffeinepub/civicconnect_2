const BUSINESS_REGISTRATION_SERVICES = [
  // ── Company Registration ──
  {
    slug: "private-limited-company",
    icon: "🏢",
    title: "Private Limited Company Registration",
    category: "company",
    description: "A Private Limited Company is India's most preferred business structure for startups and growing enterprises. It offers limited liability protection to shareholders, making it ideal for raising investment. With a separate legal identity, it can own property, enter contracts, and sue or be sued in its own name.",
    benefits: [
      "Separate legal entity from its members",
      "Limited liability — personal assets are protected",
      "Easy to attract venture capital and angel investors",
      "Perpetual succession — unaffected by changes in ownership",
      "Higher credibility with clients, banks, and partners",
      "Flexible share transfer and expansion options"
    ],
    documents: [
      "PAN Card of all directors and shareholders",
      "Aadhaar Card / Passport / Voter ID (identity proof)",
      "Bank statement / utility bill (address proof)",
      "Passport-size photographs of all directors",
      "Proof of registered office address (rent agreement + NOC)",
      "Digital Signature Certificate (DSC) for directors"
    ]
  },
  {
    slug: "llp-registration",
    icon: "🤝",
    title: "Limited Liability Partnership (LLP) Registration",
    category: "company",
    description: "An LLP combines the flexibility of a partnership with the limited liability protection of a company. It is the preferred structure for professional firms, consultants, and small businesses. Partners are not personally liable for the debts of the LLP, and compliance requirements are lighter than a Private Limited Company.",
    benefits: [
      "Partners enjoy limited liability protection",
      "Lower compliance burden compared to Pvt Ltd",
      "Flexible profit-sharing and management structure",
      "No minimum capital requirement",
      "Perpetual existence independent of partners",
      "Suitable for professionals and service businesses"
    ],
    documents: [
      "PAN Card of all designated partners",
      "Aadhaar / Passport / Voter ID of all partners",
      "Bank statement / utility bill (address proof)",
      "Passport-size photographs",
      "Proof of registered office (rent agreement + NOC)",
      "Digital Signature Certificate (DSC)"
    ]
  },
  {
    slug: "one-person-company",
    icon: "👤",
    title: "One Person Company Registration",
    category: "company",
    description: "An OPC is designed for solo entrepreneurs who want to enjoy the benefits of a corporate structure — limited liability and a separate legal entity — without needing multiple shareholders. It allows a single founder to run a company with full control while having the credibility of an incorporated business.",
    benefits: [
      "Single promoter can form a company",
      "Limited liability — personal assets are safe",
      "Corporate status improves business credibility",
      "Easier to get bank loans and funding",
      "Lower compliance vs. Private Limited Company",
      "Perpetual succession via nomination"
    ],
    documents: [
      "PAN Card of the sole member and nominee",
      "Aadhaar / Passport / Voter ID (identity proof)",
      "Bank statement / utility bill (address proof)",
      "Passport-size photographs",
      "Nominee consent form (Form INC-3)",
      "Proof of registered office (rent agreement + NOC)"
    ]
  },
  {
    slug: "sole-proprietorship",
    icon: "🏪",
    title: "Sole Proprietorship Registration",
    category: "company",
    description: "A Sole Proprietorship is the simplest and most common form of business in India, ideal for individual traders, freelancers, and small shopkeepers. There are no formal registration requirements, but obtaining business licences, GST registration, and a current bank account establishes legal credibility and enables growth.",
    benefits: [
      "Easiest and cheapest business to start",
      "Full control over business decisions",
      "Minimal compliance requirements",
      "All profits go directly to the owner",
      "Quick to set up with no complex paperwork",
      "Easy to close or modify the business"
    ],
    documents: [
      "PAN Card of the owner",
      "Aadhaar Card of the owner",
      "Bank statement / utility bill (address proof)",
      "Business address proof (rent agreement / ownership docs)",
      "GST Registration (if turnover exceeds threshold)",
      "Shop & Establishment Act Registration (optional)"
    ]
  },
  {
    slug: "partnership-firm",
    icon: "👥",
    title: "Partnership Firm Registration",
    category: "company",
    description: "A Partnership Firm allows two or more persons to carry on a business together and share its profits and losses as per a mutually agreed deed. While informal partnerships can exist, formal registration under the Indian Partnership Act provides legal recognition, the ability to sue and be sued, and strengthens your banking and contractual relationships.",
    benefits: [
      "Easy to form with minimal formalities",
      "Combined capital and skills of multiple partners",
      "Flexible management structure",
      "Simple profit-sharing as per deed",
      "Lower compliance than a company",
      "Registered firm can enforce contracts in court"
    ],
    documents: [
      "PAN Cards of all partners",
      "Aadhaar / Passport / Voter ID of all partners",
      "Signed Partnership Deed on stamp paper",
      "Address proof of business premises",
      "Passport-size photographs of all partners",
      "Bank account opening documents"
    ]
  },
  {
    slug: "farmer-producer-company",
    icon: "🌾",
    title: "Farmer Producer Company Registration",
    category: "company",
    description: "A Farmer Producer Company (FPC) empowers agricultural producers — farmers, artisans, and rural producers — to come together, pool resources, and collectively access better markets, technology, and credit. FPCs bridge the gap between individual farmers and larger supply chains, helping them get fair prices and sustainable income.",
    benefits: [
      "Collective bargaining power for better prices",
      "Access to government subsidies and schemes",
      "Limited liability protection for members",
      "Eligibility for NABARD and bank credit",
      "Income tax exemption benefits",
      "Improved market access and supply chain integration"
    ],
    documents: [
      "PAN Cards of at least 10 farmer members (primary producers)",
      "Aadhaar and address proof of all members",
      "Proof of agricultural activity (land records / Kisan card)",
      "Proposed company name and objectives",
      "Details of the registered office address",
      "Consent letters from all founding members"
    ]
  },
  {
    slug: "section-8-company",
    icon: "🏛️",
    title: "Section 8 Company Registration",
    category: "company",
    description: "A Section 8 Company is registered under the Companies Act for non-profit purposes — promoting education, arts, science, sports, social welfare, and charitable activities. Unlike an NGO, it has the structure of a limited company, offering greater credibility and governance while ensuring that profits are reinvested into the organisation's objectives.",
    benefits: [
      "Recognised non-profit corporate entity",
      "Eligible for income tax exemptions (12A & 80G)",
      "Higher credibility for CSR and donor funding",
      "Can receive grants from central and state governments",
      "No minimum share capital required",
      "Strong governance framework"
    ],
    documents: [
      "PAN Cards of all directors",
      "Aadhaar / Passport / Voter ID of directors",
      "Bank statement / utility bill (address proof)",
      "Memorandum and Articles of Association (draft)",
      "Declaration of non-profit objectives",
      "Proof of registered office address"
    ]
  },
  // ── NGO & Trust ──
  {
    slug: "ngo-registration",
    icon: "🌍",
    title: "NGO Registration",
    category: "ngo",
    description: "An NGO (Non-Governmental Organisation) is a voluntary, non-profit entity that works for social welfare, education, healthcare, environment, and community development. Registering your NGO gives it legal recognition, enables fundraising, and makes it eligible for government grants, CSR funds, and foreign contributions (FCRA).",
    benefits: [
      "Legal identity and recognition",
      "Eligible to receive donations and grants",
      "Access to government and CSR funding",
      "Tax exemption under 12A and 80G",
      "Greater credibility with donors and partners",
      "Can apply for FCRA for foreign contributions"
    ],
    documents: [
      "PAN Cards of all founders / trustees",
      "Aadhaar / Passport / Voter ID of all founders",
      "Passport-size photographs",
      "Trust Deed / MOA / Partnership Deed (as applicable)",
      "Proof of registered office address",
      "Objectives and activities declaration"
    ]
  },
  {
    slug: "society-registration",
    icon: "🏘️",
    title: "Society Registration",
    category: "ngo",
    description: "A Society is a group of people coming together for literary, scientific, cultural, educational, or charitable purposes. Registered under the Societies Registration Act, 1860, a society is a separate legal entity that can own property, open bank accounts, and enter into contracts. It is commonly used for clubs, welfare organisations, and educational trusts.",
    benefits: [
      "Separate legal entity with perpetual succession",
      "Democratic, member-driven governance",
      "Can receive donations, grants, and government funds",
      "Eligible for 12A and 80G tax exemptions",
      "Can own immovable and movable property",
      "Suitable for cultural, educational, and charitable activities"
    ],
    documents: [
      "PAN Cards of all founding members (minimum 7)",
      "Aadhaar / Voter ID of all members",
      "Memorandum of Association (MoA)",
      "Rules and Regulations of the Society",
      "Address proof of registered office",
      "Affidavit by president/secretary"
    ]
  },
  {
    slug: "charitable-trust",
    icon: "💝",
    title: "Charitable Trust Registration",
    category: "ngo",
    description: "A Charitable Trust is created by a trust deed to manage property or funds for specific charitable purposes such as education, healthcare, poverty relief, or community development. It is governed by the Indian Trusts Act, 1882. A registered trust offers legal transparency, tax advantages, and credibility to donors and grantors.",
    benefits: [
      "Clear legal framework for managing assets",
      "Eligible for 12A (income tax exemption)",
      "Donors can claim 80G deduction",
      "Builds confidence among donors and beneficiaries",
      "Perpetual existence irrespective of trustee changes",
      "Eligible for government and CSR grants"
    ],
    documents: [
      "Trust Deed on non-judicial stamp paper",
      "PAN Cards of settler and trustees",
      "Aadhaar / Passport / Voter ID of trustees",
      "Passport-size photographs of trustees",
      "Proof of trust's registered office address",
      "NOC from property owner (if rented)"
    ]
  },
  {
    slug: "csr1-registration",
    icon: "📋",
    title: "CSR-1 Registration",
    category: "ngo",
    description: "CSR-1 is a mandatory registration on the MCA portal for NGOs, Trusts, and Societies wishing to receive Corporate Social Responsibility funds from companies. Under the Companies Act 2013, companies with prescribed turnover / profit must spend 2% of net profits on CSR — and can only channel these funds to organisations holding a valid CSR-1 registration.",
    benefits: [
      "Eligibility to receive CSR funds from corporates",
      "Listed on the MCA portal for easy discovery by companies",
      "Enhances credibility with corporate donors",
      "Unique CSR registration number issued by MCA",
      "Mandatory for NGOs seeking corporate partnerships",
      "Helps build long-term corporate relationships"
    ],
    documents: [
      "PAN of the organisation",
      "Registration certificate (Trust / Society / Section 8 / NGO)",
      "12A and 80G certificates (if available)",
      "FCRA registration (if applicable)",
      "Audited financial statements (last 3 years)",
      "Activity report of the organisation"
    ]
  },
  {
    slug: "12a-registration",
    icon: "📄",
    title: "12A Registration",
    category: "ngo",
    description: "Section 12A of the Income Tax Act grants income tax exemption to charitable and religious trusts, societies, and Section 8 companies. Once registered under 12A, the organisation's income is exempt from income tax — provided it is applied for charitable purposes. It is a prerequisite for many government grants and FCRA registration.",
    benefits: [
      "Complete income tax exemption on surplus income",
      "Prerequisite for 80G (donor tax benefit) registration",
      "Required for FCRA (foreign contribution) registration",
      "Enhances trust and credibility with donors",
      "One-time permanent registration (with periodic renewal)",
      "Enables access to government and institutional grants"
    ],
    documents: [
      "Registration certificate of Trust / Society / Section 8",
      "Trust Deed / MOA / Charter document",
      "PAN Card of the organisation",
      "Audited balance sheets and income-expenditure statements (3 years)",
      "List of trustees / managing committee members",
      "Activity report of the organisation"
    ]
  },
  {
    slug: "80g-registration",
    icon: "💰",
    title: "80G Registration",
    category: "ngo",
    description: "Section 80G of the Income Tax Act allows donors to claim a deduction on the amount donated to eligible charitable organisations. Getting 80G registration for your NGO or trust significantly increases donor motivation, as their contribution becomes tax-deductible. It is one of the most sought-after registrations for fundraising NGOs.",
    benefits: [
      "Donors can claim 50%–100% tax deduction",
      "Significantly boosts fundraising potential",
      "Adds credibility and trustworthiness to your organisation",
      "Attracts corporate and individual donors",
      "Applicable to trusts, societies, and Section 8 companies",
      "Periodic renewal ensures continued compliance"
    ],
    documents: [
      "12A registration certificate",
      "Registration certificate of the organisation",
      "PAN Card of the organisation",
      "Audited accounts (last 3 years)",
      "List of activities and beneficiaries",
      "Details of trustees / managing committee"
    ]
  },
  {
    slug: "ngo-darpan",
    icon: "🗂️",
    title: "NGO Darpan Registration",
    category: "ngo",
    description: "NGO Darpan is an online platform managed by NITI Aayog and NIC where NGOs, Voluntary Organisations, and other civil society organisations can register and receive a unique ID. This registration is mandatory for accessing government grants, central ministry funds, FCRA renewals, and CSR-1 filings. It improves transparency and enables real-time tracking.",
    benefits: [
      "Unique NGO Darpan ID from NITI Aayog",
      "Mandatory for central government grants",
      "Required for FCRA registration and renewal",
      "Helps CSR-1 registration process",
      "Increases transparency and public trust",
      "Enables online monitoring and reporting"
    ],
    documents: [
      "Registration certificate (Trust / Society / Section 8)",
      "PAN Card of the organisation",
      "12A and 80G certificates (if available)",
      "Bank account details of the organisation",
      "Details of key members / trustees",
      "Organisation's objectives and activities"
    ]
  },
  {
    slug: "niti-aayog-registration",
    icon: "🇮🇳",
    title: "NITI Aayog Registration",
    category: "ngo",
    description: "NITI Aayog registration (through the NGO Darpan portal) provides your organisation with national recognition and a unique identity on the government's digital platform. It is increasingly required for government scheme eligibility, policy dialogue, and accessing central ministry funds. This registration signals organisational transparency and accountability at the national level.",
    benefits: [
      "National-level recognition from NITI Aayog",
      "Eligibility for central ministry funding schemes",
      "Enables participation in government policy forums",
      "Strengthens credibility for donor due diligence",
      "Supports FCRA and CSR compliance",
      "Demonstrates organisational accountability"
    ],
    documents: [
      "Registration certificate of the organisation",
      "PAN Card of the organisation",
      "12A registration (preferred)",
      "Bank account details",
      "Audited financial statements",
      "List of governing body / trustees with IDs"
    ]
  }
];
function getServiceBySlug(slug) {
  return BUSINESS_REGISTRATION_SERVICES.find((s) => s.slug === slug);
}
const COMPANY_SERVICES = BUSINESS_REGISTRATION_SERVICES.filter(
  (s) => s.category === "company"
);
const NGO_SERVICES = BUSINESS_REGISTRATION_SERVICES.filter(
  (s) => s.category === "ngo"
);
export {
  COMPANY_SERVICES as C,
  NGO_SERVICES as N,
  getServiceBySlug as g
};
