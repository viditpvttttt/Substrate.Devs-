import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { BrandLogo, brandWorks, type BrandVariant } from "@/components/BrandLogo";
import { FlipText } from "@/components/anim/FlipLink";
import { MagneticButton } from "@/components/anim/MagneticButton";
import { ScrambleText } from "@/components/anim/ScrambleText";

const nav: { to: string; label: string; mark: BrandVariant | "substrate" }[] = [
  { to: "/kernel", label: "Kernel", mark: "kernel" },
  { to: "/folio", label: "Folio", mark: "folio" },
  { to: "/gridline", label: "Gridline", mark: "gridline" },
  { to: "/work", label: "Work", mark: "substrate" },
  { to: "/studio", label: "Studio", mark: "substrate" },
  { to: "/leadership", label: "Leadership", mark: "substrate" },
];

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
          <BrandLogo
            variant="substrate"
            className="h-6 w-6 rounded-full transition-transform duration-300 group-hover:scale-110"
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
              <BrandLogo
                variant={item.mark}
                alt=""
                className={`h-4 w-4 shrink-0 opacity-60 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 ${
                  item.mark === "kernel" ? "w-6 grayscale-[0.3]" : ""
                }`}
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

/** Footer link that re-scrambles its label on hover — a quiet niche touch. */
function FooterLink({ to, label, mark }: { to: string; label: string; mark: BrandVariant }) {
  const [hoverKey, setHoverKey] = useState(0);
  return (
    <Link
      to={to}
      className="group flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
      onMouseEnter={() => setHoverKey((k) => k + 1)}
    >
      <BrandLogo
        variant={mark}
        alt=""
        className={`h-3.5 w-3.5 opacity-60 transition-opacity duration-300 group-hover:opacity-100 ${
          mark === "kernel" ? "w-5" : ""
        }`}
      />
      <span className="group-hover:hidden">{label}</span>
      <span className="hidden group-hover:inline">
        <ScrambleText key={hoverKey} text={label} />
      </span>
    </Link>
  );
}

/** Live local-time readout — a tiny footer detail. */
function LocalTime() {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const fmt = () =>
      setNow(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      );
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
      {now ?? "--:--:--"} — local
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative isolate mt-0 overflow-hidden border-t border-border/70">
      {/* Product logo drift — the three works gliding across the foot of the page */}
      <div className="overflow-hidden border-b border-border/60 py-5" aria-hidden="true">
        <div className="marquee-track [animation-play-state:running] hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {brandWorks.map((w) => (
                <span key={`${copy}-${w}`} className="mx-10 inline-flex items-center gap-10">
                  <BrandLogo
                    variant={w}
                    alt=""
                    className={`h-8 w-8 opacity-40 transition-opacity hover:opacity-100 ${
                      w === "kernel" ? "w-12" : ""
                    }`}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <BrandLogo variant="substrate" className="h-6 w-6 rounded-full" />
          <div>
            <p className="rule-label">Substrate</p>
            <p className="mt-1">
              <LocalTime />
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          {nav.map((item) => (
            <FooterLink
              key={item.to}
              to={item.to}
              label={item.label}
              mark={item.mark as BrandVariant}
            />
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <MagneticButton strength={0.35}>
            <a
              href="#top"
              aria-label="Back to top"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-foreground/40 hover:bg-accent"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </MagneticButton>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Substrate
          </p>
        </div>
      </div>

      {/* Chromatic base band — the RGB ambience settling at the foot of the page */}
      <div className="spectral-base" aria-hidden="true" />
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--spectral-r), var(--spectral-g), var(--spectral-b), transparent)",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />
    </footer>
  );
}
