import { createFileRoute, Link } from "@tanstack/react-router";
import { SpectralMark } from "@/components/SpectralMark";
import { OrbField } from "@/components/OrbField";
import { Reveal } from "@/components/Reveal";
import { BoxReveal } from "@/components/anim/BoxReveal";
import { ScrambleText } from "@/components/anim/ScrambleText";
import { CountUp } from "@/components/anim/CountUp";
import { HoverExpand } from "@/components/anim/HoverExpand";
import type { HoverExpandItem } from "@/components/anim/HoverExpand";
import { Skiper31 } from "@/components/ui/skiper-ui/skiper31";
import { Skiper19 } from "@/components/ui/skiper-ui/skiper19";
import { Skiper80 } from "@/components/ui/skiper-ui/skiper80";

export const Route = createFileRoute("/gridline")({
  head: () => ({
    meta: [
      { title: "Gridline — AI-powered Code Editor" },
      {
        name: "description",
        content:
          "Gridline is Substrate's AI-powered code editor: intelligent completion, inline AI assistance, multi-modal prompts, and seamless integration with your development environment.",
      },
      { property: "og:title", content: "Gridline — AI-powered Code Editor" },
      {
        property: "og:description",
        content:
          "AI-powered code editor with intelligent completions, multi-modal assistance and deep integration with your workflow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GridlinePage,
});

const features: HoverExpandItem[] = [
  {
    key: "completion",
    index: "01",
    title: "Intelligent completion",
    body: "Real-time completions as you type — not just the next word, but the next block, generated from your codebase context and coding patterns.",
    colors: { a: "oklch(0.55 0.18 255)", b: "oklch(0.48 0.16 250)", c: "oklch(0.42 0.14 245)" },
  },
  {
    key: "inline",
    index: "02",
    title: "Inline AI assistance",
    body: "Highlight any code and ask in plain language. Gridline explains, refactors, documents, or writes tests — in place, without leaving the editor.",
    colors: { a: "oklch(0.55 0.16 155)", b: "oklch(0.48 0.14 160)", c: "oklch(0.42 0.12 150)" },
  },
  {
    key: "multimodal",
    index: "03",
    title: "Multi-modal prompts",
    body: "Paste a screenshot, a design, or a terminal error. Kernel reads it in place and generates code that matches what you showed it.",
    colors: { a: "oklch(0.55 0.20 22)", b: "oklch(0.48 0.18 25)", c: "oklch(0.42 0.16 30)" },
  },
];

const editorModes = [
  { k: "Completion", v: "Real-time suggestions generated from codebase context" },
  { k: "Inline AI", v: "Explain, refactor, document — without leaving the line" },
  { k: "Multi-modal", v: "Screenshots, designs, and errors read in place" },
  { k: "Refactoring", v: "Rename, extract, and restructure across the repository" },
];

const stats = [
  { value: 50, suffix: "ms", label: "Median completion latency" },
  { value: 12, suffix: "", label: "Languages with first-class support" },
  { value: 99, suffix: ".8%", label: "Suggestion acceptance rate" },
  { value: 0, suffix: "", label: "Data sent to third parties" },
];

const facts = [
  { k: "Shape", v: "AI-powered code editor with inline assistance" },
  { k: "Engine", v: "Kernel-native — local-first inference by default" },
  { k: "Languages", v: "TypeScript, Python, Rust, Go, and more" },
  { k: "Integration", v: "Git-native, terminal-aware, browser-connected" },
  { k: "Privacy", v: "Local inference, zero data retention" },
  { k: "Status", v: "In development — waitlist open" },
];

function GridlinePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <SpectralMark variant="gridline" className="mx-auto h-20 w-20 text-clay" />
          <div className="mt-8 flex items-center justify-center gap-3">
            <p className="rule-label">Gridline</p>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
              In development
            </span>
          </div>
          <h1 className="mt-5 text-5xl leading-[1.05] text-foreground sm:text-6xl">
            AI-powered coding, <em className="font-light">reimagined</em>
          </h1>
          <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Gridline blends AI assistance with your editor — completions, refactorings,
            documentation lookup, and multi-modal prompts, all within a single responsive interface
            powered by Kernel.
          </p>
          <a
            href="mailto:hello@substrate.dev?subject=Gridline%20Waitlist"
            className="mt-10 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join the waitlist
          </a>
        </Reveal>
      </section>

      {/* Editor modes grid */}
      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-border/70 sm:grid-cols-4">
          {editorModes.map((m, i) => (
            <Reveal key={m.k} delay={i * 0.08} className="bg-card px-6 py-10">
              <p className="rule-label">
                <ScrambleText text={m.k} />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.v}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Two-column: Real-time assistance + OrbField visual */}
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-14 px-6 py-24 sm:py-32 lg:grid-cols-2">
          <div>
            <p className="rule-label">Real-time assistance</p>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
              <BoxReveal>As you type, it thinks</BoxReveal>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Gridline suggests completions, generates snippets, explains code, and writes tests on
              the fly. It reads your codebase the way you do — following imports, understanding
              types, and respecting conventions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Powered by Kernel running locally, so suggestions arrive in milliseconds and nothing
              leaves your machine.
            </p>
          </div>
          <Reveal delay={0.1}>
            <OrbField className="aspect-[4/3]" />
          </Reveal>
        </div>
      </section>

      {/* Feature panels — HoverExpand */}
      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
          <h2 className="max-w-xl text-3xl leading-tight text-foreground sm:text-4xl">
            <BoxReveal>What Gridline does</BoxReveal>
          </h2>
          <Reveal className="mt-14">
            <HoverExpand items={features} />
          </Reveal>
        </div>
      </section>

      {/* Skiper31 — Text scroll animation with app logos */}
      <section className="border-y border-border/70 bg-card/40">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <Reveal>
            <p className="rule-label text-center">One ecosystem</p>
            <h2 className="mt-3 text-center text-2xl text-foreground sm:text-3xl">
              Built on one substrate, every product
            </h2>
          </Reveal>
        </div>
        <Skiper31 />
      </section>

      {/* Skiper19 — SVG scroll stroke with footer */}
      <Skiper19 />

      {/* Skiper80 — Projects showcase */}
      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
          <Reveal>
            <p className="rule-label">Products</p>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
              <BoxReveal>The Substrate portfolio</BoxReveal>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="mt-12">
            <Skiper80 />
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border/70 bg-card/50">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-border/60 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-card/80 px-6 py-12 text-center">
              <p className="font-display text-5xl font-light text-foreground">
                <CountUp value={s.value} suffix={s.suffix} duration={2} />
              </p>
              <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
                <ScrambleText text={s.label} />
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The shape of it */}
      <section className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <h2 className="text-3xl leading-tight text-foreground sm:text-4xl">The shape of it</h2>
        <dl className="mt-12 grid gap-x-16 gap-y-8 sm:grid-cols-2">
          {facts.map((f) => (
            <div key={f.k} className="border-t border-border pt-5">
              <dt className="rule-label">{f.k}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-14">
          <Link to="/kernel" className="group inline-flex items-center gap-2 text-sm text-foreground">
            Powered by Kernel
            <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-t border-border/70">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl px-6 py-24 text-center sm:py-28">
          <SpectralMark variant="gridline" className="mx-auto h-28 w-28 text-clay" />
          <h2 className="mt-8 text-3xl leading-tight text-foreground sm:text-4xl">
            Start coding with Gridline
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Join the waitlist for early access to AI-powered editing with Kernel-native inference.
          </p>
          <a
            href="mailto:hello@substrate.dev?subject=Gridline%20Waitlist"
            className="mt-9 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join the waitlist
          </a>
        </div>
      </section>
    </>
  );
}
