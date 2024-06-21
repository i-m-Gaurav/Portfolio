"use client";
import React from "react";
import { AnimatedTooltip } from "../animated-tooltip";
const people = [
  {
    id: 1,
    name: "HTML",
    designation: "Software Engineer",
    image:
      "/html.png",
  },
  {
    id: 2,
    name: "CSS",
    designation: "Product Manager",
    image:
    "/css.png",
},
  {
    id: 3,
    name: "Javascript",
    designation: "Data Scientist",
    image:
    "/js.png",
},
  
  
];

const AnimatedTooltipPreview2 = () => {
  return (
    <div className="flex flex-row items-center justify-center  w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
    }

export default AnimatedTooltipPreview2;
