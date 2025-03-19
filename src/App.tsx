import "./App.css";
import { Nav } from "components/Nav";
import { AboutSection } from "components/Section/AboutSection";
import { ContactSection } from "components/Section/ContactSection";
import { ProjectsSection } from "components/Section/ProjectsSection";
import { SECTIONS } from "consts";

function App() {
  return (
    <>
      <Nav sections={SECTIONS} />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;
