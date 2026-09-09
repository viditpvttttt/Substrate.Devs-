import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SpectralMark } from "@/components/SpectralMark";
import { TiltCard } from "@/components/TiltCard";
import { BoxReveal } from "@/components/anim/BoxReveal";
import { CountUp } from "@/components/anim/CountUp";
import { EmailCapture } from "@/components/anim/EmailCapture";
import { HoverPreviewList } from "@/components/anim/HoverPreview";
import { MagneticButton } from "@/components/anim/MagneticButton";
import { ParallaxY } from "@/components/anim/ParallaxY";
import { Preloader } from "@/components/anim/Preloader";
import { RotatingText } from "@/components/anim/RotatingText";
import { ScrambleText } from "@/components/anim/ScrambleText";
import { Spotlight } from "@/components/anim/Spotlight";
import { StickyCards } from "@/components/anim/StickyCards";
import { SvgScrollDraw } from "@/components/anim/SvgScrollDraw";
import { TextGradientFill } from "@/components/anim/TextGradientFill";
import { WordsReveal } from "@/components/anim/WordsReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Substrate — Kernel, VOID, Folio & Arcadia" },
      {
        name: "description",
        content:
          "Substrate is a research and product studio building Kernel, a multimodal LLM, VOID, a minimalist browser, Folio, a quiet operating surface, and Arcadia, an autonomous agent assistant.",
      },
      { property: "og:title", content: "Substrate — Kernel, VOID, Folio & Arcadia" },
      {
        property: "og:description",
        content:
          "A research and product studio for the ambient computer: a multimodal model, a browser, an operating surface, and autonomous agent intelligence on one substrate.",
      },
    ],
  }),
  component: Index,
});

const marqueeTerms = [
  "Multimodal",
  "Autonomous Agents",
  "Local-first",
  "One runtime",
  "Shared memory",
  "Long context",
  "Ambient computing",
  "No translators",
  "One representation",
];

const stats = [
  { value: 4, suffix: "", label: "Modalities, one context" },
  { value: 1, suffix: "", label: "Runtime under everything" },
  { value: 4, suffix: "", label: "Surfaces on the substrate" },
  { value: 0, suffix: "", label: "Translators in between" },
];

const stackedStories = [
  {
    key: "arcadia",
    label: "Arcadia Agent",
    title: "The autonomous agent built in",
    body: "Launch fleets of parallel agents across terminal, browser and Slack — automated triggers, local AST semantic lattices, and self-verifying workflows.",
    colors: { a: "#d97a38", b: "#8f471e", c: "#301d15" },
    to: "/arcadia" as const,
  },
  {
    key: "kernel",
    label: "Kernel",
    title: "The model underneath",
    body: "Text, images, audio and video projected into one representation — a single attention pass instead of a stack of adapters.",
    colors: { a: "#d99a4a", b: "#8f5f2d", c: "#30251b" },
    to: "/kernel" as const,
  },
  {
    key: "void",
    label: "VOID Browser",
    title: "The window onto it",
    body: "A browser with nothing in the way: the page, the model and your intent share one quiet surface.",
    colors: { a: "#9b9b92", b: "#4b4b46", c: "#252522" },
    to: "/void" as const,
  },
  {
    key: "folio",
    label: "Folio",
    title: "The surface you live on",
    body: "Weather, files, memory and agents arranged on one canvas — an operating surface that recedes when it has nothing to say.",
    colors: { a: "#c8b27c", b: "#665638", c: "#29251c" },
    to: "/folio" as const,
  },
];

function Index() {
  return (
    <>
      <Preloader />
      <section className="relative isolate overflow-hidden">
        <div className="hero-cloudscape" aria-hidden="true" />
        <Spotlight />
        <div className="relative mx-auto flex min-h-[88svh] max-w-6xl items-center justify-center px-6 py-20">
          <div className="relative z-10 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 inline-flex items-center gap-3"
            >
              <SpectralMark variant="substrate" className="h-9 w-9" />
              <span className="rule-label">The layer underneath</span>
            </motion.div>
            <h1 className="text-5xl leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
              <WordsReveal text="We build the ground" delay={0.15} />
              <br />
              <WordsReveal text="software grows on." delay={0.45} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              A research and product studio for the ambient computer — one substrate under{" "}
              <RotatingText
                words={[
                  "Arcadia, the agent",
                  "Kernel, the model",
                  "VOID, the browser",
                  "Folio, the surface",
                ]}
                className="text-foreground"
              />
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-11 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
            >
              <MagneticButton>
                <Link
                  to="/arcadia"
                  className="btn-shine inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
                >
                  Meet Arcadia
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <Link
                  to="/kernel"
                  className="group inline-flex items-center gap-2 text-sm text-foreground"
                >
                  Kernel Model
                  <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
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

      <section className="overflow-hidden border-y border-border/70 bg-card/60 py-4">
        <div className="marquee-track [animation-play-state:running] hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <MarqueeRow key={copy} copy={copy} />
          ))}
        </div>
        <div className="marquee-track-reverse mt-3 hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <MarqueeRow key={copy} copy={copy} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <Reveal>
          <p className="rule-label">Four surfaces</p>
          <h2 className="mt-4 max-w-xl text-4xl leading-tight text-foreground sm:text-5xl">
            <BoxReveal>One substrate, four surfaces</BoxReveal>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0}>
            <ProductTile
              to="/arcadia"
              label="Arcadia"
              status="New Agent"
              title="Autonomous agent assistant"
              body="Fleets of parallel agents across terminal, Slack and IDE."
              colors={{ a: "#d97a38", b: "#8f471e", c: "#301d15" }}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ProductTile
              to="/kernel"
              label="Kernel"
              status="In training"
              title="One model, every modality"
              body="Text, images, audio and video in a single context."
              colors={{ a: "#d99a4a", b: "#8f5f2d", c: "#30251b" }}
            />
          </Reveal>
          <Reveal delay={0.16}>
            <ProductTile
              to="/void"
              label="VOID Browser"
              status="Pre-production"
              title="Nothing in the way"
              body="The page, the model and your intent on the same surface."
              colors={{ a: "#9b9b92", b: "#4b4b46", c: "#252522" }}
            />
          </Reveal>
          <Reveal delay={0.24}>
            <ProductTile
              to="/folio"
              label="Folio"
              status="Private beta"
              title="The quiet operating surface"
              body="Weather, files, memory and agents on one canvas."
              colors={{ a: "#c8b27c", b: "#665638", c: "#29251c" }}
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border/60 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card/80 px-6 py-12 text-center">
              <p className="font-display text-6xl font-light text-foreground">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
                <ScrambleText text={s.label} />
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <SvgScrollDraw className="absolute inset-y-0 left-1/2 hidden w-40 -translate-x-1/2 opacity-50 lg:block" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 sm:py-36">
          <TextGradientFill
            text="The same runtime, the same memory, the same notion of context runs under all of it. Not separate products bolted together — one substrate wearing four faces."
            className="text-center font-display text-3xl font-light leading-snug text-foreground sm:text-5xl"
          />
        </div>
      </section>

      <section className="relative border-t border-border/70">
        <div className="mx-auto max-w-5xl px-6 pt-24 sm:pt-28">
          <Reveal>
            <p className="rule-label">One substrate</p>
            <h2 className="mt-4 max-w-xl text-4xl leading-tight text-foreground sm:text-5xl">
              <BoxReveal>Four products, one shared ground</BoxReveal>
            </h2>
          </Reveal>
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-10">
          <StickyCards
            items={stackedStories.map((story, i) => ({
              key: story.key,
              content: <StoryCard story={story} index={i} />,
            }))}
          />
        </div>
      </section>

      <section className="border-t border-border/70">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
          <Reveal>
            <p className="rule-label">Index</p>
            <h2 className="mt-4 max-w-xl text-4xl leading-tight text-foreground sm:text-5xl">
              <BoxReveal>Everything on the substrate</BoxReveal>
            </h2>
          </Reveal>
          <div className="mt-12">
            <HoverPreviewList
              items={stackedStories.map((story, i) => ({
                key: story.key,
                row: (
                  <Link
                    to={story.to}
                    className="group flex items-baseline justify-between gap-6 border-t border-border py-7 transition-colors last:border-b hover:bg-accent/40"
                  >
                    <span className="flex items-baseline gap-6">
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
                        0{i + 1}
                      </span>
                      <span className="font-display text-3xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                        {story.label}
                      </span>
                    </span>
                    <span className="hidden text-sm text-muted-foreground sm:block">
                      {story.title}
                    </span>
                  </Link>
                ),
                preview: (
                  <div
                    className="tile-aurora flex h-44 w-64 items-end rounded-2xl p-5 shadow-2xl"
                    style={
                      {
                        "--tile-a": story.colors.a,
                        "--tile-b": story.colors.b,
                        "--tile-c": story.colors.c,
                      } as React.CSSProperties
                    }
                  >
                    <p className="text-sm leading-snug text-white">{story.body}</p>
                  </div>
                ),
              }))}
            />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-t border-border/70">
        <div className="relative mx-auto max-w-2xl px-6 py-28 text-center sm:py-32">
          <ParallaxY from={30} to={-30}>
            <Reveal>
              <h2 className="text-4xl leading-tight text-foreground sm:text-5xl">
                Early, and open to company
              </h2>
              <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                If you are building at the same layer — models, runtimes, browsers — we would like
                to hear from you.
              </p>
              <div className="mt-10">
                <EmailCapture />
              </div>
            </Reveal>
          </ParallaxY>
        </div>
      </section>
    </>
  );
}

function MarqueeRow({ copy }: { copy: number }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={copy === 1}>
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
  );
}

function StoryCard({ story, index }: { story: (typeof stackedStories)[number]; index: number }) {
  return (
    <Link
      to={story.to}
      className="tile-aurora group flex min-h-[24rem] flex-col justify-between rounded-3xl p-10 shadow-xl sm:min-h-[26rem]"
      style={
        {
          "--tile-a": story.colors.a,
          "--tile-b": story.colors.b,
          "--tile-c": story.colors.c,
        } as React.CSSProperties
      }
    >
      <div className="flex items-center justify-between">
        <p className="rule-label !text-white/90">{story.label}</p>
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-white/70">
          0{index + 1} / 04
        </p>
      </div>
      <div className="max-w-xl">
        <h3 className="text-4xl leading-snug text-white drop-shadow-sm sm:text-5xl">
          {story.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-white/85">{story.body}</p>
        <span className="mt-7 inline-flex items-center gap-2 text-sm text-white">
          Read more
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
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
  to: "/kernel" | "/void" | "/folio" | "/arcadia";
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
