import { Section } from "components/Section";
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
   * Currently, the image is not used in the component.
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
  /**
   * An optional boolean flag to hide the project from the section.
   * This can be used to temporarily remove a project from the section.
   */
  hide?: boolean;
}

export interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <Section subject="projects" className={styles["projects"]}>
      <h3>Projects</h3>
      <div className={styles["container"]}>
        {projects.map(({ title, technologies, description, link, hide }) => {
          if (hide) return <></>;

          return (
            <a
              key={title}
              className={styles["slide"]}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`View ${title} on ${link.platform}`}
            >
              <div>
                <h4>{title}</h4>

                <p className={styles["description"]}>{description}</p>

                {technologies && technologies.length > 0 && (
                  <>
                    <h5>Technologies:</h5>
                    <p>{technologies.join(", ")}</p>
                  </>
                )}
              </div>

              {PlatformIcons[link.platform]}
            </a>
          );
        })}
      </div>
    </Section>
  );
};
