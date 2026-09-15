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
import { SearchModal } from "@/components/SearchModal";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";
import { waMessages, whatsappLink } from "@/utils/whatsapp";
import { setSearchActive } from "@/utils/searchEvents";

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
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchHovered, setSearchHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isSearchActive = searchExpanded || searchHovered || searchOpen;

  // Broadcast search active status across app (e.g. to hide FloatingWhatsApp)
  useEffect(() => {
    setSearchActive(isSearchActive);
    return () => {
      setSearchActive(false);
    };
  }, [isSearchActive]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
    setSearchExpanded(false);
    setSearchHovered(false);
    setCategoryDropdownOpen(false);
  }, [pathname]);

  const handleSearchMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setSearchHovered(true);
  };

  const handleSearchMouseLeave = () => {
    if (!searchExpanded && !searchQuery.trim()) {
      hoverTimeoutRef.current = setTimeout(() => {
        setSearchHovered(false);
      }, 250);
    }
  };

  const handleOpenSearch = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setSearchExpanded(true);
    setOpen(false);
    setTimeout(() => searchInputRef.current?.focus(), 80);
  };

  const handleCloseSearch = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setSearchExpanded(false);
    setSearchHovered(false);
    setSearchQuery("");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({ to: "/products", search: { q: searchQuery.trim() } });
      handleCloseSearch();
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchActive) {
        handleCloseSearch();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isSearchActive]);

  // Handle mobile menu scroll lock & keyboard escape accessibility
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const handleCategoryMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setCategoryDropdownOpen(true);
  };

  const handleCategoryMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setCategoryDropdownOpen(false);
    }, 180);
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

        {/* Desktop Links */}
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

                  {/* ── Premium Mega-Menu Dropdown ── */}
                  <AnimatePresence>
                    {categoryDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px] max-w-[96vw] z-50 pointer-events-auto"
                      >
                        {/* Caret arrow */}
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 rounded-sm bg-[#0d101c] border-l border-t border-white/10 z-10" />

                        <div className="relative overflow-hidden rounded-2xl border border-white/[0.10] bg-[#0d101c] shadow-[0_24px_60px_rgba(0,0,0,0.7)] backdrop-blur-3xl ring-1 ring-white/[0.06]">

                          {/* Top accent line */}
                          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />

                          <div className="flex">
                            {/* ── Left Panel ── */}
                            <div className="relative flex w-52 shrink-0 flex-col justify-between gap-6 border-r border-white/[0.07] bg-[#0a0d16] p-6">
                              {/* Subtle radial glow */}
                              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_70%)]" />

                              <div className="relative space-y-1">
                                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-400">
                                  Departments
                                </p>
                                <h3 className="text-lg font-extrabold leading-tight text-white">
                                  Browse by Category
                                </h3>
                                <p className="text-[11px] leading-relaxed text-slate-400">
                                  Find exactly what you need across {categories.length} departments.
                                </p>
                              </div>

                              {/* Total count pill */}
                              <div className="relative flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2.5">
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                                  <Layers className="h-3.5 w-3.5" />
                                </span>
                                <div>
                                  <p className="text-sm font-extrabold text-white">{products.length}+</p>
                                  <p className="text-[10px] text-slate-400">Products in stock</p>
                                </div>
                              </div>

                              <Link
                                to="/categories"
                                onClick={() => setCategoryDropdownOpen(false)}
                                className="relative group inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-[0.98]"
                              >
                                <span>All Categories</span>
                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                              </Link>
                            </div>

                            {/* ── Right Panel – Category Grid ── */}
                            <div className="flex-1 p-4">
                              <div className="grid grid-cols-2 gap-1.5">
                                {categories.map((cat) => {
                                  const meta = categoryDetails[cat];
                                  const catProducts = products.filter((p) => p.category === cat);
                                  const IconComponent = meta?.icon ?? Smartphone;
                                  // Extract just the icon color class (first word before space)
                                  const iconTextColor = meta?.iconColor.split(" ")[0] ?? "text-blue-400";
                                  const iconBgColor = meta?.iconColor.split(" ").slice(1).join(" ") ?? "bg-blue-500/15";

                                  return (
                                    <Link
                                      key={cat}
                                      to="/products"
                                      search={{ category: cat }}
                                      onClick={() => setCategoryDropdownOpen(false)}
                                      className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-transparent px-3 py-2.5 transition-all duration-200 hover:border-white/[0.10] hover:bg-white/[0.05] active:scale-[0.98]"
                                    >
                                      {/* Subtle hover glow behind icon */}
                                      <div className={cn(
                                        "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl",
                                        iconBgColor.replace("/15", "/5"),
                                      )} />

                                      {/* Icon */}
                                      <div className={cn(
                                        "relative grid h-9 w-9 shrink-0 place-items-center rounded-xl border transition-transform duration-200 group-hover:scale-110",
                                        iconBgColor,
                                        meta?.badgeColor.split(" ").find(c => c.startsWith("border")) ?? "border-white/10",
                                      )}>
                                        <IconComponent className={cn("h-4 w-4", iconTextColor)} aria-hidden="true" />
                                      </div>

                                      {/* Text */}
                                      <div className="relative min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-1">
                                          <p className={cn(
                                            "truncate text-[13px] font-semibold transition-colors duration-200",
                                            "text-slate-200 group-hover:text-white",
                                          )}>
                                            {cat}
                                          </p>
                                          {/* Count badge */}
                                          <span className={cn(
                                            "shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-bold tabular-nums transition-colors duration-200",
                                            meta?.badgeColor ?? "bg-blue-500/10 text-blue-400 border-blue-500/20",
                                            "border",
                                          )}>
                                            {catProducts.length}
                                          </span>
                                        </div>
                                        <p className="mt-0.5 line-clamp-1 text-[11px] text-slate-500 group-hover:text-slate-400 transition-colors duration-200">
                                          {meta?.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>

                              {/* Footer strip */}
                              <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-3">
                                <p className="text-[11px] text-slate-500">
                                  Showing {categories.length} departments
                                </p>
                                <Link
                                  to="/products"
                                  onClick={() => setCategoryDropdownOpen(false)}
                                  className="group inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 transition-colors hover:text-white"
                                >
                                  <span>View all products</span>
                                  <ArrowRight className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5" />
                                </Link>
                              </div>
                            </div>
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

        <div className="ml-auto flex items-center gap-1.5">
          {/* Animated WhatsApp Quick Button: Hides when search is hovered or clicked */}
          <AnimatePresence initial={false}>
            {!isSearchActive && (
              <motion.a
                key="nav-whatsapp-btn"
                href={whatsappLink(waMessages.general())}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                initial={{ opacity: 0, scale: 0.85, width: 0 }}
                animate={{ opacity: 1, scale: 1, width: "auto" }}
                exit={{ opacity: 0, scale: 0.85, width: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-3 py-2 text-xs font-bold text-[#25D366] transition-colors duration-200 hover:bg-[#25D366] hover:text-white hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] active:scale-[0.98] overflow-hidden whitespace-nowrap"
              >
                <WhatsAppIcon size={15} colored={false} className="shrink-0" />
                <span>WhatsApp</span>
              </motion.a>
            )}
          </AnimatePresence>

          {/* Animated Search Box: Expands with spring animation when hovered or clicked */}
          <AnimatePresence mode="wait">
            {isSearchActive ? (
              <motion.form
                key="nav-search-expanded"
                initial={{ opacity: 0, scale: 0.95, width: 44 }}
                animate={{ opacity: 1, scale: 1, width: "100%" }}
                exit={{ opacity: 0, scale: 0.95, width: 44 }}
                transition={{ type: "spring", stiffness: 450, damping: 30 }}
                onSubmit={handleSearchSubmit}
                onMouseEnter={handleSearchMouseEnter}
                onMouseLeave={handleSearchMouseLeave}
                className={cn(
                  "flex items-center gap-2 rounded-xl border border-blue-500/40 bg-[#0e1220] px-3 py-1.5 shadow-xl backdrop-blur-2xl transition-all",
                  "absolute inset-x-3 inset-y-2.5 z-50 sm:static sm:inset-auto sm:w-64 md:w-72 lg:w-80",
                )}
              >
                <Search className="h-4 w-4 text-blue-400 shrink-0" aria-hidden="true" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search phones, CCTV, chargers..."
                  aria-label="Search store products"
                  className="w-full bg-transparent text-xs sm:text-sm font-medium text-white placeholder-slate-400 outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="rounded p-1 text-slate-400 hover:text-white transition-colors shrink-0"
                    aria-label="Clear search input"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="hidden lg:inline-flex rounded bg-blue-600/20 px-1.5 py-0.5 text-[10px] font-bold text-blue-300 hover:bg-blue-600 hover:text-white transition-colors shrink-0"
                  title="Spotlight Search Modal"
                >
                  Modal
                </button>
                <button
                  type="button"
                  onClick={handleCloseSearch}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-white/[0.08] hover:text-white transition-colors shrink-0"
                  aria-label="Close search"
                >
                  <X className="h-4 w-4" />
                </button>
              </motion.form>
            ) : (
              <motion.button
                key="nav-search-icon"
                type="button"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.18 }}
                onMouseEnter={handleSearchMouseEnter}
                onMouseLeave={handleSearchMouseLeave}
                onClick={handleOpenSearch}
                aria-label="Open search box"
                className="grid h-11 w-11 place-items-center rounded-xl text-slate-300 transition-all duration-200 hover:bg-white/[0.08] hover:text-white active:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Search className="h-5 w-5" aria-hidden="true" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Navigation Menu Hamburger Button (44px WCAG tap target) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-xl transition-colors hover:bg-white/[0.08] active:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden",
              open ? "bg-white/[0.1] text-white" : "text-slate-300 hover:text-white",
            )}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Professional Spotlight Command Search Dialog */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

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

        {/* Mobile WhatsApp Quick Action */}
        <div className="mx-auto w-full max-w-7xl px-4 pb-4 pt-1 sm:px-6">
          <a
            href={whatsappLink(waMessages.general())}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-500/20 active:scale-[0.98]"
          >
            <WhatsAppIcon size={18} colored={false} className="shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
