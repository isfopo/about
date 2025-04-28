import "./App.css";
import { Header } from "components/Header";
import { SocialPlatformLink } from "components/Socials";
import { AboutSection } from "components/Section/AboutSection";
import { Contacts, ContactSection } from "components/Section/ContactSection";
import {
  ExperienceSection,
  ExperienceSectionProps,
} from "components/Section/ExperienceSection";
import { Project, ProjectsSection } from "components/Section/ProjectsSection";
import { Skill, SkillsSection } from "components/Section/SkillsSection";
import { SECTIONS } from "consts";
import { Footer } from "components/Footer";

const name = "Isaac Poole";

const tag = "Full-Stack Software Developer";

const about = `Motivated by creativity and a passion for innovation, I fuse my backgrounds in software engineering and music to craft technology that's both functional and inspired.`;

const skills: Skill[] = [
  { name: "Typescript", level: 10 },
  { name: "React", level: 10 },
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
        "Mastered and championed engineering group's best practices and coding standards in TypeScript and React.",
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
    title: "Live Remote",
    category: "programming",
    description: "Control Ableton Live from any device on a local network.",
    technologies: ["Python", "WebSockets", "Ableton Live API", "Svelte"],
    image: {
      label: "Live Remote Project",
      src: "photos/mountain_portrait.jpg",
    },
    link: {
      platform: "github",
      href: "https://www.github.com/isfopo/live-remote",
    },
  },
  {
    title: "Allflow",
    category: "programming",
    description:
      "Allflow is a set of utilities for writing clean and easy to read JSX. It provides a set of components that can be used in the place of common React patterns the would normally disrupt the flow of the JSX in your codebase.",
    image: { label: "Allflow Project", src: "photos/mountain_portrait.jpg" },
    technologies: ["TypeScript", "React", "JSX", "Github Actions"],
    link: {
      platform: "github",
      href: "https://www.github.com/isfopo/allflow",
    },
  },
  {
    title: "Grind",
    category: "programming",
    description: "A VS Code extension to keep track of tasks for the day.",
    technologies: ["TypeScript", "VS Code Extension API"],
    image: {
      label: "Grind VS Code extension",
      src: "photos/mountain_portrait.jpg",
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
      src: "photos/mountain_portrait.jpg",
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
      src: "photos/projects/these-elements-combined.png",
    },
    link: {
      platform: "bandcamp",
      href: "https://these-elements-combined.bandcamp.com/album/we-were-looking-for-transendence-in-the-eyes-of-our-lovers",
    },
  },
];

const contacts: Contacts = {
  tel: "(502) 220-8265",
  mailto: "isaacpoolemusic@gmail.com",
};

function App() {
  return (
    <>
      <Header sections={SECTIONS} socials={socials} />
      <AboutSection name={name} tag={tag} about={about} />
      <SkillsSection skills={skills} />
      <ExperienceSection {...experience} />
      <ProjectsSection projects={projects} />
      <ContactSection contacts={contacts} socials={socials} />
      <Footer socials={socials} />
    </>
  );
}

export default App;
