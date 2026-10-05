import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, FolderDown, ArrowDownToLine, ExternalLink, Clock } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/page-hero";
import { PageCta } from "@/components/page-cta";
import { RESOURCES, type Resource } from "@/data/downloads";
import { seoMeta } from "@/lib/seo";


export const Route = createFileRoute("/downloads")({
  head: () => 
    seoMeta({
      title: "Downloads & Resources",
      description:
        "Access Weaverbird product information, sizing resources, company documents, policies, and garment care guides.",
      path: "/downloads",
    }),
  component: DownloadsPage,
});

function DownloadsPage() {
  return (
    <div className="min-h-dvh bg-background" style={{ fontFamily: "var(--font-sans)" }}>
      <Header current="Downloads" />
      <main id="main-content">
        <PageHero
          eyebrow="Resources"
          icon={FolderDown}
          image="https://res.cloudinary.com/dipkbpinx/image/upload/v1791188243/weaverbird/sj4tru2ok2xrnrajc7lo.jpg"
          title="Downloads & Resources"
          subtitle="Access Weaverbird product information, sizing resources, company documents, policies, and garment care guides."
        />
        <section className="mx-auto max-w-7xl px-6 py-16">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((r) => (
              <ResourceCard key={r.id} r={r} />
            ))}
          </ul>
        </section>
        <PageCta
          title="Need More Information?"
          text="Can't find the information you need? Contact our team for product specifications, quotations or custom manufacturing requirements."
          quoteFirst={false}
        />
      </main>
      <Footer />
    </div>
  );
}

function ResourceCard({ r }: { r: Resource }) {
  const available = !!(r.file || r.href);
  const btn =
    "inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition active:scale-95";
  return (
    <li
      className="flex flex-col rounded-2xl border border-border bg-card p-6"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="grid h-12 w-12 place-items-center rounded-xl"
          style={{ background: "oklch(0.66 0.22 25 / 0.12)" }}
        >
          <FileText className="h-5 w-5" style={{ color: "var(--accent-red)" }} />
        </span>
        <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
          {r.href ? "Web page" : "PDF"}
        </span>
      </div>
      <h2 className="mt-4 text-lg font-bold text-foreground">{r.title}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
      <div className="mt-6 space-y-2">
        {r.file ? (
          <a
            href={r.file}
            target="_blank"
            rel="noopener"
            download={r.downloadName}
            className={`${btn} bg-maroon text-white hover:shadow-lg`}
          >
            <ArrowDownToLine className="h-4 w-4" /> {r.button}
          </a>
        ) : r.href ? (
          <a href={r.href} className={`${btn} bg-maroon text-white hover:shadow-lg`}>
            <ExternalLink className="h-4 w-4" /> {r.button}
          </a>
        ) : (
          <button
            type="button"
            disabled
            aria-disabled
            className={`${btn} cursor-not-allowed bg-secondary text-muted-foreground`}
          >
            <Clock className="h-4 w-4" /> Coming soon
          </button>
        )}
        {!available && r.fallback && (
          <a
            href={r.fallback.href}
            className="block text-center text-sm font-semibold text-primary hover:underline"
          >
            {r.fallback.label} →
          </a>
        )}
        {r.related && (
          <a
            href={r.related.href}
            className="block text-center text-sm text-muted-foreground hover:text-foreground"
          >
            {r.related.label} →
          </a>
        )}
      </div>
    </li>
  );
}

export { Link };
