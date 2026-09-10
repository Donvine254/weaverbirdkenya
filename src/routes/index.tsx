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
import { SectionBand } from "@/components/section-band";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Weaverbird Garments Manufacturers Ltd" },
      {
        name: "description",
        content:
          "Premium school, corporate, security, sports and hospitality uniforms designed and manufactured in Kenya since 1996.",
      },
      {
        name: "keywords",
        content:
          "uniforms Kenya, garment manufacturers Kenya, school uniforms Kenya, corporate wear Kenya, security uniforms, hospitality uniforms, sports uniforms, workwear Kenya, overalls, medical scrubs Kenya, t-shirts and polo shirts, sweaters and fleece, tracksuits, sportswear, Maasai shukas, uniform manufacturers Thika, custom uniforms Nairobi, branded apparel Kenya, embroidery Kenya, screen printing Kenya, uniform supplier Kenya, Weaverbird Kenya",
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
      {
        property: "og:image",
        content:
          "https://res.cloudinary.com/dipkbpinx/image/upload/w_1200,h_630,c_fill,q_auto,f_jpg/v1788943972/weaverbird/mnpf4rlrru8sz3vzy6xl.jpg",
      },
      {
        name: "twitter:image",
        content:
          "https://res.cloudinary.com/dipkbpinx/image/upload/w_1200,h_630,c_fill,q_auto,f_jpg/v1788943972/weaverbird/mnpf4rlrru8sz3vzy6xl.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://weaverbirdkenya.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://weaverbirdkenya.lovable.app/#business",
          name: "Weaverbird Garments Manufacturers Ltd",
          url: "https://weaverbirdkenya.lovable.app/",
          telephone: "+254722264464",
          email: "info@weaverbirdkenya.com",
          foundingDate: "1996",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Off Thika-Garissa Highway, along Kianjau–Athena Road, near Broadway Secondary School",
            addressLocality: "Thika",
            addressCountry: "KE",
          },
          areaServed: "KE",
          description:
            "Uniform and apparel manufacturer in Thika, Kenya, with branches nationwide serving schools, corporates, security firms, hotels and sports teams.",
        }),
      },
    ],
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
        <SectionBand />
      </main>
      <Footer />
    </div>
  );
}
