import { createFileRoute } from "@tanstack/react-router";
import { SpectralMark } from "@/components/SpectralMark";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Substrate — Kernel & VOID" },
      {
        name: "description",
        content:
          "Substrate is a research and product studio. We build Kernel, a multimodal LLM, and VOID, a browser in pre-production.",
      },
      { property: "og:title", content: "Substrate — Kernel & VOID" },
      {
        property: "og:description",
        content:
          "A research and product studio building Kernel, a multimodal LLM, and VOID, a browser in pre-production.",
      },
    ],
  }),
  component: Index,
});

const principles = [
  {
    index: "01",
    title: "One substrate",
    body: "Kernel and VOID share the same runtime, the same memory, the same notion of context. Nothing is bolted on afterwards.",
  },
  {
    index: "02",
    title: "Modality-agnostic",
    body: "Text, image, audio, video and structured data enter through one interface. The model is not a chat box with adapters.",
  },
  {
    index: "03",
    title: "Local first",
    body: "Weights and browsing state stay as close to the person as the hardware allows. Remote compute is an option, not a default.",
  },
  {
    index: "04",
    title: "Quiet by default",
    body: "No engagement surface. Software that recedes when it has nothing worth saying.",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Kernel />
        <Void />
        <Principles />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="rule-label !text-foreground">
          Substrate
        </a>
        <nav className="flex items-center gap-8">
          <a
            href="#kernel"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Kernel
          </a>
          <a
            href="#void"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            VOID
          </a>
          <a
            href="#studio"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Studio
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="spectral-field" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-44">
        <p className="rule-label rise-in">The layer underneath</p>
        <h1 className="rise-in mt-8 text-5xl leading-[1.05] text-foreground sm:text-7xl">
          We build the ground
          <br />
          software grows on.
        </h1>
        <p className="rise-in mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          A research and product studio for the ambient computer. Two things underway:{" "}
          <span className="text-foreground">Kernel</span>, a multimodal LLM, and{" "}
          <span className="text-foreground">VOID</span>, a browser.
        </p>
        <div className="rise-in mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a
            href="#kernel"
            className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Meet Kernel
          </a>
          <a
            href="#void"
            className="group inline-flex items-center gap-2 text-sm text-foreground"
          >
            VOID Browser
            <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Kernel() {
  return (
    <section
      id="kernel"
      className="relative isolate overflow-hidden border-y border-border/70 bg-card"
    >
      <div className="spectral-field spectral-field-soft" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
        <SpectralMark
          variant="kernel"
          className="mx-auto h-44 w-44 text-clay sm:h-56 sm:w-56"
        />
        <p className="rule-label mt-10">Kernel</p>
        <h2 className="mt-5 text-4xl leading-tight text-foreground sm:text-5xl">
          One model, every <em className="font-light">modality</em>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          Kernel is a multimodal LLM built to work across text, images, audio and video in a
          single context — one representation instead of a stack of translators.
        </p>
      </div>
      <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden border-t border-border/70 bg-border/70 sm:grid-cols-4">
        {[
          { k: "Text", v: "Long-context reasoning and generation" },
          { k: "Vision", v: "Images and documents read in place" },
          { k: "Audio", v: "Speech and sound as first-class input" },
          { k: "Video", v: "Temporal understanding, frame to frame" },
        ].map((m) => (
          <div key={m.k} className="bg-card px-6 py-10">
            <p className="rule-label">{m.k}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Void() {
  return (
    <section id="void" className="relative isolate overflow-hidden">
      <div className="spectral-field spectral-field-soft" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36">
        <SpectralMark
          variant="void"
          className="mx-auto h-44 w-44 text-foreground sm:h-52 sm:w-52"
        />
        <div className="mt-10 flex items-center justify-center gap-3">
          <p className="rule-label">VOID Browser</p>
          <span className="rounded-full border border-border px-3 py-1 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
            Pre-production
          </span>
        </div>
        <h2 className="mt-5 text-4xl leading-tight text-foreground sm:text-5xl">
          A browser with <em className="font-light">nothing</em> in the way
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          VOID is early. It is being designed around one idea: the page, the model and your
          intent on the same surface — no tab sprawl, no chrome you did not ask for.
        </p>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Not yet available
        </p>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section
      id="studio"
      className="relative border-y border-border/70 bg-card/60 grain-veil"
    >
      <div className="relative mx-auto max-w-5xl px-6 py-28 sm:py-32">
        <h2 className="max-w-xl text-3xl leading-tight text-foreground sm:text-4xl">
          How we build
        </h2>
        <div className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2">
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
  );
}

function Closing() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="spectral-field" aria-hidden="true" />
      <div className="relative mx-auto max-w-2xl px-6 py-32 text-center sm:py-40">
        <h2 className="text-4xl leading-tight text-foreground sm:text-5xl">
          Early, and open to company
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
          If you are building at the same layer — models, runtimes, browsers — we would like
          to hear from you.
        </p>
        <a
          href="mailto:hello@substrate.dev"
          className="mt-10 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="rule-label">Substrate</p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Substrate. Kernel · VOID
        </p>
      </div>
    </footer>
  );
}
