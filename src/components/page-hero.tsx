import type { ReactNode, ComponentType } from "react";

interface PageHeroProps {
  eyebrow: string;
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: ReactNode;
  subtitle: string;
  className?: string;
}

export function PageHero({ eyebrow, icon: Icon, title, subtitle, className = "" }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dipkbpinx/image/upload/v1783869677/weaverbird/nmszxatomphtat2xspfs.jpg")`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.13 0.05 155 / 0.88), oklch(0.10 0.06 155 / 0.75))",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center text-white lg:py-28">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80">
          <Icon className="h-4 w-4" style={{ color: "var(--accent-red)" }} />
          {eyebrow}
        </div>
        <h1
          className="mt-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/80">{subtitle}</p>
      </div>
    </section>
  );
}
