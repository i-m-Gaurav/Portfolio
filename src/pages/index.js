import "../styles/global.css";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="about">
        {/* <About /> */}
        {/* About component contents */}
      </section>{" "}
      <Skills />
      <Services />
      <section id="projects">
        <Projects />

        {/* About component contents */}
      </section>{" "}
      <section id="contact">
        <Contact />

        {/* About component contents */}
      </section>{" "}
      <Footer />
    </>
  );
};

export default HomePage;
