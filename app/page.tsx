import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-soft-black">
      {/* <div className = "flex justify-center m-20">
        Portfolio is under maintenance, meanwhile visit my  <Link href = "https://github.com/i-m-Gaurav" className = "text-pink-600"> Github </Link> 
      </div> */}

      <Hero />
      <Projects />
    </main>
  );
}
