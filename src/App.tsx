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
import { SECTIONS } from "consts";
import { Footer } from "components/Footer";

const name = "Isaac Poole";

const tag = "Full-Stack Software Developer";

const about = `Motivated by creativity and a passion for innovation, I fuse my backgrounds in software engineering and music to craft technology that's both functional and inspired.`;

// const skills: Skill[] = [
//   { name: "Typescript", level: 10 },
//   { name: "React", level: 10 },
//   { name: "C# / .NET Application Development", level: 8 },
//   { name: "Python", level: 7 },
// ];

// const additionalSkills: string[] = [
//   "Ableton Live API",
//   "Svelte",
//   "WebSockets",
//   "Stripe",
//   "Git",
//   "Github Actions",
//   "Cloudflare Workers",
//   "PostgreSQL",
//   "Express",
//   "Node.js",
//   "REST APIs",
//   "HTML",
//   "CSS",
//   "Sass",
//   "VS Code Extension API",
//   "Embedded Hardware",
// ];

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
      bio: "Switcher Studio is a Louisville-based live-video production platform that lets creators stream multi-camera content using iOS devices. Founded in 2014, it serves users in 115+ countries, has about 40–60 employees, and generates mid-seven-figure revenue.",
      description: [
        "Built a comprehensive media player leveraging React, TypeScript, and Redux with advanced features like Google Cast/AirPlay functionality, dynamic quality controls, responsive design, and extensive internationalization (i18n) support. This transformed basic video playback into a highly engaging and globally accessible streaming experience for creators and viewers, enhancing viewer engagement and retention.",
        "Developed robust end-to-end monetization systems using C#/.NET, Entity Framework, and MSSQL for the backend, integrated with Stripe for payment processing. This included implementing gated content, advanced subscription management with pause/resume capabilities, secure billing portals, and automated revenue processing across the entire platform. This work directly enabled creators to effectively monetize their content, diversifying revenue streams and supporting the platform's sustained growth.",
        "Redesigned and implemented livestream creation flows through intuitive, wizard-based interfaces built with React and TypeScript, enabling seamless multi-platform streaming to services like YouTube, Twitch, and Facebook. I also developed comprehensive video library management and streamlined content organization tools. This initiative drastically simplified the creator workflow, allowing for broader content distribution and more efficient media asset management, which increased creator productivity and satisfaction.",
        "Overhauled critical user experiences across dashboard and player interfaces, implementing responsive modal systems, enhanced onboarding flows, Google Fonts integration, and improved accessibility. I applied modern design patterns using React, TypeScript, and Tailwind CSS. This led to a significant boost in usability, visual appeal, and inclusivity across the platform, directly contributing to higher user satisfaction, reduced friction, and increased engagement.",
        "Developed a full-scale SaaS video platform encompassing frontend React applications, robust backend API services (C#/.NET), secure payment processing (Stripe), comprehensive analytics systems (Segment, Google Analytics), and efficient user management. This foundational work provided creators with a complete, scalable solution to monetize and distribute video content globally, establishing the core infrastructure for the company's product offerings and future expansion.",
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
    hide: true,
  },
  {
    title: "Environments",
    category: "programming",
    description:
      "A VS Code extension to manage environments from your .env files.",
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
      <>
        <Header sections={SECTIONS} socials={socials} />
        <AboutSection name={name} tag={tag} about={about} />
        <ExperienceSection {...experience} />
        <ProjectsSection projects={projects} />
        {/*<SkillsSection skills={skills} additionalSkills={additionalSkills} />*/}
        <ContactSection contacts={contacts} socials={socials} />
        <Footer socials={socials} />
      </>
    </>
  );
}

export default App;
