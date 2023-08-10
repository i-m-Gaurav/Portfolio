import React from "react";

import ProjectCard from "./Cards";

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full bg-[#1e1e1e] py-16 px-4 max-w-[1240px] mx-auto">
      {/* Text */}
      <div className="w-full mb-10">
        <h1 className="text-[#00df9a] font-bold text-5xl text-center">Projects</h1>
      </div>

      {/* Cards */}

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        {/* Card 1 */}
        
        <ProjectCard
          title="DailyBlog"
          technologies={["HTML", "CSS", "Javascript", "MongoDB", "ExpressJS"]}
          description="An intuitive web application that empowers users to craft and explore posts shared by the community. Seamlessly create, publish, and read posts without the need for authentication. Your posts are stored securely in the database for future reference."
          githubLink="https://github.com/your-username/your-repo"
        />


        {/* Card 2 */}
        <ProjectCard
          title="Cosmodrome"
          technologies={["HTML", "CSS", "Javascript"]}
          description="Cosmodrome is a project that utilizes the NASA open API to display publicly available data from NASA. Specifically, it focuses on providing a collection of Mars rover images from all three rovers."
          githubLink="https://github.com/your-username/your-repo"
        />

       

      </div>
    </div>
  );
};

export default Projects;
