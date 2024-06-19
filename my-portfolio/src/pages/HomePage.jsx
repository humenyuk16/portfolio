import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SkillSet from "../components/SkillSet";

function HomePage() {
  return (
    <div className="w-dvw">
      <NavBar />
      <Hero />
      <About />
      <SkillSet />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default HomePage;
