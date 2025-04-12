import CommentBoard from './CommentBoard';
import { Comment } from '@/models/Comment'; // Import the Comment class

// Create instances of the Comment class
const fakeComments: Comment[] = [
  new Comment(
    1,
    'Alice Wonderland',
    'This is a fantastic journey down the rabbit hole! Highly recommend following the white rabbit.',
    'https://picsum.photos/seed/alice/32/32'
  ),
  new Comment(
    2,
    'Bob The Builder',
    'Can we fix it? Yes, we can! This platform has great potential for collaborative projects. Needs more tools though.',
    'https://picsum.photos/seed/bob/32/32'
  ),
  new Comment(
    3,
    'Charlie Chaplin',
    'A day without laughter is a day wasted. Found some genuinely funny content here! The silence is golden.',
    'https://picsum.photos/seed/charlie/32/32'
  ),
  new Comment(
    4,
    'Diana Prince',
    'Fighting for justice requires the right tools. This looks promising. Wonder Woman approves, but visibility could be better.',
    'https://picsum.photos/seed/diana/32/32'
  ),
  new Comment(
    5,
    'Ethan Hunt',
    'This mission, should you choose to accept it, involves exploring new features. Self-destruct sequence not included. Good UX.',
    'https://picsum.photos/seed/ethan/32/32'
  ),
  new Comment(
    6,
    'Fiona Gallagher',
    'Keeping this family together is tough, but this app makes communication a bit easier. Needs a dark mode for late nights.',
    'https://picsum.photos/seed/fiona/32/32'
  ),
  new Comment(
    7,
    'George Costanza',
    "It's not a lie if you believe it. I believe this comment board is the best, absolutely the best. Serenity now!",
    'https://picsum.photos/seed/george/32/32'
  ),
  new Comment(
    8,
    'Hermione Granger',
    'Proper documentation is crucial! Leviosa, not Leviosar. The information architecture here is quite logical, surprisingly.',
    'https://picsum.photos/seed/hermione/32/32'
  ),
  new Comment(
    9,
    'Indiana Jones',
    'Fortune and glory, kid. Navigating this site feels like exploring an ancient temple. Watch out for snakes... I mean bugs.',
    'https://picsum.photos/seed/indy/32/32'
  ),
  new Comment(
    10,
    'Jack Sparrow',
    'Why is the rum always gone? Savvy? This board is like a treasure chest of opinions. Needs more parallax scrolling, maybe? PARLEY!',
    'https://picsum.photos/seed/jack/32/32'
  ),
];

export default function CommentBoardExample() {
  return <CommentBoard comments={fakeComments} />;
}
