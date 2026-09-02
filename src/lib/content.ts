import { fallbackProjects, fallbackSettings, type Project, type SiteSettings } from "../data/fallback";
import { sanityClient, sanityEnabled } from "./sanity";

const SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  name,
  role,
  heroTitle,
  heroBody,
  location,
  email,
  aboutTitle,
  aboutBody,
  githubUrl,
  linkedinUrl
}`;

const PROJECTS_QUERY = `*[_type == "project" && defined(slug.current)] | order(featured desc, year desc, order asc){
  _id,
  title,
  "slug": slug.current,
  eyebrow,
  summary,
  year,
  status,
  context,
  problem,
  solution,
  role,
  highlights,
  technologies,
  featured,
  coverImage,
  gallery
}`;

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!sanityEnabled || !sanityClient) return fallbackSettings;
  try {
    const value = await sanityClient.fetch<Partial<SiteSettings> | null>(SETTINGS_QUERY);
    return value ? { ...fallbackSettings, ...value } : fallbackSettings;
  } catch {
    return fallbackSettings;
  }
}

export async function getProjects(): Promise<Project[]> {
  if (!sanityEnabled || !sanityClient) return fallbackProjects;
  try {
    const value = await sanityClient.fetch<Project[]>(PROJECTS_QUERY);
    return value?.length ? value : fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug);
}

export const queries = { settings: SETTINGS_QUERY, projects: PROJECTS_QUERY };
