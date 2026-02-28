import React, { useState } from 'react';
import { useNavigate, Link } from '@tanstack/react-router';
import { Loader2, LogIn, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useLoginCustomer } from '../hooks/useQueries';
import { useCustomerSession } from '../hooks/useCustomerSession';
import FreeConsultationSection from '../components/FreeConsultationSection';

export default function CustomerLogin() {
  const navigate = useNavigate();
  const loginMutation = useLoginCustomer();
  const { setSession } = useCustomerSession();

  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const profile = await loginMutation.mutateAsync({
        email: form.email.trim().toLowerCase(),
        password: form.password,
      });

      setSession({
        customerId: profile.customerId.toString(),
        fullName: profile.fullName,
        email: profile.email,
        mobileNumber: profile.mobileNumber,
        businessName: profile.businessName,
      });

      navigate({ to: '/customer-dashboard' });
    } catch (err: unknown) {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: '#0a1628', minHeight: '100vh' }}>
      {/* Page Hero */}
      <section
        className="py-14 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 100%)' }}
      >
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: 'rgba(245,197,24,0.15)', color: '#f5c518' }}
          >
            Client Portal
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Welcome <span style={{ color: '#f5c518' }}>Back</span>
          </h1>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            Login to your client portal and manage your compliance services.
          </p>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-12 px-4">
        <div className="max-w-md mx-auto">
          <div
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.10)',
            }}
          >
            {/* Branding */}
            <div className="flex flex-col items-center mb-7">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: 'rgba(245,197,24,0.15)' }}
              >
                <LogIn className="w-7 h-7" style={{ color: '#f5c518' }} />
              </div>
              <h2 className="text-xl font-bold text-white">YMW Compliance Services</h2>
              <p className="text-xs mt-1" style={{ color: 'oklch(0.60 0.03 255)' }}>
                Professional compliance and registration service provider
              </p>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div
                className="flex items-center gap-3 p-4 rounded-xl mb-5"
                style={{ backgroundColor: 'rgba(239,68,68,0.10)', border: '1px solid rgba(239,68,68,0.3)' }}
              >
                <AlertCircle className="w-5 h-5 shrink-0" style={{ color: '#ef4444' }} />
                <p className="text-sm font-medium" style={{ color: '#ef4444' }}>
                  {errorMessage}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'oklch(0.75 0.03 255)' }}>
                  Email Address <span style={{ color: '#f5c518' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 rounded-xl text-white placeholder-gray-500 outline-none transition-all"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    minHeight: '48px',
                    fontSize: '15px',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#f5c518')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'oklch(0.75 0.03 255)' }}>
                  Password <span style={{ color: '#f5c518' }}>*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                    className="w-full px-4 pr-12 rounded-xl text-white placeholder-gray-500 outline-none transition-all"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      minHeight: '48px',
                      fontSize: '15px',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#f5c518')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loginMutation.isPending}
                className="w-full py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-200 mt-2"
                style={{
                  backgroundColor: loginMutation.isPending ? 'rgba(245,197,24,0.6)' : '#f5c518',
                  color: '#0a1628',
                  minHeight: '52px',
                  cursor: loginMutation.isPending ? 'not-allowed' : 'pointer',
                }}
              >
                {loginMutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    Login
                  </>
                )}
              </button>
            </form>

            {/* Signup Link */}
            <p className="text-center text-sm mt-5" style={{ color: 'oklch(0.60 0.03 255)' }}>
              New customer?{' '}
              <Link
                to="/customer-signup"
                className="font-semibold hover:underline transition-colors"
                style={{ color: '#f5c518' }}
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </section>

      <FreeConsultationSection />
    </div>
  );
}
