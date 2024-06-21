"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

export function GridBackgroundDemo() {
  const scrollToBottom = () => {
    document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };
  return (
    <div className="h-[30rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center items-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col md:flex-row justify-center items-center z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 w-full">
        <div className="flex flex-col md:flex-row items-center w-full md:w-1/2 p-4 md:p-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl py-4 font-extrabold text-neutral-600 dark:text-neutral-400">
              Hi There, I am Gaurav
            </h1>
            <p className="text-sm md:text-md text-gray-500 mb-8 md:mb-32">
              Frontend developer with a passion for UI/UX and full-stack development. Crafting responsive websites and applications that make a difference. Ready to turn your ideas into digital reality.
            </p>
            <div className="flex flex-col md:flex-row items-center">
              <button onClick={scrollToBottom} className="px-8 py-2 mx-2 my-2 border border-black bg-transparent text-black dark:border-white relative group transition duration-200">
                <div className="absolute -bottom-2 -right-2 bg-gray-200 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
                <span className="relative">Projects</span>
              </button>
              <button className="px-8 py-2 mx-2 my-2 border border-black bg-transparent text-black dark:border-white relative group transition duration-200">
                <Link href="https://drive.google.com/file/d/1ZarKY1BU9qMNgmzKd8oodPeefa0M9J_X/view?usp=sharing" target="_blank">
                <div className="absolute -bottom-2 -right-2 bg-gray-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
                <span className="relative">Resume/CV</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4  md:p-8 flex flex-col items-center">
          <Image src="/hero.svg" alt="hero" width={500} height={500} layout="responsive" />
          <div className="flex justify-center items-center mt-10 space-x-4">
            <Link href="https://github.com/i-m-Gaurav" target="_blank" rel="noopener noreferrer">
              <Image src="/github.svg" alt="GitHub" width={40} height={40} />
            </Link>
            <Link href="https://x.com/_i_gaurav" target="_blank" rel="noopener noreferrer">
              <Image src="/x.svg" alt="X" width={40} height={40} />
            </Link>
            <Link href="https://www.instagram.com/i.m.gauravkr/" target="_blank" rel="noopener noreferrer">
              <Image src="/insta.svg" alt="Instagram" width={40} height={40} />
            </Link>

            <Link href="https://discord.com/users/blueduckpond" target="_blank" rel="noopener noreferrer">
              <Image src="/discord.svg" alt="Discord" width={40} height={40} />
            </Link>
            <Link href="https://linkedin.com/in/i-am-gaurav" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
            </Link>
            <Link href="https://open.spotify.com/user/31khy5gaek64ujx3cs7b36zufvry?si=KY0kH_6rQMOQOfOwo00M7Q " target="_blank" rel="noopener noreferrer">
              <Image src="/spotify.svg" alt="Spotify" width={40} height={40} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
