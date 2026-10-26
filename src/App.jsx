import Skills from "./components/Skills";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CompanyWork from "./components/CompanyWork";
import Footer from "./components/Footer";
import Work_eaperience from "./components/Work_experience";
import Contact from "./components/Contact";
import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import GoToTop from "./components/GoToTop";
import ScrollProgress from "./components/ScrollProgress";
import Marquee from "./components/Marquee";
import { setLenisInstance } from "./lib/scroll";

function App() {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.09, smoothWheel: true }}
      ref={setLenisInstance}
    >
      <div className="app_class min-h-screen bg-white text-gray-900" style={{ fontFamily: "Poppins" }}>
        <ScrollProgress />
        <Navbar />
        <div id="home" className="pt-1">
          <Hero />
        </div>

        <Marquee />

        <div id="about" className="pt-6">
          <About />
        </div>

        <div id="skills" className="pt-2">
          <Skills />
        </div>

        <div id="company-work" className="pt-2">
          <CompanyWork />
        </div>

        <div id="projects" className="pt-2">
          <Projects />
        </div>

        <div id="experience" className="pt-0">
          <Work_eaperience />
        </div>

        <div id="contact" className="pt-1">
          <Contact />
        </div>
        <Footer />

        <GoToTop />
      </div>
    </ReactLenis>
  );
}

export default App;
