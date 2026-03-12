import { j as jsxRuntimeExports } from "./index-pQi0h6D3.js";
import { F as FreeConsultationSection } from "./FreeConsultationSection-WfcUtkp_.js";
const LAST_UPDATED = "January 1, 2025";
const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: "We collect the following personal information when you use our services or contact us:\n\n• Full Name\n• Phone Number\n• Email Address\n• Business Name and Type\n• Service Queries and Requirements\n• City and State\n• Documents required for compliance services (PAN, Aadhaar, business documents, etc.)\n\nWe collect this information when you fill out consultation forms, contact us directly, or engage our services."
  },
  {
    title: "2. How We Use Your Information",
    content: "The information we collect is used for the following purposes:\n\n• To provide and deliver the compliance services you have requested\n• To follow up on consultation requests and service inquiries\n• To communicate updates regarding your service status\n• To send relevant compliance reminders and notifications\n• To improve our services and customer experience\n• To comply with legal and regulatory obligations"
  },
  {
    title: "3. Data Storage & Security",
    content: "We take the security of your personal data seriously. Your information is stored on secure servers with appropriate technical and organizational measures in place to prevent unauthorized access, disclosure, alteration, or destruction. We retain your data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law."
  },
  {
    title: "4. Third-Party Sharing",
    content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with:\n\n• Government authorities and regulatory bodies as required for service delivery\n• Trusted service partners who assist in delivering our services (under strict confidentiality agreements)\n• Legal authorities when required by law or court order\n\nWe ensure all third parties maintain appropriate data protection standards."
  },
  {
    title: "5. Your Rights",
    content: "You have the following rights regarding your personal data:\n\n• Right to Access: Request a copy of the personal data we hold about you\n• Right to Correction: Request correction of inaccurate or incomplete data\n• Right to Deletion: Request deletion of your personal data (subject to legal obligations)\n• Right to Withdraw Consent: Withdraw consent for data processing at any time\n\nTo exercise these rights, please contact us at ymwcompliances@gmail.com."
  },
  {
    title: "6. Cookies Policy",
    content: "Our website may use cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyze website traffic and improve functionality. You can control cookie settings through your browser preferences. Disabling cookies may affect some features of our website."
  },
  {
    title: "7. Changes to This Policy",
    content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information."
  },
  {
    title: "8. Contact Us",
    content: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:\n\nYMW Compliance Services LLP\nDhanbad, Jharkhand, India\nPhone: +91 8102906339\nEmail: ymwcompliances@gmail.com"
  }
];
function PrivacyPolicy() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { backgroundColor: "#0a1628" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 px-4 text-center",
        style: {
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4",
              style: {
                backgroundColor: "rgba(245,197,24,0.15)",
                color: "#f5c518"
              },
              children: "Legal"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-extrabold text-white mb-4", children: [
            "Privacy ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "Policy" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base text-gray-400", children: [
            "Last Updated: ",
            LAST_UPDATED
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2xl p-8 md:p-12 mb-8",
          style: {
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 leading-relaxed", children: 'YMW Compliance Services LLP ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our services or visit our website.' })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: SECTIONS.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl p-6 md:p-8",
          style: {
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-xl font-bold mb-4",
                style: { color: "#f5c518" },
                children: section.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 leading-relaxed whitespace-pre-line", children: section.content })
          ]
        },
        section.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FreeConsultationSection, {})
  ] });
}
export {
  PrivacyPolicy as default
};
