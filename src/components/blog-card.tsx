import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { type BlogPost, postPath, formatDate } from "@/data/blog";

export function BlogMeta({ post, light = false }: { post: BlogPost; light?: boolean }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs ${light ? "text-white/75" : "text-muted-foreground"}`}
    >
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="h-3.5 w-3.5" />
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" />
        {post.readMinutes} min read
      </span>
    </div>
  );
}

export function CategoryTag({ children }: { children: string }) {
  return (
    <span
      className="inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
      style={{ background: "oklch(0.66 0.22 25 / 0.12)", color: "var(--color-maroon)" }}
    >
      {children}
    </span>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <a href={postPath(post)} className="block aspect-video overflow-hidden" tabIndex={-1}>
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover bg-center transition-transform duration-500 group-hover:scale-105"
        />
      </a>
      <div className="flex flex-1 flex-col p-6">
        <CategoryTag>{post.category}</CategoryTag>
        <h3 className="mt-3 text-lg font-bold leading-snug text-foreground">
          <a href={postPath(post)} className="hover:underline">
            {post.title}
          </a>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <BlogMeta post={post} />
        </div>
        <a
          href={postPath(post)}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
          style={{ color: "var(--color-maroon)" }}
          aria-label={`Read article: ${post.title}`}
        >
          Read Article
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
