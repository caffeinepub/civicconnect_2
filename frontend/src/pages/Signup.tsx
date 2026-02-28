import React, { useEffect, useState } from 'react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import { LogIn, LogOut, Shield, Loader2 } from 'lucide-react';
import { useGetCallerUserProfile, useSignUp } from '../hooks/useQueries';
import ProfileSetupModal from '../components/ProfileSetupModal';
import FreeConsultationSection from '../components/FreeConsultationSection';

export default function Signup() {
  const { login, clear, loginStatus, identity, isInitializing } = useInternetIdentity();
  const queryClient = useQueryClient();
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();
  const signUp = useSignUp();
  const [profileModalDismissed, setProfileModalDismissed] = useState(false);

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';
  const showProfileSetup =
    isAuthenticated && !profileLoading && isFetched && userProfile === null && !profileModalDismissed;

  // Register user on first login
  useEffect(() => {
    if (isAuthenticated && signUp.isIdle) {
      signUp.mutate();
    }
  }, [isAuthenticated]);

  const handleAuth = async () => {
    if (isAuthenticated) {
      await clear();
      queryClient.clear();
    } else {
      try {
        await login();
      } catch (error: unknown) {
        if (error instanceof Error && error.message === 'User is already authenticated') {
          await clear();
          setTimeout(() => login(), 300);
        }
      }
    }
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
            Account
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {isAuthenticated ? 'Your ' : 'Sign In to Your '}
            <span style={{ color: '#f5c518' }}>Account</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {isAuthenticated
              ? 'Manage your compliance services and track your requests.'
              : 'Sign in to access your compliance dashboard and track your service requests.'}
          </p>
        </div>
      </section>

      {/* Auth Content */}
      <section className="py-16 px-4" style={{ backgroundColor: '#0d1f3c' }}>
        <div className="max-w-md mx-auto">
          <div
            className="p-8 rounded-2xl"
            style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {isInitializing ? (
              <div className="flex flex-col items-center gap-4 py-8">
                <Loader2
                  className="w-10 h-10 animate-spin"
                  style={{ color: '#f5c518' }}
                />
                <p className="text-gray-400 text-sm">Initializing...</p>
              </div>
            ) : isAuthenticated && userProfile ? (
              <div className="flex flex-col items-center gap-6 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold"
                  style={{ backgroundColor: 'rgba(245,197,24,0.15)', color: '#f5c518' }}
                >
                  {userProfile.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{userProfile.name}</h2>
                  <p className="text-gray-400 text-sm">{userProfile.email}</p>
                </div>
                <div
                  className="w-full p-4 rounded-xl flex items-center gap-3"
                  style={{ backgroundColor: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.2)' }}
                >
                  <Shield className="w-5 h-5 flex-shrink-0" style={{ color: '#f5c518' }} />
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Principal ID</p>
                    <p className="text-xs text-gray-300 font-mono break-all">
                      {identity?.getPrincipal().toString()}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleAuth}
                  className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity min-h-[52px]"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </button>
              </div>
            ) : isAuthenticated && profileLoading ? (
              <div className="flex flex-col items-center gap-4 py-8">
                <div
                  className="w-10 h-10 rounded-full border-4 border-t-transparent animate-spin"
                  style={{ borderColor: '#f5c518', borderTopColor: 'transparent' }}
                />
                <p className="text-gray-400 text-sm">Loading your profile...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-6 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(245,197,24,0.15)' }}
                >
                  <Shield className="w-10 h-10" style={{ color: '#f5c518' }} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Sign In / Sign Up</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Use Internet Identity for secure, passwordless authentication. No personal data is stored by the identity provider.
                  </p>
                </div>
                <button
                  onClick={handleAuth}
                  disabled={isLoggingIn}
                  className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60 min-h-[52px]"
                  style={{ backgroundColor: '#f5c518', color: '#0a1628' }}
                >
                  {isLoggingIn ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5" />
                      Sign In with Internet Identity
                    </>
                  )}
                </button>
                <p className="text-xs text-gray-500">
                  By signing in, you agree to our Terms of Service. Your identity is secured by the Internet Computer blockchain.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Profile Setup Modal */}
      <ProfileSetupModal
        open={showProfileSetup}
        onComplete={() => setProfileModalDismissed(true)}
      />

      {/* Free Consultation Section */}
      <FreeConsultationSection />
    </div>
  );
}
