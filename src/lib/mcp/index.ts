import { defineMcp } from "@lovable.dev/mcp-js";

import getCompanyInfoTool from "./tools/get-company-info";
import listBranchesTool from "./tools/list-branches";
import listProductsTool from "./tools/list-products";
import listServicesTool from "./tools/list-services";

export default defineMcp({
  name: "weaverbird-kenya",
  title: "Weaverbird Kenya",
  version: "0.1.0",
  instructions:
    "Public tools for Weaverbird Kenya, a Kenyan uniform manufacturer. Use `get_company_info` for contact details, `list_branches` for shop locations and opening hours, `list_services` for manufacturing and branding services, and `list_products` for uniform categories and garments.",
  tools: [getCompanyInfoTool, listBranchesTool, listServicesTool, listProductsTool],
});
