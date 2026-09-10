import { Fragment } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { ToolsNavigation } from "@/components/ui/ToolsNavigation";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { BoxReveal } from "@/components/anim/BoxReveal";
import { MarqueeCards } from "@/components/anim/MarqueeCards";
import { ShinyText } from "@/components/anim/ShinyText";

export const Route = createFileRoute("/tools")({
  component: ToolsPage,
});

const TOOLS = [
  {
    to: "/arcadia",
    name: "Arcadia",
    kind: "Autonomous agent",
    status: "Live runtime",
    body: "Fleets of parallel agents across terminal, browser and editor — automated triggers, a shared syntax lattice and self-verifying workflows.",
    colors: { a: "#d97a38", b: "#8f471e", c: "#301d15" },
  },
  {
    to: "/gridline",
    name: "Gridline",
    kind: "AI code editor",
    status: "AI editor",
    body: "Speculative completions on the AST lattice, multi-file agent editing, terminal-native verification — the editor on the substrate runtime.",
    colors: { a: "#5a9bd5", b: "#2e6a9a", c: "#1a354e" },
  },
  {
    to: "/kernel",
    name: "Kernel",
    kind: "Multimodal LLM",
    status: "In training",
    body: "Text, images, audio and video projected into one representation — a single attention pass instead of a stack of adapters.",
    colors: { a: "#d99a4a", b: "#8f5f2d", c: "#30251b" },
  },
  {
    to: "/void",
    name: "VOID",
    kind: "Minimalist browser",
    status: "Pre-production",
    body: "A browser with nothing in the way: the page, the model and your intent share one quiet surface.",
    colors: { a: "#9b9b92", b: "#4b4b46", c: "#252522" },
  },
  {
    to: "/folio",
    name: "Folio",
    kind: "Operating surface",
    status: "Private beta",
    body: "Weather, files, memory and agents arranged on one canvas — a surface that recedes when it has nothing to say.",
    colors: { a: "#c8b27c", b: "#665638", c: "#29251c" },
  },
  {
    to: "/studio",
    name: "Studio",
    kind: "The studio itself",
    status: "Open to company",
    body: "How Substrate builds: one substrate, local-first, quiet by default, measured and not claimed.",
    colors: { a: "#b8b0a0", b: "#5f584c", c: "#28241f" },
  },
] as const;

const SHARED = [
  "One runtime",
  "Shared memory",
  "Local-first",
  "AST lattice",
  "Zero translators",
  "One context",
  "Quiet by default",
];

function ToolsPage() {
  return (
    <Fragment>
      <Helmet>
        <title>Tools – Substrate</title>
        <meta
          name="description"
          content="Every Substrate tool on one page: Arcadia agents, the Gridline editor, the Kernel model, the VOID browser, the Folio surface and the studio behind them."
        />
      </Helmet>
      <main className="mx-auto max-w-6xl p-6">
        <div className="mt-8 max-w-2xl">
          <p className="rule-label">Everything we build</p>
          <h1 className="mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
            <BoxReveal>Five surfaces, one shared ground</BoxReveal>
          </h1>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Each tool stands alone, but none of them are alone — the same runtime, the same memory
            and the same notion of context run under all of them. Pick a surface to go deeper.
          </p>
        </div>

        {/* Render the navigation component styled like the site header */}
        <div className="mt-10">
          <ToolsNavigation />
        </div>

        {/* Tool cards */}
        <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.06}>
              <TiltCard className="h-full">
                <Link
                  to={tool.to}
                  className="tile-aurora group flex h-full min-h-[17rem] flex-col justify-between rounded-3xl p-8 shadow-lg transition-shadow hover:shadow-2xl"
                  style={
                    {
                      "--tile-a": tool.colors.a,
                      "--tile-b": tool.colors.b,
                      "--tile-c": tool.colors.c,
                    } as React.CSSProperties
                  }
                >
                  <div className="flex items-center justify-between">
                    <p className="rule-label !text-white/90">{tool.name}</p>
                    <span className="rounded-full border border-white/40 px-2.5 py-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-white/85">
                      {tool.status}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-light text-white">{tool.kind}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">{tool.body}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm text-white">
                      Read more
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </section>

        {/* Shared-runtime band */}
        <section className="mt-20 border-t border-border/70 pt-12">
          <p className="rule-label text-center">What every tool shares</p>
          <div className="mt-8">
            <MarqueeCards duration={30}>
              {SHARED.map((term) => (
                <span
                  key={term}
                  className="whitespace-nowrap rounded-full border border-border/70 bg-card/70 px-6 py-2.5 font-mono text-xs text-muted-foreground backdrop-blur-sm"
                >
                  {term}
                </span>
              ))}
            </MarqueeCards>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
            <ShinyText text="Arcadia reads the same files Gridline edits, on the same memory Kernel runs on, in the window VOID renders." />
          </p>
        </section>
      </main>
    </Fragment>
  );
}
