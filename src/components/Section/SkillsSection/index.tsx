import { Section } from "..";
import styles from "./index.module.css";
import { Skill, SkillProps } from "./Skill";

export interface SkillsSectionProps {
  skills: SkillProps[];
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <Section subject="skills" className={styles["section"]}>
      <h2>Skills</h2>
      <span>
        {skills.map((skill) => (
          <Skill {...skill} />
        ))}
      </span>
    </Section>
  );
};
