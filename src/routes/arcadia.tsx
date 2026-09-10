import { createFileRoute, Link } from "@tanstack/react-router";
import { SpectralMark } from "@/components/SpectralMark";
import { Reveal } from "@/components/Reveal";
import { BoxReveal } from "@/components/anim/BoxReveal";
import { ScrambleText } from "@/components/anim/ScrambleText";
import { HoverExpand } from "@/components/anim/HoverExpand";
import { SvgScrollDraw } from "@/components/anim/SvgScrollDraw";

export const Route = createFileRoute("/arcadia")({
  head: () => ({
    meta: [
      { title: "Arcadia — an agent that does the work" },
      {
        name: "description",
        content:
          "Arcadia is Substrate's autonomous agent: it plans, edits files, runs the terminal, reads live pages and reports in the open — on the same runtime as Kernel.",
      },
      { property: "og:title", content: "Arcadia — an agent that does the work" },
      {
        property: "og:description",
        content:
          "One agent that plans in writing, acts in place, and shows its work — from the terminal to the browser.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArcadiaPage,
});

const holdings = [
  { k: "Terminal", v: "Runs commands, watches output, fixes the failure in the same loop" },
  { k: "Files", v: "Reads and edits the whole workspace in place, across repositories" },
  { k: "Live pages", v: "Reads what is on screen — a dashboard, a form, a slow endpoint — when asked" },
  { k: "Triggers", v: "Wakes on a schedule or a signal, not on a chat box you have to babysit" },
];

const capabilityColors = [
  { a: "#d97a38", b: "#8f471e", c: "#301d15" },
  { a: "#bc8b58", b: "#754b2c", c: "#302019" },
  { a: "#a8a38d", b: "#665f42", c: "#2b291f" },
  { a: "#d99a4a", b: "#8f5f2d", c: "#30251b" },
];

const capabilities = [
  {
    index: "01",
    title: "It plans in writing",
    body: "Before anything moves, the agent lays out the plan — the files it will touch, the commands it will run, the proof it will accept. You read it before it happens.",
  },
  {
    index: "02",
    title: "It acts in place",
    body: "Edits land in the real files, in the real workspace, with diffs you can walk line by line. Nothing is simulated behind a chat transcript.",
  },
  {
    index: "03",
    title: "It works in parallel",
    body: "One question can split into several threads — an investigation, a refactor, a test run — that share the same memory and rejoin in one report.",
  },
  {
    index: "04",
    title: "It reports in the open",
    body: "Every run ends with a written account: what it did, what it found, what it changed its mind about. Auditable after the fact, not just while it runs.",
  },
];

const run = [
  {
    step: "01",
    title: "Brief",
    body: "A sentence or a standing trigger. The agent restates the task in its own words so a misunderstanding surfaces before a keystroke does.",
  },
  {
    step: "02",
    title: "Plan",
    body: "The workspace is mapped first — symbols, dependencies, tests — and the plan is written down and kept where you can read it.",
  },
  {
    step: "03",
    title: "Act",
    body: "Edits, commands and page reads happen in place, in parallel where it is safe, serialized where it is not.",
  },
  {
    step: "04",
    title: "Verify",
    body: "The proof is whatever the work can run: tests, builds, a page that loads. The agent does not get to claim what it cannot show.",
  },
];

const specs = [
  { k: "Shape", v: "One agent runtime, many parallel workers" },
  { k: "Interfaces", v: "Terminal, editor integration, standing triggers" },
  { k: "Memory", v: "Shared with Kernel and Gridline — one notion of context" },
  { k: "Autonomy", v: "Plans in writing, actions verifiable, runs auditable" },
  { k: "Status", v: "Research preview with a small number of teams" },
];

function ArcadiaPage() {
  return (
    <>
      {/* Hero — same quiet pattern as Kernel, VOID and Folio */}
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <SpectralMark variant="arcadia" className="mx-auto h-20 w-20 text-clay" />
          <p className="rule-label mt-8">Arcadia</p>
          <h1 className="mt-5 text-5xl leading-[1.05] text-foreground sm:text-6xl">
            An agent that does the <em className="font-light">work</em>
          </h1>
          <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Arcadia is the autonomous layer of the substrate: it plans in writing, edits files in
            place, runs the terminal and reads live pages — and shows its work the whole way
            through.
          </p>
        </Reveal>
      </section>

      {/* What it holds — the four-cell strip, as on Kernel */}
      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-border/70 sm:grid-cols-4">
          {holdings.map((h, i) => (
            <Reveal key={h.k} delay={i * 0.08} className="bg-card px-6 py-10">
              <p className="rule-label">
                <ScrambleText text={h.k} />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.v}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities — the expandable register, as on Folio */}
      <section className="border-b border-border/70 bg-card/60 grain-veil">
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">
          <h2 className="max-w-xl text-3xl leading-tight text-foreground sm:text-4xl">
            <BoxReveal>Four promises, kept boringly</BoxReveal>
          </h2>
          <Reveal className="mt-14">
            <HoverExpand
              items={capabilities.map((c, idx) => ({
                key: c.index,
                index: c.index,
                title: c.title,
                body: c.body,
                colors: capabilityColors[idx],
              }))}
            />
          </Reveal>
        </div>
      </section>

      {/* How a run unfolds — numbered editorial with a scroll-drawn line */}
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-5xl gap-14 px-6 py-24 sm:py-28 lg:grid-cols-[auto_1fr]">
          <div className="relative hidden w-16 lg:block">
            <SvgScrollDraw className="h-full w-full" />
          </div>
          <div>
            <p className="rule-label">A run</p>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
              How a run unfolds
            </h2>
            <ol className="mt-12">
              {run.map((r, i) => (
                <Reveal key={r.step} delay={i * 0.07}>
                  <li className="tick-hover border-t border-border py-7 transition-colors last:border-b">
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {r.step}
                      </span>
                      <div>
                        <h3 className="text-2xl font-light text-foreground">{r.title}</h3>
                        <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                          {r.body}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* The shape of it */}
      <section className="border-y border-border/70 bg-card/40">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
          <h2 className="text-3xl leading-tight text-foreground sm:text-4xl">The shape of it</h2>
          <dl className="mt-12 grid gap-x-16 gap-y-8 sm:grid-cols-2">
            {specs.map((s, i) => (
              <Reveal key={s.k} delay={i * 0.05}>
                <div className="border-t border-border pt-5">
                  <dt className="rule-label">{s.k}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.v}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <div className="mt-14">
            <Link
              to="/gridline"
              className="group inline-flex items-center gap-2 text-sm text-foreground"
            >
              Arcadia inside Gridline
              <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl px-6 py-24 text-center sm:py-28">
          <SpectralMark variant="arcadia" className="mx-auto h-28 w-28 text-clay" />
          <h2 className="mt-8 text-3xl leading-tight text-foreground sm:text-4xl">Work with it</h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Arcadia is in research preview with a small number of teams. If your work would benefit
            from an agent that reports in the open, tell us what you would run.
          </p>
          <a
            href="mailto:hello@substrate.dev?subject=Arcadia%20research%20preview"
            className="btn-shine mt-9 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request access
          </a>
        </div>
      </section>
    </>
  );
}
