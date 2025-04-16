import React, { useEffect, useState, useContext } from "react";
import { auth } from "./../../firebase/config";
import { onAuthStateChanged, User } from "firebase/auth";

// Define the type of the context value
interface AuthContextType {
  currentUser: User | null;
  userLoggedIn: boolean;
  loading: boolean;
}

// Create the context with a proper default (or use `undefined`)
const authContext = React.createContext<AuthContextType | undefined>(undefined);

// Custom hook to use auth context
export function useAuth(): AuthContextType {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Provider component
export function AuthProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe; // Clean up on unmount
  }, []);

  async function initializeUser(user: User | null) {
    if (user) {
      setCurrentUser(user);
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  const value: AuthContextType = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <authContext.Provider value={value}>
      {!loading && children}
    </authContext.Provider>
  );
}
