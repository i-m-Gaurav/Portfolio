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
  {
    id: 3,
    name: "MongoDB",
    designation: "UX Designer",
    image:
    "/mongo.png",
},
  
];

const AnimatedTooltipPreview3 = () => {
  return (
    <div className="flex flex-row items-center justify-center  w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
    }

export default AnimatedTooltipPreview3;
