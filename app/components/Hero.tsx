import { FlipWordsDemo } from "@/components/ui/FlipWordsDemo";
import React from "react";

const Hero = () => {
  return (
    <div className="flex h-16 items-center justify-between max-w-7xl mx-auto mt-64 px-4 sm:px-6 lg:px-8">
      <div className="flex items-start  flex-col w-1/2">
        <h1 className="text-5xl py-4 px-4 font-extrabold text-neutral-600 dark:text-neutral-400">
          Hi There, I am Gaurav
        </h1>
        <p className=" text-md text-gray-500 px-4 mb-20">
          Copy paste the most trending components and use them in your websites
          without having to worry about styling and animations.
        </p>
        <div>
          <button className="px-8 py-2 mx-4 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
            <div className="absolute -bottom-2 -right-2 bg-gray-200 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <span className="relative">Projects</span>
          </button>
          <button className="px-8 py-2 mx-4 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
            <div className="absolute -bottom-2 -right-2 bg-gray-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <span className="relative">Download CV</span>
          </button>
        </div>
      </div>
      <div className="bg-blue-500 w-1/2">right</div>
    </div>
  );
};

export default Hero;
