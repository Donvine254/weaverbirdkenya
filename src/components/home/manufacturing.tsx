import { Truck, PencilRuler, Scissors, Sparkles, ShieldCheck, Factory } from "lucide-react";

/* ----------------- Manufacturing ----------------- */
export function Manufacturing() {
  const steps = [
    {
      i: PencilRuler,
      t: "Design",
      s: "Concept & Mockups",
      d: "We translate your brand into tech packs, fabric picks and approved mockups.",
    },
    {
      i: Scissors,
      t: "Production",
      s: "Cutting & Stitching",
      d: "Precision cutting and industrial stitching lines built for volume orders.",
    },
    {
      i: Sparkles,
      t: "Branding",
      s: "Embroidery & Printing",
      d: "In-house embroidery, screen and heat-transfer printing on every garment.",
    },
    {
      i: ShieldCheck,
      t: "Quality Control",
      s: "Inspection",
      d: "Multi-point inspection on stitching, sizing, colour-fastness and finish.",
    },
    {
      i: Truck,
      t: "Delivery",
      s: "Nationwide Delivery",
      d: "Packed, labelled and dispatched to any county in Kenya, on schedule.",
    },
  ];
  return (
    <section id="manufacturing" className="relative overflow-hidden py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-[0.07]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, var(--accent-red), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div>
          <span
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground"
          >
            <Factory className="h-3.5 w-3.5" style={{ color: "var(--accent-red)" }} />
            From sketch to shipment
          </span>
          <h2
            className="mt-4 text-3xl font-bold sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Manufacturing Process
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Five controlled stages inside our Thika factory — every order tracked end to end.
          </p>
        </div>

        <ol
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0"
          style={{ scrollbarWidth: "none" }}
        >
          {steps.map(({ i: Icon, t, s, d }, idx) => (
            <li
              key={t}
              className="group relative min-w-[16rem] snap-center overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 lg:min-w-0"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <span
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: "var(--gradient-red)" }}
              />
              <span
                className="pointer-events-none absolute right-3 top-3 text-5xl font-extrabold leading-none text-foreground/[0.08] transition-colors duration-300 group-hover:text-foreground/[0.12]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              <span
                className="grid aspect-square h-12 w-12 shrink-0 place-items-center rounded-xl transition-colors duration-300"
                style={{ background: "oklch(0.66 0.22 25 / 0.12)" }}
              >
                <Icon className="h-5 w-5" style={{ color: "var(--accent-red)" }} />
              </span>

              <h3 className="mt-4 text-base font-bold text-foreground">{t}</h3>
              <div
                className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider"
                style={{ color: "var(--accent-red)" }}
              >
                {s}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

