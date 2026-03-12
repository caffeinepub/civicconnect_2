import { useQuery } from "@tanstack/react-query";
import {
  AlertCircle,
  Eye,
  EyeOff,
  FileText,
  Loader2,
  LogOut,
  Search,
  Shield,
  Users,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";
import {
  useGetAllCustomers,
  useGetAllServiceRequests,
} from "../hooks/useQueries";
import { formatTimestampShort } from "../utils/dateUtils";

const ADMIN_PASSWORD = "YMWAdmin@2024";
const ADMIN_SESSION_KEY = "ymw_admin_auth";

type Tab = "customers" | "requests" | "affiliates";

export default function AdminPanel() {
  const [isAdminAuth, setIsAdminAuth] = useState(
    () => sessionStorage.getItem(ADMIN_SESSION_KEY) === "true",
  );
  const [adminPassword, setAdminPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("customers");
  const [customerSearch, setCustomerSearch] = useState("");
  const [requestSearch, setRequestSearch] = useState("");

  const {
    data: customers,
    isLoading: customersLoading,
    error: customersError,
  } = useGetAllCustomers();
  const {
    data: serviceRequests,
    isLoading: requestsLoading,
    error: requestsError,
  } = useGetAllServiceRequests();

  const { actor, isFetching: actorFetching } = useActor();
  const {
    data: affiliates,
    isLoading: affiliatesLoading,
    error: affiliatesError,
  } = useQuery({
    queryKey: ["affiliateApplications"],
    queryFn: async () => {
      if (!actor) return [];
      return (actor as any).listAffiliateApplications();
    },
    enabled: !!actor && !actorFetching && isAdminAuth,
    retry: false,
  });

  const handleAdminLogin = (e: React.FormEvent) => {
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
    return (
      c.fullName.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      c.businessName.toLowerCase().includes(q)
    );
  });

  const filteredRequests = (serviceRequests ?? []).filter((r) => {
    const q = requestSearch.toLowerCase();
    return (
      r.serviceName.toLowerCase().includes(q) ||
      r.requestId.toString().includes(q)
    );
  });

  // Admin Login Screen
  if (!isAdminAuth) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4 py-16"
        style={{ backgroundColor: "#0a1628" }}
      >
        <div className="w-full max-w-sm">
          <div
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <div className="flex flex-col items-center mb-7">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: "rgba(245,197,24,0.15)" }}
              >
                <Shield className="w-7 h-7" style={{ color: "#f5c518" }} />
              </div>
              <h2 className="text-xl font-bold text-white">Admin Panel</h2>
              <p
                className="text-xs mt-1 text-center"
                style={{ color: "oklch(0.60 0.03 255)" }}
              >
                YMW Compliance Services — Restricted Access
              </p>
            </div>

            {authError && (
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
                  {authError}
                </p>
              </div>
            )}

            <form onSubmit={handleAdminLogin} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="admin-password"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "oklch(0.75 0.03 255)" }}
                >
                  Admin Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={adminPassword}
                    onChange={(e) => {
                      setAdminPassword(e.target.value);
                      setAuthError("");
                    }}
                    required
                    placeholder="Enter admin password"
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
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-200"
                style={{
                  backgroundColor: "#f5c518",
                  color: "#0a1628",
                  minHeight: "50px",
                }}
              >
                <Shield className="w-5 h-5" />
                Login as Admin
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div style={{ backgroundColor: "#0a1628", minHeight: "100vh" }}>
      {/* Header */}
      <section
        className="py-8 px-4"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2"
              style={{
                backgroundColor: "rgba(245,197,24,0.15)",
                color: "#f5c518",
              }}
            >
              Admin Panel
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              YMW <span style={{ color: "#f5c518" }}>Admin Dashboard</span>
            </h1>
            <p
              className="text-sm mt-1"
              style={{ color: "oklch(0.65 0.03 255)" }}
            >
              Manage customers and service requests
            </p>
          </div>
          <button
            type="button"
            onClick={handleAdminLogout}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:opacity-80"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
            }}
          >
            <LogOut className="w-4 h-4" />
            Admin Logout
          </button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div
            className="p-5 rounded-2xl flex items-center gap-4"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(245,197,24,0.15)" }}
            >
              <Users className="w-6 h-6" style={{ color: "#f5c518" }} />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white">
                {customersLoading ? "—" : (customers?.length ?? 0)}
              </p>
              <p className="text-xs" style={{ color: "oklch(0.60 0.03 255)" }}>
                Total Customers
              </p>
            </div>
          </div>
          <div
            className="p-5 rounded-2xl flex items-center gap-4"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(245,197,24,0.15)" }}
            >
              <FileText className="w-6 h-6" style={{ color: "#f5c518" }} />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white">
                {requestsLoading ? "—" : (serviceRequests?.length ?? 0)}
              </p>
              <p className="text-xs" style={{ color: "oklch(0.60 0.03 255)" }}>
                Service Requests
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab("customers")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
            style={{
              backgroundColor:
                activeTab === "customers"
                  ? "#f5c518"
                  : "rgba(255,255,255,0.06)",
              color: activeTab === "customers" ? "#0a1628" : "white",
              border:
                activeTab === "customers"
                  ? "none"
                  : "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <Users className="w-4 h-4" />
            All Customers
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("requests")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
            style={{
              backgroundColor:
                activeTab === "requests" ? "#f5c518" : "rgba(255,255,255,0.06)",
              color: activeTab === "requests" ? "#0a1628" : "white",
              border:
                activeTab === "requests"
                  ? "none"
                  : "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <FileText className="w-4 h-4" />
            Service Requests
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("affiliates")}
            data-ocid="admin.affiliates.tab"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
            style={{
              backgroundColor:
                activeTab === "affiliates"
                  ? "#f5c518"
                  : "rgba(255,255,255,0.06)",
              color: activeTab === "affiliates" ? "#0a1628" : "white",
              border:
                activeTab === "affiliates"
                  ? "none"
                  : "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <Users className="w-4 h-4" />
            Affiliate Applications
          </button>
        </div>

        {/* Customers Tab */}
        {activeTab === "customers" && (
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <div className="p-5 border-b border-white/10">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                  style={{ color: "oklch(0.55 0.02 255)" }}
                />
                <input
                  type="text"
                  value={customerSearch}
                  onChange={(e) => setCustomerSearch(e.target.value)}
                  placeholder="Search by name, email, or business..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-white placeholder-gray-500 outline-none"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>

            {customersLoading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2
                  className="w-7 h-7 animate-spin"
                  style={{ color: "#f5c518" }}
                />
              </div>
            ) : customersError ? (
              <div className="flex items-center justify-center gap-2 py-16">
                <AlertCircle className="w-5 h-5" style={{ color: "#ef4444" }} />
                <p className="text-sm" style={{ color: "#ef4444" }}>
                  Failed to load customers. Admin access required.
                </p>
              </div>
            ) : filteredCustomers.length === 0 ? (
              <p
                className="text-center py-16 text-sm"
                style={{ color: "oklch(0.55 0.02 255)" }}
              >
                {customerSearch
                  ? "No customers match your search."
                  : "No customers registered yet."}
              </p>
            ) : (
              <>
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr
                        style={{
                          borderBottom: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {[
                          "ID",
                          "Full Name",
                          "Email",
                          "Mobile",
                          "Business Name",
                          "Registered",
                        ].map((h) => (
                          <th
                            key={h}
                            className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                            style={{ color: "#f5c518" }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCustomers.map((c, i) => (
                        <tr
                          key={c.customerId.toString()}
                          style={{
                            borderBottom:
                              i < filteredCustomers.length - 1
                                ? "1px solid rgba(255,255,255,0.06)"
                                : "none",
                          }}
                        >
                          <td
                            className="px-5 py-4 text-xs font-mono"
                            style={{ color: "oklch(0.60 0.03 255)" }}
                          >
                            #{c.customerId.toString()}
                          </td>
                          <td className="px-5 py-4 text-sm font-medium text-white">
                            {c.fullName}
                          </td>
                          <td
                            className="px-5 py-4 text-sm"
                            style={{ color: "oklch(0.70 0.03 255)" }}
                          >
                            {c.email}
                          </td>
                          <td
                            className="px-5 py-4 text-sm"
                            style={{ color: "oklch(0.70 0.03 255)" }}
                          >
                            {c.mobileNumber}
                          </td>
                          <td
                            className="px-5 py-4 text-sm"
                            style={{ color: "oklch(0.70 0.03 255)" }}
                          >
                            {c.businessName}
                          </td>
                          <td
                            className="px-5 py-4 text-xs"
                            style={{ color: "oklch(0.60 0.03 255)" }}
                          >
                            {formatTimestampShort(c.createdAt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden divide-y divide-white/10">
                  {filteredCustomers.map((c) => (
                    <div
                      key={c.customerId.toString()}
                      className="p-4 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">
                          {c.fullName}
                        </span>
                        <span
                          className="text-xs font-mono"
                          style={{ color: "#f5c518" }}
                        >
                          #{c.customerId.toString()}
                        </span>
                      </div>
                      <p
                        className="text-xs"
                        style={{ color: "oklch(0.65 0.03 255)" }}
                      >
                        {c.email}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "oklch(0.65 0.03 255)" }}
                      >
                        {c.mobileNumber}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "oklch(0.65 0.03 255)" }}
                      >
                        {c.businessName}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "oklch(0.55 0.02 255)" }}
                      >
                        Registered: {formatTimestampShort(c.createdAt)}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Service Requests Tab */}
        {activeTab === "requests" && (
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <div className="p-5 border-b border-white/10">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                  style={{ color: "oklch(0.55 0.02 255)" }}
                />
                <input
                  type="text"
                  value={requestSearch}
                  onChange={(e) => setRequestSearch(e.target.value)}
                  placeholder="Search by service name or request ID..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-white placeholder-gray-500 outline-none"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>

            {requestsLoading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2
                  className="w-7 h-7 animate-spin"
                  style={{ color: "#f5c518" }}
                />
              </div>
            ) : requestsError ? (
              <div className="flex items-center justify-center gap-2 py-16">
                <AlertCircle className="w-5 h-5" style={{ color: "#ef4444" }} />
                <p className="text-sm" style={{ color: "#ef4444" }}>
                  Failed to load service requests. Admin access required.
                </p>
              </div>
            ) : filteredRequests.length === 0 ? (
              <p
                className="text-center py-16 text-sm"
                style={{ color: "oklch(0.55 0.02 255)" }}
              >
                {requestSearch
                  ? "No requests match your search."
                  : "No service requests yet."}
              </p>
            ) : (
              <>
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr
                        style={{
                          borderBottom: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {[
                          "Req ID",
                          "Customer ID",
                          "Service Name",
                          "Notes",
                          "Submitted",
                        ].map((h) => (
                          <th
                            key={h}
                            className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider"
                            style={{ color: "#f5c518" }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRequests.map((r, i) => (
                        <tr
                          key={r.requestId.toString()}
                          style={{
                            borderBottom:
                              i < filteredRequests.length - 1
                                ? "1px solid rgba(255,255,255,0.06)"
                                : "none",
                          }}
                        >
                          <td
                            className="px-5 py-4 text-xs font-mono"
                            style={{ color: "oklch(0.60 0.03 255)" }}
                          >
                            #{r.requestId.toString()}
                          </td>
                          <td
                            className="px-5 py-4 text-xs font-mono"
                            style={{ color: "oklch(0.60 0.03 255)" }}
                          >
                            #{r.customerId.toString()}
                          </td>
                          <td className="px-5 py-4 text-sm font-medium text-white">
                            {r.serviceName}
                          </td>
                          <td
                            className="px-5 py-4 text-sm"
                            style={{ color: "oklch(0.65 0.03 255)" }}
                          >
                            {r.notes || "—"}
                          </td>
                          <td
                            className="px-5 py-4 text-xs"
                            style={{ color: "oklch(0.60 0.03 255)" }}
                          >
                            {formatTimestampShort(r.createdAt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden divide-y divide-white/10">
                  {filteredRequests.map((r) => (
                    <div key={r.requestId.toString()} className="p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">
                          {r.serviceName}
                        </span>
                        <span
                          className="text-xs font-mono"
                          style={{ color: "#f5c518" }}
                        >
                          #{r.requestId.toString()}
                        </span>
                      </div>
                      <p
                        className="text-xs"
                        style={{ color: "oklch(0.65 0.03 255)" }}
                      >
                        Customer ID: #{r.customerId.toString()}
                      </p>
                      {r.notes && (
                        <p
                          className="text-xs"
                          style={{ color: "oklch(0.65 0.03 255)" }}
                        >
                          Notes: {r.notes}
                        </p>
                      )}
                      <p
                        className="text-xs"
                        style={{ color: "oklch(0.55 0.02 255)" }}
                      >
                        Submitted: {formatTimestampShort(r.createdAt)}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Affiliates Tab */}
      {activeTab === "affiliates" && (
        <div
          data-ocid="admin.affiliates.panel"
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <div className="p-5 border-b border-white/10">
            <h3 className="text-sm font-semibold text-white">
              Affiliate Applications
            </h3>
            <p
              className="text-xs mt-1"
              style={{ color: "oklch(0.60 0.03 255)" }}
            >
              All partner applications submitted through the affiliate signup
              form
            </p>
          </div>

          {affiliatesLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2
                data-ocid="admin.affiliates.loading_state"
                className="w-7 h-7 animate-spin"
                style={{ color: "#f5c518" }}
              />
            </div>
          ) : affiliatesError ? (
            <div
              data-ocid="admin.affiliates.error_state"
              className="flex items-center justify-center gap-2 py-16"
            >
              <AlertCircle className="w-5 h-5" style={{ color: "#ef4444" }} />
              <p className="text-sm" style={{ color: "#ef4444" }}>
                Failed to load applications. Admin access required.
              </p>
            </div>
          ) : !affiliates || affiliates.length === 0 ? (
            <p
              data-ocid="admin.affiliates.empty_state"
              className="text-center py-16 text-sm"
              style={{ color: "oklch(0.55 0.02 255)" }}
            >
              No affiliate applications submitted yet.
            </p>
          ) : (
            <>
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full" data-ocid="admin.affiliates.table">
                  <thead>
                    <tr style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                      {[
                        "Name",
                        "Email",
                        "Phone",
                        "City",
                        "Business Type",
                        "Applied On",
                      ].map((h) => (
                        <th
                          key={h}
                          className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                          style={{ color: "oklch(0.55 0.02 255)" }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {affiliates.map((a: any, idx: number) => (
                      <tr
                        key={a.id}
                        data-ocid={`admin.affiliates.row.${idx + 1}`}
                        className="transition-colors hover:bg-white/[0.03]"
                      >
                        <td className="px-5 py-4 text-sm font-medium text-white">
                          {a.name}
                        </td>
                        <td
                          className="px-5 py-4 text-sm"
                          style={{ color: "oklch(0.65 0.03 255)" }}
                        >
                          {a.email}
                        </td>
                        <td
                          className="px-5 py-4 text-sm"
                          style={{ color: "oklch(0.65 0.03 255)" }}
                        >
                          {a.phone}
                        </td>
                        <td
                          className="px-5 py-4 text-sm"
                          style={{ color: "oklch(0.65 0.03 255)" }}
                        >
                          {a.city}
                        </td>
                        <td
                          className="px-5 py-4 text-sm"
                          style={{ color: "oklch(0.65 0.03 255)" }}
                        >
                          {a.businessType}
                        </td>
                        <td
                          className="px-5 py-4 text-xs"
                          style={{ color: "oklch(0.60 0.03 255)" }}
                        >
                          {formatTimestampShort(a.createdAt)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden divide-y divide-white/10">
                {affiliates.map((a: any, idx: number) => (
                  <div
                    key={a.id}
                    data-ocid={`admin.affiliates.row.${idx + 1}`}
                    className="p-4 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">
                        {a.name}
                      </span>
                      <span className="text-xs" style={{ color: "#f5c518" }}>
                        {a.businessType}
                      </span>
                    </div>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.65 0.03 255)" }}
                    >
                      {a.email}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.65 0.03 255)" }}
                    >
                      {a.phone} · {a.city}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.55 0.02 255)" }}
                    >
                      Applied: {formatTimestampShort(a.createdAt)}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
