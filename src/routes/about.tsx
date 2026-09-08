import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const title = `About Us — Mobiles, Electronics & Repairs | ${site.name}`;
const description =
  "Learn about our shop: quality products, experienced repair technicians, customer-focused service and two convenient branches.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden pt-14 sm:pt-16 lg:pt-20">
        <span className="glow-orb top-[-20%] left-1/2 h-80 w-80 -translate-x-1/2 bg-primary/20" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <SectionHeading
            as="h1"
            eyebrow="About"
            title={`Who we are at ${site.name}`}
            subtitle="A neighbourhood technology shop with premium standards — products you can trust and repairs handled with care."
          />
        </div>
      </div>
      <AboutSection withLink={false} />
      <WhyChooseUs />
    </>
  );
}
