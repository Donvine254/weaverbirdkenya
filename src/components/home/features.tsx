import { MapPin, Award, Users, Truck, PencilRuler, Factory, Diamond } from "lucide-react";

/* ----------------- Features ----------------- */
export function Features() {
  const features = [
    {
      i: Diamond,
      t: "Quality Manufacturing",
      d: "Premium fabrics and precision stitching for long lasting wear.",
    },
    {
      i: Truck,
      t: "Fast Turnaround",
      d: "Bulk orders delivered on time without compromising quality.",
    },
    {
      i: PencilRuler,
      t: "Custom Branding",
      d: "Embroidery, weaving and printing to elevate your brand.",
    },
    {
      i: MapPin,
      t: "Nationwide Reach",
      d: "Multiple branches and reliable delivery across Kenya.",
    },
    { i: Award, t: "Competitive Pricing", d: "Factory-direct manufacturing for the best value." },
    { i: Users, t: "Dedicated Support", d: "Expert consultation from design to delivery." },
  ];
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* subtle woven grid + red glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "oklch(0.66 0.22 25 / 0.28)" }}
      />
      <div className="relative max-w-7xl px-6">
        <div className="mb-14">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{
              background: "oklch(1 0 0 / 0.08)",
              color: "oklch(0.92 0.03 145)",
              border: "1px solid oklch(1 0 0 / 0.14)",
            }}
          >
            <Diamond className="h-3.5 w-3.5" style={{ color: "var(--accent-red)" }} />
            Why Choose Us
          </span>
          <h2
            className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)", color: "oklch(0.99 0 0)" }}
          >
            Built for organisations
            <span style={{ color: "var(--accent-red)" }}> that don&apos;t compromise</span>
          </h2>
          <p
            className="mt-4 text-sm sm:text-base"
            style={{ color: "oklch(0.88 0.02 145)" }}
          >
            What makes us the trusted uniform manufacturing partner across Kenya.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-3"
          style={{ background: "oklch(1 0 0 / 0.12)", boxShadow: "var(--shadow-red)" }}
        >
          {features.map(({ i: Icon, t, d }, idx) => (
            <div
              key={t}
              className="group relative overflow-hidden p-7 transition-colors duration-300"
              style={{ background: "oklch(0.16 0.05 155)" }}
            >
              <span
                aria-hidden
                className="absolute right-5 top-4 text-5xl font-bold opacity-10 transition-opacity duration-300 group-hover:opacity-25"
                style={{ fontFamily: "var(--font-display)", color: "oklch(1 0 0)" }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: "var(--gradient-red)" }}
              />
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:-translate-y-0.5"
                style={{
                  background: "oklch(1 0 0 / 0.08)",
                  border: "1px solid oklch(1 0 0 / 0.14)",
                }}
              >
                <Icon className="h-5 w-5" style={{ color: "var(--accent-red)" }} />
              </span>
              <h3
                className="mt-5 text-base font-bold"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.99 0 0)" }}
              >
                {t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "oklch(0.84 0.02 145)" }}>
                {d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

