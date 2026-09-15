import { useState, useMemo, useEffect } from "react";
import {
  Check,
  ChevronDown,
  RotateCcw,
  Search,
  SlidersHorizontal,
  X,
  Sparkles,
  ShieldCheck,
  Tag,
  DollarSign,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Category } from "@/data/products";

export interface FilterState {
  category: string;
  brands: string[];
  minPrice?: number;
  maxPrice?: number;
  inStockOnly: boolean;
  warrantyOnly: boolean;
}

interface ProductFiltersProps {
  categories: Category[];
  availableBrands: { name: string; count: number }[];
  categoryCounts: Record<string, number>;
  filters: FilterState;
  priceBounds: { min: number; max: number };
  activeFiltersCount: number;
  totalFilteredCount: number;
  onCategoryChange: (category: string) => void;
  onBrandToggle: (brand: string) => void;
  onPriceChange: (min?: number, max?: number) => void;
  onInStockToggle: (value: boolean) => void;
  onWarrantyToggle: (value: boolean) => void;
  onClearAll: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export function ProductFilters({
  categories,
  availableBrands,
  categoryCounts,
  filters,
  priceBounds,
  activeFiltersCount,
  totalFilteredCount,
  onCategoryChange,
  onBrandToggle,
  onPriceChange,
  onInStockToggle,
  onWarrantyToggle,
  onClearAll,
  isMobileOpen,
  onCloseMobile,
}: ProductFiltersProps) {
  // Brand search within the filter
  const [brandSearch, setBrandSearch] = useState("");

  // Local price input state
  const [minInput, setMinInput] = useState<string>(
    filters.minPrice !== undefined ? String(filters.minPrice) : "",
  );
  const [maxInput, setMaxInput] = useState<string>(
    filters.maxPrice !== undefined ? String(filters.maxPrice) : "",
  );

  // Accordion section collapse state
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    brands: true,
    services: true,
  });

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Lock background scroll and listen for ESC key when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onCloseMobile();
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileOpen, onCloseMobile]);

  // Filtered brand list by search query
  const filteredBrands = useMemo(() => {
    if (!brandSearch.trim()) return availableBrands;
    const q = brandSearch.toLowerCase().trim();
    return availableBrands.filter((b) => b.name.toLowerCase().includes(q));
  }, [availableBrands, brandSearch]);

  const handleApplyPrice = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const minVal = minInput.trim() !== "" ? Number(minInput) : undefined;
    const maxVal = maxInput.trim() !== "" ? Number(maxInput) : undefined;
    onPriceChange(minVal, maxVal);
  };

  const handlePricePreset = (min?: number, max?: number) => {
    setMinInput(min !== undefined ? String(min) : "");
    setMaxInput(max !== undefined ? String(max) : "");
    onPriceChange(min, max);
  };

  const pricePresets = [
    { label: "Under Rs. 5,000", min: undefined, max: 5000 },
    { label: "Rs. 5,000 – 20,000", min: 5000, max: 20000 },
    { label: "Rs. 20,000 – 60,000", min: 20000, max: 60000 },
    { label: "Rs. 60,000 – 120,000", min: 60000, max: 120000 },
    { label: "Over Rs. 120,000", min: 120000, max: undefined },
  ];

  const filterContent = (
    <div className="space-y-6">
      {/* 1. Category & Technical Services */}
      <div className="border-b border-white/[0.08] pb-5">
        <button
          type="button"
          onClick={() => toggleSection("categories")}
          className="flex w-full items-center justify-between py-1 text-left"
        >
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-400">
            <Tag className="h-3.5 w-3.5" />
            Categories &amp; Services
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-slate-400 transition-transform duration-200",
              openSections.categories && "rotate-180 text-white",
            )}
          />
        </button>

        {openSections.categories && (
          <div className="mt-3 space-y-1">
            <button
              type="button"
              onClick={() => onCategoryChange("All")}
              className={cn(
                "flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",
                filters.category === "All"
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-slate-300 hover:bg-white/[0.05] hover:text-white",
              )}
            >
              <span>All Departments</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px]",
                  filters.category === "All"
                    ? "bg-white/20 text-white"
                    : "text-slate-400",
                )}
              >
                {Object.values(categoryCounts).reduce((a, b) => a + b, 0)}
              </span>
            </button>

            {categories.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const isSelected = filters.category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onCategoryChange(cat)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",
                    isSelected
                      ? "bg-blue-600 text-white font-semibold"
                      : "text-slate-300 hover:bg-white/[0.05] hover:text-white",
                  )}
                >
                  <span className="truncate">{cat}</span>
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 text-[10px]",
                      isSelected ? "bg-white/20 text-white" : "text-slate-400",
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 2. Price Range */}
      <div className="border-b border-white/[0.08] pb-5">
        <button
          type="button"
          onClick={() => toggleSection("price")}
          className="flex w-full items-center justify-between py-1 text-left"
        >
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-400">
            <DollarSign className="h-3.5 w-3.5" />
            Price Range
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-slate-400 transition-transform duration-200",
              openSections.price && "rotate-180 text-white",
            )}
          />
        </button>

        {openSections.price && (
          <div className="mt-3 space-y-3">
            {/* Quick Price Presets */}
            <div className="flex flex-wrap gap-1.5">
              {pricePresets.map((preset) => {
                const isActive =
                  filters.minPrice === preset.min &&
                  filters.maxPrice === preset.max;
                return (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => handlePricePreset(preset.min, preset.max)}
                    className={cn(
                      "rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-colors",
                      isActive
                        ? "border-blue-500 bg-blue-600/30 text-white font-semibold"
                        : "border-white/10 bg-[#161c2c] text-slate-300 hover:border-white/20 hover:text-white",
                    )}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>

            {/* Custom Min / Max Inputs */}
            <form onSubmit={handleApplyPrice} className="space-y-2 pt-1">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <label htmlFor="min-price-input" className="block text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                    Min Price (Rs.)
                  </label>
                  <input
                    id="min-price-input"
                    type="number"
                    min={0}
                    placeholder={String(priceBounds.min)}
                    value={minInput}
                    onChange={(e) => setMinInput(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-[#141824] px-2.5 py-1.5 text-base sm:text-xs text-white placeholder-slate-400 outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="max-price-input" className="block text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                    Max Price (Rs.)
                  </label>
                  <input
                    id="max-price-input"
                    type="number"
                    min={0}
                    placeholder={String(priceBounds.max)}
                    value={maxInput}
                    onChange={(e) => setMaxInput(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-[#141824] px-2.5 py-1.5 text-base sm:text-xs text-white placeholder-slate-400 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-blue-600 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 active:scale-98 transition-colors"
                >
                  Apply Price
                </button>
                {(filters.minPrice !== undefined || filters.maxPrice !== undefined) && (
                  <button
                    type="button"
                    onClick={() => handlePricePreset(undefined, undefined)}
                    className="rounded-lg border border-white/10 bg-[#161c2c] px-2.5 py-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                    title="Reset price"
                  >
                    Reset
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>

      {/* 3. Brands Selection */}
      <div className="border-b border-white/[0.08] pb-5">
        <button
          type="button"
          onClick={() => toggleSection("brands")}
          className="flex w-full items-center justify-between py-1 text-left"
        >
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-400">
            <Sparkles className="h-3.5 w-3.5" />
            Brands {filters.brands.length > 0 && `(${filters.brands.length})`}
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-slate-400 transition-transform duration-200",
              openSections.brands && "rotate-180 text-white",
            )}
          />
        </button>

        {openSections.brands && (
          <div className="mt-3 space-y-2.5">
            {/* Brand Search */}
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                value={brandSearch}
                onChange={(e) => setBrandSearch(e.target.value)}
                placeholder="Filter brands..."
                className="w-full rounded-lg border border-white/10 bg-[#141824] pl-8 pr-2.5 py-1.5 text-base sm:text-xs text-white placeholder-slate-400 outline-none focus:border-blue-500"
              />
              {brandSearch && (
                <button
                  type="button"
                  onClick={() => setBrandSearch("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>

            {/* Brand List */}
            <div className="max-h-52 overflow-y-auto pr-1 space-y-1 custom-scrollbar">
              {filteredBrands.length === 0 ? (
                <p className="py-2 text-center text-xs text-slate-400">
                  No brands matching "{brandSearch}"
                </p>
              ) : (
                filteredBrands.map((b) => {
                  const isChecked = filters.brands.includes(b.name);
                  return (
                    <label
                      key={b.name}
                      onClick={() => onBrandToggle(b.name)}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs cursor-pointer select-none transition-colors",
                        isChecked
                          ? "bg-blue-600/15 text-white"
                          : "text-slate-300 hover:bg-white/[0.04] hover:text-white",
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={cn(
                            "grid h-4 w-4 place-items-center rounded border transition-colors",
                            isChecked
                              ? "border-blue-500 bg-blue-600 text-white"
                              : "border-white/20 bg-[#141824]",
                          )}
                        >
                          {isChecked && <Check className="h-3 w-3" strokeWidth={3} />}
                        </div>
                        <span className="font-medium">{b.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">({b.count})</span>
                    </label>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>

      {/* 4. Availability & Services Guarantee */}
      <div className="pb-2">
        <button
          type="button"
          onClick={() => toggleSection("services")}
          className="flex w-full items-center justify-between py-1 text-left"
        >
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            Availability &amp; Service
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-slate-400 transition-transform duration-200",
              openSections.services && "rotate-180 text-white",
            )}
          />
        </button>

        {openSections.services && (
          <div className="mt-3 space-y-2">
            {/* In Stock Toggle */}
            <label className="flex items-center justify-between rounded-xl border border-white/10 bg-[#141824] p-2.5 cursor-pointer select-none hover:border-white/20 transition-colors">
              <span className="text-xs font-medium text-slate-200">
                In Stock Items Only
              </span>
              <input
                type="checkbox"
                checked={filters.inStockOnly}
                onChange={(e) => onInStockToggle(e.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-[#0d101a] text-blue-600 focus:ring-0"
              />
            </label>

            {/* Official Warranty Toggle */}
            <label className="flex items-center justify-between rounded-xl border border-white/10 bg-[#141824] p-2.5 cursor-pointer select-none hover:border-white/20 transition-colors">
              <span className="text-xs font-medium text-slate-200">
                12+ Months Warranty
              </span>
              <input
                type="checkbox"
                checked={filters.warrantyOnly}
                onChange={(e) => onWarrantyToggle(e.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-[#0d101a] text-blue-600 focus:ring-0"
              />
            </label>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* DESKTOP SIDEBAR FILTER */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-24 rounded-2xl border border-white/[0.08] bg-[#101422] p-5 shadow-xl backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-blue-400" />
              <h2 className="text-sm font-bold text-white">Filters</h2>
              {activeFiltersCount > 0 && (
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                  {activeFiltersCount}
                </span>
              )}
            </div>

            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={onClearAll}
                className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
              >
                <RotateCcw className="h-3 w-3" />
                Reset
              </button>
            )}
          </div>

          <div className="mt-4">{filterContent}</div>
        </div>
      </aside>

      {/* MOBILE SLIDE-OVER DRAWER */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseMobile}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-in Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Product filters"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="absolute inset-y-0 left-0 flex w-full max-w-sm flex-col bg-[#0f131f] border-r border-white/10 shadow-2xl z-10"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-white/10 p-4">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 text-blue-400" aria-hidden="true" />
                  <h2 className="text-base font-bold text-white">Filters</h2>
                  {activeFiltersCount > 0 && (
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                      {activeFiltersCount}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {activeFiltersCount > 0 && (
                    <button
                      type="button"
                      onClick={onClearAll}
                      className="text-xs font-semibold text-rose-400 hover:text-rose-300 mr-2 p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg"
                    >
                      Reset
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={onCloseMobile}
                    aria-label="Close filters dialog"
                    className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.08] text-slate-300 hover:text-white active:bg-white/[0.15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Drawer Scrollable Body */}
              <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                {filterContent}
              </div>

              {/* Drawer Sticky Footer */}
              <div className="border-t border-white/10 bg-[#0c0f18] p-4">
                <button
                  type="button"
                  onClick={onCloseMobile}
                  className="w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/30 active:scale-98 transition-colors"
                >
                  Show {totalFilteredCount} {totalFilteredCount === 1 ? "Product" : "Products"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
