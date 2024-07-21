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
    name : "NextAuth",
    designation : "demo",
    image : "/nextauth.png",
},
{
    id: 4,
    name : "MongoDB",
    designation : "demo",
    image : '/mongo.png'
}
  
  
];

const AnimatedTooltipPreview6 = () => {
  return (
    <div className="flex flex-row items-center justify-center  w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
    }

export default AnimatedTooltipPreview6;
