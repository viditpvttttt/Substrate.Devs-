import { motion } from "motion/react";
import { WaveGridBackground, wavePalettes } from "@/components/WaveGridBackground";

/**
 * Gridline feature cards — recreated from the reference: a wide lead card
 * ("Intelligent completion" with body copy) flanked by two narrower cards,
 * all on the ambient gradient + gridline textures.
 */
const features = [
  {
    index: "01",
    title: "Intelligent completion",
    body: "Real-time completions as you type — not just the next word, but the next block, generated from your codebase context and coding patterns.",
    palette: wavePalettes.violet,
    wide: true,
  },
  {
    index: "02",
    title: "Inline AI assistance",
    palette: wavePalettes.gold,
  },
  {
    index: "03",
    title: "Multi-modal prompts",
    palette: wavePalettes.teal,
  },
];

export function GridlineFeatures() {
  return (
    <div className="flex flex-col gap-5 lg:h-[22rem] lg:flex-row">
      {features.map((f, i) => (
        <motion.div
          key={f.index}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`relative min-h-[13rem] flex-1 overflow-hidden rounded-3xl p-7 shadow-lg ${
            f.wide ? "lg:flex-[2]" : "lg:flex-1"
          }`}
        >
          <WaveGridBackground colors={f.palette} seed={i + 1} />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-white/70">
              {f.index}
            </p>
            <div>
              <h3 className="font-display text-3xl leading-snug text-white drop-shadow-sm sm:text-4xl">
                {f.title}
              </h3>
              {f.body && (
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">{f.body}</p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
