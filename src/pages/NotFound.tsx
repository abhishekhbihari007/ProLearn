import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0);
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div className="flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div className="text-center max-w-2xl mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Oops! Page not found</h2>
              <p className="text-lg text-gray-600 mb-8">
                The page you're looking for doesn't exist or has been moved. Let's get you back on track!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="primary" size="lg" className="group">
                  <Home className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Return to Home
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.history.back()}
                className="group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </Button>
            </div>
            
            <div className="mt-12 text-sm text-gray-500">
              <p>If you believe this is an error, please contact our support team.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
