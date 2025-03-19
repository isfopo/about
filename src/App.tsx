import "./App.css";
import { Nav } from "./components/Nav";
import { Section } from "./components/Section";
import { AboutSection } from "./components/Section/AboutSection";

export const SECTIONS = ["about", "projects", "contact"] as const;

function App() {
  return (
    <>
      <Nav sections={SECTIONS} />
      <AboutSection />
      <Section subject="Projects" />
    </>
  );
}

export default App;
