import type {
  Comment,
  CommentCategory,
} from "../../data/story";

import {
  CATEGORY_LABELS,
  CATEGORY_EXPLAIN,
} from "../../data/story";

interface Props {
  comment: Comment;
  onPick: (category: CommentCategory) => void;
  onCancel: () => void;
}

const ORDER: CommentCategory[] = [
  "fact",
  "opinion",
  "manipulation",
  "hate",
];

const COLOR: Record<CommentCategory, string> = {
  fact: "var(--sky)",
  opinion: "var(--violet)",
  manipulation: "var(--warning)",
  hate: "var(--danger)",
};

export function ClassifyModal({
  comment,
  onPick,
  onCancel,
}: Props) {
  return (
    <div className="modal-overlay">

      <div className="modal">

        <div className="modal-header">

          <div className="modal-title">
            Classify this comment
          </div>

          <div className="modal-subtitle">
            <strong>{comment.author}</strong>
            <br />
            "{comment.text}"
          </div>

        </div>

        <div className="modal-body">

          <div className="classification-grid">

            {ORDER.map((category) => (

              <button
                key={category}
                className="classification-card"
                onClick={() => onPick(category)}
                style={{
                  borderColor: COLOR[category],
                }}
              >

                <div
                  className="classification-title"
                  style={{
                    color: COLOR[category],
                  }}
                >
                  {CATEGORY_LABELS[category]}
                </div>

                <div className="classification-description">
                  {CATEGORY_EXPLAIN[category]}
                </div>

              </button>

            ))}

          </div>

        </div>

        <div className="modal-footer">

          <button
            className="button button-secondary modal-cancel"
            onClick={onCancel}
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
}