
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavbarProps = {
  openAuthModal: () => void;
};

const Navbar = ({ openAuthModal }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/60 bg-opacity-90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container-fluid py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-xenith-accent">
          XenArcAI
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-slate-800 hover:text-xenith-accent transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-slate-800 hover:text-xenith-accent transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-slate-800 hover:text-xenith-accent transition-colors">
            Contact
          </Link>
          <Button onClick={openAuthModal} variant="outline" className="border-xenith-accent text-xenith-accent hover:bg-xenith-accent hover:text-white">
            Join Waitlist
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden text-slate-800">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="container-fluid py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-slate-800 py-2 hover:text-xenith-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-slate-800 py-2 hover:text-xenith-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-slate-800 py-2 hover:text-xenith-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              onClick={() => {
                openAuthModal();
                setIsMenuOpen(false);
              }} 
              variant="outline" 
              className="border-xenith-accent text-xenith-accent hover:bg-xenith-accent hover:text-white w-full"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
