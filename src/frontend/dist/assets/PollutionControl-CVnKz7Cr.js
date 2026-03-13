import { r as reactExports, j as jsxRuntimeExports, b as Link, P as Phone, C as CircleCheckBig } from "./index-B8PZBDeY.js";
import { F as FreeConsultationSection } from "./FreeConsultationSection-BTb_a1WB.js";
import { P as POLLUTION_CONTROL_SERVICES } from "./pollutionControlServices-lZ2AEy5H.js";
import { A as ArrowLeft } from "./arrow-left-CSM6ZsDS.js";
import { A as ArrowRight } from "./arrow-right-kDFfLfvF.js";
function PollutionControl() {
  const [openSection, setOpenSection] = reactExports.useState(
    "consent"
  );
  const CONSENT_SERVICES = POLLUTION_CONTROL_SERVICES.filter(
    (s) => [
      "cte-cto-certificate",
      "cgwa-water-boring",
      "scrap-import-pollution-noc"
    ].includes(s.slug)
  );
  const WASTE_SERVICES = POLLUTION_CONTROL_SERVICES.filter(
    (s) => [
      "epr-registration",
      "plastic-waste-authorization",
      "e-waste-authorization",
      "hazardous-waste-noc",
      "biomedical-waste-license"
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
                  "All Services"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-300", children: "Pollution Control Board" })
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
                children: "Environmental Compliance"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-extrabold text-white mb-4", children: [
              "Pollution Control",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "Board Services" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 mb-8 max-w-2xl mx-auto", children: "CTE/CTO, EPR Registration, Hazardous Waste NOC, E-Waste Authorization, CGWA NOC — complete environmental compliance support for industries across India." }),
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
                    "Call: +91 9279242122"
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
            { value: "8+", label: "PCB Services" }
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "PCB Service" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm max-w-xl mx-auto", children: "Select a category and click any service to see full details, benefits, required documents, and process." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl overflow-hidden",
            style: { border: "2px solid #FFC107" },
            "data-ocid": "consent.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenSection(openSection === "consent" ? null : "consent"),
                  className: "w-full flex items-center justify-between px-6 py-4 text-left",
                  style: { backgroundColor: "rgba(245,197,24,0.10)" },
                  "data-ocid": "consent.toggle",
                  "aria-expanded": openSection === "consent",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏭" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-base", children: "Consent to Establish / Operate & NOC Services" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs mt-0.5", children: "CTE/CTO, CGWA Water Boring NOC, Scrap Import NOC" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ArrowRight,
                      {
                        className: `w-5 h-5 transition-transform duration-200 ${openSection === "consent" ? "rotate-90" : ""}`,
                        style: { color: "#f5c518" }
                      }
                    )
                  ]
                }
              ),
              openSection === "consent" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5",
                  style: { backgroundColor: "rgba(255,255,255,0.02)" },
                  children: CONSENT_SERVICES.map((service, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/services/pollution-control/$serviceSlug",
                      params: { serviceSlug: service.slug },
                      className: "flex items-start gap-3 p-4 rounded-xl hover:scale-[1.02] transition-all duration-200 group",
                      style: {
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(245,197,24,0.3)"
                      },
                      "data-ocid": `consent.service.item.${idx + 1}`,
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
            "data-ocid": "waste.panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenSection(openSection === "waste" ? null : "waste"),
                  className: "w-full flex items-center justify-between px-6 py-4 text-left",
                  style: { backgroundColor: "rgba(245,197,24,0.10)" },
                  "data-ocid": "waste.toggle",
                  "aria-expanded": openSection === "waste",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "♻️" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-base", children: "Waste Management & EPR Compliance" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs mt-0.5", children: "EPR, Plastic Waste, E-Waste, Hazardous Waste, Biomedical Waste" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ArrowRight,
                      {
                        className: `w-5 h-5 transition-transform duration-200 ${openSection === "waste" ? "rotate-90" : ""}`,
                        style: { color: "#f5c518" }
                      }
                    )
                  ]
                }
              ),
              openSection === "waste" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5",
                  style: { backgroundColor: "rgba(255,255,255,0.02)" },
                  children: WASTE_SERVICES.map((service, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/services/pollution-control/$serviceSlug",
                      params: { serviceSlug: service.slug },
                      className: "flex items-start gap-3 p-4 rounded-xl hover:scale-[1.02] transition-all duration-200 group",
                      style: {
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(245,197,24,0.3)"
                      },
                      "data-ocid": `waste.service.item.${idx + 1}`,
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
          children: "Need Pollution Control Board Assistance?"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-base mb-6",
          style: { color: "#0a1628", opacity: 0.8 },
          children: "Our environmental compliance experts are available Mon–Sat 10 AM to 6 PM."
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
  PollutionControl as default
};
