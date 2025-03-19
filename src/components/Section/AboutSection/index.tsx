import { Section } from "..";
import { Frame } from "components/Frame";

export const AboutSection = () => {
  return (
    <Section subject="about">
      <h1>About</h1>
      <Frame src={"public/photos/mountain_portrait.jpg"} />
    </Section>
  );
};
