import { Section } from "..";
import { Frame } from "components/Frame";
import ImageBackground from "assets/backgrounds/radiant_gradient.svg?react";
import Background from "assets/backgrounds/wave_background.svg?react";
import styles from "./index.module.css";

export interface AboutSectionProps {
  name: string;
  tag: string;
  about: string;
}

export const AboutSection = ({ name, tag, about }: AboutSectionProps) => {
  return (
    <Section subject="about" className={styles["about"]}>
      <Frame src={"photos/hero.webp"} background={<ImageBackground />} />
      <div className={styles["container"]}>
        <h1>{name}</h1>
        <h2>{tag}</h2>
        <p>{about}</p>
      </div>
      <Background className={styles["background"]} />
    </Section>
  );
};
