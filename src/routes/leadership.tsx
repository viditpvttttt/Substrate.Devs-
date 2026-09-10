import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { BoxReveal } from "@/components/anim/BoxReveal";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Substrate" },
      {
        name: "description",
        content:
          "Meet the founder and CEO of Substrate, the research and product studio building Kernel, VOID, and Folio on one shared runtime.",
      },
      { property: "og:title", content: "Leadership — Substrate" },
      {
        property: "og:description",
        content:
          "The founder and CEO of Substrate — a research and product studio building Kernel, VOID, and Folio on one shared runtime.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <p className="rule-label">Leadership</p>
          <h1 className="mt-6 text-5xl leading-[1.05] text-foreground sm:text-6xl">
            The people behind the substrate
          </h1>
          <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Substrate is built by a small team that works close to the code. Every product — Kernel,
            VOID, and Folio — is held to the same standard: complete, working, and accountable to no
            one else's infrastructure.
          </p>
        </Reveal>
      </section>

      {/* Founder feature — Anthropic-style portrait + bio */}
      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
          <Reveal className="mb-16">
            <p className="rule-label">Founder</p>
          </Reveal>

          <div className="grid items-start gap-12 lg:grid-cols-[400px_1fr] lg:gap-16">
            {/* Portrait */}
            <Reveal className="mx-auto w-full max-w-sm lg:mx-0">
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/60 shadow-sm">
                <img
                  src="/images/vidit-portrait.jpg"
                  alt="Portrait of Vidit, Founder and CEO of Substrate"
                  className="aspect-[4/5] h-auto w-full object-cover"
                />
              </div>
              <div className="mt-5 px-1">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Founder and CEO
                </p>
                <h2 className="mt-1.5 text-2xl font-semibold text-foreground">Vidit</h2>
              </div>
            </Reveal>

            {/* Bio */}
            <Reveal delay={0.1} className="lg:pt-2">
              <h3 className="text-3xl leading-tight text-foreground sm:text-4xl">
                <BoxReveal>Close to the code</BoxReveal>
              </h3>
              <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Vidit founded Substrate and leads research, product, and engineering across Kernel,
                  VOID, and Folio. He works close to the code — the studio's own site was rebuilt from
                  the ground up, moved off its original scaffolding onto an independent, self-hosted
                  stack, with every build verified clean before shipping.
                </p>
                <p>
                  That's the standard applied across all three products: complete, working, and
                  accountable to no one else's infrastructure.
                </p>
              </div>

              {/* Focus areas */}
              <div className="mt-10 flex flex-wrap gap-2.5">
                {["Research", "Product", "Engineering"].map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-border/70 bg-background/60 px-4 py-1.5 text-sm text-muted-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div className="grid gap-10 sm:grid-cols-3">
          {[
            {
              title: "Complete",
              body: "Nothing half-built. If it ships, it works end to end.",
            },
            {
              title: "Working",
              body: "Every build verified clean — the site, the model, the browser.",
            },
            {
              title: "Accountable",
              body: "No one else's infrastructure. The runtime is ours.",
            },
          ].map((v, idx) => (
            <Reveal
              key={v.title}
              delay={idx * 0.08}
              className="tick-hover border-t border-border p-3 pt-6 transition-colors"
            >
              <h3 className="text-xl text-foreground">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
