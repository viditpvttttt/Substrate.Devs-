import { createFileRoute, Link } from "@tanstack/react-router";
import { SpectralMark } from "@/components/SpectralMark";
import { OrbField } from "@/components/OrbField";

export const Route = createFileRoute("/void")({
  head: () => ({
    meta: [
      { title: "VOID Browser — a browser with nothing in the way" },
      {
        name: "description",
        content:
          "VOID is Substrate's browser in pre-production: the page, the model and your intent on one surface, with no tab sprawl and no chrome you did not ask for.",
      },
      { property: "og:title", content: "VOID Browser — nothing in the way" },
      {
        property: "og:description",
        content:
          "A browser in pre-production, designed around the page, the model and your intent on one surface.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VoidPage,
});

const ideas = [
  {
    index: "01",
    title: "One surface",
    body: "The page, the model and your intent share a canvas. Asking something does not open a second app or a sidebar you have to babysit.",
  },
  {
    index: "02",
    title: "No tab sprawl",
    body: "Sessions are held as places you return to, not thirty truncated titles competing for a strip of pixels.",
  },
  {
    index: "03",
    title: "Kernel resident",
    body: "Kernel runs locally alongside the renderer, reading what is on screen only when you ask it to.",
  },
  {
    index: "04",
    title: "Quiet chrome",
    body: "Interface appears when it has something to do and recedes when it does not. No engagement surface.",
  },
];

function VoidPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <SpectralMark
            variant="void"
            className="mx-auto h-40 w-40 text-foreground sm:h-48 sm:w-48"
          />
          <div className="mt-8 flex items-center justify-center gap-3">
            <p className="rule-label">VOID Browser</p>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
              Pre-production
            </span>
          </div>
          <h1 className="mt-5 text-5xl leading-[1.05] text-foreground sm:text-6xl">
            A browser with <em className="font-light">nothing</em> in the way
          </h1>
          <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
            VOID is early. It is being designed around one idea: the page, the model and your intent
            on the same surface — no tab sprawl, no chrome you did not ask for.
          </p>
        </div>
      </section>

      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto grid max-w-5xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-2">
          <OrbField className="aspect-[4/3]" />
          <div>
            <p className="rule-label">Sessions</p>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
              Context as objects, not tabs
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Everything you are working through is a soft body with weight and depth: the thing in
              front of you sits forward, the rest drift behind it and stay warm. Move your pointer
              across the field to feel how it reorganises around attention.
            </p>
            <p className="mt-4 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
              Move your pointer
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-b border-border/70 bg-card/60 grain-veil">
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">
          <h2 className="max-w-xl text-3xl leading-tight text-foreground sm:text-4xl">
            What we are designing around
          </h2>
          <div className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2">
            {ideas.map((i) => (
              <div key={i.index} className="border-t border-border pt-6">
                <p className="rule-label">{i.index}</p>
                <h3 className="mt-3 text-2xl text-foreground">{i.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Not yet available
        </p>
        <h2 className="mt-6 text-3xl leading-tight text-foreground sm:text-4xl">
          Nothing to download yet
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
          VOID is in pre-production. Read about the model underneath it in the meantime.
        </p>
        <div className="mt-9">
          <Link
            to="/kernel"
            className="inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Meet Kernel
          </Link>
        </div>
      </section>
    </>
  );
}
