import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiPlayFill } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full bg-[#000300] py-16 px-4 max-w-[1240px] mx-auto">
      {/* Text */}
      <div className="w-full mb-10">
        <h1 className="text-[#00df9a] font-bold text-5xl text-center">Projects</h1>
      </div>

      {/* Cards */}

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        {/* Card 1 */}
        <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <h1 className="text-white mt-5 text-4xl font-semibold">DailyBlog</h1>
        <p className="text-white mt-4">An intuitive web application that empowers users to craft and explore posts shared by the community. Seamlessly create, publish, and read posts without the need for authentication. Your posts are stored securely in the database for future reference.</p>
      </div>
      <div className="flex flex-col justify-between h-32  ">
      <div className="flex flex-wrap gap-2">
        <button className="bg-[#00df9a] text-black px-3 py-1 rounded-full text-sm focus:outline-none">HTML</button>
        <button className="bg-[#00df9a] text-black px-3 py-1 rounded-full text-sm focus:outline-none">CSS</button>
        <button className="bg-[#00df9a] text-black px-3 py-1 rounded-full text-sm focus:outline-none">Javascript</button>
        <button className="bg-[#00df9a] text-black px-3 py-1 rounded-full text-sm focus:outline-none">MongoDB</button>
        <button className="bg-[#00df9a] text-black px-3 py-1 rounded-full text-sm focus:outline-none">ExpressJS</button>
      </div>
      <div className="flex justify-end mt-4">
        <a href="https://github.com/your-username/your-repo" className="text-white mr-5">
          <FaGithub size={32} />
        </a>
        <button className="bg-[#00df9a] text-black h-8 w-38 px-6 py-2 rounded-full text-sm focus:outline-none">
           Try It
        </button>
      </div>
      </div>

    </div>

        {/* Card 2 */}
        <div className="bg-[#1F1F1F]">
          <div className=" h-96 bg-red-500 overflow-hidden">
            <img src="https://about.fb.com/wp-content/uploads/2022/12/WhatsApp-Calling-Bundle_Header.jpg" alt="Project 1" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1F1F1F]">
          <div className=" h-96 bg-red-500 overflow-hidden">
            <img src="https://assets.materialup.com/uploads/c5fc816c-e125-43f5-b0d0-96fe8724a854/preview.png" alt="Project 1" className="object-cover w-full h-full" />
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-[#1F1F1F]">
          <div className=" h-96 bg-red-500 overflow-hidden">
            <img src="https://cdn.dribbble.com/userupload/4973313/file/original-6028d0c5d7b6f2327e0767856b014476.png" alt="Project 1" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-[#1F1F1F]">
          <div className=" h-96 bg-red-500 overflow-hidden">
            <img src="https://www.tinderpressroom.com/image/EN+%282%29+1200px.png" alt="Project 1" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-[#1F1F1F]">
          <div className=" h-96 bg-red-500 overflow-hidden">
            <img src="https://i.ytimg.com/vi/tcT-mveEoas/maxresdefault.jpg" alt="Project 1" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
