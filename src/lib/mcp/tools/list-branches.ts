import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { branches } from "@/data/branches";

export default defineTool({
  name: "list_branches",
  title: "List branches",
  description:
    "List Weaverbird Kenya shops and the Thika headquarters/factory, with phone number, address, opening hours and map link. Optionally filter by town or branch name.",
  inputSchema: {
    search: z
      .string()
      .trim()
      .optional()
      .describe("Optional town or branch name to filter by, e.g. 'Nairobi'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ search }) => {
    const query = search?.toLowerCase();
    const matches = query
      ? branches.filter(
          (branch) =>
            branch.name.toLowerCase().includes(query) ||
            branch.address.toLowerCase().includes(query),
        )
      : branches;

    const rows = matches.map((branch) => ({
      name: branch.name,
      type: branch.type,
      phone: branch.phone,
      address: branch.address,
      hours: branch.hours,
      map: branch.map,
      coordinates: { lat: branch.coords[0], lng: branch.coords[1] },
    }));

    return {
      content: [
        {
          type: "text" as const,
          text: rows.length
            ? rows
                .map(
                  (b) =>
                    `${b.name} (${b.type})\nPhone: ${b.phone}\nAddress: ${b.address}\nMon-Fri: ${b.hours.monday_friday} | Sat: ${b.hours.saturday} | Sun: ${b.hours.sunday}\nMap: ${b.map}`,
                )
                .join("\n\n")
            : `No branch matched "${search}".`,
        },
      ],
      structuredContent: { count: rows.length, branches: rows },
    };
  },
});
