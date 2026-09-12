import { createFileRoute, Link } from "@tanstack/react-router";
import { SpectralMark } from "@/components/SpectralMark";
import { OrbField } from "@/components/OrbField";
import { Reveal } from "@/components/Reveal";
import { BoxReveal } from "@/components/anim/BoxReveal";
import { ScrambleText } from "@/components/anim/ScrambleText";
import { CountUp } from "@/components/anim/CountUp";
import { HoverExpand } from "@/components/anim/HoverExpand";
import { StickyCards } from "@/components/anim/StickyCards";
import type { HoverExpandItem } from "@/components/anim/HoverExpand";
import { VanishForm } from "@/components/ui/skiper-ui/skiper56";
import { Skiper24 } from "@/components/ui/skiper-ui/skiper24";
import { Skiper86 } from "@/components/ui/skiper-ui/skiper86";

export const Route = createFileRoute("/arcadia")({
  head: () => ({
    meta: [
      { title: "Arcadia — Autonomous Agent Assistant on Substrate" },
      {
        name: "description",
        content:
          "Arcadia is Substrate's autonomous agent assistant: fleet orchestration, local-first intelligence, automated triggers, and IDE-native pair engineering.",
      },
      { property: "og:title", content: "Arcadia — Autonomous Agent Assistant" },
      {
        property: "og:description",
        content:
          "Launch fleets of autonomous agents that work in parallel across your terminal, browser, Slack, and codebase.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArcadiaPage,
});

const modes = [
  { k: "Autonomous", v: "Planner and executor in one loop — full agency, no hand-holding" },
  { k: "Codebase", v: "AST-level in-place edits across your repository" },
  { k: "Browser", v: "OpenClaw engine — navigates and interacts with live web surfaces" },
  { k: "Terminal", v: "Shell runner with local-first execution and sandboxed tooling" },
];

const features: HoverExpandItem[] = [
  {
    key: "fleets",
    index: "01",
    title: "Fleet orchestration",
    body: "Run dozens of agents in parallel on ambitious tasks for hours or days. They share memory, write isolated branches, and report progress continuously.",
    colors: { a: "oklch(0.55 0.18 255)", b: "oklch(0.48 0.16 250)", c: "oklch(0.42 0.14 245)" },
  },
  {
    key: "automation",
    index: "02",
    title: "Automation triggers",
    body: "Always-on agents that run on schedules or webhooks to build, maintain, and fix your software before bugs reach production.",
    colors: { a: "oklch(0.55 0.16 155)", b: "oklch(0.48 0.14 160)", c: "oklch(0.42 0.12 150)" },
  },
  {
    key: "verification",
    index: "03",
    title: "Self-verification",
    body: "Every change is tested before merge. Arcadia runs the suite, reads the failures, and only opens a PR when the build is clean.",
    colors: { a: "oklch(0.55 0.20 22)", b: "oklch(0.48 0.18 25)", c: "oklch(0.42 0.16 30)" },
  },
];

const loopSteps = [
  {
    index: "01",
    title: "Perceive",
    body: "Arcadia reads the workspace AST — 34 files, their dependencies, their types — and builds a perception of the codebase in milliseconds.",
  },
  {
    index: "02",
    title: "Plan",
    body: "It generates a multi-stage execution DAG: which files to touch, which tests to run, which tools to call, and in what order.",
  },
  {
    index: "03",
    title: "Execute",
    body: "In-place file edits, terminal commands, and browser interactions — all through one tool harness with hot-swappable runtimes.",
  },
  {
    index: "04",
    title: "Verify",
    body: "The suite runs. Failures are read and fixed. Only when every test passes does Arcadia open a pull request, self-reviewed.",
  },
];

const stats = [
  { value: 250, suffix: "k+", label: "Autonomous PRs merged" },
  { value: 99, suffix: ".4%", label: "First-pass test accuracy" },
  { value: 16, suffix: "x", label: "Parallel subagent scaling" },
  { value: 0, suffix: "ms", label: "Telemetry data retention" },
];

const facts = [
  { k: "Shape", v: "Autonomous agent assistant with fleet orchestration" },
  { k: "Modes", v: "Autonomous, Codebase, Browser, Terminal" },
  { k: "Triggers", v: "Cron, webhook, CI event, manual" },
  { k: "Isolation", v: "Ephemeral sandboxes with zero data retention" },
  { k: "Integration", v: "Terminal, Slack, GitHub, IDE-native" },
  { k: "Status", v: "Early access — waitlist open" },
];

function ArcadiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <SpectralMark variant="arcadia" className="mx-auto h-20 w-20 text-clay" />
          <div className="mt-8 flex items-center justify-center gap-3">
            <p className="rule-label">Arcadia</p>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
              Early access
            </span>
          </div>
          <h1 className="mt-5 text-5xl leading-[1.05] text-foreground sm:text-6xl">
            The autonomous agent <em className="font-light">built into your codebase</em>
          </h1>
          <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Arcadia operates directly on your filesystem, runs terminal commands, navigates browser
            surfaces, and orchestrates fleets of subagents in parallel — all on the Substrate
            runtime.
          </p>
          <a
            href="mailto:hello@substrate.dev?subject=Arcadia%20Access%20Request"
            className="mt-10 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request access
          </a>
        </Reveal>
      </section>

      {/* Agent modes grid */}
      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-border/70 sm:grid-cols-4">
          {modes.map((m, i) => (
            <Reveal key={m.k} delay={i * 0.08} className="bg-card px-6 py-10">
              <p className="rule-label">
                <ScrambleText text={m.k} />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.v}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Two-column: Autonomous execution + OrbField visual */}
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-14 px-6 py-24 sm:py-32 lg:grid-cols-2">
          <div>
            <p className="rule-label">Autonomous execution</p>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
              <BoxReveal>One loop, every tool</BoxReveal>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Arcadia perceives the codebase, plans a multi-step execution, and acts through one
              tool harness — file edits, terminal commands, and browser interactions in a single
              pass. No context switching between apps, no copy-paste between tools.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Run a single agent for a quick fix, or launch a fleet that works in parallel for
              hours. They share memory, write isolated branches, and report continuously.
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
            <BoxReveal>What Arcadia does</BoxReveal>
          </h2>
          <Reveal className="mt-14">
            <HoverExpand items={features} />
          </Reveal>
        </div>
      </section>

      {/* Autonomous loop — StickyCards */}
      <section className="relative border-b border-border/70 bg-card/60 grain-veil">
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">
          <h2 className="max-w-xl text-3xl leading-tight text-foreground sm:text-4xl">
            <BoxReveal>The autonomous loop</BoxReveal>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Four stages, repeated until the task is done and the build is clean.
          </p>
          <div className="mt-10">
            <StickyCards
              items={loopSteps.map((step) => ({
                key: step.index,
                content: (
                  <div className="glass-panel mx-auto flex min-h-[18rem] max-w-2xl flex-col justify-between rounded-3xl p-8 shadow-xl">
                    <p className="rule-label">{step.index} / 04</p>
                    <div>
                      <h3 className="text-3xl text-foreground">{step.title}</h3>
                      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ),
              }))}
            />
          </div>
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

      {/* Skiper24 — TikTikColorList with sound effects */}
      <Skiper24 />

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

      {/* CTA with Skiper56 VanishForm + Skiper86 AppleBorderGradient */}
      <section className="relative isolate overflow-hidden border-t border-border/70">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl px-6 py-24 text-center sm:py-28">
          <SpectralMark variant="arcadia" className="mx-auto h-28 w-28 text-clay" />
          <h2 className="mt-8 text-3xl leading-tight text-foreground sm:text-4xl">
            Start building with Arcadia
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Get early access to autonomous fleet orchestration and always-on automation.
          </p>

          {/* Skiper56 — VanishForm input */}
          <div className="mx-auto mt-8 max-w-md">
            <VanishForm
              placeholder="Ask Arcadia to plan, edit, or execute anything..."
              onSubmit={() => {}}
            />
          </div>

          {/* Skiper86 — AppleBorderGradient CTA */}
          <div className="mx-auto mt-8 max-w-xs">
            <Skiper86 className="rounded-full" enableSound>
              <div className="flex items-center justify-center p-3">
                <a
                  href="mailto:hello@substrate.dev?subject=Arcadia%20Access%20Request"
                  className="text-sm font-medium text-primary-foreground"
                >
                  Request access
                </a>
              </div>
            </Skiper86>
          </div>

          <div className="mt-8">
            <Link
              to="/kernel"
              className="rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              Meet Kernel
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
