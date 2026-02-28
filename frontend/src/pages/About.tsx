import { Eye, Target, Users, Lightbulb, Scale, Heart } from 'lucide-react';

const coreValues = [
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We believe in open governance and making information accessible to every community member.',
    color: 'oklch(var(--civic-teal))',
    bg: 'oklch(var(--civic-teal) / 0.08)',
  },
  {
    icon: Scale,
    title: 'Accountability',
    description: 'Holding institutions and individuals responsible for their actions and commitments to the public.',
    color: 'oklch(var(--civic-green))',
    bg: 'oklch(var(--civic-green) / 0.08)',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Fostering a sense of belonging and collective responsibility among all community members.',
    color: 'oklch(0.55 0.15 250)',
    bg: 'oklch(0.55 0.15 250 / 0.08)',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Embracing technology and creative solutions to improve civic engagement and public services.',
    color: 'oklch(0.60 0.16 30)',
    bg: 'oklch(0.60 0.16 30 / 0.08)',
  },
  {
    icon: Heart,
    title: 'Inclusivity',
    description: 'Ensuring every voice is heard and every community member has equal access to civic resources.',
    color: 'oklch(0.60 0.18 350)',
    bg: 'oklch(0.60 0.18 350 / 0.08)',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'Measuring success by the tangible improvements we create in people\'s daily lives.',
    color: 'oklch(0.55 0.14 280)',
    bg: 'oklch(0.55 0.14 280 / 0.08)',
  },
];

const team = [
  { name: 'Sarah Mitchell', role: 'Executive Director', initials: 'SM' },
  { name: 'James Okafor', role: 'Community Outreach Lead', initials: 'JO' },
  { name: 'Priya Sharma', role: 'Technology Director', initials: 'PS' },
  { name: 'Carlos Rivera', role: 'Policy Advisor', initials: 'CR' },
];

export default function About() {
  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            About CivicConnect
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'oklch(0.88 0.04 195)' }}>
            Learn about our mission, our team, and the values that drive everything we do.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
                style={{ backgroundColor: 'oklch(var(--civic-teal) / 0.1)', color: 'oklch(var(--civic-teal))' }}
              >
                Our Mission
              </div>
              <h2 className="section-heading text-3xl sm:text-4xl mb-6">
                Empowering Citizens, Strengthening Democracy
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                CivicConnect was founded on the belief that a healthy democracy requires active, informed, and engaged citizens. We provide the digital infrastructure that makes civic participation accessible to everyone — regardless of background, technical ability, or location.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our platform bridges the gap between government institutions and the communities they serve, creating a two-way channel for communication, feedback, and collaborative problem-solving.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Founded', value: '2020' },
                { label: 'Cities Served', value: '45+' },
                { label: 'Active Users', value: '12K+' },
                { label: 'Issues Resolved', value: '500+' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="civic-card p-6 text-center"
                >
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: 'oklch(var(--civic-teal))', fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20" style={{ backgroundColor: 'oklch(var(--civic-warm))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading text-3xl sm:text-4xl mb-4">Our Core Values</h2>
            <p className="section-subheading max-w-xl mx-auto">
              These principles guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="civic-card p-6 group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: value.bg }}
                  >
                    <Icon size={22} style={{ color: value.color }} />
                  </div>
                  <h3 className="font-semibold text-base mb-2 text-foreground">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading text-3xl sm:text-4xl mb-4">Meet Our Team</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Dedicated professionals committed to making civic engagement accessible and impactful.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="civic-card p-6 text-center group">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white transition-transform duration-200 group-hover:scale-105"
                  style={{ backgroundColor: 'oklch(var(--civic-teal))' }}
                >
                  {member.initials}
                </div>
                <h3 className="font-semibold text-base text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
