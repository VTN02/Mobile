import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { ContactSection } from "@/components/ContactSection";

const title = `Contact Us — Phone, WhatsApp & Branches | ${site.name}`;
const description =
  "Get in touch by phone, WhatsApp or email, or send an inquiry. Opening hours and both branch addresses.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-4">
      <h1 className="sr-only">Contact {site.name}</h1>
      <ContactSection />
    </div>
  );
}
