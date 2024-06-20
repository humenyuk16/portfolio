import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import SkillSet from "../components/SkillSet";
import TestHero from "../components/TestHero";
import ScrollToTop from "../components/ScrollToTop";

function HomePage() {
  return (
    <div className="w-dvw ">
      <TestHero />
      <About />
      <SkillSet />
      <Projects />
      <Contact />
      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default HomePage;
