import { N as useParams, r as reactExports, j as jsxRuntimeExports, b as Link, C as CircleCheckBig, a as ChevronDown, M as MessageCircle, P as Phone, i as Mail } from "./index-DwCD6ubM.js";
import { g as getServiceBySlug } from "./governmentLicensesServices-Dq1hbMWS.js";
import { F as FileText } from "./file-text-DjMIfHoO.js";
import { C as ChevronUp } from "./chevron-up-D_tVYPLR.js";
import { A as ArrowLeft } from "./arrow-left-D-VHFeoG.js";
import { S as Send } from "./send-BxUIabun.js";
const DEFAULT_PROCESS = [
  {
    title: "Free Consultation",
    desc: "Speak to our expert and understand the licensing requirements, timeline, and documents needed."
  },
  {
    title: "Document Collection",
    desc: "We guide you through collecting and preparing all required documents for the application."
  },
  {
    title: "Application Filing",
    desc: "Our team prepares and submits the license application with the relevant government authority."
  },
  {
    title: "Follow-up & Inspection Support",
    desc: "We follow up with the authority, coordinate site inspections, and resolve all queries."
  },
  {
    title: "License Delivery",
    desc: "Upon approval, the license certificate is delivered to you and we advise on renewal timelines."
  }
];
const DEFAULT_FAQS = [
  {
    q: "How long does it take to get the license?",
    a: "Timelines vary by license type and state. Simple licenses like Trade License take 7–15 days, while specialized licenses like PSARA or PESO can take 30–90 days. We provide a clear estimate upfront."
  },
  {
    q: "What is the cost involved?",
    a: "Costs depend on the license type and your state. Contact us for a free consultation and transparent pricing with no hidden charges."
  },
  {
    q: "Do I need to visit the government office?",
    a: "In most cases, no. Our team handles all filings and follow-ups on your behalf. You only need to provide documents and sign where required."
  },
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. We treat all client information with the highest level of confidentiality and data security."
  },
  {
    q: "What happens after the license is obtained?",
    a: "We deliver the license digitally and advise on renewal dates and ongoing compliance requirements to keep your license valid."
  }
];
function GovernmentLicensesDetailPage() {
  const { serviceSlug } = useParams({ strict: false });
  const service = getServiceBySlug(serviceSlug ?? "");
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
              to: "/services/government-licenses",
              className: "text-sm font-medium text-blue-600 hover:underline",
              children: "← Back to Government Licenses"
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
          to: "/services/government-licenses",
          className: "hover:text-blue-700 font-medium",
          "data-ocid": "breadcrumb.govlicenses.link",
          children: "Government Licenses"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 font-semibold truncate max-w-xs", children: service.title })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 pt-3 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight", children: service.title }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 pb-20 flex flex-col lg:flex-row gap-6 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col gap-5 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-xl p-6 border border-gray-200 shadow-sm",
            "data-ocid": "service.description.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-bold text-gray-900 mb-2", children: [
                "What is ",
                service.title,
                "?"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: service.description })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-xl p-6 border border-gray-200 shadow-sm",
            "data-ocid": "service.benefits.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-gray-900 mb-4", children: "Key Benefits" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: service.benefits.map((benefit, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-2",
                  "data-ocid": `benefits.item.${idx + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-700", children: benefit })
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
            className: "bg-white rounded-xl p-6 border border-gray-200 shadow-sm",
            "data-ocid": "service.documents.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-gray-900 mb-4", children: "Documents Required" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: service.documents.map((doc, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-3 text-sm text-gray-700",
                  "data-ocid": `documents.item.${idx + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" }),
                    doc
                  ]
                },
                doc
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-xl p-6 border border-gray-200 shadow-sm",
            "data-ocid": "service.process.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-gray-900 mb-5", children: "Our Process" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-5", children: process.map(
                (step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-4",
                    "data-ocid": `process.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-extrabold text-white",
                          style: { backgroundColor: "#0a1628" },
                          children: idx + 1
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-gray-900", children: step.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-0.5", children: step.desc })
                      ] })
                    ]
                  },
                  step.title
                )
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-xl p-6 border border-gray-200 shadow-sm",
            "data-ocid": "service.faqs.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-gray-900 mb-4", children: "Frequently Asked Questions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col divide-y divide-gray-100", children: faqs.map((faq, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": `faq.item.${idx + 1}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "w-full flex items-center justify-between py-4 text-left gap-3",
                    onClick: () => setOpenFaq(openFaq === idx ? null : idx),
                    "data-ocid": `faq.toggle.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-gray-800", children: faq.q }),
                      openFaq === idx ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 flex-shrink-0 text-gray-400" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 flex-shrink-0 text-gray-400" })
                    ]
                  }
                ),
                openFaq === idx && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 pb-4 leading-relaxed", children: faq.a })
              ] }, faq.q)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/services/government-licenses",
            className: "inline-flex items-center gap-1 text-sm text-blue-600 hover:underline font-medium",
            "data-ocid": "back.govlicenses.link",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
              " Back to Government Licenses"
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full lg:w-80 flex-shrink-0 flex flex-col gap-5 lg:sticky lg:top-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl overflow-hidden border border-gray-200 shadow-sm",
            "data-ocid": "sidebar.consultation.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4", style: { backgroundColor: "#0a1628" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-bold text-base", children: "Get Free Consultation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-300 text-xs mt-0.5", children: [
                  "For ",
                  service.title
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-5", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-center py-6",
                  "data-ocid": "sidebar.form.success_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-10 h-10 text-green-500 mx-auto mb-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-gray-800", children: "Thank you!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Our advisor will call you within 15 minutes." })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "gl-name",
                      className: "text-xs font-semibold text-gray-700 mb-1 block",
                      children: "Full Name *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "gl-name",
                      required: true,
                      value: form.name,
                      onChange: (e) => setForm({ ...form, name: e.target.value }),
                      placeholder: "Your full name",
                      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500",
                      "data-ocid": "sidebar.name.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "gl-phone",
                      className: "text-xs font-semibold text-gray-700 mb-1 block",
                      children: "Phone Number *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "gl-phone",
                      required: true,
                      value: form.phone,
                      onChange: (e) => setForm({ ...form, phone: e.target.value }),
                      placeholder: "+91 XXXXX XXXXX",
                      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500",
                      "data-ocid": "sidebar.phone.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "gl-email",
                      className: "text-xs font-semibold text-gray-700 mb-1 block",
                      children: "Email *"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "gl-email",
                      required: true,
                      type: "email",
                      value: form.email,
                      onChange: (e) => setForm({ ...form, email: e.target.value }),
                      placeholder: "you@example.com",
                      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500",
                      "data-ocid": "sidebar.email.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "gl-message",
                      className: "text-xs font-semibold text-gray-700 mb-1 block",
                      children: "Message (Optional)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      id: "gl-message",
                      value: form.message,
                      onChange: (e) => setForm({ ...form, message: e.target.value }),
                      placeholder: "Tell us more about your requirement...",
                      rows: 3,
                      className: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 resize-none",
                      "data-ocid": "sidebar.message.textarea"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "submit",
                    className: "w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity",
                    style: { backgroundColor: "#f5c518", color: "#0a1628" },
                    "data-ocid": "sidebar.submit.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                      " Submit Enquiry"
                    ]
                  }
                )
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5",
            "data-ocid": "sidebar.contact.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-3", children: "Or Contact Directly" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://wa.me/918102906339",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90",
                    style: { backgroundColor: "#e8f9ee", color: "#128c7e" },
                    "data-ocid": "sidebar.whatsapp.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm", children: "WhatsApp" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-80", children: "+91 8102906339" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:9279242122",
                    className: "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90",
                    style: { backgroundColor: "#e8f0fe", color: "#1a3c78" },
                    "data-ocid": "sidebar.call.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm", children: "Call Us" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-80", children: "9279242122 / 9241136368" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "mailto:ymwcompliances@gmail.com",
                    className: "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90",
                    style: { backgroundColor: "#f3e8ff", color: "#6b21a8" },
                    "data-ocid": "sidebar.email.button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm", children: "Email" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-80", children: "ymwcompliances@gmail.com" })
                      ] })
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
            className: "bg-white rounded-xl border border-gray-200 shadow-sm p-5",
            "data-ocid": "sidebar.whychooseus.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-3", children: "Why Choose Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2", children: [
                "15,000+ businesses served",
                "12+ years of expertise",
                "100+ services portfolio",
                "Pan India coverage",
                "Mon–Sat 10 AM – 6 PM support"
              ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-center gap-2 text-sm text-gray-700",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 flex-shrink-0 text-green-500" }),
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
  GovernmentLicensesDetailPage as default
};
