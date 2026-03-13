import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle,
  ChevronDown,
  Clock,
  Globe,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Star,
  Tag,
  Users,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useSubmitConsultationRequest } from "../hooks/useQueries";
import { getUTMSource } from "../utils/urlParams";

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

const FEATURED_SERVICES = [
  {
    icon: "🏢",
    title: "Business Registration",
    desc: "Private Ltd, LLP, OPC, Partnership & more",
    badge: "Most Popular",
    link: "/services/business-registration",
  },
  {
    icon: "📊",
    title: "Tax & GST",
    desc: "GST registration, filing & tax compliance",
    badge: "Fast Track",
    link: "/services/tax-gst",
  },
  {
    icon: "🏆",
    title: "ISO Certification",
    desc: "ISO 9001, 14001, 22000 & more",
    badge: "Certified",
    link: "/services/iso-certification",
  },
  {
    icon: "📋",
    title: "Compliance Service",
    desc: "Annual filings & statutory compliance",
    badge: "Annual",
    link: "/services/compliance-service",
  },
  {
    icon: "🏛️",
    title: "Government License",
    desc: "Trade, drug, shop & establishment licenses",
    badge: "Official",
    link: "/services/government-licenses",
  },
  {
    icon: "📝",
    title: "Government Registration",
    desc: "MSME/Udyam, DPIIT & statutory registrations",
    badge: "Required",
    link: "/services/government-registration",
  },
  {
    icon: "👷",
    title: "Labour Department",
    desc: "PF, ESI, labour license & compliance",
    badge: "Mandatory",
    link: "/services/labour-department",
  },
  {
    icon: "🚀",
    title: "Startup Service",
    desc: "End-to-end startup support & compliance",
    badge: "New",
    link: "/services/startup-service",
  },
  {
    icon: "🍽️",
    title: "FSSAI License",
    desc: "Food business license & compliance",
    badge: "Food Safety",
    link: "/services/fssai-license",
  },
  {
    icon: "™️",
    title: "Trademark Registration",
    desc: "Protect your brand identity",
    badge: "Legal",
    link: "/services/trademark-registration",
  },
  {
    icon: "🌿",
    title: "Pollution Control Board",
    desc: "CTE & CTO certificates for industries",
    badge: "Environment",
    link: "/services/pollution-control",
  },
  {
    icon: "📑",
    title: "Tender Services",
    desc: "Government tender filing & bid management",
    badge: "Government",
    link: "/services/tender-services",
  },
  {
    icon: "🔐",
    title: "Digital Signature Certificate",
    desc: "Class 2 & Class 3 DSC for all needs",
    badge: "DSC",
    link: "/services/digital-signature-certificate",
  },
  {
    icon: "📜",
    title: "Agreement & Contract",
    desc: "Drafting & registration of legal documents",
    badge: "Legal",
    link: "/services/agreement-contract",
  },
  {
    icon: "🤝",
    title: "Small Business Support Service",
    desc: "Comprehensive support for SMEs & micro-enterprises",
    badge: "SME",
    link: "/services/small-business-support",
  },
];

const STATS = [
  {
    value: "15,000+",
    label: "Happy Clients",
    icon: <Users className="w-5 h-5" />,
  },
  {
    value: "100+",
    label: "Services Offered",
    icon: <Award className="w-5 h-5" />,
  },
  {
    value: "12+",
    label: "Years Experience",
    icon: <Clock className="w-5 h-5" />,
  },
  { value: "5★", label: "Client Rating", icon: <Star className="w-5 h-5" /> },
];

const STRENGTHS = [
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: "Expert Professionals",
    desc: "CA, CS & legal experts with years of industry experience",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "Pan India Service",
    desc: "Serving clients across all 28 states & Union Territories",
  },
  {
    icon: <Tag className="w-7 h-7" />,
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges whatsoever",
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: "Fast Processing",
    desc: "Quick turnaround with dedicated relationship managers",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "End-to-End Support",
    desc: "From registration to annual compliance, we're with you",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "100% Online Process",
    desc: "Submit documents & track status from anywhere online",
  },
];

// WhatsApp SVG icon component
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    selectedService: "",
    cityState: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submittedId, setSubmittedId] = useState("");

  const submitMutation = useSubmitConsultationRequest();

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
    } catch {
      // error handled by mutation state
    }
  };

  return (
    <div style={{ backgroundColor: "#0a1628" }}>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)",
          minHeight: "100vh",
        }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #f5c518 0, #f5c518 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              {/* Badge */}
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                  style={{
                    backgroundColor: "rgba(245,197,24,0.15)",
                    color: "#f5c518",
                    border: "1px solid rgba(245,197,24,0.3)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  India's Trusted Compliance Partner
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span style={{ color: "#ffffff" }}>
                  Start Your Business with
                </span>
                <br />
                <span style={{ color: "#f5c518" }}>Our Compliance Experts</span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                From business registration to GST, ISO certification to
                trademark — we handle all your compliance needs across India.
                Fast, affordable, and 100% reliable.
              </p>

              {/* Checkmarks */}
              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                {[
                  "Free Consultation",
                  "Pan India Service",
                  "12+ Years Experience",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: "#f5c518" }}
                    />
                    <span className="text-sm font-medium text-gray-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:9279242122"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all min-h-[52px]"
                  style={{ backgroundColor: "#f5c518", color: "#0a1628" }}
                >
                  <Phone className="w-5 h-5" />
                  Call Now: 9279242122
                </a>
                <a
                  href="https://wa.me/918102906339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all min-h-[52px]"
                  style={{ backgroundColor: "#25D366", color: "#fff" }}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-1 p-3 rounded-xl text-center"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span style={{ color: "#f5c518" }}>{stat.icon}</span>
                    <span className="text-xl font-extrabold text-white">
                      {stat.value}
                    </span>
                    <span className="text-xs text-gray-400">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Scroll hint */}
              <div className="flex items-center gap-2 text-gray-500 text-xs mt-2">
                <ChevronDown className="w-4 h-4 animate-bounce" />
                <span>Scroll to explore our services</span>
              </div>
            </div>

            {/* Right Column - Consultation Form */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundColor: "#fff",
                border: "1px solid rgba(245,197,24,0.3)",
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-8 px-6 md:px-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "#0a1628" }}
                  >
                    Thank You!
                  </h3>
                  <p className="text-gray-600 max-w-sm">
                    Your consultation request has been submitted. Our team will
                    contact you shortly.
                  </p>
                  {submittedId && (
                    <div
                      className="px-4 py-2 rounded-lg text-sm font-medium"
                      style={{
                        backgroundColor: "rgba(245,197,24,0.15)",
                        color: "#0a1628",
                      }}
                    >
                      Reference ID: {submittedId.slice(-8)}
                    </div>
                  )}
                </div>
              ) : (
                <>
                  {/* Heading block with golden yellow background */}
                  <div
                    className="px-6 md:px-8 py-5"
                    style={{ backgroundColor: "#f5c518" }}
                  >
                    <h2
                      className="text-2xl font-bold mb-1"
                      style={{ color: "#0a1628" }}
                    >
                      Get Free Consultation
                    </h2>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#0a1628" }}
                    >
                      Fill the form — our expert will call you back
                    </p>
                  </div>

                  {/* Form fields */}
                  <div className="px-6 md:px-8 py-6">
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      <div>
                        <label
                          htmlFor="home-cta-full-name"
                          className="block text-xs font-semibold text-gray-600 mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          id="home-cta-full-name"
                          type="text"
                          required
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none min-h-[44px]"
                          style={{
                            border: "1.5px solid #e5e7eb",
                            color: "#0a1628",
                            backgroundColor: "#f9fafb",
                          }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="home-cta-phone"
                          className="block text-xs font-semibold text-gray-600 mb-1"
                        >
                          Phone Number *
                        </label>
                        <div className="flex">
                          <span
                            className="flex items-center px-3 rounded-l-lg text-sm font-medium min-h-[44px]"
                            style={{
                              backgroundColor: "#f3f4f6",
                              border: "1.5px solid #e5e7eb",
                              borderRight: "none",
                              color: "#374151",
                            }}
                          >
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            id="home-cta-phone"
                            placeholder="10-digit mobile number"
                            value={formData.phoneNumber}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phoneNumber: e.target.value,
                              })
                            }
                            className="flex-1 px-4 py-3 rounded-r-lg text-sm outline-none min-h-[44px]"
                            style={{
                              border: "1.5px solid #e5e7eb",
                              borderLeft: "none",
                              color: "#0a1628",
                              backgroundColor: "#f9fafb",
                            }}
                            maxLength={10}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="home-cta-service"
                          className="block text-xs font-semibold text-gray-600 mb-1"
                        >
                          Select Service *
                        </label>
                        <select
                          id="home-cta-service"
                          required
                          value={formData.selectedService}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              selectedService: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none min-h-[44px]"
                          style={{
                            border: "1.5px solid #e5e7eb",
                            color: formData.selectedService
                              ? "#0a1628"
                              : "#9ca3af",
                            backgroundColor: "#f9fafb",
                          }}
                        >
                          <option value="">Choose a service...</option>
                          {SERVICES.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="home-cta-city"
                          className="block text-xs font-semibold text-gray-600 mb-1"
                        >
                          City / State *
                        </label>
                        <input
                          id="home-cta-city"
                          type="text"
                          required
                          placeholder="e.g. Dhanbad, Jharkhand"
                          value={formData.cityState}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              cityState: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none min-h-[44px]"
                          style={{
                            border: "1.5px solid #e5e7eb",
                            color: "#0a1628",
                            backgroundColor: "#f9fafb",
                          }}
                        />
                      </div>

                      {submitMutation.isError && (
                        <p className="text-xs text-red-500">
                          Something went wrong. Please try again.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={submitMutation.isPending}
                        className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 min-h-[52px]"
                        style={{ backgroundColor: "#f5c518", color: "#0a1628" }}
                      >
                        {submitMutation.isPending ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Get Free Consultation
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-gray-400">
                        🔒 100% Free &amp; Confidential. No spam, ever.
                      </p>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0d1f3c" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{
                backgroundColor: "rgba(245,197,24,0.15)",
                color: "#f5c518",
              }}
            >
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Complete Compliance Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From business registration to annual compliance — we offer 100+
              services to keep your business legally sound.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_SERVICES.map((service, index) => (
              <Link
                key={service.title}
                to={service.link}
                className="block group"
                data-ocid={`home.service.card.${index + 1}`}
              >
                <div
                  className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 relative h-full"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">
                      {service.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-bold text-white text-base">
                          {service.title}
                        </h3>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
                          style={{
                            backgroundColor: "rgba(245,197,24,0.15)",
                            color: "#f5c518",
                          }}
                        >
                          {service.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{service.desc}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight
                      className="w-4 h-4"
                      style={{ color: "#f5c518" }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              to="/company-search"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base border-2 hover:opacity-90 transition-all"
              style={{
                borderColor: "#f5c518",
                color: "#0a1628",
                backgroundColor: "rgba(245,197,24,0.1)",
              }}
              data-ocid="home.company_search.link"
            >
              🔍 Search Company Name &amp; CIN
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all"
              style={{ backgroundColor: "#f5c518", color: "#0a1628" }}
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 px-4" style={{ backgroundColor: "#0a1628" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span style={{ color: "#f5c518" }}>{stat.icon}</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0d1f3c" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{
                backgroundColor: "rgba(245,197,24,0.15)",
                color: "#f5c518",
              }}
            >
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              The YMW Advantage
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine expertise, technology, and dedication to deliver
              compliance services that truly make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRENGTHS.map((strength) => (
              <div
                key={strength.title}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: "rgba(245,197,24,0.15)",
                    color: "#f5c518",
                  }}
                >
                  {strength.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">
                  {strength.title}
                </h3>
                <p className="text-sm text-gray-400">{strength.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f5c518" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{ color: "#0a1628" }}
          >
            Ready to Start Your Business Journey?
          </h2>
          <p
            className="text-lg mb-8 font-medium"
            style={{ color: "#0a1628", opacity: 0.8 }}
          >
            Join 15,000+ businesses that trust YMW Compliance Services for their
            legal and compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9279242122"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all min-h-[52px]"
              style={{ backgroundColor: "#0a1628", color: "#f5c518" }}
            >
              <Phone className="w-5 h-5" />
              Call: 9279242122
            </a>
            <a
              href="https://wa.me/918102906339"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all min-h-[52px]"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all min-h-[52px]"
              style={{
                backgroundColor: "rgba(10,22,40,0.15)",
                color: "#0a1628",
                border: "2px solid #0a1628",
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
