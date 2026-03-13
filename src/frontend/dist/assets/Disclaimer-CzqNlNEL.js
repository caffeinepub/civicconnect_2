import { j as jsxRuntimeExports } from "./index-DwCD6ubM.js";
import { F as FreeConsultationSection } from "./FreeConsultationSection-BAla1TZY.js";
const LAST_UPDATED = "January 1, 2025";
const SECTIONS = [
  {
    title: "1. General Disclaimer",
    content: "The information provided on this website by YMW Compliance Services LLP is for general informational and guidance purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website."
  },
  {
    title: "2. Not Legal Advice",
    content: "The content on this website does not constitute legal, financial, tax, or professional advice. The information provided is general in nature and may not apply to your specific situation. You should not act or refrain from acting based solely on the information provided on this website without seeking appropriate professional advice tailored to your specific circumstances.\n\nFor specific legal or compliance advice, please consult with our qualified professionals directly."
  },
  {
    title: "3. Accuracy of Information",
    content: "Laws, regulations, and compliance requirements in India are subject to frequent changes. While we make every effort to keep our content current, we cannot guarantee that all information on this website reflects the most recent legal or regulatory developments. Government policies, fee structures, and procedural requirements may change without prior notice.\n\nWe recommend verifying critical information with the relevant government authorities or our professional team before making any decisions."
  },
  {
    title: "4. External Links",
    content: "Our website may contain links to external websites, government portals, and third-party resources. These links are provided for your convenience and informational purposes only. YMW Compliance Services LLP does not endorse, control, or take responsibility for the content, privacy practices, or accuracy of information on any external websites. Accessing external links is at your own risk."
  },
  {
    title: "5. Service Outcomes",
    content: "While we work diligently to achieve the best outcomes for our clients, we cannot guarantee specific results for government approvals, registrations, or certifications. Processing times, approvals, and outcomes are ultimately determined by the relevant government authorities and are beyond our control. Past results do not guarantee future outcomes."
  },
  {
    title: "6. Limitation of Liability",
    content: "To the fullest extent permitted by applicable law, YMW Compliance Services LLP, its directors, employees, and associates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:\n\n• Your use of or inability to use this website\n• Reliance on information provided on this website\n• Errors or omissions in the content\n• Unauthorized access to or alteration of your data\n• Any other matter relating to this website or our services"
  },
  {
    title: "7. Professional Consultation",
    content: "We strongly encourage all users to seek personalized professional consultation before making any business, legal, or financial decisions. Our team of qualified professionals is available to provide tailored advice specific to your business needs and circumstances. Contact us for a free consultation."
  },
  {
    title: "8. Contact Us",
    content: "If you have any questions about this Disclaimer or our services, please contact us:\n\nYMW Compliance Services LLP\nDhanbad, Jharkhand, India\nPhone: +91 8102906339\nEmail: ymwcompliances@gmail.com"
  }
];
function Disclaimer() {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-extrabold text-white mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "Disclaimer" }) }),
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
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 leading-relaxed", children: "By using this website and the services of YMW Compliance Services LLP, you acknowledge that you have read, understood, and agree to the terms of this Disclaimer. Please read it carefully before relying on any information provided herein." })
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
  Disclaimer as default
};
