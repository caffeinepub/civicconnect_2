import React, { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useSubmitConsultationRequest } from '../hooks/useQueries';
import { getUTMSource } from '../utils/urlParams';

const SERVICES = [
  'Business Registration',
  'GST Registration & Filing',
  'ISO Certification',
  'Trademark Registration',
  'FSSAI Registration',
  'MSME/Udyam Registration',
  'PF & ESI Registration',
  'Income Tax Filing',
  'ROC Compliance',
  'Digital Signature Certificate',
  'Import Export Code (IEC)',
  'Shop & Establishment Act',
  'Professional Tax Registration',
  'Labour License',
  'Other Compliance Services',
];

export default function FreeConsultationSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    selectedService: '',
    cityState: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submittedId, setSubmittedId] = useState('');

  const submitMutation = useSubmitConsultationRequest();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber || !formData.selectedService || !formData.cityState) return;

    try {
      const utmSource = getUTMSource();
      const id = await submitMutation.mutateAsync({
        ...formData,
        utmSource,
      });
      setSubmittedId(id);
      setSubmitted(true);
    } catch {
      // error handled by mutation state
    }
  };

  return (
    <section
      id="free-consultation"
      className="py-16 px-4"
      style={{ backgroundColor: '#0a1628' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: 'rgba(245,197,24,0.15)', color: '#f5c518' }}
          >
            Free Consultation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get Your <span style={{ color: '#f5c518' }}>Free Consultation</span> Today
          </h2>
          <p className="text-gray-400 text-base">
            Talk to our compliance experts — 100% Free &amp; Confidential
          </p>
        </div>

        {/* Form Card */}
        <div
          className="rounded-2xl p-6 md:p-8 shadow-2xl"
          style={{
            backgroundColor: '#0d1f3c',
            border: '1px solid rgba(245,197,24,0.2)',
          }}
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle className="w-16 h-16" style={{ color: '#f5c518' }} />
              <h3 className="text-2xl font-bold text-white">Thank You!</h3>
              <p className="text-gray-300 max-w-sm">
                Your consultation request has been submitted successfully. Our expert team will contact you within 24 hours.
              </p>
              {submittedId && (
                <div
                  className="px-4 py-2 rounded-lg text-sm"
                  style={{ backgroundColor: 'rgba(245,197,24,0.1)', color: '#f5c518' }}
                >
                  Reference ID: {submittedId.slice(-8)}
                </div>
              )}
              <button
                onClick={() => {
                  setSubmitted(false);
                  setSubmittedId('');
                  setFormData({ fullName: '', phoneNumber: '', selectedService: '', cityState: '' });
                }}
                className="mt-2 text-sm underline text-gray-400 hover:text-white transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-300">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="px-4 py-3 rounded-lg text-sm text-white placeholder-gray-400 outline-none focus:ring-2 min-h-[44px]"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-300">Phone Number *</label>
                <div className="flex">
                  <span
                    className="flex items-center px-3 rounded-l-lg text-sm font-medium text-gray-300 min-h-[44px]"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.12)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRight: 'none',
                    }}
                  >
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="flex-1 px-4 py-3 rounded-r-lg text-sm text-white placeholder-gray-400 outline-none min-h-[44px]"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderLeft: 'none',
                    }}
                    maxLength={10}
                  />
                </div>
              </div>

              {/* Select Service */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-300">Select Service *</label>
                <select
                  required
                  value={formData.selectedService}
                  onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                  className="px-4 py-3 rounded-lg text-sm text-white outline-none min-h-[44px]"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <option value="" style={{ backgroundColor: '#0d1f3c' }}>
                    Choose a service...
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service} style={{ backgroundColor: '#0d1f3c' }}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* City/State */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-300">City / State *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dhanbad, Jharkhand"
                  value={formData.cityState}
                  onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                  className="px-4 py-3 rounded-lg text-sm text-white placeholder-gray-400 outline-none min-h-[44px]"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                />
              </div>

              {/* Error */}
              {submitMutation.isError && (
                <div className="md:col-span-2">
                  <p className="text-xs text-red-400">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}

              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 min-h-[52px]"
                  style={{ backgroundColor: '#f5c518', color: '#0a1628' }}
                >
                  {submitMutation.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Get Free Consultation — It\'s Free!'
                  )}
                </button>
                <p className="text-center text-xs text-gray-500 mt-2">
                  🔒 100% Free &amp; Confidential. No spam, ever.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
