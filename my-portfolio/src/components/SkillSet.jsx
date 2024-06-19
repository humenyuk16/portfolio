import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import css from "../../public/assets/icons/css.png";
import html from "../../public/assets/icons/cart.png";
import javascript from "../../public/assets/icons/javascript.png";
import react from "../../public/assets/icons/react.png";
import tailwind from "../../public/assets/icons/tailwind-css.png";
import git from "../../public/assets/icons/git.png";
import node from "../../public/assets/icons/node.png";
import figma from "../../public/assets/icons/figma.png";

const SkillSet = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill mb-10 mt-20" id="skills">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 font-junge text-gray-800 ">
            Skills
          </h2>
          <p className="text-lg text-gray-800 font-junge">
            In the ever-evolving world of technology, my toolkit is a blend of
            creativity, technical prowess, and a relentless pursuit of
            excellence.
            <br />
            Here’s a glimpse into the skills that empower me to transform ideas
            into impactful digital experiences:
          </p>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          className="skill-slider font-junge"
        >
          <div className="item flex flex-col items-center ">
            <img src={html} alt="HTML" className="mb-4 w-16 h-16" />
            <h5 className="text-lg font-medium">HTML</h5>
            <p className="text-sm text-gray-500 text-center mt-2">
              The backbone of web content, providing structure and meaning.
            </p>
          </div>
          <div className="item flex flex-col items-center">
            <img src={css} alt="CSS" className="mb-4 w-16 h-16" />
            <h5 className="text-lg font-medium">CSS</h5>
            <p className="text-sm text-gray-500 text-center mt-2">
              Bringing designs to life with style, layout, and responsiveness.
            </p>
          </div>
          <div className="item flex flex-col items-center">
            <img src={javascript} alt="JavaScript" className="mb-4 w-16 h-16" />
            <h5 className="text-lg font-medium">JavaScript</h5>
            <p className="text-sm text-gray-500 text-center mt-2">
              Making web pages interactive and dynamic with powerful scripting.
            </p>
          </div>
          <div className="item flex flex-col items-center">
            <img src={react} alt="React" className="mb-4 w-16 h-16" />
            <h5 className="text-lg font-medium">React JS</h5>
            <p className="text-sm text-gray-500 text-center mt-2">
              Building user interfaces with reusable components and efficient
              rendering.
            </p>
          </div>
          <div className="item flex flex-col items-center">
            <img src={git} alt="Git" className="mb-4 w-16 h-16" />
            <h5 className="text-lg font-medium">Version Control</h5>
            <p className="text-sm text-gray-500 text-center mt-2">
              Ensuring seamless collaboration and code management with Git.
            </p>
          </div>
          <div className="item flex flex-col items-center">
            <img src={figma} alt="Figma" className="mb-6 w-14 h-14" />
            <h5 className="text-lg font-medium">Figma</h5>
            <p className="text-sm text-gray-500 text-center mt-2">
              Designing intuitive and engaging user experiences with precision.
            </p>
          </div>
          <div className="item flex flex-col items-center">
            <img src={node} alt="Node" className="mb-4 w-16 h-16" />
            <h5 className="text-lg font-medium">Node JS</h5>
            <p className="text-sm text-gray-500 text-center mt-2">
              Creating robust server-side applications and APIs.
            </p>
          </div>
          <div className="item flex flex-col items-center">
            <img src={tailwind} alt="Tailwind" className="mb-4 w-16 h-16" />
            <h5 className="text-lg font-medium">Tailwind CSS</h5>
            <p className="text-sm text-gray-500 text-center mt-2">
              Streamlining styling with utility-first CSS for rapid development.
            </p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default SkillSet;
