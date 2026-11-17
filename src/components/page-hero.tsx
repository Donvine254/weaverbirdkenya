import type { ReactNode, ComponentType } from "react";

interface PageHeroProps {
  eyebrow: string;
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: ReactNode;
  subtitle: string;
  className?: string;
  image?: string;
}

const defaultImage =
  "https://res.cloudinary.com/dipkbpinx/image/upload/v1783869677/weaverbird/nmszxatomphtat2xspfs.jpg";

export function PageHero({
  eyebrow,
  icon: Icon,
  title,
  subtitle,
  image = defaultImage,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url("${image}")`,
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.13 0.05 155 / 0.44), oklch(0.10 0.06 155 / 0.75))",
        }}
      />

      {/* Subtle gradient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, oklch(0.78 0.18 145 / 0.25), transparent 60%)",
        }}
      />

      {/* Centered hero content */}
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-14 text-center text-white animate-fade-in-up lg:py-16">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/80">
          <Icon className="h-4 w-4 shrink-0" style={{ color: "var(--accent-red)" }} />
          {eyebrow}
        </div>

        {/* Title */}
        <h1
          className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-2xl text-white/80">{subtitle}</p>
      </div>
    </section>
  );
}
