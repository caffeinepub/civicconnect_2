import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { LogIn, LogOut, Loader2, UserCircle, ShieldCheck, Users } from 'lucide-react';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { useGetCallerUserProfile, useSignUp } from '@/hooks/useQueries';
import ProfileSetupModal from '@/components/ProfileSetupModal';
import { Button } from '@/components/ui/button';

export default function Signup() {
  const { login, clear, loginStatus, identity, isLoggingIn, isInitializing } = useInternetIdentity();
  const queryClient = useQueryClient();

  const isAuthenticated = !!identity;

  const {
    data: userProfile,
    isLoading: profileLoading,
    isFetched: profileFetched,
  } = useGetCallerUserProfile();

  const signUp = useSignUp();

  // Register user on first login
  useEffect(() => {
    if (isAuthenticated && signUp.isIdle) {
      signUp.mutate();
    }
  }, [isAuthenticated]);

  const showProfileSetup =
    isAuthenticated && !profileLoading && profileFetched && userProfile === null;

  const handleLogin = async () => {
    try {
      await login();
    } catch (error: unknown) {
      if (error instanceof Error && error.message === 'User is already authenticated') {
        await clear();
        setTimeout(() => login(), 300);
      }
    }
  };

  const handleLogout = async () => {
    await clear();
    queryClient.clear();
  };

  const principalStr = identity?.getPrincipal().toString();

  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            {isAuthenticated ? 'Welcome Back!' : 'Join CivicConnect'}
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'oklch(0.88 0.04 195)' }}>
            {isAuthenticated
              ? 'You are signed in and ready to engage with your community.'
              : 'Create your account to access all civic services and community features.'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Benefits Panel */}
            <div className="space-y-6">
              <div>
                <h2 className="section-heading text-2xl sm:text-3xl mb-3">
                  {isAuthenticated ? 'Your Account' : 'Why Sign Up?'}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {isAuthenticated
                    ? 'Manage your profile and access all CivicConnect features.'
                    : 'Join thousands of community members making a difference.'}
                </p>
              </div>

              {!isAuthenticated && (
                <div className="space-y-4">
                  {[
                    {
                      icon: ShieldCheck,
                      title: 'Secure & Private',
                      desc: 'Internet Identity provides cryptographic security without passwords.',
                      color: 'oklch(var(--civic-teal))',
                      bg: 'oklch(var(--civic-teal) / 0.1)',
                    },
                    {
                      icon: Users,
                      title: 'Community Access',
                      desc: 'Participate in forums, submit grievances, and engage with local government.',
                      color: 'oklch(var(--civic-green))',
                      bg: 'oklch(var(--civic-green) / 0.1)',
                    },
                    {
                      icon: UserCircle,
                      title: 'Personalized Experience',
                      desc: 'Get updates and notifications tailored to your community and interests.',
                      color: 'oklch(0.55 0.15 250)',
                      bg: 'oklch(0.55 0.15 250 / 0.1)',
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: item.bg }}
                        >
                          <Icon size={18} style={{ color: item.color }} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-0.5">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {isAuthenticated && userProfile && (
                <div className="civic-card p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white"
                      style={{ backgroundColor: 'oklch(var(--civic-teal))' }}
                    >
                      {userProfile.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-base">{userProfile.name}</p>
                      <p className="text-sm text-muted-foreground">{userProfile.email}</p>
                    </div>
                  </div>
                  <div
                    className="rounded-lg px-4 py-3"
                    style={{ backgroundColor: 'oklch(var(--civic-teal) / 0.06)' }}
                  >
                    <p className="text-xs text-muted-foreground mb-1 font-semibold uppercase tracking-wider">Principal ID</p>
                    <p className="text-xs font-mono break-all text-foreground">{principalStr}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Auth Card */}
            <div className="civic-card p-8">
              {isInitializing ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <Loader2 size={32} className="animate-spin" style={{ color: 'oklch(var(--civic-teal))' }} />
                  <p className="text-sm text-muted-foreground">Initializing...</p>
                </div>
              ) : isAuthenticated ? (
                <div className="text-center space-y-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                    style={{ backgroundColor: 'oklch(var(--civic-green) / 0.12)' }}
                  >
                    {userProfile ? (
                      <span className="text-3xl font-bold" style={{ color: 'oklch(var(--civic-green))' }}>
                        {userProfile.name.charAt(0).toUpperCase()}
                      </span>
                    ) : (
                      <UserCircle size={40} style={{ color: 'oklch(var(--civic-green))' }} />
                    )}
                  </div>

                  <div>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ fontFamily: 'Playfair Display, Georgia, serif', color: 'oklch(var(--civic-teal-dark))' }}
                    >
                      {profileLoading
                        ? 'Loading...'
                        : userProfile
                        ? `Welcome, ${userProfile.name}!`
                        : 'Welcome!'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      You're signed in to CivicConnect.
                    </p>
                  </div>

                  <div
                    className="rounded-xl px-5 py-4 text-left"
                    style={{ backgroundColor: 'oklch(var(--civic-teal) / 0.06)', border: '1px solid oklch(var(--civic-teal) / 0.15)' }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      Account Status
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-foreground">Active & Verified</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full rounded-full border-2"
                    style={{ borderColor: 'oklch(var(--destructive))', color: 'oklch(var(--destructive))' }}
                  >
                    <LogOut size={16} />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                    style={{ backgroundColor: 'oklch(var(--civic-teal) / 0.1)' }}
                  >
                    <UserCircle size={40} style={{ color: 'oklch(var(--civic-teal))' }} />
                  </div>

                  <div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: 'Playfair Display, Georgia, serif', color: 'oklch(var(--civic-teal-dark))' }}
                    >
                      Sign Up or Log In
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Use Internet Identity for secure, passwordless authentication. No personal data is stored by the identity provider.
                    </p>
                  </div>

                  <Button
                    onClick={handleLogin}
                    disabled={isLoggingIn}
                    className="w-full rounded-full py-3 text-base font-semibold"
                    style={{ backgroundColor: 'oklch(var(--civic-teal))', color: 'white' }}
                  >
                    {isLoggingIn ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        <LogIn size={18} />
                        Sign Up / Log In with Internet Identity
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                    Your identity is secured by the Internet Computer blockchain.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ProfileSetupModal
        open={showProfileSetup}
        onComplete={() => queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] })}
      />
    </div>
  );
}
