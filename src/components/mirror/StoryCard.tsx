interface Props {
  emoji: string;
  title: string;
  description: string;
  available?: boolean;
  accent: string;
  onClick?: () => void;
}

export function StoryCard({
  emoji,
  title,
  description,
  available,
  accent,
  onClick,
}: Props) {
  return (
    <div
      onClick={available ? onClick : undefined}
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "24px",
        padding: "24px",
        background: "white",
        cursor: available ? "pointer" : "default",
        transition: "0.3s",
        minHeight: "260px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "18px",
          background: accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "32px",
          marginBottom: "16px",
        }}
      >
        {emoji}
      </div>

      <h3
        style={{
          fontSize: "22px",
          marginBottom: "12px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#6b7280",
          minHeight: "60px",
        }}
      >
        {description}
      </p>

      <div
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {available ? (
          <span
            style={{
              background: "#dcfce7",
              color: "#15803d",
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "14px",
            }}
          >
            ● Available
          </span>
        ) : (
          <span
            style={{
              background: "#f3f4f6",
              color: "#6b7280",
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "14px",
            }}
          >
            ○ Coming Soon
          </span>
        )}

        {available && (
          <span
            style={{
              color: "#ec4899",
              fontWeight: 600,
            }}
          >
            Play →
          </span>
        )}
      </div>
    </div>
  );
}