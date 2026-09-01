import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, Shirt, ArrowRight, Tag } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/page-hero";
import { products } from "@/data/products";

type Category = (typeof products.categories)[number];
type ProductItem = Category["products"][number];

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Our Products — Weaverbird Apparel Solutions" },
      {
        name: "description",
        content:
          "Explore our full catalogue: school uniforms, corporate wear, workwear & overalls, medical wear, hospitality wear, t-shirts & polos, knitwear, sportswear, Maasai shukas and promotional merchandise.",
      },
      { property: "og:title", content: "Uniforms & Apparel Products — Weaverbird Kenya" },
      {
        property: "og:description",
        content:
          "School uniforms, corporate wear, workwear, medical wear, hospitality uniforms, sportswear and branded merchandise — all made in our Thika factory.",
      },
      { property: "og:url", content: "https://weaverbirdkenya.lovable.app/products" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://weaverbirdkenya.lovable.app/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="min-h-dvh bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Products" />
      <main id="main-content">
        <PageHero
          eyebrow="Our Catalogue"
          icon={Package}
          image="https://res.cloudinary.com/dipkbpinx/image/upload/v1787899976/weaverbird/products/nabth0lum2fljecqgqfw.jpg"
          title={
            <>
              Our <span style={{ color: "oklch(0.78 0.18 145)" }}>Products</span>
            </>
          }
          subtitle="From school uniforms to corporate wear, medical scrubs to Maasai shukas — every garment is designed, cut and stitched under one roof at our Thika factory."
        />
        {products.categories.map((category, i) => (
          <CategorySection key={category.id} category={category} index={i} />
        ))}
        <ProductsCta />
      </main>
      <Footer />
    </div>
  );
}

function CategorySection({ category, index }: { category: Category; index: number }) {
  const muted = index % 2 === 1;
  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-heading`}
      className={`scroll-mt-24 ${muted ? "bg-secondary/60" : "bg-background"}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
        {/* Category header */}
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent-red)" }}
            >
              <span className="h-px w-8" style={{ background: "var(--accent-red)" }} />
              {String(index + 1).padStart(2, "0")} — Category
            </span>
            <h2
              id={`${category.id}-heading`}
              className="mt-3 text-3xl font-extrabold sm:text-4xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--primary-darker)" }}
            >
              {category.name}
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              {category.pitch}
            </p>
          </div>
          <Link
            to="/quote"
            className="group inline-flex items-center gap-2 self-start rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95 lg:self-end"
            style={{ background: "var(--color-maroon)", boxShadow: "var(--shadow-red)" }}
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Banner */}
        <div className="relative mt-8 overflow-hidden rounded-3xl border border-black/5 shadow-[var(--shadow-card)]">
          <img
            src={category.banner}
            alt={`${category.name} by Weaverbird Apparel Solutions`}
            loading="lazy"
            className="h-52 w-full object-cover sm:h-64 lg:h-72"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.13 0.05 155 / 0.65) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-center gap-2 sm:inset-x-7 sm:bottom-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              <Tag className="h-3.5 w-3.5" />
              {category.tagsLabel}
            </span>
            {category.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {category.products.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProductCard({ item }: { item: ProductItem }) {
  return (
    <li className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.07 155) 0%, oklch(0.13 0.05 155) 100%)",
        }}
      >
        <Shirt
          className="h-14 w-14 text-white/25 transition-transform duration-500 group-hover:scale-110"
          aria-hidden="true"
        />
        <span
          className="absolute bottom-3 right-3 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/70 backdrop-blur-sm"
          aria-hidden="true"
        >
          Photo coming soon
        </span>
        <span
          className="absolute left-3 top-3 h-1 w-8 rounded-full"
          style={{ background: "var(--accent-red)" }}
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-bold" style={{ color: "var(--primary-darker)" }}>
          {item.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
      </div>
    </li>
  );
}

function ProductsCta() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
      aria-labelledby="products-cta-heading"
    >
      <div className="mx-auto max-w-4xl px-6 py-16 text-center text-white lg:py-20">
        <h2
          id="products-cta-heading"
          className="text-3xl font-extrabold sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Can't find exactly what you need?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          We manufacture to your exact specification — fabric, colour, fit and branding. Tell us
          what you need and we'll send a tailored quote.
        </p>
        <Link
          to="/quote"
          className="group mt-8 inline-flex items-center gap-2 rounded-md px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
          style={{ background: "var(--color-maroon)", boxShadow: "var(--shadow-red)" }}
        >
          Request a Quote
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
