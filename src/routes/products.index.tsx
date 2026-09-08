import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  RotateCcw, 
  ArrowUpDown, 
  Check 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";
import { products, categories, type Product } from "@/data/products";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductGrid } from "@/components/ProductGrid";

const title = `Products — Mobiles, CCTV, Chargers, Cables & Electronics | ${site.name}`;
const description =
  "Browse mobile phones, CCTV security cameras, chargers, cables, repair tools, audio, and electronics. Filter by category and inquire instantly on WhatsApp.";

export type ProductSearchParams = {
  category?: string;
  q?: string;
  inStock?: boolean;
  sort?: "featured" | "price-asc" | "price-desc" | "name-asc";
};

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): ProductSearchParams => {
    const params: ProductSearchParams = {};
    if (typeof search["category"] === "string" && search["category"].trim() !== "") {
      params.category = search["category"];
    }
    if (typeof search["q"] === "string" && search["q"].trim() !== "") {
      params.q = search["q"];
    }
    if (typeof search["inStock"] === "boolean") {
      params.inStock = search["inStock"];
    } else if (search["inStock"] === "true") {
      params.inStock = true;
    }
    if (
      typeof search["sort"] === "string" &&
      ["featured", "price-asc", "price-desc", "name-asc"].includes(search["sort"])
    ) {
      params.sort = search["sort"] as ProductSearchParams["sort"];
    }
    return params;
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();

  const category = search.category ?? "All";
  const searchQuery = search.q ?? "";
  const inStockOnly = search.inStock ?? false;
  const sortOption = search.sort ?? "featured";

  // Toggle states for expandable controls
  const [isSearchOpen, setIsSearchOpen] = useState(Boolean(searchQuery));
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [localQuery, setLocalQuery] = useState(searchQuery);

  const updateSearch = (newParams: Partial<ProductSearchParams>) => {
    navigate({
      to: ".",
      search: (prev) => {
        const merged: ProductSearchParams = { ...prev, ...newParams };
        if (merged.category === "All") delete merged.category;
        if (!merged.q) delete merged.q;
        if (!merged.inStock) delete merged.inStock;
        if (merged.sort === "featured") delete merged.sort;
        return merged;
      },
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearch({ q: localQuery.trim() ? localQuery.trim() : undefined });
  };

  const clearAllFilters = () => {
    setLocalQuery("");
    navigate({
      to: ".",
      search: {},
    });
  };

  // Filter and sort products
  const filtered = useMemo(() => {
    let result = products;

    // Filter by Category
    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.specs?.some(
            (s) =>
              s.label.toLowerCase().includes(q) ||
              s.value.toLowerCase().includes(q),
          ),
      );
    }

    // Filter by In-Stock
    if (inStockOnly) {
      result = result.filter((p) => p.available);
    }

    // Sort Products
    const sorted = [...result];
    switch (sortOption) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        break;
    }

    return sorted;
  }, [category, searchQuery, inStockOnly, sortOption]);

  const activeFiltersCount =
    (category !== "All" ? 1 : 0) +
    (inStockOnly ? 1 : 0) +
    (sortOption !== "featured" ? 1 : 0);

  const hasActiveFilters = activeFiltersCount > 0 || Boolean(searchQuery);

  return (
    <div className="relative overflow-hidden py-12 sm:py-16 lg:py-20 min-h-screen">
      <span className="glow-orb top-[-10%] left-[-8%] h-80 w-80 bg-blue-600/15" aria-hidden="true" />
      <span className="glow-orb bottom-[-10%] right-[-5%] h-80 w-80 bg-blue-500/10" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          as="h1"
          eyebrow="Our Catalog"
          title="Explore Our Products"
        />

        {/* Action Controls Bar with Search Icon & Filter Icon */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.08] bg-[#121624] p-3 sm:p-4 shadow-md backdrop-blur-xl">
          {/* Results count & active query preview */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-xs sm:text-sm font-semibold text-slate-300">
              Showing <span className="text-white font-bold">{filtered.length}</span> {filtered.length === 1 ? "product" : "products"}
            </span>
            {category !== "All" && (
              <span className="inline-flex items-center gap-1 rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-medium text-blue-400">
                {category}
                <button
                  type="button"
                  onClick={() => updateSearch({ category: undefined })}
                  className="hover:text-white"
                  title="Remove category filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-slate-200">
                "{searchQuery}"
                <button
                  type="button"
                  onClick={() => {
                    setLocalQuery("");
                    updateSearch({ q: undefined });
                  }}
                  className="hover:text-white"
                  title="Remove search"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
          </div>

          {/* Action Buttons: Search Icon & Filter Icon */}
          <div className="flex items-center gap-2">
            {/* Search Icon Toggle Button */}
            <button
              type="button"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              aria-label="Toggle search box"
              className={cn(
                "inline-flex h-10 items-center gap-2 rounded-xl border px-3.5 text-xs font-semibold transition-all duration-200 active:scale-95 shadow-sm",
                isSearchOpen || searchQuery
                  ? "border-blue-500/50 bg-blue-600/20 text-blue-300"
                  : "border-white/10 bg-[#161c2c] text-slate-300 hover:border-blue-500/40 hover:text-white",
              )}
            >
              <Search className="h-4 w-4 shrink-0 text-blue-400" />
              <span className="hidden sm:inline">Search</span>
            </button>

            {/* Filter Icon Toggle Button */}
            <button
              type="button"
              onClick={() => setIsFilterOpen((prev) => !prev)}
              aria-label="Toggle filter options"
              className={cn(
                "inline-flex h-10 items-center gap-2 rounded-xl border px-3.5 text-xs font-semibold transition-all duration-200 active:scale-95 shadow-sm",
                isFilterOpen || activeFiltersCount > 0
                  ? "border-blue-500/50 bg-blue-600/20 text-blue-300"
                  : "border-white/10 bg-[#161c2c] text-slate-300 hover:border-blue-500/40 hover:text-white",
              )}
            >
              <SlidersHorizontal className="h-4 w-4 shrink-0 text-blue-400" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="grid h-4 w-4 place-items-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Reset All Filters Button */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="grid h-10 w-10 place-items-center rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors"
                title="Reset all filters"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Expandable Search Box (Opens when Search Icon is Clicked) */}
        {isSearchOpen && (
          <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="flex items-center rounded-2xl border border-blue-500/50 bg-[#121624] p-1.5 shadow-xl backdrop-blur-xl">
                <Search className="ml-3.5 h-5 w-5 shrink-0 text-blue-400" aria-hidden="true" />
                <input
                  type="text"
                  autoFocus
                  value={localQuery}
                  onChange={(e) => {
                    setLocalQuery(e.target.value);
                    if (e.target.value === "") {
                      updateSearch({ q: undefined });
                    }
                  }}
                  placeholder="Search CCTV cameras, fast chargers, cables, repair tools, iPhone, Samsung..."
                  className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-slate-400 outline-none"
                />
                {localQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setLocalQuery("");
                      updateSearch({ q: undefined });
                    }}
                    className="mr-2 p-1.5 text-slate-400 hover:text-white"
                    title="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-xl bg-blue-600 px-5 text-xs font-semibold text-white transition-all duration-200 hover:bg-blue-500 active:scale-95 shadow-md shadow-blue-600/30 shrink-0"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Expandable Filter Panel (Opens when Filter Icon is Clicked) */}
        {isFilterOpen && (
          <div className="mt-4 rounded-2xl border border-white/10 bg-[#101422] p-4 sm:p-5 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Category Pills Header */}
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-blue-400 uppercase">
                Categories
              </p>
              <div className="mt-3">
                <CategoryFilter
                  active={category}
                  onChange={(value) => updateSearch({ category: value })}
                />
              </div>
            </div>

            {/* Filter Options: Sort & Stock Toggle */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-4 text-xs">
              {/* In Stock Only Checkbox */}
              <label className="flex items-center gap-2 cursor-pointer select-none rounded-xl border border-white/10 bg-[#161c2c] px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white transition-colors">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => updateSearch({ inStock: e.target.checked || undefined })}
                  className="rounded border-white/20 bg-[#0d101a] text-blue-600 focus:ring-0 focus:ring-offset-0"
                />
                <span>In Stock Only</span>
              </label>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-slate-400 flex items-center gap-1 font-medium">
                  <ArrowUpDown className="h-3.5 w-3.5 text-blue-400" />
                  Sort:
                </span>
                <select
                  value={sortOption}
                  onChange={(e) => updateSearch({ sort: e.target.value as ProductSearchParams["sort"] })}
                  className="rounded-xl border border-white/10 bg-[#161c2c] px-3.5 py-2 text-xs font-semibold text-white outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="mt-8">
          <ProductGrid
            products={filtered}
            emptyMessage={
              searchQuery
                ? `No products matched "${searchQuery}". Try searching for another keyword or check out our complete categories.`
                : "No products found with the selected filters. Try resetting your filters."
            }
          />
        </div>
      </div>
    </div>
  );
}
