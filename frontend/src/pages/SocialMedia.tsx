import { ExternalLink } from 'lucide-react';
import { SiX, SiFacebook, SiInstagram, SiLinkedin, SiYoutube, SiGithub } from 'react-icons/si';

const platforms = [
  {
    name: 'X (Twitter)',
    handle: '@CivicConnect',
    description: 'Follow us for real-time civic updates, news, and community announcements.',
    icon: SiX,
    url: 'https://x.com/civicconnect',
    color: '#000000',
    bg: 'oklch(0.15 0 0 / 0.08)',
    border: 'oklch(0.15 0 0 / 0.15)',
    followers: '8.2K',
  },
  {
    name: 'Facebook',
    handle: 'CivicConnect Official',
    description: 'Join our Facebook community for discussions, events, and local news.',
    icon: SiFacebook,
    url: 'https://facebook.com/civicconnect',
    color: '#1877F2',
    bg: 'oklch(0.55 0.2 260 / 0.08)',
    border: 'oklch(0.55 0.2 260 / 0.2)',
    followers: '15.4K',
  },
  {
    name: 'Instagram',
    handle: '@civicconnect_official',
    description: 'Visual stories from our community — events, milestones, and behind-the-scenes.',
    icon: SiInstagram,
    url: 'https://instagram.com/civicconnect_official',
    color: '#E1306C',
    bg: 'oklch(0.60 0.2 350 / 0.08)',
    border: 'oklch(0.60 0.2 350 / 0.2)',
    followers: '6.8K',
  },
  {
    name: 'LinkedIn',
    handle: 'CivicConnect',
    description: 'Professional updates, partnerships, and civic leadership content.',
    icon: SiLinkedin,
    url: 'https://linkedin.com/company/civicconnect',
    color: '#0A66C2',
    bg: 'oklch(0.50 0.18 255 / 0.08)',
    border: 'oklch(0.50 0.18 255 / 0.2)',
    followers: '4.1K',
  },
  {
    name: 'YouTube',
    handle: 'CivicConnect TV',
    description: 'Watch town halls, tutorials, and community event recordings.',
    icon: SiYoutube,
    url: 'https://youtube.com/@civicconnect',
    color: '#FF0000',
    bg: 'oklch(0.60 0.25 25 / 0.08)',
    border: 'oklch(0.60 0.25 25 / 0.2)',
    followers: '3.5K',
  },
  {
    name: 'GitHub',
    handle: 'civicconnect-org',
    description: 'Explore our open-source civic tech projects and contribute to the community.',
    icon: SiGithub,
    url: 'https://github.com/civicconnect-org',
    color: '#24292F',
    bg: 'oklch(0.25 0 0 / 0.08)',
    border: 'oklch(0.25 0 0 / 0.15)',
    followers: '1.2K',
  },
];

export default function SocialMedia() {
  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Connect With Us
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'oklch(0.88 0.04 195)' }}>
            Follow CivicConnect on social media to stay informed and engaged with your community.
          </p>
        </div>
      </section>

      {/* Social Media Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading text-3xl sm:text-4xl mb-4">Our Social Channels</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Stay connected across all platforms. Join the conversation and be part of the civic movement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <div key={platform.name} className="civic-card p-6 flex flex-col group">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                      style={{ backgroundColor: platform.bg, border: `1px solid ${platform.border}` }}
                    >
                      <Icon size={26} style={{ color: platform.color }} />
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: 'oklch(var(--civic-teal) / 0.08)', color: 'oklch(var(--civic-teal))' }}
                    >
                      {platform.followers} followers
                    </span>
                  </div>

                  <h3 className="font-semibold text-base text-foreground mb-0.5">{platform.name}</h3>
                  <p className="text-xs font-medium mb-3" style={{ color: 'oklch(var(--civic-teal))' }}>
                    {platform.handle}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground flex-1 mb-5">
                    {platform.description}
                  </p>

                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold border-2 transition-all duration-200 hover:text-white"
                    style={{
                      borderColor: platform.color,
                      color: platform.color,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = platform.color;
                      (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                      (e.currentTarget as HTMLAnchorElement).style.color = platform.color;
                    }}
                  >
                    Follow Us
                    <ExternalLink size={14} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Banner */}
      <section className="py-16" style={{ backgroundColor: 'oklch(var(--civic-green-light))' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif', color: 'oklch(var(--civic-teal-dark))' }}
          >
            Join the Conversation
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: 'oklch(var(--civic-slate))' }}>
            Use <strong>#CivicConnect</strong> when sharing community stories, local issues, or civic achievements. Together, we amplify the voices that matter.
          </p>
        </div>
      </section>
    </div>
  );
}
