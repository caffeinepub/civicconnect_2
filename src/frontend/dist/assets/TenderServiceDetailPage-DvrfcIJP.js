import { N as useParams, r as reactExports, j as jsxRuntimeExports, b as Link, P as Phone, M as MessageCircle, C as CircleCheckBig, a as ChevronDown, i as Mail } from "./index-DYEOqzqc.js";
import { g as getTenderServiceBySlug } from "./tenderServices-UH5qYjk6.js";
import { F as FileText } from "./file-text-B9i3n6Il.js";
import { C as ChevronUp } from "./chevron-up-DvmpEgdp.js";
import { A as ArrowLeft } from "./arrow-left-BAQh0DID.js";
import { S as Send } from "./send-Dq3foQRn.js";
const DEFAULT_PROCESS = [
  {
    title: "Free Consultation",
    desc: "Speak to our tender expert and understand the registration requirements, eligibility criteria, and documents needed."
  },
  {
    title: "Document Collection",
    desc: "We guide you through collecting and preparing all required documents for the portal registration or tender submission."
  },
  {
    title: "Registration / Submission",
    desc: "Our team completes the portal registration or prepares and submits the tender bid on your behalf."
  },
  {
    title: "Follow-up & Coordination",
    desc: "We follow up with the portal authority, track your bid status, and coordinate any clarifications needed."
  },
  {
    title: "Order Management",
    desc: "Upon successful registration or bid win, we guide you on order management, delivery compliance, and payment follow-up."
  }
];
const DEFAULT_FAQS = [
  {
    q: "Which government portals can you register us on?",
    a: "We register businesses on GeM, IREPS, CPPP, Jharkhand e-Procurement, SAIL, NTPC, Defence portals, and many other central and state government procurement platforms."
  },
  {
    q: "Is GeM registration mandatory for selling to the government?",
    a: "Yes, for most central government purchases, GeM is the primary procurement channel. GeM registration is strongly recommended and often mandatory for selling to government departments and PSUs."
  },
  {
    q: "How long does GeM registration take?",
    a: "GeM registration typically takes 3–7 working days with all documents ready. We handle the complete process and keep you updated at every step."
  },
  {
    q: "Can we participate in tenders without prior experience?",
    a: "Yes, many tenders have provisions for new businesses, MSMEs, and startups. We analyze your eligibility and identify suitable tenders where you can qualify and compete."
  },
  {
    q: "What is the cost of your tender submission service?",
    a: "Costs depend on the complexity of the tender and scope of work. Contact us for a free consultation and transparent pricing with no hidden charges."
  }
];
function TenderServiceDetailPage() {
  const { serviceSlug } = useParams({ strict: false });
  const service = getTenderServiceBySlug(serviceSlug ?? "");
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
              to: "/services/tender-service",
              className: "text-sm font-medium text-blue-600 hover:underline",
              children: "← Back to Tender Services"
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
          to: "/services/tender-service",
          className: "hover:text-blue-700 font-medium",
          "data-ocid": "breadcrumb.tender.link",
          children: "Tender Services"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 font-semibold truncate max-w-xs", children: service.title })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-6",
            style: {
              background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)",
              border: "2px solid #FFC107"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: service.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl md:text-3xl font-extrabold text-white leading-tight", children: service.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-yellow-400 text-sm font-semibold mt-1", children: "YMW Compliance Services LLP" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 leading-relaxed text-sm md:text-base", children: service.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:9279242122",
                    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity",
                    style: { backgroundColor: "#f5c518", color: "#0a1628" },
                    "data-ocid": "service.call.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                      " Call Now"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://wa.me/918102906339",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity",
                    style: { backgroundColor: "#25D366", color: "white" },
                    "data-ocid": "service.whatsapp.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                      " WhatsApp"
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
            className: "rounded-2xl p-6 bg-white",
            style: { border: "2px solid #FFC107" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-lg font-extrabold mb-4",
                  style: { color: "#0a1628" },
                  children: "✅ Key Benefits"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: service.benefits.map((benefit) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircleCheckBig,
                  {
                    className: "w-4 h-4 flex-shrink-0 mt-0.5",
                    style: { color: "#f5c518" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-700", children: benefit })
              ] }, benefit)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-6 bg-white",
            style: { border: "2px solid #FFC107" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-lg font-extrabold mb-4",
                  style: { color: "#0a1628" },
                  children: "📁 Documents Required"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: service.documents.map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FileText,
                  {
                    className: "w-4 h-4 flex-shrink-0 mt-0.5",
                    style: { color: "#f5c518" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-700", children: doc })
              ] }, doc)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-6 bg-white",
            style: { border: "2px solid #FFC107" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-lg font-extrabold mb-5",
                  style: { color: "#0a1628" },
                  children: "🔄 Our Process"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: process.map(
                (step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold",
                      style: { backgroundColor: "#f5c518", color: "#0a1628" },
                      children: i + 1
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-bold text-sm",
                        style: { color: "#0a1628" },
                        children: step.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-0.5", children: step.desc })
                  ] })
                ] }, step.title)
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-6 bg-white",
            style: { border: "2px solid #FFC107" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-lg font-extrabold mb-4",
                  style: { color: "#0a1628" },
                  children: "❓ Frequently Asked Questions"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "border rounded-xl overflow-hidden",
                  style: { borderColor: "rgba(245,197,24,0.3)" },
                  "data-ocid": `faq.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setOpenFaq(openFaq === i ? null : i),
                        className: "w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold hover:bg-yellow-50 transition-colors",
                        style: { color: "#0a1628" },
                        "data-ocid": `faq.toggle.${i + 1}`,
                        children: [
                          faq.q,
                          openFaq === i ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ChevronUp,
                            {
                              className: "w-4 h-4 flex-shrink-0",
                              style: { color: "#f5c518" }
                            }
                          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ChevronDown,
                            {
                              className: "w-4 h-4 flex-shrink-0",
                              style: { color: "#f5c518" }
                            }
                          )
                        ]
                      }
                    ),
                    openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-3 text-sm text-gray-600 bg-yellow-50", children: faq.a })
                  ]
                },
                faq.q
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/services/tender-service",
            className: "inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity",
            style: { color: "#0a1628" },
            "data-ocid": "back.tender.link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
              " Back to Tender Services"
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 lg:sticky lg:top-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl overflow-hidden shadow-lg",
            style: { border: "2px solid #FFC107" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "px-5 py-4",
                  style: {
                    background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-extrabold text-base", children: "🎯 Get Free Expert Consultation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-yellow-300 text-xs mt-1", children: "Our advisor will call you in 15 min." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-2 flex-wrap", children: ["⭐ 5 Rating", "100% Free", "15 Min Callback"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs px-2 py-0.5 rounded-full font-semibold",
                        style: {
                          backgroundColor: "rgba(245,197,24,0.2)",
                          color: "#f5c518"
                        },
                        children: b
                      },
                      b
                    )) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 bg-white", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-center py-6",
                  "data-ocid": "consultation.success_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "✅" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-green-700", children: "Request Submitted!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Our expert will call you within 15 minutes." })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Your Full Name",
                    value: form.name,
                    onChange: (e) => setForm({ ...form, name: e.target.value }),
                    required: true,
                    className: "w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2",
                    style: { borderColor: "#cbd5e1", color: "#0a1628" },
                    "data-ocid": "consultation.name.input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Mobile Number",
                    value: form.phone,
                    onChange: (e) => setForm({ ...form, phone: e.target.value }),
                    required: true,
                    className: "w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2",
                    style: { borderColor: "#cbd5e1", color: "#0a1628" },
                    "data-ocid": "consultation.phone.input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "email",
                    placeholder: "Email Address",
                    value: form.email,
                    onChange: (e) => setForm({ ...form, email: e.target.value }),
                    className: "w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2",
                    style: { borderColor: "#cbd5e1", color: "#0a1628" },
                    "data-ocid": "consultation.email.input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    placeholder: "Brief your requirement (optional)",
                    value: form.message,
                    onChange: (e) => setForm({ ...form, message: e.target.value }),
                    rows: 2,
                    className: "w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 resize-none",
                    style: { borderColor: "#cbd5e1", color: "#0a1628" },
                    "data-ocid": "consultation.message.textarea"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "submit",
                    className: "w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity",
                    style: { backgroundColor: "#f5c518", color: "#0a1628" },
                    "data-ocid": "consultation.submit_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                      " Get Free Consultation"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-gray-400", children: "🔒 100% Free & Confidential" })
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl p-5 bg-white",
            style: { border: "2px solid #FFC107" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-extrabold text-sm mb-3",
                  style: { color: "#0a1628" },
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
                    className: "flex items-center gap-2 w-full px-4 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity",
                    style: { backgroundColor: "#25D366", color: "white" },
                    "data-ocid": "contact.whatsapp.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                      " WhatsApp Chat"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:9279242122",
                    className: "flex items-center gap-2 w-full px-4 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity",
                    style: { backgroundColor: "#1d4ed8", color: "white" },
                    "data-ocid": "contact.call.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                      " Call Us: 92792 42122"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "mailto:ymwcompliances@gmail.com",
                    className: "flex items-center gap-2 w-full px-4 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity",
                    style: { backgroundColor: "#7c3aed", color: "white" },
                    "data-ocid": "contact.email.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                      " Email Us"
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
            className: "rounded-2xl p-5",
            style: {
              background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)",
              border: "2px solid #FFC107"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-extrabold text-sm mb-3", children: "🏆 Why Choose Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
                "15,000+ businesses served",
                "12+ years of expertise",
                "100+ services portfolio",
                "Pan India coverage",
                "Mon–Sat 10 AM – 6 PM support"
              ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-center gap-2 text-xs text-gray-300",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheckBig,
                      {
                        className: "w-3.5 h-3.5 flex-shrink-0",
                        style: { color: "#f5c518" }
                      }
                    ),
                    item
                  ]
                },
                item
              )) })
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  TenderServiceDetailPage as default
};
