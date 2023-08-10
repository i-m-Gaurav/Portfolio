import React from "react";
import { FaGithub } from "react-icons/fa"; 

const ProjectCard = ({ title, technologies, description, githubLink }) => {
  return (
    <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-lg relative">
      <div className="mb-4">
        <h1 className="text-white text-3xl sm:text-2xl font-semibold">
          {title} 
        </h1>
        <div className="flex flex-wrap gap-2 mt-4">
         {technologies.map((tech, index) => (
           <button
             key={index}
             className="bg-[#00df9a] text-black px-3 py-1 rounded-full text-xs focus:outline-none"
           >
            {tech}
           </button>
         ))}
        </div>
      </div>
      
      <div className="flex flex-col h-52 justify-between">
        <p className="text-white mt-3 text-sm flex-grow ">  
          {description}
        </p>

        <div className="mt-auto flex justify-end items-end absolute bottom-5 right-5 mb-4 mr-4">
          <a href={githubLink} className="text-white mr-5">
            <FaGithub size={30} />
          </a>

          <button className="bg-[#00df9a] text-black px-4 py-2 rounded-full text-xs focus:outline-none">
            Try It
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
