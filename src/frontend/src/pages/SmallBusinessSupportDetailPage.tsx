import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  FileText,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { getSmallBusinessServiceBySlug } from "../data/smallBusinessServices";

const DEFAULT_PROCESS = [
  {
    title: "Free Consultation",
    desc: "Speak to our expert and understand your requirements, timeline, and documents needed.",
  },
  {
    title: "Document Collection",
    desc: "We guide you through collecting and preparing all required documents.",
  },
  {
    title: "Service Execution",
    desc: "Our team prepares and delivers the requested service with precision and quality.",
  },
  {
    title: "Review & Revisions",
    desc: "You review the deliverable, suggest changes, and we refine until you are satisfied.",
  },
  {
    title: "Final Delivery",
    desc: "The completed work is delivered and we advise on next steps for your business.",
  },
];

const DEFAULT_FAQS = [
  {
    q: "How quickly can you complete this service?",
    a: "Timelines vary by service. We provide a clear estimate during the free consultation call. Most services are completed within 3–10 business days.",
  },
  {
    q: "What is the cost for this service?",
    a: "Costs depend on the scope and complexity of your requirements. Contact us for a free consultation and transparent pricing with no hidden charges.",
  },
  {
    q: "Do I need to visit your office?",
    a: "No. All our services are delivered remotely. You only need to provide documents and approvals online or via WhatsApp.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. We treat all client information with the highest level of confidentiality and data security.",
  },
  {
    q: "Do you offer support after delivery?",
    a: "Yes. We provide post-delivery support including revisions and guidance for any follow-up actions required.",
  },
];

export default function SmallBusinessSupportDetailPage() {
  // @ts-ignore
  const { serviceSlug } = useParams({ strict: false });
  const service = getSmallBusinessServiceBySlug(serviceSlug ?? "");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!service) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        style={{ backgroundColor: "#dbeafe" }}
      >
        <p className="text-gray-800 text-xl font-bold">Service not found.</p>
        <Link
          to="/services/small-business-support"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Small Business Support
        </Link>
      </div>
    );
  }

  const process = (service as any).process ?? DEFAULT_PROCESS;
  const faqs = (service as any).faqs ?? DEFAULT_FAQS;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "#dbeafe" }} className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <Link
            to="/services"
            className="hover:text-blue-700 font-medium"
            data-ocid="breadcrumb.services.link"
          >
            Services
          </Link>
          <span>/</span>
          <Link
            to="/services/small-business-support"
            className="hover:text-blue-700 font-medium"
            data-ocid="breadcrumb.small-business.link"
          >
            Small Business Support
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-semibold truncate max-w-[200px]">
            {service.title}
          </span>
        </nav>
      </div>

      {/* Page Header */}
      <div
        className="py-10 px-4 mb-8"
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #0d2344 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <Link
            to="/services/small-business-support"
            className="inline-flex items-center gap-1 text-sm font-medium mb-4 hover:opacity-80 transition-opacity"
            style={{ color: "#FFC107" }}
            data-ocid="back.small-business.link"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Small Business Support
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{service.icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                {service.title}
              </h1>
              <p className="text-yellow-300 text-sm mt-1 font-medium">
                YMW Compliance Services LLP · Dhanbad, Jharkhand
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content + Sidebar */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1 min-w-0 space-y-8">
            {/* What is */}
            <section
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: "1px solid #e2e8f0" }}
            >
              <h2
                className="text-xl font-extrabold mb-3"
                style={{ color: "#1e3a5f" }}
              >
                What is {service.title}?
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </section>

            {/* Key Benefits */}
            <section
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: "1px solid #e2e8f0" }}
            >
              <h2
                className="text-xl font-extrabold mb-4"
                style={{ color: "#1e3a5f" }}
              >
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <CheckCircle
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "#FFC107" }}
                    />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Documents Required */}
            <section
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: "1px solid #e2e8f0" }}
            >
              <h2
                className="text-xl font-extrabold mb-4"
                style={{ color: "#1e3a5f" }}
              >
                Documents Required
              </h2>
              <ul className="space-y-2">
                {service.documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-2">
                    <FileText
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "#1e3a5f" }}
                    />
                    <span className="text-sm text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Our Process */}
            <section
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: "1px solid #e2e8f0" }}
            >
              <h2
                className="text-xl font-extrabold mb-6"
                style={{ color: "#1e3a5f" }}
              >
                Our Process
              </h2>
              <div className="space-y-4">
                {process.map(
                  (step: { title: string; desc: string }, idx: number) => (
                    <div key={step.title} className="flex items-start gap-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0"
                        style={{
                          backgroundColor: "#FFC107",
                          color: "#1e3a5f",
                        }}
                      >
                        {idx + 1}
                      </div>
                      <div>
                        <p
                          className="font-bold text-sm"
                          style={{ color: "#1e3a5f" }}
                        >
                          {step.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </section>

            {/* FAQs */}
            <section
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: "1px solid #e2e8f0" }}
            >
              <h2
                className="text-xl font-extrabold mb-4"
                style={{ color: "#1e3a5f" }}
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-2">
                {faqs.map((faq: { q: string; a: string }, idx: number) => (
                  <div
                    key={faq.q}
                    className="rounded-xl overflow-hidden"
                    style={{ border: "1px solid #e2e8f0" }}
                    data-ocid={`faq.item.${idx + 1}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold"
                      style={{ color: "#1e3a5f", backgroundColor: "#f8fafc" }}
                      data-ocid={`faq.toggle.${idx + 1}`}
                    >
                      {faq.q}
                      {openFaq === idx ? (
                        <ChevronUp className="w-4 h-4 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 py-3 text-sm text-gray-600 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:w-80 xl:w-96 flex-shrink-0">
            <div className="lg:sticky lg:top-4 space-y-4">
              {/* Consultation Form */}
              <div
                className="rounded-2xl overflow-hidden shadow-lg"
                style={{ border: "1px solid #e2e8f0" }}
              >
                <div
                  className="px-5 py-4"
                  style={{ backgroundColor: "#1e3a5f" }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Send className="w-4 h-4" style={{ color: "#FFC107" }} />
                    <h3 className="text-white font-extrabold text-base">
                      Get Free Expert Consultation
                    </h3>
                  </div>
                  <p className="text-xs" style={{ color: "#FFC107" }}>
                    Our advisor will call you in 15 min.
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    {["⭐ 5 Rating", "✅ 100% Free", "⏱ 15 Min Callback"].map(
                      (badge) => (
                        <span
                          key={badge}
                          className="text-xs px-2 py-0.5 rounded-full font-semibold"
                          style={{
                            backgroundColor: "rgba(255,193,7,0.15)",
                            color: "#FFC107",
                          }}
                        >
                          {badge}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div className="bg-white p-5">
                  {submitted ? (
                    <div
                      className="text-center py-6"
                      data-ocid="consultation.success_state"
                    >
                      <CheckCircle
                        className="w-10 h-10 mx-auto mb-3"
                        style={{ color: "#22c55e" }}
                      />
                      <p className="font-bold text-gray-800">
                        Request Submitted!
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Our expert will call you within 15 minutes.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        required
                        className="w-full px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2"
                        style={{
                          border: "1px solid #d1d5db",
                          color: "#1e293b",
                        }}
                        data-ocid="consultation.input"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, phone: e.target.value }))
                        }
                        required
                        className="w-full px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2"
                        style={{
                          border: "1px solid #d1d5db",
                          color: "#1e293b",
                        }}
                        data-ocid="consultation.input"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        className="w-full px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2"
                        style={{
                          border: "1px solid #d1d5db",
                          color: "#1e293b",
                        }}
                        data-ocid="consultation.input"
                      />
                      <textarea
                        placeholder="Service you need / Message (optional)"
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        rows={3}
                        className="w-full px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2 resize-none"
                        style={{
                          border: "1px solid #d1d5db",
                          color: "#1e293b",
                        }}
                        data-ocid="consultation.textarea"
                      />
                      <button
                        type="submit"
                        className="w-full py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                        style={{
                          backgroundColor: "#FFC107",
                          color: "#1e3a5f",
                        }}
                        data-ocid="consultation.submit_button"
                      >
                        Get Free Consultation
                      </button>
                      <p className="text-xs text-center text-gray-400">
                        🔒 100% Free &amp; Confidential
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Direct Contact */}
              <div
                className="bg-white rounded-2xl p-5 shadow-sm"
                style={{ border: "1px solid #e2e8f0" }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#1e3a5f" }}
                >
                  OR CONTACT DIRECTLY
                </p>
                <div className="space-y-2">
                  <a
                    href="https://wa.me/918102906339"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#25D366" }}
                    data-ocid="contact.whatsapp.button"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp: +91 81029 06339
                  </a>
                  <a
                    href="tel:9279242122"
                    className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#1e3a5f" }}
                    data-ocid="contact.call.button"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us: +91 9279242122
                  </a>
                  <a
                    href="mailto:ymwcompliances@gmail.com"
                    className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#7c3aed" }}
                    data-ocid="contact.email.button"
                  >
                    <Mail className="w-4 h-4" />
                    ymwcompliances@gmail.com
                  </a>
                </div>
              </div>

              {/* Why Choose Us */}
              <div
                className="rounded-2xl p-5 shadow-sm"
                style={{
                  backgroundColor: "#1e3a5f",
                  border: "1px solid rgba(255,193,7,0.3)",
                }}
              >
                <h3
                  className="text-sm font-extrabold uppercase tracking-widest mb-4"
                  style={{ color: "#FFC107" }}
                >
                  Why Choose YMW Compliance?
                </h3>
                <ul className="space-y-2">
                  {[
                    "15,000+ businesses served",
                    "12+ years of expertise",
                    "100+ services portfolio",
                    "Pan India coverage",
                    "Mon–Sat 10 AM – 6 PM support",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle
                        className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                        style={{ color: "#FFC107" }}
                      />
                      <span className="text-xs text-gray-200">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
