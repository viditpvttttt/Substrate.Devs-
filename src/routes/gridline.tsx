import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Zap,
  GitBranch,
  BrainCircuit,
  Terminal,
  ShieldCheck,
  Orbit,
  Wand2,
  Bot,
  MessageSquareText,
  ArrowRight,
} from "lucide-react";
import { SpectralMark } from "@/components/SpectralMark";
import { TiltCard } from "@/components/TiltCard";
import { Reveal } from "@/components/Reveal";
import { BoxReveal } from "@/components/anim/BoxReveal";
import { CountUp } from "@/components/anim/CountUp";
import { ScrambleText } from "@/components/anim/ScrambleText";
import { MagneticButton } from "@/components/anim/MagneticButton";
import { TypewriterText } from "@/components/anim/TypewriterText";
import { BorderBeam } from "@/components/anim/BorderBeam";
import { DotPattern } from "@/components/anim/DotPattern";
import { AnimatedList } from "@/components/anim/AnimatedList";
import { MarqueeCards } from "@/components/anim/MarqueeCards";
import { ShinyText } from "@/components/anim/ShinyText";
import { EmailCapture } from "@/components/anim/EmailCapture";
import { GridlineMatrix } from "@/components/GridlineMatrix";

export const Route = createFileRoute("/gridline")({
  head: () => ({
    meta: [
      { title: "Gridline — AI-powered Code Editor" },
      {
        name: "description",
        content:
          "Gridline is Substrate's AI-powered code editor: speculative completions on the AST lattice, multi-file agent editing, terminal-native verification, and Arcadia fleets built in — on the same runtime as Kernel and VOID.",
      },
      { property: "og:title", content: "Gridline — AI-powered Code Editor" },
      {
        property: "og:description",
        content:
          "AI-powered code editor with speculative completions, multi-file agent editing and deep integration with your workflow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GridlinePage,
});

const FEATURES = [
  {
    icon: Zap,
    title: "Speculative completions",
    body: "Predictions are evaluated ahead-of-time on continuous AST lattices — the suggestion is ready before the keystroke settles.",
  },
  {
    icon: GitBranch,
    title: "Agent editing",
    body: "Describe the change; agents plan the diff set, edit across files in place, and open a branch with review notes attached.",
  },
  {
    icon: BrainCircuit,
    title: "Whole-repo context",
    body: "A spatial tensor memory maps every function, dependency and variable across multi-repo workspaces for instant retrieval.",
  },
  {
    icon: Terminal,
    title: "Terminal native",
    body: "Runs commands, watches output and fixes the failure in the same loop — no copy-paste between editor and shell.",
  },
  {
    icon: ShieldCheck,
    title: "Local-first privacy",
    body: "Index and weights stay on your device. Remote compute is an option you flip on, not a default you opt out of.",
  },
  {
    icon: Orbit,
    title: "Arcadia built in",
    body: "Dispatch agent fleets across terminal, browser and Slack straight from the editor — they share the same memory.",
  },
];

const MODES = [
  {
    id: "edit",
    icon: Wand2,
    name: "Edit",
    blurb: "Inline, ahead-of-time completions with ghost text you accept with Tab.",
    demo: "const lattice = await substrate.ast.synthesize(workspace)",
  },
  {
    id: "agent",
    icon: Bot,
    name: "Agent",
    blurb: "A multi-file diff plan, applied in place and verified in a sandbox.",
    demo: "arcadia> refactor auth to PKCE across 6 files, keep tests green",
  },
  {
    id: "ask",
    icon: MessageSquareText,
    name: "Ask",
    blurb: "Grounded answers from your repo — every claim linked to a symbol.",
    demo: "where does token refresh race the socket handshake?",
  },
] as const;

const WORKFLOW = [
  {
    step: "01",
    title: "Prompt",
    body: "Describe the change in plain language — a bug, a refactor, a new surface.",
  },
  {
    step: "02",
    title: "Plan",
    body: "The agent maps affected files and symbols through the AST lattice before touching anything.",
  },
  {
    step: "03",
    title: "Edit",
    body: "Multi-file diffs are applied in place, with ghost previews you can walk through line by line.",
  },
  {
    step: "04",
    title: "Verify",
    body: "Sandboxed test runs with deterministic proofs — 18/18 green or it does not ship.",
  },
  {
    step: "05",
    title: "Ship",
    body: "A branch, review notes and telemetry attached. You approve; the runtime handles the rest.",
  },
];

const METRICS = [
  { value: 40, suffix: "+", label: "Languages, one grammar" },
  { value: 128, suffix: "", label: "Token lookahead per keystroke" },
  { value: 100, suffix: "%", label: "AST indexed locally" },
  { value: 0, suffix: "", label: "Translators to the runtime" },
];

const LANGUAGES = [
  "TypeScript",
  "Rust",
  "Python",
  "Go",
  "Zig",
  "Swift",
  "Kotlin",
  "C++",
  "Elixir",
  "Haskell",
  "Lua",
  "Julia",
];

const EDITOR_LINES = [
  { indent: 0, text: "export async function sync(ctx: Runtime) {", tone: "fg" },
  { indent: 1, text: "const lattice = ctx.ast.synthesize(workspace);", tone: "fg" },
  { indent: 1, text: "const deltas = await lattice.predict(ctx.keystream);", tone: "fg" },
  { indent: 1, text: "for (const d of deltas) ctx.applyInPlace(d);", tone: "ghost" },
  { indent: 1, text: "return lattice.verify(deltas);", tone: "ghost" },
  { indent: 0, text: "}", tone: "fg" },
] as const;

function GridlinePage() {
  const [activeMode, setActiveMode] = useState<(typeof MODES)[number]["id"]>("edit");
  const mode = MODES.find((m) => m.id === activeMode) ?? MODES[0];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden py-24 bg-gradient-to-b from-foreground/5 to-background">
        <div className="hero-cloudscape" aria-hidden="true" />
        <DotPattern />
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
            AI-powered coding, reimagined
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            <TypewriterText
              text="Completions before you finish the keystroke. Agents that plan, edit and verify across files. One editor on the same runtime as the model."
              className="font-mono text-sm sm:text-base"
              startDelay={600}
            />
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
          >
            <MagneticButton>
              <Link
                to="/tools"
                className="btn-shine inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
              >
                Explore all tools
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.25}>
              <Link
                to="/arcadia"
                className="group inline-flex items-center gap-2 text-sm text-foreground"
              >
                Agents in the editor
                <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Editor mockup with border beam */}
      <section className="mx-auto max-w-5xl px-6 pb-8">
        <Reveal>
          <div className="relative rounded-3xl border border-border/70 bg-card/80 shadow-2xl backdrop-blur-md">
            <BorderBeam duration={7} />
            <div className="flex items-center justify-between border-b border-border/70 px-5 py-3">
              <div className="flex items-center gap-2">
                <SpectralMark variant="gridline" className="h-4 w-4 text-muted-foreground" />
                <span className="font-mono text-xs text-muted-foreground">runtime.ts</span>
                <span className="rounded-full bg-[var(--spectral-b)]/10 px-2 py-0.5 font-mono text-[0.5625rem] uppercase tracking-wider text-[var(--spectral-b)]">
                  Gridline Engine
                </span>
              </div>
              <span className="hidden font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground sm:block">
                ● Predicting
              </span>
            </div>
            <div className="overflow-x-auto p-5">
              <pre className="font-mono text-xs leading-7 sm:text-sm">
                {EDITOR_LINES.map((line, i) => (
                  <div key={i} className="flex items-baseline gap-4">
                    <span className="w-5 shrink-0 text-right text-muted-foreground/50">
                      {i + 1}
                    </span>
                    <span
                      className={
                        line.tone === "ghost"
                          ? "text-[var(--spectral-b)]/90"
                          : "text-foreground/90"
                      }
                    >
                      {"  ".repeat(line.indent)}
                      {line.text}
                    </span>
                  </div>
                ))}
              </pre>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 px-5 py-3">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
                Ghost text · AST lattice · 0.18ms prediction
              </span>
              <span className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[0.625rem] text-muted-foreground">
                Tab to accept
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="rule-label">Built for flow</p>
          <h2 className="mt-4 max-w-xl text-4xl leading-tight text-foreground sm:text-5xl">
            <BoxReveal>Six ways the editor disappears</BoxReveal>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="tick-hover group h-full rounded-2xl border border-border/70 bg-card/60 p-7 transition-colors">
                <f.icon className="h-6 w-6 text-[var(--spectral-b)] transition-transform duration-300 group-hover:-translate-y-1" />
                <h3 className="mt-5 text-xl font-light text-foreground">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Modes */}
      <section className="border-y border-border/70 bg-card/40 grain-veil py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="rule-label">Three modes</p>
            <h2 className="mt-4 max-w-xl text-4xl leading-tight text-foreground sm:text-5xl">
              <BoxReveal>Edit, delegate, or ask</BoxReveal>
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {MODES.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveMode(m.id)}
                className={`inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm transition-all ${
                  activeMode === m.id
                    ? "border-[var(--spectral-b)]/50 bg-[var(--spectral-b)]/10 text-foreground shadow-sm"
                    : "border-border/70 bg-card/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <m.icon className="h-4 w-4" />
                {m.name}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={mode.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 grid items-center gap-8 rounded-3xl border border-border/70 bg-card/70 p-8 backdrop-blur-md lg:grid-cols-2"
            >
              <div>
                <h3 className="text-2xl font-light text-foreground">{mode.name} mode</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{mode.blurb}</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-background/70 p-5 font-mono text-xs text-foreground/90 sm:text-sm">
                <TypewriterText key={mode.id + mode.demo} text={mode.demo} speed={30} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* The engine — reused interactive matrix */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <GridlineMatrix />
      </section>

      {/* Workflow */}
      <section className="border-t border-border/70 bg-card/30 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="rule-label">The loop</p>
            <h2 className="mt-4 max-w-xl text-4xl leading-tight text-foreground sm:text-5xl">
              <BoxReveal>From prompt to branch</BoxReveal>
            </h2>
          </Reveal>
          <AnimatedList className="mt-12 space-y-4" stagger={0.14}>
            {WORKFLOW.map((w) => (
              <div
                key={w.step}
                className="tick-hover flex items-baseline gap-6 rounded-2xl border border-border/70 bg-card/60 p-6"
              >
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {w.step}
                </span>
                <div>
                  <h3 className="text-xl font-light text-foreground">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </div>
                <ArrowRight className="ml-auto hidden h-4 w-4 shrink-0 text-muted-foreground/50 sm:block" />
              </div>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-t border-border/70">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border/60 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-card/80 px-6 py-12 text-center">
              <p className="font-display text-6xl font-light text-foreground">
                <CountUp value={m.value} suffix={m.suffix} />
              </p>
              <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
                <ScrambleText text={m.label} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Languages marquee */}
      <section className="border-t border-border/70 py-16">
        <div className="mx-auto mb-8 max-w-6xl px-6">
          <Reveal>
            <p className="rule-label text-center">One grammar, every language you write</p>
          </Reveal>
        </div>
        <MarqueeCards duration={32}>
          {LANGUAGES.map((lang) => (
            <span
              key={lang}
              className="whitespace-nowrap rounded-full border border-border/70 bg-card/70 px-6 py-2.5 font-mono text-xs text-muted-foreground backdrop-blur-sm"
            >
              {lang}
            </span>
          ))}
        </MarqueeCards>
        <div className="mx-auto mt-8 max-w-3xl px-6 text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            <ShinyText text="The flow of Cursor, the speculative engine of Antigravity, the mesh of OpenCode — on one substrate." />
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-t border-border/70">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="text-4xl leading-tight text-foreground sm:text-5xl">
              Write on the substrate
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Gridline ships with the next substrate cut. Early access opens tool by tool.
            </p>
            <div className="mt-10">
              <EmailCapture subject="Gridline early access" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
