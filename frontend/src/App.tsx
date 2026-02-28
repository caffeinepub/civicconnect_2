import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Grievance from './pages/Grievance';
import SocialMedia from './pages/SocialMedia';
import Signup from './pages/Signup';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const rootRoute = createRootRoute({ component: Layout });

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: About });
const servicesRoute = createRoute({ getParentRoute: () => rootRoute, path: '/services', component: Services });
const blogRoute = createRoute({ getParentRoute: () => rootRoute, path: '/blog', component: Blog });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: Contact });
const grievanceRoute = createRoute({ getParentRoute: () => rootRoute, path: '/grievance', component: Grievance });
const socialMediaRoute = createRoute({ getParentRoute: () => rootRoute, path: '/social-media', component: SocialMedia });
const signupRoute = createRoute({ getParentRoute: () => rootRoute, path: '/signup', component: Signup });

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
  return <RouterProvider router={router} />;
}
