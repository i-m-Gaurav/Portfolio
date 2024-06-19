import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";
import Hero from "./components/Hero";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
     <Hero/>
     <DotBackgroundDemo/>
     <GridBackgroundDemo/>
     
    </main>
  );
}
