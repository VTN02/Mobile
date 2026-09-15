import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { branches } from "@/data/branches";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductGrid } from "@/components/ProductGrid";
import { RepairCard } from "@/components/RepairCard";
import { ServicesDropdown } from "@/components/ServicesDropdown";
import { RepairCTA } from "@/components/RepairCTA";
import { BranchCard } from "@/components/BranchCard";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { WhatsAppCallout } from "@/components/WhatsAppCallout";
import { Reveal } from "@/components/Reveal";
import phonesImg from "@/assets/cat-phones.jpg";
import audioImg from "@/assets/cat-audio.jpg";
import watchImg from "@/assets/cat-watch.jpg";
import accessoriesImg from "@/assets/cat-accessories.jpg";
import electronicsImg from "@/assets/cat-electronics.jpg";
import cctvImg from "@/assets/cat-cctv.jpg";
import chargersImg from "@/assets/cat-chargers.jpg";
import repairImg from "@/assets/cat-repair.jpg";

const categoryThumbnails: Record<string, string> = {
  "Mobile Phones": phonesImg,
  "CCTV & Cameras": cctvImg,
  "Chargers & Cables": chargersImg,
  "Repair Tools & Parts": repairImg,
  "Electronics": electronicsImg,
  "Accessories": accessoriesImg,
  "Audio": audioImg,
  "Smart Watches": watchImg,
};

const title = `${site.name} — Mobiles, CCTV, Chargers, Electronics & Repairs`;
const description =
  "Shop smartphones, 4K CCTV security cameras, high-speed chargers, cables, repair tools, and certified repair services across two convenient branches.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const homeCategories = [
    "All",
    "Mobile Phones",
    "CCTV & Cameras",
    "Chargers & Cables",
    "Audio",
    "Smart Watches",
    "Repair Tools & Parts",
    "Electronics",
  ];

  const displayedProducts =
    activeCategory === "All"
      ? products.slice(0, 8)
      : products.filter((p) => p.category === activeCategory).slice(0, 8);

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION (Modern Two-Column Layout) */}
      <Hero />

      {/* 2. TRUST / VALUE STRIP */}
      <TrustBar />

      {/* 3. CATEGORY SHOWCASE (6 Core Categories Visual Grid) */}
      <CategoryShowcase />

      {/* 4. FEATURED PRODUCTS SECTION */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-b border-white/[0.06]">
        <span className="glow-orb top-[-10%] left-[-5%] h-80 w-80 bg-blue-600/10" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <SectionHeading
              eyebrow="Featured Range"
              title="Trending Technology &amp; Essentials"
              subtitle="Handpicked flagship phones, 4K CCTV cameras, fast GaN chargers, heavy-duty cables, and repair tools."
            />

            {/* Interactive Category Filter Pills with Photographic Images */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {homeCategories.map((cat) => {
                const isActive = activeCategory === cat;
                const thumb = categoryThumbnails[cat];
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`relative inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 outline-none ${isActive
                        ? "text-white shadow-md shadow-blue-600/30"
                        : "border border-white/10 bg-[#121624] text-slate-300 hover:border-white/20 hover:text-white"
                      }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeHomeCategoryPill"
                        className="absolute inset-0 rounded-full bg-blue-600"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                    {thumb ? (
                      <img
                        src={thumb}
                        alt=""
                        className="relative z-10 h-4 w-4 rounded-full object-cover ring-1 ring-white/30"
                      />
                    ) : (
                      <Sparkles className="relative z-10 h-3.5 w-3.5 text-blue-400" />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Compact Product Grid */}
          <div className="mt-12">
            <ProductGrid products={displayedProducts} />
          </div>

          {/* View All Catalogue CTA */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/products"
              search={activeCategory !== "All" ? { category: activeCategory } : undefined}
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 active:scale-[0.98]"
            >
              <span>View all {activeCategory !== "All" ? activeCategory : "products"}</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/categories"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-[#121624] hover:bg-[#181d30] px-6 text-sm font-semibold text-slate-200 transition-all duration-200"
            >
              <span>Browse all categories</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PROFESSIONAL REPAIR SERVICES SECTION + REPAIR CALLOUT */}
      <section id="repairs" className="relative overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-white/[0.06] bg-[#0c0f18]/60">
        <span className="glow-orb top-[-15%] right-[-5%] h-80 w-80 bg-violet/20" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Certified Repair Services"
            title="Fast, Reliable &amp; Professional Device Repairs"
            subtitle="Explore our specialized repair and installation services. Click any service to view details, highlights, and WhatsApp quotation."
          />

          {/* Animated Services Dropdown List */}
          <div className="mt-12">
            <ServicesDropdown />
          </div>

          {/* Dedicated Section 16 Repair Callout Box */}
          <div className="mt-12">
            <RepairCTA />
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US / VALUE PROPOSITION */}
      <WhyChooseUs />

      {/* 7. SHOWROOM BRANCHES SECTION */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-b border-white/[0.06]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Showrooms"
            title="Visit Our Branches"
            subtitle="Two convenient locations where you can test products in person, consult with specialists, or drop off devices for repair."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {branches.map((branch, i) => (
              <Reveal key={branch.id} delay={i * 100}>
                <BranchCard branch={branch} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DEDICATED WHATSAPP CONVERSION BANNER */}
      <WhatsAppCallout />
    </div>
  );
}
