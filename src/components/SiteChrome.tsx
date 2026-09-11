import { Link } from "@tanstack/react-router";
import { SpectralMark } from "@/components/SpectralMark";
import { FlipText } from "@/components/anim/FlipLink";

const nav = [
  { to: "/kernel", label: "Kernel", logo: "/images/kernel-wordmark.png" },
  { to: "/void", label: "VOID", logo: "/images/void-mark.png" },
  { to: "/folio", label: "Folio", logo: "/images/folio-mark.png" },
  { to: "/arcadia", label: "Arcadia", logo: "/images/arcadia-mark.png" },
  { to: "/gridline", label: "Gridline", logo: "/images/gridline-mark.png" },
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
        <nav className="flex items-center gap-5 sm:gap-7">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "group relative flex items-center gap-1.5 text-sm text-foreground" }}
            >
              {"logo" in item && item.logo && (
                <img
                  src={item.logo}
                  alt=""
                  className="h-4 w-4 object-contain mix-blend-multiply opacity-70 transition-opacity group-hover:opacity-100"
                />
              )}
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

export function SiteFooter() {
  return (
    <footer className="relative isolate mt-0 overflow-hidden border-t border-border/70 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Terminal-style header */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <span className="ml-2 font-mono text-[0.625rem] uppercase tracking-wider text-white/40">
            folio — running processes
          </span>
        </div>

        {/* Running processes — nav links as terminal output */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-white/40">
              $ processes
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {nav.slice(0, 4).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex items-center gap-2 font-mono text-sm text-white/70 transition-colors hover:text-white"
                >
                  <span className="text-[#2563EB]">→</span>
                  {item.label}
                  <span className="text-white/30 transition-transform group-hover:translate-x-1">↗</span>
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-white/40">
              $ modules
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {nav.slice(4).map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex items-center gap-2 font-mono text-sm text-white/70 transition-colors hover:text-white"
                >
                  <span className="text-[#2563EB]">→</span>
                  {item.label}
                  <span className="text-white/30 transition-transform group-hover:translate-x-1">↗</span>
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-white/40">
              $ install
            </p>
            <div className="mt-4 rounded-lg border border-white/10 bg-black/30 p-3 font-mono text-xs">
              <p className="text-white/40">$ run:</p>
              <p className="mt-1 text-[#2563EB]">pnpm dlx shadcn add</p>
              <p className="text-[#2563EB]">@skiper-ui/skiper86</p>
            </div>
          </div>
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-white/40">
              $ status
            </p>
            <div className="mt-4 space-y-2 font-mono text-xs text-white/60">
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                kernel: training
              </p>
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                void: pre-production
              </p>
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                folio: private beta
              </p>
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                arcadia: early access
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <SpectralMark variant="substrate" className="h-5 w-5 text-background" />
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-white/50">
              Substrate
            </p>
          </div>
          <p className="font-mono text-xs text-white/40">
            © {new Date().getFullYear()} Substrate · Kernel · VOID · Folio · Arcadia
          </p>
        </div>
      </div>
    </footer>
  );
}
