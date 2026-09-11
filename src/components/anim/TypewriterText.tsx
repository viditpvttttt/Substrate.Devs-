import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

/**
 * Types out text character by character once it scrolls into view.
 */
export function TypewriterText({
  text,
  className = "",
  speed = 42,
  startDelay = 0,
}: {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          if (interval) clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [inView, text, speed, startDelay]);

  return (
    <span ref={ref} className={className}>
      {text.slice(0, count)}
      {!done && (
        <span className="ml-0.5 inline-block animate-pulse text-[var(--spectral-b)]">▌</span>
      )}
    </span>
  );
}
