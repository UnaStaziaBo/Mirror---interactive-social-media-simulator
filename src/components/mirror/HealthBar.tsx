interface Props {
  value: number;
}

export function HealthBar({ value }: Props) {
  const v = Math.max(0, Math.min(100, value));

  const color =
    v > 66
      ? "var(--success)"
      : v > 33
      ? "var(--warning)"
      : "var(--danger)";

  const mood =
    v > 66
      ? "Thriving"
      : v > 33
      ? "Tense"
      : "Toxic";

  return (
    <div className="health-bar">
      <div className="health-inner">

        <span className="health-icon">
          🌍
        </span>

        <div className="health-content">

          <div className="health-top">

            <span className="health-title">
              Community Health
            </span>

            <span
              className="health-state"
              style={{ color }}
            >
              {Math.round(v)} · {mood}
            </span>

          </div>

          <div className="health-track">

            <div
              className="health-fill"
              style={{
                width: `${v}%`,
                background: color,
              }}
            />

          </div>

        </div>

      </div>
    </div>
  );
}