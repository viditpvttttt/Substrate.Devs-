import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal } from "lucide-react";

/**
 * CommandOverlay — listens for clicks on any <button> or [role="button"]
 * across the site and flashes a terminal overlay with the command:
 *   pnpm dlx shadcn add @skiper-ui/skiper86
 * Auto-dismisses after 2.2s. Respects prefers-reduced-motion (instant show/hide).
 */
const COMMAND = "pnpm dlx shadcn add @skiper-ui/skiper86";

export function CommandOverlay() {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastClickRef = useRef(0);

  const flash = useCallback(() => {
    const now = Date.now();
    // Debounce: don't re-trigger if already visible within 500ms
    if (now - lastClickRef.current < 500) return;
    lastClickRef.current = now;

    setVisible(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setVisible(false), 2200);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const btn = target.closest("button, [role='button'], a[href]");
      if (btn) flash();
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [flash]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.96 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-20 right-5 z-50 w-[340px] max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-xl border border-foreground/15 bg-foreground shadow-2xl"
        >
          {/* Terminal header bar */}
          <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>
            <Terminal className="ml-1 h-3.5 w-3.5 text-white/50" />
            <span className="font-mono text-[0.625rem] uppercase tracking-wider text-white/40">
              folio — sh
            </span>
          </div>
          {/* Command body */}
          <div className="px-3.5 py-3 font-mono text-xs leading-relaxed">
            <p className="text-white/40">$ running command...</p>
            <motion.p
              initial={prefersReduced ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mt-1.5 text-[#2563EB]"
            >
              <span className="text-white/40">$ </span>
              {COMMAND}
            </motion.p>
            <motion.p
              initial={prefersReduced ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              className="mt-1.5 text-emerald-400/80"
            >
              ✓ installing @skiper-ui/skiper86...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

