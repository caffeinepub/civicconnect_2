import {
  AlertTriangle,
  CheckCircle,
  FileText,
  Loader2,
  Phone,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { GrievanceCategory } from "../backend";
import FreeConsultationSection from "../components/FreeConsultationSection";
import { useSubmitGrievance } from "../hooks/useQueries";

const CATEGORIES = [
  { value: GrievanceCategory.cleanliness, label: "Cleanliness" },
  { value: GrievanceCategory.noise, label: "Noise" },
  { value: GrievanceCategory.safety, label: "Safety" },
  { value: GrievanceCategory.maintenance, label: "Maintenance" },
  { value: GrievanceCategory.other, label: "Other" },
];

export default function Grievance() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "" as GrievanceCategory | "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");

  const submitMutation = useSubmitGrievance();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.category) return;
    try {
      const refNum = await submitMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        category: formData.category as GrievanceCategory,
        description: formData.description,
      });
      setReferenceNumber(refNum);
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
            Grievance Portal
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Submit a <span style={{ color: "#f5c518" }}>Grievance</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We take all complaints seriously. Submit your grievance and we'll
            address it promptly.
          </p>
        </div>
      </section>

      {/* Grievance Content */}
      <section className="py-16 px-4" style={{ backgroundColor: "#0d1f3c" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info Panel */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                How It Works
              </h2>
              <p className="text-gray-400">
                Our grievance resolution process is simple and transparent
              </p>
            </div>

            {[
              {
                step: "01",
                icon: <FileText className="w-5 h-5" />,
                title: "Submit Grievance",
                desc: "Fill out the form with your complaint details",
              },
              {
                step: "02",
                icon: <AlertTriangle className="w-5 h-5" />,
                title: "Review Process",
                desc: "Our team reviews your grievance within 24 hours",
              },
              {
                step: "03",
                icon: <Phone className="w-5 h-5" />,
                title: "Resolution",
                desc: "We contact you with a resolution within 3 business days",
              },
              {
                step: "04",
                icon: <CheckCircle className="w-5 h-5" />,
                title: "Confirmation",
                desc: "You receive confirmation once the issue is resolved",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold"
                  style={{
                    backgroundColor: "rgba(245,197,24,0.15)",
                    color: "#f5c518",
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Grievance Form */}
          <div
            className="p-6 md:p-8 rounded-2xl"
            style={{
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle
                  className="w-16 h-16"
                  style={{ color: "#f5c518" }}
                />
                <h3 className="text-2xl font-bold text-white">
                  Grievance Submitted!
                </h3>
                <p className="text-gray-300">
                  We'll address your concern within 3 business days.
                </p>
                {referenceNumber && (
                  <div
                    className="px-4 py-2 rounded-lg text-sm"
                    style={{
                      backgroundColor: "rgba(245,197,24,0.1)",
                      color: "#f5c518",
                    }}
                  >
                    Reference Number: {referenceNumber.slice(-8)}
                  </div>
                )}
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-white mb-6">
                  Submit Your Grievance
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="grievance-name"
                      className="block text-xs font-semibold text-gray-300 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="grievance-name"
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
                      htmlFor="grievance-email"
                      className="block text-xs font-semibold text-gray-300 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      id="grievance-email"
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
                      htmlFor="grievance-category"
                      className="block text-xs font-semibold text-gray-300 mb-1"
                    >
                      Category *
                    </label>
                    <select
                      id="grievance-category"
                      required
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          category: e.target.value as GrievanceCategory,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none min-h-[44px]"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <option value="" style={{ backgroundColor: "#0d1f3c" }}>
                        Select category...
                      </option>
                      {CATEGORIES.map((cat) => (
                        <option
                          key={cat.value}
                          value={cat.value}
                          style={{ backgroundColor: "#0d1f3c" }}
                        >
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="grievance-description"
                      className="block text-xs font-semibold text-gray-300 mb-1"
                    >
                      Description *
                    </label>
                    <textarea
                      id="grievance-description"
                      required
                      rows={4}
                      placeholder="Describe your grievance in detail..."
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
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
                        Submitting...
                      </>
                    ) : (
                      "Submit Grievance"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Free Consultation Section */}
      <FreeConsultationSection />
    </div>
  );
}
