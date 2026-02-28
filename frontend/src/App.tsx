import React, { lazy, Suspense, useEffect } from 'react';
import { createRootRoute, createRoute, createRouter, RouterProvider, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ConsultationPopup from './components/ConsultationPopup';
import LoadingFallback from './components/LoadingFallback';
import { captureUTMParams } from './utils/urlParams';

// Lazy-loaded page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Grievance = lazy(() => import('./pages/Grievance'));
const SocialMedia = lazy(() => import('./pages/SocialMedia'));
const Signup = lazy(() => import('./pages/Signup'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

function Layout() {
  useEffect(() => {
    captureUTMParams();
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#0a1628',
        fontFamily: "'Inter', 'Poppins', sans-serif",
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navigation />
      <main style={{ flex: 1 }}>
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingCTA />
      <ConsultationPopup />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: Services,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: Blog,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

const grievanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/grievance',
  component: Grievance,
});

const socialMediaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/social-media',
  component: SocialMedia,
});

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signup',
  component: Signup,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  blogRoute,
  contactRoute,
  grievanceRoute,
  socialMediaRoute,
  signupRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
