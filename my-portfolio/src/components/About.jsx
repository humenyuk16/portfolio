import React from "react";
import photo1 from "../../public/assets/images/personal_photo2.jpeg";
import instagram from "../../public/assets/icons/instagram-3.png";
import github from "../../public/assets/icons/github-2.png";
import linkedin from "../../public/assets/icons/linkedin.png";
import "../index.css";

const About = () => {
  return (
    <section id="about" className="   bg-bg_section object-none  mb-11">
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="flex flex-col items-center md:w-2/4 md:ml-10 md:mr-14">
          <div className="mb-6">
            <h2 className="text-5xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-junge text-gray-800">
              ABOUT ME
            </h2>
          </div>
          <div className="flex w-full sm:w-[556px] text-justify mt-10 px-4 sm:px-0">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-800 font-junge">
              I'm a dedicated frontend developer passionate about creating
              engaging user experiences. I recently completed an intensive web
              development bootcamp, gaining skills in HTML, CSS, JavaScript, and
              React. Thriving in collaborative settings, I'm eager to contribute
              my skills to innovative projects. Ready to embark on my
              professional journey, I'm excited to apply my creativity and
              technical expertise to build intuitive and visually appealing web
              applications.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full md:w-1/2 mt-10 md:mt-0">
          <div className="bg-container p-4 flex flex-col items-center backdrop-blur bg-custom-color2 rounded-lg">
            <div className="photo-frame w-full sm:w-2/3 mt-8">
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
