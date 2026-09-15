import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { categories } from "@/data/products";

type CategoryFilterProps = {
  active: string;
  onChange: (value: string) => void;
};

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  const options = ["All", ...categories];

  return (
    <div
      role="tablist"
      aria-label="Product categories"
      className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
    >
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option)}
            className={cn(
              "relative shrink-0 snap-start rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary",
              isActive
                ? "text-white"
                : "text-slate-300 hover:text-white border border-white/[0.08] bg-[#121624] hover:border-white/20",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="activeCategoryPill"
                className="absolute inset-0 rounded-full bg-blue-600 shadow-md shadow-blue-600/30"
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
              />
            )}
            <span className="relative z-10">{option}</span>
          </button>
        );
      })}
    </div>
  );
}
