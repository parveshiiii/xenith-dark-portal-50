
import { useState } from "react";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar openAuthModal={openAuthModal} />

      <div className="pt-32 pb-24 container-fluid">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">About XenArcAI</h1>
          </div>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-xl mb-8 text-slate-600">
              XenArcAI has a great vision for the future of AI. We are dedicated to developing
              cutting-edge artificial intelligence solutions that push the boundaries of what's
              possible while ensuring these powerful technologies remain beneficial, safe,
              and accessible.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-800">Our Mission</h2>
            <p className="mb-6 text-slate-700">
              We believe that advanced AI should be developed safely and its benefits should be 
              distributed broadly. Our team is committed to creating AI systems that augment 
              human capabilities rather than replace them, working towards a future where AI 
              enhances human potential and addresses our most pressing challenges.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-800">Our Approach</h2>
            <p className="mb-6 text-slate-700">
              At XenArcAI, we take a responsible approach to AI development. We emphasize:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700">
              <li>Rigorous safety research to ensure our models are reliable and aligned with human values</li>
              <li>Transparency in our development processes and model capabilities</li>
              <li>Collaborative research with academia and industry partners</li>
              <li>Consideration of the broader societal impacts of our technology</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-800">XENITH-1</h2>
            <p className="text-slate-700">
              Our flagship model, XENITH-1, represents our vision of what advanced AI can achieve. 
              It combines state-of-the-art capabilities with robust safety measures, designed to 
              assist humans across a wide range of applications while minimizing potential risks.
            </p>
            
            <div className="mt-12 p-6 glass-card">
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Join Our Journey</h3>
              <p className="mb-4 text-slate-700">
                We're looking for partners, researchers, and early adopters who share our vision
                for beneficial AI. Join our waitlist to get early access to our technology and
                help shape the future of artificial intelligence.
              </p>
              <Button onClick={openAuthModal} className="btn-glow-slow">
                Join Waitlist
              </Button>
            </div>

            <div className="mt-12 p-6 dark-card">
              <h3 className="text-xl font-semibold mb-4">Our Research Papers</h3>
              <p className="mb-4 text-slate-300">
                Access our groundbreaking research papers and stay updated with our latest discoveries
                in the field of artificial intelligence and large language models.
              </p>
              <Link to="/research-papers">
                <Button className="btn-glow-slow">
                  Access Research Papers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
};

export default About;
