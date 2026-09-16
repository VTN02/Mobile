import { BadgeCheck, Headset, MapPin, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    icon: BadgeCheck,
    title: "Quality Products",
    text: "Brand-new, genuine items with warranty",
  },
  {
    icon: Wrench,
    title: "Professional Repairs",
    text: "Skilled technician support for smartphones & electronics",
  },
  {
    icon: Headset,
    title: "Expert Support",
    text: "Fast & helpful assistance via phone & WhatsApp",
  },
  {
    icon: MapPin,
    title: "2 Convenient Locations",
    text: "Easy-to-access branches with in-store shopping",
  },
];

export function TrustBar() {
  return (
    <section id="trust-strip" aria-label="Why shop with us" className="relative z-10 -mt-8 pb-6 sm:-mt-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3.5 min-[420px]:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 70}>
              <motion.div
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 450, damping: 25 }}
                className="group relative flex h-full items-center gap-3.5 rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#131728]/90 via-[#101424]/90 to-[#0d101d]/90 p-4 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer select-none"
              >
                {/* Top card specular highlight */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-2xl"
                  aria-hidden="true"
                />

                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-500/5 text-blue-400 ring-1 ring-blue-400/20 transition-all duration-300 group-hover:scale-105 group-hover:from-blue-600 group-hover:to-blue-400 group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-white transition-colors duration-200 group-hover:text-blue-200">{title}</span>
                  <span className="mt-0.5 block text-xs text-slate-300/90 leading-snug line-clamp-2">{text}</span>
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
