// import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";
import Hero from "../components/Hero";
import { InfiniteMovingCardsDemo } from "@/components/ui/Infinite";
import { InfiniteMovingCardsDemo2 } from "@/components/ui/Infinite2";
import Projects from "../components/Projects";
import Link from 'next/link'

export default function Home() {
  return (
    <main className = "min-h-screen bg-soft-black">


      {/* <div className = "flex justify-center m-20">

        Portfolio is under maintenance, meanwhile visit my  <Link href = "https://github.com/i-m-Gaurav" className = "text-pink-600"> Github </Link> 
      </div> */}

     <Hero/>
     <Projects/>
     {/* <DotBackgroundDemo/> */}
     <InfiniteMovingCardsDemo/>
     <InfiniteMovingCardsDemo2/>
    </main>
  );
}
