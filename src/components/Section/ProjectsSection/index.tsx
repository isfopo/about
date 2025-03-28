import { Section } from "components/Section";

import styles from "./index.module.css";
import { PlatformIcons } from "./PlatformIcons";
import useEmblaCarousel from "embla-carousel-react";

export type ProjectCategory = "programming" | "music";

export type ProjectLinkPlatform = "github" | "bandcamp";

export interface Project {
  /**
   * The title of the project.
   * This should be a clear and concise name that represents the project.
   */
  title: string;
  /**
   * The category of the project.
   * This should indicate the type of project, such as programming or music.
   */
  category: ProjectCategory;
  /** Optional array of technologies used in the project */
  technologies?: string[];
  /**
   * A short description of the project.
   * This should be concise and give a clear idea of what the project is about.
   */
  description: string;
  /**
   * An image object that contains the source URL and an aria-label for accessibility.
   * This image should represent the project visually.
   */
  image: {
    src: string;
    label: string;
  };
  /**
   * A link object that contains the platform and the URL.
   * This should point to the live project or its repository.
   */
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
          {projects.map(({ title, technologies, description, image, link }) => (
            <div key={title} className={styles["slide"]}>
              <div className={styles["snapper"]}></div>
              <img src={image.src} aria-label={image.label} />
              <h3>{title}</h3>
              {technologies && technologies.length > 0 && (
                <p>
                  <strong>Technologies:</strong> {technologies.join(", ")}
                </p>
              )}
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
