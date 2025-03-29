import { Section } from "components/Section";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Autoplay from "embla-carousel-autoplay";
import { PlatformIcons } from "./PlatformIcons";
import styles from "./index.module.css";

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
  const [emblaRef] = useEmblaCarousel({}, [Autoplay()]);

  return (
    <Section subject="projects" className={styles["projects"]}>
      <h1>Projects</h1>
      <div ref={emblaRef}>
        <div className={styles["container"]}>
          {projects.map(({ title, technologies, description, image, link }) => (
            <div key={title} className={styles["slide"]}>
              <h3>{title}</h3>

              <div className={styles["image-container"]}>
                <img src={image.src} aria-label={image.label} />
              </div>

              <p className={styles["description"]}>{description}</p>

              {technologies && technologies.length > 0 && (
                <p>
                  <strong>Technologies:</strong>
                  <br />
                  {technologies.join(", ")}
                </p>
              )}

              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`View ${title} on ${link.platform}`}
              >
                {PlatformIcons[link.platform]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
