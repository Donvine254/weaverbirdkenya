import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { services } from "@/data/services";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the garment manufacturing and branding services Weaverbird Kenya offers (embroidery, screen printing, tailoring and more), including key features and equipment.",
  inputSchema: {
    id: z
      .string()
      .trim()
      .optional()
      .describe("Optional service id, e.g. 'embroidery', to return a single service."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const query = id?.toLowerCase();
    const matches = query
      ? services.filter(
          (service) =>
            service.id.toLowerCase() === query ||
            service.title.toLowerCase().includes(query),
        )
      : services;

    const rows = matches.map((service) => ({
      id: service.id,
      title: service.title,
      tagline: service.tagline,
      description: service.description,
      features: service.features,
      equipment: service.equipment ?? [],
    }));

    return {
      content: [
        {
          type: "text" as const,
          text: rows.length
            ? rows
                .map(
                  (s) =>
                    `${s.title} (${s.id})\n${s.tagline}\n${s.description}\nHighlights: ${s.features.join("; ")}`,
                )
                .join("\n\n")
            : `No service matched "${id}".`,
        },
      ],
      structuredContent: { count: rows.length, services: rows },
    };
  },
});
