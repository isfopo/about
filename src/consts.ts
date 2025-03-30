export const SECTIONS = [
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
] as const;

export type SectionType = (typeof SECTIONS)[number];

export const SectionLabels: Record<SectionType, string> = {
  about: "About",
  experience: "Experience",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
};
