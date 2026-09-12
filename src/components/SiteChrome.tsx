import { Link } from "@tanstack/react-router";
import { SpectralMark } from "@/components/SpectralMark";
import { FlipText } from "@/components/anim/FlipLink";

const nav = [
  { to: "/kernel", label: "Kernel", mark: "kernel" },
  { to: "/void", label: "VOID", mark: "void" },
  { to: "/folio", label: "Folio", mark: "folio" },
  { to: "/arcadia", label: "Arcadia", mark: "arcadia" },
  { to: "/gridline", label: "Gridline", mark: "gridline" },
  { to: "/studio", label: "Studio", mark: "substrate" },
  { to: "/leadership", label: "Leadership", mark: "substrate" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-[var(--spectral-b)]/40 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="group flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-80"
        >
          <SpectralMark
            variant="substrate"
            className="h-6 w-6 text-foreground transition-transform duration-300 group-hover:scale-110"
          />
          <span className="rule-label !text-foreground">Substrate</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              activeProps={{ className: "group relative flex items-center gap-1.5 text-sm text-foreground" }}
            >
              <SpectralMark
                variant={item.mark}
                alt=""
                className="h-4 w-4 shrink-0 opacity-60 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 aria-[current]:opacity-100"
              />
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
    <footer className="relative isolate mt-0 overflow-hidden border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <SpectralMark variant="substrate" className="h-5 w-5 text-foreground" />
          <p className="rule-label">Substrate</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <SpectralMark
                variant={item.mark}
                alt=""
                className="h-3.5 w-3.5 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
              />
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Substrate. Kernel · VOID · Folio · Arcadia · Gridline
        </p>
      </div>
      {/* Chromatic base band — the RGB ambience settling at the foot of the page */}
      <div className="spectral-base" aria-hidden="true" />
    </footer>
  );
}
