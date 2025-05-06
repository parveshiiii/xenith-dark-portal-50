
import { useState } from "react";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { ArrowDown } from "lucide-react";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuth();

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <div className="min-h-screen bg-xenith-dark flex flex-col">
      <Navbar openAuthModal={openAuthModal} />

      {/* Hero Section */}
      <section className="pt-32 pb-24 container-fluid flex-1 flex flex-col items-center justify-center text-center relative">
        <div className="max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            The Future of AI with <span className="gradient-text">XENITH</span>
          </h1>
          <p className="text-lg md:text-xl text-xenith-text-muted mb-12 max-w-2xl mx-auto">
            Unlock unprecedented intelligence and capabilities with our cutting-edge 
            large language models. Designed for researchers, developers, and enterprises.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            {user ? (
              <Button className="btn-primary">
                Dashboard Access
              </Button>
            ) : (
              <Button onClick={openAuthModal} className="btn-glow">
                Join Waitlist
              </Button>
            )}
            <Button variant="outline" className="btn-secondary">
              Learn More
            </Button>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <a href="#model-section" aria-label="Scroll down">
              <ArrowDown size={32} className="text-xenith-accent" />
            </a>
          </div>
        </div>

        {/* Background gradient elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-xenith-accent rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-[100px]"></div>
        </div>
      </section>

      {/* Model Section */}
      <section id="model-section" className="py-24 bg-xenith-darker relative">
        <div className="container-fluid relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Introducing <span className="gradient-text">XENITH-1</span>
            </h2>
            <p className="text-xenith-text-muted max-w-2xl mx-auto">
              Our flagship large language model setting new standards in AI capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-xenith-dark p-6 rounded-lg border border-xenith-border card-hover">
              <h3 className="text-xl font-semibold mb-3">Advanced Reasoning</h3>
              <p className="text-xenith-text-muted">
                Demonstrates exceptional logical reasoning and problem-solving across complex domains.
              </p>
            </div>
            <div className="bg-xenith-dark p-6 rounded-lg border border-xenith-border card-hover">
              <h3 className="text-xl font-semibold mb-3">Multimodal Understanding</h3>
              <p className="text-xenith-text-muted">
                Comprehensive understanding and generation of text, code, and structured data.
              </p>
            </div>
            <div className="bg-xenith-dark p-6 rounded-lg border border-xenith-border card-hover">
              <h3 className="text-xl font-semibold mb-3">Safe & Aligned</h3>
              <p className="text-xenith-text-muted">
                Built with our proprietary techniques to ensure safety, reliability and alignment.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button onClick={openAuthModal} className="btn-glow">
              Join Waitlist for Early Access
            </Button>
          </div>
        </div>

        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-xenith-dark to-transparent z-0"></div>
      </section>

      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
};

export default Index;
