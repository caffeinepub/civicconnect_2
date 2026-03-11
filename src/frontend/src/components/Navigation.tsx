import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  ChevronDown,
  LogIn,
  Menu,
  Phone,
  User,
  UserPlus,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useCustomerSession } from "../hooks/useCustomerSession";

const SERVICE_ITEMS = [
  "Business Registration",
  "Tax & GST",
  "ISO Certification",
  "Compliance Service",
  "Government License",
  "Government Registration",
  "Labour Department",
  "Startup Service",
  "FSSAI License",
  "Trademark Registration",
  "Pollution Control Board",
  "Tender Services",
  "Digital Signature Certificate",
  "Agreement & Contract",
  "Small Business Support Service",
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const secondaryLinks = [{ label: "Grievance", path: "/grievance" }];

interface NavigationProps {
  stickyTopOffset?: number;
}

export default function Navigation({ stickyTopOffset = 0 }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const servicesHoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { session } = useCustomerSession();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  // Close Sign Up dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setServicesHovered(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServicesMouseEnter = () => {
    if (servicesHoverTimeout.current)
      clearTimeout(servicesHoverTimeout.current);
    setServicesHovered(true);
  };

  const handleServicesMouseLeave = () => {
    servicesHoverTimeout.current = setTimeout(() => {
      setServicesHovered(false);
    }, 150);
  };

  return (
    <header
      className="border-b border-white/10 shadow-lg"
      style={{
        backgroundColor: "oklch(0.14 0.06 255)",
        position: "sticky",
        top: stickyTopOffset,
        zIndex: 50,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col justify-center shrink-0 leading-tight"
          >
            {/* Brand name row */}
            <div className="flex items-baseline gap-1.5">
              <span
                className="text-xl font-extrabold tracking-tight"
                style={{
                  color: "#f5c518",
                  fontFamily: "Poppins, Inter, sans-serif",
                }}
              >
                YMW
              </span>
              <span
                className="text-xl font-semibold tracking-tight text-white"
                style={{ fontFamily: "Poppins, Inter, sans-serif" }}
              >
                Compliance Services
              </span>
            </div>
            {/* Tagline row */}
            <span
              className="text-xs font-medium tracking-wide"
              style={{
                color: "#8eafd4",
                fontFamily: "Poppins, Inter, sans-serif",
              }}
            >
              Your Trusted Business Partner
            </span>
          </Link>

          {/* Desktop Nav — centered */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    ref={servicesMenuRef}
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    {/* Services trigger */}
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 ${
                        isActive(link.path)
                          ? "font-semibold"
                          : "hover:bg-white/10"
                      }`}
                      style={{
                        color: isActive(link.path)
                          ? "oklch(0.82 0.18 85)"
                          : "white",
                      }}
                    >
                      Services
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${servicesHovered ? "rotate-180" : ""}`}
                        style={{ color: "oklch(0.82 0.18 85)" }}
                      />
                    </Link>

                    {/* Services dropdown */}
                    {servicesHovered && (
                      <div
                        className="absolute left-0 top-full mt-1 w-64 rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50"
                        style={{ backgroundColor: "oklch(0.14 0.06 255)" }}
                        onMouseEnter={handleServicesMouseEnter}
                        onMouseLeave={handleServicesMouseLeave}
                      >
                        <div className="py-1">
                          {SERVICE_ITEMS.map((service) => (
                            <Link
                              key={service}
                              to="/services"
                              onClick={() => setServicesHovered(false)}
                              className="block px-4 py-2.5 text-sm font-medium text-white transition-all duration-150"
                              style={{}}
                              onMouseEnter={(e) => {
                                (
                                  e.currentTarget as HTMLAnchorElement
                                ).style.backgroundColor =
                                  "oklch(0.20 0.06 255)";
                                (
                                  e.currentTarget as HTMLAnchorElement
                                ).style.color = "oklch(0.82 0.18 85)";
                                (
                                  e.currentTarget as HTMLAnchorElement
                                ).style.paddingLeft = "20px";
                              }}
                              onMouseLeave={(e) => {
                                (
                                  e.currentTarget as HTMLAnchorElement
                                ).style.backgroundColor = "";
                                (
                                  e.currentTarget as HTMLAnchorElement
                                ).style.color = "white";
                                (
                                  e.currentTarget as HTMLAnchorElement
                                ).style.paddingLeft = "";
                              }}
                            >
                              {service}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 ${
                    isActive(link.path) ? "font-semibold" : "hover:bg-white/10"
                  }`}
                  style={{
                    color: isActive(link.path)
                      ? "oklch(0.82 0.18 85)"
                      : "white",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: phone + auth + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone number */}
            <a
              href="tel:+918102906339"
              className="flex items-center gap-1.5 text-sm font-medium text-white hover:opacity-80 transition-opacity"
            >
              <Phone size={15} style={{ color: "oklch(0.82 0.18 85)" }} />
              <span>+91 8102906339</span>
            </a>

            {/* Auth: My Account (if session) or Sign Up dropdown */}
            {session ? (
              <Link
                to="/customer-dashboard"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 hover:bg-white/10"
                style={{
                  color: isActive("/customer-dashboard")
                    ? "oklch(0.82 0.18 85)"
                    : "white",
                }}
              >
                <User size={15} style={{ color: "oklch(0.82 0.18 85)" }} />
                My Account
              </Link>
            ) : (
              /* Sign Up dropdown button */
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 focus:outline-none"
                  style={{
                    backgroundColor: "oklch(0.82 0.18 85)",
                    color: "oklch(0.12 0.04 255)",
                  }}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  <UserPlus size={15} />
                  Sign Up
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown menu */}
                {dropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-44 rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50"
                    style={{ backgroundColor: "oklch(0.14 0.06 255)" }}
                  >
                    {/* Sign Up option */}
                    <button
                      type="button"
                      onClick={() => {
                        setDropdownOpen(false);
                        navigate({ to: "/customer-signup" });
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-3 text-sm font-semibold transition-all duration-150 text-left"
                      style={{
                        color: "oklch(0.12 0.04 255)",
                        backgroundColor: "oklch(0.82 0.18 85)",
                      }}
                      onMouseEnter={(e) => {
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.backgroundColor = "oklch(0.75 0.18 85)";
                      }}
                      onMouseLeave={(e) => {
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.backgroundColor = "oklch(0.82 0.18 85)";
                      }}
                    >
                      <UserPlus size={15} />
                      Sign Up
                    </button>

                    <div
                      className="h-px"
                      style={{ backgroundColor: "oklch(0.20 0.06 255)" }}
                    />

                    {/* Login option */}
                    <button
                      type="button"
                      onClick={() => {
                        setDropdownOpen(false);
                        navigate({ to: "/customer-login" });
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-3 text-sm font-medium transition-all duration-150 text-left text-white hover:bg-white/10"
                    >
                      <LogIn
                        size={15}
                        style={{ color: "oklch(0.82 0.18 85)" }}
                      />
                      Login
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Get Free Consultation CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-bold transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "oklch(0.82 0.18 85)",
                color: "oklch(0.12 0.04 255)",
              }}
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t border-white/10 animate-fade-in"
          style={{ backgroundColor: "oklch(0.14 0.06 255)" }}
        >
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <div key={link.path}>
                    {/* Services accordion trigger */}
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                        isActive(link.path)
                          ? "font-semibold bg-white/10"
                          : "hover:bg-white/10"
                      }`}
                      style={{
                        color: isActive(link.path)
                          ? "oklch(0.82 0.18 85)"
                          : "white",
                      }}
                    >
                      <span>Services</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        style={{ color: "oklch(0.82 0.18 85)" }}
                      />
                    </button>

                    {/* Mobile services submenu */}
                    {mobileServicesOpen && (
                      <div
                        className="ml-4 mt-1 mb-1 rounded-lg overflow-hidden border border-white/10"
                        style={{ backgroundColor: "oklch(0.12 0.05 255)" }}
                      >
                        {SERVICE_ITEMS.map((service, idx) => (
                          <Link
                            key={service}
                            to="/services"
                            onClick={() => {
                              setMobileServicesOpen(false);
                              setMobileOpen(false);
                            }}
                            className={`block px-4 py-2.5 text-sm font-medium text-white transition-all duration-150 hover:bg-white/10 ${
                              idx < SERVICE_ITEMS.length - 1
                                ? "border-b border-white/5"
                                : ""
                            }`}
                            onMouseEnter={(e) => {
                              (
                                e.currentTarget as HTMLAnchorElement
                              ).style.color = "oklch(0.82 0.18 85)";
                            }}
                            onMouseLeave={(e) => {
                              (
                                e.currentTarget as HTMLAnchorElement
                              ).style.color = "white";
                            }}
                          >
                            {service}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive(link.path)
                      ? "font-semibold bg-white/10"
                      : "hover:bg-white/10"
                  }`}
                  style={{
                    color: isActive(link.path)
                      ? "oklch(0.82 0.18 85)"
                      : "white",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Secondary links */}
            {secondaryLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive(link.path)
                    ? "font-semibold bg-white/10"
                    : "hover:bg-white/10"
                }`}
                style={{
                  color: isActive(link.path) ? "oklch(0.82 0.18 85)" : "white",
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Auth Links */}
            {session ? (
              <Link
                to="/customer-dashboard"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive("/customer-dashboard")
                    ? "font-semibold bg-white/10"
                    : "hover:bg-white/10"
                }`}
                style={{
                  color: isActive("/customer-dashboard")
                    ? "oklch(0.82 0.18 85)"
                    : "white",
                }}
              >
                <User size={15} style={{ color: "oklch(0.82 0.18 85)" }} />
                My Account
              </Link>
            ) : (
              <>
                {/* Sign Up — primary tappable row */}
                <Link
                  to="/customer-signup"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all duration-150"
                  style={{
                    backgroundColor: "oklch(0.82 0.18 85)",
                    color: "oklch(0.12 0.04 255)",
                  }}
                >
                  <UserPlus size={15} />
                  Sign Up
                </Link>
                {/* Login — secondary tappable row */}
                <Link
                  to="/customer-login"
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive("/customer-login")
                      ? "font-semibold bg-white/10"
                      : "hover:bg-white/10"
                  }`}
                  style={{
                    color: isActive("/customer-login")
                      ? "oklch(0.82 0.18 85)"
                      : "white",
                  }}
                >
                  <LogIn size={15} style={{ color: "oklch(0.82 0.18 85)" }} />
                  Login
                </Link>
              </>
            )}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-full text-sm font-bold transition-all duration-200"
              style={{
                backgroundColor: "oklch(0.82 0.18 85)",
                color: "oklch(0.12 0.04 255)",
              }}
            >
              Get Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
