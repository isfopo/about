import {
  ExperienceSection,
  ExperienceSectionProps,
} from "components/Section/ExperienceSection";
import styles from "./index.module.css";
import { Project } from "components/Section/ProjectsSection";
import { Skill } from "components/Section/SkillsSection";
import { SocialPlatformLink } from "components/Socials";
import { Contacts } from "components/Section/ContactSection";
import { Frame } from "components/Frame";
import { ContactIcons } from "components/Section/ContactSection/ContactIcons";
import { ContactLabels } from "components/Section/ContactSection/ContactLabels";

export interface PrintableProps {
  ref: React.Ref<HTMLDialogElement>;
  name: string;
  tag: string;
  about: string;
  skills: Skill[];
  additionalSkills: string[];
  experience: ExperienceSectionProps;
  projects: Project[];
  contacts: Contacts;
  socials: SocialPlatformLink[];
}

export const Printable = ({
  ref,
  name,
  tag,
  about,
  skills,
  additionalSkills,
  experience,
  projects,
  contacts,
  socials,
}: PrintableProps) => {
  return (
    <dialog ref={ref} className={styles["printable"]}>
      <header className={styles["about"]}>
        <Frame src={"photos/mountain_portrait.jpg"} />
        <div className={styles["profile"]}>
          <h1>{name}</h1>
          <h2>{tag}</h2>
          <p>{about}</p>
        </div>
      </header>

      <div className={styles["content"]}>
        <div className={styles["col-left"]}>
          <h3>Contact</h3>
          <div className={styles["socials"]}>
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={`View ${label} profile`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className={styles["contacts"]}>
            {Object.keys(contacts).map((key) => {
              const value = contacts[key as keyof Contacts];
              const label = ContactLabels[key as keyof Contacts];
              const icon = ContactIcons[key as keyof Contacts];

              return (
                <a key={key} href={`${key}:${contacts[key as keyof Contacts]}`}>
                  <div className={styles["icon"]}>{icon}</div>
                  <div className={styles["text"]}>
                    <p>{label}</p>
                    <p>{value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className={styles["skills"]}>
            <h3>Skills</h3>
            <div className={styles["container"]}>
              {skills.map(({ name, level }) => (
                <span className={styles["skill"]} key={name}>
                  <label htmlFor={name}>{name}</label>
                  <progress id={name} value={level} max={10} />
                </span>
              ))}
            </div>
            <div className={styles["additional-skills"]}>
              <p>
                Additional Skills:{" "}
                <strong>{additionalSkills.join(" ⁃ ")}</strong>
              </p>
            </div>
          </div>
        </div>

        <div className={styles["col-right"]}>
          <ExperienceSection {...experience} />

          <div className={styles["projects"]}>
            <h3>Projects</h3>
            <div className={styles["container"]}>
              {projects.map(({ title, technologies, description, link }) => (
                <a
                  key={title}
                  className={styles["slide"]}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`View ${title} on ${link.platform}`}
                >
                  <h4>{title}</h4>

                  <p className={styles["description"]}>{description}</p>

                  {technologies && technologies.length > 0 && (
                    <p>
                      <strong>Technologies:</strong>
                      <br />
                      {technologies.join(", ")}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};
