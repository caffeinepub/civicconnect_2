import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle,
  FileText,
  Phone,
  Star,
  Zap,
} from "lucide-react";
import React from "react";
import FreeConsultationSection from "../components/FreeConsultationSection";
import { getServiceBySlug } from "../data/businessRegistrationServices";

export default function ServiceDetailPage() {
  // @ts-ignore — dynamic param
  const { serviceSlug } = useParams({ strict: false });
  const service = getServiceBySlug(serviceSlug ?? "");

  if (!service) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        style={{ backgroundColor: "#0a1628" }}
      >
        <p className="text-white text-xl font-bold">Service not found.</p>
        <Link
          to="/services/business-registration"
          className="text-sm font-medium hover:opacity-80"
          style={{ color: "#f5c518" }}
        >
          ← Back to Business Registration
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#0a1628" }}>
      {/* ── Hero ── */}
      <section
        className="py-14 px-4"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 mb-6 text-sm"
            aria-label="breadcrumb"
          >
            <Link
              to="/services"
              className="hover:opacity-80 transition-opacity font-medium"
              style={{ color: "#f5c518" }}
              data-ocid="breadcrumb.services.link"
            >
              Services
            </Link>
            <span className="text-gray-500">/</span>
            <Link
              to="/services/business-registration"
              className="hover:opacity-80 transition-opacity font-medium"
              style={{ color: "#f5c518" }}
              data-ocid="breadcrumb.business_reg.link"
            >
              Business Registration
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300 truncate max-w-xs">
              {service.title}
            </span>
          </nav>

          <div className="flex items-start gap-4 mb-6">
            <span className="text-5xl">{service.icon}</span>
            <div>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3"
                style={{
                  backgroundColor: "rgba(245,197,24,0.15)",
                  color: "#f5c518",
                }}
              >
                {service.category === "company"
                  ? "Company Registration"
                  : "NGO & Trust Registration"}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-3xl">
            {service.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:9279242122"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]"
              style={{ backgroundColor: "#f5c518", color: "#0a1628" }}
              data-ocid="hero.call.button"
            >
              <Phone className="w-5 h-5" />
              Call: +91 9279242122
            </a>
            <a
              href="#get-consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]"
              style={{
                backgroundColor: "transparent",
                color: "#f5c518",
                border: "2px solid #f5c518",
              }}
              data-ocid="hero.consultation.button"
            >
              Get Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ── Benefits + Documents ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0d1f3c" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Benefits */}
          <div
            className="p-7 rounded-2xl"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "2px solid #FFC107",
            }}
            data-ocid="benefits.card"
          >
            <div className="flex items-center gap-2 mb-5">
              <Zap className="w-5 h-5" style={{ color: "#f5c518" }} />
              <h2 className="text-xl font-extrabold text-white">
                Key Benefits
              </h2>
            </div>
            <ul className="space-y-3">
              {service.benefits.map((benefit, idx) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm text-gray-300"
                  data-ocid={`benefits.item.${idx + 1}`}
                >
                  <CheckCircle
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "#f5c518" }}
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Documents */}
          <div
            className="p-7 rounded-2xl"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "2px solid #FFC107",
            }}
            data-ocid="documents.card"
          >
            <div className="flex items-center gap-2 mb-5">
              <FileText className="w-5 h-5" style={{ color: "#f5c518" }} />
              <h2 className="text-xl font-extrabold text-white">
                Required Documents
              </h2>
            </div>
            <ul className="space-y-3">
              {service.documents.map((doc, idx) => (
                <li
                  key={doc}
                  className="flex items-start gap-3 text-sm text-gray-300"
                  data-ocid={`documents.item.${idx + 1}`}
                >
                  <span
                    className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: "rgba(245,197,24,0.15)",
                      color: "#f5c518",
                    }}
                  >
                    {idx + 1}
                  </span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Why YMW Trust Badges ── */}
      <section className="py-10 px-4" style={{ backgroundColor: "#0a1628" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-white text-center mb-6">
            Why Choose{" "}
            <span style={{ color: "#f5c518" }}>YMW Compliance Services?</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                icon: <Star className="w-5 h-5" />,
                value: "15000+",
                label: "Happy Clients",
              },
              {
                icon: <CheckCircle className="w-5 h-5" />,
                value: "12+",
                label: "Years Experience",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                value: "100+",
                label: "Services",
              },
              {
                icon: <Phone className="w-5 h-5" />,
                value: "Pan India",
                label: "Coverage",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center py-5 rounded-xl"
                style={{
                  backgroundColor: "rgba(245,197,24,0.08)",
                  border: "1px solid rgba(245,197,24,0.2)",
                }}
              >
                <div
                  className="flex justify-center mb-1"
                  style={{ color: "#f5c518" }}
                >
                  {item.icon}
                </div>
                <div
                  className="text-xl font-extrabold"
                  style={{ color: "#f5c518" }}
                >
                  {item.value}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-12 px-4" style={{ backgroundColor: "#f5c518" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-3"
            style={{ color: "#0a1628" }}
          >
            Ready to Get Started?
          </h2>
          <p
            className="text-base mb-6"
            style={{ color: "#0a1628", opacity: 0.8 }}
          >
            Our compliance experts are available to guide you through every step
            — from document preparation to final registration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9279242122"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]"
              style={{ backgroundColor: "#0a1628", color: "#f5c518" }}
              data-ocid="cta.call.button"
            >
              📞 Call: +91 9279242122
            </a>
            <a
              href="https://wa.me/918102906339"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]"
              style={{ backgroundColor: "#25D366", color: "white" }}
              data-ocid="cta.whatsapp.button"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Consultation Form ── */}
      <div id="get-consultation">
        <FreeConsultationSection />
      </div>

      {/* ── Back Link ── */}
      <div
        className="py-6 px-4 text-center"
        style={{ backgroundColor: "#0a1628" }}
      >
        <Link
          to="/services/business-registration"
          className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
          style={{ color: "#f5c518" }}
          data-ocid="back.business_reg.link"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Business Registration Services
        </Link>
      </div>
    </div>
  );
}
