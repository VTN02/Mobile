import { useRef, useEffect, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layers, Sparkles, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { categories, products, formatPrice, type Category } from "@/data/products";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { waMessages } from "@/utils/whatsapp";
import phonesImg from "@/assets/cat-phones.jpg";
import audioImg from "@/assets/cat-audio.jpg";
import watchImg from "@/assets/cat-watch.jpg";
import accessoriesImg from "@/assets/cat-accessories.jpg";
import electronicsImg from "@/assets/cat-electronics.jpg";
import cctvImg from "@/assets/cat-cctv.jpg";
import chargersImg from "@/assets/cat-chargers.jpg";
import repairImg from "@/assets/cat-repair.jpg";

type CategoryDetails = {
  name: Category;
  tagline: string;
  image: string;
  featuredTags: string[];
  popularBrands: string[];
};

const categoryMetadata: Record<Category, Omit<CategoryDetails, "name">> = {
  "Mobile Phones": {
    tagline: "Latest Flagship & Premium Smartphones",
    image: phonesImg,
    featuredTags: ["5G Flagships", "AMOLED 120Hz", "Leica / Titanium", "Pro Cameras"],
    popularBrands: ["Apple", "Samsung", "Xiaomi", "Google"],
  },
  "CCTV & Cameras": {
    tagline: "4K Security, Smart Surveillance & Action Cams",
    image: cctvImg,
    featuredTags: ["4K Night Vision", "360° WiFi PTZ", "Smart AI Detect", "DVR Kits"],
    popularBrands: ["Hikvision", "Imou", "GoPro", "CP Plus"],
  },
  "Chargers & Cables": {
    tagline: "100W GaN Fast Chargers & Heavy-Duty Power Cables",
    image: chargersImg,
    featuredTags: ["100W GaN Fast", "100W E-Marker", "Apple 20W PD", "Travel Plugs"],
    popularBrands: ["Anker", "Apple", "Baseus", "UGREEN"],
  },
  "Repair Tools & Parts": {
    tagline: "Precision Toolkits, Diagnostic Meters & Rework Stations",
    image: repairImg,
    featuredTags: ["128-in-1 Toolkits", "Fluke Multimeters", "1000W SMD Station", "Silicone Mats"],
    popularBrands: ["Pro-Fix", "Fluke Pro", "Quick", "Sunshine", "Zhanlida"],
  },
  "Electronics": {
    tagline: "High-Performance Tablets, Peripherals & MagSafe Docks",
    image: electronicsImg,
    featuredTags: ["14\" 2.8K Tablets", "MX Master 3S", "MagSafe 3-in-1", "Productivity"],
    popularBrands: ["Xiaomi", "Logitech", "Belkin"],
  },
  "Accessories": {
    tagline: "MagSafe Armor Cases, 9H Glass, Qi2 Power Banks & Gimbals",
    image: accessoriesImg,
    featuredTags: ["MagSafe Cases", "9H Glass", "Qi2 Power Banks", "DJI Gimbals"],
    popularBrands: ["Spigen", "Anker", "ESR", "DJI"],
  },
  "Audio": {
    tagline: "Hi-Res ANC Headphones, AirPods Pro & Waterproof Speakers",
    image: audioImg,
    featuredTags: ["Industry ANC", "AirPods Pro", "Spatial Audio", "IP67 Waterproof"],
    popularBrands: ["Sony", "Apple", "JBL", "Marshall"],
  },
  "Smart Watches": {
    tagline: "Titanium Sports Watches, Rotating Bezels & GPS",
    image: watchImg,
    featuredTags: ["49mm Titanium", "Rotating Bezel", "Dual-Band GPS", "ECG & Health"],
    popularBrands: ["Apple", "Samsung", "Amazfit"],
  },
};

const title = `Categories — Mobiles, CCTV, Chargers, Cables & Electronics | ${site.name}`;
const description =
  "Explore all electronic categories: smartphones, 4K CCTV surveillance cameras, GaN fast chargers, heavy-duty cables, repair tools, and audio.";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/categories" },
    ],
    links: [{ rel: "canonical", href: "/categories" }],
  }),
  component: CategoriesPage,
});

function MobileCategoriesMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);
  const touchTimeout = useRef<number | null>(null);

  // Quadruple items for infinite looping
  const loopedCategories = useMemo(
    () => [...categories, ...categories, ...categories, ...categories],
    [],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 0.55;

    const step = () => {
      if (!isInteracting.current && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 4;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    const onPointerDown = () => {
      isInteracting.current = true;
      if (touchTimeout.current) clearTimeout(touchTimeout.current);
    };

    const onPointerUp = () => {
      if (touchTimeout.current) clearTimeout(touchTimeout.current);
      touchTimeout.current = window.setTimeout(() => {
        isInteracting.current = false;
      }, 1500);
    };

    el.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerUp, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (touchTimeout.current) clearTimeout(touchTimeout.current);
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <div className="mt-6 -mx-4 w-[calc(100%+2rem)] block sm:hidden relative overflow-hidden py-1">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#0b0e14] via-[#0b0e14]/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0b0e14] via-[#0b0e14]/80 to-transparent z-20" />

      <div
        ref={containerRef}
        className="flex gap-2 overflow-x-auto py-1 scrollbar-none select-none touch-pan-x [-webkit-overflow-scrolling:touch]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {loopedCategories.map((cat, idx) => {
          const catProducts = products.filter((p) => p.category === cat);
          return (
            <motion.div
              key={`mob-cat-page-${cat}-${idx}`}
              whileTap={{ scale: 0.88 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              className="shrink-0"
            >
              <Link
                to="/products"
                search={{ category: cat }}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111422] px-3.5 py-1.5 text-xs font-semibold text-slate-300 transition-colors duration-200 hover:border-blue-500/40 hover:bg-[#181d30] hover:text-white select-none"
              >
                <span className="whitespace-nowrap pointer-events-none">{cat}</span>
                <span className="rounded-full bg-white/[0.08] px-1.5 py-0.5 text-[10px] text-slate-400 group-hover:bg-blue-600 group-hover:text-white pointer-events-none">
                  {catProducts.length}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function CategoriesPage() {
  return (
    <div className="relative overflow-hidden py-14 sm:py-16 lg:py-20 bg-section-sapphire min-h-[calc(100vh-4rem)]">
      <span className="glow-orb top-[-10%] left-1/4 h-96 w-96 bg-blue-600/18" aria-hidden="true" />
      <span className="glow-orb bottom-[-10%] right-[-5%] h-80 w-80 bg-sky-500/12" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Categories" }]} />
        {/* Section Heading */}
        <SectionHeading
          as="h1"
          eyebrow="Product Catalog"
          title="Browse by Category"
        />

        {/* Mobile: Full-Width Auto-Running Single Row */}
        <MobileCategoriesMarquee />

        {/* Desktop & Tablet: Category Quick Pills */}
        <div className="mt-8 hidden sm:flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const catProducts = products.filter((p) => p.category === cat);
            return (
              <Link
                key={cat}
                to="/products"
                search={{ category: cat }}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111422] px-3.5 py-1.5 text-xs font-semibold text-slate-300 transition-all duration-200 hover:border-blue-500/40 hover:bg-[#181d30] hover:text-white"
              >
                <span>{cat}</span>
                <span className="rounded-full bg-white/[0.08] px-1.5 py-0.5 text-[10px] text-slate-400 group-hover:bg-blue-600 group-hover:text-white">
                  {catProducts.length}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Categories Grid - 2 per row, image-only with overlaid text */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categories.map((cat, index) => {
            const meta = categoryMetadata[cat];
            const catProducts = products.filter((p) => p.category === cat);
            const minPrice = catProducts.length > 0
              ? Math.min(...catProducts.map((p) => p.price))
              : 0;
            const currency = catProducts[0]?.currency ?? "Rs.";

            return (
              <Reveal key={cat} delay={(index % 2) * 80}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="h-full"
                >
                  <Link
                    to="/products"
                    search={{ category: cat }}
                    className="group relative block aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d101a] shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/15"
                  >
                    {/* Full-bleed Category Image */}
                    <img
                      src={meta.image}
                      alt={`${cat} collection`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />

                    {/* Gradient Scrim Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090c15]/95 via-[#090c15]/45 to-black/25 transition-opacity duration-300 group-hover:via-[#090c15]/55" />

                    {/* Top Badges */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2 z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs font-semibold text-slate-200 backdrop-blur-md shadow-sm">
                        <Layers className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                        {catProducts.length} {catProducts.length === 1 ? "Item" : "Items"}
                      </span>

                      {minPrice > 0 && (
                        <span className="inline-flex items-center gap-1 rounded-md border border-blue-500/30 bg-black/60 px-2.5 py-1 text-xs font-bold text-blue-300 backdrop-blur-md shadow-sm">
                          From {formatPrice({ price: minPrice, currency })}
                        </span>
                      )}
                    </div>

                    {/* Letters Overlaid Directly Over the Image */}
                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10">
                      <p className="text-[11px] font-bold tracking-[0.18em] text-blue-400 uppercase drop-shadow-sm">
                        {meta.popularBrands.join(" • ")}
                      </p>

                      <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md group-hover:text-blue-300 transition-colors">
                        {cat}
                      </h2>

                      {/* Featured Tags */}
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {meta.featuredTags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/40 px-2 py-0.5 text-[10px] font-medium text-slate-300 backdrop-blur-sm"
                          >
                            <Tag className="h-2.5 w-2.5 text-blue-400/80" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Top Sapphire Hover Highlight */}
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        {/* Repair & Services Banner */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-r from-[#101426] via-[#121935] to-[#101426] p-8 sm:p-12 shadow-xl">
            <span className="glow-orb top-[-20%] right-[-10%] h-64 w-64 bg-blue-500/20" aria-hidden="true" />
            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  Expert In-Store Services
                </div>
                <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                  Need Professional Repair or CCTV Installation?
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Our certified technicians handle smartphone screen repairs, battery diagnostics, CCTV camera installation, and electronics troubleshooting.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <WhatsAppButton
                  message={waMessages.repair()}
                  className="h-11 px-6 text-xs font-semibold shadow-md shadow-emerald-600/20"
                >
                  Book Repair on WhatsApp
                </WhatsAppButton>
                <Link
                  to="/branches"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-[#161c2c] hover:bg-[#1e2538] px-5 text-xs font-semibold text-slate-300 hover:text-white transition-all duration-200"
                >
                  <span>Find a Branch</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
