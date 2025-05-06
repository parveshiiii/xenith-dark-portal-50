
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="text-center p-8">
        <img 
          src="/lovable-uploads/0744e48b-85d0-4203-b5b3-72a53c2e01f2.png" 
          alt="XenArcAI Logo" 
          className="h-10 mx-auto mb-6"
        />
        <h1 className="text-6xl font-bold mb-4 text-slate-800">404</h1>
        <p className="text-xl text-slate-600 mb-8">Oops! Page not found</p>
        <Link to="/">
          <Button className="btn-primary">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
