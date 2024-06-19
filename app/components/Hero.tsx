import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";
import { FlipWordsDemo } from "@/components/ui/FlipWordsDemo";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import { InfiniteMovingCardsDemo } from "@/components/ui/Infinite";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-between max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
      <GridBackgroundDemo/>
    </div>
  );
};

export default Hero;
