import { r as reactExports, k as useSubmitGrievance, j as jsxRuntimeExports, P as Phone, C as CircleCheckBig, G as GrievanceCategory, L as LoaderCircle } from "./index-DmI-joOK.js";
import { F as FreeConsultationSection } from "./FreeConsultationSection-BO_fheyP.js";
import { F as FileText } from "./file-text-DYMLdEFk.js";
import { T as TriangleAlert } from "./triangle-alert-D1TibMse.js";
const CATEGORIES = [
  { value: GrievanceCategory.cleanliness, label: "Cleanliness" },
  { value: GrievanceCategory.noise, label: "Noise" },
  { value: GrievanceCategory.safety, label: "Safety" },
  { value: GrievanceCategory.maintenance, label: "Maintenance" },
  { value: GrievanceCategory.other, label: "Other" }
];
function Grievance() {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    category: "",
    description: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [referenceNumber, setReferenceNumber] = reactExports.useState("");
  const submitMutation = useSubmitGrievance();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category) return;
    try {
      const refNum = await submitMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        category: formData.category,
        description: formData.description
      });
      setReferenceNumber(refNum);
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
              children: "Grievance Portal"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-extrabold text-white mb-4", children: [
            "Submit a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "Grievance" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 max-w-2xl mx-auto", children: "We take all complaints seriously. Submit your grievance and we'll address it promptly." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4", style: { backgroundColor: "#0d1f3c" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-white mb-2", children: "How It Works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400", children: "Our grievance resolution process is simple and transparent" })
        ] }),
        [
          {
            step: "01",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5" }),
            title: "Submit Grievance",
            desc: "Fill out the form with your complaint details"
          },
          {
            step: "02",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5" }),
            title: "Review Process",
            desc: "Our team reviews your grievance within 24 hours"
          },
          {
            step: "03",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
            title: "Resolution",
            desc: "We contact you with a resolution within 3 business days"
          },
          {
            step: "04",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5" }),
            title: "Confirmation",
            desc: "You receive confirmation once the issue is resolved"
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
                  className: "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold",
                  style: {
                    backgroundColor: "rgba(245,197,24,0.15)",
                    color: "#f5c518"
                  },
                  children: item.step
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-semibold mb-1", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: item.desc })
              ] })
            ]
          },
          item.step
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl overflow-hidden",
          style: { border: "1px solid rgba(245,197,24,0.3)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "px-6 pt-6 pb-5",
                style: { backgroundColor: "#0a1628" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                        style: { backgroundColor: "rgba(245,197,24,0.15)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          TriangleAlert,
                          {
                            className: "w-5 h-5",
                            style: { color: "#f5c518" }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-white leading-tight", children: "Submit Your Grievance" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-xs font-medium mt-0.5",
                          style: { color: "#f5c518" },
                          children: "Our team will respond within 3 business days."
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: ["⚡ Quick Response", "🛡️ Secure Process", "✅ 100% Free"].map(
                    (badge) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "px-3 py-1 rounded-full text-xs font-semibold",
                        style: {
                          backgroundColor: "rgba(245,197,24,0.15)",
                          color: "#f5c518"
                        },
                        children: badge
                      },
                      badge
                    )
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-6", style: { backgroundColor: "#ffffff" }, children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 py-8 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CircleCheckBig,
                {
                  className: "w-16 h-16",
                  style: { color: "#f5c518" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "text-2xl font-bold",
                  style: { color: "#0a1628" },
                  children: "Grievance Submitted!"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#4b5563" }, children: "We'll address your concern within 3 business days." }),
              referenceNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "px-4 py-2 rounded-lg text-sm font-semibold",
                  style: {
                    backgroundColor: "rgba(245,197,24,0.12)",
                    color: "#92710a",
                    border: "1px solid rgba(245,197,24,0.3)"
                  },
                  children: [
                    "Reference Number: ",
                    referenceNumber.slice(-8)
                  ]
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: handleSubmit,
                className: "flex flex-col gap-4",
                "data-ocid": "grievance.panel",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "grievance-name",
                        className: "block text-xs font-bold mb-1",
                        style: { color: "#1e293b" },
                        children: "Full Name *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "grievance-name",
                        type: "text",
                        required: true,
                        placeholder: "Your full name",
                        value: formData.name,
                        onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                        "data-ocid": "grievance.input",
                        className: "w-full px-4 py-3 rounded-lg text-sm outline-none min-h-[44px] transition-colors",
                        style: {
                          backgroundColor: "#ffffff",
                          border: "1px solid #d1d5db",
                          color: "#1e293b"
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "grievance-email",
                        className: "block text-xs font-bold mb-1",
                        style: { color: "#1e293b" },
                        children: "Email Address *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "grievance-email",
                        type: "email",
                        required: true,
                        placeholder: "your@email.com",
                        value: formData.email,
                        onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                        className: "w-full px-4 py-3 rounded-lg text-sm outline-none min-h-[44px] transition-colors",
                        style: {
                          backgroundColor: "#ffffff",
                          border: "1px solid #d1d5db",
                          color: "#1e293b"
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "grievance-category",
                        className: "block text-xs font-bold mb-1",
                        style: { color: "#1e293b" },
                        children: "Category *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "grievance-category",
                        required: true,
                        value: formData.category,
                        onChange: (e) => setFormData({
                          ...formData,
                          category: e.target.value
                        }),
                        "data-ocid": "grievance.select",
                        className: "w-full px-4 py-3 rounded-lg text-sm outline-none min-h-[44px]",
                        style: {
                          backgroundColor: "#ffffff",
                          border: "1px solid #d1d5db",
                          color: "#1e293b"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", style: { color: "#9ca3af" }, children: "Select category..." }),
                          CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "option",
                            {
                              value: cat.value,
                              style: { color: "#1e293b" },
                              children: cat.label
                            },
                            cat.value
                          ))
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "grievance-description",
                        className: "block text-xs font-bold mb-1",
                        style: { color: "#1e293b" },
                        children: "Description *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        id: "grievance-description",
                        required: true,
                        rows: 4,
                        placeholder: "Describe your grievance in detail...",
                        value: formData.description,
                        onChange: (e) => setFormData({
                          ...formData,
                          description: e.target.value
                        }),
                        "data-ocid": "grievance.textarea",
                        className: "w-full px-4 py-3 rounded-lg text-sm outline-none resize-none",
                        style: {
                          backgroundColor: "#ffffff",
                          border: "1px solid #d1d5db",
                          color: "#1e293b"
                        }
                      }
                    )
                  ] }),
                  submitMutation.isError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs",
                      "data-ocid": "grievance.error_state",
                      style: { color: "#ef4444" },
                      children: "Something went wrong. Please try again."
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: submitMutation.isPending,
                      "data-ocid": "grievance.submit_button",
                      className: "w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 min-h-[52px]",
                      style: { backgroundColor: "#f5c518", color: "#0a1628" },
                      children: submitMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }),
                        "Submitting..."
                      ] }) : "Submit Grievance"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-center text-xs",
                      style: { color: "#9ca3af" },
                      children: "🔒 100% Free & Confidential"
                    }
                  )
                ]
              }
            ) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FreeConsultationSection, {})
  ] });
}
export {
  Grievance as default
};
