import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Newspaper } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/page-hero";
import { PageCta } from "@/components/page-cta";
import { BlogCard, BlogMeta, CategoryTag } from "@/components/blog-card";
import { BLOG_CATEGORIES, BLOG_POSTS, postPath, type BlogCategory } from "@/data/blog";

const URL = "https://weaverbirdkenya.com/blog";
const TITLE = "Insights & Resources — Weaverbird Garments Blog";
const DESC =
  "Expert guidance, uniform care tips, industry insights and updates from Weaverbird Garments Manufacturers.";
const OG =
  "https://res.cloudinary.com/dipkbpinx/image/upload/w_1200,h_630,c_fill,q_auto,f_jpg/v1788943972/weaverbird/mnpf4rlrru8sz3vzy6xl.jpg";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: OG },
      { name: "twitter:image", content: OG },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Weaverbird Insights & Resources",
          url: URL,
          blogPost: BLOG_POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            datePublished: p.date,
            url: `https://weaverbirdkenya.com${postPath(p)}`,
          })),
        }),
      },
    ],
  }),
  component: BlogPage,
});

const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
const featured = sorted.find((p) => p.featured) ?? sorted[0];

function BlogPage() {
  const [cat, setCat] = useState<BlogCategory | "All">("All");
  const rest = sorted.filter((p) => p !== featured);
  const list = cat === "All" ? rest : sorted.filter((p) => p.category === cat);
  const used = new Set(BLOG_POSTS.map((p) => p.category));

  return (
    <div className="min-h-dvh bg-background" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Blog" />
      <main id="main-content">
        <PageHero
          eyebrow="Blog"
          icon={Newspaper}
          image="https://res.cloudinary.com/dipkbpinx/image/upload/v1791271282/weaverbird/products/lsnyuanp5cxkenotm7ke.jpg"
          title="Insights & Resources"
          subtitle={DESC}
        />

        {/* Featured */}
        <section className="mx-auto max-w-7xl px-6 pt-16" aria-labelledby="featured-heading">
          <h2 id="featured-heading" className="sr-only">
            Featured article
          </h2>
          <article
            className="group grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <a
              href={postPath(featured)}
              className="block aspect-[16/10] overflow-hidden lg:aspect-auto"
              tabIndex={-1}
            >
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Featured
              </span>
              <div className="mt-3">
                <CategoryTag>{featured.category}</CategoryTag>
              </div>
              <h3
                className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--primary-darker)" }}
              >
                <a href={postPath(featured)} className="hover:underline">
                  {featured.title}
                </a>
              </h3>
              <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-5">
                <BlogMeta post={featured} />
              </div>
              <a
                href={postPath(featured)}
                className="group/btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-maroon px-6 py-3 text-sm font-semibold text-white sm:w-fit"
                style={{ boxShadow: "var(--shadow-red)" }}
              >
                Read Article
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </article>
        </section>

        {/* Filters + grid */}
        <section className="mx-auto max-w-7xl px-6 py-16" aria-labelledby="articles-heading">
          <h2
            id="articles-heading"
            className="text-2xl font-bold sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Latest articles
          </h2>
          <div
            className="-mx-6 mt-6 flex gap-2 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
            style={{ scrollbarWidth: "none" }}
            role="group"
            aria-label="Filter articles by category"
          >
            {(["All", ...BLOG_CATEGORIES] as const).map((c) => {
              const active = cat === c;
              const empty = c !== "All" && !used.has(c);
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  aria-pressed={active}
                  className={`shrink-0 cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "border-transparent bg-maroon text-white"
                      : "border-border bg-card text-foreground hover:bg-secondary"
                  } ${empty ? "opacity-60" : ""}`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {list.length ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          ) : (
            <p className="mt-10 rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
              No articles in this category yet — check back soon.
            </p>
          )}
        </section>

        <PageCta
          title="Looking for a Reliable Uniform Manufacturing Partner?"
          text="Talk to Weaverbird about your school, corporate, medical, hospitality, workwear or institutional uniform requirements."
        />
      </main>
      <Footer />
    </div>
  );
}
