import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative bg-[#0a0a0f] text-white overflow-hidden">
      {/* Animated circular gradient backgrounds */}
      <div
        className="gradient-bg-1 top-[-250px] left-[-250px] animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="gradient-bg-2 top-[30%] right-[-200px] animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="gradient-bg-3 bottom-[-300px] left-[20%] animate-float"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="gradient-bg-1 bottom-[20%] right-[10%] animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 pb-20 md:pb-0">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
