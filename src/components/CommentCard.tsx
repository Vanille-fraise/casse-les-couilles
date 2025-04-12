'use client';

import Image from 'next/image';
import { Comment } from '@/models/Comment'; // Import the Comment class

interface CommentCardProps {
  commentData: Comment; // Use the Comment class for props
}

export default function CommentCard({ commentData }: CommentCardProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col h-full">
      <div className="flex items-center mb-2">
        <Image
          src={commentData.imageUrl}
          alt={`${commentData.name}'s profile picture`}
          width={32}
          height={32}
          className="rounded-full mr-3"
        />
        <span className="font-bold text-gray-900 dark:text-gray-100">{commentData.name}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-sm overflow-hidden line-clamp-3 flex-grow">
        {commentData.comment}
      </p>
    </div>
  );
}
