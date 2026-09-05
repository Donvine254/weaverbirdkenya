import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { AllProductCategories } from "@/data/products";

type Category = (typeof AllProductCategories.categories)[number];

export default defineTool({
  name: "list_products",
  title: "List products",
  description:
    "List the uniform categories Weaverbird Kenya makes (school, corporate, security, hospitality, sportswear, PPE) and the garments in each category.",
  inputSchema: {
    category: z
      .string()
      .trim()
      .optional()
      .describe("Optional category id or name, e.g. 'school-uniforms' or 'security'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const query = category?.toLowerCase();
    const categories: Category[] = query
      ? AllProductCategories.categories.filter(
          (c) => c.id.toLowerCase().includes(query) || c.name.toLowerCase().includes(query),
        )
      : AllProductCategories.categories;

    const rows = categories.map((c) => ({
      id: c.id,
      name: c.name,
      pitch: c.pitch,
      tagsLabel: c.tagsLabel,
      tags: c.tags,
      products: c.products.map((p) => ({ name: p.name, description: p.text })),
    }));

    return {
      content: [
        {
          type: "text" as const,
          text: rows.length
            ? rows
                .map(
                  (c) =>
                    `${c.name} (${c.id})\n${c.pitch}\n${c.tagsLabel}: ${c.tags.join(", ")}\nItems: ${c.products.map((p) => p.name).join(", ")}`,
                )
                .join("\n\n")
            : `No product category matched "${category}".`,
        },
      ],
      structuredContent: { count: rows.length, categories: rows },
    };
  },
});
