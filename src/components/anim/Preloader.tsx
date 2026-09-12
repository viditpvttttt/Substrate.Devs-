import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { SpectralMark } from "@/components/SpectralMark";

/**
 * Pixel preloader (recreated from Skiper UI skiper11, adapted to Substrate):
 * a grid of cream pixel tiles dissolves in a random order to reveal the
 * wordmark, then the whole sheet slides away.
 */
export function Preloader() {
  const [done, setDone] = useState(false);

  const tiles = useMemo(
    () =>
      Array.from({ length: 220 }, (_, id) => ({
        id,
        delay: Math.random() * 1.1,
      })),
    [],
  );

  useEffect(() => {
    const id = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[60] bg-background"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          {/* Wordmark revealed beneath the dissolving pixel sheet */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <SpectralMark variant="substrate" className="mx-auto h-12 w-12 text-foreground" />
              <p className="mt-5 font-display text-4xl font-light text-foreground sm:text-5xl">
                Substrate
              </p>
              <p className="rule-label mt-3">the ground software grows on</p>
            </motion.div>
          </div>

          {/* Pixel grid — each tile fades out with its own random delay */}
          <div
            className="pointer-events-none absolute inset-0 z-[2] grid"
            style={{ gridTemplateColumns: "repeat(auto-fill, 5vw)" }}
          >
            {tiles.map((tile) => (
              <motion.div
                key={tile.id}
                className="border-[0.2px] border-background bg-[#ECE5D8]"
                style={{ width: "5vw", height: "5vw" }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, scale: 0.94 }}
                transition={{ delay: tile.delay, duration: 0.4, ease: "easeIn" }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
