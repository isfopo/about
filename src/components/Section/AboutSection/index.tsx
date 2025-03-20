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
      <Frame src={"public/photos/mountain_portrait.jpg"} />
      <span>
        <h2>{name}</h2>
        <h3>{tag}</h3>
        <p>{about}</p>
      </span>
    </Section>
  );
};
