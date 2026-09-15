import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { BoxReveal } from "@/components/anim/BoxReveal";
import { MagneticButton } from "@/components/anim/MagneticButton";
import { ScrambleText } from "@/components/anim/ScrambleText";
import { TiltCard } from "@/components/TiltCard";
import { BrandLogo } from "@/components/BrandLogo";
import { works } from "@/components/work/workData";
import { VanishForm } from "@/components/ui/skiper-ui/skiper56";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — the Substrate portfolio" },
      {
        name: "description",
        content:
          "Deep dives into everything Substrate builds: Kernel, the multimodal model; Folio, the quiet operating surface; and Gridline, the coding agent.",
      },
      { property: "og:title", content: "Work — the Substrate portfolio" },
      {
        property: "og:description",
        content: "Deep dives into Kernel, Folio and Gridline — one substrate underneath.",
      },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <p className="rule-label">
            <ScrambleText text="Work" />
          </p>
          <h1 className="mt-6 text-5xl leading-[1.05] text-foreground sm:text-6xl">
            Every work, in <em className="font-light">detail</em>
          </h1>
          <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Three products on one substrate. Each page holds the problem, the approach, the
            milestones and the shape of the thing as it stands today.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 sm:pb-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, i) => (
            <Reveal key={work.slug} delay={i * 0.08} className="h-full">
              <TiltCard className="h-full">
                <Link
                  to="/work/$slug"
                  params={{ slug: work.slug }}
                  className="tile-aurora group relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-3xl p-8 shadow-lg transition-shadow hover:shadow-2xl"
                  style={
                    {
                      "--tile-a": work.colors.a,
                      "--tile-b": work.colors.b,
                      "--tile-c": work.colors.c,
                    } as React.CSSProperties
                  }
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <BrandLogo
                      variant={work.logo}
                      alt=""
                      className={`h-10 w-10 rounded-full bg-white/80 p-1 ${
                        work.logo === "kernel" ? "w-14" : ""
                      }`}
                    />
                    <span className="rounded-full border border-white/40 px-2.5 py-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-white/85">
                      {work.badge}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h2 className="font-display text-4xl text-white drop-shadow-sm">{work.name}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">{work.hero}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm text-white">
                      Read the detail
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/70 bg-card/40">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-28">
          <Reveal>
            <h2 className="text-3xl leading-tight text-foreground sm:text-4xl">
              <BoxReveal>Want the behind-the-scenes?</BoxReveal>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Ask about any of the works — we answer plainly, with the method attached.
            </p>
            <div className="mx-auto mt-8 max-w-md">
              <VanishForm
                placeholder="Ask anything about Kernel, Folio or Gridline..."
                onSubmit={() => {}}
              />
            </div>
            <div className="mt-8">
              <MagneticButton>
                <Link
                  to="/studio"
                  className="inline-block rounded-full border border-border bg-card/60 px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
                >
                  How the studio builds
                </Link>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
