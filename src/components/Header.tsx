'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../contexts/authContext/page'; // Adjust the path if necessary
import { auth } from '../firebase/config'; // Adjust the path if necessary
import { signOut } from 'firebase/auth';
import Image from 'next/image'; // Import Image component

export default function Header() {
  const { userLoggedIn, currentUser, loading } = useAuth();
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Optional: Add any post-logout logic, like redirecting the user
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  // Don't render anything on the connexion page or while loading auth state
  if (pathname === '/connexion' || loading) {
    return null;
  }

  return (
    <div className="absolute top-4 right-4 z-20 flex items-center space-x-4">
      {userLoggedIn && currentUser ? (
        // Logged-in user view
        <>
          <Image
            src={currentUser.photoURL || '/placeholder-face.png'} // Use placeholder if no photoURL
            alt={currentUser.displayName || 'User Avatar'}
            width={40} // Adjust size as needed
            height={40} // Adjust size as needed
            className="rounded-full"
          />
          <span className="text-white font-medium">
            {currentUser.displayName || currentUser.email} {/* Display name or email */}
          </span>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-200 hover:text-white hover:underline cursor-pointer focus:outline-none"
          >
            (logout)
          </button>
        </>
      ) : (
        // Logged-out user view
        <Link href="/connexion">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Se connecter
          </button>
        </Link>
      )}
    </div>
  );
}
