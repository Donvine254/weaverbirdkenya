/* Downloads & Resources. To connect a document, drop the PDF into public/resources
   and set `file` (or set `href` for an on-site page). Cards without either show
   as "Coming soon". */

export type Resource = {
  id: string;
  title: string;
  description: string;
  button: string;
  /** Path to a PDF in /public */
  file?: string;
  /** Suggested filename when downloading */
  downloadName?: string;
  /** On-site page to open instead of a file */
  href?: string;
  /** Optional online alternative while the PDF isn't available */
  fallback?: { label: string; href: string };
  related?: { label: string; href: string };
};

export const RESOURCES: Resource[] = [
  {
    id: "catalogue",
    title: "Product Catalogue",
    description:
      "Explore our complete range of school uniforms, corporate wear, workwear, medical wear, hospitality uniforms, sportswear, promotional merchandise and more.",
    button: "Download Catalogue",
    file: "/resources/catalogue.pdf",
    downloadName: "Weaverbird-Product-Catalogue.pdf",
    related: { label: "Browse products", href: "/products" },
  },
  {
    id: "company-profile",
    title: "Company Profile",
    description:
      "Learn more about Weaverbird Garments Manufacturers, our history, manufacturing capabilities, product range, branch network and institutional experience.",
    button: "Download Company Profile",
    related: { label: "About Weaverbird", href: "/about" },
  },
  {
    id: "technical-data-sheet",
    title: "Technical Data Sheet",
    description:
      "View product materials, specifications, construction details and key garment features.",
    button: "Download Technical Data Sheet",
    file: "/resources/technical_datasheet.pdf",
    downloadName: "Weaverbird-Technical-Datasheet.pdf",
    related: { label: "Our services", href: "/services" },
  },
  {
    id: "size-guide",
    title: "Size Guide",
    description: "Use our sizing guide to select appropriate garment sizes and measurements.",
    button: "Download Size Guide",
    file: "/resources/size-guide.pdf",
    downloadName: "Garment-Size-Guide.pdf",
    related: { label: "Ask our team", href: "/contact" },
  },
  {
    id: "care-guide",
    title: "Uniform Care Guide",
    description:
      "Learn how to wash, dry, iron and care for uniforms to maintain their appearance and durability.",
    button: "Download Care Guide",
    fallback: { label: "Read the online guide", href: "/blog/uniform-care" },
  },
  {
    id: "returns-policy",
    title: "Returns & Exchange Policy",
    description: "Review our guidelines for product returns and exchanges.",
    button: "Download Policy",
    file: "/resources/return-and-exchange-policy.pdf",
    downloadName: "Weaverbird-Returns-and-Exchange-Policy.pdf",
  },
  {
    id: "environmental-policy",
    title: "Environmental Policy",
    description:
      "Learn about Weaverbird's approach to responsible manufacturing and environmental practices.",
    button: "View Policy",
    href: "/policies/environmental-policy",
  },
];
