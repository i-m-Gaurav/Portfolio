"use client";
import React from "react";
import { AnimatedTooltip } from "../animated-tooltip";
const people = [
  {
    id: 1,
    name: "NextJS",
    designation: "Software Engineer",
    image:
      "/nexts.png",
  },
  
  {
    id: 2,
    name: "TailwindCSS",
    designation: "Data Scientist",
    image:
    "/tail.png",
},
  
  
];

const AnimatedTooltipPreview5 = () => {
  return (
    <div className="flex flex-row items-center justify-center  w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
    }

export default AnimatedTooltipPreview5;
