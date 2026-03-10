import {
  CheckCircle,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Star,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import FreeConsultationSection from "../components/FreeConsultationSection";
import { useSubmitContactMessage } from "../hooks/useQueries";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const submitMutation = useSubmitContactMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const id = await submitMutation.mutateAsync(formData);
      setReferenceId(id);
      setSubmitted(true);
    } catch {
      // error handled by mutation state
    }
  };

  return (
    <div style={{ backgroundColor: "#0a1628" }}>
      {/* Page Hero */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              backgroundColor: "rgba(245,197,24,0.15)",
              color: "#f5c518",
            }}
          >
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get In <span style={{ color: "#f5c518" }}>Touch</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions? Our compliance experts are ready to help you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0d1f3c" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Contact Information
              </h2>
              <p className="text-gray-400">
                Reach us through any of the following channels
              </p>
            </div>

            {[
              {
                icon: <Phone className="w-5 h-5" />,
                label: "Phone",
                value: "+91 9279242122",
                href: "tel:9279242122",
              },
              {
                icon: <Mail className="w-5 h-5" />,
                label: "Email",
                value: "ymwcompliance@gmail.com",
                href: "mailto:ymwcompliance@gmail.com",
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                label: "Address",
                value: "Dhanbad, Jharkhand, India",
                href: null,
              },
              {
                icon: <Clock className="w-5 h-5" />,
                label: "Hours",
                value: "Mon–Sat: 9 AM – 6 PM",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(245,197,24,0.15)",
                    color: "#f5c518",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white font-medium hover:opacity-80 transition-opacity"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form Card */}
          <div
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{
              backgroundColor: "#0d1f3c",
              border: "1px solid rgba(245,197,24,0.3)",
            }}
          >
            {/* Card Header */}
            <div className="px-6 py-5" style={{ backgroundColor: "#0a1628" }}>
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare
                  className="w-6 h-6"
                  style={{ color: "#f5c518" }}
                />
                <h2 className="text-xl font-extrabold text-white">
                  Send Us a Message
                </h2>
              </div>
              <p className="text-sm ml-9" style={{ color: "#f5c518" }}>
                Our team will respond within 24 hours.
              </p>
              <div className="flex flex-wrap gap-2 mt-3 ml-9">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: "rgba(245,197,24,0.15)",
                    color: "#f5c518",
                  }}
                >
                  ⚡ Quick Response
                </span>
                <span
                  className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: "rgba(245,197,24,0.15)",
                    color: "#f5c518",
                  }}
                >
                  <Star className="w-3 h-3 fill-current" /> Expert Support
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: "rgba(245,197,24,0.15)",
                    color: "#f5c518",
                  }}
                >
                  ✅ 100% Free
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="px-6 md:px-8 py-6">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <CheckCircle
                    className="w-16 h-16"
                    style={{ color: "#f5c518" }}
                  />
                  <h3 className="text-2xl font-bold text-white">
                    Message Sent!
                  </h3>
                  <p className="text-gray-300">
                    We'll get back to you within 24 hours.
                  </p>
                  {referenceId && (
                    <div
                      className="px-4 py-2 rounded-lg text-sm"
                      style={{
                        backgroundColor: "rgba(245,197,24,0.1)",
                        color: "#f5c518",
                      }}
                    >
                      Reference ID: {referenceId.slice(-8)}
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-gray-300 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-400 outline-none min-h-[44px]"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-gray-300 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-400 outline-none min-h-[44px]"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-semibold text-gray-300 mb-1"
                    >
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-400 outline-none min-h-[44px]"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-gray-300 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Describe your requirement..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-400 outline-none resize-none"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
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
                    className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 min-h-[52px]"
                    style={{ backgroundColor: "#f5c518", color: "#0a1628" }}
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-500">
                    🔒 Secure &amp; Confidential
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FreeConsultationSection />
    </div>
  );
}
