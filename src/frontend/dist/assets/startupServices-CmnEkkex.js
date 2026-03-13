const STARTUP_SERVICES = [
  {
    slug: "startup-india",
    title: "Startup India Registration",
    icon: "🚀",
    description: "Startup India Registration (DPIIT Recognition) is a flagship government scheme that unlocks tax exemptions, funding access, IPR fast-tracking, and regulatory relaxations for eligible startups. YMW Compliance guides you through the complete registration process on the Startup India portal for maximum benefits.",
    benefits: [
      "Access to income tax exemption for 3 years (Section 80-IAC)",
      "Angel Tax exemption under Section 56(2)(viib)",
      "Fast-track patent and trademark examination",
      "Eligibility for government startup funding schemes",
      "Self-certification under 6 labour and 3 environment laws",
      "DPIIT Recognition certificate and national recognition"
    ],
    documents: [
      "Certificate of Incorporation / LLP Agreement",
      "PAN Card of the startup entity",
      "Brief description of the startup innovative business idea",
      "Proof of funding (if any) or investor agreements",
      "Aadhaar Card of directors / partners",
      "Startup India portal login credentials (we assist in creation)"
    ]
  },
  {
    slug: "dpiit-recognition",
    title: "DPIIT Recognition",
    icon: "🏆",
    description: "DPIIT (Department for Promotion of Industry and Internal Trade) Recognition is the official government certification for startups in India. Recognized startups enjoy tax holidays, easier compliance, and access to government schemes worth crores. YMW Compliance handles your complete DPIIT recognition application.",
    benefits: [
      "Official government recognition for your startup",
      "Tax holidays and exemptions under Income Tax Act",
      "Access to SIDBI Fund of Funds for Startups",
      "Self-certification compliance for labour laws",
      "Easier winding-up process under Insolvency Act",
      "Eligibility for GeM procurement as startup seller"
    ],
    documents: [
      "Company / LLP / Partnership registration documents",
      "PAN and Aadhaar of directors / founders",
      "Memorandum of Association (MOA) and AOA",
      "Brief about the innovative product or service",
      "Pitch deck or business overview (optional but helpful)",
      "Prior DPIIT portal registration (we assist)"
    ]
  },
  {
    slug: "angel-tax-exemption",
    title: "Angel Tax Exemption",
    icon: "😇",
    description: "Angel Tax Exemption under Section 56(2)(viib) protects startups from being taxed on investments received above Fair Market Value. YMW Compliance assists DPIIT-recognized startups in filing Form-2 with DPIIT and obtaining the angel tax exemption certificate to secure investor confidence.",
    benefits: [
      "Protects startup from tax on angel investments above FMV",
      "Boosts investor confidence and fundraising ability",
      "Available exclusively for DPIIT-recognized startups",
      "Simplifies early-stage fundraising from Indian investors",
      "One-time application for multiple funding rounds",
      "Expert assistance with Form-2 filing and documentation"
    ],
    documents: [
      "DPIIT Recognition Certificate",
      "Certificate of Incorporation",
      "Board Resolution authorizing the fundraise",
      "Valuation report from SEBI-registered merchant banker",
      "Share subscription agreement with investors",
      "Form-2 filing on DPIIT portal (we assist)"
    ]
  },
  {
    slug: "seed-fund-scheme",
    title: "Seed Fund Scheme Registration",
    icon: "🌱",
    description: "The Startup India Seed Fund Scheme (SISFS) provides financial assistance to early-stage startups for proof of concept, prototype development, product trials, market entry, and commercialization. YMW Compliance helps eligible DPIIT-recognized startups prepare and submit funding applications through approved incubators.",
    benefits: [
      "Up to ₹20 lakh for proof of concept and prototype",
      "Up to ₹50 lakh for market entry and commercialization",
      "Non-dilutive funding — no equity given up",
      "Access through DPIIT-approved incubators",
      "Boosts startup early-stage growth trajectory",
      "Expert guidance on incubator selection and application"
    ],
    documents: [
      "DPIIT Recognition Certificate",
      "Detailed Business Plan with financial projections",
      "Proof of concept or prototype (if available)",
      "Pitch Deck",
      "Bank statements of the startup",
      "Aadhaar and PAN of founders"
    ]
  },
  {
    slug: "startup-patent",
    title: "Startup Patent Filing",
    icon: "💡",
    description: "DPIIT-recognized startups enjoy fast-tracked patent examination at 80% rebate on official filing fees. YMW Compliance assists startups with prior art search, patent drafting, Form-1/2/3/5 filing, and complete prosecution before the Indian Patent Office to secure your core innovations.",
    benefits: [
      "80% rebate on patent filing fees for DPIIT startups",
      "Expedited examination under Startup India scheme",
      "Complete prior art search and patentability assessment",
      "Expert patent drafting and claims preparation",
      "End-to-end prosecution before Indian Patent Office",
      "Protects core innovation and business IP"
    ],
    documents: [
      "DPIIT Recognition Certificate",
      "Detailed description of the invention",
      "Drawings, diagrams, or technical schematics",
      "Prior art search results (we assist)",
      "PAN and Aadhaar of inventors / applicants",
      "Assignment deed if inventors differ from applicants"
    ]
  },
  {
    slug: "business-plan",
    title: "Business Plan Preparation",
    icon: "📄",
    description: "A well-structured business plan is essential for fundraising, bank loans, government schemes, and strategic clarity. YMW Compliance business experts prepare detailed, investor-ready business plans covering market analysis, financial projections, operational strategy, and competitive landscape.",
    benefits: [
      "Investor-ready business plan for fundraising",
      "Required for bank loans, NBFCs, and government schemes",
      "Comprehensive market and competitive analysis",
      "3 to 5 year financial projections with scenario analysis",
      "Operational, HR, and marketing strategy included",
      "Professionally formatted and presentation-ready"
    ],
    documents: [
      "Overview of your business idea and target market",
      "Existing revenue or sales data (if any)",
      "Team profiles and backgrounds",
      "Current expense and cost structure",
      "Details of products / services offered",
      "Any existing traction, partnerships, or pilots"
    ]
  },
  {
    slug: "pitch-deck",
    title: "Pitch Deck Creation",
    icon: "🎯",
    description: "A compelling pitch deck is your first impression with investors. YMW Compliance creates powerful, story-driven pitch decks for startups seeking angel funding, VC investment, or government grants covering problem, solution, market size, business model, traction, and team.",
    benefits: [
      "Professional investor-grade pitch deck design",
      "Story-driven narrative that captures investor attention",
      "Covers all standard 12 to 15 slide frameworks",
      "Custom designed to match your brand identity",
      "Includes market size, business model, and financials",
      "Multiple revision rounds until you are fully satisfied"
    ],
    documents: [
      "Business overview and mission statement",
      "Product or service description and USP",
      "Target market and customer segments",
      "Revenue model and pricing strategy",
      "Traction metrics (users, revenue, pilots)",
      "Team profiles with photos and LinkedIn URLs"
    ]
  },
  {
    slug: "mca-roc-compliance",
    title: "MCA ROC Compliance",
    icon: "🏗️",
    description: "All registered companies and LLPs must file annual returns, financial statements, and event-based forms with the Registrar of Companies (ROC). YMW Compliance handles all MCA filings including AOC-4, MGT-7, ADT-1, DIR-3 KYC, and more to keep your company fully compliant.",
    benefits: [
      "Annual return (MGT-7) and financial statement (AOC-4) filing",
      "Avoids MCA penalties and company strike-off",
      "Director KYC (DIR-3 KYC) renewal every year",
      "Event-based filings for changes in directors, address, capital",
      "Board meeting minutes and statutory register maintenance",
      "Expert support for DIN, DSC, and MCA portal issues"
    ],
    documents: [
      "Certificate of Incorporation and MOA / AOA",
      "Financial statements for the year",
      "List of directors and their DIN / Aadhaar / PAN",
      "Board resolution for filing authorization",
      "Previous year filed documents",
      "DSC of authorized directors"
    ]
  },
  {
    slug: "annual-compliance",
    title: "Annual Compliance Package",
    icon: "📅",
    description: "Our Annual Compliance Package provides comprehensive compliance management for startups and SMEs covering ROC filings, GST returns, income tax returns, professional tax, and PF/ESI compliance all under a single affordable plan so you never miss a deadline.",
    benefits: [
      "All-in-one compliance management for your business",
      "ROC, GST, Income Tax, PT, PF and ESI all covered",
      "Never miss a deadline with our proactive reminder system",
      "Dedicated compliance manager for your account",
      "Significant cost saving vs. hiring in-house",
      "Annual audit support and filing confirmation"
    ],
    documents: [
      "All business registration certificates",
      "Bank statements for the compliance year",
      "Invoices, purchase bills, and expense records",
      "Salary register and employee details",
      "Previous year tax returns and ROC filings",
      "GST portal login credentials"
    ]
  },
  {
    slug: "virtual-cfo",
    title: "Virtual CFO Services",
    icon: "📉",
    description: "Our Virtual CFO service gives startups and growing businesses access to senior financial expertise at a fraction of the cost. YMW provides strategic financial planning, MIS reporting, investor reporting, cash flow management, fundraising support, and board-level financial advisory.",
    benefits: [
      "Senior CFO expertise without full-time hiring cost",
      "Monthly MIS reports and management dashboards",
      "Cash flow forecasting and working capital management",
      "Fundraising support and investor due diligence readiness",
      "Board-level financial strategy and decision support",
      "Tax planning and optimisation across all direct and indirect taxes"
    ],
    documents: [
      "Audited financial statements (last 2 to 3 years)",
      "Bank statements and cash flow records",
      "Existing investor agreements and cap table",
      "Accounts receivable and payable registers",
      "Current tax filing status",
      "Business projections or existing financial models"
    ]
  }
];
const STARTUP_CATEGORIES = [
  {
    key: "startup_reg",
    title: "Startup Registrations",
    icon: "🚀",
    description: "5 services — Startup India, DPIIT, Angel Tax, Seed Fund, Patent",
    slugs: [
      "startup-india",
      "dpiit-recognition",
      "angel-tax-exemption",
      "seed-fund-scheme",
      "startup-patent"
    ]
  },
  {
    key: "startup_support",
    title: "Startup Support Services",
    icon: "💡",
    description: "5 services — Business Plan, Pitch Deck, MCA ROC, Annual Compliance, Virtual CFO",
    slugs: [
      "business-plan",
      "pitch-deck",
      "mca-roc-compliance",
      "annual-compliance",
      "virtual-cfo"
    ]
  }
];
function getStartupServiceBySlug(slug) {
  return STARTUP_SERVICES.find((s) => s.slug === slug);
}
export {
  STARTUP_CATEGORIES as S,
  STARTUP_SERVICES as a,
  getStartupServiceBySlug as g
};
