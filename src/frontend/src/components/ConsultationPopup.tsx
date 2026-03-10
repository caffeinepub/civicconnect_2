import { CheckCircle, Loader2, Star, X } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { useSubmitConsultationRequest } from "../hooks/useQueries";
import { getUTMSource } from "../utils/urlParams";

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
  "Other Compliance Services",
];

const SESSION_KEY = "consultationPopupShown";

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    selectedService: "",
    cityState: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submittedId, setSubmittedId] = useState("");

  const submitMutation = useSubmitConsultationRequest();

  useEffect(() => {
    try {
      const shown = sessionStorage.getItem(SESSION_KEY);
      if (!shown) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 5000);
        return () => clearTimeout(timer);
      }
    } catch {
      // sessionStorage not available
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // ignore
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.phoneNumber ||
      !formData.selectedService ||
      !formData.cityState
    )
      return;

    try {
      const utmSource = getUTMSource();
      const id = await submitMutation.mutateAsync({
        ...formData,
        utmSource,
      });
      setSubmittedId(id);
      setSubmitted(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "true");
      } catch {
        // ignore
      }
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch {
      // error handled by mutation state
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleClose();
        }}
        role="button"
        tabIndex={0}
        aria-label="Close consultation popup"
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
        style={{
          backgroundColor: "#0d1f3c",
          border: "1px solid rgba(245,197,24,0.3)",
        }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 flex items-start justify-between"
          style={{ backgroundColor: "#0a1628" }}
        >
          <div>
            <h2 className="text-xl font-extrabold text-white mb-1">
              Get Free Expert Consultation
            </h2>
            <p className="text-sm" style={{ color: "#f5c518" }}>
              Our advisor will call you in 15 min.
            </p>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              <span
                className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  backgroundColor: "rgba(245,197,24,0.15)",
                  color: "#f5c518",
                }}
              >
                <Star className="w-3 h-3 fill-current" /> 5 ★ Rating
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  backgroundColor: "rgba(245,197,24,0.15)",
                  color: "#f5c518",
                }}
              >
                100% Free
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  backgroundColor: "rgba(245,197,24,0.15)",
                  color: "#f5c518",
                }}
              >
                15 Min Callback
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors flex-shrink-0 ml-2"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-4 text-center">
              <CheckCircle className="w-12 h-12" style={{ color: "#f5c518" }} />
              <h3 className="text-lg font-bold text-white">Thank You!</h3>
              <p className="text-sm text-gray-300">
                Your consultation request has been submitted. Our advisor will
                call you within 15 minutes.
              </p>
              {submittedId && (
                <p className="text-xs text-gray-400">
                  Reference ID: {submittedId.slice(-8)}
                </p>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <label
                  htmlFor="popup-full-name"
                  className="block text-xs font-semibold text-gray-300 mb-1"
                >
                  Full Name *
                </label>
                <input
                  id="popup-full-name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-3 py-3 rounded-lg text-sm text-white placeholder-gray-400 outline-none min-h-[44px]"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="popup-phone-number"
                  className="block text-xs font-semibold text-gray-300 mb-1"
                >
                  Phone Number *
                </label>
                <div className="flex">
                  <span
                    className="flex items-center px-3 rounded-l-lg text-sm font-medium text-gray-300 min-h-[44px]"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRight: "none",
                    }}
                  >
                    +91
                  </span>
                  <input
                    id="popup-phone-number"
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    className="flex-1 px-3 py-3 rounded-r-lg text-sm text-white placeholder-gray-400 outline-none min-h-[44px]"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderLeft: "none",
                    }}
                    maxLength={10}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="popup-select-service"
                  className="block text-xs font-semibold text-gray-300 mb-1"
                >
                  Select Service *
                </label>
                <select
                  id="popup-select-service"
                  required
                  value={formData.selectedService}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      selectedService: e.target.value,
                    })
                  }
                  className="w-full px-3 py-3 rounded-lg text-sm text-white outline-none min-h-[44px]"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <option value="" style={{ backgroundColor: "#0d1f3c" }}>
                    Choose a service...
                  </option>
                  {SERVICES.map((service) => (
                    <option
                      key={service}
                      value={service}
                      style={{ backgroundColor: "#0d1f3c" }}
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="popup-city-state"
                  className="block text-xs font-semibold text-gray-300 mb-1"
                >
                  City / State *
                </label>
                <input
                  id="popup-city-state"
                  type="text"
                  required
                  placeholder="e.g. Dhanbad, Jharkhand"
                  value={formData.cityState}
                  onChange={(e) =>
                    setFormData({ ...formData, cityState: e.target.value })
                  }
                  className="w-full px-3 py-3 rounded-lg text-sm text-white placeholder-gray-400 outline-none min-h-[44px]"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                />
              </div>

              {submitMutation.isError && (
                <p className="text-xs text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={submitMutation.isPending}
                className="w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 min-h-[44px] mt-1"
                style={{ backgroundColor: "#f5c518", color: "#0a1628" }}
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Get Free Consultation"
                )}
              </button>
              <p className="text-center text-xs text-gray-500">
                🔒 100% Free &amp; Confidential
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
