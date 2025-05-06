
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
      <div className="min-h-screen bg-xenith-dark">
        <Navbar openAuthModal={openAuthModal} />

        <div className="pt-32 pb-24 container-fluid">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
              Research Papers Access
            </h1>
            
            <div className="bg-xenith-darker p-8 rounded-lg border border-xenith-border">
              <p className="mb-8 text-xenith-text-muted">
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
                    className="bg-xenith-dark border-xenith-border"
                  />
                </div>
                
                <Button type="submit" className="btn-glow-slow w-full">
                  Request Access
                </Button>
              </form>
              
              <p className="mt-6 text-sm text-xenith-text-muted">
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
      <div className="min-h-screen bg-xenith-dark">
        <Navbar openAuthModal={openAuthModal} />

        <div className="pt-32 pb-24 container-fluid">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
              Thank You!
            </h1>
            
            <div className="bg-xenith-darker p-8 rounded-lg border border-xenith-border">
              <p className="mb-8 text-xenith-text">
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
    <div className="min-h-screen bg-xenith-dark">
      <Navbar openAuthModal={openAuthModal} />

      <div className="pt-32 pb-24 container-fluid">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            Our Research Papers
          </h1>
          
          <p className="mb-8 text-xenith-text-muted">
            Welcome {user.username}. Thank you for your interest in our research. 
            Our team will contact you shortly with the requested papers.
          </p>
          
          <div className="bg-xenith-darker p-6 rounded-lg border border-xenith-border mb-6">
            <h3 className="text-xl font-semibold mb-2">
              We will reach you within few hours
            </h3>
            <p className="text-xenith-text-muted">
              Our team is preparing the papers for your review. You will receive an email 
              with access instructions shortly.
            </p>
          </div>
          
          <Button onClick={() => navigate("/")} className="btn-secondary">
            Return Home
          </Button>
        </div>
      </div>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
};

export default ResearchPapers;
