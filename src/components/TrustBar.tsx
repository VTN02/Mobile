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
    <section id="trust-strip" aria-label="Why shop with us" className="relative z-10 -mt-8 pb-4 sm:-mt-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3.5 min-[420px]:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 70}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex h-full items-center gap-3.5 rounded-xl border border-white/[0.08] bg-[#121624] p-4 shadow-sm transition-colors duration-200 hover:border-blue-500/30 hover:shadow-md"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-white">{title}</span>
                  <span className="mt-0.5 block text-xs text-slate-300 leading-snug line-clamp-2">{text}</span>
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
