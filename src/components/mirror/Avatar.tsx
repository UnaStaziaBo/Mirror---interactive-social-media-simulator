interface Props {
  color: string;
  name: string;
  size?: number;
}

export function Avatar({
  color,
  name,
  size = 36,
}: Props) {
  const initials = name
    .replace(/[^a-zA-Z]/g, "")
    .slice(0, 2)
    .toUpperCase();

  const sizeClass =
    size >= 56
      ? "large"
      : size >= 46
      ? ""
      : "small";

  return (
    <div
      className={`avatar ${sizeClass}`}
      style={{ background: color }}
    >
      {initials}
    </div>
  );
}