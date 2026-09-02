import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://freitaseric.com",
  integrations: [react()],
  output: "static",
});
