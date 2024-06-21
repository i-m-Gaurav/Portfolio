"use client";
import React from "react";
import { AnimatedTooltip } from "../animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "/nexts.png",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
    "/prisma.png",
},
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
    "/tail.png",
},
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
    "/supabase.png",
},
  
];

const AnimatedTooltipPreview1 = () => {
  return (
    <div className="flex flex-row items-center justify-center  w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
    }

export default AnimatedTooltipPreview1;
