import { Link } from '@tanstack/react-router';
import {
  FileSearch,
  MessageSquare,
  AlertTriangle,
  Calendar,
  BookOpen,
  Vote,
  Building2,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: FileSearch,
    title: 'Public Information Access',
    description: 'Request and access public records, government documents, and official reports with ease.',
    badge: 'Open Access',
    badgeColor: 'oklch(var(--civic-teal))',
    badgeBg: 'oklch(var(--civic-teal) / 0.1)',
    link: '/contact',
  },
  {
    icon: MessageSquare,
    title: 'Community Forums',
    description: 'Participate in local discussions, share ideas, and collaborate on community initiatives.',
    badge: 'Interactive',
    badgeColor: 'oklch(var(--civic-green))',
    badgeBg: 'oklch(var(--civic-green) / 0.1)',
    link: '/contact',
  },
  {
    icon: AlertTriangle,
    title: 'Issue Reporting',
    description: 'Report local issues like potholes, broken streetlights, or public safety concerns directly to authorities.',
    badge: 'Fast Response',
    badgeColor: 'oklch(0.60 0.16 30)',
    badgeBg: 'oklch(0.60 0.16 30 / 0.1)',
    link: '/grievance',
  },
  {
    icon: Calendar,
    title: 'Event Calendar',
    description: 'Stay updated on town halls, community meetings, public hearings, and local events.',
    badge: 'Stay Updated',
    badgeColor: 'oklch(0.55 0.15 250)',
    badgeBg: 'oklch(0.55 0.15 250 / 0.1)',
    link: '/contact',
  },
  {
    icon: BookOpen,
    title: 'Civic Education',
    description: 'Access resources, guides, and educational content to better understand your rights and responsibilities.',
    badge: 'Learn More',
    badgeColor: 'oklch(0.55 0.14 280)',
    badgeBg: 'oklch(0.55 0.14 280 / 0.1)',
    link: '/blog',
  },
  {
    icon: Vote,
    title: 'Voting Information',
    description: 'Find polling locations, registration deadlines, and candidate information for upcoming elections.',
    badge: 'Democracy',
    badgeColor: 'oklch(0.60 0.18 350)',
    badgeBg: 'oklch(0.60 0.18 350 / 0.1)',
    link: '/contact',
  },
  {
    icon: Building2,
    title: 'Permit & License Services',
    description: 'Apply for building permits, business licenses, and other municipal approvals online.',
    badge: 'Official',
    badgeColor: 'oklch(var(--civic-teal-dark))',
    badgeBg: 'oklch(var(--civic-teal-dark) / 0.1)',
    link: '/contact',
  },
  {
    icon: HeartHandshake,
    title: 'Volunteer Programs',
    description: 'Connect with local volunteer opportunities and community service programs in your area.',
    badge: 'Give Back',
    badgeColor: 'oklch(var(--civic-green))',
    badgeBg: 'oklch(var(--civic-green) / 0.1)',
    link: '/contact',
  },
];

export default function Services() {
  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Our Services
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'oklch(0.88 0.04 195)' }}>
            Comprehensive civic services designed to make your community engagement seamless and effective.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading text-3xl sm:text-4xl mb-4">What We Offer</h2>
            <p className="section-subheading max-w-xl mx-auto">
              From information access to community engagement, we provide everything you need to be an active citizen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="civic-card p-6 flex flex-col group">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                      style={{ backgroundColor: service.badgeBg }}
                    >
                      <Icon size={22} style={{ color: service.badgeColor }} />
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: service.badgeBg, color: service.badgeColor }}
                    >
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="font-semibold text-base mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground flex-1">{service.description}</p>
                  <Link
                    to={service.link}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                    style={{ color: 'oklch(var(--civic-teal))' }}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: 'oklch(var(--civic-teal-dark))' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Need Help with a Specific Service?
          </h2>
          <p className="text-base mb-8" style={{ color: 'oklch(0.82 0.05 195)' }}>
            Our team is ready to assist you. Reach out through our contact form or submit a grievance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold transition-all duration-200"
              style={{ backgroundColor: 'oklch(0.62 0.12 195)', color: 'white' }}
            >
              Contact Us <ArrowRight size={18} />
            </Link>
            <Link
              to="/grievance"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold border-2 transition-all duration-200"
              style={{ borderColor: 'oklch(1 0 0 / 0.4)', color: 'white' }}
            >
              File a Grievance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
