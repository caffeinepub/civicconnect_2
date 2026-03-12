import { c as createLucideIcon, r as reactExports, u as useSubmitConsultationRequest, j as jsxRuntimeExports, C as CircleCheckBig, P as Phone, a as ChevronDown, L as LoaderCircle, b as Link, M as MessageCircle, g as getUTMSource, S as Star, d as MapPin } from "./index-pQi0h6D3.js";
import { A as ArrowRight } from "./arrow-right-D91ItDB4.js";
import { U as Users } from "./users-Ce274GPn.js";
import { A as Award } from "./award-P9Plhtaq.js";
import { C as Clock } from "./clock-B4qljaCH.js";
import { B as Briefcase } from "./briefcase-BuqImLu4.js";
import { S as Shield } from "./shield-O0i82q3O.js";
import { G as Globe } from "./globe-DgsyPXBV.js";
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
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
const SERVICES = [
  "Business Registration",
  "Tax & GST",
  "ISO Certification",
  "Compliance Service",
  "Government License",
  "Government Registration",
  "Labour Department",
  "Startup Service",
  "FSSAI License",
  "Trademark Registration",
  "Pollution Control Board",
  "Tender Services",
  "Digital Signature Certificate",
  "Agreement & Contract",
  "Small Business Support Service"
];
const FEATURED_SERVICES = [
  {
    icon: "🏢",
    title: "Business Registration",
    desc: "Private Ltd, LLP, OPC, Partnership & more",
    badge: "Most Popular"
  },
  {
    icon: "📊",
    title: "Tax & GST",
    desc: "GST registration, filing & tax compliance",
    badge: "Fast Track"
  },
  {
    icon: "🏆",
    title: "ISO Certification",
    desc: "ISO 9001, 14001, 22000 & more",
    badge: "Certified"
  },
  {
    icon: "📋",
    title: "Compliance Service",
    desc: "Annual filings & statutory compliance",
    badge: "Annual"
  },
  {
    icon: "🏛️",
    title: "Government License",
    desc: "Trade, drug, shop & establishment licenses",
    badge: "Official"
  },
  {
    icon: "📝",
    title: "Government Registration",
    desc: "MSME/Udyam, DPIIT & statutory registrations",
    badge: "Required"
  },
  {
    icon: "👷",
    title: "Labour Department",
    desc: "PF, ESI, labour license & compliance",
    badge: "Mandatory"
  },
  {
    icon: "🚀",
    title: "Startup Service",
    desc: "End-to-end startup support & compliance",
    badge: "New"
  },
  {
    icon: "🍽️",
    title: "FSSAI License",
    desc: "Food business license & compliance",
    badge: "Food Safety"
  },
  {
    icon: "™️",
    title: "Trademark Registration",
    desc: "Protect your brand identity",
    badge: "Legal"
  },
  {
    icon: "🌿",
    title: "Pollution Control Board",
    desc: "CTE & CTO certificates for industries",
    badge: "Environment"
  },
  {
    icon: "📑",
    title: "Tender Services",
    desc: "Government tender filing & bid management",
    badge: "Government"
  },
  {
    icon: "🔐",
    title: "Digital Signature Certificate",
    desc: "Class 2 & Class 3 DSC for all needs",
    badge: "DSC"
  },
  {
    icon: "📜",
    title: "Agreement & Contract",
    desc: "Drafting & registration of legal documents",
    badge: "Legal"
  },
  {
    icon: "🤝",
    title: "Small Business Support Service",
    desc: "Comprehensive support for SMEs & micro-enterprises",
    badge: "SME"
  }
];
const STATS = [
  {
    value: "15,000+",
    label: "Happy Clients",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5" })
  },
  {
    value: "100+",
    label: "Services Offered",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5" })
  },
  {
    value: "12+",
    label: "Years Experience",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5" })
  },
  { value: "5★", label: "Client Rating", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5" }) }
];
const STRENGTHS = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-7 h-7" }),
    title: "Expert Professionals",
    desc: "CA, CS & legal experts with years of industry experience"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-7 h-7" }),
    title: "Pan India Service",
    desc: "Serving clients across all 28 states & Union Territories"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-7 h-7" }),
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges whatsoever"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-7 h-7" }),
    title: "Fast Processing",
    desc: "Quick turnaround with dedicated relationship managers"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-7 h-7" }),
    title: "End-to-End Support",
    desc: "From registration to annual compliance, we're with you"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-7 h-7" }),
    title: "100% Online Process",
    desc: "Submit documents & track status from anywhere online"
  }
];
function WhatsAppIcon({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "WhatsApp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
      ]
    }
  );
}
function Home() {
  const [formData, setFormData] = reactExports.useState({
    fullName: "",
    phoneNumber: "",
    selectedService: "",
    cityState: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [submittedId, setSubmittedId] = reactExports.useState("");
  const submitMutation = useSubmitConsultationRequest();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber || !formData.selectedService || !formData.cityState)
      return;
    try {
      const utmSource = getUTMSource();
      const id = await submitMutation.mutateAsync({
        ...formData,
        utmSource
      });
      setSubmittedId(id);
      setSubmitted(true);
    } catch {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { backgroundColor: "#0a1628" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)",
          minHeight: "100vh"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-5",
              style: {
                backgroundImage: "repeating-linear-gradient(45deg, #f5c518 0, #f5c518 1px, transparent 0, transparent 50%)",
                backgroundSize: "20px 20px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest",
                  style: {
                    backgroundColor: "rgba(245,197,24,0.15)",
                    color: "#f5c518",
                    border: "1px solid rgba(245,197,24,0.3)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-green-400 animate-pulse" }),
                    "India's Trusted Compliance Partner"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#ffffff" }, children: "Start Your Business with" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "Our Compliance Experts" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 leading-relaxed max-w-xl", children: "From business registration to GST, ISO certification to trademark — we handle all your compliance needs across India. Fast, affordable, and 100% reliable." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-3 flex-wrap", children: [
                "Free Consultation",
                "Pan India Service",
                "12+ Years Experience"
              ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircleCheckBig,
                  {
                    className: "w-5 h-5 flex-shrink-0",
                    style: { color: "#f5c518" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-200", children: item })
              ] }, item)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:9279242122",
                    className: "flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all min-h-[52px]",
                    style: { backgroundColor: "#f5c518", color: "#0a1628" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
                      "Call Now: 9279242122"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://wa.me/918102906339",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all min-h-[52px]",
                    style: { backgroundColor: "#25D366", color: "#fff" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "w-5 h-5" }),
                      "WhatsApp Us"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4", children: STATS.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex flex-col items-center gap-1 p-3 rounded-xl text-center",
                  style: {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: stat.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-extrabold text-white", children: stat.value }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400", children: stat.label })
                  ]
                },
                stat.label
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-500 text-xs mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 animate-bounce" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scroll to explore our services" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "rounded-2xl overflow-hidden shadow-2xl",
                style: {
                  backgroundColor: "#fff",
                  border: "1px solid rgba(245,197,24,0.3)"
                },
                children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 py-8 px-6 md:px-8 text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-16 h-16 text-green-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "text-2xl font-bold",
                      style: { color: "#0a1628" },
                      children: "Thank You!"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 max-w-sm", children: "Your consultation request has been submitted. Our team will contact you shortly." }),
                  submittedId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "px-4 py-2 rounded-lg text-sm font-medium",
                      style: {
                        backgroundColor: "rgba(245,197,24,0.15)",
                        color: "#0a1628"
                      },
                      children: [
                        "Reference ID: ",
                        submittedId.slice(-8)
                      ]
                    }
                  )
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "px-6 md:px-8 py-5",
                      style: { backgroundColor: "#f5c518" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h2",
                          {
                            className: "text-2xl font-bold mb-1",
                            style: { color: "#0a1628" },
                            children: "Get Free Consultation"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm font-medium",
                            style: { color: "#0a1628" },
                            children: "Fill the form — our expert will call you back"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 md:px-8 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "form",
                    {
                      onSubmit: handleSubmit,
                      className: "flex flex-col gap-4",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "label",
                            {
                              htmlFor: "home-cta-full-name",
                              className: "block text-xs font-semibold text-gray-600 mb-1",
                              children: "Full Name *"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              id: "home-cta-full-name",
                              type: "text",
                              required: true,
                              placeholder: "Enter your full name",
                              value: formData.fullName,
                              onChange: (e) => setFormData({
                                ...formData,
                                fullName: e.target.value
                              }),
                              className: "w-full px-4 py-3 rounded-lg text-sm outline-none min-h-[44px]",
                              style: {
                                border: "1.5px solid #e5e7eb",
                                color: "#0a1628",
                                backgroundColor: "#f9fafb"
                              }
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "label",
                            {
                              htmlFor: "home-cta-phone",
                              className: "block text-xs font-semibold text-gray-600 mb-1",
                              children: "Phone Number *"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "flex items-center px-3 rounded-l-lg text-sm font-medium min-h-[44px]",
                                style: {
                                  backgroundColor: "#f3f4f6",
                                  border: "1.5px solid #e5e7eb",
                                  borderRight: "none",
                                  color: "#374151"
                                },
                                children: "+91"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                type: "tel",
                                required: true,
                                id: "home-cta-phone",
                                placeholder: "10-digit mobile number",
                                value: formData.phoneNumber,
                                onChange: (e) => setFormData({
                                  ...formData,
                                  phoneNumber: e.target.value
                                }),
                                className: "flex-1 px-4 py-3 rounded-r-lg text-sm outline-none min-h-[44px]",
                                style: {
                                  border: "1.5px solid #e5e7eb",
                                  borderLeft: "none",
                                  color: "#0a1628",
                                  backgroundColor: "#f9fafb"
                                },
                                maxLength: 10
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "label",
                            {
                              htmlFor: "home-cta-service",
                              className: "block text-xs font-semibold text-gray-600 mb-1",
                              children: "Select Service *"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "select",
                            {
                              id: "home-cta-service",
                              required: true,
                              value: formData.selectedService,
                              onChange: (e) => setFormData({
                                ...formData,
                                selectedService: e.target.value
                              }),
                              className: "w-full px-4 py-3 rounded-lg text-sm outline-none min-h-[44px]",
                              style: {
                                border: "1.5px solid #e5e7eb",
                                color: formData.selectedService ? "#0a1628" : "#9ca3af",
                                backgroundColor: "#f9fafb"
                              },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose a service..." }),
                                SERVICES.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: service, children: service }, service))
                              ]
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "label",
                            {
                              htmlFor: "home-cta-city",
                              className: "block text-xs font-semibold text-gray-600 mb-1",
                              children: "City / State *"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              id: "home-cta-city",
                              type: "text",
                              required: true,
                              placeholder: "e.g. Dhanbad, Jharkhand",
                              value: formData.cityState,
                              onChange: (e) => setFormData({
                                ...formData,
                                cityState: e.target.value
                              }),
                              className: "w-full px-4 py-3 rounded-lg text-sm outline-none min-h-[44px]",
                              style: {
                                border: "1.5px solid #e5e7eb",
                                color: "#0a1628",
                                backgroundColor: "#f9fafb"
                              }
                            }
                          )
                        ] }),
                        submitMutation.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-500", children: "Something went wrong. Please try again." }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "submit",
                            disabled: submitMutation.isPending,
                            className: "w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 min-h-[52px]",
                            style: { backgroundColor: "#f5c518", color: "#0a1628" },
                            children: submitMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }),
                              "Submitting..."
                            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                              "Get Free Consultation",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
                            ] })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-gray-400", children: "🔒 100% Free & Confidential. No spam, ever." })
                      ]
                    }
                  ) })
                ] })
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", style: { backgroundColor: "#0d1f3c" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4",
            style: {
              backgroundColor: "rgba(245,197,24,0.15)",
              color: "#f5c518"
            },
            children: "Our Services"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white mb-4", children: "Complete Compliance Solutions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 max-w-2xl mx-auto", children: "From business registration to annual compliance — we offer 100+ services to keep your business legally sound." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: FEATURED_SERVICES.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer",
          style: {
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl flex-shrink-0", children: service.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-white text-base", children: service.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0",
                    style: {
                      backgroundColor: "rgba(245,197,24,0.15)",
                      color: "#f5c518"
                    },
                    children: service.badge
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: service.desc })
            ] })
          ] })
        },
        service.title
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/services",
          className: "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all",
          style: { backgroundColor: "#f5c518", color: "#0a1628" },
          children: [
            "View All Services",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 px-4", style: { backgroundColor: "#0a1628" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-6", children: STATS.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center gap-2 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: stat.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl sm:text-4xl font-extrabold text-white", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-400 font-medium", children: stat.label })
        ]
      },
      stat.label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", style: { backgroundColor: "#0d1f3c" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4",
            style: {
              backgroundColor: "rgba(245,197,24,0.15)",
              color: "#f5c518"
            },
            children: "Why Choose Us"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white mb-4", children: "The YMW Advantage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 max-w-2xl mx-auto", children: "We combine expertise, technology, and dedication to deliver compliance services that truly make a difference." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: STRENGTHS.map((strength) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-6 rounded-2xl",
          style: {
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                style: {
                  backgroundColor: "rgba(245,197,24,0.15)",
                  color: "#f5c518"
                },
                children: strength.icon
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-white text-lg mb-2", children: strength.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: strength.desc })
          ]
        },
        strength.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", style: { backgroundColor: "#f5c518" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "text-3xl sm:text-4xl font-extrabold mb-4",
          style: { color: "#0a1628" },
          children: "Ready to Start Your Business Journey?"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-lg mb-8 font-medium",
          style: { color: "#0a1628", opacity: 0.8 },
          children: "Join 15,000+ businesses that trust YMW Compliance Services for their legal and compliance needs."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "tel:9279242122",
            className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all min-h-[52px]",
            style: { backgroundColor: "#0a1628", color: "#f5c518" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
              "Call: 9279242122"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://wa.me/918102906339",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all min-h-[52px]",
            style: { backgroundColor: "#25D366", color: "#fff" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "w-5 h-5" }),
              "WhatsApp Us"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/contact",
            className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all min-h-[52px]",
            style: {
              backgroundColor: "rgba(10,22,40,0.15)",
              color: "#0a1628",
              border: "2px solid #0a1628"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5" }),
              "Contact Us"
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  Home as default
};
