import { COMMENTS, LEO } from "../../data/story";
import { Avatar } from "./Avatar";
import leoArt from "../../assets/leo-art.png";

export function LeoPost() {
  return (
    <article className="card post-card">

      {/* Header */}

      <header className="post-header">

        <Avatar
          color={LEO.avatarColor}
          name={LEO.name}
          size={46}
        />

        <div className="post-user">

          <div className="post-name">
            {LEO.name}
          </div>

          <div className="post-handle">
            {LEO.handle} · just now
          </div>

        </div>

        <button
          className="post-menu"
          aria-label="More options"
        >
          ⋯
        </button>

      </header>

      {/* Artwork */}

      <section className="post-image">

        <img
          src={leoArt}
          alt="Leo's artwork"
          className="post-image-content"
        />

      </section>

      {/* Actions */}

      <footer className="post-footer">

        <div className="post-actions">

          <button
            className="post-action"
            aria-label="Like"
          >
            ♡
          </button>

          <button
            className="post-action"
            aria-label="Comments"
          >
            💬
          </button>

          <button
            className="post-action"
            aria-label="Share"
          >
            ↗
          </button>

        </div>

        <div className="post-caption">

          <strong>{LEO.handle}</strong>{" "}

          {LEO.postCaption}

        </div>

        <div className="post-comments">

          View all {COMMENTS.length} comments

        </div>

      </footer>

    </article>
  );
}