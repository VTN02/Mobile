import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { branches } from "@/data/branches";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BranchCard } from "@/components/BranchCard";
import { Reveal } from "@/components/Reveal";

const title = `Our Branches — Visit Us In Store | ${site.name}`;
const description =
  "Two convenient branches for mobiles, accessories, electronics and repairs. Find addresses, phone numbers, opening hours and directions.";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/branches" },
    ],
    links: [{ rel: "canonical", href: "/branches" }],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <div className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
      <span className="glow-orb top-[-10%] left-[-6%] h-80 w-80 bg-violet/20" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Branches" }]} />
        <SectionHeading
          as="h1"
          eyebrow="Locations"
          title="Visit Our Branches"
          subtitle="See products in person, get advice from our team or drop off a device for repair."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {branches.map((branch, i) => (
            <Reveal key={branch.id} delay={i * 100}>
              <BranchCard branch={branch} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
