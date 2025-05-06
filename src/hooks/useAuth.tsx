
import { useState, useEffect, createContext, useContext } from "react";

// This is a placeholder that will be replaced by actual Supabase integration
// In a real implementation, these would be connected to Supabase client methods
type User = {
  id: string;
  email: string;
  username: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// This Provider would normally use the Supabase client
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // In a real implementation, this would check for an existing session
  useEffect(() => {
    const storedUser = localStorage.getItem("xenith-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Mock signup function - would use Supabase in actual implementation
  const signUp = async (email: string, password: string, username: string) => {
    setLoading(true);
    try {
      // This simulates the registration process
      console.log("Signing up with:", { email, username });
      
      // In a real implementation, this would be a Supabase call
      // const { data, error } = await supabase.auth.signUp({ email, password });
      
      // For now, we'll simulate a successful registration
      const newUser = {
        id: Date.now().toString(),
        email,
        username: username || email.split('@')[0]
      };
      
      localStorage.setItem("xenith-user", JSON.stringify(newUser));
      setUser(newUser);
    } finally {
      setLoading(false);
    }
  };

  // Mock signin function
  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      console.log("Signing in with:", { email });
      
      // Simulate checking localStorage for user
      const storedUserStr = localStorage.getItem("xenith-user");
      if (!storedUserStr) {
        throw new Error("User not found");
      }
      
      const storedUser = JSON.parse(storedUserStr);
      if (storedUser.email === email) {
        // In a real app with Supabase, we would verify auth here
        setUser(storedUser);
      } else {
        throw new Error("Invalid credentials");
      }
    } finally {
      setLoading(false);
    }
  };

  // Mock signout function
  const signOut = async () => {
    setLoading(true);
    try {
      localStorage.removeItem("xenith-user");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
