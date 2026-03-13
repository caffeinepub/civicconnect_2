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
import { getTenderServiceBySlug } from "../data/tenderServices";

const DEFAULT_PROCESS = [
  {
    title: "Free Consultation",
    desc: "Speak to our tender expert and understand the registration requirements, eligibility criteria, and documents needed.",
  },
  {
    title: "Document Collection",
    desc: "We guide you through collecting and preparing all required documents for the portal registration or tender submission.",
  },
  {
    title: "Registration / Submission",
    desc: "Our team completes the portal registration or prepares and submits the tender bid on your behalf.",
  },
  {
    title: "Follow-up & Coordination",
    desc: "We follow up with the portal authority, track your bid status, and coordinate any clarifications needed.",
  },
  {
    title: "Order Management",
    desc: "Upon successful registration or bid win, we guide you on order management, delivery compliance, and payment follow-up.",
  },
];

const DEFAULT_FAQS = [
  {
    q: "Which government portals can you register us on?",
    a: "We register businesses on GeM, IREPS, CPPP, Jharkhand e-Procurement, SAIL, NTPC, Defence portals, and many other central and state government procurement platforms.",
  },
  {
    q: "Is GeM registration mandatory for selling to the government?",
    a: "Yes, for most central government purchases, GeM is the primary procurement channel. GeM registration is strongly recommended and often mandatory for selling to government departments and PSUs.",
  },
  {
    q: "How long does GeM registration take?",
    a: "GeM registration typically takes 3–7 working days with all documents ready. We handle the complete process and keep you updated at every step.",
  },
  {
    q: "Can we participate in tenders without prior experience?",
    a: "Yes, many tenders have provisions for new businesses, MSMEs, and startups. We analyze your eligibility and identify suitable tenders where you can qualify and compete.",
  },
  {
    q: "What is the cost of your tender submission service?",
    a: "Costs depend on the complexity of the tender and scope of work. Contact us for a free consultation and transparent pricing with no hidden charges.",
  },
];

export default function TenderServiceDetailPage() {
  // @ts-ignore
  const { serviceSlug } = useParams({ strict: false });
  const service = getTenderServiceBySlug(serviceSlug ?? "");
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
          to="/services/tender-service"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Tender Services
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
            to="/services/tender-service"
            className="hover:text-blue-700 font-medium"
            data-ocid="breadcrumb.tender.link"
          >
            Tender Services
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-semibold truncate max-w-xs">
            {service.title}
          </span>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
          <div
            className="rounded-2xl p-6"
            style={{
              background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)",
              border: "2px solid #FFC107",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{service.icon}</span>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  {service.title}
                </h1>
                <p className="text-yellow-400 text-sm font-semibold mt-1">
                  YMW Compliance Services LLP
                </p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="tel:9279242122"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#f5c518", color: "#0a1628" }}
                data-ocid="service.call.button"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="https://wa.me/918102906339"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#25D366", color: "white" }}
                data-ocid="service.whatsapp.button"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>

          <div
            className="rounded-2xl p-6 bg-white"
            style={{ border: "2px solid #FFC107" }}
          >
            <h2
              className="text-lg font-extrabold mb-4"
              style={{ color: "#0a1628" }}
            >
              ✅ Key Benefits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2">
                  <CheckCircle
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "#f5c518" }}
                  />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-6 bg-white"
            style={{ border: "2px solid #FFC107" }}
          >
            <h2
              className="text-lg font-extrabold mb-4"
              style={{ color: "#0a1628" }}
            >
              📁 Documents Required
            </h2>
            <div className="space-y-2">
              {service.documents.map((doc) => (
                <div key={doc} className="flex items-start gap-2">
                  <FileText
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "#f5c518" }}
                  />
                  <span className="text-sm text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-6 bg-white"
            style={{ border: "2px solid #FFC107" }}
          >
            <h2
              className="text-lg font-extrabold mb-5"
              style={{ color: "#0a1628" }}
            >
              🔄 Our Process
            </h2>
            <div className="space-y-4">
              {process.map(
                (step: { title: string; desc: string }, i: number) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold"
                      style={{ backgroundColor: "#f5c518", color: "#0a1628" }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p
                        className="font-bold text-sm"
                        style={{ color: "#0a1628" }}
                      >
                        {step.title}
                      </p>
                      <p className="text-sm text-gray-600 mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          <div
            className="rounded-2xl p-6 bg-white"
            style={{ border: "2px solid #FFC107" }}
          >
            <h2
              className="text-lg font-extrabold mb-4"
              style={{ color: "#0a1628" }}
            >
              ❓ Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              {faqs.map((faq: { q: string; a: string }, i: number) => (
                <div
                  key={faq.q}
                  className="border rounded-xl overflow-hidden"
                  style={{ borderColor: "rgba(245,197,24,0.3)" }}
                  data-ocid={`faq.item.${i + 1}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold hover:bg-yellow-50 transition-colors"
                    style={{ color: "#0a1628" }}
                    data-ocid={`faq.toggle.${i + 1}`}
                  >
                    {faq.q}
                    {openFaq === i ? (
                      <ChevronUp
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "#f5c518" }}
                      />
                    ) : (
                      <ChevronDown
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: "#f5c518" }}
                      />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-3 text-sm text-gray-600 bg-yellow-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/services/tender-service"
              className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: "#0a1628" }}
              data-ocid="back.tender.link"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Tender Services
            </Link>
          </div>
        </div>

        <div className="space-y-5 lg:sticky lg:top-4">
          <div
            className="rounded-2xl overflow-hidden shadow-lg"
            style={{ border: "2px solid #FFC107" }}
          >
            <div
              className="px-5 py-4"
              style={{
                background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)",
              }}
            >
              <h3 className="text-white font-extrabold text-base">
                🎯 Get Free Expert Consultation
              </h3>
              <p className="text-yellow-300 text-xs mt-1">
                Our advisor will call you in 15 min.
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {["⭐ 5 Rating", "100% Free", "15 Min Callback"].map((b) => (
                  <span
                    key={b}
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{
                      backgroundColor: "rgba(245,197,24,0.2)",
                      color: "#f5c518",
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5 bg-white">
              {submitted ? (
                <div
                  className="text-center py-6"
                  data-ocid="consultation.success_state"
                >
                  <div className="text-3xl mb-2">✅</div>
                  <p className="font-bold text-green-700">Request Submitted!</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Our expert will call you within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2"
                    style={{ borderColor: "#cbd5e1", color: "#0a1628" }}
                    data-ocid="consultation.name.input"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    required
                    className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2"
                    style={{ borderColor: "#cbd5e1", color: "#0a1628" }}
                    data-ocid="consultation.phone.input"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2"
                    style={{ borderColor: "#cbd5e1", color: "#0a1628" }}
                    data-ocid="consultation.email.input"
                  />
                  <textarea
                    placeholder="Brief your requirement (optional)"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={2}
                    className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 resize-none"
                    style={{ borderColor: "#cbd5e1", color: "#0a1628" }}
                    data-ocid="consultation.message.textarea"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#f5c518", color: "#0a1628" }}
                    data-ocid="consultation.submit_button"
                  >
                    <Send className="w-4 h-4" /> Get Free Consultation
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    🔒 100% Free & Confidential
                  </p>
                </form>
              )}
            </div>
          </div>

          <div
            className="rounded-2xl p-5 bg-white"
            style={{ border: "2px solid #FFC107" }}
          >
            <h3
              className="font-extrabold text-sm mb-3"
              style={{ color: "#0a1628" }}
            >
              OR CONTACT DIRECTLY
            </h3>
            <div className="space-y-2">
              <a
                href="https://wa.me/918102906339"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#25D366", color: "white" }}
                data-ocid="contact.whatsapp.button"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Chat
              </a>
              <a
                href="tel:9279242122"
                className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#1d4ed8", color: "white" }}
                data-ocid="contact.call.button"
              >
                <Phone className="w-4 h-4" /> Call Us: 92792 42122
              </a>
              <a
                href="mailto:ymwcompliances@gmail.com"
                className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#7c3aed", color: "white" }}
                data-ocid="contact.email.button"
              >
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </div>
          </div>

          <div
            className="rounded-2xl p-5"
            style={{
              background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)",
              border: "2px solid #FFC107",
            }}
          >
            <h3 className="text-white font-extrabold text-sm mb-3">
              🏆 Why Choose Us
            </h3>
            <ul className="space-y-2">
              {[
                "15,000+ businesses served",
                "12+ years of expertise",
                "100+ services portfolio",
                "Pan India coverage",
                "Mon–Sat 10 AM – 6 PM support",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs text-gray-300"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0"
                    style={{ color: "#f5c518" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
