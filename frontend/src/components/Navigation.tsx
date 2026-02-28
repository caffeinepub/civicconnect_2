import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'Social Media', path: '/social-media' },
];

const secondaryLinks = [
  { label: 'Grievance', path: '/grievance' },
  { label: 'Sign Up', path: '/signup' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

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

          {/* Desktop Nav */}
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

          {/* Right side: phone + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918102906339"
              className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-gold transition-colors"
              style={{ color: 'white' }}
            >
              <Phone size={15} style={{ color: 'oklch(0.82 0.18 85)' }} />
              <span>+91 8102906339</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-bold transition-all duration-200"
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
