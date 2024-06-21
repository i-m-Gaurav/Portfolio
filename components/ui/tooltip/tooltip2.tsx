"use client";
import React from "react";
import { AnimatedTooltip } from "../animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "/html.png",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
    "/css.png",
},
  {
    id: 3,
    name: "Jane Smith",
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
