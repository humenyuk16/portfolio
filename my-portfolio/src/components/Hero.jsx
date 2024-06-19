import "../index.css";
import Typewriter from "./TypeWritter";

const Hero = () => {
  return (
    <section className="bg-bg-image flex items-center justify-center min-h-screen font-junge px-4">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-gray-800 tracking-widest">
            Hi, I'm Anastasiia
          </h1>
        </div>
        <div className="fancy-border-radius mx-auto flex items-center justify-center text-center my-4">
          <p className="text-6xl  text-gray-800 tracking-widest relative">
            <Typewriter
              text="a frontend developer"
              delay={300}
              infinite={true}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
