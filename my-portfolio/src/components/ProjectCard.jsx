import React from "react";

const ProjectCard = ({ title, description, imgUrl, demoLink, codeLink }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <img className="w-full h-48 object-cover" src={imgUrl} alt={title} />
        <div className="p-6">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600 mt-4">{description}</p>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white py-2 px-4 bg-bg-color rounded mb-2"
            >
              Demo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white py-2 px-4 bg-gray-800 rounded"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
