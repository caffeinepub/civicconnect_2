export interface LabourServiceItem {
  slug: string;
  title: string;
  icon: string;
  description: string;
  benefits: string[];
  documents: string[];
  process?: { title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
}

export const LABOUR_SERVICES: LabourServiceItem[] = [
  {
    slug: "pf-registration",
    title: "PF Registration (Provident Fund)",
    icon: "🏦",
    description:
      "Provident Fund (PF) Registration under EPFO is mandatory for establishments with 20 or more employees. YMW Compliance ensures smooth PF registration, monthly ECR filing, and complete EPFO compliance management. Protect your employees and keep your business penalty-free.",
    benefits: [
      "Legal compliance under EPF & MP Act 1952",
      "Protects employees with retirement savings",
      "Mandatory for all companies with 20+ employees",
      "Avoids heavy penalties and prosecution",
      "ECR and monthly return filing support",
      "Expert liaison with EPFO office",
    ],
    documents: [
      "PAN Card and Aadhaar of all directors / proprietor",
      "Certificate of Incorporation / Partnership Deed",
      "List of employees with salary details",
      "Business address proof",
      "Bank account details of the company",
      "Cancelled cheque of company account",
    ],
  },
  {
    slug: "esi-registration",
    title: "ESI Registration (Employee State Insurance)",
    icon: "🏥",
    description:
      "ESI Registration is mandatory for establishments with 10 or more employees drawing wages up to ₹21,000/month. YMW Compliance handles ESIC registration, monthly contribution filing, and employee card issuance to ensure full compliance. Secure your employees health and disability benefits.",
    benefits: [
      "Provides medical, sickness, maternity benefits to employees",
      "Mandatory for 10+ employee establishments",
      "Avoids penalties under ESIC Act 1948",
      "Monthly contribution and return filing support",
      "Employee IP card and portal access setup",
      "Ongoing compliance management",
    ],
    documents: [
      "PAN and Aadhaar of directors / proprietor",
      "Certificate of Incorporation / GST Certificate",
      "List of employees with salary and date of joining",
      "Bank account details",
      "Business address proof",
      "Cancelled cheque",
    ],
  },
  {
    slug: "contract-labour-license",
    title: "Contract Labour License",
    icon: "👷",
    description:
      "The Contract Labour (Regulation & Abolition) Act License is required for principal employers engaging 20+ contract workers and contractors supplying 20+ workers. YMW manages Form I/II application, liaison with Labour Commissioner, and ongoing compliance. Stay legally protected under CLRA Act 1970.",
    benefits: [
      "Legal compliance under CLRA Act 1970",
      "Mandatory for principal employers and contractors",
      "Avoids penalties and prosecution",
      "Expert handling of Labour Commissioner process",
      "Annual renewal support",
      "Contractor registration and compliance guidance",
    ],
    documents: [
      "PAN and Aadhaar of employer / contractor",
      "Certificate of Incorporation / firm registration",
      "List of contract workers deployed",
      "Nature of work and site address",
      "Proof of principal employer agreement",
      "Treasury challan / fee payment",
    ],
  },
  {
    slug: "professional-tax",
    title: "Professional Tax Registration",
    icon: "💼",
    description:
      "Professional Tax is a state-level tax imposed on employment income and is mandatory in most states including Jharkhand. YMW helps businesses obtain PTEC and PTRC certificates, file monthly/quarterly returns, and maintain full compliance. Avoid penalties with our expert state-wise guidance.",
    benefits: [
      "State law compliance across Jharkhand and other states",
      "Mandatory for all businesses with paid employees",
      "PTEC for business / PTRC for employer registration",
      "Avoids penalties for non-registration and late filing",
      "Monthly / quarterly return filing support",
      "Deduction management for all employees",
    ],
    documents: [
      "PAN Card and Aadhaar of applicant",
      "Business registration certificate",
      "Salary register or employee details",
      "Business address proof",
      "Bank account details",
      "State-specific forms as required",
    ],
  },
  {
    slug: "shops-establishments",
    title: "Shops & Establishments Act Registration",
    icon: "🏪",
    description:
      "Shops and Establishments Act Registration is mandatory for all commercial establishments, shops, offices, and restaurants. YMW Compliance handles state-specific registration, ensures adherence to working hours and conditions, and manages annual renewals. Get your business legally registered in your state.",
    benefits: [
      "Legal compliance under state Shops & Establishments Act",
      "Mandatory for all shops, offices, and commercial premises",
      "Opens door for other business licenses and registrations",
      "Avoids fines and business closure orders",
      "Annual renewal and compliance management",
      "Protects employee rights and employer interests",
    ],
    documents: [
      "Identity proof and address proof of proprietor / director",
      "Proof of business premises (rent agreement / ownership)",
      "Photograph of establishment",
      "List of employees",
      "PAN Card of business",
      "Bank account details",
    ],
  },
  {
    slug: "labour-license",
    title: "Labour License",
    icon: "📜",
    description:
      "Labour License is required for businesses engaged in construction, manufacturing, and specific industries under the Factories Act or state labour laws. YMW Compliance manages the complete application process, coordinates with the Labour Department, and ensures timely licence issuance and renewals.",
    benefits: [
      "Mandatory for factories and construction companies",
      "Legal compliance under Factories Act 1948",
      "Protects business from prosecution and closure",
      "Expert coordination with Labour Department",
      "Annual renewal and ongoing compliance support",
      "Covers all types of labour-intensive industries",
    ],
    documents: [
      "Certificate of Incorporation / Business Registration",
      "PAN and Aadhaar of proprietor / partners / directors",
      "Site plan and building layout (for factories)",
      "List of workers and nature of work",
      "Machinery details and safety compliance records",
      "Treasury receipt of applicable fee",
    ],
  },
  {
    slug: "pf-return-filing",
    title: "PF Return Filing",
    icon: "📊",
    description:
      "Monthly PF ECR (Electronic Challan cum Return) filing is mandatory for all PF-registered establishments. YMW Compliance handles timely ECR preparation, challan generation, and submission to EPFO portal every month. Avoid interest and penalties with our dedicated compliance team.",
    benefits: [
      "Timely monthly ECR filing to avoid penalties",
      "Accurate employee-wise contribution calculation",
      "Challan generation and payment coordination",
      "Expert handling of new joiner and exit management",
      "Annual PF audit and rectification support",
      "EPFO portal management and query resolution",
    ],
    documents: [
      "PF Registration number and ECR login credentials",
      "Salary register for the filing month",
      "List of new joiners and exiting employees",
      "Bank payment confirmation",
      "Previous month ECR copy",
      "UAN details of employees",
    ],
  },
  {
    slug: "esi-return-filing",
    title: "ESI Return Filing",
    icon: "📋",
    description:
      "Bi-annual ESI Return filing is required for all ESIC-registered establishments along with monthly contribution payments. YMW Compliance ensures accurate Return-1 filing, timely contribution deposit, and employee IP number management. Stay fully compliant with ESIC regulations.",
    benefits: [
      "Accurate bi-annual Return-1 filing",
      "Monthly contribution calculation and payment",
      "Employee IP number and ESIC portal management",
      "Avoids penalties and branch office notices",
      "New employee registration and card issuance",
      "Dedicated support for ESIC queries and inspections",
    ],
    documents: [
      "ESIC registration number and portal credentials",
      "Salary and attendance register",
      "List of employees with IP numbers",
      "Bank payment receipts for contributions",
      "New joiner declaration forms (Form-1)",
      "Previous return filing acknowledgement",
    ],
  },
  {
    slug: "professional-tax-return",
    title: "Professional Tax Return",
    icon: "📑",
    description:
      "Professional Tax Return filing is mandatory for all PTRC-registered employers on a monthly or quarterly basis depending on the state. YMW Compliance prepares accurate PT challans, files returns, and manages employee-wise deductions and deposits on time.",
    benefits: [
      "Timely monthly / quarterly PT return filing",
      "Accurate computation of employee-wise PT deductions",
      "PT challan generation and payment coordination",
      "Avoids late fee and interest charges",
      "State-wise compliance across Jharkhand, Maharashtra, etc.",
      "Annual PT reconciliation and certificate management",
    ],
    documents: [
      "PTRC registration certificate and portal credentials",
      "Salary register for the period",
      "Employee list with salary slabs",
      "Bank payment confirmation",
      "Previous return acknowledgement",
      "State-specific PT challan forms",
    ],
  },
  {
    slug: "labour-welfare-fund",
    title: "Labour Welfare Fund Registration",
    icon: "❤️",
    description:
      "Labour Welfare Fund (LWF) Registration and contribution is mandatory for establishments in states where LWF Act is applicable. YMW Compliance handles LWF registration, annual contribution filing, and maintains complete compliance records so your business avoids penalties.",
    benefits: [
      "Compliance under state Labour Welfare Fund Acts",
      "Mandatory for establishments employing specified workers",
      "Covers employee housing, education, and recreation benefits",
      "Annual contribution filing and payment management",
      "Avoids penalties and departmental notices",
      "Expert guidance on state-specific LWF applicability",
    ],
    documents: [
      "Labour Welfare Fund registration form",
      "Business registration certificate",
      "List of employees eligible for LWF",
      "Salary details of covered employees",
      "PAN and address proof of employer",
      "Bank account details for contribution payment",
    ],
  },
];

export const LABOUR_CATEGORIES = [
  {
    key: "labour_reg",
    title: "Labour Registrations",
    icon: "🏭",
    description:
      "6 services — PF, ESI, Contract Labour, Professional Tax, Shops Act, Labour License",
    slugs: [
      "pf-registration",
      "esi-registration",
      "contract-labour-license",
      "professional-tax",
      "shops-establishments",
      "labour-license",
    ],
  },
  {
    key: "labour_compliance",
    title: "Labour Compliance & Returns",
    icon: "📋",
    description:
      "4 services — PF Returns, ESI Returns, Professional Tax Returns, Labour Welfare Fund",
    slugs: [
      "pf-return-filing",
      "esi-return-filing",
      "professional-tax-return",
      "labour-welfare-fund",
    ],
  },
];

export function getLabourServiceBySlug(
  slug: string,
): LabourServiceItem | undefined {
  return LABOUR_SERVICES.find((s) => s.slug === slug);
}
