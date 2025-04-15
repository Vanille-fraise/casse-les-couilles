'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <div className="absolute top-4 right-4 z-20">
    <Link href="/connexion">

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Se connecter
</button>
</Link>
    </div>
  );
}
