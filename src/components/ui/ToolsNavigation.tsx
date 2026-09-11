import { Link } from "@tanstack/react-router";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Tool routes — mirrors the main site navigation order (Gridline after Arcadia).
const tools = [
  { to: "/kernel", label: "Kernel" },
  { to: "/void", label: "VOID" },
  { to: "/folio", label: "Folio" },
  { to: "/arcadia", label: "Arcadia" },
  { to: "/gridline", label: "Gridline" },
  { to: "/studio", label: "Studio" },
] as const;

/**
 * Navigation component styled like the existing site navigation.
 * It can be placed anywhere (e.g., a sidebar, a secondary header, or a dedicated tools page).
 */
export function ToolsNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-4">
        {tools.map((item) => (
          <NavigationMenuItem key={item.to}>
            <NavigationMenuLink asChild>
              <Link
                to={item.to}
                className={navigationMenuTriggerStyle()}
                activeProps={{ className: navigationMenuTriggerStyle() + " text-foreground" }}
              >
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default ToolsNavigation;
