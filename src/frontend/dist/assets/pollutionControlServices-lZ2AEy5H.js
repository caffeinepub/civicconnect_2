const POLLUTION_CONTROL_SERVICES = [
  {
    slug: "cte-cto-certificate",
    title: "CTE / CTO Certificate (Consent to Establish / Operate)",
    icon: "🏭",
    description: "Consent to Establish (CTE) and Consent to Operate (CTO) are mandatory approvals from the State Pollution Control Board (SPCB) required before setting up or operating any industry that may pollute air or water. YMW Compliance provides end-to-end assistance in obtaining CTE/CTO from Jharkhand SPCB and all state PCBs across India.",
    benefits: [
      "Legal authorization to establish and operate your industry",
      "Avoid heavy penalties and factory shutdown",
      "Mandatory for factory license and bank loans",
      "Required for mining and industrial operations",
      "Enables compliance with Water and Air Act",
      "Renewal support every 1–5 years"
    ],
    documents: [
      "Company registration certificate (PAN, GST, CIN/LLPIN)",
      "Site/land documents (ownership or lease deed)",
      "Proof of business activity (project report/DPR)",
      "Layout plan of the factory/facility",
      "List of raw materials and products",
      "Details of pollution control equipment installed",
      "Water consumption and effluent discharge details",
      "Air emission source details"
    ],
    process: [
      {
        title: "Free Consultation",
        desc: "Our expert reviews your industry type, location, and PCB category (Red, Orange, Green) and advises on requirements."
      },
      {
        title: "Document Preparation",
        desc: "We prepare the complete application including project report, layout, and pollution control details."
      },
      {
        title: "Online Application Filing",
        desc: "Application is submitted on the state PCB portal with all required documents."
      },
      {
        title: "Inspection Coordination",
        desc: "We coordinate with PCB officials for site inspection and address any queries."
      },
      {
        title: "CTE / CTO Issuance",
        desc: "Upon approval, CTE (for new units) or CTO (for operational units) certificate is issued."
      },
      {
        title: "Renewal Support",
        desc: "We provide timely renewal reminders and filing support to keep your consent valid."
      }
    ],
    faqs: [
      {
        q: "Who needs CTE/CTO from Pollution Control Board?",
        a: "Any industry engaged in manufacturing, mining, processing, or any activity that may cause air or water pollution requires CTE/CTO from the SPCB."
      },
      {
        q: "What is the difference between CTE and CTO?",
        a: "CTE (Consent to Establish) is required before setting up a new unit. CTO (Consent to Operate) is required before starting operations."
      },
      {
        q: "How long does the process take?",
        a: "Typically 30–90 days depending on the industry category and state PCB. Red category industries take longer due to detailed scrutiny."
      },
      {
        q: "What if I operate without CTE/CTO?",
        a: "Operating without valid CTE/CTO can result in closure orders, heavy fines (up to ₹1 lakh/day), and criminal prosecution under the Water Act and Air Act."
      },
      {
        q: "How often does CTE/CTO need renewal?",
        a: "CTO is typically renewed every 1–5 years depending on the industry category. We provide timely renewal support."
      }
    ]
  },
  {
    slug: "epr-registration",
    title: "EPR Registration (Extended Producer Responsibility)",
    icon: "♻️",
    description: "Extended Producer Responsibility (EPR) Registration is mandatory for producers, importers, and brand owners of plastic packaging, e-waste, batteries, and tyre waste under the EPR framework notified by the Ministry of Environment, Forest and Climate Change (MoEFCC). YMW Compliance provides complete EPR registration and compliance support.",
    benefits: [
      "Legal compliance under EPR regulations",
      "Avoid heavy penalties for non-compliance",
      "Required for import of goods with plastic/e-waste packaging",
      "Access to EPR certificate for brand owners",
      "Support for annual EPR return filing",
      "Complete guidance on EPR targets and fulfillment"
    ],
    documents: [
      "Company registration documents (PAN, GST, CIN)",
      "Import Export Code (IEC) if importer",
      "Product category and annual production/import data",
      "Details of plastic/e-waste/battery packaging used",
      "Authorization from Pollution Control Board (if applicable)",
      "Board resolution authorizing signatory"
    ]
  },
  {
    slug: "plastic-waste-authorization",
    title: "Plastic Waste Authorization",
    icon: "🧴",
    description: "Plastic Waste Authorization is required under the Plastic Waste Management Rules for manufacturers, importers, producers, and brand owners dealing with plastic packaging. The authorization is issued by the State Pollution Control Board (SPCB) or the Central Pollution Control Board (CPCB) depending on the scale of operations.",
    benefits: [
      "Legal authorization to manufacture/use plastic packaging",
      "Avoid penalties under Plastic Waste Management Rules",
      "Required for import clearance of goods in plastic packaging",
      "Enables compliance with EPR obligations",
      "Annual return filing support included",
      "Guidance on plastic waste collection and recycling"
    ],
    documents: [
      "Company registration documents",
      "GST registration certificate",
      "Details of plastic packaging used/manufactured",
      "Annual production/import volume data",
      "IEC (for importers)",
      "CTE/CTO (if manufacturer)"
    ]
  },
  {
    slug: "e-waste-authorization",
    title: "E-Waste Recycling Authorization",
    icon: "💻",
    description: "E-Waste Recycling Authorization is required for producers, refurbishers, recyclers, and dismantlers of electronic and electrical equipment under the E-Waste Management Rules. Issued by the Central Pollution Control Board (CPCB), this authorization ensures responsible e-waste management.",
    benefits: [
      "Legal authorization for e-waste collection, recycling, and disposal",
      "Compliance with E-Waste Management Rules, 2022",
      "Required for import and manufacturing of EEE products",
      "Avoid penalties and prosecution for unauthorized e-waste handling",
      "Access to EPR portal for e-waste compliance",
      "Annual return and EPR target fulfillment support"
    ],
    documents: [
      "Company registration documents",
      "List of electrical/electronic products manufactured or imported",
      "Details of collection/dismantling/recycling facility",
      "IEC (for importers)",
      "Environmental compliance certificates",
      "Authorization from SPCB (if applicable)"
    ]
  },
  {
    slug: "hazardous-waste-noc",
    title: "Hazardous Waste Management NOC",
    icon: "⚠️",
    description: "Industries generating, handling, storing, or disposing of hazardous waste must obtain authorization from the State Pollution Control Board (SPCB) under the Hazardous and Other Wastes (Management and Transboundary Movement) Rules. YMW Compliance provides complete assistance for hazardous waste authorization and annual returns.",
    benefits: [
      "Legal authorization for hazardous waste handling and disposal",
      "Avoid heavy penalties and closure orders",
      "Required for mining, chemical, pharmaceutical, and metal industries",
      "Enables safe and compliant waste disposal",
      "Annual return filing support",
      "Guidance on waste storage, transport, and disposal"
    ],
    documents: [
      "CTE/CTO certificate from SPCB",
      "Company registration documents",
      "List of hazardous wastes generated with quantities",
      "Hazardous waste storage facility details and layout",
      "Agreement with authorized hazardous waste recycler/disposer",
      "Emergency response plan"
    ]
  },
  {
    slug: "biomedical-waste-license",
    title: "Biomedical Waste License",
    icon: "🏥",
    description: "Hospitals, clinics, diagnostic labs, blood banks, and other healthcare facilities must obtain Biomedical Waste Authorization from the SPCB under the Biomedical Waste Management Rules. YMW Compliance ensures complete authorization and annual compliance for healthcare facilities.",
    benefits: [
      "Legal authorization for biomedical waste generation and disposal",
      "Compliance with Biomedical Waste Management Rules, 2016",
      "Avoid penalties and healthcare facility closure",
      "Mandatory for NABH accreditation",
      "Guidance on color-coded waste segregation",
      "Renewal and annual return support"
    ],
    documents: [
      "Registration of healthcare facility (PCPNDT, Clinical Establishment Act)",
      "List of biomedical waste categories generated",
      "Agreement with authorized biomedical waste treatment facility (CBWTF)",
      "Layout of waste storage area",
      "Details of waste collection, transport, and disposal",
      "Staff training records on biomedical waste management"
    ]
  },
  {
    slug: "cgwa-water-boring",
    title: "CGWA Water Boring / NOC",
    icon: "💧",
    description: "Any individual, industry, or institution intending to extract groundwater through boring or tube-well must obtain a No Objection Certificate (NOC) from the Central Ground Water Authority (CGWA). This is mandatory across India and is required for industries, hotels, housing societies, and commercial establishments.",
    benefits: [
      "Legal authorization for groundwater extraction",
      "Avoid penalties under Environment Protection Act",
      "Required for factory, hotel, and commercial building permissions",
      "Ensures sustainable groundwater use",
      "Enables water connection from local bodies",
      "Certificate valid with annual compliance requirements"
    ],
    documents: [
      "Company/entity registration documents",
      "Site location map and coordinates",
      "Purpose and quantum of groundwater required",
      "Details of existing water source (if any)",
      "Water audit report (for large users)",
      "Building plan approval (for commercial/industrial)"
    ]
  },
  {
    slug: "scrap-import-pollution-noc",
    title: "Scrap Import Pollution NOC (Ferrous & Non-Ferrous)",
    icon: "🔩",
    description: "Import of ferrous and non-ferrous scrap requires a Pre-Shipment Inspection Certificate and a Pollution NOC from the SPCB/CPCB to ensure the imported material is free from hazardous substances. YMW Compliance assists importers in obtaining this NOC and fulfilling all pollution control requirements for scrap import.",
    benefits: [
      "Legal clearance for import of ferrous/non-ferrous scrap",
      "Avoids customs detention and demurrage charges",
      "Required by CPCB/SPCB for scrap import authorization",
      "Compliance with Hazardous Waste Rules for import",
      "Support for CPCB registration of scrap importers",
      "Annual return filing support"
    ],
    documents: [
      "IEC (Import Export Code)",
      "Company registration documents",
      "CTE/CTO from SPCB for the facility",
      "Details of scrap type, quantity, and origin country",
      "Pre-Shipment Inspection Certificate",
      "CPCB registration for scrap import (if applicable)"
    ]
  }
];
function getServiceBySlug(slug) {
  return POLLUTION_CONTROL_SERVICES.find((s) => s.slug === slug);
}
export {
  POLLUTION_CONTROL_SERVICES as P,
  getServiceBySlug as g
};
