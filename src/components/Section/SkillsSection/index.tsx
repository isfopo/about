import { Section } from "..";
import styles from "./index.module.css";

export interface Skill {
  name: string;
  level: number;
}

export interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <Section subject="skills" className={styles["skills"]}>
      <h3>Skills</h3>
      <div className={styles["container"]}>
        {skills.map(({ name, level }) => (
          <span className={styles["skill"]} key={name}>
            <label htmlFor={name}>{name}</label>
            <progress id={name} value={level} max={10} />
          </span>
        ))}
      </div>
    </Section>
  );
};
