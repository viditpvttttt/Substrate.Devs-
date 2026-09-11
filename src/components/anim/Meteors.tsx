import { useMemo } from "react";

/**
 * Falling meteor streaks across the nearest positioned ancestor.
 * Purely decorative — set `color` via the --meteor-color CSS variable.
 */
export function Meteors({
  count = 14,
  className = "",
  color,
}: {
  count?: number;
  className?: string;
  color?: string;
}) {
  const meteors = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 40,
        delay: Math.random() * 6,
        duration: 3 + Math.random() * 5,
      })),
    [count],
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={color ? ({ "--meteor-color": color } as React.CSSProperties) : undefined}
      aria-hidden="true"
    >
      {meteors.map((m) => (
        <span
          key={m.id}
          className="meteor"
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
