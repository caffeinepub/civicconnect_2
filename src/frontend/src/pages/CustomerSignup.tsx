import { useNavigate } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle,
  Eye,
  EyeOff,
  Loader2,
  UserPlus,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import FreeConsultationSection from "../components/FreeConsultationSection";
import { useSignupCustomer } from "../hooks/useQueries";

export default function CustomerSignup() {
  const navigate = useNavigate();
  const signupMutation = useSignupCustomer();

  const [form, setForm] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    password: "",
    businessName: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Validate mobile number
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
        password: form.password,
      });
      setSuccessMessage(
        "Account created successfully! Redirecting to login...",
      );
      setTimeout(() => {
        navigate({ to: "/customer-login" });
      }, 2000);
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Signup failed. Please try again.";
      setErrorMessage(msg);
    }
  };

  return (
    <div style={{ backgroundColor: "#0a1628", minHeight: "100vh" }}>
      {/* Page Hero */}
      <section
        className="py-14 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              backgroundColor: "rgba(245,197,24,0.15)",
              color: "#f5c518",
            }}
          >
            Client Portal
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Create Your <span style={{ color: "#f5c518" }}>Account</span>
          </h1>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            Join YMW Compliance Services and manage all your compliance needs in
            one place.
          </p>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-12 px-4">
        <div className="max-w-md mx-auto">
          <div
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            {/* Branding */}
            <div className="flex flex-col items-center mb-7">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: "rgba(245,197,24,0.15)" }}
              >
                <UserPlus className="w-7 h-7" style={{ color: "#f5c518" }} />
              </div>
              <h2 className="text-xl font-bold text-white">
                YMW Compliance Services
              </h2>
              <p
                className="text-xs mt-1"
                style={{ color: "oklch(0.60 0.03 255)" }}
              >
                Professional compliance and registration service provider
              </p>
            </div>

            {/* Success Message */}
            {successMessage && (
              <div
                className="flex items-center gap-3 p-4 rounded-xl mb-5"
                style={{
                  backgroundColor: "rgba(34,197,94,0.12)",
                  border: "1px solid rgba(34,197,94,0.3)",
                }}
              >
                <CheckCircle
                  className="w-5 h-5 shrink-0"
                  style={{ color: "#22c55e" }}
                />
                <p className="text-sm font-medium" style={{ color: "#22c55e" }}>
                  {successMessage}
                </p>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div
                className="flex items-center gap-3 p-4 rounded-xl mb-5"
                style={{
                  backgroundColor: "rgba(239,68,68,0.10)",
                  border: "1px solid rgba(239,68,68,0.3)",
                }}
              >
                <AlertCircle
                  className="w-5 h-5 shrink-0"
                  style={{ color: "#ef4444" }}
                />
                <p className="text-sm font-medium" style={{ color: "#ef4444" }}>
                  {errorMessage}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="csignup-full-name"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "oklch(0.75 0.03 255)" }}
                >
                  Full Name <span style={{ color: "#f5c518" }}>*</span>
                </label>
                <input
                  id="csignup-full-name"
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 rounded-xl text-white placeholder-gray-500 outline-none transition-all"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    minHeight: "48px",
                    fontSize: "15px",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#f5c518";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label
                  htmlFor="csignup-mobile"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "oklch(0.75 0.03 255)" }}
                >
                  Mobile Number <span style={{ color: "#f5c518" }}>*</span>
                </label>
                <input
                  id="csignup-mobile"
                  type="tel"
                  name="mobileNumber"
                  value={form.mobileNumber}
                  onChange={handleChange}
                  required
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className="w-full px-4 rounded-xl text-white placeholder-gray-500 outline-none transition-all"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    minHeight: "48px",
                    fontSize: "15px",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#f5c518";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="csignup-email"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "oklch(0.75 0.03 255)" }}
                >
                  Email Address <span style={{ color: "#f5c518" }}>*</span>
                </label>
                <input
                  id="csignup-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 rounded-xl text-white placeholder-gray-500 outline-none transition-all"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    minHeight: "48px",
                    fontSize: "15px",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#f5c518";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="csignup-password"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "oklch(0.75 0.03 255)" }}
                >
                  Password <span style={{ color: "#f5c518" }}>*</span>
                </label>
                <div className="relative">
                  <input
                    id="csignup-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    placeholder="Min. 8 characters"
                    className="w-full px-4 pr-12 rounded-xl text-white placeholder-gray-500 outline-none transition-all"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      minHeight: "48px",
                      fontSize: "15px",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#f5c518";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.12)";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Business Name */}
              <div>
                <label
                  htmlFor="csignup-business"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "oklch(0.75 0.03 255)" }}
                >
                  Business Name <span style={{ color: "#f5c518" }}>*</span>
                </label>
                <input
                  id="csignup-business"
                  type="text"
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  required
                  placeholder="Your business or company name"
                  className="w-full px-4 rounded-xl text-white placeholder-gray-500 outline-none transition-all"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    minHeight: "48px",
                    fontSize: "15px",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#f5c518";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={signupMutation.isPending || !!successMessage}
                className="w-full py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-200 mt-2"
                style={{
                  backgroundColor:
                    signupMutation.isPending || successMessage
                      ? "rgba(245,197,24,0.6)"
                      : "#f5c518",
                  color: "#0a1628",
                  minHeight: "52px",
                  cursor:
                    signupMutation.isPending || successMessage
                      ? "not-allowed"
                      : "pointer",
                }}
              >
                {signupMutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5" />
                    Create Account
                  </>
                )}
              </button>
            </form>

            {/* Login Link */}
            <p
              className="text-center text-sm mt-5"
              style={{ color: "oklch(0.60 0.03 255)" }}
            >
              Already have an account?{" "}
              <Link
                to="/customer-login"
                className="font-semibold hover:underline transition-colors"
                style={{ color: "#f5c518" }}
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </section>

      <FreeConsultationSection />
    </div>
  );
}
