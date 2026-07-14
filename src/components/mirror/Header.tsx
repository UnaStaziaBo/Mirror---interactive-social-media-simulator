interface Props {
  health: number;
  onHome?: () => void;
}

export function Header({
  health,
  onHome,
}: Props) {

  const color =
    health > 66
      ? "var(--success)"
      : health > 33
      ? "var(--warning)"
      : "var(--danger)";

  const mood =
    health > 66
      ? "Thriving"
      : health > 33
      ? "Tense"
      : "Toxic";

  return (

    <header className="mirror-header">

      <button
        className="mirror-logo"
        onClick={onHome}
      >
        🪞Mirror
      </button>

      <div className="header-health">

        <span className="header-health-icon">
          🌍
        </span>

        <span
          className="header-health-value"
          style={{ color }}
        >
          {health} · {mood}
        </span>

      </div>

    </header>

  );

}