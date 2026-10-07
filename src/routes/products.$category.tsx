import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Tag,
  Shirt,
  Palette,
  Layers,
  Stamp,
  Ruler,
  PenTool,
  ReceiptText,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/page-hero";
import { AllProductCategories } from "@/data/products";

type Category = (typeof AllProductCategories.categories)[number];
type ProductItem = Category["products"][number];

const BASE = "https://weaverbirdkenya.lovable.app";

function findCategory(slug: string) {
  return AllProductCategories.categories.find((c) => c.id === slug);
}

export const Route = createFileRoute("/products/$category")({
  loader: ({ params }) => {
    const category = findCategory(params.category);
    if (!category) throw notFound();
    return { slug: category.id };
  },
  head: ({ loaderData }) => {
    const c = loaderData ? findCategory(loaderData.slug) : undefined;
    if (!c) return { meta: [{ title: "Category not found" }, { name: "robots", content: "noindex" }] };
    const items = c.products
      .slice(0, 6)
      .map((p) => p.name.toLowerCase())
      .join(", ");
    const title = `${c.name} Kenya | Weaverbird Garments`;
    const description = `Custom ${c.name.toLowerCase()} manufactured in Kenya, including ${items} and more. Made to your organisation's design and specifications.`;
    const url = `${BASE}/products/${c.id}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: c.banner },
        { name: "twitter:image", content: c.banner },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: CategoryPage,
});

const customise = [
  { icon: PenTool, title: "Design & Style", text: "Manufactured according to your approved design or reference sample." },
  { icon: Palette, title: "Colours", text: "Match garments to your school, company, club or organisation colours." },
  { icon: Layers, title: "Fabric", text: "Select suitable fabrics based on comfort, durability, use and budget." },
  { icon: Stamp, title: "Branding", text: "Embroidery, screen printing, woven labels and other branding options." },
  { icon: Ruler, title: "Sizing", text: "Produced across the required size range for your organisation." },
];

function CategoryPage() {
  const { slug } = Route.useLoaderData();
  const all = AllProductCategories.categories;
  const index = all.findIndex((c) => c.id === slug);
  const category = all[index];
  const others = [1, 2, 3].map((n) => all[(index + n) % all.length]);

  return (
    <div className="min-h-dvh bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Products" />
      <main id="main-content">
        <PageHero
          eyebrow="Product Category"
          icon={Shirt}
          image={category.banner}
          title={category.name}
          subtitle={category.pitch}
        />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="border-b border-black/5 bg-secondary/40">
          <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-6 py-3 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <li aria-current="page" className="font-semibold text-foreground">{category.name}</li>
          </ol>
        </nav>

        {/* Tags */}
        <section className="mx-auto max-w-7xl px-6 pt-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Tag className="h-3.5 w-3.5" />
              {category.tagsLabel}
            </span>
            {category.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14" aria-labelledby="examples-heading">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2
              id="examples-heading"
              className="text-2xl font-extrabold sm:text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--primary-darker)" }}
            >
              What we make
            </h2>
            <p className="max-w-xl text-sm text-muted-foreground">
              Can't see the exact design you need? The products shown are representative examples.
              We manufacture custom designs to your requirements.{" "}
              <Link to="/quote" className="font-semibold" style={{ color: "var(--color-maroon)" }}>
                Request a Quote →
              </Link>
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {category.products.map((item) => (
              <ProductCard key={item.name} item={item} />
            ))}
          </ul>
        </section>

        {/* Made to your specifications */}
        <section className="bg-secondary/60" aria-labelledby="specs-heading">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_1.4fr] lg:py-20">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-maroon)" }}>
                <Sparkles className="h-4 w-4" /> Custom manufacturing
              </span>
              <h2
                id="specs-heading"
                className="mt-3 text-3xl font-extrabold sm:text-4xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--primary-darker)" }}
              >
                Made to your specifications
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The products shown are examples of our manufacturing capabilities. Weaverbird
                manufactures uniforms and apparel according to each client's required design,
                colours, fabric, sizing and branding. If your preferred design is not shown, talk to
                our team — we can manufacture to your specifications.
              </p>
              <Link
                to="/quote"
                className="group mt-6 inline-flex items-center gap-2 rounded-md bg-maroon px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
                style={{ boxShadow: "var(--shadow-red)" }}
              >
                <ReceiptText className="h-4 w-4" />
                Request a Custom Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Customise your order</h3>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {customise.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="rounded-2xl bg-card p-5 shadow-[var(--shadow-card)]">
                    <Icon className="h-5 w-5" style={{ color: "var(--color-maroon)" }} />
                    <p className="mt-3 font-bold" style={{ color: "var(--primary-darker)" }}>{title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Explore more */}
        <section className="mx-auto max-w-7xl px-6 py-14" aria-labelledby="more-heading">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <h2
              id="more-heading"
              className="text-2xl font-extrabold sm:text-3xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--primary-darker)" }}
            >
              Explore more categories
            </h2>
            <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--color-maroon)" }}>
              <ArrowLeft className="h-4 w-4" /> Back to All Products
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {others.map((c) => (
              <li key={c.id}>
                <Link
                  to="/products/$category"
                  params={{ category: c.id }}
                  className="group relative block aspect-[16/10] overflow-hidden rounded-2xl"
                >
                  <img src={c.banner} alt={c.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.13 0.05 155 / 0.85), transparent 60%)" }} />
                  <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-bold text-white">
                    {c.name}
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "var(--color-maroon)" }} aria-labelledby="cat-cta">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center text-white lg:py-20">
            <h2 id="cat-cta" className="text-3xl font-extrabold sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Need something different?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              We manufacture according to your organisation's design, colours and specifications.
              Tell us what you need and our team will help you develop the right solution.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/quote"
                className="group inline-flex items-center gap-2 rounded-md px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
                style={{ background: "var(--primary-deep)" }}
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3 text-sm font-semibold text-primary-deep shadow-md transition-all hover:shadow-lg active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ProductCard({ item }: { item: ProductItem }) {
  return (
    <li className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className="relative aspect-[4/3] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: item.image
            ? `url("${item.image}")`
            : "linear-gradient(135deg, oklch(0.22 0.07 155) 0%, oklch(0.13 0.05 155) 100%)",
        }}
      >
        {!item.image && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Shirt className="h-14 w-14 text-white/25" aria-hidden="true" />
          </div>
        )}
        <span className="absolute bottom-3 left-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
          Example design
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-bold" style={{ color: "var(--primary-darker)" }}>{item.name}</h3>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{item.text}</p>
        <Link
          to="/quote"
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold"
          style={{ color: "var(--color-maroon)" }}
        >
          Enquire about this product <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </li>
  );
}
