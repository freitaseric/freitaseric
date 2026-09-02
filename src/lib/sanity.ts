import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityProjectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID?.trim() || "";
export const sanityDataset = import.meta.env.PUBLIC_SANITY_DATASET?.trim() || "production";
export const sanityEnabled = Boolean(sanityProjectId);

export const sanityClient = sanityEnabled
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: "2026-09-01",
      useCdn: true,
    })
  : null;

const imageBuilder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function imageUrl(source: unknown, width = 1400) {
  if (!imageBuilder || !source) return undefined;
  return imageBuilder.image(source).width(width).auto("format").fit("max").url();
}
