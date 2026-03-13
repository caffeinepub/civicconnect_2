const TAX_GST_SERVICES = [
  {
    slug: "gst-registration",
    title: "GST Registration",
    icon: "📋",
    description: "GST Registration is mandatory for businesses with turnover above the prescribed threshold or engaged in inter-state supply. YMW Compliance Services helps you register on the GST portal smoothly, obtain your GSTIN, and stay compliant from day one.",
    benefits: [
      "Legal recognition as a GST-registered supplier",
      "Ability to collect GST from customers",
      "Input Tax Credit (ITC) on purchases",
      "Eligible for inter-state trade without restrictions",
      "Access to government tenders (GST mandatory)",
      "Enhanced business credibility"
    ],
    documents: [
      "PAN Card of business / proprietor",
      "Aadhaar Card of proprietor / partners / directors",
      "Proof of business address (electricity bill / rent agreement)",
      "Bank account statement / cancelled cheque",
      "Photographs of proprietor / partners / directors",
      "Certificate of Incorporation (for companies / LLPs)",
      "MOA / AOA or Partnership Deed (if applicable)"
    ]
  },
  {
    slug: "gst-return-filing",
    title: "GST Return Filing",
    icon: "📄",
    description: "Regular GST return filing (GSTR-1, GSTR-3B, GSTR-9) is mandatory for all registered taxpayers. YMW Compliance ensures accurate and timely filing to avoid penalties, interest, and suspension of GSTIN.",
    benefits: [
      "Avoid late fees and penalties",
      "Maintain a clean compliance track record",
      "Accurate ITC reconciliation",
      "Expert review before every filing",
      "Annual return (GSTR-9) filing included",
      "Dedicated compliance calendar"
    ],
    documents: [
      "GSTIN and login credentials",
      "Sales invoices / outward supply details",
      "Purchase invoices / inward supply details",
      "Bank statements for the return period",
      "Previous return filed copies"
    ]
  },
  {
    slug: "gst-lut-for-export",
    title: "GST LUT for Export",
    icon: "🌐",
    description: "A Letter of Undertaking (LUT) allows exporters to supply goods or services without paying GST, instead of claiming a refund later. YMW helps you file Form RFD-11 and obtain LUT approval quickly.",
    benefits: [
      "Export goods/services without upfront GST payment",
      "Improves cash flow for exporters",
      "Reduces dependency on GST refund process",
      "Valid for entire financial year",
      "Simple online process",
      "Applicable for zero-rated supplies"
    ],
    documents: [
      "GSTIN and login credentials",
      "PAN of the business",
      "Copy of export invoices (previous period)",
      "Bank account details",
      "IEC (Import Export Code) if available"
    ]
  },
  {
    slug: "gst-annual-return",
    title: "GST Annual Return (GSTR-9)",
    icon: "📊",
    description: "GSTR-9 is the annual return that consolidates all monthly/quarterly returns filed during a financial year. YMW ensures accurate reconciliation of sales, purchases, ITC, and tax paid, keeping you compliant.",
    benefits: [
      "Complete annual reconciliation of GST data",
      "Avoid scrutiny and audit notices",
      "Identify and correct mismatches in ITC",
      "Expert review of all returns filed",
      "Timely filing before due date",
      "Advisory on discrepancies"
    ],
    documents: [
      "All GSTR-1 and GSTR-3B filed for the year",
      "Purchase register and sales register",
      "ITC claimed and reversed details",
      "Tax payment challan copies",
      "Bank statements for the financial year"
    ]
  },
  {
    slug: "itr-filing-individual",
    title: "ITR Filing (Individual)",
    icon: "🧾",
    description: "Income Tax Return (ITR) filing is mandatory for individuals earning above the basic exemption limit. YMW's tax experts guide you through choosing the right ITR form, claiming all deductions, and filing accurately before the due date.",
    benefits: [
      "Claim deductions under 80C, 80D, HRA, etc.",
      "Avoid penalty for late or non-filing",
      "Faster loan and visa processing (ITR as proof)",
      "Carry forward of losses",
      "Refund of excess TDS",
      "Expert tax planning and advisory"
    ],
    documents: [
      "PAN Card and Aadhaar Card",
      "Form 16 from employer",
      "Bank account statements",
      "Interest income certificates (FD/savings)",
      "Investment proofs (80C, 80D, etc.)",
      "Capital gain statements (if applicable)",
      "Rental income details (if applicable)"
    ]
  },
  {
    slug: "itr-filing-business",
    title: "ITR Filing (Business / Company)",
    icon: "🏢",
    description: "Businesses, firms, LLPs, and companies must file ITR annually with correct financial data. YMW ensures proper filing with audited accounts, compliance with tax audit requirements, and timely submission.",
    benefits: [
      "Timely filing avoids ₹5,000 penalty",
      "Tax audit compliance (if applicable)",
      "Accurate computation of business income",
      "Claim all allowable deductions",
      "Carry forward of business losses",
      "Complete support for tax notices"
    ],
    documents: [
      "PAN of company / firm / LLP",
      "Audited financial statements",
      "Tax audit report (if applicable)",
      "TDS certificates (Form 16A)",
      "Bank statements for the financial year",
      "GST returns filed during the year",
      "Previous year ITR copy"
    ]
  },
  {
    slug: "tds-return-filing",
    title: "TDS Return Filing",
    icon: "💼",
    description: "Any person or entity deducting TDS must file quarterly TDS returns (Form 24Q, 26Q, 27Q, 27EQ). YMW ensures accurate computation, timely filing, and issuance of Form 16/16A to deductees.",
    benefits: [
      "Avoid interest and penalties for late filing",
      "Correct TDS computation and challan mapping",
      "Issuance of TDS certificates to deductees",
      "Reconciliation of TDS with Form 26AS",
      "Support for TDS notices and corrections",
      "Quarterly compliance calendar"
    ],
    documents: [
      "TAN (Tax Deduction Account Number)",
      "Deductee PAN list",
      "Salary / payment details of deductees",
      "TDS challan payment details",
      "Previous TDS return filed copies"
    ]
  },
  {
    slug: "income-tax-notice-reply",
    title: "Income Tax Notice Reply",
    icon: "📬",
    description: "Receiving an Income Tax notice can be stressful. YMW's expert CA team reviews the notice, prepares a detailed response, and represents you before the Income Tax Department to resolve issues quickly.",
    benefits: [
      "Expert review of notice type and demand",
      "Timely response to avoid adverse orders",
      "Representation before IT Officer",
      "Rectification of return errors",
      "Advisory on future compliance",
      "Confidential and professional handling"
    ],
    documents: [
      "Copy of Income Tax Notice received",
      "Previous years' ITR copies",
      "Bank statements for the year mentioned",
      "Supporting documents for income/deductions claimed",
      "Form 26AS / AIS / TIS"
    ]
  }
];
function getServiceBySlug(slug) {
  return TAX_GST_SERVICES.find((s) => s.slug === slug);
}
export {
  TAX_GST_SERVICES as T,
  getServiceBySlug as g
};
