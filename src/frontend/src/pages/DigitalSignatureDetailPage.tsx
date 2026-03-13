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
import { getDSCServiceBySlug } from "../data/digitalSignatureServices";

const DEFAULT_PROCESS = [
  {
    title: "Free Consultation",
    desc: "Speak to our expert to understand which DSC type you need and the verification process.",
  },
  {
    title: "Document Submission",
    desc: "Submit your PAN, Aadhaar, and other required documents digitally through our secure process.",
  },
  {
    title: "Identity Verification",
    desc: "We complete the identity verification process required by the certifying authority.",
  },
  {
    title: "DSC Issuance",
    desc: "Your DSC is issued and configured on a USB token within 1-2 working days.",
  },
  {
    title: "Delivery & Support",
    desc: "The DSC token is delivered to you along with installation support and usage guidance.",
  },
];

const DEFAULT_FAQS = [
  {
    q: "What is a Digital Signature Certificate?",
    a: "A DSC is an electronic equivalent of a physical signature. It is used to sign documents, authenticate identity, and file returns on government portals securely.",
  },
  {
    q: "How long does it take to get a DSC?",
    a: "A DSC can typically be issued within 1-2 working days after successful document verification and identity confirmation.",
  },
  {
    q: "How long is a DSC valid?",
    a: "DSCs are issued with a validity of 1 year or 2 years. After expiry, they need to be renewed to continue using them.",
  },
  {
    q: "What is the difference between Class 2 and Class 3 DSC?",
    a: "Class 2 DSC is no longer issued by certifying authorities. Class 3 DSC is the current standard and is required for all e-tendering, MCA filings, GST, and income tax purposes.",
  },
  {
    q: "Can I use one DSC for multiple purposes?",
    a: "Yes, a Class 3 DSC can be used across multiple government portals including MCA, GSTN, Income Tax, GeM, and e-tendering portals.",
  },
];

export default function DigitalSignatureDetailPage() {
  // @ts-ignore
  const { serviceSlug } = useParams({ strict: false });
  const service = getDSCServiceBySlug(serviceSlug ?? "");
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
          to="/services/digital-signature"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Digital Signature Certificate
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
    <div style={{ backgroundColor: "#dbeafe" }}>
      <section
        className="py-12 px-4"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Link
              to="/services/digital-signature"
              className="flex items-center gap-1 text-sm font-medium hover:opacity-80"
              style={{ color: "#f5c518" }}
              data-ocid="breadcrumb.back.link"
            >
              <ArrowLeft className="w-4 h-4" /> Digital Signature Certificate
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-sm text-gray-300">{service.title}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{service.icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                {service.title}
              </h1>
              <p className="text-gray-300 mt-2 max-w-2xl">
                {service.description.slice(0, 120)}...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: "1.5px solid #FFC107" }}
            >
              <h2
                className="text-xl font-extrabold mb-3"
                style={{ color: "#0a1628" }}
              >
                What is {service.title}?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: "1.5px solid #FFC107" }}
            >
              <h2
                className="text-xl font-extrabold mb-4"
                style={{ color: "#0a1628" }}
              >
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits.map((b) => (
                  <div key={b.slice(0, 20)} className="flex items-start gap-2">
                    <CheckCircle
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "#FFC107" }}
                    />
                    <span className="text-gray-700 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: "1.5px solid #FFC107" }}
            >
              <h2
                className="text-xl font-extrabold mb-4"
                style={{ color: "#0a1628" }}
              >
                Documents Required
              </h2>
              <div className="space-y-2">
                {service.documents.map((doc) => (
                  <div
                    key={doc.slice(0, 20)}
                    className="flex items-start gap-2"
                  >
                    <FileText
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "#0a1628" }}
                    />
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: "1.5px solid #FFC107" }}
            >
              <h2
                className="text-xl font-extrabold mb-6"
                style={{ color: "#0a1628" }}
              >
                Our Process
              </h2>
              <div className="space-y-4">
                {process.map(
                  (step: { title: string; desc: string }, stepIdx: number) => (
                    <div key={step.title} className="flex gap-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                        style={{ backgroundColor: "#FFC107", color: "#0a1628" }}
                      >
                        {stepIdx + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {step.title}
                        </p>
                        <p className="text-gray-600 text-sm mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: "1.5px solid #FFC107" }}
            >
              <h2
                className="text-xl font-extrabold mb-4"
                style={{ color: "#0a1628" }}
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-2">
                {faqs.map((faq: { q: string; a: string }, i: number) => (
                  <div
                    key={faq.q.slice(0, 20)}
                    className="border rounded-xl overflow-hidden"
                    style={{ borderColor: "#e5e7eb" }}
                    data-ocid={`faq.item.${i + 1}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold text-gray-800 hover:bg-yellow-50"
                      data-ocid={`faq.toggle.${i + 1}`}
                    >
                      {faq.q}
                      {openFaq === i ? (
                        <ChevronUp className="w-4 h-4 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 flex-shrink-0" />
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
          </div>

          <div className="space-y-6">
            <div
              className="rounded-2xl overflow-hidden shadow-md sticky top-4"
              style={{ border: "1.5px solid #FFC107" }}
            >
              <div className="px-5 py-4" style={{ backgroundColor: "#0a1628" }}>
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5" style={{ color: "#FFC107" }} />
                  <p className="text-white font-bold text-base">
                    Get Free Consultation
                  </p>
                </div>
                <p className="text-gray-400 text-xs mt-1">
                  Our advisor will call you in 15 min.
                </p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {["5 ★ Rating", "100% Free", "15 Min Callback"].map((b) => (
                    <span
                      key={b}
                      className="px-2 py-0.5 rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: "rgba(245,197,24,0.15)",
                        color: "#f5c518",
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white p-5">
                {submitted ? (
                  <div className="text-center py-4">
                    <CheckCircle
                      className="w-10 h-10 mx-auto mb-2"
                      style={{ color: "#22c55e" }}
                    />
                    <p className="font-bold text-gray-800">
                      We'll call you shortly!
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Our advisor will reach you in 15 minutes.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-3"
                    data-ocid="consultation.form"
                  >
                    <div>
                      <label
                        htmlFor="cons-name"
                        className="text-xs font-semibold text-gray-700 block mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        id="cons-name"
                        type="text"
                        required
                        className="w-full border rounded-lg px-3 py-2 text-sm"
                        style={{ borderColor: "#d1d5db" }}
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        data-ocid="consultation.name.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cons-phone"
                        className="text-xs font-semibold text-gray-700 block mb-1"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="cons-phone"
                        type="tel"
                        required
                        className="w-full border rounded-lg px-3 py-2 text-sm"
                        style={{ borderColor: "#d1d5db" }}
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        data-ocid="consultation.phone.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cons-email"
                        className="text-xs font-semibold text-gray-700 block mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        id="cons-email"
                        type="email"
                        className="w-full border rounded-lg px-3 py-2 text-sm"
                        style={{ borderColor: "#d1d5db" }}
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        data-ocid="consultation.email.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cons-msg"
                        className="text-xs font-semibold text-gray-700 block mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="cons-msg"
                        className="w-full border rounded-lg px-3 py-2 text-sm"
                        style={{ borderColor: "#d1d5db" }}
                        rows={3}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        data-ocid="consultation.message.textarea"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "#FFC107", color: "#0a1628" }}
                      data-ocid="consultation.submit.button"
                    >
                      Get Free Consultation
                    </button>
                    <p className="text-center text-xs text-gray-500">
                      🔒 100% Free & Confidential
                    </p>
                  </form>
                )}
              </div>
            </div>

            <div
              className="bg-white rounded-2xl p-5 shadow-sm"
              style={{ border: "1.5px solid #FFC107" }}
            >
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                Or Contact Directly
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
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
                <a
                  href="tel:9279242122"
                  className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#1d4ed8" }}
                  data-ocid="contact.call.button"
                >
                  <Phone className="w-4 h-4" /> Call Us: +91 9279242122
                </a>
                <a
                  href="mailto:ymwcompliances@gmail.com"
                  className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#7c3aed" }}
                  data-ocid="contact.email.button"
                >
                  <Mail className="w-4 h-4" /> Email Us
                </a>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl p-5 shadow-sm"
              style={{ border: "1.5px solid #FFC107" }}
            >
              <p
                className="text-sm font-extrabold mb-3"
                style={{ color: "#0a1628" }}
              >
                Why Choose YMW?
              </p>
              <div className="space-y-2">
                {[
                  "15,000+ businesses served",
                  "12+ years of expertise",
                  "100+ services portfolio",
                  "Pan India coverage",
                  "Mon-Sat 10 AM - 6 PM support",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "#FFC107" }}
                    />
                    <span className="text-xs text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
