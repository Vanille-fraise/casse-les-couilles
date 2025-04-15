'use client';
import { useState } from 'react';
import CommentBoardExample from '@/components/CommentBoardExample'; // Import the example board
import FaceBackgroundExample from '@/components/FaceBackgroundExample'; // Import the background example
export default function Home() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <main className="relative min-h-screen">
      <FaceBackgroundExample /> {/* Add the background */} 
      <div className="container mx-auto p-4 relative z-10"> {/* Ensure content is above background */}
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Comment Section</h1>
        <CommentBoardExample />
        <div className="mt-8">
        </div>
        </div>
    </main>
  );
}
