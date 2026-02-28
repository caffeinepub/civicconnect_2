import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SiX, SiFacebook, SiInstagram, SiLinkedin, SiYoutube, SiGithub } from 'react-icons/si';
import FreeConsultationSection from '../components/FreeConsultationSection';

const PLATFORMS = [
  {
    name: 'X (Twitter)',
    icon: <SiX className="w-7 h-7" />,
    handle: '@ymwcompliance',
    followers: '2.1K',
    desc: 'Latest compliance news, regulatory updates, and business tips.',
    url: 'https://twitter.com/ymwcompliance',
    color: '#000000',
  },
  {
    name: 'Facebook',
    icon: <SiFacebook className="w-7 h-7" />,
    handle: 'YMW Compliance Services',
    followers: '5.4K',
    desc: 'Connect with us for compliance guides, success stories, and offers.',
    url: 'https://facebook.com/ymwcompliance',
    color: '#1877F2',
  },
  {
    name: 'Instagram',
    icon: <SiInstagram className="w-7 h-7" />,
    handle: '@ymwcompliance',
    followers: '3.2K',
    desc: 'Visual compliance tips, infographics, and behind-the-scenes.',
    url: 'https://instagram.com/ymwcompliance',
    color: '#E4405F',
  },
  {
    name: 'LinkedIn',
    icon: <SiLinkedin className="w-7 h-7" />,
    handle: 'YMW Compliance Services',
    followers: '4.8K',
    desc: 'Professional network for business owners and compliance professionals.',
    url: 'https://linkedin.com/company/ymwcompliance',
    color: '#0A66C2',
  },
  {
    name: 'YouTube',
    icon: <SiYoutube className="w-7 h-7" />,
    handle: 'YMW Compliance',
    followers: '1.9K',
    desc: 'Video tutorials on GST, company registration, and compliance.',
    url: 'https://youtube.com/@ymwcompliance',
    color: '#FF0000',
  },
  {
    name: 'GitHub',
    icon: <SiGithub className="w-7 h-7" />,
    handle: 'ymwcompliance',
    followers: '320',
    desc: 'Open source compliance tools and resources for businesses.',
    url: 'https://github.com/ymwcompliance',
    color: '#333333',
  },
];

export default function SocialMedia() {
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
            Social Media
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Follow Us on <span style={{ color: '#f5c518' }}>Social Media</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stay connected for the latest compliance updates, tips, and business insights.
          </p>
        </div>
      </section>

      {/* Social Media Cards */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0d1f3c' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl flex flex-col gap-4 hover:scale-105 transition-transform duration-200"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                textDecoration: 'none',
              }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: platform.color, color: '#fff' }}
                >
                  {platform.icon}
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{platform.name}</h3>
                <p className="text-sm font-medium mb-2" style={{ color: '#f5c518' }}>{platform.handle}</p>
                <p className="text-sm text-gray-400">{platform.desc}</p>
              </div>
              <div className="flex items-center gap-2 mt-auto">
                <span className="text-xl font-bold text-white">{platform.followers}</span>
                <span className="text-xs text-gray-400">followers</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Free Consultation Section */}
      <FreeConsultationSection />
    </div>
  );
}
