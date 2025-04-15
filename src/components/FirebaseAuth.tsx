"use client";
import React, { useEffect, useState } from "react";
import { app } from "@/firebase/config"; // Assuming your Firebase app instance is exported from here

// Get the Firebase Auth instance
const auth = getAuth(app);


function FirebaseAuth() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const [user, setUser] = useState<User | null>(null);

  // Listen to the Firebase Auth state and update the local state.
  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
      setUser(user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <h1>Connexion</h1>
        <p>Please sign-in:</p>
      </div>
    );
  }
  return (
    <div>
      <h1>My App</h1>
      <p>Welcome {user?.displayName}! You are now signed-in!</p>
      <a onClick={() => auth.signOut()}>Sign-out</a>
    </div>
  );
}

export default FirebaseAuth;
