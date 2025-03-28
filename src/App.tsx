import "./App.css";
import { Header } from "components/Header";
import { SocialPlatformLink } from "components/Header/Socials";
import { AboutSection } from "components/Section/AboutSection";
import { Contact, ContactSection } from "components/Section/ContactSection";
import {
  ExperienceSection,
  ExperienceSectionProps,
} from "components/Section/ExperienceSection";
import { Project, ProjectsSection } from "components/Section/ProjectsSection";
import { Skill, SkillsSection } from "components/Section/SkillsSection";
import { SECTIONS } from "consts";

const name = "Isaac Poole";

const tag = "Full-Stack Software Developer";

const about = `A motivated individual with a strong passion for continuous learning and innovation.
Possessing a background in software engineering and music, I am driven by creativity and
dedicated to achieving excellence in my work and the technology I create.`;

const skills: Skill[] = [
  { name: "Typescript", level: 10 },
  { name: "React Frontend", level: 10 },
  { name: "C# / .NET Application Development", level: 8 },
  { name: "Python", level: 7 },
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
  {
    label: "bandcamp",
    href: "https://these-elements-combined.bandcamp.com/album/we-were-looking-for-transendence-in-the-eyes-of-our-lovers/",
  },
];

const experience: ExperienceSectionProps = {
  career: [
    {
      title: "Full-Stack Software Engineer",
      company: "Switcher Studio",
      location: "Remote",
      startDate: "May 2021",
      endDate: "Present",
      description: [
        "Engineered a scalable cloud service with Cloudflare Workers, facilitating precise user event tracking for advanced analytics insights.",
        "Mastered and championed engineering group's best practices and coding standards in JavaScript and React.",
        "Enhanced app on-boarding via React/Stripe experience, resulting in an increase in conversion rates.",
      ],
    },
  ],
  education: [
    {
      degree: "Full-stack Development - Associate's",
      institution: "Code Louisville / JCTCS",
      location: "Louisville, KY",
      startDate: "2019",
      endDate: "2021",
    },
    {
      degree: "Bachelor of Music",
      institution: "University of Louisville",
      location: "Louisville, KY",
      startDate: "2010",
      endDate: "2015",
    },
  ],
};

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
  {
    title: "These Elements Combined",
    category: "music",
    description: "sound \\ shape \\ place \\ memory",
    image: {
      label: "These Elements Combined",
      src: "public/photos/mountain_portrait.jpg",
    },
    link: {
      platform: "bandcamp",
      href: "https://these-elements-combined.bandcamp.com/album/we-were-looking-for-transendence-in-the-eyes-of-our-lovers",
    },
  },
];

const contact: Contact = {
  tel: "(502) 220-8265",
  mailto: "isaacpoolemusic@gmail.com",
};

function App() {
  return (
    <>
      <Header sections={SECTIONS} socials={socials} />
      <AboutSection name={name} tag={tag} about={about} />
      <ExperienceSection {...experience} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ContactSection {...contact} />
    </>
  );
}

export default App;
