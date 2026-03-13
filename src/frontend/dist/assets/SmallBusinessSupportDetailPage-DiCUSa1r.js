import { N as useParams, r as reactExports, j as jsxRuntimeExports, b as Link, C as CircleCheckBig, a as ChevronDown, M as MessageCircle, P as Phone, i as Mail } from "./index-DYEOqzqc.js";
import { g as getSmallBusinessServiceBySlug } from "./smallBusinessServices-Ghsk120E.js";
import { A as ArrowLeft } from "./arrow-left-BAQh0DID.js";
import { F as FileText } from "./file-text-B9i3n6Il.js";
import { C as ChevronUp } from "./chevron-up-DvmpEgdp.js";
import { S as Send } from "./send-Dq3foQRn.js";
const DEFAULT_PROCESS = [
  {
    title: "Free Consultation",
    desc: "Speak to our expert and understand your requirements, timeline, and documents needed."
  },
  {
    title: "Document Collection",
    desc: "We guide you through collecting and preparing all required documents."
  },
  {
    title: "Service Execution",
    desc: "Our team prepares and delivers the requested service with precision and quality."
  },
  {
    title: "Review & Revisions",
    desc: "You review the deliverable, suggest changes, and we refine until you are satisfied."
  },
  {
    title: "Final Delivery",
    desc: "The completed work is delivered and we advise on next steps for your business."
  }
];
const DEFAULT_FAQS = [
  {
    q: "How quickly can you complete this service?",
    a: "Timelines vary by service. We provide a clear estimate during the free consultation call. Most services are completed within 3–10 business days."
  },
  {
    q: "What is the cost for this service?",
    a: "Costs depend on the scope and complexity of your requirements. Contact us for a free consultation and transparent pricing with no hidden charges."
  },
  {
    q: "Do I need to visit your office?",
    a: "No. All our services are delivered remotely. You only need to provide documents and approvals online or via WhatsApp."
  },
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. We treat all client information with the highest level of confidentiality and data security."
  },
  {
    q: "Do you offer support after delivery?",
    a: "Yes. We provide post-delivery support including revisions and guidance for any follow-up actions required."
  }
];
function SmallBusinessSupportDetailPage() {
  const { serviceSlug } = useParams({ strict: false });
  const service = getSmallBusinessServiceBySlug(serviceSlug ?? "");
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  if (!service) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-screen flex flex-col items-center justify-center gap-4",
        style: { backgroundColor: "#dbeafe" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 text-xl font-bold", children: "Service not found." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/services/small-business-support",
              className: "text-sm font-medium text-blue-600 hover:underline",
              children: "← Back to Small Business Support"
            }
          )
        ]
      }
    );
  }
  const process = service.process ?? DEFAULT_PROCESS;
  const faqs = service.faqs ?? DEFAULT_FAQS;
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { backgroundColor: "#dbeafe" }, className: "min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 pt-6 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-2 text-sm text-gray-500 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/services",
          className: "hover:text-blue-700 font-medium",
          "data-ocid": "breadcrumb.services.link",
          children: "Services"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/services/small-business-support",
          className: "hover:text-blue-700 font-medium",
          "data-ocid": "breadcrumb.small-business.link",
          children: "Small Business Support"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 font-semibold truncate max-w-[200px]", children: service.title })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "py-10 px-4 mb-8",
        style: {
          background: "linear-gradient(135deg, #1e3a5f 0%, #0d2344 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/services/small-business-support",
              className: "inline-flex items-center gap-1 text-sm font-medium mb-4 hover:opacity-80 transition-opacity",
              style: { color: "#FFC107" },
              "data-ocid": "back.small-business.link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                " Back to Small Business Support"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl", children: service.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-extrabold text-white", children: service.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-yellow-300 text-sm mt-1 font-medium", children: "YMW Compliance Services LLP · Dhanbad, Jharkhand" })
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "bg-white rounded-2xl p-6 shadow-sm",
            style: { border: "1px solid #e2e8f0" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h2",
                {
                  className: "text-xl font-extrabold mb-3",
                  style: { color: "#1e3a5f" },
                  children: [
                    "What is ",
                    service.title,
                    "?"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed text-sm", children: service.description })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "bg-white rounded-2xl p-6 shadow-sm",
            style: { border: "1px solid #e2e8f0" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-xl font-extrabold mb-4",
                  style: { color: "#1e3a5f" },
                  children: "Key Benefits"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: service.benefits.map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircleCheckBig,
                  {
                    className: "w-4 h-4 mt-0.5 flex-shrink-0",
                    style: { color: "#FFC107" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-700", children: benefit })
              ] }, benefit)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "bg-white rounded-2xl p-6 shadow-sm",
            style: { border: "1px solid #e2e8f0" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-xl font-extrabold mb-4",
                  style: { color: "#1e3a5f" },
                  children: "Documents Required"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: service.documents.map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FileText,
                  {
                    className: "w-4 h-4 mt-0.5 flex-shrink-0",
                    style: { color: "#1e3a5f" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-700", children: doc })
              ] }, doc)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "bg-white rounded-2xl p-6 shadow-sm",
            style: { border: "1px solid #e2e8f0" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-xl font-extrabold mb-6",
                  style: { color: "#1e3a5f" },
                  children: "Our Process"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: process.map(
                (step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0",
                      style: {
                        backgroundColor: "#FFC107",
                        color: "#1e3a5f"
                      },
                      children: idx + 1
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-bold text-sm",
                        style: { color: "#1e3a5f" },
                        children: step.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: step.desc })
                  ] })
                ] }, step.title)
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "bg-white rounded-2xl p-6 shadow-sm",
            style: { border: "1px solid #e2e8f0" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-xl font-extrabold mb-4",
                  style: { color: "#1e3a5f" },
                  children: "Frequently Asked Questions"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: faqs.map((faq, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-xl overflow-hidden",
                  style: { border: "1px solid #e2e8f0" },
                  "data-ocid": `faq.item.${idx + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setOpenFaq(openFaq === idx ? null : idx),
                        className: "w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold",
                        style: { color: "#1e3a5f", backgroundColor: "#f8fafc" },
                        "data-ocid": `faq.toggle.${idx + 1}`,
                        children: [
                          faq.q,
                          openFaq === idx ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 flex-shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 flex-shrink-0" })
                        ]
                      }
                    ),
                    openFaq === idx && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 text-sm text-gray-600 bg-white", children: faq.a })
                  ]
                },
                faq.q
              )) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:w-80 xl:w-96 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl overflow-hidden shadow-lg",
            style: { border: "1px solid #e2e8f0" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "px-5 py-4",
                  style: { backgroundColor: "#1e3a5f" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4", style: { color: "#FFC107" } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-extrabold text-base", children: "Get Free Expert Consultation" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "#FFC107" }, children: "Our advisor will call you in 15 min." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mt-2", children: ["⭐ 5 Rating", "✅ 100% Free", "⏱ 15 Min Callback"].map(
                      (badge) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs px-2 py-0.5 rounded-full font-semibold",
                          style: {
                            backgroundColor: "rgba(255,193,7,0.15)",
                            color: "#FFC107"
                          },
                          children: badge
                        },
                        badge
                      )
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-5", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-center py-6",
                  "data-ocid": "consultation.success_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheckBig,
                      {
                        className: "w-10 h-10 mx-auto mb-3",
                        style: { color: "#22c55e" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-800", children: "Request Submitted!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Our expert will call you within 15 minutes." })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Your Name",
                    value: form.name,
                    onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })),
                    required: true,
                    className: "w-full px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2",
                    style: {
                      border: "1px solid #d1d5db",
                      color: "#1e293b"
                    },
                    "data-ocid": "consultation.input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Phone Number",
                    value: form.phone,
                    onChange: (e) => setForm((f) => ({ ...f, phone: e.target.value })),
                    required: true,
                    className: "w-full px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2",
                    style: {
                      border: "1px solid #d1d5db",
                      color: "#1e293b"
                    },
                    "data-ocid": "consultation.input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    placeholder: "Email Address",
                    value: form.email,
                    onChange: (e) => setForm((f) => ({ ...f, email: e.target.value })),
                    className: "w-full px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2",
                    style: {
                      border: "1px solid #d1d5db",
                      color: "#1e293b"
                    },
                    "data-ocid": "consultation.input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    placeholder: "Service you need / Message (optional)",
                    value: form.message,
                    onChange: (e) => setForm((f) => ({ ...f, message: e.target.value })),
                    rows: 3,
                    className: "w-full px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2 resize-none",
                    style: {
                      border: "1px solid #d1d5db",
                      color: "#1e293b"
                    },
                    "data-ocid": "consultation.textarea"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    className: "w-full py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity",
                    style: {
                      backgroundColor: "#FFC107",
                      color: "#1e3a5f"
                    },
                    "data-ocid": "consultation.submit_button",
                    children: "Get Free Consultation"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center text-gray-400", children: "🔒 100% Free & Confidential" })
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-2xl p-5 shadow-sm",
            style: { border: "1px solid #e2e8f0" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs font-bold uppercase tracking-widest mb-3",
                  style: { color: "#1e3a5f" },
                  children: "OR CONTACT DIRECTLY"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://wa.me/918102906339",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity",
                    style: { backgroundColor: "#25D366" },
                    "data-ocid": "contact.whatsapp.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                      "WhatsApp: +91 81029 06339"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:9279242122",
                    className: "flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity",
                    style: { backgroundColor: "#1e3a5f" },
                    "data-ocid": "contact.call.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                      "Call Us: +91 9279242122"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "mailto:ymwcompliances@gmail.com",
                    className: "flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity",
                    style: { backgroundColor: "#7c3aed" },
                    "data-ocid": "contact.email.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                      "ymwcompliances@gmail.com"
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-5 shadow-sm",
            style: {
              backgroundColor: "#1e3a5f",
              border: "1px solid rgba(255,193,7,0.3)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "text-sm font-extrabold uppercase tracking-widest mb-4",
                  style: { color: "#FFC107" },
                  children: "Why Choose YMW Compliance?"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
                "15,000+ businesses served",
                "12+ years of expertise",
                "100+ services portfolio",
                "Pan India coverage",
                "Mon–Sat 10 AM – 6 PM support"
              ].map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircleCheckBig,
                  {
                    className: "w-3.5 h-3.5 mt-0.5 flex-shrink-0",
                    style: { color: "#FFC107" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-200", children: point })
              ] }, point)) })
            ]
          }
        )
      ] }) })
    ] }) })
  ] });
}
export {
  SmallBusinessSupportDetailPage as default
};
