import {
  STYLE_META,
  type CommStyle,
} from "../../data/story";

export interface FeedbackData {
  styles: CommStyle[];
  healthDelta: number;
  why: string;
  leoReaction: string;
}

interface Props {
  data: FeedbackData;
  onClose: () => void;
}

export function AIFeedbackCard({
  data,
  onClose,
}: Props) {

  const positive =
    data.healthDelta >= 0;

  return (

    <aside className="ai-panel">

      <div className="feedback-card">

        <div className="feedback-header">

          <div className="feedback-title">
            AI Analysis
          </div>

          <div className="feedback-subtitle">
            Communication detected
          </div>

        </div>

        <div className="feedback-body">

          <div className="feedback-tags">

            {data.styles.map((style) => {

              const meta =
                STYLE_META[style];

              return (

                <span
                  key={style}
                  className="chip"
                  style={{
                    background: `${meta.color}22`,
                    color: meta.color,
                  }}
                >
                  <span>{meta.emoji}</span>

                  {meta.label}

                </span>

              );

            })}

          </div>

          <div className="feedback-section">

            <div className="feedback-label">
              Why it matters
            </div>

            <div className="feedback-box">
              {data.why}
            </div>

          </div>

          <div
            className={
              positive
                ? "feedback-impact positive"
                : "feedback-impact negative"
            }
          >

            <span>
              Community Health
            </span>

            <strong>
              {positive ? "+" : ""}
              {data.healthDelta}
            </strong>

          </div>

          <div className="feedback-leo">

            <div
              className="avatar small"
              style={{
                background: "var(--primary)",
              }}
            >
              L
            </div>

            <div className="feedback-leo-message">

              <strong>Leo</strong>

              <p>
                "{data.leoReaction}"
              </p>

            </div>

          </div>

          <div className="feedback-footer">

            <button
              className="button button-primary"
              style={{ width: "100%" }}
              onClick={onClose}
            >
              Continue
            </button>

          </div>

        </div>

      </div>

    </aside>

  );
}