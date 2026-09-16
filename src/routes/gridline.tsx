import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { BoxReveal } from "@/components/anim/BoxReveal";
import { CountUp } from "@/components/anim/CountUp";
import { ScrambleText } from "@/components/anim/ScrambleText";
import { AgentWindow } from "@/components/gridline/AgentWindow";
import { AutomationsWindow } from "@/components/gridline/AutomationsWindow";
import { EverywhereWindows } from "@/components/gridline/EverywhereWindows";
import { FeatureCards } from "@/components/gridline/FeatureCards";
import { PlanWindow } from "@/components/gridline/PlanWindow";
import { SectionLink } from "@/components/gridline/parts";

export const Route = createFileRoute("/gridline")({
  head: () => ({
    meta: [
      { title: "Gridline — your coding agent for ambitious software" },
      {
        name: "description",
        content:
          "Gridline is a coding agent that plans, asks clarifying questions, edits across files, and proves its work with artifacts — in the editor, the terminal, and everywhere your team already works.",
      },
      { property: "og:title", content: "Gridline — a Substrate product" },
      {
        property: "og:description",
        content:
          "Agents plan, ask clarifying questions, edit across files, and prove their work — in the editor, the terminal, and everywhere your team already works.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GridlinePage,
});

const stats = [
  { value: 40, suffix: "+", label: "Languages, one grammar" },
  { value: 50, suffix: "ms", label: "Median completion latency" },
  { value: 18, suffix: "/18", label: "Specs verified before merge" },
  { value: 0, suffix: "", label: "Data sent to third parties" },
];

function GridlinePage() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(45% 60% at 85% 15%, rgba(249,115,22,0.22), transparent 70%), radial-gradient(40% 50% at 10% 90%, rgba(249,115,22,0.12), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <Reveal>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[#a1a1a1]">
              Gridline
            </p>
            <h1 className="mt-5 font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Your coding agent for{" "}
              <span className="text-[#f97316]">ambitious</span> software
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-[#a3a3a3]">
              Gridline is a coding agent that plans, asks clarifying questions, edits across files,
              and proves its work with artifacts — in the editor, the terminal, and everywhere your
              team already works.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@substrate.dev?subject=Gridline%20Waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]"
              >
                Join the beta <ArrowDown className="h-4 w-4" />
              </a>
              <Link
                to="/kernel"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-white transition-colors hover:border-white/60"
              >
                Powered by Kernel <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-6 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[#666]">
              Also on macOS and Linux — free during public beta
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-[#111]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0a0a0a] px-6 py-12 text-center">
              <p className="font-sans text-5xl font-light text-white">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[#666]">
                <ScrambleText text={s.label} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Agent Window — full-bleed dark hero visual */}
      <section className="border-b border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[#a1a1a1]">
              The agent
            </p>
            <h2 className="mt-4 max-w-2xl font-sans text-3xl font-semibold leading-tight text-white sm:text-4xl">
              <BoxReveal>One agent, your whole repository</BoxReveal>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#a3a3a3]">
              Gridline treats the repository as a live, indexable lattice. Every symbol, dependency
              and test is addressable context — so the agent can plan, search and build across files
              without losing the thread.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-12">
            <AgentWindow />
          </Reveal>
        </div>
      </section>

      {/* Feature cards — three columns */}
      <section className="border-b border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[#a1a1a1]">
              Features
            </p>
            <h2 className="mt-4 max-w-2xl font-sans text-3xl font-semibold leading-tight text-white sm:text-4xl">
              <BoxReveal>Built for real work, not autocomplete</BoxReveal>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-14">
            <FeatureCards />
          </Reveal>
        </div>
      </section>

      {/* Plan window — full section */}
      <section className="border-b border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[#a1a1a1]">
                Planning
              </p>
              <h2 className="mt-4 font-sans text-3xl font-semibold leading-tight text-white sm:text-4xl">
                The agent asks before it builds
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#a3a3a3]">
                Gridline drafts a plan in a PRD you can read, asks the clarifying questions that
                matter, then edits across files in place — with diffs small enough to walk line by
                line and a verification loop that runs the suite before anything merges.
              </p>
              <div className="mt-7">
                <SectionLink>See it in action</SectionLink>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <PlanWindow />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Automations */}
      <section className="border-b border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal className="lg:order-last">
              <AutomationsWindow />
            </Reveal>
            <Reveal>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[#a1a1a1]">
                Automations
              </p>
              <h2 className="mt-4 font-sans text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Always-on agents on schedules and triggers
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#a3a3a3]">
                Set agents to run on a schedule, on a webhook, or when a message lands in Slack.
                They work while you sleep, report with a structured format, and queue for review
                before anything merges.
              </p>
              <div className="mt-7">
                <SectionLink>Explore automations</SectionLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Everywhere */}
      <section className="border-b border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal className="text-center">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[#a1a1a1]">
              Everywhere
            </p>
            <h2 className="mt-4 font-sans text-3xl font-semibold leading-tight text-white sm:text-4xl">
              <BoxReveal>In the editor, the terminal, and everywhere your team works</BoxReveal>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[#a3a3a3]">
              Gridline lives in the editor, the terminal, Slack and GitHub — one memory across every
              surface. Agents share context, so work started in one place finishes in another.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-14">
            <EverywhereWindows />
          </Reveal>
        </div>
      </section>

      {/* Specs */}
      <section className="border-b border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <h2 className="font-sans text-3xl font-semibold leading-tight text-white sm:text-4xl">
              The shape of it
            </h2>
          </Reveal>
          <dl className="mt-12 grid gap-x-16 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { k: "Shape", v: "Agent-first code editor with inline assistance" },
              { k: "Engine", v: "Kernel-native — local-first inference by default" },
              { k: "Languages", v: "TypeScript, Python, Rust, Go, and more" },
              { k: "Surfaces", v: "Editor, terminal, Slack, GitHub — one memory" },
              { k: "Automations", v: "Always-on agents on schedules and triggers" },
              { k: "Status", v: "Public beta — free during beta" },
            ].map((s) => (
              <Reveal key={s.k} className="border-t border-white/10 pt-5">
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-[#a1a1a1]">
                  {s.k}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#a3a3a3]">{s.v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a]">
        <div className="relative isolate overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(45% 60% at 50% 50%, rgba(249,115,22,0.18), transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl px-6 py-24 text-center sm:py-28">
            <h2 className="font-sans text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Start building with Gridline
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-[#a3a3a3]">
              Free during public beta. Available on macOS and Linux — local-first, no data sent to
              third parties.
            </p>
            <a
              href="mailto:hello@substrate.dev?subject=Gridline%20Waitlist"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]"
            >
              Join the beta <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
