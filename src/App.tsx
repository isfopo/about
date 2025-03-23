import "./App.css";
import { Header } from "components/Header";
import { SocialPlatformLink } from "components/Header/Socials";
import { AboutSection } from "components/Section/AboutSection";
import { ContactSection } from "components/Section/ContactSection";
import { Project, ProjectsSection } from "components/Section/ProjectsSection";
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

const skills: SkillProps[] = [
  { name: "Typescript", level: 10 },
  { name: "React", level: 10 },
];

const socials: SocialPlatformLink[] = [
  {
    label: "github",
    href: "https://www.github.com/isfopo",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/isaacpoole/",
  },
];

const projects: Project[] = [
  {
    title: "Grind",
    category: "programming",
    description: "A VS Code extension to keep track of tasks for the day.",
    image: {
      label: "Grind VS Code extension",
      src: "public/photos/mountain_portrait.jpg",
    },
    link: {
      platform: "github",
      href: "https://www.github.com/isfopo/grind",
    },
  },
  {
    title: "genra // non // genra",
    category: "music",
    description:
      "An experimental, electronic, improvisatory guitar and drum duo.",
    image: {
      label: "genra // non // genra",
      src: "public/photos/mountain_portrait.jpg",
    },
    link: {
      platform: "bandcamp",
      href: "https://genranongenra.bandcamp.com/album/18628",
    },
  },
];

function App() {
  return (
    <>
      <Header sections={SECTIONS} socials={socials} />
      <AboutSection name={name} tag={tag} about={about} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </>
  );
}

export default App;
