
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
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { signUp, signIn, loading } = useAuth();
  const { toast } = useToast();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    // Reset form fields
    setEmail("");
    setPassword("");
    setUsername("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (isLogin) {
        await signIn(email, password);
        toast({
          title: "Success",
          description: "You have successfully logged in.",
        });
      } else {
        if (!username.trim()) {
          toast({
            title: "Error",
            description: "Username is required.",
            variant: "destructive",
          });
          return;
        }
        
        await signUp(email, password, username);
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
          ? "Failed to log in. Please check your credentials." 
          : "Failed to join waitlist. Please try again later.",
        variant: "destructive",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-xenith-darker border border-xenith-border rounded-lg w-full max-w-md p-6 shadow-xl animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-xenith-text">
            {isLogin ? "Welcome Back" : "Join XENITH Waitlist"}
          </h2>
          <button 
            onClick={onClose}
            className="text-xenith-text-muted hover:text-xenith-text transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-xenith-text">
                Username
              </label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-xenith-dark border-xenith-border focus:border-xenith-accent"
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-xenith-text">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-xenith-dark border-xenith-border focus:border-xenith-accent"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-xenith-text">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-xenith-dark border-xenith-border focus:border-xenith-accent"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full btn-glow"
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
