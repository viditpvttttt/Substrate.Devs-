import type { ReactNode } from "react";

/**
 * An infinite horizontal marquee of cards with edge fades; pauses on hover.
 * The track holds two identical copies so the loop is seamless.
 */
export function MarqueeCards({
  children,
  className = "",
  duration = 40,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <div className={`marquee-cards group ${className}`}>
      <div
        className="marquee-cards-track group-hover:[animation-play-state:paused]"
        style={
          {
            "--mc-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        <div className="flex items-center gap-5 pr-5">{children}</div>
        <div className="flex items-center gap-5 pr-5" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
