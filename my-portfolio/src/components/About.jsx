import React from "react";
import myPhoto from "../assets/images/personal_photo.png";
import "../index.css";

const About = () => {
  return (
    <section id="about" className=" py-20 bg-bg-image-line mt-10">
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="flex flex-col items-center md:w-2/4 md:ml-10 md:mr-14">
          <div className="mb-6">
            <h2 className="elliptical-line text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-junge text-gray-800">
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
          <div className="bg-container p-5 flex flex-col items-center backdrop-blur bg-custom-color-40 rounded-lg">
            <div className="photo-frame w-full sm:w-2/3 mt-10">
              <img src={myPhoto} alt="Personal Photo" />
            </div>
            <div className="w-full sm:w-2/3 mt-5 mb-5 px-4 sm:px-0">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-text-color italic font-bold font-junge mt-3">
                "Innovation is the artistry of turning dreams into reality.
                Here, every pixel and line of code is a brushstroke, crafting
                the future with creativity, passion, and precision."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
