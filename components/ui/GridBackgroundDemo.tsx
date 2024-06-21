import React from "react";
import Image from "next/image";
import Link from "next/link"

export function GridBackgroundDemo() {
  return (
    <div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center items-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0   dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" flex z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
      
      <div className="flex mb-40 items-start  flex-col w-1/2">
        <h1 className="text-5xl py-4 px-4 font-extrabold text-neutral-600 dark:text-neutral-400">
          Hi There, I am Gaurav
        </h1>
        <p className="text-md text-gray-500 px-4 mb-32">
  Frontend developer with a passion for UI/UX and full-stack development. Crafting responsive websites and applications that make a difference. Ready to turn your ideas into digital reality.
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
      <div className=" w-1/2">
        <Image
            src="/hero.svg"
            alt="hero"
            width={50}
            height={50}
            layout="responsive"
        />
        <div className="flex  justify-end items-end mt-10   ">
        <Link  href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Image
         
              src="/github.svg"
              alt="GitHub"
              width={60}
              height={60}
              className="h-10"

          />
        </Link>
        <Link href="https://example.com/x" target="_blank" rel="noopener noreferrer">
          <Image
              src="/x.svg"
              alt="X"
              width={60}
              height={60}
              className="h-10"
          />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image
              src="/insta.svg"
              alt="Instagram"
              width={60}
              height={60}
              className="h-10"
          />
        </Link>
        <Link href="https://gmail.com" target="_blank" rel="noopener noreferrer">
          <Image
              src="/gmail.svg"
              alt="Gmail"
              width={60}
              height={60}
              className="h-10"
          />
        </Link>
        <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <Image
              src="/discord.svg"
              alt="Discord"
              width={60}
              height={60}
              className="h-10"
          />
        </Link>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={60}
              height={60}
              className="h-10"
          />
        </Link>
        <Link href="https://spotify.com" target="_blank" rel="noopener noreferrer">
          <Image
                className="h-10"
              src="/spotify.svg"
              alt="Spotify"
              width={60}
              height={60}
          />
        </Link>
        </div>
      </div>
    
      </div>
    </div>
  );
}
