import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle, Phone } from "lucide-react";
import { useState } from "react";
import FreeConsultationSection from "../components/FreeConsultationSection";
import {
  COMPLIANCE_CATEGORIES,
  COMPLIANCE_SERVICES,
} from "../data/complianceServices";

export default function ComplianceService() {
  const [openSection, setOpenSection] = useState<string | null>(
    COMPLIANCE_CATEGORIES[0]?.key ?? null,
  );

  return (
    <div style={{ backgroundColor: "#0a1628" }}>
      {/* Hero */}
      <section
        className="py-14 px-4"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Link
              to="/services"
              className="flex items-center gap-1 text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: "#f5c518" }}
              data-ocid="breadcrumb.services.link"
            >
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-sm text-gray-300">Compliance Services</span>
          </div>

          <div className="text-center">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{
                backgroundColor: "rgba(245,197,24,0.15)",
                color: "#f5c518",
              }}
            >
              Statutory Compliance
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Compliance <span style={{ color: "#f5c518" }}>Services</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              From PF and ESI registration to MSME, Import Export Code, GeM, and
              RERA — we handle all your statutory compliance requirements with
              expert guidance and end-to-end support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9279242122"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]"
                style={{ backgroundColor: "#f5c518", color: "#0a1628" }}
                data-ocid="hero.call.button"
              >
                <Phone className="w-5 h-5" /> Call: +91 9279242122
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
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {[
              { value: "15000+", label: "Happy Clients" },
              { value: "12+", label: "Years Experience" },
              { value: "Pan India", label: "Coverage" },
              { value: "100%", label: "Compliance" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center py-4 rounded-xl"
                style={{
                  backgroundColor: "rgba(245,197,24,0.08)",
                  border: "1px solid rgba(245,197,24,0.2)",
                }}
              >
                <div
                  className="text-2xl font-extrabold"
                  style={{ color: "#f5c518" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service List */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0d1f3c" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              Choose Your{" "}
              <span style={{ color: "#f5c518" }}>Compliance Service</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Select a category below and click any service to see full details,
              benefits, required documents, and process.
            </p>
          </div>

          <div className="space-y-4">
            {COMPLIANCE_CATEGORIES.map((category) => {
              const services = COMPLIANCE_SERVICES.filter((s) =>
                category.slugs.includes(s.slug),
              );
              return (
                <div
                  key={category.key}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "2px solid #FFC107" }}
                  data-ocid={`${category.key}.panel`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSection(
                        openSection === category.key ? null : category.key,
                      )
                    }
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                    style={{ backgroundColor: "rgba(245,197,24,0.10)" }}
                    data-ocid={`${category.key}.toggle`}
                    aria-expanded={openSection === category.key}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <p className="text-white font-bold text-base">
                          {category.title}
                        </p>
                        <p className="text-gray-400 text-xs mt-0.5">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform duration-200 ${openSection === category.key ? "rotate-90" : ""}`}
                      style={{ color: "#f5c518" }}
                    />
                  </button>
                  {openSection === category.key && (
                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5"
                      style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                    >
                      {services.map((service, idx) => (
                        <Link
                          key={service.slug}
                          to="/services/compliance-service/$serviceSlug"
                          params={{ serviceSlug: service.slug }}
                          className="flex items-start gap-3 p-4 rounded-xl hover:scale-[1.02] transition-all duration-200 group"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(245,197,24,0.3)",
                          }}
                          data-ocid={`${category.key}.service.item.${idx + 1}`}
                        >
                          <span className="text-2xl flex-shrink-0">
                            {service.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-semibold text-sm leading-snug group-hover:text-yellow-300 transition-colors">
                              {service.title}
                            </p>
                            <div className="flex items-center gap-1 mt-1.5">
                              <CheckCircle
                                className="w-3 h-3 flex-shrink-0"
                                style={{ color: "#f5c518" }}
                              />
                              <span className="text-xs text-gray-400">
                                View Details
                              </span>
                              <ArrowRight
                                className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ color: "#f5c518" }}
                              />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4" style={{ backgroundColor: "#f5c518" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-3"
            style={{ color: "#0a1628" }}
          >
            Need Help With Statutory Compliance?
          </h2>
          <p
            className="text-base mb-6"
            style={{ color: "#0a1628", opacity: 0.8 }}
          >
            Our compliance experts handle all registrations and ongoing filings
            on your behalf — so you can focus on growing your business.
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

      <div id="get-consultation">
        <FreeConsultationSection />
      </div>
    </div>
  );
}
