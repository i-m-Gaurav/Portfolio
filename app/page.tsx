import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";
import Hero from "./components/Hero";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import { InfiniteMovingCardsDemo } from "@/components/ui/Infinite";
import { InfiniteMovingCardsDemo2 } from "@/components/ui/Infinite2";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
     <Hero/>
     <DotBackgroundDemo/>
     <InfiniteMovingCardsDemo/>
     <InfiniteMovingCardsDemo2/>
     <Projects/>
           
    </main>
  );
}
