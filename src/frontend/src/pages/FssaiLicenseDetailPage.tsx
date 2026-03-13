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
import { getFssaiServiceBySlug } from "../data/fssaiServices";

export default function FssaiLicenseDetailPage() {
  // @ts-ignore
  const { serviceSlug } = useParams({ strict: false });
  const service = getFssaiServiceBySlug(serviceSlug ?? "");
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
          to="/services/fssai-license"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to FSSAI License
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "#dbeafe" }} className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <Link to="/services" className="hover:text-blue-700 font-medium">
            Services
          </Link>
          <span>/</span>
          <Link
            to="/services/fssai-license"
            className="hover:text-blue-700 font-medium"
          >
            FSSAI License
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-semibold truncate max-w-xs">
            {service.title}
          </span>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-3 pb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
          {service.title}
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20 flex flex-col lg:flex-row gap-6 items-start">
        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-5 min-w-0">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              What is {service.title}?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={benefit}
                  className="flex items-start gap-2"
                  data-ocid={`benefits.item.${idx + 1}`}
                >
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-500" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Documents Required
            </h2>
            <ul className="space-y-3">
              {service.documents.map((doc, idx) => (
                <li
                  key={doc}
                  className="flex items-start gap-3 text-sm text-gray-700"
                  data-ocid={`documents.item.${idx + 1}`}
                >
                  <FileText className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {service.process && (
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-5">
                Our Process
              </h2>
              <div className="flex flex-col gap-5">
                {service.process.map((step, idx) => (
                  <div
                    key={step.title}
                    className="flex items-start gap-4"
                    data-ocid={`process.item.${idx + 1}`}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-extrabold text-white"
                      style={{ backgroundColor: "#0a1628" }}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        {step.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.faqs && (
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col divide-y divide-gray-100">
                {service.faqs.map((faq, idx) => (
                  <div key={faq.q}>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between py-4 text-left gap-3"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    >
                      <span className="text-sm font-semibold text-gray-800">
                        {faq.q}
                      </span>
                      {openFaq === idx ? (
                        <ChevronUp className="w-4 h-4 flex-shrink-0 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 flex-shrink-0 text-gray-400" />
                      )}
                    </button>
                    {openFaq === idx && (
                      <p className="text-sm text-gray-600 pb-4 leading-relaxed">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <Link
            to="/services/fssai-license"
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to FSSAI License
          </Link>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-5 lg:sticky lg:top-24">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="px-5 py-4" style={{ backgroundColor: "#0a1628" }}>
              <h3 className="text-white font-bold text-base">
                Get Free Consultation
              </h3>
              <p className="text-gray-300 text-xs mt-0.5">
                For {service.title}
              </p>
            </div>
            <div className="bg-white p-5">
              {submitted ? (
                <div className="text-center py-6">
                  <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-gray-800">
                    Thank you!
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Our advisor will call you within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div>
                    <label
                      htmlFor="fd-name"
                      className="text-xs font-semibold text-gray-700 mb-1 block"
                    >
                      Full Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
                      id="fd-name"
                      data-ocid="sidebar.name.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fd-phone"
                      className="text-xs font-semibold text-gray-700 mb-1 block"
                    >
                      Phone Number *
                    </label>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
                      id="fd-phone"
                      data-ocid="sidebar.phone.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fd-email"
                      className="text-xs font-semibold text-gray-700 mb-1 block"
                    >
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
                      id="fd-email"
                      data-ocid="sidebar.email.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fd-message"
                      className="text-xs font-semibold text-gray-700 mb-1 block"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell us about your requirement..."
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 resize-none"
                      id="fd-message"
                      data-ocid="sidebar.message.textarea"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#f5c518", color: "#0a1628" }}
                    data-ocid="sidebar.submit.button"
                  >
                    <Send className="w-4 h-4" /> Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Or Contact Directly
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/918102906339"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#e8f9ee", color: "#128c7e" }}
                data-ocid="sidebar.whatsapp.button"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">WhatsApp</p>
                  <p className="text-xs opacity-80">+91 8102906339</p>
                </div>
              </a>
              <a
                href="tel:9279242122"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#e8f0fe", color: "#1a3c78" }}
                data-ocid="sidebar.call.button"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">Call Us</p>
                  <p className="text-xs opacity-80">9279242122 / 9241136368</p>
                </div>
              </a>
              <a
                href="mailto:ymwcompliances@gmail.com"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#f3e8ff", color: "#6b21a8" }}
                data-ocid="sidebar.email.button"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm">Email</p>
                  <p className="text-xs opacity-80">ymwcompliances@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Why Choose Us
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "15,000+ businesses served",
                "12+ years of expertise",
                "100+ services portfolio",
                "Pan India coverage",
                "Mon–Sat 10 AM – 6 PM support",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0 text-green-500" />
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
