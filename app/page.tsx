import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-soft-black">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
