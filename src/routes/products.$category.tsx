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
  ArrowDownToLine,
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
    if (!c)
      return { meta: [{ title: "Category not found" }, { name: "robots", content: "noindex" }] };
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

const sizeGuideCategories = new Set([
  "school-uniforms",
  "corporate-wear",
  "hospitality-wear",
  "medical-wear",
]);

const customise = [
  {
    icon: PenTool,
    title: "Design & Style",
    text: "Manufactured according to your approved design or reference sample.",
  },
  {
    icon: Palette,
    title: "Colours",
    text: "Match garments to your school, company, club or organisation colours.",
  },
  {
    icon: Layers,
    title: "Fabric",
    text: "Select suitable fabrics based on comfort, durability, use and budget.",
  },
  {
    icon: Stamp,
    title: "Branding",
    text: "Embroidery, screen printing, woven labels and other branding options.",
  },
  {
    icon: Ruler,
    title: "Sizing",
    text: "Produced across the required size range for your organisation.",
  },
];

function CategoryPage() {
  const { slug } = Route.useLoaderData();
  const all = AllProductCategories.categories;
  const index = all.findIndex((c) => c.id === slug);
  const category = all[index];
  const others = [1, 2, 3].map((n) => all[(index + n) % all.length]);
  const isSizeGuideCategory = sizeGuideCategories.has(slug);
  const specPdf = isSizeGuideCategory
    ? "/resources/size-guide.pdf"
    : "/resources/technical_datasheet.pdf";
  const specLabel = isSizeGuideCategory ? "View Size Guide" : "Technical Specifications";
  const specDownloadName = isSizeGuideCategory
    ? "Garment-Size-Guide.pdf"
    : "Weaverbird-Technical-Datasheet.pdf";

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
            <li>
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <li>
              <Link to="/products" className="hover:text-foreground">
                Products
              </Link>
            </li>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <li aria-current="page" className="font-semibold text-foreground">
              {category.name}
            </li>
          </ol>
        </nav>

        {/* Tags */}
        <section className="max-w-5xl px-6 pt-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Tag className="h-3.5 w-3.5" />
              {category.tagsLabel}
            </span>
            {category.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/quote"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-maroon px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95 sm:w-auto"
              style={{
                boxShadow: "var(--shadow-red)",
              }}
            >
              <ReceiptText className="h-4 w-4" />
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={specPdf}
              download={specDownloadName}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/30 bg-primary-deep px-3 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-primary active:scale-95 sm:w-auto sm:px-6"
            >
              <ArrowDownToLine className="h-4 w-4 group-hover:animate-bounce" />
              {specLabel}
            </a>
          </div>
        </section>

        {/* Products */}
        <section
          className="mx-auto max-w-7xl px-6 py-10 lg:py-14"
          aria-labelledby="examples-heading"
        >
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {category.products.map((item) => (
              <ProductCard key={item.name} item={item} />
            ))}
          </ul>
        </section>

        {/* Made to your specifications */}
        <section className="border-y border-border bg-white" aria-labelledby="specs-heading">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
            {/* Section introduction */}
            <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-maroon">
                  Custom Manufacturing
                </p>

                <h2
                  id="specs-heading"
                  className="mt-3 text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Made to your specifications
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                  The products shown represent our manufacturing capabilities, not a fixed
                  catalogue. We manufacture uniforms and apparel according to your required design,
                  colours, fabric, sizing and branding.
                </p>
              </div>

              {/* CTA / reassurance */}
              <div className="lg:justify-self-end">
                <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                  Have your own design, reference sample or specifications? Send us your
                  requirements and our team will work with you.
                </p>

                <Link
                  to="/quote"
                  className="group mt-5 inline-flex items-center gap-2 rounded-md bg-maroon px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
                >
                  <ReceiptText className="h-4 w-4" />
                  Request a Custom Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Customisation capabilities */}
            <div className="pt-10">
              <div className="mb-7">
                <h3 className="text-lg font-bold text-primary">Customise your order</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Key elements we can tailor to suit your organisation.
                </p>
              </div>

              <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                {customise.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="border-l-2 border-primary/20 pl-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <h4 className="mt-4 font-bold text-primary">{title}</h4>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom note */}
            <div className="mt-12 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Don't see the exact design you need?
                </span>{" "}
                The items displayed on this website are representative examples. Weaverbird can
                manufacture to your organisation's specifications.
              </p>

              <Link
                to="/contact"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
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
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: "var(--color-maroon)" }}
            >
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
                  <img
                    src={c.banner}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.13 0.05 155 / 0.85), transparent 60%)",
                    }}
                  />
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
            <h2
              id="cat-cta"
              className="text-3xl font-extrabold sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
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
          Sample
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-bold" style={{ color: "var(--primary-darker)" }}>
          {item.name}
        </h3>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {item.text}
        </p>
        <Link
          to="/quote"
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold"
          style={{ color: "var(--color-maroon)" }}
        >
          Enquire about this product{" "}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </li>
  );
}
