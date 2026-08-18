import { Link } from "@tanstack/react-router";
import substrateLogo from "@/assets/substrate-logo.png.asset.json";

const nav = [
  { to: "/kernel", label: "Kernel" },
  { to: "/void", label: "VOID" },
  { to: "/folio", label: "Folio" },
  { to: "/studio", label: "Studio" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={substrateLogo.url} alt="Substrate mark" className="h-7 w-7" />
          <span className="rule-label !text-foreground">Substrate</span>
        </Link>
        <nav className="flex items-center gap-6 sm:gap-8">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground" }}
            >
              {item.label}
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
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <img src={substrateLogo.url} alt="" className="h-6 w-6" aria-hidden="true" />
          <p className="rule-label">Substrate</p>
        </div>
        <nav className="flex flex-wrap gap-6">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Substrate. Kernel · VOID · Folio
        </p>
      </div>
      {/* Chromatic base band — the RGB ambience settling at the foot of the page */}
      <div className="spectral-base" aria-hidden="true" />
    </footer>
  );
}
