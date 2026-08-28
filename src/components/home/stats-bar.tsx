import { MapPin, Award, ThumbsUp, Truck, Factory, Shirt } from "lucide-react";

/* ----------------- Stats ----------------- */
export function StatsBar() {
  const stats = [
    { i: Award, n: "30+", t: "Years Experience" },
    { i: Shirt, n: "1000+", t: "Garment Designs" },
    { i: ThumbsUp, n: "98%", t: "Client Satisfaction" },
    { i: MapPin, n: "13", t: "Branches Nationwide" },
    { i: Truck, n: "Fast", t: "Delivery Nationwide" },
    { i: Factory, n: "Factory", t: "Production" },
  ];
  return (
    <section className="hidden sm:block mx-auto -mt-8 max-w-7xl px-6">
      <div
        className="relative grid grid-cols-2 gap-3 rounded-2xl px-3 py-5 text-white sm:grid-cols-3 sm:gap-4 sm:px-4 sm:py-6 lg:grid-cols-6 border border-[#bf9b3f]"
        style={{ background: "var(--primary-deep)", boxShadow: "var(--shadow-card)" }}
      >
        {stats.map(({ i: Icon, n, t }) => (
          <div key={t} className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span
              className="grid aspect-square h-10 w-10 shrink-0 place-items-center rounded-full ring-1 sm:h-12 sm:w-12"
              style={{
                background: "oklch(0.20 0.07 155)",
                borderColor: "oklch(0.78 0.18 145 / 0.4)",
              }}
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "oklch(0.78 0.18 145)" }} />
            </span>
            <div className="min-w-0 leading-tight">
              <div
                className="break-words text-base font-bold sm:text-lg lg:text-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {n}
              </div>
              <div className="text-[10px] text-white/70 sm:text-xs">{t}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
