import { N as useParams, r as reactExports, j as jsxRuntimeExports, b as Link, C as CircleCheckBig, a as ChevronDown, M as MessageCircle, P as Phone, i as Mail } from "./index-DYEOqzqc.js";
import { g as getDSCServiceBySlug } from "./digitalSignatureServices-C-HgiAB9.js";
import { A as ArrowLeft } from "./arrow-left-BAQh0DID.js";
import { F as FileText } from "./file-text-B9i3n6Il.js";
import { C as ChevronUp } from "./chevron-up-DvmpEgdp.js";
import { S as Send } from "./send-Dq3foQRn.js";
const DEFAULT_PROCESS = [
  {
    title: "Free Consultation",
    desc: "Speak to our expert to understand which DSC type you need and the verification process."
  },
  {
    title: "Document Submission",
    desc: "Submit your PAN, Aadhaar, and other required documents digitally through our secure process."
  },
  {
    title: "Identity Verification",
    desc: "We complete the identity verification process required by the certifying authority."
  },
  {
    title: "DSC Issuance",
    desc: "Your DSC is issued and configured on a USB token within 1-2 working days."
  },
  {
    title: "Delivery & Support",
    desc: "The DSC token is delivered to you along with installation support and usage guidance."
  }
];
const DEFAULT_FAQS = [
  {
    q: "What is a Digital Signature Certificate?",
    a: "A DSC is an electronic equivalent of a physical signature. It is used to sign documents, authenticate identity, and file returns on government portals securely."
  },
  {
    q: "How long does it take to get a DSC?",
    a: "A DSC can typically be issued within 1-2 working days after successful document verification and identity confirmation."
  },
  {
    q: "How long is a DSC valid?",
    a: "DSCs are issued with a validity of 1 year or 2 years. After expiry, they need to be renewed to continue using them."
  },
  {
    q: "What is the difference between Class 2 and Class 3 DSC?",
    a: "Class 2 DSC is no longer issued by certifying authorities. Class 3 DSC is the current standard and is required for all e-tendering, MCA filings, GST, and income tax purposes."
  },
  {
    q: "Can I use one DSC for multiple purposes?",
    a: "Yes, a Class 3 DSC can be used across multiple government portals including MCA, GSTN, Income Tax, GeM, and e-tendering portals."
  }
];
function DigitalSignatureDetailPage() {
  const { serviceSlug } = useParams({ strict: false });
  const service = getDSCServiceBySlug(serviceSlug ?? "");
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
              to: "/services/digital-signature",
              className: "text-sm font-medium text-blue-600 hover:underline",
              children: "← Back to Digital Signature Certificate"
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { backgroundColor: "#dbeafe" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-12 px-4",
        style: {
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/services/digital-signature",
                className: "flex items-center gap-1 text-sm font-medium hover:opacity-80",
                style: { color: "#f5c518" },
                "data-ocid": "breadcrumb.back.link",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                  " Digital Signature Certificate"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-300", children: service.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl", children: service.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-extrabold text-white", children: service.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-300 mt-2 max-w-2xl", children: [
                service.description.slice(0, 120),
                "..."
              ] })
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-2xl p-6 shadow-sm",
            style: { border: "1.5px solid #FFC107" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h2",
                {
                  className: "text-xl font-extrabold mb-3",
                  style: { color: "#0a1628" },
                  children: [
                    "What is ",
                    service.title,
                    "?"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 leading-relaxed", children: service.description })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-2xl p-6 shadow-sm",
            style: { border: "1.5px solid #FFC107" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-xl font-extrabold mb-4",
                  style: { color: "#0a1628" },
                  children: "Key Benefits"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: service.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircleCheckBig,
                  {
                    className: "w-4 h-4 mt-0.5 flex-shrink-0",
                    style: { color: "#FFC107" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 text-sm", children: b })
              ] }, b.slice(0, 20))) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-2xl p-6 shadow-sm",
            style: { border: "1.5px solid #FFC107" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-xl font-extrabold mb-4",
                  style: { color: "#0a1628" },
                  children: "Documents Required"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: service.documents.map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      FileText,
                      {
                        className: "w-4 h-4 mt-0.5 flex-shrink-0",
                        style: { color: "#0a1628" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 text-sm", children: doc })
                  ]
                },
                doc.slice(0, 20)
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-2xl p-6 shadow-sm",
            style: { border: "1.5px solid #FFC107" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-xl font-extrabold mb-6",
                  style: { color: "#0a1628" },
                  children: "Our Process"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: process.map(
                (step, stepIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0",
                      style: { backgroundColor: "#FFC107", color: "#0a1628" },
                      children: stepIdx + 1
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: step.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm mt-0.5", children: step.desc })
                  ] })
                ] }, step.title)
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-2xl p-6 shadow-sm",
            style: { border: "1.5px solid #FFC107" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-xl font-extrabold mb-4",
                  style: { color: "#0a1628" },
                  children: "Frequently Asked Questions"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: faqs.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "border rounded-xl overflow-hidden",
                  style: { borderColor: "#e5e7eb" },
                  "data-ocid": `faq.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setOpenFaq(openFaq === i ? null : i),
                        className: "w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold text-gray-800 hover:bg-yellow-50",
                        "data-ocid": `faq.toggle.${i + 1}`,
                        children: [
                          faq.q,
                          openFaq === i ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 flex-shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 flex-shrink-0" })
                        ]
                      }
                    ),
                    openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-3 text-sm text-gray-600 bg-yellow-50", children: faq.a })
                  ]
                },
                faq.q.slice(0, 20)
              )) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl overflow-hidden shadow-md sticky top-4",
            style: { border: "1.5px solid #FFC107" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4", style: { backgroundColor: "#0a1628" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-5 h-5", style: { color: "#FFC107" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-base", children: "Get Free Consultation" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs mt-1", children: "Our advisor will call you in 15 min." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-2 flex-wrap", children: ["5 ★ Rating", "100% Free", "15 Min Callback"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-2 py-0.5 rounded-full text-xs font-bold",
                    style: {
                      backgroundColor: "rgba(245,197,24,0.15)",
                      color: "#f5c518"
                    },
                    children: b
                  },
                  b
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-5", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircleCheckBig,
                  {
                    className: "w-10 h-10 mx-auto mb-2",
                    style: { color: "#22c55e" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-800", children: "We'll call you shortly!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Our advisor will reach you in 15 minutes." })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "form",
                {
                  onSubmit: handleSubmit,
                  className: "space-y-3",
                  "data-ocid": "consultation.form",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "label",
                        {
                          htmlFor: "cons-name",
                          className: "text-xs font-semibold text-gray-700 block mb-1",
                          children: "Full Name *"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "cons-name",
                          type: "text",
                          required: true,
                          className: "w-full border rounded-lg px-3 py-2 text-sm",
                          style: { borderColor: "#d1d5db" },
                          value: form.name,
                          onChange: (e) => setForm({ ...form, name: e.target.value }),
                          "data-ocid": "consultation.name.input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "label",
                        {
                          htmlFor: "cons-phone",
                          className: "text-xs font-semibold text-gray-700 block mb-1",
                          children: "Phone Number *"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "cons-phone",
                          type: "tel",
                          required: true,
                          className: "w-full border rounded-lg px-3 py-2 text-sm",
                          style: { borderColor: "#d1d5db" },
                          value: form.phone,
                          onChange: (e) => setForm({ ...form, phone: e.target.value }),
                          "data-ocid": "consultation.phone.input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "label",
                        {
                          htmlFor: "cons-email",
                          className: "text-xs font-semibold text-gray-700 block mb-1",
                          children: "Email Address"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "cons-email",
                          type: "email",
                          className: "w-full border rounded-lg px-3 py-2 text-sm",
                          style: { borderColor: "#d1d5db" },
                          value: form.email,
                          onChange: (e) => setForm({ ...form, email: e.target.value }),
                          "data-ocid": "consultation.email.input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "label",
                        {
                          htmlFor: "cons-msg",
                          className: "text-xs font-semibold text-gray-700 block mb-1",
                          children: "Message"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "textarea",
                        {
                          id: "cons-msg",
                          className: "w-full border rounded-lg px-3 py-2 text-sm",
                          style: { borderColor: "#d1d5db" },
                          rows: 3,
                          value: form.message,
                          onChange: (e) => setForm({ ...form, message: e.target.value }),
                          "data-ocid": "consultation.message.textarea"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "submit",
                        className: "w-full py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity",
                        style: { backgroundColor: "#FFC107", color: "#0a1628" },
                        "data-ocid": "consultation.submit.button",
                        children: "Get Free Consultation"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-gray-500", children: "🔒 100% Free & Confidential" })
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-2xl p-5 shadow-sm",
            style: { border: "1.5px solid #FFC107" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-gray-500 uppercase tracking-widest mb-3", children: "Or Contact Directly" }),
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
                      " WhatsApp Us"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:9279242122",
                    className: "flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity",
                    style: { backgroundColor: "#1d4ed8" },
                    "data-ocid": "contact.call.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                      " Call Us: +91 9279242122"
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
            className: "bg-white rounded-2xl p-5 shadow-sm",
            style: { border: "1.5px solid #FFC107" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm font-extrabold mb-3",
                  style: { color: "#0a1628" },
                  children: "Why Choose YMW?"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
                "15,000+ businesses served",
                "12+ years of expertise",
                "100+ services portfolio",
                "Pan India coverage",
                "Mon-Sat 10 AM - 6 PM support"
              ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CircleCheckBig,
                  {
                    className: "w-4 h-4 mt-0.5 flex-shrink-0",
                    style: { color: "#FFC107" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-700", children: item })
              ] }, item)) })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  DigitalSignatureDetailPage as default
};
