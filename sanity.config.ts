import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || "portfolio";
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "portfolio",
  title: "Portfólio — Eric Freitas",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
