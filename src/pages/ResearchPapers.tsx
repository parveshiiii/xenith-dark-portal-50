
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const ResearchPapers = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // In a real app, you would send this email to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
    toast.success("Thank you! We will reach you within few hours.");
  };

  // If the user is not logged in, show login prompt or email form
  if (!user && !submitted) {
    return (
      <div className="min-h-screen bg-slate-100">
        <Navbar openAuthModal={openAuthModal} />

        <div className="pt-32 pb-24 container-fluid">
          <div className="max-w-md mx-auto text-center">
            <img 
              src="/lovable-uploads/0744e48b-85d0-4203-b5b3-72a53c2e01f2.png" 
              alt="XenArcAI Logo" 
              className="h-12 mx-auto mb-6"
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
              Research Papers Access
            </h1>
            
            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
              <p className="mb-8 text-slate-600">
                Please provide your email address to gain access to our research papers. 
                We'll send you access details shortly.
              </p>
              
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input
                    id="email"
                    type="email" 
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-slate-50 border-slate-200"
                  />
                </div>
                
                <Button type="submit" className="btn-glow-slow w-full">
                  Request Access
                </Button>
              </form>
              
              <p className="mt-6 text-sm text-slate-500">
                Already have an account? 
                <Button variant="link" onClick={openAuthModal} className="text-xenith-accent p-0 ml-1">
                  Log in
                </Button>
              </p>
            </div>
          </div>
        </div>
        
        <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
      </div>
    );
  }

  // After submission, show thank you message
  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-100">
        <Navbar openAuthModal={openAuthModal} />

        <div className="pt-32 pb-24 container-fluid">
          <div className="max-w-md mx-auto text-center">
            <img 
              src="/lovable-uploads/0744e48b-85d0-4203-b5b3-72a53c2e01f2.png" 
              alt="XenArcAI Logo" 
              className="h-12 mx-auto mb-6"
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
              Thank You!
            </h1>
            
            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
              <p className="mb-8 text-slate-700">
                We've received your request for access to our research papers.
                We will reach you within few hours with further instructions.
              </p>
              
              <Button onClick={() => navigate("/")} className="btn-primary">
                Return Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If user is logged in, show papers (for now just a placeholder)
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar openAuthModal={openAuthModal} />

      <div className="pt-32 pb-24 container-fluid">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <img 
              src="/lovable-uploads/0744e48b-85d0-4203-b5b3-72a53c2e01f2.png" 
              alt="XenArcAI Logo" 
              className="h-12 mx-auto mb-6"
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
              Our Research Papers
            </h1>
          </div>
          
          <p className="mb-8 text-slate-600 text-center">
            Welcome {user.username}. Thank you for your interest in our research. 
            Our team will contact you shortly with the requested papers.
          </p>
          
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm mb-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-slate-800">
              We will reach you within few hours
            </h3>
            <p className="text-slate-600">
              Our team is preparing the papers for your review. You will receive an email 
              with access instructions shortly.
            </p>
          </div>
          
          <div className="text-center">
            <Button onClick={() => navigate("/")} className="btn-secondary">
              Return Home
            </Button>
          </div>
        </div>
      </div>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
};

export default ResearchPapers;
