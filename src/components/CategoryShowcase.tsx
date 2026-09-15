import { useRef, useEffect, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { products, type Category } from "@/data/products";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import phonesImg from "@/assets/cat-phones.jpg";
import audioImg from "@/assets/cat-audio.jpg";
import watchImg from "@/assets/cat-watch.jpg";
import accessoriesImg from "@/assets/cat-accessories.jpg";
import electronicsImg from "@/assets/cat-electronics.jpg";
import cctvImg from "@/assets/cat-cctv.jpg";
import chargersImg from "@/assets/cat-chargers.jpg";
import repairImg from "@/assets/cat-repair.jpg";

interface ShowcaseCategory {
  title: string;
  category: Category;
  tagline: string;
  image: string;
  popularBrands: string;
}

const showcaseList: ShowcaseCategory[] = [
  {
    title: "Mobile Phones",
    category: "Mobile Phones",
    tagline: "Flagship 5G & Certified Devices",
    image: phonesImg,
    popularBrands: "Apple • Samsung • Xiaomi",
  },
  {
    title: "CCTV & Security",
    category: "CCTV & Cameras",
    tagline: "4K Dome, Outdoor & PTZ Cameras",
    image: cctvImg,
    popularBrands: "Hikvision • Imou • CP Plus",
  },
  {
    title: "Chargers & Cables",
    category: "Chargers & Cables",
    tagline: "65W GaN Fast & Braided Cords",
    image: chargersImg,
    popularBrands: "Anker • Baseus • Apple",
  },
  {
    title: "Audio & Sound",
    category: "Audio",
    tagline: "ANC Earbuds & Bluetooth Audio",
    image: audioImg,
    popularBrands: "Sony • JBL • Apple",
  },
  {
    title: "Smart Watches",
    category: "Smart Watches",
    tagline: "Fitness Health & Calling Watches",
    image: watchImg,
    popularBrands: "Apple • Samsung • Amazfit",
  },
  {
    title: "Repair Tools & Parts",
    category: "Repair Tools & Parts",
    tagline: "Precision Toolkits & Multimeters",
    image: repairImg,
    popularBrands: "Pro-Fix • Fluke • Quick",
  },
  {
    title: "Electronics & Tablets",
    category: "Electronics",
    tagline: "Tablets, Peripherals & Desk Tech",
    image: electronicsImg,
    popularBrands: "Samsung • Logitech • Xiaomi",
  },
  {
    title: "Protection & Accessories",
    category: "Accessories",
    tagline: "Shockproof Cases, Mounts & Power",
    image: accessoriesImg,
    popularBrands: "Spigen • Baseus • Anker",
  },
];

function SwipeableMarqueeRow({
  items,
  direction = "left",
  speed = 0.55,
}: {
  items: ShowcaseCategory[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);
  const touchTimeout = useRef<number | null>(null);

  // Repeat items for seamless continuous looping and smooth swiping
  const loopedItems = useMemo(
    () => [...items, ...items, ...items, ...items],
    [items],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Set initial scroll position for right-direction scroll
    if (direction === "right" && el.scrollLeft === 0) {
      el.scrollLeft = el.scrollWidth / 2;
    }

    let animationFrameId: number;

    const step = () => {
      if (!isInteracting.current && el) {
        if (direction === "left") {
          el.scrollLeft += speed;
          if (el.scrollLeft >= el.scrollWidth / 2) {
            el.scrollLeft -= el.scrollWidth / 4;
          }
        } else {
          el.scrollLeft -= speed;
          if (el.scrollLeft <= 0) {
            el.scrollLeft += el.scrollWidth / 4;
          }
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
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className="flex gap-3 overflow-x-auto py-1 scrollbar-none select-none touch-pan-x [-webkit-overflow-scrolling:touch]"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {loopedItems.map((item, idx) => {
        const count = products.filter((p) => p.category === item.category).length;
        return (
          <Link
            key={`${item.category}-${idx}`}
            to="/products"
            search={{ category: item.category }}
            className="group relative block w-[200px] aspect-[16/10] shrink-0 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d101a] shadow-md transition-transform active:scale-95 cursor-pointer"
          >
            <img
              src={item.image}
              alt={`${item.title} photo`}
              loading="lazy"
              width={320}
              height={200}
              className="h-full w-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080b15]/95 via-[#080b15]/40 to-black/20 pointer-events-none" />
            <div className="absolute top-2 left-2 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/60 px-1.5 py-0.5 text-[9px] font-semibold text-white backdrop-blur-md">
                <Layers className="h-2.5 w-2.5 text-blue-400" />
                {count}
              </span>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-2.5 z-10 pointer-events-none">
              <p className="text-[8px] font-bold tracking-wider uppercase text-blue-400 truncate">
                {item.popularBrands}
              </p>
              <h4 className="text-xs font-bold text-white truncate">
                {item.title}
              </h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function CategoryShowcase() {
  const row1 = [showcaseList[0], showcaseList[2], showcaseList[4], showcaseList[6]];
  const row2 = [showcaseList[1], showcaseList[3], showcaseList[5], showcaseList[7]];

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 overflow-hidden border-b border-white/[0.06] bg-[#0c0f18]/60">
      {/* Subtle background glow */}
      <span className="glow-orb top-1/2 left-[-10%] h-80 w-80 bg-blue-600/15" aria-hidden="true" />
      <span className="glow-orb top-[-10%] right-[-5%] h-72 w-72 bg-blue-500/10" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Departments"
            title="Everything You Need in One Place"
            subtitle="Explore high-demand tech gear, surveillance systems, and everyday mobile essentials."
          />
          <Link
            to="/categories"
            className="group inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors shrink-0 pb-1"
          >
            <span>All Departments</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* 1. MOBILE ONLY: Full-Screen Width (Edge-to-Edge) 2 Swipeable & Auto-Running Horizontal Rows */}
      <div className="mt-8 block sm:hidden relative w-full overflow-hidden space-y-3 py-1">
        {/* Left & Right Smooth Edge Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#0b0e14] via-[#0b0e14]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0b0e14] via-[#0b0e14]/80 to-transparent z-20" />

        {/* Row 1 (Auto-running left + Swipeable) */}
        <SwipeableMarqueeRow items={row1} direction="left" speed={0.6} />

        {/* Row 2 (Auto-running right + Swipeable) */}
        <SwipeableMarqueeRow items={row2} direction="right" speed={0.6} />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2. TABLET & DESKTOP: Full Category Grid */}
        <div className="mt-12 hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {showcaseList.map((item, i) => {
            const count = products.filter((p) => p.category === item.category).length;

            return (
              <Reveal key={item.title} delay={(i % 4) * 70}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="h-full"
                >
                  <Link
                    to="/products"
                    search={{ category: item.category }}
                    className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0d101a] shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/15"
                  >
                    {/* Full-bleed Photo Image */}
                    <img
                      src={item.image}
                      alt={`${item.title} category photo`}
                      loading="lazy"
                      width={600}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />

                    {/* Gradient Overlay for high image vibrancy */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080b15]/95 via-[#080b15]/25 to-black/10 transition-opacity duration-300 group-hover:via-[#080b15]/35" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2 z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/65 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md shadow-sm">
                        <Layers className="h-3 w-3 text-blue-400" aria-hidden="true" />
                        {count} items
                      </span>
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-4.5 z-10 bg-gradient-to-t from-[#080b15] via-[#080b15]/80 to-transparent pt-6">
                      <p className="text-[10px] font-bold tracking-wider uppercase text-blue-400">
                        {item.popularBrands}
                      </p>
                      <h3 className="mt-1 text-base sm:text-lg font-bold text-white transition-colors duration-200 group-hover:text-blue-400">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-slate-300 line-clamp-1">
                        {item.tagline}
                      </p>

                      <div className="mt-2.5 flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                        <span>Explore</span>
                        <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
