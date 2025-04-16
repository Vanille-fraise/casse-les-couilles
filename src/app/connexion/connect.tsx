"use client";

import { useState, useEffect, useRef } from 'react';

export default function ConnectForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonState, setButtonState] = useState<'initial' | 'loading' | 'login' | 'register'>('initial');
  const [buttonLabel, setButtonLabel] = useState('Appliquer');
  const emailDebounceTimeout = useRef<NodeJS.Timeout | null>(null);

  // Debounce email check
  useEffect(() => {
    if (emailDebounceTimeout.current) {
      clearTimeout(emailDebounceTimeout.current);
    }

    if (email.trim() === '') {
        setButtonState('initial');
        setButtonLabel('Appliquer')
        return;
    }


    emailDebounceTimeout.current = setTimeout(async () => {
      setButtonState('loading');
      setButtonLabel('Vérification...'); // Indicate loading

      // TODO: Check if email exists in DB
      console.log(`Checking if email exists: ${email}`);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate result (replace with actual DB call)
      const emailExists = Math.random() > 0.5; // Simulate 50% chance email exists

      if (emailExists) {
        setButtonState('login');
      } else {
        setButtonState('register');
      }
    }, 3000); // 3 seconds delay

    // Cleanup timeout on component unmount or email change
    return () => {
      if (emailDebounceTimeout.current) {
        clearTimeout(emailDebounceTimeout.current);
      }
    };
  }, [email]);

  // Update button label based on state
   useEffect(() => {
        switch (buttonState) {
            case 'initial':
                setButtonLabel('Appliquer');
                break;
            case 'loading':
                // Using a simple text for loading state, animation would require more setup
                 setButtonLabel('Chargement...');
                break;
            case 'login':
                setButtonLabel('Se connecter');
                break;
            case 'register':
                setButtonLabel("S'inscrire");
                break;
            default:
                setButtonLabel('Appliquer');
        }
    }, [buttonState]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(buttonState === 'login') {
        // TODO: Handle login logic
        console.log('Logging in with:', email, password);
    } else if (buttonState === 'register') {
        // TODO: Handle registration logic
        console.log('Registering with:', email, password);
    } else {
        // Might happen if form submitted before debounce check completes or if email is empty
        console.log('Please wait for email check or enter an email.');
    }
  };

  const handleGoogleSignIn = () => {
    // TODO: Handle Google Sign-In logic
    console.log('Signing in with Google');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Se connecter / S&aposinscrire</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre.email@exemple.com"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password"className="block text-sm font-medium text-gray-600">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={buttonState === 'loading' || buttonState === 'initial'}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              buttonState === 'loading' || buttonState === 'initial'
                ? 'bg-gray-400 cursor-not-allowed'
                 : buttonState === 'login'
                 ? 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500' // Register state
            }`}
          >
            {buttonState === 'loading' ? (
                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                 </svg>
            ): null}
            {buttonLabel}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Ou continuer avec</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
             {/* You might want to add a Google icon here */}
              Continuer avec Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
