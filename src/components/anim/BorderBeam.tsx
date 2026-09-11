import type { CSSProperties } from "react";

/**
 * A small light segment that travels around the border of the nearest
 * positioned ancestor. Place inside a `relative rounded-*` container.
 */
export function BorderBeam({
  className = "",
  color = "var(--spectral-b)",
  duration = 6,
  delay = 0,
}: {
  className?: string;
  color?: string;
  duration?: number;
  delay?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`border-beam-overlay ${className}`}
      style={
        {
          "--beam-color": color,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        } as CSSProperties
      }
    />
  );
}
