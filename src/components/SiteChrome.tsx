import { Link } from "@tanstack/react-router";
import { SpectralMark } from "@/components/SpectralMark";
import { FlipText } from "@/components/anim/FlipLink";
import { EmailCapture } from "@/components/anim/EmailCapture";

const nav = [
  { to: "/kernel", label: "Kernel" },
  { to: "/void", label: "VOID" },
  { to: "/folio", label: "Folio" },
  { to: "/arcadia", label: "Arcadia" },
  { to: "/gridline", label: "Gridline" },
  { to: "/studio", label: "Studio" },
  { to: "/leadership", label: "Leadership" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-[var(--spectral-b)]/40 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <SpectralMark variant="substrate" className="h-6 w-6 text-foreground" />
          <span className="rule-label !text-foreground">Substrate</span>
        </Link>
        <nav className="flex items-center gap-6 sm:gap-8">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "group relative text-sm text-foreground" }}
            >
              <FlipText text={item.label} />
              <span
                className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full"
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

const productLinks = [
  { to: "/kernel", label: "Kernel — the model" },
  { to: "/void", label: "VOID — the browser" },
  { to: "/folio", label: "Folio — the surface" },
  { to: "/arcadia", label: "Arcadia — the agent" },
  { to: "/gridline", label: "Gridline — the editor" },
] as const;

const studioLinks = [
  { to: "/studio", label: "How we build" },
  { to: "/leadership", label: "Leadership" },
  { to: "/tools", label: "All tools" },
] as const;

function FooterColumn({
  label,
  links,
}: {
  label: string;
  links: readonly { to: string; label: string }[];
}) {
  return (
    <div>
      <p className="rule-label">{label}</p>
      <ul className="mt-5 space-y-3">
        {links.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="group inline-flex flex-col text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <FlipText text={item.label} />
              <span
                className="mt-1 h-px w-0 bg-foreground/50 transition-all duration-300 group-hover:w-full"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative isolate mt-0 overflow-hidden border-t border-border/70">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <SpectralMark variant="substrate" className="h-6 w-6 text-foreground" />
              <p className="rule-label !text-foreground">Substrate</p>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A research and product studio for the ambient computer — five surfaces on one shared
              runtime, zero translators in between.
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 px-3 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--spectral-g)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--spectral-g)]" />
              </span>
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
                Building quietly
              </span>
            </div>
          </div>

          <FooterColumn label="Products" links={productLinks} />
          <FooterColumn label="Studio" links={studioLinks} />

          {/* Contact */}
          <div>
            <p className="rule-label">Get in touch</p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Building at the same layer — models, runtimes, browsers, editors? We read everything.
            </p>
            <div className="mt-5">
              <EmailCapture />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-muted-foreground">
            © {new Date().getFullYear()} Substrate — Kernel · VOID · Folio · Arcadia · Gridline
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 self-start text-xs text-muted-foreground transition-colors hover:text-foreground sm:self-auto"
          >
            <span className="transition-transform group-hover:-translate-y-0.5">Back to top</span>
            <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
      {/* Chromatic base band — the RGB ambience settling at the foot of the page */}
      <div className="spectral-base" aria-hidden="true" />
    </footer>
  );
}
