import { Section } from "components/Section";

import styles from "./index.module.css";
import { PlatformIcons } from "./PlatformIcons";
import useEmblaCarousel from "embla-carousel-react";

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

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <Section subject="projects" className={styles["projects"]}>
      <h1>Projects</h1>
      <div ref={emblaRef}>
        <div className={styles["container"]}>
          {projects.map(({ title, category, description, image, link }) => (
            <div key={title} className={styles["slide"]}>
              <div className={styles["snapper"]}></div>
              <img src={image.src} aria-label={image.label} />
              <h3>{title}</h3>
              <h4>{category}</h4>
              <p>{description}</p>
              <a href={link.href} target="_blank">
                {PlatformIcons[link.platform]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
