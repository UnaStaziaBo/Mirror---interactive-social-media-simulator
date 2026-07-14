import { STYLE_META, type CommStyle } from "../../data/story";

interface Props {
  health: number;
  tally: Record<CommStyle, number>;
}

export function EndingScreen({
  health,
  tally,
}: Props) {

  const mood =
    health >= 80
      ? "Thriving Community"
      : health >= 60
      ? "Healthy Community"
      : health >= 40
      ? "Tense Community"
      : "Toxic Community";

  const leoMessage =
    health >= 80
      ? `I can't believe so many people
stood up for me.

I almost deleted this drawing.

Now I actually want to keep creating.`
      : health >= 60
      ? `Today was difficult.

But seeing people reply with kindness
made a real difference.

Thank you.`
      : health >= 40
      ? `I'm still not sure how I feel.

Some comments really hurt.

But thanks for trying to help.`
      : `I deleted the post.

Maybe I'll share my art again someday.`;

  return (

    <main className="ending-screen">

      {/* Hero */}

      <section className="ending-hero">

        <div className="ending-emoji">

          🎉

        </div>

        <h1>

          Chapter Complete

        </h1>

        <p>

          Creative Expression

        </p>

      </section>

      {/* Community Health */}

      <section className="ending-card">

        <div className="ending-section-title">

          🌍 Community Health

        </div>

        <div className="ending-health">

          <div className="ending-health-track">

            <div
              className="ending-health-fill"
              style={{
                width: `${health}%`,
              }}
            />

          </div>

          <div className="ending-health-value">

            {health}

          </div>

        </div>

        <div className="ending-health-label">

          {mood}

        </div>

      </section>

      {/* Leo */}

      <section className="ending-card">

        <div className="ending-section-title">

          💬 Leo

        </div>

        <div className="ending-leo">

          <div className="ending-avatar">

            L

          </div>

          <div className="ending-message">

            {leoMessage}

          </div>

        </div>

      </section>

      {/* Outcome */}

      <section className="ending-card">

        <div className="ending-section-title">

          📈 Because of your actions

        </div>

        <div className="ending-list">

          {health >= 60 ? (

            <>
              <div>
                ❤️ Supportive voices became louder
              </div>

              <div>
                🚩 Harmful comments were challenged
              </div>

              <div>
                👥 More people joined respectfully
              </div>

              <div>
                🎨 Leo kept his artwork online
              </div>
            </>

          ) : (

            <>
              <div>
                💬 The discussion became difficult
              </div>

              <div>
                ⚠ Harmful comments stayed visible
              </div>

              <div>
                😔 Leo lost confidence
              </div>

              <div>
                🖼️ The artwork was removed
              </div>
            </>

          )}

        </div>

      </section>

      {/* Communication */}

      <section className="ending-card">

        <div className="ending-section-title">

          🤖 Your Communication Style

        </div>

        <div className="ending-styles">

          {(Object.keys(tally) as CommStyle[]).map(
            (style) => {

              const meta =
                STYLE_META[style];

              return (

                <div
                  key={style}
                  className="ending-style"
                >

                  <div className="ending-style-name">

                    <span>

                      {meta.emoji}

                    </span>

                    {meta.label}

                  </div>

                  <div
                    className="ending-style-value"
                    style={{
                      color: meta.color,
                    }}
                  >

                    {tally[style]}

                  </div>

                </div>

              );

            }
          )}

        </div>

      </section>

            {/* Reflection */}

      <section className="ending-card">

        <div className="ending-section-title">

          🤔 Reflection

        </div>

        <p className="ending-reflection">

          What would you do differently
          next time?

        </p>

        <blockquote className="ending-quote">

          "One reply rarely changes the internet.

          It can change someone's day."

        </blockquote>

      </section>

      {/* Next steps */}

      <section className="ending-card">

        <div className="ending-section-title">

          🌱 Keep learning

        </div>

        <p className="ending-next">

          Every conversation shapes the
          community around us.

          Continue exploring how empathy,
          critical thinking and responsible
          communication can change online
          spaces.

        </p>

      </section>

      {/* Buttons */}

      <section className="ending-actions">

        <button
          className="button button-secondary"
          onClick={() => window.location.reload()}
        >

          ↺ Play Again

        </button>

        <button
          className="button button-primary"
          disabled
        >

          Next Chapter
          <span style={{ marginLeft: 8 }}>
            →
          </span>

        </button>

      </section>

      <footer className="ending-footer">

        <p>

          Mirror

        </p>

        <span>

          Chapter 1 · Creative Expression

        </span>

      </footer>

    </main>

  );

}