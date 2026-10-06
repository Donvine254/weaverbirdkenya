import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, Facebook, Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageCta } from "@/components/page-cta";
import { BlogCard, BlogMeta, CategoryTag } from "@/components/blog-card";
import { ARTICLE_POSTS, BLOG_POSTS, type BlogPost } from "@/data/blog";

const SITE = "https://weaverbirdkenya.lovable.app";

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
      <main id="main-content" className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="text-3xl font-bold">Article not found</h1>
        <p className="mt-3 text-muted-foreground">This article may have moved or been removed.</p>
        <a href="/blog" className="mt-6 inline-block font-semibold text-primary hover:underline">
          Back to all articles
        </a>
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
  const url = `${SITE}/blog/${post.slug}`;

  return (
    <div className="min-h-dvh bg-background" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Blog" />
      <main id="main-content">
        <article>
          <header className="mx-auto max-w-3xl px-6 pt-12 sm:pt-16">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <a href="/blog" className="inline-flex items-center gap-1.5 hover:text-foreground">
                <ArrowLeft className="h-4 w-4" /> All articles
              </a>
            </nav>
            <div className="mt-6">
              <CategoryTag>{post.category}</CategoryTag>
            </div>
            <h1
              className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-display)", color: "var(--primary-darker)" }}
            >
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
            <div className="mt-5">
              <BlogMeta post={post} />
            </div>
          </header>

          <div className="mx-auto mt-8 max-w-5xl px-6">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="aspect-[16/9] w-full rounded-2xl object-cover"
            />
          </div>

          <div className="mx-auto max-w-3xl px-6 py-12">
            {post.sections.map((s) => (
              <section key={s.heading} className="mt-10 first:mt-0">
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--primary-darker)" }}
                >
                  {s.heading}
                </h2>
                {s.paragraphs?.map((t) => (
                  <p key={t} className="mt-4 leading-relaxed text-foreground/85">
                    {t}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground/85">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {post.links.length > 0 && (
              <aside className="mt-12 rounded-2xl border border-border bg-secondary/50 p-6">
                <h2 className="text-base font-bold">Useful links</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {post.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="inline-block rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary"
                      >
                        {l.label} →
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            <ShareBar url={url} title={post.title} />
          </div>
        </article>

        <section className="bg-secondary/60 py-16" aria-labelledby="related-heading">
          <div className="mx-auto max-w-7xl px-6">
            <h2
              id="related-heading"
              className="text-2xl font-bold sm:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Related articles
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related(post).map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
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

function ShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const btn =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition hover:bg-secondary";
  return (
    <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-6">
      <span className="text-sm font-semibold">Share this article:</span>
      <a
        className={btn}
        aria-label="Share on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://wa.me/?text=${t}%20${u}`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
          <path d="M12.05.7C5.78.7.67 5.8.67 12.07c0 2 .52 3.96 1.52 5.68L.57 23.7l6.09-1.6a11.36 11.36 0 0 0 5.39 1.37c6.27 0 11.38-5.1 11.38-11.37C23.43 5.8 18.32.7 12.05.7Zm5.42 13.68c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49 2.47 1.07 2.97.85 3.56.79.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
      <a
        className={btn}
        aria-label="Share on Facebook"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.facebook.com/sharer/sharer.php?u=${u}`}
      >
        <Facebook className="h-4 w-4" />
      </a>
      <a
        className={btn}
        aria-label="Share on LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`}
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <button
        type="button"
        className={`${btn} cursor-pointer`}
        aria-label="Copy link"
        onClick={() => {
          navigator.clipboard?.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
      >
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      </button>
    </div>
  );
}
