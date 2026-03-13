import { r as reactExports, j as jsxRuntimeExports, b as Link, P as Phone, C as CircleCheckBig } from "./index-B8PZBDeY.js";
import { F as FreeConsultationSection } from "./FreeConsultationSection-BTb_a1WB.js";
import { G as GOVERNMENT_LICENSES_SERVICES } from "./governmentLicensesServices-Dq1hbMWS.js";
import { A as ArrowLeft } from "./arrow-left-CSM6ZsDS.js";
import { A as ArrowRight } from "./arrow-right-kDFfLfvF.js";
function GovernmentLicenses() {
  const [openSection, setOpenSection] = reactExports.useState("essential");
  const ESSENTIAL = GOVERNMENT_LICENSES_SERVICES.filter(
    (s) => [
      "trade-license",
      "shop-establishment-registration",
      "fire-noc",
      "drug-license"
    ].includes(s.slug)
  );
  const SPECIALIZED = GOVERNMENT_LICENSES_SERVICES.filter(
    (s) => [
      "psara-license",
      "peso-license",
      "ayush-license",
      "mining-license"
    ].includes(s.slug)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { backgroundColor: "#0a1628" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14 px-4",
        style: {
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/services",
                className: "flex items-center gap-1 text-sm font-medium hover:opacity-80 transition-opacity",
                style: { color: "#f5c518" },
                "data-ocid": "breadcrumb.services.link",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                  " All Services"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-300", children: "Government Licenses" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4",
                style: {
                  backgroundColor: "rgba(245,197,24,0.15)",
                  color: "#f5c518"
                },
                children: "Government Licensing"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-extrabold text-white mb-4", children: [
              "Government",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "License Services" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 mb-8 max-w-2xl mx-auto", children: "From Trade License and Fire NOC to PSARA, PESO, AYUSH, and Mining Licenses — we handle all government licensing with expert guidance and complete documentation support." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "tel:9279242122",
                  className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]",
                  style: { backgroundColor: "#f5c518", color: "#0a1628" },
                  "data-ocid": "hero.call.button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
                    " Call: +91 9279242122"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                  children: [
                    "Get Free Consultation ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10", children: [
            { value: "15000+", label: "Happy Clients" },
            { value: "12+", label: "Years Experience" },
            { value: "Pan India", label: "Coverage" },
            { value: "100%", label: "Compliance" }
          ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-4 rounded-xl",
              style: {
                backgroundColor: "rgba(245,197,24,0.08)",
                border: "1px solid rgba(245,197,24,0.2)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "text-2xl font-extrabold",
                    style: { color: "#f5c518" },
                    children: stat.value
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-400 mt-1", children: stat.label })
              ]
            },
            stat.label
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", style: { backgroundColor: "#0d1f3c" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-extrabold text-white mb-2", children: [
          "Choose Your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "License Type" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm max-w-xl mx-auto", children: "Select a category below and click any license to see full details, benefits, required documents, and process." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl overflow-hidden",
            style: { border: "2px solid #FFC107" },
            "data-ocid": "essential.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenSection(
                    openSection === "essential" ? null : "essential"
                  ),
                  className: "w-full flex items-center justify-between px-6 py-4 text-left",
                  style: { backgroundColor: "rgba(245,197,24,0.10)" },
                  "data-ocid": "essential.toggle",
                  "aria-expanded": openSection === "essential",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏢" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-base", children: "Essential Business Licenses" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs mt-0.5", children: "4 licenses — Trade License, Shop & Establishment, Fire NOC, Drug License" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ArrowRight,
                      {
                        className: `w-5 h-5 transition-transform duration-200 ${openSection === "essential" ? "rotate-90" : ""}`,
                        style: { color: "#f5c518" }
                      }
                    )
                  ]
                }
              ),
              openSection === "essential" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5",
                  style: { backgroundColor: "rgba(255,255,255,0.02)" },
                  children: ESSENTIAL.map((service, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/services/government-licenses/$serviceSlug",
                      params: { serviceSlug: service.slug },
                      className: "flex items-start gap-3 p-4 rounded-xl hover:scale-[1.02] transition-all duration-200 group",
                      style: {
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(245,197,24,0.3)"
                      },
                      "data-ocid": `essential.service.item.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl flex-shrink-0", children: service.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold text-sm leading-snug group-hover:text-yellow-300 transition-colors", children: service.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              CircleCheckBig,
                              {
                                className: "w-3 h-3 flex-shrink-0",
                                style: { color: "#f5c518" }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "View Details" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              ArrowRight,
                              {
                                className: "w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity",
                                style: { color: "#f5c518" }
                              }
                            )
                          ] })
                        ] })
                      ]
                    },
                    service.slug
                  ))
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl overflow-hidden",
            style: { border: "2px solid #FFC107" },
            "data-ocid": "specialized.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenSection(
                    openSection === "specialized" ? null : "specialized"
                  ),
                  className: "w-full flex items-center justify-between px-6 py-4 text-left",
                  style: { backgroundColor: "rgba(245,197,24,0.10)" },
                  "data-ocid": "specialized.toggle",
                  "aria-expanded": openSection === "specialized",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🔒" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-base", children: "Specialized Industry Licenses" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs mt-0.5", children: "4 licenses — PSARA, PESO, AYUSH, Mining License" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ArrowRight,
                      {
                        className: `w-5 h-5 transition-transform duration-200 ${openSection === "specialized" ? "rotate-90" : ""}`,
                        style: { color: "#f5c518" }
                      }
                    )
                  ]
                }
              ),
              openSection === "specialized" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5",
                  style: { backgroundColor: "rgba(255,255,255,0.02)" },
                  children: SPECIALIZED.map((service, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/services/government-licenses/$serviceSlug",
                      params: { serviceSlug: service.slug },
                      className: "flex items-start gap-3 p-4 rounded-xl hover:scale-[1.02] transition-all duration-200 group",
                      style: {
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(245,197,24,0.3)"
                      },
                      "data-ocid": `specialized.service.item.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl flex-shrink-0", children: service.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold text-sm leading-snug group-hover:text-yellow-300 transition-colors", children: service.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              CircleCheckBig,
                              {
                                className: "w-3 h-3 flex-shrink-0",
                                style: { color: "#f5c518" }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: "View Details" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              ArrowRight,
                              {
                                className: "w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity",
                                style: { color: "#f5c518" }
                              }
                            )
                          ] })
                        ] })
                      ]
                    },
                    service.slug
                  ))
                }
              )
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4", style: { backgroundColor: "#f5c518" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "text-2xl md:text-3xl font-extrabold mb-3",
          style: { color: "#0a1628" },
          children: "Need Help With Government Licensing?"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-base mb-6",
          style: { color: "#0a1628", opacity: 0.8 },
          children: "Our licensing experts handle all documentation and government follow-ups on your behalf."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "tel:9279242122",
            className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]",
            style: { backgroundColor: "#0a1628", color: "#f5c518" },
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
            children: "💬 WhatsApp Us"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "get-consultation", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FreeConsultationSection, {}) })
  ] });
}
export {
  GovernmentLicenses as default
};
