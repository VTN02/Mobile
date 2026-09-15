import { PackageSearch } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/data/products";
import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";

type ProductGridProps = {
  products: Product[];
  loading?: boolean;
  emptyMessage?: string;
};

export function ProductGrid({ products, loading, emptyMessage }: ProductGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-3 min-[540px]:gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-dashed border-white/15 bg-card/40 px-6 py-16 text-center backdrop-blur-md"
      >
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-indigo-500/15 text-cyan shadow-glow">
          <PackageSearch className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-lg font-bold text-foreground">No products found</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-slate-300/80">
          {emptyMessage ?? "Try another category — or message us on WhatsApp and we'll check stock for you."}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      className="grid grid-cols-2 gap-3 min-[540px]:gap-4 sm:grid-cols-3 lg:grid-cols-4"
    >
      <AnimatePresence mode="popLayout">
        {products.map((product, index) => (
          <motion.div
            layout
            key={product.id}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{
              duration: 0.4,
              delay: Math.min(index, 6) * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="h-full"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
