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
            className="comment-action"
            disabled={handled?.replied}
            onClick={() => onReply(comment)}
          >
            Reply
          </button>

          <button
            className="comment-action"
            disabled={handled?.classified}
            onClick={() => onClassify(comment)}
          >
            Classify
          </button>

          <span className="comment-likes">
            {comment.likes + (liked ? 1 : 0)} likes
          </span>

          {handled?.classified && (

            <span
              className={`comment-status ${
                handled.correctClass
                  ? "success"
                  : "error"
              }`}
            >
              {handled.correctClass
                ? "✓ Classified"
                : "✗ Misclassified"}
            </span>

          )}

        </div>

      </div>

    </div>
  );
}