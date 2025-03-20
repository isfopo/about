import { Section } from "..";
import { Frame } from "components/Frame";
import styles from "./index.module.css";

const name = "Isaac Poole";

const tag = "Full-Stack Software Developer";

const aboutMe = `Single-origin coffee bodega boys put a bird on it, edison bulb vice
          man braid ethical grailed shaman tumeric retro af vaporware. Pour-over
          subway tile neutral milk hotel, dreamcatcher mukbang sartorial
          drinking vinegar. Stumptown man bun hammock everyday carry twee
          selvage gochujang 8-bit tilde craft beer. Poke gatekeep tumeric
          selvage pitchfork mumblecore. Helvetica locavore sus franzen shabby
          chic big mood.`;

export const AboutSection = () => {
  return (
    <Section subject="about" className={styles["about"]}>
      <Frame src={"public/photos/mountain_portrait.jpg"} />
      <span>
        <h2>{name}</h2>
        <h3>{tag}</h3>
        <p>{aboutMe}</p>
      </span>
    </Section>
  );
};
