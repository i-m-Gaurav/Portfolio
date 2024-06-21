import React from "react";
import Image from "next/image";
import { EvervaultCardDemo } from "./EvervaultCardDemo";

export function DotBackgroundDemo() {
  return (
    <div className="h-[30rem] mb-20 w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="sm:text-2xl md:text-3xl lg:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full">
          <div className="w-full lg:w-1/2 hidden lg:block">
            <Image
              src="/about.svg"
              alt="hero"
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
            <h1 className="mb-5 text-center lg:text-left">About Me</h1>
            <EvervaultCardDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
