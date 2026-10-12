import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, Facebook, Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageCta } from "@/components/page-cta";
import { BlogCard, BlogMeta, CategoryTag } from "@/components/blog-card";
import { ARTICLE_POSTS, BLOG_POSTS, type BlogPost } from "@/data/blog";

const SITE = "https://weaverbirdkenya.com";

function shareImage(src: string) {
  return src.includes("/upload/w_")
    ? src
    : src.replace("/upload/", "/upload/w_1200,h_630,c_fill,q_auto,f_jpg/");
}

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = ARTICLE_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData)
      return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.post;
    const url = `${SITE}/blog/${params.slug}`;
    const img = shareImage(p.image);
    const title = `${p.title} — Weaverbird`;
    return {
      meta: [
        { title },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: p.excerpt },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: p.date },
        { property: "article:section", content: p.category },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: img },
        { name: "twitter:image", content: img },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            image: img,
            datePublished: p.date,
            articleSection: p.category,
            mainEntityOfPage: url,
            author: { "@type": "Organization", name: "Weaverbird Garments Manufacturers Ltd" },
            publisher: {
              "@type": "Organization",
              name: "Weaverbird Garments Manufacturers Ltd",
              url: SITE,
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
              { "@type": "ListItem", position: 3, name: p.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  return (
    <div className="min-h-dvh bg-background">
      <Header current="Blog" />
      <main
        id="main-content"
        className="mx-auto flex min-h-[65vh] max-w-2xl items-center justify-center px-6 py-24 text-center"
      >
        <div>
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
            <ArrowLeft className="h-6 w-6 text-primary" />
          </div>
          <h1
            className="text-3xl font-extrabold sm:text-4xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--primary-darker)",
            }}
          >
            Article not found
          </h1>

          <p className="mx-auto mt-4 max-w-md leading-7 text-muted-foreground">
            This article may have moved, been renamed, or is no longer available.
          </p>

          <a
            href="/blog"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function related(post: BlogPost) {
  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug);
  const same = others.filter((p) => p.category === post.category);

  return [...same, ...others.filter((p) => p.category !== post.category)].slice(0, 3);
}

function ArticlePage() {
  const { post } = Route.useLoaderData();

  return (
    <div className="min-h-dvh bg-background" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Blog" />

      <main id="main-content">
        <article>
          {/* =====================================================
              ARTICLE HEADER
          ====================================================== */}
          <header className="mx-auto max-w-[850px] px-5 pt-10 sm:px-6 sm:pt-14 lg:pt-16">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <a
                href="/blog"
                className="inline-flex items-center gap-2 font-medium transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                All articles
              </a>
            </nav>

            <div className="mt-7">
              <CategoryTag>{post.category}</CategoryTag>
            </div>

            <h1
              className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-[-0.025em] sm:text-4xl lg:text-[44px]"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--primary-darker)",
              }}
            >
              {post.title}
            </h1>

            <p className="mt-5 max-w-3xl text-xs sm:text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {post.excerpt}
            </p>

            <div className="mt-6 border-t border-border/60 pt-5">
              <BlogMeta post={post} />
            </div>
          </header>

          {/* =====================================================
              FEATURED IMAGE
              Reduced from max-w-5xl
          ====================================================== */}
          <div className="mx-auto mt-8 max-w-[880px]">
            <div className="px-5 sm:px-6">
              <div className="overflow-hidden rounded-xl border border-border/60 bg-secondary/20 shadow-sm sm:rounded-2xl">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>

            {/* =====================================================
              ARTICLE CONTENT
          ====================================================== */}
            <div className="py-12 px-5 sm:px-6 sm:py-14 lg:py-16">
              {post.sections.map((s, index) => (
                <section
                  key={s.heading}
                  className={`${index === 0 ? "" : "mt-12 border-t border-border/60 pt-12"}`}
                >
                  {/* Small Weaverbird red accent */}
                  <div
                    className="mb-4 h-1 w-10 rounded-full"
                    style={{ backgroundColor: "var(--primary)" }}
                  />

                  <h2
                    className="text-2xl font-bold leading-tight tracking-[-0.015em] sm:text-[28px]"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--primary-darker)",
                    }}
                  >
                    {s.heading}
                  </h2>

                  {s.paragraphs?.map((t) => (
                    <p
                      key={t}
                      className="mt-5 text-[16.5px] leading-[1.8] text-foreground/85 sm:text-[17px]"
                    >
                      {t}
                    </p>
                  ))}

                  {s.bullets && (
                    <ul className="mt-6 space-y-3">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-[16.5px] leading-7 text-foreground/85 sm:text-[17px]"
                        >
                          <span
                            className="mt-[10px] h-2 w-2 shrink-0 rounded-full"
                            style={{ backgroundColor: "var(--primary)" }}
                            aria-hidden="true"
                          />

                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* =================================================
                RELATED / USEFUL LINKS
            ================================================== */}
              {post.links.length > 0 && (
                <aside className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-600" />

                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">
                          Explore More
                        </p>
                      </div>

                      <h2
                        className="mt-2 text-xl font-bold text-slate-900 sm:text-[22px]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        Related Resources
                      </h2>

                      <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                        Helpful guides and resources related to this article.
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {post.links.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          className="group flex h-full items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-200 hover:border-red-200 hover:bg-red-50/50 hover:text-red-700"
                        >
                          <span>{l.label}</span>

                          <span
                            aria-hidden="true"
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-base text-slate-500 shadow-sm ring-1 ring-slate-200 transition-all duration-200 group-hover:bg-red-600 group-hover:text-white group-hover:ring-red-600"
                          >
                            →
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}
            </div>
          </div>
        </article>

        {/* =====================================================
            RELATED ARTICLES
        ====================================================== */}
        <section
          className="border-y border-border/60 bg-secondary/45 py-14 sm:py-16 lg:py-20"
          aria-labelledby="related-heading"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
                Keep reading
              </p>

              <h2
                id="related-heading"
                className="mt-2 text-2xl font-bold sm:text-3xl"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--primary-darker)",
                }}
              >
                Related Articles
              </h2>

              <p className="mt-3 leading-7 text-muted-foreground">
                Continue exploring practical guides, manufacturing insights, and uniform advice from
                Weaverbird.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related(post).map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            EXISTING CTA
        ====================================================== */}
        <PageCta
          title="Looking for a Reliable Uniform Manufacturing Partner?"
          text="Talk to Weaverbird about your school, corporate, medical, hospitality, workwear or institutional uniform requirements."
        />
      </main>

      <Footer />
    </div>
  );
}
