import React from "react";
import Image from "next/image";
import { TextGenerateEffectDemo } from "./textgenerate";

export function DotBackgroundDemo() {
  return (
    <div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8 ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" sm: text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        <div className="flex ">
            <div className="w-1/2">

                <Image
                    src="/about.svg"
                    alt="hero"
                    width={50}
                    height={50}
                    layout="responsive"
                />

            </div>
            <div className="w-1/2">
            <h1 className="mb-5">About me</h1>
            <TextGenerateEffectDemo/>
        
            </div>
        </div>
      </div>
    </div>
  );
}
