import { Link } from '@tanstack/react-router';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'civicconnect');

  return (
    <footer className="border-t border-border" style={{ backgroundColor: 'oklch(var(--civic-teal-dark))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/assets/generated/site-logo.dim_128x128.png"
                alt="CivicConnect"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-lg font-bold text-white" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                CivicConnect
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.82 0.04 195)' }}>
              Building stronger communities through civic engagement, transparency, and shared responsibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Blog', path: '/blog' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'oklch(0.78 0.05 195)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2">
              {[
                { label: 'Contact Us', path: '/contact' },
                { label: 'Grievance Section', path: '/grievance' },
                { label: 'Social Media', path: '/social-media' },
                { label: 'Sign Up', path: '/signup' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'oklch(0.78 0.05 195)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: 'oklch(0.72 0.09 195)' }} />
                <span className="text-sm" style={{ color: 'oklch(0.78 0.05 195)' }}>
                  123 Civic Center Drive, Community City
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0" style={{ color: 'oklch(0.72 0.09 195)' }} />
                <span className="text-sm" style={{ color: 'oklch(0.78 0.05 195)' }}>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0" style={{ color: 'oklch(0.72 0.09 195)' }} />
                <span className="text-sm" style={{ color: 'oklch(0.78 0.05 195)' }}>hello@civicconnect.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
          style={{ borderColor: 'oklch(0.38 0.08 195)', color: 'oklch(0.68 0.05 195)' }}
        >
          <p>© {year} CivicConnect. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with{' '}
            <Heart size={14} className="fill-current" style={{ color: 'oklch(0.72 0.18 30)' }} />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-white transition-colors"
              style={{ color: 'oklch(0.78 0.05 195)' }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
