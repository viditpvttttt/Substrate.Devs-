// src/routes/gridline.tsx
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SpectralMark } from "@/components/SpectralMark";
import { TiltCard } from "@/components/TiltCard";
import { Reveal } from "@/components/Reveal";
import { BoxReveal } from "@/components/anim/BoxReveal";

export const Route = createFileRoute("/gridline")({
  head: () => ({
    meta: [
      { title: "Gridline — AI‑powered Code Editor" },
      {
        name: "description",
        content: "Gridline is an AI‑powered code editor that works like Cursor, Antigravity and OpenCode, providing intelligent completion, inline AI assistance, and seamless integration with your development environment.",
      },
      { property: "og:title", content: "Gridline — AI‑powered Code Editor" },
      { property: "og:description", content: "AI‑powered code editor with intelligent completions, multi‑modal assistance and deep integration with your workflow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GridlinePage,
});

function GridlinePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden py-24 bg-gradient-to-b from-foreground/5 to-background">
        <div className="hero-cloudscape" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-card/70 px-4 py-1.5 shadow-sm backdrop-blur-md"
          >
            <SpectralMark variant="gridline" className="h-5 w-5 text-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
              Gridline
            </span>
            <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[0.625rem] font-mono text-primary">
              AI Code Editor
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 text-5xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            AI‑powered coding, reimagined
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Seamlessly blend AI assistance with your editor. Autocompletions, refactorings, documentation lookup and multi‑modal prompts—all within a single, responsive interface.
          </motion.p>
        </div>
      </section>

      {/* Feature Card */}
      <section className="my-16">
        <Reveal>
          <TiltCard>
            <div className="p-8 text-center">
              <BoxReveal>
                <h2 className="text-3xl font-light text-foreground">
                  Real‑time AI assistance
                </h2>
                <p className="mt-4 text-muted-foreground">
                  As you type, Gridline suggests completions, generates snippets, explains code, and even writes tests on the fly.
                </p>
              </BoxReveal>
            </div>
          </TiltCard>
        </Reveal>
      </section>
    </>
  );
}
