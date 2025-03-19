import "./App.css";
import { Nav } from "./components/Nav";
import { AboutSection } from "./components/Section/AboutSection";
import { ProjectsSection } from "./components/Section/ProjectsSection";

export const SECTIONS = ["about", "projects", "contact"] as const;

function App() {
  return (
    <>
      <Nav sections={SECTIONS} />
      <AboutSection />
      <ProjectsSection />
    </>
  );
}

export default App;
