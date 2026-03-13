export interface ServiceItem {
  slug: string;
  title: string;
  icon: string;
  description: string;
  benefits: string[];
  documents: string[];
  process?: { title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
}

export const ISO_CERTIFICATION_SERVICES: ServiceItem[] = [
  {
    slug: "iso-9001",
    title: "ISO 9001:2015 — Quality Management System",
    icon: "🏆",
    description:
      "ISO 9001:2015 is the world's most recognized Quality Management System (QMS) standard. It helps organizations demonstrate the ability to consistently provide products and services that meet customer and regulatory requirements. YMW Compliance guides you through the entire certification process — from gap analysis to final audit.",
    benefits: [
      "International recognition and business credibility",
      "Improved customer satisfaction and retention",
      "Streamlined internal processes and efficiency",
      "Eligibility for government tenders requiring ISO",
      "Reduced operational costs through process improvement",
      "Enhanced employee performance and accountability",
    ],
    documents: [
      "Company registration certificate (PAN, GST, MOA/AOA or Partnership Deed)",
      "List of products/services offered",
      "Organizational chart",
      "Existing quality procedures/SOPs (if any)",
      "Process flow diagrams",
      "Previous audit reports (if applicable)",
    ],
    process: [
      {
        title: "Gap Analysis",
        desc: "Our team assesses your current processes against ISO 9001 requirements and identifies gaps.",
      },
      {
        title: "Documentation",
        desc: "We prepare quality manual, SOPs, and all required documents as per ISO 9001 standard.",
      },
      {
        title: "Implementation Support",
        desc: "We help implement documented processes across your organization.",
      },
      {
        title: "Internal Audit",
        desc: "Conduct internal audit to verify readiness before the certification audit.",
      },
      {
        title: "Certification Audit",
        desc: "Coordination with accredited certification body for Stage 1 and Stage 2 audits.",
      },
      {
        title: "Certificate Issuance",
        desc: "Upon successful audit, ISO 9001:2015 certificate is issued valid for 3 years.",
      },
    ],
    faqs: [
      {
        q: "How long does ISO 9001 certification take?",
        a: "Typically 30–60 days depending on organization size and readiness. We expedite the process with our expert team.",
      },
      {
        q: "Is ISO 9001 mandatory for government tenders?",
        a: "Many government tenders require ISO 9001 certification. It significantly improves your eligibility and bid score.",
      },
      {
        q: "What is the validity of ISO 9001 certificate?",
        a: "ISO 9001 certificate is valid for 3 years, with annual surveillance audits to maintain certification.",
      },
      {
        q: "Can a small business get ISO 9001 certified?",
        a: "Yes, ISO 9001 is designed for organizations of all sizes and sectors.",
      },
      {
        q: "What is the cost of ISO 9001 certification?",
        a: "Costs vary based on organization size and complexity. Contact us for a transparent quote with no hidden charges.",
      },
    ],
  },
  {
    slug: "iso-14001",
    title: "ISO 14001 — Environmental Management System",
    icon: "🌿",
    description:
      "ISO 14001 sets out the criteria for an effective Environmental Management System (EMS). It helps organizations minimize environmental impact, comply with applicable laws, and continually improve environmental performance. Ideal for manufacturing, construction, and any industry with significant environmental footprint.",
    benefits: [
      "Demonstrates commitment to environmental responsibility",
      "Helps meet legal and regulatory requirements",
      "Reduces risk of fines and environmental liabilities",
      "Improves resource efficiency and reduces waste",
      "Enhances reputation with clients and stakeholders",
      "Required for Pollution Control Board NOC in many cases",
    ],
    documents: [
      "Company registration documents",
      "List of environmental aspects and impacts",
      "Applicable environmental legal requirements list",
      "Existing environmental procedures/SOPs",
      "Energy and resource consumption data",
      "Waste management records",
    ],
  },
  {
    slug: "iso-22000",
    title: "ISO 22000 — Food Safety Management System",
    icon: "🍽️",
    description:
      "ISO 22000 is an international standard for Food Safety Management Systems (FSMS). It applies to all organizations in the food chain — from farm to fork — including food manufacturers, processors, retailers, and packaging companies. It integrates HACCP principles with ISO management system requirements.",
    benefits: [
      "Internationally recognized food safety certification",
      "Compliance with food safety laws and regulations",
      "Enhances consumer confidence and market access",
      "Reduces risk of food safety incidents and recalls",
      "Required for export of food products",
      "Integrates with FSSAI and other food standards",
    ],
    documents: [
      "FSSAI License / Registration certificate",
      "Company registration documents",
      "List of food products manufactured / handled",
      "HACCP plan (if existing)",
      "Facility layout and process flow",
      "Supplier and raw material list",
    ],
  },
  {
    slug: "iso-45001",
    title: "ISO 45001 — Occupational Health & Safety",
    icon: "👷",
    description:
      "ISO 45001 is the international standard for Occupational Health and Safety (OH&S) Management Systems. It helps organizations reduce workplace injuries, illnesses, and fatalities. Mandatory in high-risk industries like construction, mining, manufacturing, and chemicals.",
    benefits: [
      "Reduces workplace accidents and occupational illnesses",
      "Demonstrates legal compliance with OH&S regulations",
      "Improves employee morale and productivity",
      "Required for factory licenses and high-risk industry permits",
      "Reduces insurance costs and liability",
      "Builds a strong safety culture in the organization",
    ],
    documents: [
      "Company registration documents",
      "Factory/establishment license",
      "List of hazards and risk assessments",
      "Existing safety procedures and SOPs",
      "Accident and incident records",
      "Employee health and safety training records",
    ],
  },
  {
    slug: "iso-27001",
    title: "ISO 27001 — Information Security Management",
    icon: "🔐",
    description:
      "ISO 27001 is the leading international standard for Information Security Management Systems (ISMS). It provides a framework to protect sensitive company and customer data from cyber threats, data breaches, and unauthorized access. Essential for IT companies, BPOs, fintech, and any data-driven business.",
    benefits: [
      "Protects sensitive business and customer data",
      "Builds client trust and business credibility",
      "Mandatory for many IT outsourcing contracts",
      "Reduces risk of data breaches and cyber incidents",
      "Compliance with data protection regulations",
      "Competitive advantage in IT and BFSI sectors",
    ],
    documents: [
      "Company registration documents",
      "IT asset inventory",
      "Network and system architecture diagrams",
      "Existing security policies and procedures",
      "Risk assessment reports (if any)",
      "Business continuity and disaster recovery plans",
    ],
  },
  {
    slug: "iso-50001",
    title: "ISO 50001 — Energy Management System",
    icon: "⚡",
    description:
      "ISO 50001 provides a framework for organizations to manage energy performance, including energy efficiency, use, and consumption. It helps industries reduce energy costs, meet sustainability goals, and comply with energy conservation regulations.",
    benefits: [
      "Significant reduction in energy costs",
      "Compliance with energy conservation regulations",
      "Improved sustainability performance and ESG reporting",
      "Reduced carbon footprint",
      "Eligibility for energy efficiency incentives",
      "Enhanced operational efficiency across facilities",
    ],
    documents: [
      "Company registration documents",
      "Energy consumption data (electricity, fuel, gas)",
      "Energy bills for the past 12 months",
      "List of energy-intensive equipment",
      "Existing energy management procedures",
      "Facility/plant layout",
    ],
  },
  {
    slug: "iso-13485",
    title: "ISO 13485 — Medical Devices Quality Management",
    icon: "🏥",
    description:
      "ISO 13485 specifies requirements for a Quality Management System for medical device manufacturers and related service providers. It is required for regulatory compliance and market access for medical devices in India and internationally.",
    benefits: [
      "Mandatory for medical device manufacturing and export",
      "CDSCO registration support",
      "Compliance with medical device regulations",
      "Improved product safety and reliability",
      "International market access",
      "Reduces risk of product liability",
    ],
    documents: [
      "Company registration documents",
      "CDSCO registration/license (if applicable)",
      "List of medical devices manufactured",
      "Product specifications and technical file",
      "Manufacturing process flow",
      "Quality control procedures",
    ],
  },
  {
    slug: "iso-37001",
    title: "ISO 37001 — Anti-Bribery Management System",
    icon: "⚖️",
    description:
      "ISO 37001 is the international standard for Anti-Bribery Management Systems. It helps organizations establish, implement, and maintain an anti-bribery program to prevent, detect, and respond to bribery. Increasingly required by large corporates and government contractors.",
    benefits: [
      "Demonstrates commitment to ethical business practices",
      "Reduces risk of bribery and corruption",
      "Required for government and international contracts",
      "Protects organization from legal and reputational risk",
      "Improves stakeholder and investor confidence",
      "Aligns with FCPA, UK Bribery Act, and Indian law",
    ],
    documents: [
      "Company registration documents",
      "Code of conduct and ethics policy",
      "Anti-bribery policy (if existing)",
      "Organizational chart with reporting structure",
      "List of high-risk functions and interactions",
      "Training records on ethics and compliance",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return ISO_CERTIFICATION_SERVICES.find((s) => s.slug === slug);
}
