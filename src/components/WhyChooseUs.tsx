import { Award, Headphones, MapPin, ShieldCheck, Tag, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Genuine Quality Products",
    text: "We stock products we would use ourselves, sourced from suppliers we trust.",
  },
  {
    icon: Wrench,
    title: "Professional Repair Services",
    text: "Careful diagnostics and quality parts, with clear pricing before any work begins.",
  },
  {
    icon: Award,
    title: "Experienced Technicians",
    text: "Hands-on experience across mobile phones, laptops and everyday electronics.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    text: "Message us any time on WhatsApp — we answer questions before and after purchase.",
  },
  {
    icon: MapPin,
    title: "Convenient Locations",
    text: "Two branches so you can walk in, see the product and talk to a real person.",
  },
  {
    icon: Tag,
    title: "Competitive Prices",
    text: "Fair, transparent pricing across phones, accessories and repair services.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24">
      <span className="glow-orb top-[-20%] left-1/2 h-80 w-80 -translate-x-1/2 bg-primary/20" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why us"
          title="Why Customers Choose Us"
          subtitle="A local shop with the standards you would expect from a premium brand."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 80}>
              <motion.div
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 450, damping: 25 }}
                className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors duration-300 hover:border-primary/30 hover:shadow-lift"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
