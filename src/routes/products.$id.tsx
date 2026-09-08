import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, ShieldCheck, Truck } from "lucide-react";
import { site } from "@/config/site";
import { formatPrice, getProduct, relatedProducts } from "@/data/products";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { waMessages } from "@/utils/whatsapp";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.brand} ${product.name} | ${site.name}`;
    const description = `${product.shortDescription} ${formatPrice(product)} at ${site.name}. Inquire on WhatsApp.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.id}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.id}` }],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductDetails,
});

function ProductNotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <h1 className="text-2xl font-extrabold">Product not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        This product may have been removed or the link is incorrect.
      </p>
      <Link
        to="/products"
        className="mt-6 inline-flex h-12 items-center rounded-xl bg-gradient-brand px-6 text-sm font-semibold text-primary-foreground shadow-glow"
      >
        Back to products
      </Link>
    </div>
  );
}

function ProductDetails() {
  const { product } = Route.useLoaderData();
  const fullName = `${product.brand} ${product.name}`;
  const related = relatedProducts(product);

  return (
    <div className="relative overflow-hidden py-10 sm:py-14 lg:py-16">
      <span className="glow-orb top-[-10%] right-[-8%] h-80 w-80 bg-violet/20" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/products" className="inline-flex items-center gap-1.5 hover:text-primary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to products
          </Link>
        </nav>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-12 blur-2xl" aria-hidden="true" />
            <img
              src={product.image}
              alt={`${fullName} product photo`}
              width={800}
              height={800}
              className="relative w-full rounded-2xl border border-border bg-surface object-cover shadow-lift"
            />
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-primary uppercase">
              {product.brand} • {product.category}
            </p>
            <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">{product.name}</h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="text-2xl font-extrabold gradient-text sm:text-3xl">
                {formatPrice(product)}
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
                  product.available ? "bg-success/12 text-success" : "bg-muted text-muted-foreground",
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    product.available ? "bg-success" : "bg-muted-foreground",
                  )}
                />
                {product.available ? "Available" : "Out of stock"}
              </span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-8">
              <h2 className="text-sm font-bold tracking-[0.14em] text-muted-foreground uppercase">
                Key specifications
              </h2>
              <dl className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-xl border border-border bg-card px-4 py-3 shadow-soft"
                  >
                    <dt className="text-xs font-medium text-muted-foreground">{spec.label}</dt>
                    <dd className="mt-0.5 text-sm font-semibold">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {product.warranty}
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                Genuine product, checked before handover
              </li>
              <li className="flex items-center gap-2">
                <Truck className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                Collect at either branch — ask us about delivery
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton message={waMessages.product(fullName)} size="lg" className="sm:flex-1">
                Inquire on WhatsApp
              </WhatsAppButton>
              <Link
                to="/contact"
                className="inline-flex h-13 items-center justify-center rounded-xl border border-border bg-card px-6 text-base font-semibold transition-all duration-300 hover:border-primary/40 hover:text-primary"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 ? (
          <section className="mt-20">
            <SectionHeading
              align="left"
              eyebrow="You may also like"
              title="Related Products"
              className="max-w-xl"
            />
            <div className="mt-8">
              <ProductGrid products={related} />
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
