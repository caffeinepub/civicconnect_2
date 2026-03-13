const TENDER_SERVICES = [
  {
    slug: "gem-registration",
    title: "GeM Registration",
    icon: "🛍️",
    description: "Government e-Marketplace (GeM) is the national procurement portal for government departments and PSUs across India. YMW Compliance helps businesses register as sellers on GeM, set up product and service listings, and secure lucrative government orders through the platform with end-to-end support.",
    benefits: [
      "Access to Rs.50,000+ Crore annual government procurement",
      "Direct selling to all central and state government buyers",
      "Transparent and time-bound payment process",
      "No middlemen — direct government contracts",
      "Wide product and service categories available",
      "Simple online registration process with our expert support"
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
    slug: "ireps-registration",
    title: "IREPS Registration",
    icon: "🚂",
    description: "IREPS (Indian Railways e-Procurement System) is the exclusive e-procurement portal for Indian Railways, one of the largest purchasers in the world. YMW Compliance handles complete vendor registration on IREPS, digital signature setup, and bid preparation to help you win railway contracts.",
    benefits: [
      "Access to Indian Railways procurement worth Rs.1 Lakh+ Crore",
      "Exclusive platform for all railway tenders and e-auctions",
      "End-to-end vendor registration and DSC setup",
      "Guidance on railway-specific technical qualification criteria",
      "Support for tender document download and bid submission",
      "Regular tender alerts for relevant product categories"
    ],
    documents: [
      "Company registration and PAN Card",
      "GST Registration Certificate",
      "Digital Signature Certificate (DSC) of authorized person",
      "Bank solvency certificate",
      "Previous work orders or experience certificates",
      "Product quality certificates (BIS, ISO, etc.) if applicable"
    ]
  },
  {
    slug: "cppp-registration",
    title: "CPPP Registration",
    icon: "🏢",
    description: "CPPP (Central Public Procurement Portal) is the unified portal for all central government ministries and departments. YMW Compliance registers your business on CPPP, sets up e-procurement credentials, and provides ongoing support for bidding on central government tenders nationwide.",
    benefits: [
      "Access to all central government ministry tenders",
      "Single registration for multiple ministry bids",
      "Expert guidance on technical and financial bid preparation",
      "Supports EMD online payment and bid security setup",
      "Regular alerts for new tenders in your category",
      "Tender tracking and status monitoring support"
    ],
    documents: [
      "Certificate of Incorporation / Business Registration",
      "GST Certificate and PAN Card",
      "DSC (Class 3) of authorized signatory",
      "Turnover certificate / CA-certified financials",
      "Experience certificates from past government clients",
      "Technical qualification documents as per tender requirements"
    ]
  },
  {
    slug: "e-procurement",
    title: "e-Procurement Portal Registration",
    icon: "💻",
    description: "State governments and PSUs operate their own e-procurement portals for state-level tenders. YMW Compliance registers your business on Jharkhand e-Procurement, NIC state portals, and major PSU platforms, and provides complete vendor qualification and bid submission support.",
    benefits: [
      "Access to state government and PSU tenders",
      "Registration on Jharkhand, SAIL, NTPC, and other portals",
      "Expert guidance on vendor pre-qualification requirements",
      "Bid document analysis and competitive strategy",
      "Technical and financial bid preparation support",
      "DSC management and portal credential handling"
    ],
    documents: [
      "Business registration and GST Certificate",
      "PAN Card of business entity",
      "DSC (Class 3) of authorized signatory",
      "MSME certificate (for preferred vendor status)",
      "Annual turnover certificate from CA",
      "Past performance / work completion certificates"
    ]
  },
  {
    slug: "defence-portal",
    title: "Defence Portal Registration",
    icon: "🛡️",
    description: "India defence procurement has opened up to domestic suppliers under Atmanirbhar Bharat. YMW Compliance assists with registration on the MoD vendor portal, DRDO procurement portal, and Defence Acquisition Portal (DAP) for businesses in defence manufacturing, supply, and services.",
    benefits: [
      "Access to growing defence procurement market",
      "Registration on MoD, DRDO, and OFB vendor portals",
      "Guidance on MSME reservation in defence procurement",
      "Support for Defence Industrial License (DIL) where required",
      "Atmanirbhar Bharat preference category registration",
      "Expert help with technical qualification and security clearance process"
    ],
    documents: [
      "Certificate of Incorporation and business registration",
      "PAN, GST, and Aadhaar of directors / proprietors",
      "MSME / Udyam Certificate (strongly preferred)",
      "Product quality and testing certifications",
      "ISO / BIS / defence-specific quality certificates",
      "Details of manufacturing facility and capacity"
    ]
  },
  {
    slug: "tender-submission",
    title: "Tender Submission Service",
    icon: "📨",
    description: "Submitting a government tender requires precise documentation, proper formatting, and meeting strict technical and commercial requirements. YMW Compliance provides end-to-end tender submission services from eligibility check to bid finalization and online submission on any government portal.",
    benefits: [
      "End-to-end tender preparation and submission support",
      "Technical bid drafting with full compliance to NIT",
      "Commercial bid preparation with competitive pricing strategy",
      "EMD and tender fee deposit coordination",
      "Document checklist and verification before submission",
      "Post-submission tracking and query response support"
    ],
    documents: [
      "NIT / Tender Document from the tendering authority",
      "Company profile and experience certificates",
      "Financial turnover certificates (last 3 years)",
      "Technical qualification documents as specified",
      "GST, PAN, and registration certificates",
      "DSC and portal credentials for submission"
    ]
  },
  {
    slug: "vendor-assessment",
    title: "Vendor Assessment",
    icon: "✅",
    description: "Many large organisations and government entities require vendors to undergo formal vendor assessment or empanelment before awarding contracts. YMW Compliance prepares your business for vendor assessment processes including quality audits, financial evaluations, and technical qualification reviews.",
    benefits: [
      "Prepares your business for vendor empanelment",
      "Covers quality, financial, and technical assessments",
      "Builds a credible vendor profile with proper documentation",
      "Increases success rate in vendor registration applications",
      "Identifies and fills gaps in qualification requirements",
      "Supports empanelment with PSUs, banks, and government bodies"
    ],
    documents: [
      "Company profile and brochure",
      "Audited financial statements (last 3 years)",
      "Past client list and project experience certificates",
      "Quality certifications (ISO, BIS, etc.)",
      "Manpower and infrastructure details",
      "Bank solvency certificate"
    ]
  },
  {
    slug: "gem-bidding",
    title: "GeM Bidding Support",
    icon: "🎯",
    description: "Winning bids on GeM requires understanding pricing strategies, eligibility criteria, and bid ranking algorithms. YMW Compliance provides dedicated GeM bidding support helping you identify relevant bids, prepare competitive quotes, manage bid submissions, and respond to buyer queries on the platform.",
    benefits: [
      "Identification of relevant GeM bids for your products and services",
      "Competitive pricing strategy based on market analysis",
      "Complete bid preparation and submission on GeM portal",
      "Response to buyer clarifications and negotiation support",
      "Order management and delivery compliance guidance",
      "GeM seller performance score improvement strategies"
    ],
    documents: [
      "GeM Seller Registration credentials",
      "Product / service catalogue with specifications",
      "Pricing and costing data",
      "Compliance certificates as required by bid",
      "Previous GeM order history (if applicable)",
      "DSC of authorized bidder"
    ]
  },
  {
    slug: "tender-documentation",
    title: "Tender Documentation",
    icon: "📁",
    description: "Proper tender documentation is critical to qualifying for government contracts. YMW Compliance prepares complete tender document sets including company profiles, experience statements, financial capability certificates, technical specifications compliance sheets, and all supporting annexures required by the NIT.",
    benefits: [
      "Complete tender document set as per NIT requirements",
      "Professional company profile and capability statement",
      "Experience certificates and project completion proofs",
      "Financial capability and turnover certificates",
      "Technical compliance sheets and data sheets",
      "Affidavits, declarations, and undertakings as required"
    ],
    documents: [
      "Tender NIT document for reference",
      "Past work orders and completion certificates",
      "Audited balance sheets and P and L statements",
      "Registration certificates (GST, MSME, ISO, etc.)",
      "Manpower and equipment list (if required by tender)",
      "Photographs of facility or product samples"
    ]
  },
  {
    slug: "emd-bank-guarantee",
    title: "EMD & Bank Guarantee Assistance",
    icon: "🏦",
    description: "EMD (Earnest Money Deposit) and Performance Bank Guarantees are mandatory financial security requirements in government tenders. YMW Compliance assists with EMD payment, bank guarantee arrangement, BG drafting as per NIT requirements, and coordination with banks for issuance and encashment.",
    benefits: [
      "Hassle-free EMD payment and refund management",
      "Bank Guarantee drafting as per NIT specifications",
      "Coordination with banks for BG issuance",
      "FDR-based EMD arrangement for small businesses",
      "BG extension and renewal management",
      "Expert guidance on BG encashment dispute resolution"
    ],
    documents: [
      "Tender NIT document specifying EMD / BG requirements",
      "Company registration and PAN Card",
      "Bank account details and banking relationships",
      "Previous tender work orders (for BG limit enhancement)",
      "CA certificate for turnover (for BG sanctioning)",
      "Letter of acceptance / LoI from tendering authority"
    ]
  }
];
const TENDER_CATEGORIES = [
  {
    key: "tender_reg",
    title: "Government Portal Registrations",
    icon: "🏗️",
    description: "5 services — GeM, IREPS, CPPP, e-Procurement, Defence Portal",
    slugs: [
      "gem-registration",
      "ireps-registration",
      "cppp-registration",
      "e-procurement",
      "defence-portal"
    ]
  },
  {
    key: "tender_support",
    title: "Tender Support Services",
    icon: "📝",
    description: "5 services — Tender Submission, Vendor Assessment, GeM Bidding, Documentation, EMD",
    slugs: [
      "tender-submission",
      "vendor-assessment",
      "gem-bidding",
      "tender-documentation",
      "emd-bank-guarantee"
    ]
  }
];
function getTenderServiceBySlug(slug) {
  return TENDER_SERVICES.find((s) => s.slug === slug);
}
export {
  TENDER_CATEGORIES as T,
  TENDER_SERVICES as a,
  getTenderServiceBySlug as g
};
