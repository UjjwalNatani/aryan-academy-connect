
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-20">
      <div className="text-center max-w-lg mx-auto px-6">
        <h1 className="text-8xl font-bold text-school-blue mb-6">404</h1>
        <p className="text-5xl font-bold text-gray-700 mb-6">Page Not Found</p>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="bg-school-blue text-white py-3 px-8 rounded-md font-semibold hover:bg-school-dark transition-colors inline-flex items-center"
        >
          <Home size={18} className="mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
