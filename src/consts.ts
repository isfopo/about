export const SECTIONS = ["about", "skills", "projects", "contact"] as const;

export type SectionType = (typeof SECTIONS)[number];

export const SectionLabels: Record<SectionType, string> = {
  about: "About",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
};
