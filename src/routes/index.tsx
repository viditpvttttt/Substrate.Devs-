import { createFileRoute, Link } from "@tanstack/react-router";
import { LatticeDiagram } from "@/components/LatticeDiagram";
import { SpectralMark } from "@/components/SpectralMark";
import { SignalDoodle } from "@/components/SignalDoodle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Substrate — Kernel, VOID & Folio" },
      {
        name: "description",
        content:
          "Substrate is a research and product studio building Kernel, a multimodal LLM, VOID, a minimalist browser, and Folio, a quiet operating surface for your day.",
      },
      { property: "og:title", content: "Substrate — Kernel, VOID & Folio" },
      {
        property: "og:description",
        content:
          "A research and product studio for the ambient computer: a multimodal model, a browser, and the surface you work on.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="hero-section relative isolate overflow-hidden">
        <div className="hero-cloudscape" aria-hidden="true">
          <img src="/images/hero-clouds.png" alt="" />
        </div>
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex min-h-[min(760px,calc(100svh-4rem))] max-w-5xl flex-col items-center justify-center px-6 py-28 text-center sm:py-36">
          <div className="hero-copy">
            <div className="hero-kicker rise-in" style={{ animationDelay: "80ms" }}>
              <SpectralMark variant="substrate" className="hero-mark h-16 w-16 shadow-md sm:h-20 sm:w-20" />
              <p className="rule-label hero-label">The layer underneath</p>
            </div>
            <h1
              className="hero-title rise-in mt-8 text-5xl leading-[1.02] sm:text-7xl"
              style={{ animationDelay: "170ms" }}
            >
              We build the ground
              <br />
              software grows on.
            </h1>
            <p
              className="hero-description rise-in mt-8 max-w-xl text-lg leading-relaxed"
              style={{ animationDelay: "260ms" }}
            >
              A research and product studio for the ambient computer. Three things underway:{" "}
              <span className="hero-emphasis">Kernel</span>, a multimodal LLM,{" "}
              <span className="hero-emphasis">VOID</span>, a minimalist browser, and{" "}
              <span className="hero-emphasis">Folio</span>, the surface you work on.
            </p>
            <div className="rise-in mt-6" style={{ animationDelay: "340ms" }}>
              <SignalDoodle className="hero-signal h-8 w-48 sm:w-64" aria-hidden="true" />
            </div>
            <div
              className="rise-in mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
              style={{ animationDelay: "430ms" }}
            >
              <Link
                to="/kernel"
                className="hero-primary rounded-full px-7 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Meet Kernel
              </Link>
              <Link
                to="/void"
                className="hero-secondary group inline-flex items-center gap-2 text-sm"
              >
                VOID Browser
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span>Scroll</span>
          <span className="hero-scroll-line" />
        </div>
      </section>

      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px bg-border/70 sm:grid-cols-3">
          <ProductCard
            to="/kernel"
            label="Kernel"
            status="In training"
            title="One model, every modality"
            body="Text, images, audio and video in a single context — one representation instead of a stack of translators."
            media={<SpectralMark variant="kernel" className="h-16 w-16" />}
          />
          <ProductCard
            to="/void"
            label="VOID Browser"
            status="Pre-production"
            title="Nothing in the way"
            body="The page, the model and your intent on the same surface. No tab sprawl, no chrome you did not ask for."
            media={<SpectralMark variant="void" className="h-16 w-16 text-foreground" />}
          />
          <ProductCard
            to="/folio"
            label="Folio"
            status="Private beta"
            title="The quiet operating surface"
            body="Weather, news, files, memory, agents and deep research on one canvas that already knows your morning."
            media={<SpectralMark variant="folio" className="h-16 w-16" />}
          />
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-14 px-6 py-24 sm:py-32 lg:grid-cols-2">
          <div>
            <p className="rule-label">One substrate</p>
            <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl">
              Three products, one shared ground
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The same runtime, the same memory, the same notion of context runs under all of it.
              Drag the lattice — every node is a shared slot, every edge a route between the pieces.
            </p>
            <Link
              to="/studio"
              className="group mt-8 inline-flex items-center gap-2 text-sm text-foreground"
            >
              How we build
              <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
          <LatticeDiagram className="aspect-square rounded-2xl border border-border/70 bg-card/50" />
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-t border-border/70">
        <div className="relative mx-auto max-w-2xl px-6 py-28 text-center sm:py-32">
          <h2 className="text-4xl leading-tight text-foreground sm:text-5xl">
            Early, and open to company
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            If you are building at the same layer — models, runtimes, browsers — we would like to
            hear from you.
          </p>
          <a
            href="mailto:hello@substrate.dev"
            className="mt-10 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  );
}

function ProductCard({
  to,
  label,
  status,
  title,
  body,
  media,
}: {
  to: "/kernel" | "/void" | "/folio";
  label: string;
  status: string;
  title: string;
  body: string;
  media: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group flex flex-col bg-card px-8 py-12 transition-colors hover:bg-accent/40"
    >
      {media}
      <div className="mt-8 flex items-center gap-3">
        <p className="rule-label">{label}</p>
        <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-muted-foreground">
          {status}
        </span>
      </div>
      <h3 className="mt-3 text-2xl leading-snug text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm text-foreground">
        Read more
        <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
