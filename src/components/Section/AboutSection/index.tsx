import { Section } from "..";
import { Frame } from "components/Frame";
import styles from "./index.module.css";

export interface AboutSectionProps {
  name: string;
  tag: string;
  about: string;
}

export const AboutSection = ({ name, tag, about }: AboutSectionProps) => {
  return (
    <Section subject="about" className={styles["about"]}>
      <Frame src={"photos/mountain_portrait.jpg"} />
      <div className={styles["container"]}>
        <h1>{name}</h1>
        <h2>{tag}</h2>
        <p>{about}</p>
      </div>
    </Section>
  );
};
