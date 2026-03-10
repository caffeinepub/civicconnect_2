import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  CheckCircle,
  Clock,
  Eye,
  Globe,
  MapPin,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";
import FreeConsultationSection from "../components/FreeConsultationSection";

const STATS = [
  {
    value: "15,000+",
    label: "Happy Clients",
    icon: <Users className="w-7 h-7" />,
  },
  {
    value: "100+",
    label: "Professional Services",
    icon: <Award className="w-7 h-7" />,
  },
  {
    value: "12+",
    label: "Years Experience",
    icon: <Clock className="w-7 h-7" />,
  },
  {
    value: "Pan India",
    label: "Service Coverage",
    icon: <MapPin className="w-7 h-7" />,
  },
];

const HIGHLIGHTS = [
  {
    icon: <Building2 className="w-5 h-5" />,
    text: "Business Registrations & Licensing",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    text: "Ongoing Regulatory Compliance",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    text: "Serving Startups, MSMEs & Enterprises",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    text: "Scalable Solutions for Every Stage",
  },
  { icon: <Globe className="w-5 h-5" />, text: "Pan-India Service Coverage" },
  { icon: <Award className="w-5 h-5" />, text: "Subsidiary of the YMW Group" },
];

export default function About() {
  const scrollToConsultation = () => {
    document
      .getElementById("free-consultation")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ backgroundColor: "#0a1628" }}>
      {/* ─── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 px-4 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #0d1f3c 60%, #0a1628 100%)",
        }}
      >
        {/* Decorative background rings */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,197,24,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{
              backgroundColor: "rgba(245,197,24,0.15)",
              color: "#f5c518",
            }}
          >
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
            Start Your Business{" "}
            <span style={{ color: "#f5c518" }}>With Experts</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Simplifying regulatory, legal, and licensing requirements for
            businesses across India — with precision, transparency, and trust.
          </p>
          <button
            type="button"
            onClick={scrollToConsultation}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]"
            style={{ backgroundColor: "#f5c518", color: "#0a1628" }}
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ─── SECTION 1: ABOUT YMW COMPLIANCE SERVICES LLP ─────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0a1628" }}>
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <div className="text-center mb-14">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{
                backgroundColor: "rgba(245,197,24,0.12)",
                color: "#f5c518",
              }}
            >
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              About{" "}
              <span style={{ color: "#f5c518" }}>
                YMW Compliance Services LLP
              </span>
            </h2>
            <div
              className="mx-auto mt-5 h-1 w-20 rounded-full"
              style={{ backgroundColor: "#f5c518" }}
            />
          </div>

          {/* Two-column layout: text + highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left: Body copy */}
            <div className="space-y-6">
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                YMW Compliance Services LLP is one of India's most trusted
                compliance partners, dedicated to helping businesses simplify
                their regulatory, legal, and licensing requirements. We are
                committed to compliance excellence — enabling businesses to
                operate smoothly, grow confidently, and remain fully compliant
                at every stage of their journey.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                With{" "}
                <strong className="text-white">15,000+ happy clients</strong>{" "}
                and{" "}
                <strong className="text-white">
                  100+ professional services
                </strong>
                , we have established ourselves as a trusted one-stop compliance
                partner. Backed by{" "}
                <strong className="text-white">
                  12+ years of industry experience
                </strong>
                , our expertise ensures accuracy, transparency, and reliability
                in every service we deliver. From business registrations and
                licensing to ongoing regulatory compliance, we simplify complex
                legal processes so businesses can focus on their growth and
                success.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Operating with{" "}
                <strong className="text-white">
                  Pan-India service coverage
                </strong>
                , YMW Compliance Services LLP operates under the trusted
                leadership of{" "}
                <strong className="text-white">Mr. Kundan Kumar</strong>, an
                experienced and visionary entrepreneur with over 15 years of
                industry experience across Compliance, Mining, and diverse
                business sectors. As a proud subsidiary of the{" "}
                <strong className="text-white">YMW Group</strong>, we are
                dedicated to delivering trusted, professional, and scalable
                compliance solutions with Pan-India service coverage.
              </p>
            </div>

            {/* Right: Highlights checklist */}
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "#0d1f3c",
                border: "1px solid rgba(245,197,24,0.18)",
              }}
            >
              <h3 className="text-lg font-bold text-white mb-6">
                What We Offer
              </h3>
              <ul className="space-y-4">
                {HIGHLIGHTS.map((item) => (
                  <li key={item.text} className="flex items-center gap-4">
                    <span
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: "rgba(245,197,24,0.15)",
                        color: "#f5c518",
                      }}
                    >
                      {item.icon}
                    </span>
                    <span className="text-gray-200 text-sm md:text-base font-medium">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Leadership callout */}
              <div
                className="mt-8 p-5 rounded-xl"
                style={{
                  backgroundColor: "rgba(245,197,24,0.07)",
                  border: "1px solid rgba(245,197,24,0.25)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: "#f5c518" }}
                >
                  Leadership
                </p>
                <p className="text-white font-bold text-base">
                  Mr. Kundan Kumar
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Founder &amp; Visionary Entrepreneur · 15+ Years across
                  Compliance, Mining &amp; Diverse Business Sectors
                </p>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-3 p-7 rounded-2xl text-center transition-transform hover:-translate-y-1"
                style={{
                  backgroundColor: "#0d1f3c",
                  border: "2px solid rgba(245,197,24,0.25)",
                }}
              >
                <span
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(245,197,24,0.15)",
                    color: "#f5c518",
                  }}
                >
                  {stat.icon}
                </span>
                <span className="text-3xl md:text-4xl font-extrabold text-white leading-none">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-gray-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ───────────────────────────────────────────────────────── */}
      <div
        className="mx-auto max-w-5xl h-px"
        style={{ backgroundColor: "rgba(245,197,24,0.12)" }}
      />

      {/* ─── SECTION 2: OUR MISSION ────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0a1628" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Icon block */}
            <div className="flex justify-center lg:justify-start">
              <div
                className="relative w-56 h-56 rounded-3xl flex items-center justify-center"
                style={{
                  backgroundColor: "#0d1f3c",
                  border: "2px solid rgba(245,197,24,0.25)",
                }}
              >
                <Target
                  className="w-24 h-24"
                  style={{ color: "#f5c518", opacity: 0.9 }}
                />
                {/* Corner accent */}
                <div
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full"
                  style={{ backgroundColor: "#f5c518" }}
                />
                <div
                  className="absolute -bottom-3 -left-3 w-5 h-5 rounded-full"
                  style={{ backgroundColor: "rgba(245,197,24,0.4)" }}
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                style={{
                  backgroundColor: "rgba(245,197,24,0.12)",
                  color: "#f5c518",
                }}
              >
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Empowering Businesses{" "}
                <span style={{ color: "#f5c518" }}>Through Compliance</span>
              </h2>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-5">
                Our mission is to empower businesses across India by making
                compliance{" "}
                <strong className="text-white">
                  simple, transparent, affordable, and accessible
                </strong>
                . We believe every entrepreneur — whether a first-time startup
                founder or a seasoned enterprise leader — deserves expert
                compliance support without complexity or confusion.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                We are committed to our clients' long-term success. By
                delivering reliable, accurate, and timely services, we build
                lasting partnerships rooted in trust. Every interaction is
                guided by our promise: to be the compliance partner that
                businesses can count on — today, tomorrow, and at every
                milestone ahead.
              </p>
              <ul className="space-y-3">
                {[
                  "Simple & transparent compliance processes",
                  "Affordable services for every business size",
                  "Accessible support for startups, MSMEs & enterprises",
                  "Long-term client relationships built on trust",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "#f5c518" }}
                    />
                    <span className="text-gray-300 text-sm md:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ───────────────────────────────────────────────────────── */}
      <div
        className="mx-auto max-w-5xl h-px"
        style={{ backgroundColor: "rgba(245,197,24,0.12)" }}
      />

      {/* ─── SECTION 3: OUR VISION ─────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#0a1628" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text — reversed order on desktop */}
            <div className="order-2 lg:order-1">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                style={{
                  backgroundColor: "rgba(245,197,24,0.12)",
                  color: "#f5c518",
                }}
              >
                Our Vision
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                India's Most Trusted{" "}
                <span style={{ color: "#f5c518" }}>Compliance Partner</span>
              </h2>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-5">
                Our vision is to become{" "}
                <strong className="text-white">
                  India's most trusted and innovative compliance partner
                </strong>{" "}
                — transforming compliance from a burden into a seamless,
                growth-enabling experience for every business we serve.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                We envision a future where no Indian business is held back by
                regulatory complexity. Through innovation, technology, and
                nationwide service leadership, we aim to set the benchmark for
                compliance excellence — delivering long-term impact for
                startups, MSMEs, entrepreneurs, and enterprises across every
                state in India.
              </p>
              <ul className="space-y-3">
                {[
                  "Innovation-led compliance solutions for modern businesses",
                  "Nationwide service leadership across all 28 states",
                  "Technology-driven processes for speed and accuracy",
                  "Long-term impact for every client we serve",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "#f5c518" }}
                    />
                    <span className="text-gray-300 text-sm md:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Icon block */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div
                className="relative w-56 h-56 rounded-3xl flex items-center justify-center"
                style={{
                  backgroundColor: "#0d1f3c",
                  border: "2px solid rgba(245,197,24,0.25)",
                }}
              >
                <Eye
                  className="w-24 h-24"
                  style={{ color: "#f5c518", opacity: 0.9 }}
                />
                {/* Corner accents */}
                <div
                  className="absolute -top-3 -left-3 w-8 h-8 rounded-full"
                  style={{ backgroundColor: "#f5c518" }}
                />
                <div
                  className="absolute -bottom-3 -right-3 w-5 h-5 rounded-full"
                  style={{ backgroundColor: "rgba(245,197,24,0.4)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA BANNER ────────────────────────────────────────────── */}
      <section
        className="py-16 px-4"
        style={{
          background: "linear-gradient(135deg, #0d1f3c 0%, #0a1628 100%)",
          borderTop: "1px solid rgba(245,197,24,0.15)",
          borderBottom: "1px solid rgba(245,197,24,0.15)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Ready to Simplify Your{" "}
            <span style={{ color: "#f5c518" }}>Compliance Journey?</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Join 15,000+ businesses that trust YMW Compliance Services LLP for
            accurate, reliable, and affordable compliance solutions across
            India.
          </p>
          <button
            type="button"
            onClick={scrollToConsultation}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]"
            style={{ backgroundColor: "#f5c518", color: "#0a1628" }}
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ─── FREE CONSULTATION SECTION ─────────────────────────────────────── */}
      <FreeConsultationSection />
    </div>
  );
}
