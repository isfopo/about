import "./App.css";
import { Nav } from "components/Nav";
import { AboutSection } from "components/Section/AboutSection";
import { ContactSection } from "components/Section/ContactSection";
import { ProjectsSection } from "components/Section/ProjectsSection";
import { SkillsSection } from "components/Section/SkillsSection";
import { SkillProps } from "components/Section/SkillsSection/Skill";
import { SECTIONS } from "consts";

const name = "Isaac Poole";

const tag = "Full-Stack Software Developer";

const about = `Single-origin coffee bodega boys put a bird on it, edison bulb vice
          man braid ethical grailed shaman tumeric retro af vaporware. Pour-over
          subway tile neutral milk hotel, dreamcatcher mukbang sartorial
          drinking vinegar. Stumptown man bun hammock everyday carry twee
          selvage gochujang 8-bit tilde craft beer. Poke gatekeep tumeric
          selvage pitchfork mumblecore. Helvetica locavore sus franzen shabby
          chic big mood.`;

const skills: SkillProps[] = [{ name: "Typescript", level: 10 }];

function App() {
  return (
    <>
      <Nav sections={SECTIONS} />
      <AboutSection name={name} tag={tag} about={about} />
      <SkillsSection skills={skills} />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;
