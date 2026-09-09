import { Link } from "@tanstack/react-router";
import { SpectralMark } from "@/components/SpectralMark";
import { FlipText } from "@/components/anim/FlipLink";

const nav = [
  { to: "/kernel", label: "Kernel" },
  { to: "/void", label: "VOID" },
  { to: "/folio", label: "Folio" },
  { to: "/arcadia", label: "Arcadia", badge: "New" },
  { to: "/studio", label: "Studio" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <SpectralMark variant="substrate" className="h-6 w-6 text-foreground" />
          <span className="rule-label !text-foreground font-semibold tracking-wider">Substrate</span>
        </Link>
        <nav className="flex items-center gap-5 sm:gap-7">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "group relative flex items-center gap-1.5 text-sm text-foreground font-medium" }}
            >
              <FlipText text={item.label} />
              {"badge" in item && (
                <span className="rounded-full bg-primary/20 border border-primary/40 px-1.5 py-0.2 text-[0.6rem] font-mono font-medium text-primary tracking-tight uppercase">
                  {item.badge}
                </span>
              )}
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

export function SiteFooter() {
  return (
    <footer className="relative isolate mt-0 overflow-hidden border-t border-border/70 bg-[#0d0c0b]">
      {/* Try Cursor / Arcadia CTA band */}
      <div className="border-b border-border/60 py-16 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="rule-label text-primary">Autonomous Agent Intelligence</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Build with Substrate & Arcadia.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            A single substrate under Kernel, VOID, Folio, and Arcadia.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/arcadia"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]"
            >
              Explore Arcadia
              <span>→</span>
            </Link>
            <Link
              to="/kernel"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              Meet Kernel
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5">
              <SpectralMark variant="substrate" className="h-6 w-6 text-foreground" />
              <p className="rule-label !text-foreground font-semibold">Substrate</p>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground max-w-[200px]">
              The unified runtime for ambient multimodal intelligence.
            </p>
          </div>

          <div>
            <p className="rule-label text-xs !text-foreground/90 mb-3">Products</p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link to="/arcadia" className="transition-colors hover:text-foreground flex items-center gap-1.5">
                  <span>Arcadia Agent</span>
                  <span className="text-[0.6rem] text-primary">●</span>
                </Link>
              </li>
              <li>
                <Link to="/kernel" className="transition-colors hover:text-foreground">Kernel Model</Link>
              </li>
              <li>
                <Link to="/void" className="transition-colors hover:text-foreground">VOID Browser</Link>
              </li>
              <li>
                <Link to="/folio" className="transition-colors hover:text-foreground">Folio Surface</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="rule-label text-xs !text-foreground/90 mb-3">Capabilities</p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><span>Autonomous Fleets</span></li>
              <li><span>Local-first Inference</span></li>
              <li><span>Multimodal Unified Lattice</span></li>
              <li><span>Scheduled Automations</span></li>
            </ul>
          </div>

          <div>
            <p className="rule-label text-xs !text-foreground/90 mb-3">Studio</p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link to="/studio" className="transition-colors hover:text-foreground">Philosophy</Link>
              </li>
              <li><span>Research Notes</span></li>
              <li><span>Benchmarks</span></li>
              <li>
                <a href="mailto:hello@substrate.dev" className="transition-colors hover:text-foreground">Careers</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="rule-label text-xs !text-foreground/90 mb-3">Connect</p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="https://github.com/viditpvttttt" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">GitHub</a></li>
              <li><a href="mailto:hello@substrate.dev" className="transition-colors hover:text-foreground">Email</a></li>
              <li><a href="https://substrate-devs.vercel.app" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">Vercel</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Substrate Devs. Kernel · VOID · Folio · Arcadia.</p>
          <p className="font-mono text-[0.625rem] tracking-wider uppercase">Built with precision for ambient agents</p>
        </div>
      </div>
      {/* Chromatic base band — the RGB ambience settling at the foot of the page */}
      <div className="spectral-base" aria-hidden="true" />
    </footer>
  );
}
