
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";

const NotFoundPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      
      <main className="flex-1 flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-8xl font-bold text-clinic-primary mb-6">404</h1>
          <div className="w-24 h-1 bg-clinic-accent mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold text-clinic-secondary mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're sorry, the page you are looking for does not exist or has been moved.
          </p>
          <Link to="/">
            <Button size="lg" className="gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
      
      <AppFooter />
    </div>
  );
};

export default NotFoundPage;
