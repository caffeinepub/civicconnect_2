import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import React, { lazy, Suspense, useEffect } from "react";
import ConsultationPopup from "./components/ConsultationPopup";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "./components/Footer";
import LoadingFallback from "./components/LoadingFallback";
import Navigation from "./components/Navigation";
import { captureUTMParams } from "./utils/urlParams";

// Lazy-loaded page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Grievance = lazy(() => import("./pages/Grievance"));
const SocialMedia = lazy(() => import("./pages/SocialMedia"));
const Signup = lazy(() => import("./pages/Signup"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const ConfidentialityPolicy = lazy(
  () => import("./pages/ConfidentialityPolicy"),
);
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const CustomerSignup = lazy(() => import("./pages/CustomerSignup"));
const CustomerLogin = lazy(() => import("./pages/CustomerLogin"));
const CustomerDashboard = lazy(() => import("./pages/CustomerDashboard"));
const AdminPanel = lazy(() => import("./pages/AdminPanel"));

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
        backgroundColor: "#0a1628",
        fontFamily: "'Inter', 'Poppins', sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
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
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: Blog,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const grievanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/grievance",
  component: Grievance,
});

const socialMediaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/social-media",
  component: SocialMedia,
});

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: Signup,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms-and-conditions",
  component: TermsAndConditions,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy-policy",
  component: PrivacyPolicy,
});

const refundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/refund-policy",
  component: RefundPolicy,
});

const confidentialityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/confidentiality-policy",
  component: ConfidentialityPolicy,
});

const disclaimerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/disclaimer",
  component: Disclaimer,
});

const customerSignupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/customer-signup",
  component: CustomerSignup,
});

const customerLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/customer-login",
  component: CustomerLogin,
});

const customerDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/customer-dashboard",
  component: CustomerDashboard,
});

const adminPanelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin-panel",
  component: AdminPanel,
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
  termsRoute,
  privacyRoute,
  refundRoute,
  confidentialityRoute,
  disclaimerRoute,
  customerSignupRoute,
  customerLoginRoute,
  customerDashboardRoute,
  adminPanelRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
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
