import { Section } from "..";
import { Frame } from "components/Frame";
import styles from "./index.module.css";

export const AboutSection = () => {
  return (
    <Section subject="about" className={styles["about"]}>
      <Frame src={"public/photos/mountain_portrait.jpg"} />
      <span>
        <h2>Isaac Poole</h2>
      </span>
    </Section>
  );
};
