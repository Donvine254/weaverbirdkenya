import { ChevronRight, ArrowRight } from "lucide-react";
import { ProductCategories } from "@/data/products";

/* ----------------- Products ----------------- */
export function Products() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Products
            <span className="mt-2 block h-1 w-12" style={{ background: "var(--accent-red)" }} />
          </h2>
          <p className="mt-3 text-muted-foreground">High quality. Custom made. Built to last.</p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-semibold"
          style={{ color: "var(--accent-red)" }}
        >
          View All Products <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ProductCategories.map(
          ({ id, image, name, description, icon: Icon }) => (
            <article
              key={id}
              className="group overflow-hidden rounded-2xl bg-card text-card-foreground transition hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  width={1402}
                  height={1122}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute bottom-3 left-3 grid h-9 w-9 place-items-center rounded-full bg-white shadow">
                  <Icon
                    className="h-4 w-4"
                    style={{ color: "var(--primary)" }}
                  />
                </span>
              </div>

              <div className="relative p-4">
                <h3 className="text-sm font-bold">{name}</h3>

                <p className="mt-1 text-xs text-muted-foreground">
                  {description}
                </p>

                <span
                  className="absolute -top-4 right-4 grid h-8 w-8 place-items-center rounded-full text-white shadow-md"
                  style={{ background: "var(--gradient-red)" }}
                >
                  <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}

