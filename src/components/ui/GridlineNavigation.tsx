import { Link } from "@tanstack/react-router";
import { FlipText } from "@/components/anim/FlipLink";

// Mirrors the site header navigation order — Gridline follows Arcadia.
const nav = [
  { to: "/kernel", label: "Kernel" },
  { to: "/void", label: "VOID" },
  { to: "/folio", label: "Folio" },
  { to: "/arcadia", label: "Arcadia" },
  { to: "/gridline", label: "Gridline" },
  { to: "/studio", label: "Studio" },
  { to: "/leadership", label: "Leadership" },
] as const;

/**
 * A standalone navigation component that mirrors the site header navigation.
 * It can be imported and used anywhere in the app, for example in a
 * sidebar, a drawer, or a dedicated header for a specific layout.
 */
export function GridlineNavigation() {
  return (
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
  );
}

export default GridlineNavigation;
