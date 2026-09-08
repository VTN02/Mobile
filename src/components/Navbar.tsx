import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { 
  Menu, 
  X, 
  Smartphone, 
  Search, 
  ChevronDown, 
  Camera, 
  Zap, 
  Wrench, 
  Cpu, 
  ShieldCheck, 
  Headphones, 
  Watch, 
  Layers, 
  ArrowRight 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";
import { categories, products, type Category } from "@/data/products";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { waMessages } from "@/utils/whatsapp";

const links = [
  { to: "/", label: "Home" },
  { to: "/categories", label: "Categories", hasDropdown: true },
  { to: "/products", label: "Products" },
  { to: "/branches", label: "Branches" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const categoryDetails: Record<
  Category,
  {
    icon: typeof Smartphone;
    desc: string;
    badgeColor: string;
    iconColor: string;
  }
> = {
  "CCTV & Cameras": {
    icon: Camera,
    desc: "4K Dome, WiFi PTZ & outdoor security",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    iconColor: "text-amber-400 bg-amber-500/15",
  },
  "Chargers & Cables": {
    icon: Zap,
    desc: "65W GaN fast chargers & heavy-duty cables",
    badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    iconColor: "text-yellow-400 bg-yellow-500/15",
  },
  "Repair Tools & Parts": {
    icon: Wrench,
    desc: "Toolkits, multimeters & replacement parts",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    iconColor: "text-emerald-400 bg-emerald-500/15",
  },
  "Mobile Phones": {
    icon: Smartphone,
    desc: "Flagship 5G Apple, Samsung & Xiaomi",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    iconColor: "text-blue-400 bg-blue-500/15",
  },
  "Electronics": {
    icon: Cpu,
    desc: "Tablets, desktop tech & accessories",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconColor: "text-purple-400 bg-purple-500/15",
  },
  "Accessories": {
    icon: ShieldCheck,
    desc: "Shockproof cases, 9H glass & car mounts",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    iconColor: "text-rose-400 bg-rose-500/15",
  },
  "Audio": {
    icon: Headphones,
    desc: "Active noise-cancelling earbuds & sound",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    iconColor: "text-indigo-400 bg-indigo-500/15",
  },
  "Smart Watches": {
    icon: Watch,
    desc: "AMOLED displays & BT calling fitness bands",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    iconColor: "text-cyan-400 bg-cyan-500/15",
  },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [navQuery, setNavQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
    setCategoryDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  const handleCategoryMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setCategoryDropdownOpen(true);
  };

  const handleCategoryMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setCategoryDropdownOpen(false);
    }, 180);
  };

  const handleNavSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (navQuery.trim()) {
      navigate({ to: "/products", search: { q: navQuery.trim() } });
      setSearchOpen(false);
      setNavQuery("");
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.08] bg-[#0b0e14]/90 shadow-md backdrop-blur-xl"
          : "border-b border-transparent bg-transparent backdrop-blur-sm",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-7xl items-center gap-3 px-4 sm:px-6 lg:h-18 lg:px-8"
      >
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3 shrink-0"
          aria-label={`${site.name} home`}
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20 ring-1 ring-white/10">
            <Smartphone className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base leading-tight font-extrabold text-white">
              {site.name}
            </span>
            <span className="hidden text-[11px] leading-tight font-semibold text-blue-400 sm:block">
              Mobiles &amp; Electronics
            </span>
          </span>
        </Link>

        {/* Desktop Links (hidden when search is open) */}
        {!searchOpen ? (
          <ul className="mx-auto hidden items-center gap-1 lg:flex">
            {links.map((link) => {
              if (link.to === "/categories") {
                return (
                  <li
                    key={link.to}
                    className="relative"
                    onMouseEnter={handleCategoryMouseEnter}
                    onMouseLeave={handleCategoryMouseLeave}
                  >
                    <Link
                      to="/categories"
                      activeOptions={{ exact: false }}
                      className="group relative inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      activeProps={{ className: "text-foreground" }}
                      aria-haspopup="true"
                      aria-expanded={categoryDropdownOpen}
                    >
                      {({ isActive }) => (
                        <>
                          <span>{link.label}</span>
                          <ChevronDown
                            className={cn(
                              "h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-hover:text-white",
                              categoryDropdownOpen && "rotate-180 text-blue-400",
                            )}
                            aria-hidden="true"
                          />
                          <span
                            className={cn(
                              "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-brand transition-transform duration-300",
                              isActive || categoryDropdownOpen ? "scale-x-100" : "scale-x-0",
                            )}
                          />
                        </>
                      )}
                    </Link>

                    {/* All Categories Desktop Dropdown */}
                    <AnimatePresence>
                      {categoryDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[620px] max-w-[90vw] z-50 pointer-events-auto"
                        >
                          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d101a]/98 p-4 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10">
                            {/* Subtle Sapphire Top Glow Line */}
                            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent" />

                            <div className="mb-3 flex items-center justify-between px-2 pt-1">
                              <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-blue-400">
                                Browse Departments
                              </span>
                              <Link
                                to="/categories"
                                onClick={() => setCategoryDropdownOpen(false)}
                                className="group inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                              >
                                <span>Gallery View</span>
                                <ArrowRight className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5 text-blue-400" />
                              </Link>
                            </div>

                            {/* 2-Column Categories Grid */}
                            <div className="grid grid-cols-2 gap-2">
                              {categories.map((cat) => {
                                const meta = categoryDetails[cat];
                                const catProducts = products.filter((p) => p.category === cat);
                                const IconComponent = meta?.icon ?? Smartphone;

                                return (
                                  <Link
                                    key={cat}
                                    to="/products"
                                    search={{ category: cat }}
                                    onClick={() => setCategoryDropdownOpen(false)}
                                    className="group flex items-start gap-3 rounded-xl border border-transparent p-2.5 transition-all duration-200 hover:border-white/10 hover:bg-white/[0.06] active:scale-[0.99]"
                                  >
                                    <div
                                      className={cn(
                                        "grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-transform duration-200 group-hover:scale-105 shadow-sm",
                                        meta?.iconColor ?? "text-blue-400 bg-blue-500/15",
                                      )}
                                    >
                                      <IconComponent className="h-4 w-4" aria-hidden="true" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between gap-1">
                                        <p className="truncate text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                                          {cat}
                                        </p>
                                        <span className="shrink-0 text-[10px] font-medium text-slate-400 group-hover:text-slate-300">
                                          {catProducts.length}
                                        </span>
                                      </div>
                                      <p className="line-clamp-1 text-[11px] text-slate-400 leading-snug mt-0.5">
                                        {meta?.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Dropdown Footer */}
                            <div className="mt-3.5 flex items-center justify-between border-t border-white/[0.08] px-2 pt-3 text-xs">
                              <Link
                                to="/categories"
                                onClick={() => setCategoryDropdownOpen(false)}
                                className="inline-flex items-center gap-1.5 font-bold text-blue-400 hover:text-blue-300 transition-colors"
                              >
                                <Layers className="h-3.5 w-3.5" />
                                <span>Explore All Categories</span>
                              </Link>
                              <Link
                                to="/products"
                                onClick={() => setCategoryDropdownOpen(false)}
                                className="text-slate-400 hover:text-white transition-colors"
                              >
                                View All Products →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    activeOptions={{ exact: link.to === "/" }}
                    className="relative rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    activeProps={{ className: "text-foreground" }}
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        <span
                          className={cn(
                            "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-brand transition-transform duration-300",
                            isActive ? "scale-x-100" : "scale-x-0",
                          )}
                        />
                      </>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          /* Desktop Expandable Search Input */
          <motion.form
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            onSubmit={handleNavSearch}
            className="mx-auto hidden max-w-md flex-1 items-center gap-2 lg:flex"
          >
            <div className="relative flex w-full items-center rounded-xl border border-blue-500/40 bg-[#121624] px-3 py-1.5 shadow-lg">
              <Search className="h-4 w-4 text-blue-400 shrink-0 mr-2" />
              <input
                ref={searchInputRef}
                type="text"
                value={navQuery}
                onChange={(e) => setNavQuery(e.target.value)}
                placeholder="Search CCTV, chargers, cables, repair tools, phones..."
                className="w-full bg-transparent text-sm text-white placeholder-slate-400 outline-none"
              />
              {navQuery && (
                <button
                  type="button"
                  onClick={() => setNavQuery("")}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 shadow-sm shrink-0"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="p-2 text-slate-400 hover:text-white shrink-0"
              title="Close search"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.form>
        )}

        <div className="ml-auto flex items-center gap-2">
          {/* Search Icon Toggle Button */}
          <button
            type="button"
            onClick={() => setSearchOpen((prev) => !prev)}
            aria-label={searchOpen ? "Close search" : "Open search"}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-xl border transition-all duration-200",
              searchOpen
                ? "border-blue-500/50 bg-blue-600/20 text-blue-300"
                : "border-white/10 bg-[#121624] text-slate-300 hover:border-blue-500/40 hover:text-white",
            )}
          >
            {searchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
          </button>

          <WhatsAppButton
            message={waMessages.general()}
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex"
          >
            WhatsApp
          </WhatsAppButton>
          <WhatsAppButton
            message={waMessages.general()}
            variant="icon"
            className="h-10 w-10 sm:hidden"
            label="Chat on WhatsApp"
          />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Search Box Bar (when search is open) */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/[0.08] bg-[#0d101a] px-4 py-3 lg:hidden"
          >
            <form onSubmit={handleNavSearch} className="flex items-center gap-2">
              <div className="relative flex flex-1 items-center rounded-xl border border-blue-500/40 bg-[#121624] px-3 py-2">
                <Search className="mr-2 h-4 w-4 shrink-0 text-blue-400" />
                <input
                  type="text"
                  value={navQuery}
                  onChange={(e) => setNavQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-transparent text-sm text-white placeholder-slate-400 outline-none"
                />
                {navQuery && (
                  <button
                    type="button"
                    onClick={() => setNavQuery("")}
                    className="p-1 text-slate-400 hover:text-white"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-blue-500"
              >
                Go
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden overflow-y-auto",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none",
        )}
      >
        <ul className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
          {links.map((link) => {
            if (link.to === "/categories") {
              return (
                <li key={link.to} className="flex flex-col">
                  <div className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                    <Link
                      to="/categories"
                      onClick={() => setOpen(false)}
                      className="flex-1 font-medium"
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMobileCategoriesOpen((prev) => !prev);
                      }}
                      className="p-1 text-slate-400 hover:text-white"
                      aria-label="Toggle categories list"
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          mobileCategoriesOpen && "rotate-180 text-blue-400"
                        )}
                      />
                    </button>
                  </div>

                  {/* Mobile Categories Collapsible Sub-list */}
                  <AnimatePresence>
                    {mobileCategoriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-3 pr-1 py-1 flex flex-col gap-0.5 border-l-2 border-blue-500/40 ml-3.5 my-1"
                      >
                        {categories.map((cat) => {
                          const meta = categoryDetails[cat];
                          const IconComp = meta?.icon ?? Smartphone;
                          return (
                            <Link
                              key={cat}
                              to="/products"
                              search={{ category: cat }}
                              onClick={() => {
                                setOpen(false);
                                setMobileCategoriesOpen(false);
                              }}
                              className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-300 hover:bg-white/[0.06] hover:text-white transition-colors"
                            >
                              <IconComp className={cn("h-3.5 w-3.5", meta?.iconColor.split(" ")[0])} />
                              <span>{cat}</span>
                            </Link>
                          );
                        })}
                        <Link
                          to="/categories"
                          onClick={() => {
                            setOpen(false);
                            setMobileCategoriesOpen(false);
                          }}
                          className="mt-1 flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <Layers className="h-3.5 w-3.5" />
                          <span>View all categories page →</span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "bg-primary/10 text-primary" }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
