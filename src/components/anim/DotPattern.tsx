import { useEffect, useRef } from "react";

/**
 * A dot grid whose dots brighten and swell near the pointer —
 * the interactive grid pattern. Purely decorative.
 */
export function DotPattern({
  columns = 26,
  rows = 10,
  glowRadius = 130,
  className = "",
}: {
  columns?: number;
  rows?: number;
  glowRadius?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const applyMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      for (const dot of dotsRef.current) {
        if (!dot) continue;
        const dx = dot.offsetLeft + dot.offsetWidth / 2 - mx;
        const dy = dot.offsetTop + dot.offsetHeight / 2 - my;
        const t = Math.max(0, 1 - Math.hypot(dx, dy) / glowRadius);
        dot.style.opacity = String(0.16 + t * 0.84);
        dot.style.transform = `scale(${1 + t * 1.5})`;
      }
    };

    const onEnter = () => {
      window.addEventListener("pointermove", applyMove);
    };
    const onLeave = () => {
      window.removeEventListener("pointermove", applyMove);
      for (const dot of dotsRef.current) {
        if (!dot) continue;
        dot.style.opacity = "0.16";
        dot.style.transform = "scale(1)";
      }
    };

    container.addEventListener("pointerenter", onEnter);
    container.addEventListener("pointerleave", onLeave);
    return () => {
      container.removeEventListener("pointerenter", onEnter);
      onLeave();
    };
  }, [glowRadius]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 grid place-items-center ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
      aria-hidden="true"
    >
      {Array.from({ length: columns * rows }, (_, i) => (
        <span
          key={i}
          ref={(el) => {
            dotsRef.current[i] = el;
          }}
          className="h-1 w-1 rounded-full bg-foreground"
          style={{ opacity: 0.16, transition: "opacity 120ms ease, transform 120ms ease" }}
        />
      ))}
    </div>
  );
}
