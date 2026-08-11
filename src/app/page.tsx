import Hero from "../components/Hero";
import About from "../components/About";
import SkillsTree from "../components/SkillsTree";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsTree />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
