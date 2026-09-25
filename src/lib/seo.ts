const SITE_NAME = "Weaver Bird Kenya";
const SITE_URL = "https://weaverbirdkenya.lovable.app";

interface SeoMetaOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function seoMeta({ title, description, path = "", image }: SeoMetaOptions) {
  const fullTitle = `${title} — ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return {
    meta: [
      { title: fullTitle },
      {
        name: "description",
        content: description,
      },
      {
        name: "author",
        content: "Weaverbird",
      },

      // Open Graph
      {
        property: "og:site_name",
        content: SITE_NAME,
      },
      {
        property: "og:title",
        content: fullTitle,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: url,
      },

      // Twitter / X
      {
        name: "twitter:card",
        content: image ? "summary_large_image" : "summary",
      },
      {
        name: "twitter:site",
        content: "@weaverbirdkenya",
      },
      {
        name: "twitter:title",
        content: fullTitle,
      },
      {
        name: "twitter:description",
        content: description,
      },

      ...(image
        ? [
            {
              property: "og:image",
              content: image,
            },
            {
              name: "twitter:image",
              content: image,
            },
          ]
        : []),
    ],

    links: [
      {
        rel: "canonical",
        href: url,
      },
    ],
  };
}
