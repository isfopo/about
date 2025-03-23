import { Section } from "components/Section";
import Github from "assets/icons/github.svg?react";
import Bandcamp from "assets/icons/bandcamp.svg?react";

export type ProjectCategory = "programming" | "music";

export type ProjectLinkPlatform = "github" | "bandcamp";

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  image: {
    src: string;
    label: string;
  };
  link: {
    platform: ProjectLinkPlatform;
    href: `https://${string}.${string}.${string}`;
  };
}

export interface ProjectsSectionProps {
  projects: Project[];
}

export const PlatformIcons: Record<ProjectLinkPlatform, React.ReactElement> = {
  github: <Github />,
  bandcamp: <Bandcamp />,
};

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <Section subject="projects">
      <h1>Projects</h1>
      {projects.map(({ title, category, description, image, link }) => (
        <div key={title}>
          <img src={image.src} aria-label={image.label} />
          <h3>{title}</h3>
          <h4>{category}</h4>
          <p>{description}</p>
          <a href={link.href} target="_blank">
            {PlatformIcons[link.platform]}
          </a>
        </div>
      ))}
    </Section>
  );
};
