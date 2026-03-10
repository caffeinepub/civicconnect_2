import { useNavigate } from "@tanstack/react-router";
import {
  AlertCircle,
  Briefcase,
  Building2,
  CheckCircle,
  ChevronDown,
  Clock,
  FileUp,
  Loader2,
  LogOut,
  Mail,
  MessageCircle,
  Phone,
  User,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import {
  clearCustomerSession,
  getCustomerSession,
} from "../hooks/useCustomerSession";
import {
  useGetServiceRequestsByCustomer,
  useSubmitServiceRequest,
} from "../hooks/useQueries";
import { formatTimestampShort } from "../utils/dateUtils";

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
  "Small Business Support Service",
];

export default function CustomerDashboard() {
  const navigate = useNavigate();

  // Read session once on mount using the standalone getter
  const session = getCustomerSession();

  const [selectedService, setSelectedService] = useState("");
  const [serviceSuccess, setServiceSuccess] = useState("");
  const [serviceError, setServiceError] = useState("");

  const submitServiceRequest = useSubmitServiceRequest();

  // Use string customerId directly from session
  const customerId = session?.customerId ?? null;
  const { data: serviceRequests, isLoading: requestsLoading } =
    useGetServiceRequestsByCustomer(customerId);

  // Redirect if not logged in
  useEffect(() => {
    if (!session || !session.customerId) {
      navigate({ to: "/customer-login" });
    }
  }, [session, navigate]);

  if (!session || !session.customerId) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#0a1628" }}
      >
        <Loader2
          className="w-8 h-8 animate-spin"
          style={{ color: "#f5c518" }}
        />
      </div>
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
        notes: "",
      });
      setServiceSuccess(`Service request submitted! Reference ID: ${refId}`);
      setSelectedService("");
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Failed to submit request.";
      setServiceError(msg);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918102906339", "_blank", "noopener,noreferrer");
  };

  const handleUploadDocuments = () => {
    const subject = encodeURIComponent(
      `Document Upload - ${session.businessName}`,
    );
    window.location.href = `mailto:ymwcomplianceservices@gmail.com?subject=${subject}`;
  };

  return (
    <div style={{ backgroundColor: "#0a1628", minHeight: "100vh" }}>
      {/* Welcome Banner */}
      <section
        className="py-10 px-4"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2"
              style={{
                backgroundColor: "rgba(245,197,24,0.15)",
                color: "#f5c518",
              }}
            >
              Client Dashboard
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              Welcome back,{" "}
              <span style={{ color: "#f5c518" }}>{session.fullName}</span>!
            </h1>
            <p
              className="text-sm mt-1"
              style={{ color: "oklch(0.65 0.03 255)" }}
            >
              <Building2
                className="inline w-4 h-4 mr-1"
                style={{ color: "#f5c518" }}
              />
              {session.businessName}
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:opacity-80"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
            }}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div
          className="lg:col-span-1 p-6 rounded-2xl"
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shrink-0"
              style={{
                backgroundColor: "rgba(245,197,24,0.15)",
                color: "#f5c518",
              }}
            >
              {session.fullName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="font-bold text-white text-base">
                {session.fullName}
              </h3>
              <p className="text-xs" style={{ color: "oklch(0.60 0.03 255)" }}>
                Customer Account
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2.5">
              <User
                className="w-4 h-4 mt-0.5 shrink-0"
                style={{ color: "#f5c518" }}
              />
              <div>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.55 0.02 255)" }}
                >
                  Full Name
                </p>
                <p className="text-sm text-white font-medium">
                  {session.fullName}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail
                className="w-4 h-4 mt-0.5 shrink-0"
                style={{ color: "#f5c518" }}
              />
              <div>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.55 0.02 255)" }}
                >
                  Email
                </p>
                <p className="text-sm text-white font-medium break-all">
                  {session.email}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone
                className="w-4 h-4 mt-0.5 shrink-0"
                style={{ color: "#f5c518" }}
              />
              <div>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.55 0.02 255)" }}
                >
                  Mobile
                </p>
                <p className="text-sm text-white font-medium">
                  {session.mobileNumber}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Building2
                className="w-4 h-4 mt-0.5 shrink-0"
                style={{ color: "#f5c518" }}
              />
              <div>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.55 0.02 255)" }}
                >
                  Business Name
                </p>
                <p className="text-sm text-white font-medium">
                  {session.businessName}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={handleUploadDocuments}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-80"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid #f5c518",
                color: "#f5c518",
              }}
            >
              <FileUp className="w-4 h-4" />
              Upload Documents
            </button>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-80"
              style={{
                backgroundColor: "#22c55e",
                color: "white",
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Contact Support via WhatsApp
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Service Request Card */}
          <div
            className="p-6 rounded-2xl"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Briefcase className="w-5 h-5" style={{ color: "#f5c518" }} />
              <h3 className="text-lg font-bold text-white">Our Services</h3>
            </div>
            <p
              className="text-sm mb-4"
              style={{ color: "oklch(0.65 0.03 255)" }}
            >
              Select a service below and submit a request. Our team will contact
              you shortly.
            </p>

            {/* Service Success */}
            {serviceSuccess && (
              <div
                className="flex items-start gap-3 p-4 rounded-xl mb-4"
                style={{
                  backgroundColor: "rgba(34,197,94,0.12)",
                  border: "1px solid rgba(34,197,94,0.3)",
                }}
              >
                <CheckCircle
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: "#22c55e" }}
                />
                <p className="text-sm font-medium" style={{ color: "#22c55e" }}>
                  {serviceSuccess}
                </p>
              </div>
            )}

            {/* Service Error */}
            {serviceError && (
              <div
                className="flex items-start gap-3 p-4 rounded-xl mb-4"
                style={{
                  backgroundColor: "rgba(239,68,68,0.10)",
                  border: "1px solid rgba(239,68,68,0.3)",
                }}
              >
                <AlertCircle
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: "#ef4444" }}
                />
                <p className="text-sm font-medium" style={{ color: "#ef4444" }}>
                  {serviceError}
                </p>
              </div>
            )}

            {/* Service Selector */}
            <div className="relative mb-4">
              <select
                value={selectedService}
                onChange={(e) => {
                  setSelectedService(e.target.value);
                  setServiceError("");
                  setServiceSuccess("");
                }}
                className="w-full px-4 pr-10 rounded-xl text-white outline-none appearance-none transition-all"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  minHeight: "48px",
                  fontSize: "15px",
                  color: selectedService ? "white" : "oklch(0.55 0.02 255)",
                }}
              >
                <option
                  value=""
                  style={{ backgroundColor: "#0d1f3c", color: "white" }}
                >
                  — Select a Service —
                </option>
                {SERVICES.map((svc) => (
                  <option
                    key={svc}
                    value={svc}
                    style={{ backgroundColor: "#0d1f3c", color: "white" }}
                  >
                    {svc}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4"
                style={{ color: "#f5c518" }}
              />
            </div>

            <button
              type="button"
              onClick={handleRequestService}
              disabled={submitServiceRequest.isPending || !selectedService}
              className="w-full py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-200"
              style={{
                backgroundColor:
                  submitServiceRequest.isPending || !selectedService
                    ? "rgba(245,197,24,0.4)"
                    : "#f5c518",
                color: "#0a1628",
                minHeight: "50px",
                cursor:
                  submitServiceRequest.isPending || !selectedService
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              {submitServiceRequest.isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Briefcase className="w-5 h-5" />
                  Request Service
                </>
              )}
            </button>
          </div>

          {/* Past Service Requests */}
          <div
            className="p-6 rounded-2xl"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5" style={{ color: "#f5c518" }} />
              <h3 className="text-lg font-bold text-white">
                My Service Requests
              </h3>
            </div>

            {requestsLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2
                  className="w-6 h-6 animate-spin"
                  style={{ color: "#f5c518" }}
                />
              </div>
            ) : !serviceRequests || serviceRequests.length === 0 ? (
              <p
                className="text-sm text-center py-6"
                style={{ color: "oklch(0.55 0.02 255)" }}
              >
                No service requests yet. Select a service above to get started.
              </p>
            ) : (
              <div className="space-y-3">
                {serviceRequests.map((req) => (
                  <div
                    key={req.requestId.toString()}
                    className="flex items-start justify-between gap-3 p-4 rounded-xl"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {req.serviceName}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "oklch(0.55 0.02 255)" }}
                      >
                        Ref: #{req.requestId.toString()} ·{" "}
                        {formatTimestampShort(req.createdAt)}
                      </p>
                    </div>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-semibold shrink-0"
                      style={{
                        backgroundColor: "rgba(245,197,24,0.15)",
                        color: "#f5c518",
                      }}
                    >
                      Pending
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
