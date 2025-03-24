import { Section } from "components/Section";
import styles from "./index.module.css";

export const ExperienceSection = () => {
  return (
    <Section subject="experience" className={styles["experience"]}>
      <h1>Experience</h1>
      <div className={styles["container"]}>
        <p>Coming soon...</p>
      </div>
    </Section>
  );
};
