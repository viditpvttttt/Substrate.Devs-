import { createFileRoute, Link } from "@tanstack/react-router";
import { SpectralMark } from "@/components/SpectralMark";
import { LatticeDiagram } from "@/components/LatticeDiagram";
import { BenchRadar } from "@/components/BenchRadar";

export const Route = createFileRoute("/kernel")({
  head: () => ({
    meta: [
      { title: "Kernel — a multimodal model on one substrate" },
      {
        name: "description",
        content:
          "Kernel is Substrate's multimodal LLM: text, vision, audio and video in a single representation, with long context and local-first inference.",
      },
      { property: "og:title", content: "Kernel — a multimodal model on one substrate" },
      {
        property: "og:description",
        content:
          "One model across text, vision, audio and video — one representation instead of a stack of translators.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KernelPage,
});

const modalities = [
  { k: "Text", v: "Long-context reasoning, planning and generation" },
  { k: "Vision", v: "Images, screenshots and documents read in place" },
  { k: "Audio", v: "Speech and sound as first-class input, not a transcript" },
  { k: "Video", v: "Temporal understanding, frame to frame" },
];

const specs = [
  { k: "Shape", v: "Dense decoder with a shared multimodal encoder" },
  { k: "Context", v: "Long-context window, unified across modalities" },
  { k: "Inference", v: "Local first, remote compute as an option" },
  { k: "Interfaces", v: "Native runtime, HTTP API, VOID integration" },
  { k: "Tooling", v: "Structured output, tool calls, streaming" },
  { k: "Status", v: "In training — research preview with partners" },
];

function KernelPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
          <SpectralMark variant="kernel" className="mx-auto h-20 w-20 text-clay" />
          <p className="rule-label mt-8">Kernel</p>
          <h1 className="mt-5 text-5xl leading-[1.05] text-foreground sm:text-6xl">
            One model, every <em className="font-light">modality</em>
          </h1>
          <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Kernel is a multimodal LLM built to work across text, images, audio and video in a
            single context — one representation instead of a stack of translators.
          </p>
        </div>
      </section>

      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-border/70 sm:grid-cols-4">
          {modalities.map((m) => (
            <div key={m.k} className="bg-card px-6 py-10">
              <p className="rule-label">{m.k}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-14 px-6 py-24 sm:py-32 lg:grid-cols-2">
          <div>
            <p className="rule-label">Representation</p>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
              A shared lattice, not a pile of adapters
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Every modality is projected into the same space, so a frame of video, a sentence and a
              waveform can sit next to each other in one attention pass. Drag the lattice to turn it
              — each node is a shared slot, each edge a route between modalities.
            </p>
            <p className="mt-4 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
              Drag to rotate
            </p>
          </div>
          <LatticeDiagram className="aspect-square rounded-2xl border border-border/70 bg-card/50" />
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/60 grain-veil">
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">
          <p className="rule-label">Evaluations</p>
          <h2 className="mt-4 max-w-xl text-3xl leading-tight text-foreground sm:text-4xl">
            Balance over benchmark spikes
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Kernel is tuned for the shape of real work: strong across every axis rather than
            record-setting on one. Indicative internal numbers, updated as training continues.
          </p>
          <div className="mt-12">
            <BenchRadar />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <h2 className="text-3xl leading-tight text-foreground sm:text-4xl">The shape of it</h2>
        <dl className="mt-12 grid gap-x-16 gap-y-8 sm:grid-cols-2">
          {specs.map((s) => (
            <div key={s.k} className="border-t border-border pt-5">
              <dt className="rule-label">{s.k}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-14">
          <Link to="/void" className="group inline-flex items-center gap-2 text-sm text-foreground">
            Kernel inside VOID
            <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-t border-border/70">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl px-6 py-24 text-center sm:py-28">
          <SpectralMark variant="kernel" className="mx-auto h-28 w-28 text-clay" />
          <h2 className="mt-8 text-3xl leading-tight text-foreground sm:text-4xl">
            Research access
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            We work with a small number of partners while Kernel trains. If your work lives at the
            model layer, tell us what you would run.
          </p>
          <a
            href="mailto:hello@substrate.dev?subject=Kernel%20research%20access"
            className="mt-9 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request access
          </a>
        </div>
      </section>
    </>
  );
}
