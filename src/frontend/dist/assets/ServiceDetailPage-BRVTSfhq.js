import { c as createLucideIcon, N as useParams, j as jsxRuntimeExports, b as Link, P as Phone, C as CircleCheckBig, S as Star } from "./index-DmI-joOK.js";
import { F as FreeConsultationSection } from "./FreeConsultationSection-BO_fheyP.js";
import { g as getServiceBySlug, A as ArrowLeft } from "./businessRegistrationServices-CKtjfU4O.js";
import { F as FileText } from "./file-text-DYMLdEFk.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
function ServiceDetailPage() {
  const { serviceSlug } = useParams({ strict: false });
  const service = getServiceBySlug(serviceSlug ?? "");
  if (!service) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-screen flex flex-col items-center justify-center gap-4",
        style: { backgroundColor: "#0a1628" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-xl font-bold", children: "Service not found." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/services/business-registration",
              className: "text-sm font-medium hover:opacity-80",
              style: { color: "#f5c518" },
              children: "← Back to Business Registration"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { backgroundColor: "#0a1628" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14 px-4",
        style: {
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "nav",
            {
              className: "flex items-center gap-2 mb-6 text-sm",
              "aria-label": "breadcrumb",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/services",
                    className: "hover:opacity-80 transition-opacity font-medium",
                    style: { color: "#f5c518" },
                    "data-ocid": "breadcrumb.services.link",
                    children: "Services"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "/" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/services/business-registration",
                    className: "hover:opacity-80 transition-opacity font-medium",
                    style: { color: "#f5c518" },
                    "data-ocid": "breadcrumb.business_reg.link",
                    children: "Business Registration"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "/" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 truncate max-w-xs", children: service.title })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl", children: service.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3",
                  style: {
                    backgroundColor: "rgba(245,197,24,0.15)",
                    color: "#f5c518"
                  },
                  children: service.category === "company" ? "Company Registration" : "NGO & Trust Registration"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-extrabold text-white leading-tight", children: service.title })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-base leading-relaxed mb-8 max-w-3xl", children: service.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:9279242122",
                className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]",
                style: { backgroundColor: "#f5c518", color: "#0a1628" },
                "data-ocid": "hero.call.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
                  "Call: +91 9279242122"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#get-consultation",
                className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]",
                style: {
                  backgroundColor: "transparent",
                  color: "#f5c518",
                  border: "2px solid #f5c518"
                },
                "data-ocid": "hero.consultation.button",
                children: "Get Consultation"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", style: { backgroundColor: "#0d1f3c" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-7 rounded-2xl",
          style: {
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "2px solid #FFC107"
          },
          "data-ocid": "benefits.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5", style: { color: "#f5c518" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold text-white", children: "Key Benefits" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: service.benefits.map((benefit, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-3 text-sm text-gray-300",
                "data-ocid": `benefits.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CircleCheckBig,
                    {
                      className: "w-4 h-4 mt-0.5 flex-shrink-0",
                      style: { color: "#f5c518" }
                    }
                  ),
                  benefit
                ]
              },
              benefit
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-7 rounded-2xl",
          style: {
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "2px solid #FFC107"
          },
          "data-ocid": "documents.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5", style: { color: "#f5c518" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold text-white", children: "Required Documents" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: service.documents.map((doc, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-3 text-sm text-gray-300",
                "data-ocid": `documents.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-bold",
                      style: {
                        backgroundColor: "rgba(245,197,24,0.15)",
                        color: "#f5c518"
                      },
                      children: idx + 1
                    }
                  ),
                  doc
                ]
              },
              doc
            )) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 px-4", style: { backgroundColor: "#0a1628" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-extrabold text-white text-center mb-6", children: [
        "Why Choose",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "YMW Compliance Services?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5" }),
          value: "15000+",
          label: "Happy Clients"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5" }),
          value: "12+",
          label: "Years Experience"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" }),
          value: "100+",
          label: "Services"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
          value: "Pan India",
          label: "Coverage"
        }
      ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center py-5 rounded-xl",
          style: {
            backgroundColor: "rgba(245,197,24,0.08)",
            border: "1px solid rgba(245,197,24,0.2)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex justify-center mb-1",
                style: { color: "#f5c518" },
                children: item.icon
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-xl font-extrabold",
                style: { color: "#f5c518" },
                children: item.value
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-400 mt-0.5", children: item.label })
          ]
        },
        item.label
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4", style: { backgroundColor: "#f5c518" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "text-2xl md:text-3xl font-extrabold mb-3",
          style: { color: "#0a1628" },
          children: "Ready to Get Started?"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-base mb-6",
          style: { color: "#0a1628", opacity: 0.8 },
          children: "Our compliance experts are available to guide you through every step — from document preparation to final registration."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "tel:9279242122",
            className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]",
            style: { backgroundColor: "#0a1628", color: "#f5c518" },
            "data-ocid": "cta.call.button",
            children: "📞 Call: +91 9279242122"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://wa.me/918102906339",
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]",
            style: { backgroundColor: "#25D366", color: "white" },
            "data-ocid": "cta.whatsapp.button",
            children: "💬 WhatsApp Us"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "get-consultation", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FreeConsultationSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "py-6 px-4 text-center",
        style: { backgroundColor: "#0a1628" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/services/business-registration",
            className: "inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity",
            style: { color: "#f5c518" },
            "data-ocid": "back.business_reg.link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
              "Back to Business Registration Services"
            ]
          }
        )
      }
    )
  ] });
}
export {
  ServiceDetailPage as default
};
