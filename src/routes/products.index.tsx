import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, ArrowRight, Store } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/page-hero";
import { AllProductCategories } from "@/data/products";

type Category = (typeof AllProductCategories.categories)[number];

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Our Products — Weaver Bird Kenya" },
      {
        name: "description",
        content:
          "Explore our full catalogue: school uniforms, corporate wear, workwear & overalls, medical wear, hospitality wear, t-shirts & polos, knitwear, sportswear, Maasai shukas and promotional merchandise.",
      },
      {
        name: "keywords",
        content:
          "school uniforms Kenya, corporate wear, workwear and overalls, medical wear, scrubs Kenya, hospitality uniforms, chef jackets, t-shirts and polo shirts, jumpers sweaters fleece, tracksuits sportswear, Maasai shukas, promotional merchandise, branded apparel Kenya, uniform catalogue, buy uniforms Kenya",
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
      {
        property: "og:image",
        content:
          "https://res.cloudinary.com/dipkbpinx/image/upload/w_1200,h_630,c_fill,q_auto,f_jpg/v1788943972/weaverbird/mnpf4rlrru8sz3vzy6xl.jpg",
      },
      {
        name: "twitter:image",
        content:
          "https://res.cloudinary.com/dipkbpinx/image/upload/w_1200,h_630,c_fill,q_auto,f_jpg/v1788943972/weaverbird/mnpf4rlrru8sz3vzy6xl.jpg",
      },
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
          subtitle="From school uniforms and corporate wear to workwear, medical apparel and sportswear, Weaverbird manufactures garments tailored to your organisation’s requirements."
        />
        <CategoryGrid />
        <ProductsCta />
      </main>
      <Footer />
    </div>
  );
}

function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:py-20" aria-labelledby="categories-heading">
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="categories-heading"
          className="text-3xl font-extrabold sm:text-4xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--primary-darker)" }}
        >
          Browse by Category
        </h2>
        <p className="mt-4 rounded-xl border-l-4 bg-secondary/60 px-5 py-4 text-left text-sm leading-relaxed text-muted-foreground sm:text-base" style={{ borderColor: "var(--color-maroon)" }}>
          Every organisation is different. The products shown represent our manufacturing
          capabilities and can be customised to your preferred design, colours, fabric, sizing and
          branding.
        </p>
      </div>
      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {AllProductCategories.categories.map((c: Category) => (
          <li key={c.id}>
            <Link
              to="/products/$category"
              params={{ category: c.id }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.banner}
                  alt={`${c.name} by Weaverbird Kenya`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                  {c.products.length} examples
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-extrabold uppercase tracking-wide" style={{ fontFamily: "var(--font-display)", color: "var(--primary-darker)" }}>
                  {c.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.pitch}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--color-maroon)" }}>
                  Explore Category
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProductsCta() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-maroon)",
        backgroundImage: `repeating-radial-gradient(
      ellipse at 50% 100%,
      transparent 0 18px,
      rgba(244,239,226,0.045) 19px 21px,
      transparent 22px 42px
    )`,
      }}
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
        <div className="mx-auto w-full justify-center flex items-center gap-3">
          <Link
            to="/quote"
            className="group mt-8 inline-flex items-center gap-2 rounded-md px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
            style={{ background: "var(--primary-deep)", boxShadow: "var(--shadow-red)" }}
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/branches"
            className="group text-primary-deep bg-white mt-8 hidden sm:inline-flex items-center gap-2 rounded-md px-7 py-3 text-sm font-semibold  shadow-md transition-all hover:shadow-lg active:scale-95"
          >
            <Store className="h-4 w-4" />
            Find A Shop Near You
          </Link>
        </div>
      </div>
    </section>
  );
}
