import { c as createLucideIcon, r as reactExports, F as useGetAllCustomers, H as useGetAllServiceRequests, I as useActor, J as useQuery, j as jsxRuntimeExports, e as Shield, L as LoaderCircle } from "./index-B8PZBDeY.js";
import { a as formatTimestampShort } from "./dateUtils-B-JEV3ft.js";
import { C as CircleAlert } from "./circle-alert-ko8QStkX.js";
import { E as EyeOff } from "./eye-off-Bdqsap8z.js";
import { E as Eye } from "./eye-ClEHetDS.js";
import { L as LogOut } from "./log-out-BEuvO6jJ.js";
import { U as Users } from "./users-Hfq9mpqa.js";
import { F as FileText } from "./file-text-CL6nSRjF.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const ADMIN_PASSWORD = "YMWAdmin@2024";
const ADMIN_SESSION_KEY = "ymw_admin_auth";
function AdminPanel() {
  const [isAdminAuth, setIsAdminAuth] = reactExports.useState(
    () => sessionStorage.getItem(ADMIN_SESSION_KEY) === "true"
  );
  const [adminPassword, setAdminPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [authError, setAuthError] = reactExports.useState("");
  const [activeTab, setActiveTab] = reactExports.useState("customers");
  const [customerSearch, setCustomerSearch] = reactExports.useState("");
  const [requestSearch, setRequestSearch] = reactExports.useState("");
  const {
    data: customers,
    isLoading: customersLoading,
    error: customersError
  } = useGetAllCustomers();
  const {
    data: serviceRequests,
    isLoading: requestsLoading,
    error: requestsError
  } = useGetAllServiceRequests();
  const { actor, isFetching: actorFetching } = useActor();
  const {
    data: affiliates,
    isLoading: affiliatesLoading,
    error: affiliatesError
  } = useQuery({
    queryKey: ["affiliateApplications"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listAffiliateApplications();
    },
    enabled: !!actor && !actorFetching && isAdminAuth,
    retry: false
  });
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
      setIsAdminAuth(true);
      setAuthError("");
    } else {
      setAuthError("Incorrect admin password. Please try again.");
    }
  };
  const handleAdminLogout = () => {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    setIsAdminAuth(false);
    setAdminPassword("");
  };
  const filteredCustomers = (customers ?? []).filter((c) => {
    const q = customerSearch.toLowerCase();
    return c.fullName.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) || c.businessName.toLowerCase().includes(q);
  });
  const filteredRequests = (serviceRequests ?? []).filter((r) => {
    const q = requestSearch.toLowerCase();
    return r.serviceName.toLowerCase().includes(q) || r.requestId.toString().includes(q);
  });
  if (!isAdminAuth) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center px-4 py-16",
        style: { backgroundColor: "#0a1628" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-8 rounded-2xl",
            style: {
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mb-7", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-14 h-14 rounded-full flex items-center justify-center mb-3",
                    style: { backgroundColor: "rgba(245,197,24,0.15)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-7 h-7", style: { color: "#f5c518" } })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-white", children: "Admin Panel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs mt-1 text-center",
                    style: { color: "oklch(0.60 0.03 255)" },
                    children: "YMW Compliance Services — Restricted Access"
                  }
                )
              ] }),
              authError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-3 p-4 rounded-xl mb-5",
                  style: {
                    backgroundColor: "rgba(239,68,68,0.10)",
                    border: "1px solid rgba(239,68,68,0.3)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleAlert,
                      {
                        className: "w-5 h-5 shrink-0",
                        style: { color: "#ef4444" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", style: { color: "#ef4444" }, children: authError })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAdminLogin, className: "flex flex-col gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "admin-password",
                      className: "block text-sm font-medium mb-1.5",
                      style: { color: "oklch(0.75 0.03 255)" },
                      children: "Admin Password"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: showPassword ? "text" : "password",
                        value: adminPassword,
                        onChange: (e) => {
                          setAdminPassword(e.target.value);
                          setAuthError("");
                        },
                        required: true,
                        placeholder: "Enter admin password",
                        className: "w-full px-4 pr-12 rounded-xl text-white placeholder-gray-500 outline-none transition-all",
                        style: {
                          backgroundColor: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          minHeight: "48px",
                          fontSize: "15px"
                        },
                        onFocus: (e) => {
                          e.target.style.borderColor = "#f5c518";
                        },
                        onBlur: (e) => {
                          e.target.style.borderColor = "rgba(255,255,255,0.12)";
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setShowPassword(!showPassword),
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors",
                        children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 18 })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "submit",
                    className: "w-full py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-200",
                    style: {
                      backgroundColor: "#f5c518",
                      color: "#0a1628",
                      minHeight: "50px"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5" }),
                      "Login as Admin"
                    ]
                  }
                )
              ] })
            ]
          }
        ) })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { backgroundColor: "#0a1628", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-8 px-4",
        style: {
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2",
                style: {
                  backgroundColor: "rgba(245,197,24,0.15)",
                  color: "#f5c518"
                },
                children: "Admin Panel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl md:text-3xl font-extrabold text-white", children: [
              "YMW ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "Admin Dashboard" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm mt-1",
                style: { color: "oklch(0.65 0.03 255)" },
                children: "Manage customers and service requests"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleAdminLogout,
              className: "flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:opacity-80",
              style: {
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
                "Admin Logout"
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-5 rounded-2xl flex items-center gap-4",
            style: {
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                  style: { backgroundColor: "rgba(245,197,24,0.15)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6", style: { color: "#f5c518" } })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-extrabold text-white", children: customersLoading ? "—" : (customers == null ? void 0 : customers.length) ?? 0 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "oklch(0.60 0.03 255)" }, children: "Total Customers" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "p-5 rounded-2xl flex items-center gap-4",
            style: {
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                  style: { backgroundColor: "rgba(245,197,24,0.15)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-6 h-6", style: { color: "#f5c518" } })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-extrabold text-white", children: requestsLoading ? "—" : (serviceRequests == null ? void 0 : serviceRequests.length) ?? 0 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: "oklch(0.60 0.03 255)" }, children: "Service Requests" })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveTab("customers"),
            className: "flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all",
            style: {
              backgroundColor: activeTab === "customers" ? "#f5c518" : "rgba(255,255,255,0.06)",
              color: activeTab === "customers" ? "#0a1628" : "white",
              border: activeTab === "customers" ? "none" : "1px solid rgba(255,255,255,0.12)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
              "All Customers"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveTab("requests"),
            className: "flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all",
            style: {
              backgroundColor: activeTab === "requests" ? "#f5c518" : "rgba(255,255,255,0.06)",
              color: activeTab === "requests" ? "#0a1628" : "white",
              border: activeTab === "requests" ? "none" : "1px solid rgba(255,255,255,0.12)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
              "Service Requests"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setActiveTab("affiliates"),
            "data-ocid": "admin.affiliates.tab",
            className: "flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all",
            style: {
              backgroundColor: activeTab === "affiliates" ? "#f5c518" : "rgba(255,255,255,0.06)",
              color: activeTab === "affiliates" ? "#0a1628" : "white",
              border: activeTab === "affiliates" ? "none" : "1px solid rgba(255,255,255,0.12)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
              "Affiliate Applications"
            ]
          }
        )
      ] }),
      activeTab === "customers" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl overflow-hidden",
          style: {
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Search,
                {
                  className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4",
                  style: { color: "oklch(0.55 0.02 255)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: customerSearch,
                  onChange: (e) => setCustomerSearch(e.target.value),
                  placeholder: "Search by name, email, or business...",
                  className: "w-full pl-10 pr-4 py-2.5 rounded-xl text-white placeholder-gray-500 outline-none",
                  style: {
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    fontSize: "14px"
                  }
                }
              )
            ] }) }),
            customersLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoaderCircle,
              {
                className: "w-7 h-7 animate-spin",
                style: { color: "#f5c518" }
              }
            ) }) : customersError ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 py-16", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5", style: { color: "#ef4444" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", style: { color: "#ef4444" }, children: "Failed to load customers. Admin access required." })
            ] }) : filteredCustomers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-center py-16 text-sm",
                style: { color: "oklch(0.55 0.02 255)" },
                children: customerSearch ? "No customers match your search." : "No customers registered yet."
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "tr",
                  {
                    style: {
                      borderBottom: "1px solid rgba(255,255,255,0.08)"
                    },
                    children: [
                      "ID",
                      "Full Name",
                      "Email",
                      "Mobile",
                      "Business Name",
                      "Registered"
                    ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "th",
                      {
                        className: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider",
                        style: { color: "#f5c518" },
                        children: h
                      },
                      h
                    ))
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filteredCustomers.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    style: {
                      borderBottom: i < filteredCustomers.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "td",
                        {
                          className: "px-5 py-4 text-xs font-mono",
                          style: { color: "oklch(0.60 0.03 255)" },
                          children: [
                            "#",
                            c.customerId.toString()
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-sm font-medium text-white", children: c.fullName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          className: "px-5 py-4 text-sm",
                          style: { color: "oklch(0.70 0.03 255)" },
                          children: c.email
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          className: "px-5 py-4 text-sm",
                          style: { color: "oklch(0.70 0.03 255)" },
                          children: c.mobileNumber
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          className: "px-5 py-4 text-sm",
                          style: { color: "oklch(0.70 0.03 255)" },
                          children: c.businessName
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          className: "px-5 py-4 text-xs",
                          style: { color: "oklch(0.60 0.03 255)" },
                          children: formatTimestampShort(c.createdAt)
                        }
                      )
                    ]
                  },
                  c.customerId.toString()
                )) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden divide-y divide-white/10", children: filteredCustomers.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-4 space-y-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-white", children: c.fullName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: "text-xs font-mono",
                          style: { color: "#f5c518" },
                          children: [
                            "#",
                            c.customerId.toString()
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs",
                        style: { color: "oklch(0.65 0.03 255)" },
                        children: c.email
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs",
                        style: { color: "oklch(0.65 0.03 255)" },
                        children: c.mobileNumber
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs",
                        style: { color: "oklch(0.65 0.03 255)" },
                        children: c.businessName
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "p",
                      {
                        className: "text-xs",
                        style: { color: "oklch(0.55 0.02 255)" },
                        children: [
                          "Registered: ",
                          formatTimestampShort(c.createdAt)
                        ]
                      }
                    )
                  ]
                },
                c.customerId.toString()
              )) })
            ] })
          ]
        }
      ),
      activeTab === "requests" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-2xl overflow-hidden",
          style: {
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Search,
                {
                  className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4",
                  style: { color: "oklch(0.55 0.02 255)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: requestSearch,
                  onChange: (e) => setRequestSearch(e.target.value),
                  placeholder: "Search by service name or request ID...",
                  className: "w-full pl-10 pr-4 py-2.5 rounded-xl text-white placeholder-gray-500 outline-none",
                  style: {
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    fontSize: "14px"
                  }
                }
              )
            ] }) }),
            requestsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoaderCircle,
              {
                className: "w-7 h-7 animate-spin",
                style: { color: "#f5c518" }
              }
            ) }) : requestsError ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 py-16", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5", style: { color: "#ef4444" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", style: { color: "#ef4444" }, children: "Failed to load service requests. Admin access required." })
            ] }) : filteredRequests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-center py-16 text-sm",
                style: { color: "oklch(0.55 0.02 255)" },
                children: requestSearch ? "No requests match your search." : "No service requests yet."
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "tr",
                  {
                    style: {
                      borderBottom: "1px solid rgba(255,255,255,0.08)"
                    },
                    children: [
                      "Req ID",
                      "Customer ID",
                      "Service Name",
                      "Notes",
                      "Submitted"
                    ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "th",
                      {
                        className: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider",
                        style: { color: "#f5c518" },
                        children: h
                      },
                      h
                    ))
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filteredRequests.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    style: {
                      borderBottom: i < filteredRequests.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "td",
                        {
                          className: "px-5 py-4 text-xs font-mono",
                          style: { color: "oklch(0.60 0.03 255)" },
                          children: [
                            "#",
                            r.requestId.toString()
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "td",
                        {
                          className: "px-5 py-4 text-xs font-mono",
                          style: { color: "oklch(0.60 0.03 255)" },
                          children: [
                            "#",
                            r.customerId.toString()
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-sm font-medium text-white", children: r.serviceName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          className: "px-5 py-4 text-sm",
                          style: { color: "oklch(0.65 0.03 255)" },
                          children: r.notes || "—"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          className: "px-5 py-4 text-xs",
                          style: { color: "oklch(0.60 0.03 255)" },
                          children: formatTimestampShort(r.createdAt)
                        }
                      )
                    ]
                  },
                  r.requestId.toString()
                )) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden divide-y divide-white/10", children: filteredRequests.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-white", children: r.serviceName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-xs font-mono",
                      style: { color: "#f5c518" },
                      children: [
                        "#",
                        r.requestId.toString()
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-xs",
                    style: { color: "oklch(0.65 0.03 255)" },
                    children: [
                      "Customer ID: #",
                      r.customerId.toString()
                    ]
                  }
                ),
                r.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-xs",
                    style: { color: "oklch(0.65 0.03 255)" },
                    children: [
                      "Notes: ",
                      r.notes
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-xs",
                    style: { color: "oklch(0.55 0.02 255)" },
                    children: [
                      "Submitted: ",
                      formatTimestampShort(r.createdAt)
                    ]
                  }
                )
              ] }, r.requestId.toString())) })
            ] })
          ]
        }
      )
    ] }),
    activeTab === "affiliates" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "admin.affiliates.panel",
        className: "rounded-2xl overflow-hidden",
        style: {
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.10)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-white", children: "Affiliate Applications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs mt-1",
                style: { color: "oklch(0.60 0.03 255)" },
                children: "All partner applications submitted through the affiliate signup form"
              }
            )
          ] }),
          affiliatesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            LoaderCircle,
            {
              "data-ocid": "admin.affiliates.loading_state",
              className: "w-7 h-7 animate-spin",
              style: { color: "#f5c518" }
            }
          ) }) : affiliatesError ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "admin.affiliates.error_state",
              className: "flex items-center justify-center gap-2 py-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-5 h-5", style: { color: "#ef4444" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", style: { color: "#ef4444" }, children: "Failed to load applications. Admin access required." })
              ]
            }
          ) : !affiliates || affiliates.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              "data-ocid": "admin.affiliates.empty_state",
              className: "text-center py-16 text-sm",
              style: { color: "oklch(0.55 0.02 255)" },
              children: "No affiliate applications submitted yet."
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", "data-ocid": "admin.affiliates.table", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { style: { backgroundColor: "rgba(255,255,255,0.03)" }, children: [
                "Name",
                "Email",
                "Phone",
                "City",
                "Business Type",
                "Applied On"
              ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide",
                  style: { color: "oklch(0.55 0.02 255)" },
                  children: h
                },
                h
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-white/5", children: affiliates.map((a, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  "data-ocid": `admin.affiliates.row.${idx + 1}`,
                  className: "transition-colors hover:bg-white/[0.03]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-sm font-medium text-white", children: a.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        className: "px-5 py-4 text-sm",
                        style: { color: "oklch(0.65 0.03 255)" },
                        children: a.email
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        className: "px-5 py-4 text-sm",
                        style: { color: "oklch(0.65 0.03 255)" },
                        children: a.phone
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        className: "px-5 py-4 text-sm",
                        style: { color: "oklch(0.65 0.03 255)" },
                        children: a.city
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        className: "px-5 py-4 text-sm",
                        style: { color: "oklch(0.65 0.03 255)" },
                        children: a.businessType
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        className: "px-5 py-4 text-xs",
                        style: { color: "oklch(0.60 0.03 255)" },
                        children: formatTimestampShort(a.createdAt)
                      }
                    )
                  ]
                },
                a.id
              )) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden divide-y divide-white/10", children: affiliates.map((a, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `admin.affiliates.row.${idx + 1}`,
                className: "p-4 space-y-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-white", children: a.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", style: { color: "#f5c518" }, children: a.businessType })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs",
                      style: { color: "oklch(0.65 0.03 255)" },
                      children: a.email
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-xs",
                      style: { color: "oklch(0.65 0.03 255)" },
                      children: [
                        a.phone,
                        " · ",
                        a.city
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-xs",
                      style: { color: "oklch(0.55 0.02 255)" },
                      children: [
                        "Applied: ",
                        formatTimestampShort(a.createdAt)
                      ]
                    }
                  )
                ]
              },
              a.id
            )) })
          ] })
        ]
      }
    )
  ] });
}
export {
  AdminPanel as default
};
