import "./App.css";
import { Nav } from "./components/Nav";
import { Section } from "./components/Section";

function App() {
  return (
    <>
      <Nav subjects={["About", "Projects"]} />
      <Section subject="About" />
      <Section subject="Projects" />
    </>
  );
}

export default App;
