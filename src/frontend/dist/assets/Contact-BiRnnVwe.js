import { c as createLucideIcon, r as reactExports, f as useSubmitContactMessage, j as jsxRuntimeExports, P as Phone, h as Mail, d as MapPin, S as Star, C as CircleCheckBig, L as LoaderCircle } from "./index-pQi0h6D3.js";
import { F as FreeConsultationSection } from "./FreeConsultationSection-WfcUtkp_.js";
import { C as Clock } from "./clock-B4qljaCH.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode);
function Contact() {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [referenceId, setReferenceId] = reactExports.useState("");
  const submitMutation = useSubmitContactMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = await submitMutation.mutateAsync(formData);
      setReferenceId(id);
      setSubmitted(true);
    } catch {
    }
  };
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
              children: "Contact Us"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-extrabold text-white mb-4", children: [
            "Get In ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "Touch" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 max-w-2xl mx-auto", children: "Have questions? Our compliance experts are ready to help you." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", style: { backgroundColor: "#0d1f3c" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-white mb-2", children: "Contact Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400", children: "Reach us through any of the following channels" })
        ] }),
        [
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
            label: "Phone",
            value: "+91 9279242122",
            href: "tel:9279242122"
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5" }),
            label: "Email",
            value: "ymwcompliances@gmail.com",
            href: "mailto:ymwcompliances@gmail.com"
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5" }),
            label: "Address",
            value: "Dhanbad, Jharkhand, India",
            href: null
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5" }),
            label: "Hours",
            value: "Mon–Sat: 9 AM – 6 PM",
            href: null
          }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-start gap-4 p-4 rounded-xl",
            style: {
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                  style: {
                    backgroundColor: "rgba(245,197,24,0.15)",
                    color: "#f5c518"
                  },
                  children: item.icon
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mb-0.5", children: item.label }),
                item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: item.href,
                    className: "text-white font-medium hover:opacity-80 transition-opacity",
                    children: item.value
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: item.value })
              ] })
            ]
          },
          item.label
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl overflow-hidden shadow-2xl",
          style: {
            backgroundColor: "#0d1f3c",
            border: "1px solid rgba(245,197,24,0.3)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5", style: { backgroundColor: "#0a1628" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  MessageSquare,
                  {
                    className: "w-6 h-6",
                    style: { color: "#f5c518" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold text-white", children: "Send Us a Message" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm ml-9", style: { color: "#f5c518" }, children: "Our team will respond within 24 hours." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-3 ml-9", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-3 py-1 rounded-full text-xs font-bold",
                    style: {
                      backgroundColor: "rgba(245,197,24,0.15)",
                      color: "#f5c518"
                    },
                    children: "⚡ Quick Response"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold",
                    style: {
                      backgroundColor: "rgba(245,197,24,0.15)",
                      color: "#f5c518"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-current" }),
                      " Expert Support"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-3 py-1 rounded-full text-xs font-bold",
                    style: {
                      backgroundColor: "rgba(245,197,24,0.15)",
                      color: "#f5c518"
                    },
                    children: "✅ 100% Free"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 md:px-8 py-6", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 py-8 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CircleCheckBig,
                {
                  className: "w-16 h-16",
                  style: { color: "#f5c518" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white", children: "Message Sent!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300", children: "We'll get back to you within 24 hours." }),
              referenceId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "px-4 py-2 rounded-lg text-sm",
                  style: {
                    backgroundColor: "rgba(245,197,24,0.1)",
                    color: "#f5c518"
                  },
                  children: [
                    "Reference ID: ",
                    referenceId.slice(-8)
                  ]
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "contact-name",
                    className: "block text-xs font-semibold text-gray-300 mb-1",
                    children: "Full Name *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "contact-name",
                    type: "text",
                    required: true,
                    placeholder: "Your full name",
                    value: formData.name,
                    onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                    className: "w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-400 outline-none min-h-[44px]",
                    style: {
                      backgroundColor: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)"
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "contact-email",
                    className: "block text-xs font-semibold text-gray-300 mb-1",
                    children: "Email Address *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "contact-email",
                    type: "email",
                    required: true,
                    placeholder: "your@email.com",
                    value: formData.email,
                    onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                    className: "w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-400 outline-none min-h-[44px]",
                    style: {
                      backgroundColor: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)"
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "contact-subject",
                    className: "block text-xs font-semibold text-gray-300 mb-1",
                    children: "Subject *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "contact-subject",
                    type: "text",
                    required: true,
                    placeholder: "How can we help?",
                    value: formData.subject,
                    onChange: (e) => setFormData({ ...formData, subject: e.target.value }),
                    className: "w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-400 outline-none min-h-[44px]",
                    style: {
                      backgroundColor: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)"
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "contact-message",
                    className: "block text-xs font-semibold text-gray-300 mb-1",
                    children: "Message *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    id: "contact-message",
                    required: true,
                    rows: 4,
                    placeholder: "Describe your requirement...",
                    value: formData.message,
                    onChange: (e) => setFormData({ ...formData, message: e.target.value }),
                    className: "w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-400 outline-none resize-none",
                    style: {
                      backgroundColor: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)"
                    }
                  }
                )
              ] }),
              submitMutation.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400", children: "Something went wrong. Please try again." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  disabled: submitMutation.isPending,
                  className: "w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 min-h-[52px]",
                  style: { backgroundColor: "#f5c518", color: "#0a1628" },
                  children: submitMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }),
                    "Sending..."
                  ] }) : "Send Message"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-gray-500", children: "🔒 Secure & Confidential" })
            ] }) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FreeConsultationSection, {})
  ] });
}
export {
  Contact as default
};
