import { t as useNavigate, w as useSignupCustomer, r as reactExports, j as jsxRuntimeExports, x as UserPlus, C as CircleCheckBig, L as LoaderCircle, b as Link } from "./index-DmI-joOK.js";
import { F as FreeConsultationSection } from "./FreeConsultationSection-BO_fheyP.js";
import { C as CircleAlert } from "./circle-alert-BI6qL8vZ.js";
import { E as EyeOff } from "./eye-off-aJ_hPav8.js";
import { E as Eye } from "./eye--bwzHGuu.js";
function CustomerSignup() {
  const navigate = useNavigate();
  const signupMutation = useSignupCustomer();
  const [form, setForm] = reactExports.useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    password: "",
    businessName: ""
  });
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [successMessage, setSuccessMessage] = reactExports.useState("");
  const [errorMessage, setErrorMessage] = reactExports.useState("");
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMessage("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    if (!/^[6-9]\d{9}$/.test(form.mobileNumber)) {
      setErrorMessage("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    if (form.password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }
    try {
      await signupMutation.mutateAsync({
        fullName: form.fullName.trim(),
        mobileNumber: form.mobileNumber.trim(),
        email: form.email.trim().toLowerCase(),
        businessName: form.businessName.trim(),
        password: form.password
      });
      setSuccessMessage(
        "Account created successfully! Redirecting to login..."
      );
      setTimeout(() => {
        navigate({ to: "/customer-login" });
      }, 2e3);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Signup failed. Please try again.";
      setErrorMessage(msg);
    }
  };
  const inputStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #d1d5db",
    color: "#1e293b",
    minHeight: "48px",
    fontSize: "15px"
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
            "Create Your ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#f5c518" }, children: "Account" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-gray-300 max-w-xl mx-auto", children: "Join YMW Compliance Services and manage all your compliance needs in one place." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-5 h-5", style: { color: "#f5c518" } })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-white leading-tight", children: "Create Your Account" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs font-medium mt-0.5",
                        style: { color: "#f5c518" },
                        children: "Join 15,000+ happy clients"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: ["🔒 Secure", "✅ Free Registration", "📱 Quick Setup"].map(
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-6", style: { backgroundColor: "#ffffff" }, children: [
            successMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 p-4 rounded-xl mb-5",
                "data-ocid": "signup.success_state",
                style: {
                  backgroundColor: "rgba(34,197,94,0.10)",
                  border: "1px solid rgba(34,197,94,0.3)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CircleCheckBig,
                    {
                      className: "w-5 h-5 shrink-0",
                      style: { color: "#16a34a" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm font-medium",
                      style: { color: "#16a34a" },
                      children: successMessage
                    }
                  )
                ]
              }
            ),
            errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 p-4 rounded-xl mb-5",
                "data-ocid": "signup.error_state",
                style: {
                  backgroundColor: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.25)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CircleAlert,
                    {
                      className: "w-5 h-5 shrink-0",
                      style: { color: "#dc2626" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm font-medium",
                      style: { color: "#dc2626" },
                      children: errorMessage
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "csignup-full-name",
                    className: "block text-xs font-bold mb-1",
                    style: { color: "#1e293b" },
                    children: "Full Name *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "csignup-full-name",
                    type: "text",
                    name: "fullName",
                    value: form.fullName,
                    onChange: handleChange,
                    required: true,
                    placeholder: "Enter your full name",
                    "data-ocid": "signup.input",
                    className: "w-full px-4 rounded-xl placeholder-gray-400 outline-none transition-all",
                    style: inputStyle,
                    onFocus: (e) => {
                      e.target.style.borderColor = "#f5c518";
                    },
                    onBlur: (e) => {
                      e.target.style.borderColor = "#d1d5db";
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "csignup-mobile",
                    className: "block text-xs font-bold mb-1",
                    style: { color: "#1e293b" },
                    children: "Mobile Number *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "csignup-mobile",
                    type: "tel",
                    name: "mobileNumber",
                    value: form.mobileNumber,
                    onChange: handleChange,
                    required: true,
                    placeholder: "10-digit mobile number",
                    maxLength: 10,
                    className: "w-full px-4 rounded-xl placeholder-gray-400 outline-none transition-all",
                    style: inputStyle,
                    onFocus: (e) => {
                      e.target.style.borderColor = "#f5c518";
                    },
                    onBlur: (e) => {
                      e.target.style.borderColor = "#d1d5db";
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "csignup-email",
                    className: "block text-xs font-bold mb-1",
                    style: { color: "#1e293b" },
                    children: "Email Address *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "csignup-email",
                    type: "email",
                    name: "email",
                    value: form.email,
                    onChange: handleChange,
                    required: true,
                    placeholder: "your@email.com",
                    className: "w-full px-4 rounded-xl placeholder-gray-400 outline-none transition-all",
                    style: inputStyle,
                    onFocus: (e) => {
                      e.target.style.borderColor = "#f5c518";
                    },
                    onBlur: (e) => {
                      e.target.style.borderColor = "#d1d5db";
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "csignup-password",
                    className: "block text-xs font-bold mb-1",
                    style: { color: "#1e293b" },
                    children: "Password *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "csignup-password",
                      type: showPassword ? "text" : "password",
                      name: "password",
                      value: form.password,
                      onChange: handleChange,
                      required: true,
                      placeholder: "Min. 8 characters",
                      className: "w-full px-4 pr-12 rounded-xl placeholder-gray-400 outline-none transition-all",
                      style: inputStyle,
                      onFocus: (e) => {
                        e.target.style.borderColor = "#f5c518";
                      },
                      onBlur: (e) => {
                        e.target.style.borderColor = "#d1d5db";
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setShowPassword(!showPassword),
                      className: "absolute right-3 top-1/2 -translate-y-1/2 transition-colors",
                      style: { color: "#6b7280" },
                      children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 18 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "csignup-business",
                    className: "block text-xs font-bold mb-1",
                    style: { color: "#1e293b" },
                    children: "Business Name *"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "csignup-business",
                    type: "text",
                    name: "businessName",
                    value: form.businessName,
                    onChange: handleChange,
                    required: true,
                    placeholder: "Your business or company name",
                    className: "w-full px-4 rounded-xl placeholder-gray-400 outline-none transition-all",
                    style: inputStyle,
                    onFocus: (e) => {
                      e.target.style.borderColor = "#f5c518";
                    },
                    onBlur: (e) => {
                      e.target.style.borderColor = "#d1d5db";
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  disabled: signupMutation.isPending || !!successMessage,
                  "data-ocid": "signup.submit_button",
                  className: "w-full py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-200 mt-2 hover:opacity-90",
                  style: {
                    backgroundColor: signupMutation.isPending || successMessage ? "rgba(245,197,24,0.6)" : "#f5c518",
                    color: "#0a1628",
                    minHeight: "52px",
                    cursor: signupMutation.isPending || successMessage ? "not-allowed" : "pointer"
                  },
                  children: signupMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }),
                    "Creating Account..."
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "w-5 h-5" }),
                    "Create Account"
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs", style: { color: "#9ca3af" }, children: "🔒 100% Free & Confidential" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "text-center text-sm mt-5",
                style: { color: "#4b5563" },
                children: [
                  "Already have an account?",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/customer-login",
                      "data-ocid": "signup.link",
                      className: "font-semibold hover:underline transition-colors",
                      style: { color: "#d4a017" },
                      children: "Login here"
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FreeConsultationSection, {})
  ] });
}
export {
  CustomerSignup as default
};
