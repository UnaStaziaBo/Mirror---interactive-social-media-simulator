import { useEffect, useRef, useState } from "react";
import { TypingDots } from "./TypingDots";

export interface LeoMessage {
  id: string;
  text: string;
  ts: number;
}

interface Props {
  messages: LeoMessage[];
  typing: boolean;
}

export function LeoChat({
  messages,
  typing,
}: Props) {

  const [open, setOpen] =
    useState(false);

  const scrollRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (!open) return;

    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });

  }, [messages, typing, open]);

  function renderMessages() {

    if (messages.length === 0) {

      return (
        <div className="leo-empty">

          Leo will message you as the
          story reacts to your actions.

        </div>
      );

    }

    return (
      <>
        {messages.map((message) => (

          <div
            key={message.id}
            className="leo-message"
          >
            {message.text}
          </div>

        ))}

        {typing && (

          <div className="leo-typing">

            <TypingDots
              label="Leo is typing"
            />

          </div>

        )}

      </>
    );
  }

  return (
    <>

      {/* Floating button */}

      <button
        className="leo-fab"
        onClick={() => setOpen(true)}
      >

        💬

        {messages.length > 0 && (

          <span className="leo-fab-badge">

            {messages.length}

          </span>

        )}

      </button>

      {/* Chat */}

      {open && (

        <div
          className="leo-chat-overlay"
          onClick={() => setOpen(false)}
        >

          <div
            className="leo-chat-window"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="leo-chat">

              <div className="leo-chat-header">

                <div
                  className="avatar"
                  style={{
                    background:
                      "var(--primary)",
                  }}
                >
                  L
                </div>

                <div className="leo-chat-user">

                  <div className="leo-chat-name">
                    Leo
                  </div>

                  <div className="leo-chat-status">
                    active now · sharing his art
                  </div>

                </div>

                <button
                  className="button-secondary"
                  onClick={() => setOpen(false)}
                >
                  ✕
                </button>

              </div>

              <div
                ref={scrollRef}
                className="leo-chat-body"
              >
                {renderMessages()}
              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
}