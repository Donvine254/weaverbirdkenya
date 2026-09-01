import { ChevronRight, Award, Truck, Smile, CircleStar, ArrowDownToLine } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { products } from "@/assets/uniforms";

/* ----------------- Hero ----------------- */
export function Hero() {
  const tiles = products
    .filter((product) => ["school", "corporate", "security", "sports"].includes(product.id))
    .map(({ title, img, icon }) => ({
      label: title,
      img,
      icon,
    }));
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <img
        src="https://res.cloudinary.com/dipkbpinx/image/upload/v1783869677/weaverbird/nmszxatomphtat2xspfs.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.13 0.05 155 / 0.92) 0%, oklch(0.13 0.05 155 / 0.5) 100%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div className="text-white">
          <h1
            className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Kenya's Leading
            <br />
            <span style={{ color: "oklch(0.78 0.18 145)" }}>Uniform &amp; Apparel</span>
            <br />
            Manufacturer
          </h1>
          <p className="mt-6 max-w-md text-white/75">
            From school uniforms to corporate branding, we design, manufacture and deliver premium
            apparel solutions across Kenya.
          </p>
          <ul className="mt-6 grid max-w-md grid-cols-2 gap-3 text-xs sm:text-sm text-white/85">
            {[
              { i: Award, t: "Established in 1996" },
              { i: Smile, t: "1M+ Happy Clients" },
              { i: Truck, t: "Nationwide Delivery" },
              { i: CircleStar, t: "Unbeatable Quality" },
            ].map(({ i: Icon, t }) => (
              <li key={t} className="flex items-center gap-2">
                <Icon className="h-4 w-4 shrink-0" style={{ color: "oklch(0.78 0.18 145)" }} />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/quote"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95 sm:w-auto bg-maroon"
              style={{
                boxShadow: "var(--shadow-red)",
              }}
            >
              Get a Bulk Quote
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="https://cdn.jsdelivr.net/gh/Donvine254/weaverbirdkenya@main/public/catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/30 px-3 py-3 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-maroon active:scale-95 sm:w-auto sm:px-6"
            >
              <ArrowDownToLine />
              Download Product Catalogue
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {tiles.map(({ label, img, icon: Icon }) => (
            <div key={label} className="group relative aspect-[5/4] overflow-hidden rounded-md animate-scale-in">
              <img
                src={img}
                alt={label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
                width={512}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <div className="grid h-6 w-6  place-items-center rounded-full bg-green-950 ring ring-white/80">
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-white">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
