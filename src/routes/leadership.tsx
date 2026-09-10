import { createFileRoute, Link } from "@tanstack/react-router";
import { SpectralMark } from "@/components/SpectralMark";
import { Reveal } from "@/components/Reveal";
import { BoxReveal } from "@/components/anim/BoxReveal";
import { ScrambleText } from "@/components/anim/ScrambleText";
import { SignalDoodle } from "@/components/SignalDoodle";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — the people behind Substrate" },
      {
        name: "description",
        content:
          "The small team that runs Substrate: who leads the model, the browser, the editor, the surface and the agent work — and what each of them is responsible for.",
      },
      { property: "og:title", content: "Leadership — the people behind Substrate" },
      {
        property: "og:description",
        content: "A deliberately small bench: the people under Kernel, VOID, Folio, Arcadia and Gridline.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LeadershipPage,
});

const LEADERS = [
  {
    initials: "IS",
    name: "Ivo Sandström",
    role: "Founder & Chief Executive",
    care: "The substrate itself",
    line: "Started Substrate after a decade in runtime and systems work, with the conviction that the layer under software deserves a studio of its own. Still reads the weekly research memo before anything else lands in the inbox.",
    colors: { a: "#d99a4a", b: "#8f5f2d", c: "#30251b" },
  },
  {
    initials: "MO",
    name: "Mara Oyelaran",
    role: "Chief Scientist",
    care: "Kernel",
    line: "Leads the model. Mara holds the line on one representation across every modality — text, images, audio and video in a single attention pass — and signs off on every training run before it starts.",
    colors: { a: "#bc8b58", b: "#754b2c", c: "#302019" },
  },
  {
    initials: "TV",
    name: "Toma Verany",
    role: "Head of Research",
    care: "Evaluation & safety",
    line: "Owns the question of how we know anything works. Every number the studio prints passes through the harness Toma maintains — reproduced twice, or it is not a number.",
    colors: { a: "#a8a38d", b: "#665f42", c: "#2b291f" },
  },
  {
    initials: "EL",
    name: "Edda Lindqvist",
    role: "Head of Product",
    care: "Folio",
    line: "Carries the surface people live on. Edda came out of small-studio design work and holds the position that software should recede when it has nothing worth saying.",
    colors: { a: "#c8b27c", b: "#665638", c: "#29251c" },
  },
  {
    initials: "NA",
    name: "Noor Aldana",
    role: "Head of Engineering",
    care: "VOID & Gridline",
    line: "Runs the two rooms where the substrate meets a person directly — the browser and the editor. Noor wrote the first version of the quiet-chrome rendering loop and still reviews it line by line.",
    colors: { a: "#9b9b92", b: "#4b4b46", c: "#252522" },
  },
  {
    initials: "JW",
    name: "Jan Wekesa",
    role: "Head of Agents",
    care: "Arcadia",
    line: "Builds the agent that lives inside the work. Jan keeps autonomy boring in the good sense: every plan written down, every action verifiable, every trigger auditable after the fact.",
    colors: { a: "#d97a38", b: "#8f471e", c: "#301d15" },
  },
];

function LeadershipPage() {
  return (
    <>
      {/* Hero — same quiet pattern as Kernel, VOID and Folio */}
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <SpectralMark variant="substrate" className="mx-auto h-20 w-20 text-clay" />
          <p className="rule-label mt-8">Leadership</p>
          <h1 className="mt-5 text-5xl leading-[1.05] text-foreground sm:text-6xl">
            The people under the <em className="font-light">products</em>
          </h1>
          <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Substrate is run by the people who build it. The bench is deliberately small — the same
            hands hold the model, the browser, the surface and the agent, so nothing gets lost
            between rooms.
          </p>
        </Reveal>
      </section>

      {/* The leaders — an editorial register, one row per person */}
      <section className="border-t border-border/70 bg-card/40 grain-veil">
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">
          <h2 className="max-w-xl text-3xl leading-tight text-foreground sm:text-4xl">
            <BoxReveal>Who leads what</BoxReveal>
          </h2>
          <Reveal delay={0.15} className="mt-6">
            <SignalDoodle className="h-8 w-56 text-muted-foreground" aria-hidden="true" />
          </Reveal>
          <ol className="mt-14">
            {LEADERS.map((leader, i) => (
              <Reveal key={leader.name} delay={0.05 * i}>
                <li className="tick-hover group border-t border-border transition-colors last:border-b">
                  <div className="grid gap-8 py-10 sm:grid-cols-[auto_1fr] sm:gap-12">
                    <div
                      className="tile-aurora flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl shadow-sm transition-transform duration-500 group-hover:scale-[1.03] sm:h-32 sm:w-32"
                      style={
                        {
                          "--tile-a": leader.colors.a,
                          "--tile-b": leader.colors.b,
                          "--tile-c": leader.colors.c,
                        } as React.CSSProperties
                      }
                      aria-hidden="true"
                    >
                      <span className="font-display text-4xl font-light text-white drop-shadow-sm">
                        <ScrambleText text={leader.initials} />
                      </span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                        <h3 className="text-2xl font-light text-foreground sm:text-3xl">
                          {leader.name}
                        </h3>
                        <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
                          <ScrambleText text={leader.role} />
                        </p>
                      </div>
                      <p className="mt-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-[var(--spectral-b)]">
                        {leader.care}
                      </p>
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                        {leader.line}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing note */}
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl px-6 py-24 text-center sm:py-28">
          <Reveal>
            <p className="font-display text-3xl leading-snug text-foreground sm:text-4xl">
              Small bench, <em className="font-light">long arc</em>.
            </p>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              We hire for range, slowly. If you would like to reach any of us directly, write to the
              studio — it is read by a person.
            </p>
            <a
              href="mailto:hello@substrate.dev?subject=Hello%20Substrate%20—%20leadership"
              className="btn-shine mt-9 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Write to the studio
            </a>
            <p className="mt-10 text-sm text-muted-foreground">
              Curious how the bench works day to day?{" "}
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
