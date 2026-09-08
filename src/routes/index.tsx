import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { products, categories } from "@/data/products";
import { services } from "@/data/services";
import { branches } from "@/data/branches";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductGrid } from "@/components/ProductGrid";
import { RepairCard } from "@/components/RepairCard";
import { BranchCard } from "@/components/BranchCard";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Reveal } from "@/components/Reveal";

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

  const homeCategories = ["All", ...categories.slice(0, 5)];

  const displayedProducts = activeCategory === "All"
    ? products.slice(0, 8)
    : products.filter((p) => p.category === activeCategory).slice(0, 8);

  return (
    <>
      <Hero />
      <TrustBar />

      {/* Modern Department Category Showcase - 2 per row, text over image */}
      <CategoryShowcase />

      {/* Interactive Products Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <span className="glow-orb top-[-10%] left-[-5%] h-80 w-80 bg-blue-600/10" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <SectionHeading
              eyebrow="Featured Range"
              title="Explore Trending Products"
              subtitle="Handpicked flagship phones, 4K CCTV cameras, fast GaN chargers, heavy-duty cables, and repair tools."
            />

            {/* Interactive Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {homeCategories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`relative rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 outline-none ${
                      isActive
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
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12">
            <ProductGrid products={displayedProducts} />
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/products"
              search={activeCategory !== "All" ? { category: activeCategory } : undefined}
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 active:scale-[0.98]"
            >
              <span>View all {activeCategory !== "All" ? activeCategory : "products"}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              to="/categories"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-[#121624] hover:bg-[#181d30] px-6 text-sm font-semibold text-slate-200 transition-all duration-200"
            >
              <span>Browse all categories</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="repairs" className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24">
        <span className="glow-orb top-[-15%] right-[-5%] h-80 w-80 bg-violet/20" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Repairs"
            title="Professional Repair Services"
            subtitle="From cracked screens to software trouble, our technicians get your devices working again."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 80}>
                <RepairCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Branches"
            title="Visit Our Branches"
            subtitle="Two locations where you can see products in person and talk to our team."
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

      <WhyChooseUs />
      <AboutSection />
      <ContactSection />
    </>
  );
}
