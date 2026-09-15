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

export function CategoryShowcase() {
  const col1 = [showcaseList[0], showcaseList[2], showcaseList[4], showcaseList[6]];
  const col2 = [showcaseList[1], showcaseList[3], showcaseList[5], showcaseList[7]];

  // Duplicate items for continuous smooth infinite scrolling
  const col1Items = [...col1, ...col1];
  const col2Items = [...col2, ...col2];

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

        {/* 1. MOBILE ONLY: 2 Columns Auto-Running in Opposite Directions */}
        <div className="mt-8 block sm:hidden relative h-[480px] overflow-hidden">
          {/* Top & Bottom Smooth Gradient Masks */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0b0e14] via-[#0b0e14]/80 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/80 to-transparent z-20" />

          <div className="grid grid-cols-2 gap-3 h-full">
            {/* Column 1 (Auto-running Upwards) */}
            <div className="overflow-hidden">
              <div className="flex flex-col gap-3 animate-marquee-up">
                {col1Items.map((item, idx) => {
                  const count = products.filter((p) => p.category === item.category).length;
                  return (
                    <Link
                      key={`col1-${item.category}-${idx}`}
                      to="/products"
                      search={{ category: item.category }}
                      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#0d101a] shadow-md transition-all active:scale-95"
                    >
                      <img
                        src={item.image}
                        alt={`${item.title} photo`}
                        loading="lazy"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080b15]/95 via-[#080b15]/40 to-black/20" />
                      <div className="absolute top-2 left-2 z-10">
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/60 px-1.5 py-0.5 text-[9px] font-semibold text-white backdrop-blur-md">
                          <Layers className="h-2.5 w-2.5 text-blue-400" />
                          {count}
                        </span>
                      </div>
                      <div className="absolute bottom-0 inset-x-0 p-2.5 z-10">
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
            </div>

            {/* Column 2 (Auto-running Downwards) */}
            <div className="overflow-hidden">
              <div className="flex flex-col gap-3 animate-marquee-down">
                {col2Items.map((item, idx) => {
                  const count = products.filter((p) => p.category === item.category).length;
                  return (
                    <Link
                      key={`col2-${item.category}-${idx}`}
                      to="/products"
                      search={{ category: item.category }}
                      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#0d101a] shadow-md transition-all active:scale-95"
                    >
                      <img
                        src={item.image}
                        alt={`${item.title} photo`}
                        loading="lazy"
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080b15]/95 via-[#080b15]/40 to-black/20" />
                      <div className="absolute top-2 left-2 z-10">
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/60 px-1.5 py-0.5 text-[9px] font-semibold text-white backdrop-blur-md">
                          <Layers className="h-2.5 w-2.5 text-blue-400" />
                          {count}
                        </span>
                      </div>
                      <div className="absolute bottom-0 inset-x-0 p-2.5 z-10">
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
            </div>
          </div>
        </div>

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
