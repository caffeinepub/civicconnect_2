import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Building2,
  CheckCircle,
  Globe,
  Headphones,
  Leaf,
  Loader2,
  Mail,
  MessageCircle,
  Package,
  Phone,
  Recycle,
  Shield,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

const NAVY = "#0f172a";
const GOLD = "#FFC107";
const GOLD_DARK = "#e6ac00";

const benefits = [
  {
    icon: TrendingUp,
    title: "High Commission (10\u201330%)",
    desc: "Earn up to 30% on every successful referral \u2014 one of the highest in the industry.",
  },
  {
    icon: Shield,
    title: "No Investment Required",
    desc: "Zero cost to join \u2014 simply refer clients and start earning immediately.",
  },
  {
    icon: Wallet,
    title: "Monthly Payouts",
    desc: "Get your earnings credited directly to your account every month, on time.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support Team",
    desc: "Our expert team is always ready to assist you and your referred clients.",
  },
];

const services = [
  {
    icon: Leaf,
    title: "Pollution Control Board Licenses",
    desc: "CTE, CTO, and NOC certificates for industries and businesses.",
  },
  {
    icon: Globe,
    title: "Environmental Clearances",
    desc: "EIA approvals and MoEF clearances for projects across India.",
  },
  {
    icon: Package,
    title: "Import Export Compliance",
    desc: "IEC registration, DGFT compliance, and customs documentation.",
  },
  {
    icon: AlertTriangle,
    title: "Hazardous Waste Authorizations",
    desc: "Complete authorization for storage, transport, and disposal of hazardous waste.",
  },
  {
    icon: Recycle,
    title: "EPR Registration",
    desc: "Extended Producer Responsibility for plastic, e-waste, and battery waste.",
  },
  {
    icon: Building2,
    title: "Business Compliance Services",
    desc: "MCA, GST, labour, and all statutory compliance for Indian businesses.",
  },
];

const steps = [
  {
    num: 1,
    title: "Register as an Affiliate",
    desc: "Fill in the signup form below. Our team will review and approve your application.",
  },
  {
    num: 2,
    title: "Share Our Services",
    desc: "Promote our compliance services to your network using your unique referral link.",
  },
  {
    num: 3,
    title: "Client Contacts Us",
    desc: "Your referred client reaches out to us through your referral link or code.",
  },
  {
    num: 4,
    title: "We Complete the Service",
    desc: "Our team delivers the compliance service professionally and efficiently.",
  },
  {
    num: 5,
    title: "You Earn Commission",
    desc: "Receive your commission payout directly to your bank account each month.",
  },
];

const inputClass =
  "w-full px-4 py-3 rounded-lg text-sm outline-none border border-slate-200 bg-slate-50 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all";

export default function Affiliate() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    businessType: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    try {
      if (actor) {
        await (actor as any).submitAffiliateApplication(
          form.name,
          form.email,
          form.phone,
          form.city,
          form.businessType,
        );
      }
      setSubmitted(true);
    } catch (_err) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* HERO */}
      <section
        data-ocid="affiliate.hero.section"
        style={{ backgroundColor: NAVY }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-6"
            style={{
              backgroundColor: `${GOLD}22`,
              color: GOLD,
              border: `1px solid ${GOLD}44`,
            }}
          >
            Affiliate Program
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Earn Commission by Referring
            <span style={{ color: GOLD }}> Compliance Clients</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join the YMW Compliance Affiliate Program and earn{" "}
            <strong style={{ color: GOLD }}>10%&#x2013;30% commission</strong>{" "}
            for every successful client referral.
          </p>
          <a
            href="#affiliate-form"
            data-ocid="affiliate.hero.primary_button"
            className="inline-block font-bold text-base rounded-full px-10 py-4 transition-all hover:scale-105 shadow-lg"
            style={{
              backgroundColor: GOLD,
              color: NAVY,
              textDecoration: "none",
              boxShadow: `0 4px 24px ${GOLD}55`,
            }}
          >
            Become an Affiliate &#x2192;
          </a>
          {/* Dashboard link */}
          <div className="mt-4">
            <Link
              to="/affiliate-dashboard"
              data-ocid="affiliate.hero.link"
              className="text-sm transition-colors hover:underline"
              style={{ color: `${GOLD}cc` }}
            >
              Already a partner? Login to your dashboard &#x2192;
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {(
              [
                ["15,000+", "Happy Clients"],
                ["100+", "Services Available"],
                ["12+", "Years Experience"],
                ["Pan India", "Coverage"],
              ] as [string, string][]
            ).map(([stat, label]) => (
              <div key={label} className="text-center">
                <div
                  className="text-2xl font-extrabold"
                  style={{ color: GOLD }}
                >
                  {stat}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section
        data-ocid="affiliate.benefits.section"
        className="py-16 px-4"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-3"
              style={{
                color: NAVY,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Why Join Our Affiliate Program
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Simple to join, rewarding to grow &#x2014; designed for
              consultants, professionals, and entrepreneurs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-6 text-center transition-transform hover:-translate-y-1"
                style={{
                  border: `2px solid ${NAVY}18`,
                  backgroundColor: "#f8fafc",
                  boxShadow: "0 2px 16px rgba(15,23,42,0.06)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${GOLD}22` }}
                >
                  <b.icon size={26} style={{ color: GOLD_DARK }} />
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: NAVY }}
                >
                  {b.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        data-ocid="affiliate.services.section"
        className="py-16 px-4"
        style={{ backgroundColor: "#f1f5f9" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-3"
              style={{
                color: NAVY,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Services You Can Promote
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Refer clients for these high-demand compliance and licensing
              services across India.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl p-6 transition-transform hover:-translate-y-1"
                style={{
                  backgroundColor: NAVY,
                  border: `2px solid ${GOLD}`,
                  boxShadow: "0 4px 24px rgba(15,23,42,0.18)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${GOLD}22` }}
                >
                  <s.icon size={22} style={{ color: GOLD }} />
                </div>
                <h3 className="font-bold text-white text-base mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        data-ocid="affiliate.steps.section"
        className="py-16 px-4"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-3"
              style={{
                color: NAVY,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              How It Works
            </h2>
            <p className="text-gray-500">
              Five simple steps to start earning with YMW Compliance.
            </p>
          </div>
          {/* Desktop horizontal stepper */}
          <div className="hidden md:flex items-start gap-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex-1 flex flex-col items-center text-center px-3 relative"
              >
                {i < steps.length - 1 && (
                  <div
                    className="absolute top-6 left-1/2 w-full h-0.5"
                    style={{ backgroundColor: `${GOLD}44`, zIndex: 0 }}
                  />
                )}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-lg mb-4 relative z-10"
                  style={{ backgroundColor: GOLD, color: NAVY }}
                >
                  {step.num}
                </div>
                <h4 className="font-bold text-sm mb-2" style={{ color: NAVY }}>
                  {step.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          {/* Mobile vertical stepper */}
          <div className="flex flex-col gap-6 md:hidden">
            {steps.map((step) => (
              <div key={step.num} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-base shrink-0"
                  style={{ backgroundColor: GOLD, color: NAVY }}
                >
                  {step.num}
                </div>
                <div>
                  <h4
                    className="font-bold text-sm mb-1"
                    style={{ color: NAVY }}
                  >
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMISSION EXAMPLE */}
      <section
        data-ocid="affiliate.commission.section"
        className="py-16 px-4"
        style={{ backgroundColor: NAVY }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-2"
            style={{
              color: GOLD,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            Commission Example
          </h2>
          <p className="text-gray-400 mb-10">
            See how much you can earn on a single referral.
          </p>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: `2px solid ${GOLD}44`,
              backgroundColor: "#1e293b",
            }}
          >
            {(
              [
                {
                  label: "Service Value",
                  value: "\u20b930,000",
                  highlight: false,
                },
                { label: "Commission Rate", value: "20%", highlight: false },
                {
                  label: "Your Affiliate Commission",
                  value: "\u20b96,000",
                  highlight: true,
                },
              ] as { label: string; value: string; highlight: boolean }[]
            ).map((row) => (
              <div
                key={row.label}
                className="flex justify-between items-center px-8 py-5"
                style={{
                  backgroundColor: row.highlight ? `${GOLD}22` : "transparent",
                  borderTop: `1px solid ${GOLD}22`,
                }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: row.highlight ? GOLD : "#94a3b8" }}
                >
                  {row.label}
                </span>
                <span
                  className="font-extrabold text-lg"
                  style={{ color: row.highlight ? GOLD : "#ffffff" }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Commission rates range from{" "}
            <strong style={{ color: GOLD }}>10% to 30%</strong> based on service
            type.
          </p>
        </div>
      </section>

      {/* SIGNUP FORM */}
      <section
        id="affiliate-form"
        data-ocid="affiliate.form.section"
        className="py-16 px-4"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: `2px solid ${GOLD}` }}
          >
            {/* Card header */}
            <div className="px-8 py-6" style={{ backgroundColor: NAVY }}>
              <div className="flex flex-wrap gap-2 mb-3">
                {["Free to Join", "Earn 10\u201330%", "Quick Response"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: `${GOLD}33`,
                        color: GOLD,
                        border: `1px solid ${GOLD}55`,
                      }}
                    >
                      {badge}
                    </span>
                  ),
                )}
              </div>
              <h2
                className="text-xl sm:text-2xl font-extrabold text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Apply for Affiliate Partnership
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Fill in the form below and our team will contact you within 24
                hours.
              </p>
            </div>

            {/* Form body */}
            <div className="px-8 py-8 bg-white">
              {submitted ? (
                <div
                  data-ocid="affiliate.form.success_state"
                  className="flex flex-col items-center py-10 text-center"
                >
                  <CheckCircle
                    size={56}
                    className="mb-4"
                    style={{ color: "#16a34a" }}
                  />
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: NAVY }}
                  >
                    Application Submitted!
                  </h3>
                  <p className="text-gray-500">
                    Thank you! We'll contact you within 24 hours.
                  </p>
                  <Link
                    to="/affiliate-dashboard"
                    data-ocid="affiliate.form.link"
                    className="mt-6 text-sm font-semibold hover:underline"
                    style={{ color: NAVY }}
                  >
                    Go to Partner Dashboard &#x2192;
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        htmlFor="aff-name"
                        className="block text-xs font-semibold mb-1"
                        style={{ color: NAVY }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="aff-name"
                        type="text"
                        required
                        placeholder="Your Full Name"
                        data-ocid="affiliate.form.input"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={inputClass}
                        style={{ color: NAVY }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="aff-email"
                        className="block text-xs font-semibold mb-1"
                        style={{ color: NAVY }}
                      >
                        Email Address *
                      </label>
                      <input
                        id="aff-email"
                        type="email"
                        required
                        placeholder="Email Address"
                        data-ocid="affiliate.form.input"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={inputClass}
                        style={{ color: NAVY }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="aff-phone"
                        className="block text-xs font-semibold mb-1"
                        style={{ color: NAVY }}
                      >
                        Phone Number *
                      </label>
                      <input
                        id="aff-phone"
                        type="tel"
                        required
                        placeholder="Phone Number"
                        data-ocid="affiliate.form.input"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className={inputClass}
                        style={{ color: NAVY }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="aff-city"
                        className="block text-xs font-semibold mb-1"
                        style={{ color: NAVY }}
                      >
                        City *
                      </label>
                      <input
                        id="aff-city"
                        type="text"
                        required
                        placeholder="City"
                        data-ocid="affiliate.form.input"
                        value={form.city}
                        onChange={(e) =>
                          setForm({ ...form, city: e.target.value })
                        }
                        className={inputClass}
                        style={{ color: NAVY }}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="aff-business"
                        className="block text-xs font-semibold mb-1"
                        style={{ color: NAVY }}
                      >
                        Business Type *
                      </label>
                      <select
                        id="aff-business"
                        required
                        data-ocid="affiliate.form.select"
                        value={form.businessType}
                        onChange={(e) =>
                          setForm({ ...form, businessType: e.target.value })
                        }
                        className={inputClass}
                        style={{ color: form.businessType ? NAVY : "#94a3b8" }}
                      >
                        <option value="" disabled>
                          Select Business Type
                        </option>
                        <option value="consultant">Consultant</option>
                        <option value="marketing">
                          Marketing Professional
                        </option>
                        <option value="ca-cs-lawyer">CA / CS / Lawyer</option>
                        <option value="freelancer">Freelancer</option>
                        <option value="business-owner">Business Owner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  {submitError && (
                    <p
                      data-ocid="affiliate.form.error_state"
                      className="text-sm text-red-500 text-center py-2"
                    >
                      {submitError}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    data-ocid="affiliate.form.submit_button"
                    className="w-full py-4 rounded-lg font-bold text-base transition-all hover:opacity-90 hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: GOLD,
                      color: NAVY,
                      boxShadow: `0 4px 20px ${GOLD}55`,
                    }}
                  >
                    {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                    {submitting
                      ? "Submitting..."
                      : "Apply for Affiliate Partnership"}
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3">
                    Your information is 100% secure and confidential
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        data-ocid="affiliate.contact.section"
        className="py-16 px-4"
        style={{ backgroundColor: "#dbeafe" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-3"
              style={{
                color: NAVY,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Have Questions? Get in Touch
            </h2>
            <p className="text-gray-500">
              Our team is happy to answer any questions about the affiliate
              program.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="tel:+919279242122"
              data-ocid="affiliate.contact.button"
              className="flex flex-col items-center text-center rounded-2xl p-8 transition-transform hover:-translate-y-1"
              style={{
                backgroundColor: "#ffffff",
                border: `2px solid ${GOLD}44`,
                boxShadow: "0 2px 16px rgba(15,23,42,0.06)",
                textDecoration: "none",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${GOLD}22` }}
              >
                <Phone size={24} style={{ color: GOLD }} />
              </div>
              <h4 className="font-bold text-base mb-2" style={{ color: NAVY }}>
                Call Us
              </h4>
              <p className="text-sm text-gray-500">+91 92792 42122</p>
              <p className="text-sm text-gray-500">+91 9241136368</p>
            </a>

            <a
              href="mailto:ymwcompliances@gmail.com"
              data-ocid="affiliate.contact.button"
              className="flex flex-col items-center text-center rounded-2xl p-8 transition-transform hover:-translate-y-1"
              style={{
                backgroundColor: "#ffffff",
                border: `2px solid ${GOLD}44`,
                boxShadow: "0 2px 16px rgba(15,23,42,0.06)",
                textDecoration: "none",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${GOLD}22` }}
              >
                <Mail size={24} style={{ color: GOLD }} />
              </div>
              <h4 className="font-bold text-base mb-2" style={{ color: NAVY }}>
                Email Us
              </h4>
              <p className="text-sm text-gray-500">ymwcompliances@gmail.com</p>
            </a>

            <a
              href="https://wa.me/918102906339"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="affiliate.contact.button"
              className="flex flex-col items-center text-center rounded-2xl p-8 transition-transform hover:-translate-y-1"
              style={{
                backgroundColor: "#ffffff",
                border: "2px solid #22c55e44",
                boxShadow: "0 2px 16px rgba(15,23,42,0.06)",
                textDecoration: "none",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#22c55e22" }}
              >
                <MessageCircle size={24} style={{ color: "#16a34a" }} />
              </div>
              <h4 className="font-bold text-base mb-2" style={{ color: NAVY }}>
                WhatsApp
              </h4>
              <p className="text-sm text-gray-500">+91 8102906339</p>
              <p className="text-sm text-gray-500">+91 8102901690</p>
            </a>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-block text-sm font-semibold transition-colors"
              style={{ color: NAVY }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
