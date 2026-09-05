import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Get Weaverbird Kenya's contact details, headquarters address, background and the link for requesting a uniform quote.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "Weaverbird Kenya",
      founded: 1996,
      summary:
        "Weaverbird Kenya is a Thika-based garment manufacturer producing school, corporate, security, hospitality, sports and PPE uniforms, with in-house embroidery, screen printing and tailoring.",
      phone: "+254 722 264 464",
      email: "info@weaverbirdkenya.com",
      headquarters:
        "Off Thika-Garissa Highway, along Kianjau-Athena Road, near Broadway Secondary School, Thika, Kenya",
      website: "https://weaverbirdkenya.lovable.app",
      quoteUrl: "https://weaverbirdkenya.lovable.app/quote",
      branchesUrl: "https://weaverbirdkenya.lovable.app/branches",
    };

    return {
      content: [
        {
          type: "text" as const,
          text: `${info.name} — founded ${info.founded}.\n${info.summary}\nPhone: ${info.phone}\nEmail: ${info.email}\nHead office: ${info.headquarters}\nRequest a quote: ${info.quoteUrl}`,
        },
      ],
      structuredContent: info,
    };
  },
});
