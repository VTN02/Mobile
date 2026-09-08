import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Package, Layers, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";
import { whatsappLink, waMessages } from "@/utils/whatsapp";

interface NavItem {
  to?: string;
  href?: string;
  label: string;
  icon: typeof Home;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { to: "/", label: "Home", icon: Home },
  { to: "/products", label: "Products", icon: Package },
  { to: "/categories", label: "Categories", icon: Layers },
  { to: "/branches", label: "Branches", icon: MapPin },
  {
    href: whatsappLink(waMessages.general()),
    label: "WhatsApp",
    icon: WhatsAppIcon as unknown as typeof Home,
    isExternal: true,
  },
];

export function MobileBottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 inset-x-0 z-40 block md:hidden border-t border-white/[0.08] bg-[#0b0e17]/95 backdrop-blur-xl pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_25px_rgba(0,0,0,0.6)]"
    >
      <div className="mx-auto flex h-16 max-w-md items-center justify-around px-2">
        {navItems.map((item) => {
          if (item.isExternal && item.href) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="group flex flex-1 flex-col items-center justify-center py-1 min-h-[48px] touch-manipulation transition-transform active:scale-95"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#25D366]/15 text-[#25D366] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                  <WhatsAppIcon size={16} colored={false} className="shrink-0" />
                </span>
                <span className="mt-1 text-[10px] font-bold text-[#25D366] tracking-tight">
                  {item.label}
                </span>
              </a>
            );
          }

          const isActive =
            item.to === "/"
              ? pathname === "/"
              : item.to
                ? pathname.startsWith(item.to)
                : false;

          const IconComponent = item.icon;

          return (
            <Link
              key={item.label}
              to={item.to!}
              aria-label={item.label}
              className={cn(
                "relative flex flex-1 flex-col items-center justify-center py-1 min-h-[48px] touch-manipulation transition-all active:scale-95",
                isActive ? "text-blue-400" : "text-slate-400 hover:text-slate-200",
              )}
            >
              {/* Active Sapphire Indicator Dot */}
              {isActive && (
                <span
                  className="absolute top-1 h-1 w-5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                  aria-hidden="true"
                />
              )}
              <span
                className={cn(
                  "grid h-7 w-7 place-items-center rounded-xl transition-colors",
                  isActive ? "bg-blue-600/15 text-blue-400" : "text-slate-400",
                )}
              >
                <IconComponent className="h-4 w-4" aria-hidden="true" />
              </span>
              <span
                className={cn(
                  "mt-0.5 text-[10px] tracking-tight",
                  isActive ? "font-bold text-white" : "font-medium text-slate-400",
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
