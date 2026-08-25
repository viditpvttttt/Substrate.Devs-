import { createFileRoute } from "@tanstack/react-router";
import { LatticeDiagram } from "@/components/LatticeDiagram";
import { SignalDoodle } from "@/components/SignalDoodle";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — how Substrate builds" },
      {
        name: "description",
        content:
          "Substrate is a research and product studio building Kernel, VOID and Folio on one shared runtime. How we build, and how to reach us.",
      },
      { property: "og:title", content: "Studio — how Substrate builds" },
      {
        property: "og:description",
        content:
          "A small research and product studio for the ambient computer: Kernel, VOID and Folio on one substrate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudioPage,
});

const principles = [
  {
    index: "01",
    title: "One substrate",
    body: "Kernel, VOID and Folio share the same runtime, the same memory, the same notion of context. Nothing is bolted on afterwards.",
  },
  {
    index: "02",
    title: "Modality-agnostic",
    body: "Text, image, audio, video and structured data enter through one interface. The model is not a chat box with adapters.",
  },
  {
    index: "03",
    title: "Local first",
    body: "Weights, files and browsing state stay as close to the person as the hardware allows. Remote compute is an option, not a default.",
  },
  {
    index: "04",
    title: "Quiet by default",
    body: "No engagement surface. Software that recedes when it has nothing worth saying.",
  },
  {
    index: "05",
    title: "Fewer moving parts",
    body: "Every layer we add has to earn its milliseconds. When a piece stops paying for itself, it goes.",
  },
  {
    index: "06",
    title: "Measured, not claimed",
    body: "Numbers come from runs we can reproduce. If we cannot show the method, we do not print the figure.",
  },
];

function StudioPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <p className="rule-label">Studio</p>
          <h1 className="mt-6 text-5xl leading-[1.05] text-foreground sm:text-6xl">
            The layer underneath
          </h1>
          <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Substrate is a small research and product studio for the ambient computer. We build the
            model, the browser and the surface people work on — and we build them on the same ground
            so they behave like one thing.
          </p>
        </div>
      </section>

      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto grid max-w-5xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-2">
          <LatticeDiagram className="aspect-square rounded-2xl border border-border/70 bg-card/50" />
          <div>
            <p className="rule-label">Architecture</p>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
              Layers, each one replaceable
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A runtime, a model, a memory, a surface. Each layer speaks a narrow interface to the
              one above it, so any of them can be swapped without the rest noticing. That is the
              whole discipline: fewer moving parts, measured in milliseconds.
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-b border-border/70 bg-card/60 grain-veil">
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">
          <h2 className="max-w-xl text-3xl leading-tight text-foreground sm:text-4xl">
            How we build
          </h2>
          <SignalDoodle className="mt-6 h-8 w-56 text-muted-foreground" aria-hidden="true" />
          <div className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <div key={p.index} className="border-t border-border pt-6">
                <p className="rule-label">{p.index}</p>
                <h3 className="mt-3 text-2xl text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-28">
        <h2 className="text-3xl leading-tight text-foreground sm:text-4xl">
          Early, and open to company
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
          If you are building at the same layer — models, runtimes, browsers — we would like to hear
          from you.
        </p>
        <a
          href="mailto:hello@substrate.dev"
          className="mt-9 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
      </section>
    </>
  );
}
