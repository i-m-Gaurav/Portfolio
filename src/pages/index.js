import Head from 'next/head';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import '../styles/global.css'
import About from '@/app/components/About';
import Skills from '@/app/components/Skills';
import Services from '@/app/components/Services';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

const HomePage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Services />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
};

export default HomePage;
