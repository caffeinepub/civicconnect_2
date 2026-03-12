import { Link } from "@tanstack/react-router";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "ymw-compliance",
  );

  return (
    <footer
      className="border-t border-white/10"
      style={{ backgroundColor: "oklch(0.10 0.05 255)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="flex items-center gap-1 mb-1">
                <span
                  className="text-xl font-extrabold"
                  style={{
                    color: "oklch(0.82 0.18 85)",
                    fontFamily: "Playfair Display, Georgia, serif",
                  }}
                >
                  YMW
                </span>
                <span
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                >
                  {" "}
                  Compliance Services
                </span>
              </div>
              <p className="text-xs" style={{ color: "oklch(0.60 0.03 255)" }}>
                Your Trusted Business Partner
              </p>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.65 0.02 255)" }}
            >
              India's #1 Trusted Compliance &amp; Registration Partner — helping
              businesses grow with expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ color: "oklch(0.82 0.18 85)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Blog", path: "/blog" },
                { label: "Client Login", path: "/customer-login" },
                { label: "Client Signup", path: "/customer-signup" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(0.65 0.02 255)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ color: "oklch(0.82 0.18 85)" }}
            >
              Support
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Contact Us", path: "/contact" },
                { label: "Grievance Section", path: "/grievance" },
                { label: "Social Media", path: "/social-media" },
                { label: "Sign Up", path: "/signup" },
                { label: "Become an Affiliate", path: "/affiliate" },
                { label: "Partner Dashboard", path: "/affiliate-dashboard" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(0.65 0.02 255)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policies */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ color: "oklch(0.82 0.18 85)" }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Terms & Conditions", path: "/terms-and-conditions" },
                { label: "Privacy Policy", path: "/privacy-policy" },
                { label: "Refund Policy", path: "/refund-policy" },
                {
                  label: "Confidentiality Policy",
                  path: "/confidentiality-policy",
                },
                { label: "Disclaimer", path: "/disclaimer" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(0.65 0.02 255)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ color: "oklch(0.82 0.18 85)" }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0"
                  style={{ color: "oklch(0.82 0.18 85)" }}
                />
                <span
                  className="text-sm"
                  style={{ color: "oklch(0.65 0.02 255)" }}
                >
                  Dhanbad, Jharkhand, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  size={15}
                  className="shrink-0"
                  style={{ color: "oklch(0.82 0.18 85)" }}
                />
                <a
                  href="tel:+918102906339"
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: "oklch(0.65 0.02 255)" }}
                >
                  +91 8102906339
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail
                  size={15}
                  className="shrink-0"
                  style={{ color: "oklch(0.82 0.18 85)" }}
                />
                <a
                  href="mailto:ymwcompliances@gmail.com"
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: "oklch(0.65 0.02 255)" }}
                >
                  ymwcompliances@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "oklch(0.55 0.02 255)" }}>
            © {year} YMW Compliance Services LLP. All rights reserved.
          </p>
          <p
            className="text-xs flex items-center gap-1"
            style={{ color: "oklch(0.55 0.02 255)" }}
          >
            Built with{" "}
            <Heart
              size={12}
              className="inline"
              style={{
                color: "oklch(0.82 0.18 85)",
                fill: "oklch(0.82 0.18 85)",
              }}
            />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
              style={{ color: "oklch(0.82 0.18 85)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
