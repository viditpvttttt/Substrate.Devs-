import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ClientOnly } from "@/components/ClientOnly";
import { HeroScene } from "@/components/three/HeroScene";
import { LatticeDiagram } from "@/components/LatticeDiagram";
import { Reveal } from "@/components/Reveal";
import { SpectralMark } from "@/components/SpectralMark";
import { TiltCard } from "@/components/TiltCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Substrate — Kernel, VOID & Folio" },
      {
        name: "description",
        content:
          "Substrate is a research and product studio building Kernel, a multimodal LLM, VOID, a minimalist browser, and Folio, a quiet operating surface for your day.",
      },
      { property: "og:title", content: "Substrate — Kernel, VOID & Folio" },
      {
        property: "og:description",
        content:
          "A research and product studio for the ambient computer: a multimodal model, a browser, and the surface you work on.",
      },
    ],
  }),
  component: Index,
});

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

const marqueeTerms = [
  "Multimodal",
  "Local-first",
  "One runtime",
  "Shared memory",
  "Long context",
  "Ambient computing",
  "No translators",
  "One representation",
];

function Index() {
  return (
    <>
      <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden">
        <div className="spectral-field" aria-hidden="true" />
        <ClientOnly>
          <HeroScene className="pointer-events-none absolute inset-0 -z-10 opacity-90 sm:pointer-events-auto" />
        </ClientOnly>
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="show"
          className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center"
        >
          <motion.div variants={heroItem}>
            <SpectralMark variant="substrate" className="mb-6 h-16 w-16 shadow-md" />
          </motion.div>
          <motion.p variants={heroItem} className="rule-label">
            The layer underneath
          </motion.p>
          <motion.h1
            variants={heroItem}
            className="mt-7 text-6xl leading-[1.02] text-foreground sm:text-8xl"
          >
            We build the ground
            <br />
            software grows on.
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            A research and product studio for the ambient computer. Three things underway:{" "}
            <span className="text-foreground">Kernel</span>, a multimodal LLM,{" "}
            <span className="text-foreground">VOID</span>, a minimalist browser, and{" "}
            <span className="text-foreground">Folio</span>, the surface you work on.
          </motion.p>
          <motion.div
            variants={heroItem}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            <Link
              to="/kernel"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-xl"
            >
              Meet Kernel
            </Link>
            <Link
              to="/void"
              className="group inline-flex items-center gap-2 text-sm text-foreground"
            >
              VOID Browser
              <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-muted-foreground"
          >
            Scroll
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-border/70 bg-card/60 py-5">
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {marqueeTerms.map((term) => (
                <span
                  key={`${copy}-${term}`}
                  className="mx-8 inline-flex items-center gap-8 font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground"
                >
                  {term}
                  <span className="text-clay">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <Reveal>
          <p className="rule-label">Three products</p>
          <h2 className="mt-4 max-w-xl text-4xl leading-tight text-foreground sm:text-5xl">
            One substrate, three surfaces
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Reveal delay={0}>
            <ProductTile
              to="/kernel"
              label="Kernel"
              status="In training"
              title="One model, every modality"
              body="Text, images, audio and video in a single context."
              colors={{ a: "#c88bd9", b: "#7b6bd6", c: "#e0574a" }}
            />
          </Reveal>
          <Reveal delay={0.12}>
            <ProductTile
              to="/void"
              label="VOID Browser"
              status="Pre-production"
              title="Nothing in the way"
              body="The page, the model and your intent on the same surface."
              colors={{ a: "#7fa8c9", b: "#3d5a73", c: "#d97c3b" }}
            />
          </Reveal>
          <Reveal delay={0.24}>
            <ProductTile
              to="/folio"
              label="Folio"
              status="Private beta"
              title="The quiet operating surface"
              body="Weather, files, memory and agents on one canvas."
              colors={{ a: "#b8cdd9", b: "#5f8c6a", c: "#2f5e40" }}
            />
          </Reveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-t border-border/70">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-14 px-6 py-24 sm:py-32 lg:grid-cols-2">
          <Reveal>
            <p className="rule-label">One substrate</p>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
              Three products, one shared ground
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The same runtime, the same memory, the same notion of context runs under all of it.
              Drag the lattice — every node is a shared slot, every edge a route between the pieces.
            </p>
            <Link
              to="/studio"
              className="group mt-8 inline-flex items-center gap-2 text-sm text-foreground"
            >
              How we build
              <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <LatticeDiagram className="glass-panel aspect-square rounded-2xl" />
            <p className="mt-3 text-center font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
              Drag to rotate
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-t border-border/70">
        <div className="relative mx-auto max-w-2xl px-6 py-28 text-center sm:py-32">
          <Reveal>
            <h2 className="text-4xl leading-tight text-foreground sm:text-5xl">
              Early, and open to company
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              If you are building at the same layer — models, runtimes, browsers — we would like to
              hear from you.
            </p>
            <a
              href="mailto:hello@substrate.dev"
              className="mt-10 inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-xl"
            >
              Get in touch
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ProductTile({
  to,
  label,
  status,
  title,
  body,
  colors,
}: {
  to: "/kernel" | "/void" | "/folio";
  label: string;
  status: string;
  title: string;
  body: string;
  colors: { a: string; b: string; c: string };
}) {
  return (
    <TiltCard className="h-full">
      <Link
        to={to}
        className="tile-aurora group flex aspect-[4/5] h-full flex-col justify-between rounded-3xl p-8 shadow-lg transition-shadow hover:shadow-2xl"
        style={
          {
            "--tile-a": colors.a,
            "--tile-b": colors.b,
            "--tile-c": colors.c,
          } as React.CSSProperties
        }
      >
        <div className="flex items-center gap-3">
          <p className="rule-label !text-white/90">{label}</p>
          <span className="rounded-full border border-white/40 px-2.5 py-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-white/85">
            {status}
          </span>
        </div>
        <div>
          <h3 className="text-3xl leading-snug text-white drop-shadow-sm sm:text-4xl">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/85">{body}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm text-white">
            Read more
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}
