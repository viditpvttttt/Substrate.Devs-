import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const WORDS = ["Kernel", "VOID", "Folio", "Substrate"];

/**
 * Full-screen intro that flashes through the product names, then slides
 * away to reveal the page. Skiper-style words preloader.
 */
export function Preloader() {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (index >= WORDS.length - 1) {
      const id = setTimeout(() => setDone(true), 500);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => setIndex((i) => i + 1), index === 0 ? 500 : 320);
    return () => clearTimeout(id);
  }, [index]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="spectral-field" />
          <div className="relative flex items-center gap-4">
            <motion.span
              className="h-2.5 w-2.5 rounded-full bg-clay"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={WORDS[index]}
                className="font-display text-4xl font-light text-foreground sm:text-5xl"
                initial={{ y: 24, opacity: 0, filter: "blur(6px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -24, opacity: 0, filter: "blur(6px)" }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {WORDS[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
