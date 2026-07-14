import type { Comment } from "../../data/story";
import { CommentItem } from "./CommentItem";

interface Handled {
  classified?: boolean;
  correctClass?: boolean;
  replied?: boolean;
}

interface CommentsListProps {
  comments: Comment[];
  handled: Record<string, Handled>;

  onReply: (comment: Comment) => void;
  onClassify: (comment: Comment) => void;
}

export function CommentsList({
  comments,
  handled,
  onReply,
  onClassify,
}: CommentsListProps) {
  return (
    <section className="card comments">

      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          handled={handled[comment.id]}
          onReply={onReply}
          onClassify={onClassify}
        />
      ))}

    </section>
  );
}