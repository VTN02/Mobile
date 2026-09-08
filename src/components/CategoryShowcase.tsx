import { Link } from "@tanstack/react-router";
import { ArrowRight, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { categories, products, formatPrice, type Category } from "@/data/products";
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

const categoryMeta: Record<Category, { tagline: string; image: string; brands: string }> = {
  "CCTV & Cameras": {
    tagline: "4K Dome & WiFi PTZ Security",
    image: cctvImg,
    brands: "Hikvision • Imou • GoPro",
  },
  "Chargers & Cables": {
    tagline: "65W GaN Fast & Braided Cords",
    image: chargersImg,
    brands: "Anker • Baseus • Apple",
  },
  "Repair Tools & Parts": {
    tagline: "Precision Toolkits & Multimeters",
    image: repairImg,
    brands: "Pro-Fix • Fluke • Quick",
  },
  "Mobile Phones": {
    tagline: "Flagship 5G & AMOLED Displays",
    image: phonesImg,
    brands: "Apple • Samsung • Xiaomi",
  },
  "Electronics": {
    tagline: "Tablets, Peripherals & Desk Tech",
    image: electronicsImg,
    brands: "Samsung • Logitech",
  },
  "Accessories": {
    tagline: "Shockproof Protection & Mounts",
    image: accessoriesImg,
    brands: "Spigen • Baseus",
  },
  "Audio": {
    tagline: "ANC Earbuds & Bluetooth Audio",
    image: audioImg,
    brands: "Sony • JBL • Soundcore",
  },
  "Smart Watches": {
    tagline: "Fitness Health & Calling Watches",
    image: watchImg,
    brands: "Apple • Samsung • Amazfit",
  },
};

export function CategoryShowcase() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-white/[0.06] bg-[#0c0f18]/60">
      {/* Subtle glow background */}
      <span className="glow-orb top-1/2 left-[-10%] h-80 w-80 bg-blue-600/15" aria-hidden="true" />
      <span className="glow-orb top-[-10%] right-[-5%] h-72 w-72 bg-blue-500/10" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading with View All link */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Departments"
            title="Shop By Category"
          />
          <Link
            to="/categories"
            className="group inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors shrink-0 pb-1"
          >
            <span>View all categories</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        {/* Categories Grid - 2 per row, image-only with overlay text */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categories.map((category, i) => {
            const meta = categoryMeta[category];
            const catProducts = products.filter((p) => p.category === category);
            const minPrice = catProducts.length > 0 
              ? Math.min(...catProducts.map((p) => p.price)) 
              : 0;
            const currency = catProducts[0]?.currency ?? "Rs.";

            return (
              <Reveal key={category} delay={(i % 2) * 80}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="h-full"
                >
                  <Link
                    to="/products"
                    search={{ category }}
                    className="group relative block aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d101a] shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/15"
                  >
                    {/* Full-bleed Category Image */}
                    <img
                      src={meta.image}
                      alt={`${category} department`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />

                    {/* Gradient Overlay for Crisp Text Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090c15]/95 via-[#090c15]/45 to-black/25 transition-opacity duration-300 group-hover:via-[#090c15]/55" />

                    {/* Top Badges */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2 z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs font-semibold text-slate-200 backdrop-blur-md shadow-sm">
                        <Layers className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                        {catProducts.length} items
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
                        {meta.brands}
                      </p>
                      <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md group-hover:text-blue-300 transition-colors">
                        {category}
                      </h3>
                    </div>

                    {/* Top Sapphire Hover Highlight */}
                    <div 
                      className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20" 
                      aria-hidden="true" 
                    />
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
