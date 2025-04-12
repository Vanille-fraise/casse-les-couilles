'use client';
import { useState } from 'react';
import CommentBoardExample from '@/components/CommentBoardExample'; // Import the example board

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Comment Section</h1>
      <CommentBoardExample />
      <div className="mt-8">
        <h2 className="text-xl mb-2">Counter Example</h2>
        <button
          onClick={handleClick}
          className="bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2 px-4
            rounded"
        >
          Button clicked {count} times
        </button>
      </div>
    </div>
  );
}
