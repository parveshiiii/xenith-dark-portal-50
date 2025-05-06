
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const { signUp, signIn, loading } = useAuth();
  const { toast } = useToast();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    // Reset form field
    setEmail("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (isLogin) {
        // For login we'll still need password, we just use a dummy one for now
        // In a real app, you'd implement a proper passwordless login
        await signIn(email, "dummy-password");
        toast({
          title: "Success",
          description: "You have successfully logged in.",
        });
      } else {
        // Simple email-only waitlist signup
        await signUp(email, "dummy-password", email.split('@')[0]);
        toast({
          title: "Success",
          description: "You have been added to the waitlist!",
        });
      }
      onClose();
    } catch (error) {
      console.error("Authentication error:", error);
      toast({
        title: "Error",
        description: isLogin 
          ? "Failed to log in. Please check your email." 
          : "Failed to join waitlist. Please try again later.",
        variant: "destructive",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white border border-slate-200 rounded-lg w-full max-w-md p-6 shadow-xl animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            {isLogin ? "Welcome Back" : "Join XENITH Waitlist"}
          </h2>
          <button 
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-900">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-50 border-slate-200 focus:border-xenith-accent"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full btn-glow-slow"
            disabled={loading}
          >
            {loading ? "Processing..." : isLogin ? "Sign In" : "Join Waitlist"}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={toggleAuthMode}
            className="text-xenith-accent hover:text-xenith-accent-hover text-sm"
          >
            {isLogin 
              ? "Don't have an account? Join the waitlist" 
              : "Already on the waitlist? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
