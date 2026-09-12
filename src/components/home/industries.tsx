import { industries } from "@/data/industries";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Users, ChartNoAxesColumnIncreasing } from "lucide-react";

/* ----------------- Industries ----------------- */
export function Industries() {
  return (
    <section id="industries" className="pt-10 sm:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-maroon">
            <span className="h-px w-8 bg-maroon" />
            One Partner. Every Brand
          </div>

          <h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Industries We Serve
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">
            Quality uniforms and workwear trusted by organizations across Kenya in every major
            sector.
          </p>
        </div>

        {/* ---------------- Mobile ---------------- */}
        <div className="mt-7 space-y-2.5 sm:hidden">
          {industries.map(({ icon: Icon, title, subtitle, image, link }) => (
            <Link
              key={title}
              to={link}
               aria-label={`Explore ${title}`}
              className="group flex items-center overflow-hidden rounded-xl border border-black/[0.06] bg-white shadow-sm transition hover:shadow-md"
            >
              {/* Image */}
              <div className="h-[76px] w-[92px] shrink-0 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-maroon text-white">
                  <Icon size={16} strokeWidth={1.8} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-bold text-foreground">{title}</h3>

                  <p className="mt-0.5 truncate text-[11px] text-gray-500">{subtitle}</p>
                </div>

                <ArrowRight
                  size={16}
                  className="shrink-0 cursor-pointer text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-maroon"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* ---------------- Tablet / Desktop ---------------- */}
        <div className="mt-8 hidden grid-cols-2 gap-4 sm:grid lg:grid-cols-3">
          {industries.map(({ icon: Icon, title, subtitle, image, link }) => (
            <Link
              key={title}
              to={link}
              aria-label={`Explore ${title}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              {/* Icon */}
              <div className="absolute bottom-[74px] left-4 flex h-10 w-10 items-center justify-center rounded-full bg-maroon text-white shadow-lg ring-1 ring-white/20 sm:left-5">
                <Icon size={18} strokeWidth={1.8} />
              </div>

              {/* Text */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-tight text-white lg:text-lg">
                    {title}
                  </h3>

                  <p className="mt-1 line-clamp-1 text-xs text-white/75 lg:text-sm">{subtitle}</p>
                </div>

                {/* Arrow */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-foreground shadow-sm transition-all duration-300 group-hover:bg-maroon group-hover:text-white">
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 cursor-pointer"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ---------------- Trust strip ---------------- */}
        <div className="mt-5 hidden rounded-2xl bg-maroon/[0.045] px-6 py-5 sm:grid sm:grid-cols-3 lg:px-10">
          <div className="flex items-center gap-4 border-r border-maroon/15 pr-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center text-maroon">
              <Users size={25} strokeWidth={1.7} />
            </div>

            <div>
              <p className="text-sm font-bold text-foreground">Trusted by Organizations</p>
              <p className="mt-0.5 text-xs text-gray-500">Across Africa</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-r border-maroon/15 px-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center text-maroon">
              <ShieldCheck size={25} strokeWidth={1.7} />
            </div>

            <div>
              <p className="text-sm font-bold text-foreground">Quality & Reliability</p>
              <p className="mt-0.5 text-xs text-gray-500">Uniforms you can depend on</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pl-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center text-maroon">
              <ChartNoAxesColumnIncreasing size={25} strokeWidth={1.7} />
            </div>

            <div>
              <p className="text-sm font-bold text-foreground">Solutions for Every Sector</p>
              <p className="mt-0.5 text-xs text-gray-500">From schools to industry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
