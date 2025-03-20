import { Section } from "..";
import { Frame } from "components/Frame";
import styles from "./index.module.css";

export const AboutSection = () => {
  return (
    <Section subject="about" className={styles["about"]}>
      <Frame src={"public/photos/mountain_portrait.jpg"} />
      <span>
        <h2>Isaac Poole</h2>
        <p>
          Single-origin coffee bodega boys put a bird on it, edison bulb vice
          man braid ethical grailed shaman tumeric retro af vaporware. Pour-over
          subway tile neutral milk hotel, dreamcatcher mukbang sartorial
          drinking vinegar. Stumptown man bun hammock everyday carry twee
          selvage gochujang 8-bit tilde craft beer. Poke gatekeep tumeric
          selvage pitchfork mumblecore. Helvetica locavore sus franzen shabby
          chic big mood.
        </p>
      </span>
    </Section>
  );
};
