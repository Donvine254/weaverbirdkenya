import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { Products } from "@/components/home/products";
import { Features } from "@/components/home/features";
import { Manufacturing } from "@/components/home/manufacturing";
import { Industries } from "@/components/home/industries";
import { TrustedBy } from "@/components/home/trusted-by";
import { CtaBanner } from "@/components/home/cta-banner";
import Maasai from "@/components/home/maasai";
import OrderingProcess from "@/components/home/ordering";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Weaverbird Garments Manufacturers Ltd" },
      {
        name: "description",
        content:
          "Premium school, corporate, security, sports and hospitality uniforms designed and manufactured in Kenya since 1996.",
      },
      { property: "og:title", content: "Weaverbird Garments Manufacturers Ltd" },
      {
        property: "og:description",
        content:
          "Kenya's leading uniform & apparel manufacturer. From design to delivery, nationwide.",
      },
      { property: "og:url", content: "https://weaverbirdkenya.lovable.app/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://weaverbirdkenya.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      <Header />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <Products />
        <Maasai />
        <Features />
        {/* <Manufacturing /> */}

        <Industries />
        <TrustedBy />
        <OrderingProcess />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
