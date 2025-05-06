
import { useState } from "react";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Contact = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <div className="min-h-screen bg-xenith-dark">
      <Navbar openAuthModal={openAuthModal} />

      <div className="pt-32 pb-24 container-fluid">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xenith-text-muted mb-8">
                Have questions about XenArcAI or our XENITH-1 model? 
                We'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-xenith-accent mt-1" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-xenith-text-muted">We'll respond within 48 hours</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Founder</h3>
                  <a 
                    href="mailto:founder@xenarcai.com" 
                    className="text-xenith-accent hover:text-xenith-accent-hover"
                  >
                    founder@xenarcai.com
                  </a>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Co-Founder</h3>
                  <a 
                    href="mailto:cofounder@xenarcai.com" 
                    className="text-xenith-accent hover:text-xenith-accent-hover"
                  >
                    cofounder@xenarcai.com
                  </a>
                </div>

                <div className="pt-4">
                  <h3 className="font-medium mb-2">Location</h3>
                  <p>Haryana, India</p>
                </div>
              </div>
            </div>
            
            <div className="bg-xenith-darker p-8 rounded-lg border border-xenith-border">
              <h2 className="text-2xl font-bold mb-6">Join Our Waitlist</h2>
              <p className="mb-6">
                Want early access to XENITH-1? Sign up for our waitlist to be among the first to 
                experience our groundbreaking AI technology.
              </p>
              <Button onClick={openAuthModal} className="btn-glow w-full">
                Join Waitlist
              </Button>
              
              <div className="mt-8 pt-8 border-t border-xenith-border">
                <h3 className="font-medium mb-4">Partnership Inquiries</h3>
                <p className="text-xenith-text-muted mb-4">
                  Interested in partnering with XenArcAI? We're open to collaborations 
                  with researchers, businesses, and organizations.
                </p>
                <a 
                  href="mailto:partnerships@xenarcai.com" 
                  className="text-xenith-accent hover:text-xenith-accent-hover"
                >
                  partnerships@xenarcai.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
};

export default Contact;
