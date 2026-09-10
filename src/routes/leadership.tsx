import { createFileRoute, Link } from "@tanstack/react-router";
import { BrainCircuit, Bot, Compass, Globe, Terminal, Cpu } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { BoxReveal } from "@/components/anim/BoxReveal";
import { WordsReveal } from "@/components/anim/WordsReveal";
import { CountUp } from "@/components/anim/CountUp";
import { ScrambleText } from "@/components/anim/ScrambleText";
import { Meteors } from "@/components/anim/Meteors";
import { AnimatedList } from "@/components/anim/AnimatedList";
import { ShinyText } from "@/components/anim/ShinyText";
import { TypewriterText } from "@/components/anim/TypewriterText";
import { EmailCapture } from "@/components/anim/EmailCapture";
import { SpectralMark } from "@/components/SpectralMark";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — how Substrate is led" },
      {
        name: "description",
        content:
          "How a small research and product studio runs: six operating principles, one shared runtime, and the bench behind Kernel, VOID, Folio, Arcadia and Gridline.",
      },
      { property: "og:title", content: "Leadership — how Substrate is led" },
      {
        property: "og:description",
        content:
          "Small bench, long arc: the principles and people under the substrate that Kernel, VOID, Folio, Arcadia and Gridline share.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LeadershipPage,
});

const PRINCIPLES = [
  {
    index: "01",
    title: "Research leads, product follows",
    body: "Every surface starts as a question we can run an experiment against. Nothing ships because a roadmap said so — it ships because the result did.",
  },
  {
    index: "02",
    title: "Small bench, long arc",
    body: "We stay deliberately small and hire for range. Five surfaces exist because the same people can hold the model, the browser and the editor in one head.",
  },
  {
    index: "03",
    title: "Writing is the interface",
    body: "Decisions live in documents, not meetings. If a choice cannot be explained in one page of writing, it is not yet a decision.",
  },
  {
    index: "04",
    title: "Taste is a discipline",
    body: "Design is not decoration at the end. Every millisecond, margin and message is part of the same argument about what the computer should feel like.",
  },
  {
    index: "05",
    title: "Quiet over loud",
    body: "We lead by receding. No engagement metrics, no growth dark patterns — the measure of our software is how rarely it interrupts you.",
  },
  {
    index: "06",
    title: "The substrate outlives the surfaces",
    body: "Products come and go; the runtime, the memory model and the standard stay. We optimize for the layer that compounds.",
  },
];

const AREAS = [
  {
    icon: BrainCircuit,
    label: "Research",
    name: "Kernel & the model bench",
    body: "Training runs, evaluation harnesses and the multimodal representation everything else reads from.",
  },
  {
    icon: Bot,
    label: "Agent Lab",
    name: "Arcadia fleets",
    body: "Orchestration, autonomous triggers and the safety review that keeps agents verifiable.",
  },
  {
    icon: Compass,
    label: "Product",
    name: "Folio surfaces",
    body: "The quiet operating surface — where the runtime meets a person's actual day.",
  },
  {
    icon: Globe,
    label: "Browser",
    name: "VOID windows",
    body: "The window onto the substrate: rendering, privacy model and the page-as-surface.",
  },
  {
    icon: Terminal,
    label: "Developer Tools",
    name: "Gridline editor",
    body: "The AI code editor — speculative completions, agent editing and the AST lattice.",
  },
  {
    icon: Cpu,
    label: "Runtime",
    name: "The substrate itself",
    body: "One shared runtime, one memory, one notion of context under all five surfaces.",
  },
];

const CADENCE = [
  {
    when: "Weekly",
    what: "Research review over the Kernel runs — every number reproduced before it is spoken.",
  },
  {
    when: "Monthly",
    what: "Public memo: what shipped, what failed, what we changed our mind about.",
  },
  {
    when: "Quarterly",
    what: "Substrate cut — one runtime released under all five surfaces at once.",
  },
  {
    when: "Always",
    what: "Decisions in writing, in the open. Reviewers rotate; the document is the authority.",
  },
];

const STATS = [
  { value: 5, suffix: "", label: "Surfaces, one team" },
  { value: 6, suffix: "", label: "Operating principles" },
  { value: 1, suffix: "", label: "Shared runtime" },
  { value: 0, suffix: "", label: "Engagement metrics" },
];

function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="hero-cloudscape" aria-hidden="true" />
        <Meteors count={16} />
        <div className="relative mx-auto flex min-h-[62svh] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
          <div className="mb-8 inline-flex items-center gap-3">
            <SpectralMark variant="substrate" className="h-8 w-8 text-foreground" />
            <span className="rule-label">The people under the products</span>
          </div>
          <h1 className="text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            <WordsReveal text="Leadership is the" delay={0.15} />
            <br />
            <WordsReveal text="layer underneath." delay={0.45} />
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            <TypewriterText
              text="Substrate is run by the people who build it — a small bench, six principles, and one runtime every product answers to."
              className="font-mono text-sm sm:text-base"
              startDelay={900}
            />
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-border/70 bg-card/40 grain-veil py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="rule-label">How we lead</p>
            <h2 className="mt-4 max-w-xl text-4xl leading-tight text-foreground sm:text-5xl">
              <BoxReveal>Six principles we run by</BoxReveal>
            </h2>
          </Reveal>
          <AnimatedList className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {PRINCIPLES.map((p) => (
              <div
                key={p.index}
                className="h-full rounded-2xl border border-border/70 bg-card/70 p-7 backdrop-blur-sm transition-shadow hover:shadow-lg"
              >
                <p className="rule-label">{p.index}</p>
                <h3 className="mt-4 text-xl font-light leading-snug text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* The bench */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="rule-label">The bench</p>
          <h2 className="mt-4 max-w-xl text-4xl leading-tight text-foreground sm:text-5xl">
            <BoxReveal>One team, five surfaces</BoxReveal>
          </h2>
        </Reveal>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          There are no walls between research, product and engineering — the person who trains the
          model reviews the editor&apos;s completions, and the person who designs the browser sits
          in the runtime reviews. Leadership is knowing the whole stack.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.06}>
              <TiltCard className="h-full">
                <div className="tick-hover flex h-full flex-col rounded-2xl border border-border/70 bg-card/60 p-7">
                  <div className="flex items-center justify-between">
                    <a.icon className="h-6 w-6 text-[var(--spectral-b)]" />
                    <span className="rounded-full border border-border/70 px-2.5 py-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {a.label}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-light text-foreground">{a.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Operating cadence */}
      <section className="border-t border-border/70 bg-card/30 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="rule-label">Operating cadence</p>
            <h2 className="mt-4 max-w-xl text-4xl leading-tight text-foreground sm:text-5xl">
              <BoxReveal>The rhythm of the studio</BoxReveal>
            </h2>
          </Reveal>
          <AnimatedList className="mt-12 space-y-4" stagger={0.12}>
            {CADENCE.map((c) => (
              <div
                key={c.when}
                className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-card/60 p-6 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="w-24 shrink-0 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {c.when}
                </span>
                <p className="leading-relaxed text-foreground/90">{c.what}</p>
              </div>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border/70">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border/60 lg:grid-cols-4">
          {STATS.map((s) => (
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

      {/* Quote + CTA */}
      <section className="relative isolate overflow-hidden border-t border-border/70">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl px-6 py-24 text-center sm:py-28">
          <Reveal>
            <p className="font-display text-3xl leading-snug text-foreground sm:text-4xl">
              <ShinyText text="“We build less, better — the substrate is the strategy.”" />
            </p>
            <p className="mt-4 font-mono text-[0.625rem] uppercase tracking-[0.22em] text-muted-foreground">
              Studio leadership
            </p>
            <div className="mt-12">
              <EmailCapture subject="Hello Substrate — leadership" />
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Curious how the principles turn into products?{" "}
              <Link
                to="/studio"
                className="group inline-flex items-center gap-1.5 text-foreground underline-offset-4 hover:underline"
              >
                See how we build
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
