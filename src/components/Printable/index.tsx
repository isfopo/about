import { ExperienceSectionProps } from "components/Section/ExperienceSection";
import styles from "./index.module.css";
import { Project } from "components/Section/ProjectsSection";
import { Skill } from "components/Section/SkillsSection";
import { SocialPlatformLink } from "components/Socials";
import { Contacts } from "components/Section/ContactSection";

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

export const Printable = ({ ref }: PrintableProps) => {
  return (
    <dialog ref={ref} className={styles["printable"]}>
      <h1>Printable Resume</h1>
      <div className={styles["content"]}>
        {/* Add your content here */}
        <p>This is a printable version of the resume.</p>
      </div>
    </dialog>
  );
};
