import { Link } from "@tanstack/react-router";
import { Star, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { formatPrice, type Product } from "@/data/products";

// Helper to calculate realistic discounts for pricing with "OFF"
function getProductDiscount(productId: string) {
  const discountTiers = [10, 15, 18, 20, 25];
  const charCodeSum = productId
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const percent = discountTiers[charCodeSum % discountTiers.length];
  return percent;
}

export function ProductCard({ product }: { product: Product }) {
  const fullName = `${product.brand} ${product.name}`;
  const discountPercent = getProductDiscount(product.id);
  const originalPrice = Math.round(product.price / (1 - discountPercent / 100));

  return (
    <motion.article
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121624] shadow-soft backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]"
    >
      {/* Subtle top sapphire hover highlight */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        aria-hidden="true"
      />

      {/* Whole Card Clickable Link */}
      <Link
        to="/products/$id"
        params={{ id: product.id }}
        className="flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
      >
        {/* 75% Dominant Image Showcase Area - Zero Padding / Full Bleed */}
        <div className="relative block w-full aspect-[4/5] min-h-[260px] sm:min-h-[300px] overflow-hidden bg-[#0d101a] p-0">
          {/* Subtle ambient spotlight behind device */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />

          <img
            src={product.image}
            alt={`${fullName} product photo`}
            loading="lazy"
            width={800}
            height={800}
            className="relative h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Top Badges */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none z-10">
            <span className="rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-slate-300 uppercase backdrop-blur-md shadow-sm">
              {product.category}
            </span>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur-md shadow-sm",
                product.available
                  ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                  : "border border-rose-500/20 bg-rose-500/10 text-rose-400",
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  product.available
                    ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]"
                    : "bg-rose-400 shadow-[0_0_6px_rgba(244,63,94,0.8)]",
                )}
              />
              {product.available ? "In Stock" : "Sold Out"}
            </span>
          </div>

          {/* Clean Professional % OFF Badge Overlay on Image */}
          <div className="absolute bottom-3 left-3 pointer-events-none z-10">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-rose-500/30 bg-rose-950/80 px-2.5 py-1 text-xs font-bold text-rose-300 shadow-lg backdrop-blur-md">
              <Tag className="h-3 w-3 text-rose-400" aria-hidden="true" />
              {discountPercent}% OFF
            </span>
          </div>
        </div>

        {/* 25% Professional Product Info Footer */}
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 gap-2.5 border-t border-white/[0.06] bg-[#111422]">
          <div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-[11px] font-bold tracking-[0.14em] text-blue-400 uppercase">
                {product.brand}
              </p>
              <div className="flex items-center gap-1 text-xs">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                <span className="font-semibold text-slate-200">4.9</span>
              </div>
            </div>

            {/* Product Name */}
            <h3 className="mt-1 text-base sm:text-lg leading-snug font-bold text-white transition-colors duration-200 group-hover:text-blue-400 line-clamp-1">
              {product.name}
            </h3>
          </div>

          {/* Price Section with Original Price & Free Pickup */}
          <div className="flex items-baseline justify-between gap-2 pt-2 border-t border-white/[0.06]">
            <div className="flex items-baseline gap-2 flex-wrap">
              {/* Selling Price */}
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                {formatPrice(product)}
              </span>
              {/* Original Struck-through Price */}
              <span className="text-xs sm:text-sm text-slate-400 line-through">
                {product.currency} {originalPrice.toLocaleString("en-US")}
              </span>
            </div>

            <span className="text-[11px] font-medium text-slate-400">
              Free store pickup
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121624]">
      <div className="skeleton aspect-[4/5] min-h-[260px] sm:min-h-[300px] w-full" />
      <div className="space-y-3 p-4 sm:p-5">
        <div className="flex justify-between">
          <div className="skeleton h-3 w-20 rounded" />
          <div className="skeleton h-3 w-12 rounded" />
        </div>
        <div className="skeleton h-5 w-3/4 rounded" />
        <div className="flex justify-between items-center pt-2">
          <div className="skeleton h-6 w-28 rounded" />
          <div className="skeleton h-5 w-16 rounded-md" />
        </div>
      </div>
    </div>
  );
}
