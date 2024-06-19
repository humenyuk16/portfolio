import "../index.css";
import Typewriter from "./TypeWritter";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="bg-bg-image flex items-center justify-center min-h-screen font-junge px-4">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-gray-800 tracking-widest">
            Hi, I'm Anastasiia
          </h1>
        </div>
        <div
          className="fancy-border-radius mx-auto flex items-center justify-center text-center my-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="text-6xl  text-gray-800 tracking-widest relative">
            <Typewriter
              text="a frontend developer"
              delay={300}
              infinite={true}
              isHovered={isHovered}
            />
          </p>
        </div>
        <div className="mt-18">
          <button
            className="bg-text-color text-white font-bold px-9   py-4 rounded-lg hover:bg-bg-color"
            onClick={() => window.open("path/to/your/cv.pdf", "_blank")}
          >
            Explore CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
