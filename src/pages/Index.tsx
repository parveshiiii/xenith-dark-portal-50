
import { useState } from "react";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuth();

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar openAuthModal={openAuthModal} />

      {/* Hero Section */}
      <section className="pt-32 pb-24 container-fluid flex-1 flex flex-col items-center justify-center text-center relative">
        <div className="max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-slate-900">
            The Future of AI with <span className="gradient-text">XenArcAI</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Unlock unprecedented intelligence and capabilities with our cutting-edge 
            large language models. Designed for researchers, developers, and enterprises.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            {user ? (
              <Button className="btn-primary">
                Dashboard Access
              </Button>
            ) : (
              <Button onClick={openAuthModal} className="btn-glow-slow">
                Join Waitlist
              </Button>
            )}
            <Link to="/about">
              <Button variant="outline" className="btn-secondary">
                Learn More
              </Button>
            </Link>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <a href="#model-section" aria-label="Scroll down">
              <ArrowDown size={32} className="text-xenith-accent" />
            </a>
          </div>
        </div>

        {/* Background gradient elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-xenith-accent rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-[100px]"></div>
        </div>
      </section>

      {/* Model Section */}
      <section id="model-section" className="py-24 bg-white relative">
        <div className="container-fluid relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
              Introducing <span className="gradient-text">XENITH-1</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our flagship large language model setting new standards in AI capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="paper-card p-6 card-hover">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Advanced Reasoning</h3>
              <p className="text-slate-600">
                Demonstrates exceptional logical reasoning and problem-solving across complex domains.
              </p>
            </div>
            <div className="glass-card p-6 card-hover">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Multimodal Understanding</h3>
              <p className="text-slate-600">
                Comprehensive understanding and generation of text, code, and structured data.
              </p>
            </div>
            <div className="texture-card p-6 card-hover">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Safe & Aligned</h3>
              <p className="text-slate-600">
                Built with our proprietary techniques to ensure safety, reliability and alignment.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button onClick={openAuthModal} className="btn-glow-slow">
              Join Waitlist for Early Access
            </Button>
          </div>
        </div>

        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-transparent z-0"></div>
      </section>

      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
};

export default Index;
