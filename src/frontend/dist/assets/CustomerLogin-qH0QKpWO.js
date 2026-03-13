import { t as useNavigate, y as useLoginCustomer, r as reactExports, j as jsxRuntimeExports, s as LogIn, L as LoaderCircle, b as Link, z as setCustomerSession } from "./index-B8PZBDeY.js";
import { F as FreeConsultationSection } from "./FreeConsultationSection-BTb_a1WB.js";
import { C as CircleAlert } from "./circle-alert-ko8QStkX.js";
import { E as EyeOff } from "./eye-off-Bdqsap8z.js";
import { E as Eye } from "./eye-ClEHetDS.js";
function CustomerLogin() {
  const navigate = useNavigate();
  const loginMutation = useLoginCustomer();
  const [form, setForm] = reactExports.useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [errorMessage, setErrorMessage] = reactExports.useState("");
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMessage("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const profile = await loginMutation.mutateAsync({
        email: form.email.trim().toLowerCase(),
        password: form.password
      });
      const sessionData = {
        customerId: String(profile.customerId),
        fullName: profile.fullName,
        email: profile.email,
        mobileNumber: profile.mobileNumber,
        businessName: profile.businessName
      };
      setCustomerSession(sessionData);
      navigate({ to: "/customer-dashboard" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Invalid email or password. Please try again.";
      setErrorMessage(msg);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { backgroundColor: "#0a1628", minHeight: "100vh" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14 px-4 text-center",
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
              children: "Client Portal"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-4xl font-extrabold text-white mb-3", children: [
            "Welcome ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "Back" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-gray-300 max-w-xl mx-auto", children: "Login to your client portal and manage your compliance services." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-7 h-7", style: { color: "#f5c518" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-white", children: "YMW Compliance Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs mt-1",
                style: { color: "oklch(0.60 0.03 255)" },
                children: "Professional compliance and registration service provider"
              }
            )
          ] }),
          errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", style: { color: "#ef4444" }, children: errorMessage })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  htmlFor: "clogin-email",
                  className: "block text-sm font-medium mb-1.5",
                  style: { color: "oklch(0.75 0.03 255)" },
                  children: [
                    "Email Address ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "*" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "clogin-email",
                  type: "email",
                  name: "email",
                  value: form.email,
                  onChange: handleChange,
                  required: true,
                  placeholder: "your@email.com",
                  className: "w-full px-4 rounded-xl text-white placeholder-gray-500 outline-none transition-all",
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
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  htmlFor: "clogin-password",
                  className: "block text-sm font-medium mb-1.5",
                  style: { color: "oklch(0.75 0.03 255)" },
                  children: [
                    "Password ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "*" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "clogin-password",
                    type: showPassword ? "text" : "password",
                    name: "password",
                    value: form.password,
                    onChange: handleChange,
                    required: true,
                    placeholder: "Enter your password",
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: loginMutation.isPending,
                className: "w-full py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-200 mt-2",
                style: {
                  backgroundColor: loginMutation.isPending ? "rgba(245,197,24,0.6)" : "#f5c518",
                  color: "#0a1628",
                  minHeight: "52px",
                  cursor: loginMutation.isPending ? "not-allowed" : "pointer"
                },
                children: loginMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }),
                  "Logging in..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-5 h-5" }),
                  "Login"
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-center text-sm mt-5",
              style: { color: "oklch(0.60 0.03 255)" },
              children: [
                "New customer?",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/customer-signup",
                    className: "font-semibold hover:underline transition-colors",
                    style: { color: "#f5c518" },
                    children: "Sign up here"
                  }
                )
              ]
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FreeConsultationSection, {})
  ] });
}
export {
  CustomerLogin as default
};
