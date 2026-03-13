import { j as jsxRuntimeExports } from "./index-DwCD6ubM.js";
import { F as FreeConsultationSection } from "./FreeConsultationSection-BAla1TZY.js";
const LAST_UPDATED = "January 1, 2025";
const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: 'By accessing or using the services of YMW Compliance Services LLP ("Company", "we", "us", or "our"), you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and clients of our website and services.'
  },
  {
    title: "2. Use of Services",
    content: "Our services are intended for lawful business and compliance purposes only. You agree not to misuse our services, provide false information, or use our platform for any illegal activity. We reserve the right to refuse service to anyone who violates these terms or applicable laws. You are responsible for maintaining the confidentiality of any account credentials."
  },
  {
    title: "3. Intellectual Property",
    content: "All content on this website, including text, graphics, logos, icons, images, and software, is the property of YMW Compliance Services LLP and is protected by applicable Indian and international intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission."
  },
  {
    title: "4. Service Fees & Payments",
    content: "Service fees are communicated prior to engagement. All fees are exclusive of applicable government charges, stamp duties, and statutory fees unless explicitly stated. Payments are due as per the agreed schedule. We reserve the right to suspend services in case of non-payment."
  },
  {
    title: "5. Limitation of Liability",
    content: "YMW Compliance Services LLP shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid by you for the specific service in question. We are not responsible for delays caused by government authorities, third parties, or circumstances beyond our control."
  },
  {
    title: "6. Disclaimer of Warranties",
    content: 'Our services are provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the accuracy, completeness, or fitness for a particular purpose of our services. Government processing times and outcomes are beyond our control and cannot be guaranteed.'
  },
  {
    title: "7. Governing Law & Jurisdiction",
    content: "These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Dhanbad, Jharkhand, India."
  },
  {
    title: "8. Amendments",
    content: "We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes your acceptance of the new terms."
  },
  {
    title: "9. Contact Information",
    content: "For any questions regarding these Terms & Conditions, please contact us:\n\nYMW Compliance Services LLP\nDhanbad, Jharkhand, India\nPhone: +91 8102906339\nEmail: ymwcompliances@gmail.com"
  }
];
function TermsAndConditions() {
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
            "Terms & ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "Conditions" })
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
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 leading-relaxed mb-0", children: "Please read these Terms & Conditions carefully before using the services offered by YMW Compliance Services LLP. These terms constitute a legally binding agreement between you and the Company." })
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
  TermsAndConditions as default
};
