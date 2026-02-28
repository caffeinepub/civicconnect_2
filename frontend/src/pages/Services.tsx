import React from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle } from 'lucide-react';
import FreeConsultationSection from '../components/FreeConsultationSection';

const SERVICES = [
  {
    icon: '🏢',
    title: 'Business Registration',
    badge: 'Most Popular',
    desc: 'Register your business as Private Limited Company, LLP, OPC, Partnership Firm, or Sole Proprietorship.',
    features: ['Private Limited Company', 'LLP Registration', 'OPC Registration', 'Partnership Firm'],
  },
  {
    icon: '📊',
    title: 'Tax & GST',
    badge: 'Fast Track',
    desc: 'Complete GST registration, monthly/quarterly filing, income tax returns, and annual return services.',
    features: ['GST Registration', 'GST Filing', 'Income Tax Return', 'Tax Audit'],
  },
  {
    icon: '🏆',
    title: 'ISO Certification',
    badge: 'Certified',
    desc: 'Get ISO 9001, 14001, 22000, 27001 and other certifications for your business.',
    features: ['ISO 9001:2015', 'ISO 14001', 'ISO 22000', 'ISO 27001'],
  },
  {
    icon: '📋',
    title: 'Compliance Service',
    badge: 'Annual',
    desc: 'Annual filings, board meetings, ROC compliance, and statutory compliance for companies.',
    features: ['Annual Filing', 'Board Meetings', 'Director KYC', 'Statutory Audit'],
  },
  {
    icon: '🏛️',
    title: 'Government License',
    badge: 'Official',
    desc: 'Obtain all types of government licenses required for your business operations.',
    features: ['Shop & Establishment', 'Trade License', 'Drug License', 'Import Export Code'],
  },
  {
    icon: '📝',
    title: 'Government Registration',
    badge: 'Required',
    desc: 'All government registrations including MSME/Udyam, DPIIT, and other statutory registrations.',
    features: ['MSME/Udyam', 'DPIIT Registration', 'Startup India', 'Professional Tax'],
  },
  {
    icon: '👷',
    title: 'Labour Department',
    badge: 'Mandatory',
    desc: 'Provident Fund, ESI, labour license, and all labour department compliance services.',
    features: ['PF Registration', 'ESI Registration', 'Labour License', 'Monthly Filing'],
  },
  {
    icon: '🚀',
    title: 'Startup Service',
    badge: 'New',
    desc: 'End-to-end startup support including registration, funding guidance, and compliance setup.',
    features: ['Startup India', 'DPIIT Recognition', 'Funding Guidance', 'Tax Benefits'],
  },
  {
    icon: '🍽️',
    title: 'FSSAI License',
    badge: 'Food Safety',
    desc: 'Food Safety and Standards Authority of India registration and license for food businesses.',
    features: ['Basic Registration', 'State License', 'Central License', 'Annual Renewal'],
  },
  {
    icon: '™️',
    title: 'Trademark Registration',
    badge: 'Legal',
    desc: 'Protect your brand name, logo, and intellectual property with trademark registration.',
    features: ['Trademark Search', 'Application Filing', 'Objection Reply', 'Renewal'],
  },
  {
    icon: '🌿',
    title: 'Pollution Control Board',
    badge: 'Environment',
    desc: 'Obtain Consent to Establish (CTE) and Consent to Operate (CTO) from Pollution Control Board.',
    features: ['CTE Certificate', 'CTO Certificate', 'Renewal Services', 'Compliance Audit'],
  },
  {
    icon: '📑',
    title: 'Tender Services',
    badge: 'Government',
    desc: 'Complete assistance in government tender filing, documentation, and bid management.',
    features: ['Tender Filing', 'Documentation', 'Bid Management', 'GeM Registration'],
  },
  {
    icon: '🔐',
    title: 'Digital Signature Certificate',
    badge: 'DSC',
    desc: 'Class 2 and Class 3 Digital Signature Certificates for individuals and organizations.',
    features: ['Class 2 DSC', 'Class 3 DSC', 'Organization DSC', 'Renewal'],
  },
  {
    icon: '📜',
    title: 'Agreement & Contract',
    badge: 'Legal',
    desc: 'Drafting and registration of all types of business agreements, contracts, and legal documents.',
    features: ['Partnership Deed', 'MOU Drafting', 'Rent Agreement', 'Service Contract'],
  },
  {
    icon: '🤝',
    title: 'Small Business Support Service',
    badge: 'SME',
    desc: 'Comprehensive support services tailored for small businesses and micro-enterprises.',
    features: ['Business Advisory', 'Compliance Calendar', 'Document Management', 'Expert Support'],
  },
];

export default function Services() {
  const scrollToConsultation = () => {
    document.getElementById('free-consultation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: '#0a1628' }}>
      {/* Page Hero */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)' }}
      >
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: 'rgba(245,197,24,0.15)', color: '#f5c518' }}
          >
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Complete <span style={{ color: '#f5c518' }}>Compliance Services</span> for India
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            From business registration to annual compliance — we handle everything so you can focus on growing your business.
          </p>
          {/* Prominent CTA above the fold */}
          <button
            onClick={scrollToConsultation}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]"
            style={{ backgroundColor: '#f5c518', color: '#0a1628' }}
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0d1f3c' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl flex flex-col gap-4 hover:scale-105 transition-transform duration-200"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{service.icon}</span>
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(245,197,24,0.15)', color: '#f5c518' }}
                  >
                    {service.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{service.desc}</p>
                </div>
                <ul className="flex flex-col gap-1.5 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#f5c518' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-4" style={{ backgroundColor: '#f5c518' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: '#0a1628' }}>
            Not Sure Which Service You Need?
          </h2>
          <p className="text-base mb-6" style={{ color: '#0a1628', opacity: 0.8 }}>
            Talk to our experts for free — we'll guide you to the right solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9279242122"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]"
              style={{ backgroundColor: '#0a1628', color: '#f5c518' }}
            >
              Call: +91 9279242122
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity min-h-[52px]"
              style={{ backgroundColor: 'rgba(10,22,40,0.15)', color: '#0a1628', border: '2px solid #0a1628' }}
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Free Consultation Section */}
      <FreeConsultationSection />
    </div>
  );
}
