import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "2", label: "Branches" },
  { value: "1000+", label: "Products" },
  { value: "Expert", label: "Repair Service" },
  { value: "Trusted", label: "Customer Service" },
];

export function AboutSection({ withLink = true }: { withLink?: boolean }) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-section-sapphire">
      <span className="glow-orb right-[-10%] bottom-0 h-80 w-80 bg-violet-600/20" aria-hidden="true" />
      <span className="glow-orb left-[-10%] top-1/4 h-80 w-80 bg-blue-600/15" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative">
            {/* Glow backdrop */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" aria-hidden="true" />
            {/* Video wrapper */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <video
                src="/about-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                aria-label="Professional electronics repair technician at work"
              />
              {/* Bottom gradient fade for polish */}
              <div
                className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold tracking-[0.14em] text-blue-400 uppercase">
              About us
            </span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl text-white">
              A local shop built on trust, service and technology
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-300">
              <p>
                {site.name} is a mobile and electronics shop serving the community with the
                latest smartphones, accessories, audio gear, smart watches and everyday
                electronics — all under one roof.
              </p>
              <p>
                Alongside our product range, our in-house technicians handle screen and battery
                replacements, charging port repairs, software support and laptop servicing, so
                your devices keep working for longer.
              </p>
              <p>
                With two convenient branches and a customer-first approach, we take the time to
                understand what you need before recommending anything.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-b from-[#14192b]/90 to-[#0d101d]/90 p-4 text-center shadow-lg backdrop-blur-md"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-xl font-extrabold bg-gradient-to-r from-white via-slate-100 to-sky-400 bg-clip-text text-transparent sm:text-2xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs font-medium text-slate-400">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            {withLink ? (
              <Link
                to="/about"
                className="group mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-brand px-6 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
              >
                More about us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
