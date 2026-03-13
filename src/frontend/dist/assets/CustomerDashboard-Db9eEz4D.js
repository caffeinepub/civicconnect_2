import { c as createLucideIcon, t as useNavigate, A as getCustomerSession, r as reactExports, B as useSubmitServiceRequest, D as useGetServiceRequestsByCustomer, j as jsxRuntimeExports, L as LoaderCircle, U as User, i as Mail, P as Phone, M as MessageCircle, C as CircleCheckBig, a as ChevronDown, E as clearCustomerSession } from "./index-DF-DujVQ.js";
import { a as formatTimestampShort } from "./dateUtils-B-JEV3ft.js";
import { B as Building2 } from "./building-2-b4x2rq_E.js";
import { L as LogOut } from "./log-out-Bbe6GtUm.js";
import { B as Briefcase } from "./briefcase-C5DxSNNr.js";
import { C as CircleAlert } from "./circle-alert-B5YQpwBK.js";
import { C as Clock } from "./clock-7bO_I8kv.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }]
];
const FileUp = createLucideIcon("file-up", __iconNode);
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
function CustomerDashboard() {
  const navigate = useNavigate();
  const session = getCustomerSession();
  const [selectedService, setSelectedService] = reactExports.useState("");
  const [serviceSuccess, setServiceSuccess] = reactExports.useState("");
  const [serviceError, setServiceError] = reactExports.useState("");
  const submitServiceRequest = useSubmitServiceRequest();
  const customerId = (session == null ? void 0 : session.customerId) ?? null;
  const { data: serviceRequests, isLoading: requestsLoading } = useGetServiceRequestsByCustomer(customerId);
  reactExports.useEffect(() => {
    if (!session || !session.customerId) {
      navigate({ to: "/customer-login" });
    }
  }, [session, navigate]);
  if (!session || !session.customerId) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center",
        style: { backgroundColor: "#0a1628" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoaderCircle,
          {
            className: "w-8 h-8 animate-spin",
            style: { color: "#f5c518" }
          }
        )
      }
    );
  }
  const handleLogout = () => {
    clearCustomerSession();
    navigate({ to: "/customer-login" });
  };
  const handleRequestService = async () => {
    if (!selectedService) {
      setServiceError("Please select a service first.");
      return;
    }
    setServiceError("");
    setServiceSuccess("");
    try {
      const refId = await submitServiceRequest.mutateAsync({
        serviceName: selectedService,
        notes: ""
      });
      setServiceSuccess(`Service request submitted! Reference ID: ${refId}`);
      setSelectedService("");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to submit request.";
      setServiceError(msg);
    }
  };
  const handleWhatsApp = () => {
    window.open("https://wa.me/918102906339", "_blank", "noopener,noreferrer");
  };
  const handleUploadDocuments = () => {
    const subject = encodeURIComponent(
      `Document Upload - ${session.businessName}`
    );
    window.location.href = `mailto:ymwcompliances@gmail.com?subject=${subject}`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { backgroundColor: "#0a1628", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-10 px-4",
        style: {
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2",
                style: {
                  backgroundColor: "rgba(245,197,24,0.15)",
                  color: "#f5c518"
                },
                children: "Client Dashboard"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl md:text-3xl font-extrabold text-white", children: [
              "Welcome back,",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: session.fullName }),
              "!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "text-sm mt-1",
                style: { color: "oklch(0.65 0.03 255)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Building2,
                    {
                      className: "inline w-4 h-4 mr-1",
                      style: { color: "#f5c518" }
                    }
                  ),
                  session.businessName
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleLogout,
              className: "flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:opacity-80",
              style: {
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
                "Logout"
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "lg:col-span-1 p-6 rounded-2xl",
          style: {
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shrink-0",
                  style: {
                    backgroundColor: "rgba(245,197,24,0.15)",
                    color: "#f5c518"
                  },
                  children: session.fullName.charAt(0).toUpperCase()
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-white text-base", children: session.fullName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "oklch(0.60 0.03 255)" }, children: "Customer Account" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  User,
                  {
                    className: "w-4 h-4 mt-0.5 shrink-0",
                    style: { color: "#f5c518" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs",
                      style: { color: "oklch(0.55 0.02 255)" },
                      children: "Full Name"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white font-medium", children: session.fullName })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Mail,
                  {
                    className: "w-4 h-4 mt-0.5 shrink-0",
                    style: { color: "#f5c518" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs",
                      style: { color: "oklch(0.55 0.02 255)" },
                      children: "Email"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white font-medium break-all", children: session.email })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Phone,
                  {
                    className: "w-4 h-4 mt-0.5 shrink-0",
                    style: { color: "#f5c518" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs",
                      style: { color: "oklch(0.55 0.02 255)" },
                      children: "Mobile"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white font-medium", children: session.mobileNumber })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Building2,
                  {
                    className: "w-4 h-4 mt-0.5 shrink-0",
                    style: { color: "#f5c518" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs",
                      style: { color: "oklch(0.55 0.02 255)" },
                      children: "Business Name"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white font-medium", children: session.businessName })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleUploadDocuments,
                  className: "w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-80",
                  style: {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid #f5c518",
                    color: "#f5c518"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileUp, { className: "w-4 h-4" }),
                    "Upload Documents"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: handleWhatsApp,
                  className: "w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-80",
                  style: {
                    backgroundColor: "#22c55e",
                    color: "white"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
                    "Contact Support via WhatsApp"
                  ]
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-6 rounded-2xl",
            style: {
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-5 h-5", style: { color: "#f5c518" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: "Our Services" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm mb-4",
                  style: { color: "oklch(0.65 0.03 255)" },
                  children: "Select a service below and submit a request. Our team will contact you shortly."
                }
              ),
              serviceSuccess && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-3 p-4 rounded-xl mb-4",
                  style: {
                    backgroundColor: "rgba(34,197,94,0.12)",
                    border: "1px solid rgba(34,197,94,0.3)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheckBig,
                      {
                        className: "w-5 h-5 shrink-0 mt-0.5",
                        style: { color: "#22c55e" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", style: { color: "#22c55e" }, children: serviceSuccess })
                  ]
                }
              ),
              serviceError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-3 p-4 rounded-xl mb-4",
                  style: {
                    backgroundColor: "rgba(239,68,68,0.10)",
                    border: "1px solid rgba(239,68,68,0.3)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleAlert,
                      {
                        className: "w-5 h-5 shrink-0 mt-0.5",
                        style: { color: "#ef4444" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", style: { color: "#ef4444" }, children: serviceError })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: selectedService,
                    onChange: (e) => {
                      setSelectedService(e.target.value);
                      setServiceError("");
                      setServiceSuccess("");
                    },
                    className: "w-full px-4 pr-10 rounded-xl text-white outline-none appearance-none transition-all",
                    style: {
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      minHeight: "48px",
                      fontSize: "15px",
                      color: selectedService ? "white" : "oklch(0.55 0.02 255)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "option",
                        {
                          value: "",
                          style: { backgroundColor: "#0d1f3c", color: "white" },
                          children: "— Select a Service —"
                        }
                      ),
                      SERVICES.map((svc) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "option",
                        {
                          value: svc,
                          style: { backgroundColor: "#0d1f3c", color: "white" },
                          children: svc
                        },
                        svc
                      ))
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChevronDown,
                  {
                    className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4",
                    style: { color: "#f5c518" }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: handleRequestService,
                  disabled: submitServiceRequest.isPending || !selectedService,
                  className: "w-full py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-200",
                  style: {
                    backgroundColor: submitServiceRequest.isPending || !selectedService ? "rgba(245,197,24,0.4)" : "#f5c518",
                    color: "#0a1628",
                    minHeight: "50px",
                    cursor: submitServiceRequest.isPending || !selectedService ? "not-allowed" : "pointer"
                  },
                  children: submitServiceRequest.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }),
                    "Submitting..."
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-5 h-5" }),
                    "Request Service"
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-6 rounded-2xl",
            style: {
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5", style: { color: "#f5c518" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: "My Service Requests" })
              ] }),
              requestsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                LoaderCircle,
                {
                  className: "w-6 h-6 animate-spin",
                  style: { color: "#f5c518" }
                }
              ) }) : !serviceRequests || serviceRequests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm text-center py-6",
                  style: { color: "oklch(0.55 0.02 255)" },
                  children: "No service requests yet. Select a service above to get started."
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: serviceRequests.map((req) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start justify-between gap-3 p-4 rounded-xl",
                  style: {
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white", children: req.serviceName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "text-xs mt-0.5",
                          style: { color: "oklch(0.55 0.02 255)" },
                          children: [
                            "Ref: #",
                            req.requestId.toString(),
                            " ·",
                            " ",
                            formatTimestampShort(req.createdAt)
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs px-2.5 py-1 rounded-full font-semibold shrink-0",
                        style: {
                          backgroundColor: "rgba(245,197,24,0.15)",
                          color: "#f5c518"
                        },
                        children: "Pending"
                      }
                    )
                  ]
                },
                req.requestId.toString()
              )) })
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  CustomerDashboard as default
};
