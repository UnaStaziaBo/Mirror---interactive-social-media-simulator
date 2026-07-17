import { useState } from "react";
import { Avatar } from "./Avatar";
import type { Comment } from "../../data/story";

interface Props {
  comment: Comment;
  handled?: {
    classified?: boolean;
    replied?: boolean;
    correctClass?: boolean;
  };
  onReply: (comment: Comment) => void;
  onClassify: (comment: Comment) => void;
}

export function CommentItem({
  comment,
  handled,
  onReply,
  onClassify,
}: Props) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="comment">
      <Avatar
        color={comment.avatarColor}
        name={comment.author}
      />

      <div className="comment-content">
        <div className="comment-bubble">
          <div className="comment-head">
            <span className="comment-author">
              {comment.author}
            </span>

            <span className="comment-time">
              {comment.timeAgo}
            </span>
          </div>

          <p className="comment-text">
            {comment.text}
          </p>
        </div>

        <div className="comment-actions">
          <button
            className={`comment-action ${
              liked ? "like-active" : ""
            }`}
            onClick={() => setLiked((v) => !v)}
          >
            {liked ? "♥ Liked" : "Like"}
          </button>

          <button
            className={`comment-action ${
              handled?.replied ? "success" : ""
            }`}
            disabled={handled?.replied}
            onClick={() => onReply(comment)}
          >
            {handled?.replied ? "✓ Replied" : "Reply"}
          </button>

          <button
            className={`comment-action ${
              handled?.classified
                ? handled.correctClass
                  ? "success"
                  : "error"
                : ""
            }`}
            disabled={handled?.classified}
            onClick={() => onClassify(comment)}
          >
            {!handled?.classified
              ? "Classify"
              : handled.correctClass
                ? "✓ Correct"
                : "✗ Misclassified"}
          </button>

          <span className="comment-likes">
            {comment.likes + (liked ? 1 : 0)} likes
          </span>
        </div>
      </div>
    </div>
  );
}