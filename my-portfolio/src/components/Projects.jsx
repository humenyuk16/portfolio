import React, { useRef } from "react";
import useVisibility from "../hooks/useVisibility";
import ProjectCard from "./ProjectCard";
import Meal_Sharing from "../../public/assets/project_img/meal_sharing.png";
import QuizApp from "../../public/assets/project_img/quiz_app.png";
import Todo from "../../public/assets/project_img/todo.png";
import AdviceGenerator from "../../public/assets/project_img/advice_generator.png";
import FigmaProject1 from "../../public/assets/project_img/figma1.png";
import FigmaProject2 from "../../public/assets/project_img/figma2.png";
import FigmaProject3 from "../../public/assets/project_img/figma3.png";
import FigmaProject4 from "../../public/assets/project_img/figma4.png";
import FigmaProject5 from "../../public/assets/project_img/figma5.png";

const Projects = () => {
  const projectsTab1 = [
    {
      title: "Meal-Sharing App",
      description:
        "A full-stack application that allows users to share and find meals. Built with Node.js, Express, and React.",
      imgUrl: Meal_Sharing,
      demoLink: "https://meals-sharing-1.onrender.com",
      codeLink: "https://github.com/humenyuk16/meals-sharing",
    },
    {
      title: "Quiz App",
      description:
        "An interactive quiz application that tests users' knowledge on various topics. Developed with HTML, CSS, and JavaScript.",
      imgUrl: QuizApp,
      codeLink: "https://github.com/humenyuk16/Quiz-App-2",
    },
    {
      title: "ToDo App",
      description:
        "A prototype for a task management app to help users keep track of their daily tasks. Built with React.",
      imgUrl: Todo,
      codeLink: "https://github.com/humenyuk16/todo-list",
    },
    {
      title: "Advice generator App",
      description:
        "An application that provides random advice to users. Created using React and API.",
      imgUrl: AdviceGenerator,
      demoLink: "https://advice-generator-for-you.netlify.app",
      codeLink: "https://github.com/humenyuk16/advice-generator-app-main",
    },
  ];

  const projectsTab2 = [
    {
      title: "Landing Page",
      description:
        "A clean and modern landing page designed to capture user interest",
      imgUrl: FigmaProject1,
      demoLink:
        "https://www.figma.com/proto/VS6DldezhDOVPgK061cuM2/Магазин?node-id=2-2&starting-point-node-id=2%3A2",
    },
    {
      title: "Personal Portfolio",
      description: "A sleek portfolio design to showcase projects and skills.",
      imgUrl: FigmaProject2,
      demoLink:
        "https://www.figma.com/proto/M3HDfQIPGKVBX5I2wpoXew/photographer?node-id=1-2",
    },
    {
      title: "Facecare Landing Page",
      description: "An elegant landing page for a facecare product line",
      imgUrl: FigmaProject3,
      demoLink:
        "https://www.figma.com/proto/sZtZJW8f1H42UEzQmRCoEw/%D0%A1%D0%B0%D0%B9%D1%82-%D0%BA%D0%BE%D1%81%D0%BC%D0%B5%D1%82%D0%B8%D0%BA%D0%B8?node-id=1-2&t=KFbmmvBpHHXhsonT-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    },
    {
      title: "Tur ",
      description: "A travel landing page designed to promote tours to Norway.",
      imgUrl: FigmaProject4,
      demoLink:
        "https://www.figma.com/proto/kMRkrB4wWSiHeOMWGa6Ugj/norway?node-id=1-2&t=gH37YZw9uhJhNy04-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    },
    {
      title: "Vacation on Fiji",
      description: "A vibrant landing page for vacation packages in Fiji",
      imgUrl: FigmaProject5,
      demoLink:
        "https://www.figma.com/proto/vPeLocjf9SNI2biG09Dh2v/fidji?node-id=2-2",
    },
  ];

  const sectionRef = useRef(null);
  const isVisible = useVisibility(sectionRef);

  const [activeTab, setActiveTab] = React.useState("first");

  return (
    <section id="projects" className="relative py-20 mt-20" ref={sectionRef}>
      <div className="container mx-auto">
        <div className={`text-center ${isVisible ? "animate-fadeIn" : ""}`}>
          <h2 className="elliptical-line text-5xl font-bold mb-14 text-gray-800">
            Projects
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore my latest projects, including web applications and design
            prototypes. Each project demonstrates my skills in various
            technologies and my passion for creating high-quality, user-friendly
            solutions. Click on the demo and source code links to learn more.
          </p>
          <div className="mb-8">
            <nav className="flex justify-center space-x-4">
              <button
                className={`py-2 px-4 rounded-lg ${
                  activeTab === "first"
                    ? "bg-bg-color text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setActiveTab("first")}
              >
                Tab 1
              </button>
              <button
                className={`py-2 px-4  rounded-lg ${
                  activeTab === "second"
                    ? "bg-bg-color text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setActiveTab("second")}
              >
                Tab 2
              </button>
            </nav>
          </div>
          <div
            className={`tab-content ${isVisible ? "animate-slideInUp" : ""}`}
          >
            {activeTab === "first" && (
              <div className="flex flex-wrap">
                {projectsTab1.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            )}
            {activeTab === "second" && (
              <div className="flex flex-wrap">
                {projectsTab2.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
