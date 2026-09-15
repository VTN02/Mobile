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
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#121624] shadow-soft backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.8)]"
    >
      {/* Top subtle highlight */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        aria-hidden="true"
      />

      {/* Whole Card Clickable Link */}
      <Link
        to="/products/$id"
        params={{ id: product.id }}
        aria-label={`View ${fullName}, priced at ${formatPrice(product)}`}
        className="flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
      >
        {/* 3:1 Image to Text Showcase Area */}
        <div className="relative block w-full aspect-square overflow-hidden bg-[#0d101a] p-0">
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
          <div className="absolute top-2 inset-x-2 flex items-center justify-between gap-1 pointer-events-none z-10">
            <span className="rounded-full border border-white/10 bg-black/60 px-1.5 sm:px-2 py-0.5 text-[9px] font-semibold tracking-wider text-slate-300 uppercase backdrop-blur-md shadow-sm truncate max-w-[55%]">
              {product.category}
            </span>
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-1.5 sm:px-2 py-0.5 text-[9px] font-medium backdrop-blur-md shadow-sm shrink-0",
                product.available
                  ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                  : "border border-rose-500/20 bg-rose-500/10 text-rose-400",
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full shrink-0",
                  product.available
                    ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]"
                    : "bg-rose-400 shadow-[0_0_6px_rgba(244,63,94,0.8)]",
                )}
              />
              {product.available ? "In Stock" : "Sold Out"}
            </span>
          </div>

          {/* Clean Professional % OFF Badge Overlay on Image */}
          <div className="absolute bottom-2 left-2 pointer-events-none z-10">
            <span className="inline-flex items-center gap-1 rounded-md border border-rose-500/30 bg-rose-950/80 px-1.5 py-0.5 text-[10px] font-bold text-rose-300 shadow-lg backdrop-blur-md">
              <Tag className="h-2.5 w-2.5 text-rose-400" aria-hidden="true" />
              {discountPercent}% OFF
            </span>
          </div>
        </div>

        {/* Compact Product Info Footer */}
        <div className="flex flex-1 flex-col justify-between p-2.5 sm:p-3 gap-1.5 border-t border-white/[0.06] bg-[#111422]">
          <div>
            <div className="flex items-center justify-between gap-1">
              <p className="text-[10px] font-bold tracking-[0.12em] text-blue-400 uppercase truncate">
                {product.brand}
              </p>
              <div className="flex items-center gap-0.5 text-[10px] shrink-0">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                <span className="font-semibold text-slate-200">4.9</span>
              </div>
            </div>

            {/* Product Name */}
            <h3 className="mt-0.5 text-xs sm:text-sm font-bold leading-snug text-white transition-colors duration-200 group-hover:text-blue-400 line-clamp-1">
              {product.name}
            </h3>
          </div>

          {/* Price & Warranty Section */}
          <div className="pt-1.5 border-t border-white/[0.06] flex flex-col gap-0.5">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white whitespace-nowrap">
                {formatPrice(product)}
              </span>
              <span className="text-[10px] text-slate-400 line-through whitespace-nowrap">
                {product.currency} {originalPrice.toLocaleString("en-US")}
              </span>
            </div>
            {product.warranty && (
              <p className="text-[10px] font-medium text-slate-400 truncate">
                {product.warranty}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121624]">
      <div className="skeleton aspect-square w-full" />
      <div className="space-y-2 p-3">
        <div className="flex justify-between">
          <div className="skeleton h-2.5 w-14 rounded" />
          <div className="skeleton h-2.5 w-8 rounded" />
        </div>
        <div className="skeleton h-3.5 w-3/4 rounded" />
        <div className="flex items-baseline justify-between pt-1.5">
          <div className="skeleton h-4 w-16 rounded" />
          <div className="skeleton h-3 w-10 rounded" />
        </div>
      </div>
    </div>
  );
}
