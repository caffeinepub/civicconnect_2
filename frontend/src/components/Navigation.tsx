import { useState, useRef, useEffect } from 'react';
import { Link, useRouterState, useNavigate } from '@tanstack/react-router';
import { Menu, X, Phone, User, LogIn, UserPlus, ChevronDown } from 'lucide-react';
import { useCustomerSession } from '../hooks/useCustomerSession';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const secondaryLinks = [
  { label: 'Grievance', path: '/grievance' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { session } = useCustomerSession();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 shadow-lg" style={{ backgroundColor: 'oklch(0.14 0.06 255)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex flex-col justify-center shrink-0">
            <div className="flex items-center gap-1">
              <span
                className="text-xl font-extrabold tracking-tight"
                style={{ color: 'oklch(0.82 0.18 85)', fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                YMW
              </span>
              <span
                className="text-xl font-bold tracking-tight text-white"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                {' '}Compliance Services
              </span>
            </div>
            <span className="text-xs" style={{ color: 'oklch(0.65 0.03 255)' }}>
              Your Trusted Business Partner
            </span>
          </Link>

          {/* Desktop Nav — centered */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 ${
                  isActive(link.path)
                    ? 'font-semibold'
                    : 'hover:bg-white/10'
                }`}
                style={{
                  color: isActive(link.path) ? 'oklch(0.82 0.18 85)' : 'white',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: phone + auth + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone number */}
            <a
              href="tel:+918102906339"
              className="flex items-center gap-1.5 text-sm font-medium text-white hover:opacity-80 transition-opacity"
            >
              <Phone size={15} style={{ color: 'oklch(0.82 0.18 85)' }} />
              <span>+91 8102906339</span>
            </a>

            {/* Auth: My Account (if session) or Sign Up dropdown */}
            {session ? (
              <Link
                to="/customer-dashboard"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150 hover:bg-white/10"
                style={{
                  color: isActive('/customer-dashboard') ? 'oklch(0.82 0.18 85)' : 'white',
                }}
              >
                <User size={15} style={{ color: 'oklch(0.82 0.18 85)' }} />
                My Account
              </Link>
            ) : (
              /* Sign Up dropdown button */
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 focus:outline-none"
                  style={{
                    backgroundColor: 'oklch(0.82 0.18 85)',
                    color: 'oklch(0.12 0.04 255)',
                  }}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  <UserPlus size={15} />
                  Sign Up
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Dropdown menu */}
                {dropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-44 rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50"
                    style={{ backgroundColor: 'oklch(0.14 0.06 255)' }}
                  >
                    {/* Sign Up option */}
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        navigate({ to: '/customer-signup' });
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-3 text-sm font-semibold transition-all duration-150 text-left"
                      style={{ color: 'oklch(0.12 0.04 255)', backgroundColor: 'oklch(0.82 0.18 85)' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'oklch(0.75 0.18 85)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'oklch(0.82 0.18 85)';
                      }}
                    >
                      <UserPlus size={15} />
                      Sign Up
                    </button>

                    <div className="h-px" style={{ backgroundColor: 'oklch(0.20 0.06 255)' }} />

                    {/* Login option */}
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        navigate({ to: '/customer-login' });
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-3 text-sm font-medium transition-all duration-150 text-left text-white hover:bg-white/10"
                    >
                      <LogIn size={15} style={{ color: 'oklch(0.82 0.18 85)' }} />
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
                backgroundColor: 'oklch(0.82 0.18 85)',
                color: 'oklch(0.12 0.04 255)',
              }}
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
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
          style={{ backgroundColor: 'oklch(0.14 0.06 255)' }}
        >
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {[...navLinks, ...secondaryLinks].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive(link.path)
                    ? 'font-semibold bg-white/10'
                    : 'hover:bg-white/10'
                }`}
                style={{
                  color: isActive(link.path) ? 'oklch(0.82 0.18 85)' : 'white',
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
                  isActive('/customer-dashboard') ? 'font-semibold bg-white/10' : 'hover:bg-white/10'
                }`}
                style={{
                  color: isActive('/customer-dashboard') ? 'oklch(0.82 0.18 85)' : 'white',
                }}
              >
                <User size={15} style={{ color: 'oklch(0.82 0.18 85)' }} />
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
                    backgroundColor: 'oklch(0.82 0.18 85)',
                    color: 'oklch(0.12 0.04 255)',
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
                    isActive('/customer-login') ? 'font-semibold bg-white/10' : 'hover:bg-white/10'
                  }`}
                  style={{
                    color: isActive('/customer-login') ? 'oklch(0.82 0.18 85)' : 'white',
                  }}
                >
                  <LogIn size={15} style={{ color: 'oklch(0.82 0.18 85)' }} />
                  Login
                </Link>
              </>
            )}

            <div className="pt-2 border-t border-white/10 mt-1 flex flex-col gap-2">
              <a
                href="tel:+918102906339"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white"
              >
                <Phone size={15} style={{ color: 'oklch(0.82 0.18 85)' }} />
                +91 8102906339
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mx-4 text-center rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200"
                style={{
                  backgroundColor: 'oklch(0.82 0.18 85)',
                  color: 'oklch(0.12 0.04 255)',
                }}
              >
                Get Free Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
