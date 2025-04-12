import CommentCard from './CommentCard';
import { Comment } from '@/models/Comment'; // Import the Comment class

interface CommentBoardProps {
  comments: Comment[]; // Use an array of Comment class instances
}

export default function CommentBoard({ comments }: CommentBoardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          commentData={comment} // Pass the whole Comment object
        />
      ))}
    </div>
  );
}
