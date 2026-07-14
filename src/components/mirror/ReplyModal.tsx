import { useEffect, useState } from "react";
import type { Comment, ReplyOption } from "../../data/story";
import { TypingDots } from "./TypingDots";

interface Props {
  comment: Comment;
  onSend: (reply: ReplyOption) => void;
  onCancel: () => void;
}

export function ReplyModal({
  comment,
  onSend,
  onCancel,
}: Props) {
  const [selected, setSelected] =
    useState<ReplyOption | null>(null);

  const [phase, setPhase] =
    useState<"choose" | "typing">("choose");

  useEffect(() => {
    if (phase !== "typing" || !selected) return;

    const timer = setTimeout(() => {
      onSend(selected);
    }, 1400);

    return () => clearTimeout(timer);

  }, [phase, selected, onSend]);

  return (
    <div className="modal-overlay">

      <div className="modal">

        <div className="modal-header">

          <div className="modal-title">
            Replying to
          </div>

          <div className="modal-subtitle">
            <strong>{comment.author}</strong>
            <br />
            "{comment.text}"
          </div>

        </div>

        {phase === "choose" ? (

          <div className="modal-body">

            <div className="modal-label">
              Choose a response
            </div>

            <div className="modal-list">

              {comment.replies.map((reply) => (

                <button
                  key={reply.id}
                  className="modal-option"
                  onClick={() => {
                    setSelected(reply);
                    setPhase("typing");
                  }}
                >
                  <div className="modal-option-title">
                    "{reply.text}"
                  </div>
                </button>

              ))}

            </div>

          </div>

        ) : (

          <div className="modal-typing">

            <div className="modal-message">

              <strong>you</strong>

              <TypingDots
                label="composing response"
              />

            </div>

            <div className="modal-status">
              AI is analyzing your tone...
            </div>

          </div>

        )}

        {phase === "choose" && (

          <div className="modal-footer">

            <button
              className="button button-secondary modal-cancel"
              onClick={onCancel}
            >
              Cancel
            </button>

          </div>

        )}

      </div>

    </div>
  );
}