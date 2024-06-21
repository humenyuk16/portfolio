import React from "react";
import photo1 from "../../public/assets/images/personal_photo2.jpeg";
import instagram from "../../public/assets/icons/instagram-3.png";
import github from "../../public/assets/icons/github-2.png";
import linkedin from "../../public/assets/icons/linkedin.png";
import "../index.css";

const About = () => {
  return (
    <section id="about" className="mb-11">
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="flex flex-col items-center md:w-2/4 md:ml-10 md:mr-14">
          <div className="mb-6">
            <h2 className="text-5xl font-bold mb-4 text-gray-800">ABOUT ME</h2>
          </div>
          <div className="flex w-full sm:w-[556px] text-justify mt-10 px-4 sm:px-0">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-800">
              <span className=" text-text-color ">
                Hey there! I’m Anastasiia,
              </span>{" "}
              <br />
              <br />a frontend developer fueled by a passion for crafting
              captivating user experiences. Recently, I took a deep dive into
              the world of web development through an intensive bootcamp,
              mastering the art of HTML, CSS, JavaScript, and React. <br />
              <br /> At the same time, I thrive in collaborative environments
              where creativity and innovation meet. My journey so far has
              equipped me with the skills and enthusiasm to tackle exciting
              projects and bring fresh ideas to life. As I step into the
              professional realm, I’m eager to channel my creativity and
              technical prowess into building intuitive, visually stunning web
              applications that delight users and make a lasting impact.
              <br />
              <br />{" "}
              <span className=" text-text-color">
                Let’s create something amazing together!
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full  mt-10 md:mt-0">
          <div className="bg-container p-4 flex flex-col items-center backdrop-blur bg-custom-color2 rounded-lg">
            <div className="photo-frame w-full md:w-4/5 mt-8">
              <img src={photo1} alt="Personal Photo" className="rounded-3xl " />
            </div>
            <div className="mt-8 mb-6 flex justify-center gap-14 items-center">
              <div className="tooltip">
                <a
                  href="https://www.instagram.com/humenyuk_anastasia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="Instagram" className="w-9" />
                </a>
                <span className="tooltiptext">Instagram</span>
              </div>
              <div className="tooltip">
                <a
                  href="https://github.com/humenyuk16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Github" className="w-9" />
                </a>
                <span className="tooltiptext">GitHub</span>
              </div>
              <div className="tooltip">
                <a
                  href="https://www.linkedin.com/in/anastasiia-humeniuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Linkedin" className="w-9" />
                </a>
                <span className="tooltiptext">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
