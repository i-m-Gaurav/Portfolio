import React from "react";

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
        <div className="bg-[#1F1F1F]">
          <div className=" h-96 bg-red-500 overflow-hidden">
            <img src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png" alt="Project 1" className="object-cover w-full h-full" />
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
