import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";
import { portfolioStructure } from "./sanity/structure";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || "portfolio";
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "portfolio",
  title: "Portfólio — Eric Freitas",
  projectId,
  dataset,
  plugins: [structureTool({ structure: portfolioStructure })],
  schema: { types: schemaTypes },
  document: {
    actions: (actions, context) =>
      context.schemaType === "siteSettings"
        ? actions.filter(({ action }) => action !== "delete" && action !== "duplicate")
        : actions,
    newDocumentOptions: (templates, context) =>
      context.creationContext.type === "global"
        ? templates.filter(({ templateId }) => templateId !== "siteSettings")
        : templates,
  },
});
