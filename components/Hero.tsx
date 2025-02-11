import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import React from "react";
import Github from "./Github";

const Hero = () => {
  return (
    <div className="flex items-center flex-col justify-between max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
      <GridBackgroundDemo/>
      <Github/>
    </div>
  );
};

export default Hero;
