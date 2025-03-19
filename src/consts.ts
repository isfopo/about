export const SECTIONS = ["about", "projects", "contact"] as const;

export type SectionType = (typeof SECTIONS)[number];

export const SectionLabels: Record<SectionType, string> = {
  about: "About",
  projects: "Projects",
  contact: "Contact",
};
