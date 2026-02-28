import React from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Users, Award, Clock, Target, Heart, Shield, Zap, Star } from 'lucide-react';
import FreeConsultationSection from '../components/FreeConsultationSection';

const CORE_VALUES = [
  { icon: <Target className="w-6 h-6" />, title: 'Mission-Driven', desc: 'We exist to simplify compliance for every Indian business, big or small.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Client-First', desc: 'Your success is our success. We go above and beyond for every client.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Integrity', desc: 'Transparent pricing, honest advice, and ethical practices always.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Speed', desc: 'Fast turnaround times without compromising on quality or accuracy.' },
  { icon: <Award className="w-6 h-6" />, title: 'Excellence', desc: 'Certified professionals delivering world-class compliance services.' },
  { icon: <Star className="w-6 h-6" />, title: 'Innovation', desc: 'Leveraging technology to make compliance faster and more affordable.' },
];

const TEAM = [
  { name: 'Rajesh Kumar', role: 'Founder & CEO', exp: '15+ years in compliance' },
  { name: 'Priya Sharma', role: 'Head of GST', exp: 'CA with 10+ years experience' },
  { name: 'Amit Singh', role: 'Legal Advisor', exp: 'CS & LLB, 12+ years' },
  { name: 'Sunita Devi', role: 'Client Relations', exp: '8+ years in client services' },
];

export default function About() {
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
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            India's Trusted <span style={{ color: '#f5c518' }}>Compliance Partner</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            YMW Compliance Services has been helping businesses across India navigate the complex world of regulatory compliance since 2014.
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

      {/* Stats */}
      <section className="py-12 px-4" style={{ backgroundColor: '#0d1f3c' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '5000+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
            { value: '15+', label: 'Services', icon: <Award className="w-6 h-6" /> },
            { value: '10+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> },
            { value: '28+', label: 'States Served', icon: <Target className="w-6 h-6" /> },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 p-6 rounded-2xl text-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span style={{ color: '#f5c518' }}>{stat.icon}</span>
              <span className="text-3xl font-extrabold text-white">{stat.value}</span>
              <span className="text-sm text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0a1628' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our <span style={{ color: '#f5c518' }}>Mission</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            To empower every Indian entrepreneur and business owner by making compliance simple, affordable, and accessible. We believe that no business should fail due to regulatory complexity — that's why we're here.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0d1f3c' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our <span style={{ color: '#f5c518' }}>Core Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(245,197,24,0.15)', color: '#f5c518' }}
                >
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0a1628' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Meet Our <span style={{ color: '#f5c518' }}>Expert Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-2xl text-center"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  style={{ backgroundColor: 'rgba(245,197,24,0.15)', color: '#f5c518' }}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-base font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm font-medium mb-1" style={{ color: '#f5c518' }}>{member.role}</p>
                <p className="text-xs text-gray-400">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation Section */}
      <FreeConsultationSection />
    </div>
  );
}
