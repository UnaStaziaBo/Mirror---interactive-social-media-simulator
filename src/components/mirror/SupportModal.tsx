import { useEffect, useState } from "react";
import {
  SUPPORT_OPTIONS,
  type SupportOption,
} from "../../data/story";
import { TypingDots } from "./TypingDots";

interface Props {
  onSend: (support: SupportOption) => void;
  onCancel: () => void;
}

export function SupportModal({
  onSend,
  onCancel,
}: Props) {

  const [selected, setSelected] =
    useState<SupportOption | null>(null);

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

        <div className="feedback-header">

          <div className="modal-title">
            Support Leo
          </div>

          <div className="modal-subtitle">
            Post something kind under his artwork.
          </div>

        </div>

        {phase === "choose" ? (

          <div className="modal-body">

            <div className="modal-list">

              {SUPPORT_OPTIONS.map((support) => (

                <button
                  key={support.id}
                  className="modal-option"
                  onClick={() => {
                    setSelected(support);
                    setPhase("typing");
                  }}
                >
                  <div className="modal-option-title">
                    "{support.text}"
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
                label="writing a supportive comment"
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