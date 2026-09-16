import { Award, Headphones, MapPin, ShieldCheck, Tag, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const reasons = [
  {
    step: "01",
    icon: ShieldCheck,
    title: "Genuine Quality Products",
    text: "We stock products we would use ourselves, sourced from suppliers we trust.",
    highlight: "100% Authentic",
  },
  {
    step: "02",
    icon: Wrench,
    title: "Professional Repair Services",
    text: "Careful diagnostics and quality parts, with clear pricing before any work begins.",
    highlight: "Certified Techs",
  },
  {
    step: "03",
    icon: Award,
    title: "Experienced Technicians",
    text: "Hands-on experience across mobile phones, laptops and everyday electronics.",
    highlight: "Expert Staff",
  },
  {
    step: "04",
    icon: Headphones,
    title: "Customer Support",
    text: "Message us any time on WhatsApp — we answer questions before and after purchase.",
    highlight: "Instant WhatsApp",
  },
  {
    step: "05",
    icon: MapPin,
    title: "Convenient Locations",
    text: "Two branches so you can walk in, see the product and talk to a real person.",
    highlight: "2 Branches",
  },
  {
    step: "06",
    icon: Tag,
    title: "Competitive Prices",
    text: "Fair, transparent pricing across phones, accessories and repair services.",
    highlight: "Best Rates",
  },
];

function MobileWhyChooseUsVerticalPath() {
  return (
    <div className="relative mt-8 block sm:hidden px-1 overflow-hidden">
      {/* ── 1. Base Vertical Path Track ── */}
      <div
        className="pointer-events-none absolute left-[17px] top-4 bottom-6 w-[2px] bg-gradient-to-b from-blue-500/20 via-blue-500/30 to-indigo-500/10"
        aria-hidden="true"
      />

      {/* ── 2. Compact Slow-Moving Glowing Pulse ── */}
      <motion.div
        className="pointer-events-none absolute left-[16.5px] w-[2.5px] h-16 rounded-full bg-gradient-to-b from-transparent via-cyan-300 to-transparent shadow-[0_0_10px_rgba(56,189,248,0.9)] z-10"
        aria-hidden="true"
        initial={{ top: "-10%" }}
        animate={{ top: ["-10%", "105%"] }}
        transition={{
          duration: 9.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="space-y-4 relative z-10">
        {reasons.map(({ step, icon: Icon, title, text, highlight }, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex items-start gap-3.5"
          >
            {/* ── Left Animated Node with Pulsing Loading Ring ── */}
            <div className="relative shrink-0 pt-1">
              {/* Soft Rhythmic Pulse Halo */}
              <motion.span
                className="pointer-events-none absolute inset-0 rounded-xl bg-cyan-400/25 blur-sm"
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.15, 0.6, 0.15],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  delay: index * 0.75,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                whileTap={{ scale: 0.92 }}
                className="relative grid h-[34px] w-[34px] place-items-center rounded-xl border border-blue-400/50 bg-gradient-to-br from-[#16223e] via-[#10172c] to-[#0c1222] shadow-md shadow-blue-500/25"
              >
                <Icon className="h-4 w-4 text-cyan-400" aria-hidden="true" />
              </motion.div>
            </div>

            {/* ── Right Content Card ── */}
            <motion.div
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              className="group relative flex-1 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#14192b]/95 via-[#101423]/95 to-[#0c0f1b]/95 p-3.5 shadow-lg backdrop-blur-xl"
            >
              {/* Top specular highlight */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-80"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center rounded-md border border-blue-500/25 bg-blue-500/10 px-2 py-0.5 text-[9px] font-bold text-blue-300 uppercase tracking-wider">
                  {highlight}
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-500">
                  {step}
                </span>
              </div>

              <h3 className="mt-1.5 text-xs sm:text-sm font-bold text-white leading-snug">
                {title}
              </h3>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-300/80">
                {text}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-section-mesh py-16 sm:py-20 lg:py-24">
      <span className="glow-orb top-[-10%] left-1/2 h-96 w-96 -translate-x-1/2 bg-blue-600/15" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why us"
          title="Why Customers Choose Us"
          subtitle="A neighbourhood technology shop with premium standards — genuine products and repairs handled with care."
        />

        {/* 1. Mobile Screen: Animated Vertical Path Timeline */}
        <MobileWhyChooseUsVerticalPath />

        {/* 2. Tablet & Desktop: Responsive 3-Column Grid */}
        <div className="mt-12 hidden sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {reasons.map(({ step, icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 80}>
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 450, damping: 25 }}
                className="group relative h-full rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#14192b]/90 via-[#101423]/90 to-[#0c0f1b]/90 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer select-none"
              >
                {/* Top specular highlight */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-2xl"
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-500/5 text-blue-400 ring-1 ring-blue-400/20 transition-all duration-300 group-hover:scale-105 group-hover:from-blue-600 group-hover:to-blue-400 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-blue-400 transition-colors">
                    {step}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold text-white transition-colors duration-200 group-hover:text-blue-200">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/80">{text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
