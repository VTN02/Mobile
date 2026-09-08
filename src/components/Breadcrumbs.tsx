import { Link } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbCrumb {
  label: string;
  to?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbCrumb[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "mb-6 inline-flex items-center text-xs sm:text-sm text-slate-400 font-medium",
        className
      )}
    >
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
          >
            <Home className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="inline-flex items-center gap-1.5 sm:gap-2">
              <span className="text-slate-600 select-none font-semibold" aria-hidden="true">
                /
              </span>
              {isLast || !item.to ? (
                <span
                  className="font-semibold text-slate-200 truncate max-w-[200px] sm:max-w-[340px]"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="text-slate-400 transition-colors hover:text-white truncate max-w-[180px] sm:max-w-[260px]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
