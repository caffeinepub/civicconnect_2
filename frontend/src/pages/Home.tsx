import { Link } from '@tanstack/react-router';
import {
  Phone,
  MessageCircle,
  Clock,
  Users,
  Calendar,
  Star,
  FileText,
  Calculator,
  Award,
  Shield,
  ScrollText,
  Building,
  Rocket,
  Utensils,
  Stamp,
  Leaf,
  FileCheck,
  KeyRound,
  FileSignature,
  Store,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

const services = [
  { name: 'Business Registration', icon: FileText },
  { name: 'Tax & GST', icon: Calculator },
  { name: 'ISO Certification', icon: Award },
  { name: 'Compliance Service', icon: Shield },
  { name: 'Government License', icon: ScrollText },
  { name: 'Government Registration', icon: Building },
  { name: 'Labour Department', icon: Users },
  { name: 'Startup Service', icon: Rocket },
  { name: 'FSSAI License', icon: Utensils },
  { name: 'Trademark Registration', icon: Stamp },
  { name: 'Pollution Control Board', icon: Leaf },
  { name: 'Tender Services', icon: FileCheck },
  { name: 'Digital Signature Certificate', icon: KeyRound },
  { name: 'Agreement & Contract', icon: FileSignature },
  { name: 'Small Business Support Service', icon: Store },
];

const whyChooseUs = [
  { icon: Users, stat: '20,000+', label: 'Happy Clients' },
  { icon: Calendar, stat: '15+', label: 'Years Experience' },
  { icon: Star, stat: '5 Star', label: 'Rating' },
];

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[540px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/generated/hero-banner.dim_1400x500.png)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, oklch(0.18 0.10 195 / 0.93) 0%, oklch(0.28 0.12 195 / 0.87) 55%, oklch(0.24 0.10 160 / 0.82) 100%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 border"
              style={{
                backgroundColor: 'oklch(1 0 0 / 0.10)',
                borderColor: 'oklch(1 0 0 / 0.22)',
                color: 'oklch(0.92 0.04 195)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              India's #1 Trusted Compliance Partner
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-white"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              YMW{' '}
              <span style={{ color: 'oklch(0.82 0.12 195)' }}>Compliance</span>{' '}
              Services
            </h1>

            <p
              className="text-lg sm:text-xl leading-relaxed mb-8"
              style={{ color: 'oklch(0.88 0.03 195)' }}
            >
              India's #1 Trusted Compliance &amp; Registration Partner
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="civic-btn-primary text-base px-8 py-3 shadow-civic-lg"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/918102906339"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold border-2 transition-all duration-200"
                style={{
                  borderColor: 'oklch(1 0 0 / 0.50)',
                  color: 'white',
                  backgroundColor: 'oklch(1 0 0 / 0.08)',
                }}
              >
                <MessageCircle size={18} />
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{
                  backgroundColor: 'oklch(var(--civic-teal) / 0.10)',
                  color: 'oklch(var(--civic-teal))',
                }}
              >
                About Us
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ fontFamily: 'Playfair Display, Georgia, serif', color: 'oklch(var(--civic-teal-dark))' }}
              >
                Dhanbad's Most Trusted Compliance Partner
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'oklch(var(--civic-slate))' }}>
                <p>
                  YMW Compliance Services LLP is a Dhanbad, Jharkhand-based startup dedicated to providing
                  comprehensive compliance, licensing, and legal support solutions for businesses across India.
                  We offer <strong>100+ professional services</strong> designed to help entrepreneurs, startups,
                  MSMEs, and established businesses operate smoothly while staying fully compliant with applicable
                  laws and regulations.
                </p>
                <p>
                  We are a one-stop solution for all your legal registrations, licenses, and compliance
                  requirements — ensuring efficiency, accuracy, and reliability in every service we deliver.
                </p>
                <p>
                  YMW Compliance Services LLP is a proud subsidiary of <strong>YMW Group</strong>, established
                  under the leadership of <strong>Mr. Kundan Kumar</strong> — a highly skilled, well-educated,
                  and visionary entrepreneur with more than 15 years of industry experience in compliance,
                  mining, and diverse business sectors.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/about" className="civic-btn-primary text-base px-8 py-3">
                  Learn More
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>

            {/* Decorative stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '100+', label: 'Professional Services' },
                { value: '20,000+', label: 'Happy Clients' },
                { value: '15+', label: 'Years Experience' },
                { value: 'Pan India', label: 'Service Coverage' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="civic-card p-6 text-center"
                  style={{ backgroundColor: 'oklch(var(--civic-teal) / 0.05)' }}
                >
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: 'oklch(var(--civic-teal))' }}
                  >
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section
        className="py-20"
        style={{ backgroundColor: 'oklch(var(--civic-green-light))' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'oklch(var(--civic-teal) / 0.12)',
                color: 'oklch(var(--civic-teal))',
              }}
            >
              Our Services
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ fontFamily: 'Playfair Display, Georgia, serif', color: 'oklch(var(--civic-teal-dark))' }}
            >
              Comprehensive Compliance Solutions
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'oklch(var(--civic-slate))' }}>
              From business registration to government licenses — we handle it all so you can focus on growth.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {services.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="civic-card p-4 flex flex-col items-center text-center gap-3 group hover:shadow-civic-lg transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{
                    backgroundColor: 'oklch(var(--civic-teal) / 0.10)',
                  }}
                >
                  <Icon size={22} style={{ color: 'oklch(var(--civic-teal))' }} />
                </div>
                <span className="text-xs font-semibold leading-snug text-foreground">{name}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="civic-btn-primary text-base px-8 py-3">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'oklch(var(--civic-teal) / 0.10)',
                color: 'oklch(var(--civic-teal))',
              }}
            >
              Why Choose Us
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ fontFamily: 'Playfair Display, Georgia, serif', color: 'oklch(var(--civic-teal-dark))' }}
            >
              Trusted by Thousands Across India
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {whyChooseUs.map(({ icon: Icon, stat, label }) => (
              <div
                key={label}
                className="civic-card p-8 text-center group"
                style={{ borderTop: '4px solid oklch(var(--civic-teal))' }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-200 group-hover:scale-110"
                  style={{ backgroundColor: 'oklch(var(--civic-teal) / 0.10)' }}
                >
                  <Icon size={30} style={{ color: 'oklch(var(--civic-teal))' }} />
                </div>
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: 'oklch(var(--civic-teal-dark))' }}
                >
                  {stat}
                </div>
                <div className="text-base font-medium text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Preview ── */}
      <section
        className="py-20"
        style={{ backgroundColor: 'oklch(var(--civic-teal-dark))' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{
                backgroundColor: 'oklch(1 0 0 / 0.12)',
                color: 'oklch(0.90 0.04 195)',
              }}
            >
              Get In Touch
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              We're Here to Help
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {/* Phone */}
            <div
              className="rounded-2xl p-6 flex flex-col items-center text-center gap-3"
              style={{ backgroundColor: 'oklch(1 0 0 / 0.07)', border: '1px solid oklch(1 0 0 / 0.12)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'oklch(1 0 0 / 0.12)' }}
              >
                <Phone size={22} className="text-white" />
              </div>
              <h3 className="font-semibold text-white text-base">Phone</h3>
              <div className="space-y-1">
                <a
                  href="tel:+919279242122"
                  className="block text-sm transition-colors"
                  style={{ color: 'oklch(0.82 0.06 195)' }}
                >
                  92792 42122
                </a>
                <a
                  href="tel:+919241136368"
                  className="block text-sm transition-colors"
                  style={{ color: 'oklch(0.82 0.06 195)' }}
                >
                  9241136368
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div
              className="rounded-2xl p-6 flex flex-col items-center text-center gap-3"
              style={{ backgroundColor: 'oklch(1 0 0 / 0.07)', border: '1px solid oklch(1 0 0 / 0.12)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'oklch(1 0 0 / 0.12)' }}
              >
                <MessageCircle size={22} className="text-white" />
              </div>
              <h3 className="font-semibold text-white text-base">WhatsApp</h3>
              <div className="space-y-1">
                <a
                  href="https://wa.me/918102906339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm transition-colors"
                  style={{ color: 'oklch(0.82 0.06 195)' }}
                >
                  8102906339
                </a>
                <a
                  href="https://wa.me/918102901690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm transition-colors"
                  style={{ color: 'oklch(0.82 0.06 195)' }}
                >
                  8102901690
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div
              className="rounded-2xl p-6 flex flex-col items-center text-center gap-3"
              style={{ backgroundColor: 'oklch(1 0 0 / 0.07)', border: '1px solid oklch(1 0 0 / 0.12)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'oklch(1 0 0 / 0.12)' }}
              >
                <Clock size={22} className="text-white" />
              </div>
              <h3 className="font-semibold text-white text-base">Business Hours</h3>
              <div className="space-y-1 text-sm" style={{ color: 'oklch(0.82 0.06 195)' }}>
                <p>Mon – Sat: 10:00 AM – 6:30 PM</p>
                <p>Sunday: Closed</p>
                <p>National Holidays: Closed</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold transition-all duration-200"
              style={{
                backgroundColor: 'oklch(0.62 0.12 195)',
                color: 'white',
              }}
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
