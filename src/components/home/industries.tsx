import { industries } from "@/assets/industries";

/* ----------------- Industries ----------------- */
export function Industries() {
  return (
    <section id="industries" className="py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-3.5 flex items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-maroon">
          &mdash; One Partner. Every Brand
        </div>
        <h2
          className="text-3xl font-bold sm:text-4xl tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Industries We Serve
        </h2>
        <p className="text-gray-500 my-2 leading-snug">
          Trusted by organizations across Kenya in every major sector.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6">
          {industries.map(({ icon: Icon, title, subtitle, image }) => (
            <div key={title} className="border border-[#bf9b3f] bg-maroon p-2 md:p-3">
              <div className="group relative h-48 lg:h-64 cursor-pointer overflow-hidden  shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b1e]/50 via-[#0d2b1e]/40 to-[#0d2b1e]/10" />

                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 pb-5">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-red-300 backdrop-blur-md">
                    <Icon size={18} className="text-red-500" />
                  </div>

                  <div className="text-center text-sm font-bold text-white">{title}</div>

                  <div className="mt-0.5 text-center text-xs text-white/60">{subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
