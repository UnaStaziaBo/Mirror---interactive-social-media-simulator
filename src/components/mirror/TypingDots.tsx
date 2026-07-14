export function TypingDots({ label = "typing" }: { label?: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        color: "#6b7280",
      }}
    >
      <span className="typing-dot" />
      <span className="typing-dot" />
      <span className="typing-dot" />
      <span
        style={{
          marginLeft: "6px",
          fontSize: "12px",
        }}
      >
        {label}
      </span>
    </span>
  );
}