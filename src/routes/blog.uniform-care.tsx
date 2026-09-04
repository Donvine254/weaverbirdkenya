import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, ReceiptText } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/page-hero";

const TITLE = "Uniform Care: How to Remove Common Stains";
const DESCRIPTION =
  "A practical guide to removing oil, grease, ink, blood, grass and sweat stains from school, corporate and workwear uniforms, plus washing tips that keep colours strong.";
const URL = "https://weaverbirdkenya.lovable.app/blog/uniform-care";

export const Route = createFileRoute("/blog/uniform-care")({
  head: () => ({
    meta: [
      { title: "Uniform Care: How to Remove Common Stains" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESCRIPTION,
          mainEntityOfPage: URL,
          author: {
            "@type": "Organization",
            name: "Weaverbird Garments Manufacturers Ltd",
          },
          publisher: {
            "@type": "Organization",
            name: "Weaverbird Garments Manufacturers Ltd",
            url: "https://weaverbirdkenya.lovable.app/",
          },
        }),
      },
    ],
  }),
  component: UniformCarePage,
});

type Stain = {
  name: string;
  cause: string;
  steps: string[];
  avoid: string;
};

const stains: Stain[] = [
  {
    name: "Oil and grease",
    cause: "Machine oil, cooking fat, chain grease and engine splashes on workwear and kitchen uniforms.",
    steps: [
      "Blot the excess with a paper towel — never rub, it pushes oil deeper into the weave.",
      "Cover the mark with a spoonful of dry cornflour, talc or baking soda and leave it 20–30 minutes to draw the oil out, then brush it off.",
      "Work a drop of dishwashing liquid into the stain with your fingers and leave it 10 minutes.",
      "Wash at the hottest temperature the care label allows, then air dry and check before ironing.",
    ],
    avoid: "Do not tumble dry or iron until the mark is gone; heat sets oil permanently.",
  },
  {
    name: "Ink and pen marks",
    cause: "Biro leaks in shirt pockets and school uniform sleeves.",
    steps: [
      "Lay the garment stain-side down on a folded cloth so the ink transfers out, not through.",
      "Dab the back of the stain with surgical spirit or clear hand sanitiser using a clean cloth.",
      "Move to a clean part of the cloth as ink lifts, so you never redeposit it.",
      "Rinse in cold water and wash as normal.",
    ],
    avoid: "Avoid scrubbing in circles — it spreads the ink into a wider grey halo.",
  },
  {
    name: "Blood",
    cause: "Cuts and nosebleeds, common on school and hospitality uniforms.",
    steps: [
      "Rinse immediately under cold running water from the back of the fabric.",
      "Soak in cold salted water (a tablespoon of salt per litre) for 30 minutes.",
      "Rub in a little bar soap or an enzyme detergent and leave 10 minutes.",
      "Wash cold; repeat before drying if a shadow remains.",
    ],
    avoid: "Never use hot water — it cooks the protein in blood and locks the stain into the fibres.",
  },
  {
    name: "Grass and mud",
    cause: "Sports kit, games lessons and site work.",
    steps: [
      "Let mud dry completely, then knock and brush off the crust before any water touches it.",
      "Pre-treat green grass marks with a paste of detergent and a little white vinegar; leave 15 minutes.",
      "Wash with an oxygen-based (colour-safe) booster.",
    ],
    avoid: "Do not wet mud first; it turns a surface crust into a deep-set brown stain.",
  },
  {
    name: "Sweat and deodorant build-up",
    cause: "Yellowing collars and stiff white patches under the arms of shirts and blouses.",
    steps: [
      "Soak the area in a solution of one part white vinegar to four parts warm water for 30 minutes.",
      "Scrub gently with a soft brush and a paste of baking soda and water.",
      "Wash as normal and dry in shade rather than direct sun.",
    ],
    avoid: "Chlorine bleach makes underarm yellowing worse on white cotton, not better.",
  },
  {
    name: "Food, tea and soft drinks",
    cause: "Break-time spills on school uniforms and service staff aprons.",
    steps: [
      "Flush the back of the stain with cold water as soon as possible.",
      "Rub in liquid detergent and leave 15 minutes.",
      "For stubborn tea or juice marks, soak in an oxygen booster for a few hours before washing.",
    ],
    avoid: "Hot water on sugary drinks caramelises the sugar and darkens the mark.",
  },
];

const habits = [
  "Turn garments inside out before washing to protect embroidery, badges and printed logos.",
  "Wash dark colours separately and cold for the first few washes to hold the dye.",
  "Skip fabric softener on polyester blends and reflective workwear — it coats the fibres and dulls performance.",
  "Dry uniforms in shade; strong Kenyan sun fades navy, maroon and black fastest.",
  "Iron embroidered areas from the reverse side, or place a cotton cloth over the badge.",
  "Rotate two or three sets per person so each has a full day to dry and recover its shape.",
];

function UniformCarePage() {
  return (
    <div className="min-h-dvh bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Uniform Care Guide"
          icon={Droplets}
          image="https://res.cloudinary.com/dipkbpinx/image/upload/v1788328706/weaverbird/products/ub4oimqxtr0pab3h7rg7.jpg"
          title={
            <>
              How to Remove <span style={{ color: "oklch(0.78 0.18 145)" }}>Common Stains</span>
            </>
          }
          subtitle="Uniforms are built to last, but only if they are cared for well. Here is how our production team treats the stains that shorten a uniform's life fastest."
        />

        <article className="mx-auto max-w-3xl px-6 py-14 lg:py-20">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Before you start
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Three rules cover almost every stain: act quickly, work from the back of the fabric so
            the stain travels out rather than through, and keep heat away until the mark is gone. A
            garment that has been tumble dried or ironed over a stain is far harder to rescue.
            Always test any treatment on an inside seam first, and check the care label sewn into
            the garment.
          </p>

          <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Stain-by-stain
          </h2>
          <div className="mt-6 space-y-6">
            {stains.map((stain) => (
              <section
                key={stain.name}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_1px_2px_rgba(13,43,30,0.04),0_12px_32px_-16px_rgba(13,43,30,0.15)]"
              >
                <h3 className="text-lg font-bold text-foreground">{stain.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{stain.cause}</p>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-foreground/85">
                  {stain.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <p className="mt-4 text-sm font-medium text-maroon">{stain.avoid}</p>
              </section>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Habits that make uniforms last longer
          </h2>
          <ul className="mt-6 space-y-3">
            {habits.map((habit) => (
              <li key={habit} className="flex gap-3 text-sm text-foreground/85 sm:text-base">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "oklch(0.70 0.18 150)" }}
                  aria-hidden="true"
                />
                {habit}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            When a uniform is past saving
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Thinning fabric at the knees and elbows, a collar that no longer sits flat, or a stain
            that has survived three treatments usually means replacement is cheaper than more
            effort. We keep patterns and measurements on file, so repeat sets for a school or
            company can be produced without starting the sizing from scratch.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/quote"
              className="group inline-flex items-center gap-2 rounded-md bg-maroon px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
              style={{ boxShadow: "var(--shadow-red)" }}
            >
              <ReceiptText className="h-4 w-4" />
              Request replacement sets
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md border border-black/10 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-black/5"
            >
              Browse our uniforms
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
