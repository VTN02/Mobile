import { useState, useEffect } from "react";
import { BadgeCheck, Headset, MapPin, Wrench, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    step: "01",
    icon: BadgeCheck,
    title: "Quality Products",
    text: "Brand-new, genuine items with warranty",
    accent: "from-blue-500/20 via-cyan-500/10 to-transparent",
    iconColor: "text-cyan-400",
  },
  {
    step: "02",
    icon: Wrench,
    title: "Professional Repairs",
    text: "Skilled technician support for smartphones & electronics",
    accent: "from-indigo-500/20 via-blue-500/10 to-transparent",
    iconColor: "text-blue-400",
  },
  {
    step: "03",
    icon: Headset,
    title: "Expert Support",
    text: "Fast & helpful assistance via phone & WhatsApp",
    accent: "from-sky-500/20 via-cyan-500/10 to-transparent",
    iconColor: "text-sky-400",
  },
  {
    step: "04",
    icon: MapPin,
    title: "2 Convenient Locations",
    text: "Easy-to-access branches with in-store shopping",
    accent: "from-blue-600/20 via-indigo-500/10 to-transparent",
    iconColor: "text-cyan-400",
  },
];

export function TrustBar() {
  const [activeStep, setActiveStep] = useState(0);

  // Sequential active wave cycling across the 4 trust badges
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % items.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="trust-strip"
      aria-label="Why shop with us"
      className="relative z-10 -mt-8 pb-6 sm:-mt-10 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Continuous ambient glowing trail beneath strip */}
        <div className="pointer-events-none absolute inset-x-8 -top-4 h-12 bg-gradient-to-r from-blue-600/10 via-cyan-500/15 to-blue-600/10 blur-2xl" aria-hidden="true" />

        <div className="grid grid-cols-1 gap-3.5 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {items.map(({ step, icon: Icon, title, text, iconColor }, i) => {
            const isActive = activeStep === i;

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5, scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative flex h-full items-center gap-3.5 rounded-2xl border p-4 shadow-xl backdrop-blur-xl transition-all duration-300 cursor-pointer select-none overflow-hidden ${
                  isActive
                    ? "border-blue-500/40 bg-gradient-to-b from-[#161c30]/95 via-[#111626]/95 to-[#0d111e]/95 shadow-blue-500/15"
                    : "border-white/[0.08] bg-gradient-to-b from-[#131728]/90 via-[#101424]/90 to-[#0d101d]/90 hover:border-blue-500/35 hover:shadow-2xl hover:shadow-blue-500/10"
                }`}
              >
                {/* 1. Animated Top Specular Laser Highlight */}
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] transition-all duration-500 rounded-t-2xl ${
                    isActive
                      ? "bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-100 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
                      : "bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 group-hover:opacity-100"
                  }`}
                  aria-hidden="true"
                />

                {/* 2. Flowing Ambient Corner Glow on Hover or Active Cycle */}
                <div
                  className={`pointer-events-none absolute -top-8 -right-8 h-20 w-20 rounded-full bg-cyan-400/15 blur-xl transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                  aria-hidden="true"
                />

                {/* 3. Glowing Icon Node with Pulsing Halo */}
                <div className="relative shrink-0">
                  {/* Active Radar Ripple Ring */}
                  {isActive && (
                    <motion.span
                      className="pointer-events-none absolute -inset-1 rounded-2xl border border-cyan-400/50"
                      initial={{ scale: 0.9, opacity: 0.8 }}
                      animate={{ scale: 1.25, opacity: 0 }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      aria-hidden="true"
                    />
                  )}

                  <span
                    className={`relative grid h-11 w-11 place-items-center rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white border-cyan-400/60 shadow-lg shadow-blue-500/30 scale-105"
                        : "bg-gradient-to-br from-blue-500/15 to-sky-500/5 text-cyan-400 border-blue-400/20 group-hover:scale-105 group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white group-hover:border-cyan-400/40"
                    }`}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" aria-hidden="true" />
                  </span>
                </div>

                {/* 4. Text Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span
                      className={`block text-sm font-bold transition-colors duration-200 truncate ${
                        isActive
                          ? "text-cyan-200"
                          : "text-white group-hover:text-cyan-200"
                      }`}
                    >
                      {title}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-500 transition-colors duration-200 group-hover:text-cyan-400 shrink-0">
                      {step}
                    </span>
                  </div>
                  <span className="mt-0.5 block text-xs text-slate-300/80 leading-snug line-clamp-2">
                    {text}
                  </span>
                </div>

                {/* 5. Bottom Energy Pulse Line Indicator */}
                <motion.div
                  className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scaleX: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
