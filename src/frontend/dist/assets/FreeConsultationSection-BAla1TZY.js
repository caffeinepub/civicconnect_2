import { c as createLucideIcon, r as reactExports, u as useSubmitConsultationRequest, j as jsxRuntimeExports, S as Star, C as CircleCheckBig, L as LoaderCircle, g as getUTMSource } from "./index-DwCD6ubM.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
const SERVICES = [
  "Business Registration",
  "GST Registration & Filing",
  "ISO Certification",
  "Trademark Registration",
  "FSSAI Registration",
  "MSME/Udyam Registration",
  "PF & ESI Registration",
  "Income Tax Filing",
  "ROC Compliance",
  "Digital Signature Certificate",
  "Import Export Code (IEC)",
  "Shop & Establishment Act",
  "Professional Tax Registration",
  "Labour License",
  "Other Compliance Services"
];
function FreeConsultationSection() {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "free-consultation",
      className: "py-16 px-4",
      style: { backgroundColor: "#0a1628" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl shadow-2xl overflow-hidden",
          style: {
            backgroundColor: "#0d1f3c",
            border: "1px solid rgba(245,197,24,0.3)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5", style: { backgroundColor: "#0a1628" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-6 h-6", style: { color: "#f5c518" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-extrabold text-white", children: "Get Free Expert Consultation" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm ml-9", style: { color: "#f5c518" }, children: "Our advisor will call you in 15 min." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-3 ml-9", children: [
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
                      " 5 ★ Rating"
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
                    children: "100% Free"
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
                    children: "15 Min Callback"
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white", children: "Thank You!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 max-w-sm", children: "Your consultation request has been submitted. Our advisor will call you within 15 minutes." }),
              submittedId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "px-4 py-2 rounded-lg text-sm",
                  style: {
                    backgroundColor: "rgba(245,197,24,0.1)",
                    color: "#f5c518"
                  },
                  children: [
                    "Reference ID: ",
                    submittedId.slice(-8)
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setSubmitted(false);
                    setSubmittedId("");
                    setFormData({
                      fullName: "",
                      phoneNumber: "",
                      selectedService: "",
                      cityState: ""
                    });
                  },
                  className: "mt-2 text-sm underline text-gray-400 hover:text-white transition-colors",
                  children: "Submit another request"
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: handleSubmit,
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "fcs-full-name",
                        className: "text-xs font-semibold text-gray-300",
                        children: "Full Name *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "fcs-full-name",
                        type: "text",
                        required: true,
                        placeholder: "Enter your full name",
                        value: formData.fullName,
                        onChange: (e) => setFormData({ ...formData, fullName: e.target.value }),
                        className: "px-4 py-3 rounded-lg text-sm text-white placeholder-gray-400 outline-none min-h-[44px]",
                        style: {
                          backgroundColor: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(255,255,255,0.12)"
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "fcs-phone-number",
                        className: "text-xs font-semibold text-gray-300",
                        children: "Phone Number *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "flex items-center px-3 rounded-l-lg text-sm font-medium text-gray-300 min-h-[44px]",
                          style: {
                            backgroundColor: "rgba(255,255,255,0.12)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRight: "none"
                          },
                          children: "+91"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "fcs-phone-number",
                          type: "tel",
                          required: true,
                          placeholder: "10-digit mobile number",
                          value: formData.phoneNumber,
                          onChange: (e) => setFormData({
                            ...formData,
                            phoneNumber: e.target.value
                          }),
                          className: "flex-1 px-4 py-3 rounded-r-lg text-sm text-white placeholder-gray-400 outline-none min-h-[44px]",
                          style: {
                            backgroundColor: "rgba(255,255,255,0.07)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderLeft: "none"
                          },
                          maxLength: 10
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "fcs-select-service",
                        className: "text-xs font-semibold text-gray-300",
                        children: "Select Service *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "fcs-select-service",
                        required: true,
                        value: formData.selectedService,
                        onChange: (e) => setFormData({
                          ...formData,
                          selectedService: e.target.value
                        }),
                        className: "px-4 py-3 rounded-lg text-sm text-white outline-none min-h-[44px]",
                        style: {
                          backgroundColor: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(255,255,255,0.12)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", style: { backgroundColor: "#0d1f3c" }, children: "Choose a service..." }),
                          SERVICES.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "option",
                            {
                              value: service,
                              style: { backgroundColor: "#0d1f3c" },
                              children: service
                            },
                            service
                          ))
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "fcs-city-state",
                        className: "text-xs font-semibold text-gray-300",
                        children: "City / State *"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "fcs-city-state",
                        type: "text",
                        required: true,
                        placeholder: "e.g. Dhanbad, Jharkhand",
                        value: formData.cityState,
                        onChange: (e) => setFormData({ ...formData, cityState: e.target.value }),
                        className: "px-4 py-3 rounded-lg text-sm text-white placeholder-gray-400 outline-none min-h-[44px]",
                        style: {
                          backgroundColor: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(255,255,255,0.12)"
                        }
                      }
                    )
                  ] }),
                  submitMutation.isError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400", children: "Something went wrong. Please try again." }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
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
                        ] }) : "Get Free Consultation"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-gray-500 mt-2", children: "🔒 100% Free & Confidential" })
                  ] })
                ]
              }
            ) })
          ]
        }
      ) })
    }
  );
}
export {
  FreeConsultationSection as F,
  Target as T
};
