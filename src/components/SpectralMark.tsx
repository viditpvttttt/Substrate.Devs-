type Props = {
  variant: "kernel" | "void";
  className?: string;
};

/**
 * Abstract, systematic marks rendered as SVG so they stay crisp and inherit
 * the palette. Kernel = a lattice of modalities converging. VOID = a single
 * contour tracing an empty frame.
 */
export function SpectralMark({ variant, className }: Props) {
  if (variant === "kernel") {
    const rows = 7;
    const cols = 7;
    return (
      <svg
        viewBox="0 0 240 240"
        role="img"
        aria-label="Kernel mark: a lattice of modalities converging on a centre"
        className={className}
      >
        <g>
          {Array.from({ length: rows }).map((_, r) =>
            Array.from({ length: cols }).map((_, c) => {
              const x = 30 + c * 30;
              const y = 30 + r * 30;
              const d = Math.hypot(r - 3, c - 3);
              const rad = Math.max(1.2, 5.5 - d * 1.05);
              const hue =
                d < 1.2
                  ? "var(--spectral-r)"
                  : d < 2.4
                    ? "var(--spectral-g)"
                    : "var(--spectral-b)";
              return (
                <circle
                  key={`${r}-${c}`}
                  cx={x}
                  cy={y}
                  r={rad}
                  fill={hue}
                  opacity={Math.max(0.16, 0.85 - d * 0.16)}
                />
              );
            }),
          )}
          {Array.from({ length: cols }).map((_, c) => (
            <line
              key={`v${c}`}
              x1={30 + c * 30}
              y1={30}
              x2={30 + c * 30}
              y2={210}
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.18"
            />
          ))}
          {Array.from({ length: rows }).map((_, r) => (
            <line
              key={`h${r}`}
              x1={30}
              y1={30 + r * 30}
              x2={210}
              y2={30 + r * 30}
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.18"
            />
          ))}
          <circle
            cx="120"
            cy="120"
            r="46"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.35"
          />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 240 240"
      role="img"
      aria-label="VOID mark: a single contour tracing an empty frame"
      className={className}
    >
      {Array.from({ length: 5 }).map((_, r) =>
        Array.from({ length: 5 }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={40 + c * 40}
            cy={40 + r * 40}
            r="2.4"
            fill="currentColor"
            opacity="0.2"
          />
        )),
      )}
      <path
        d="M72 44 C 40 70, 44 118, 78 122 C 108 126, 106 156, 76 168 C 52 178, 60 200, 96 198 L 168 198 C 196 196, 200 168, 178 148 C 158 130, 158 104, 176 88 C 198 68, 190 42, 158 44 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      <circle cx="176" cy="120" r="4" fill="var(--spectral-b)" opacity="0.7" />
    </svg>
  );
}
