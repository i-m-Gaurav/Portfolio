import React from 'react';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import SocialLink from './SocialLink';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4">
      <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass-effect mb-6">
          Welcome to my portfolio
        </span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
        I am Gaurav
        <span className="block text-2xl md:text-3xl mt-4 text-soft-gray font-normal">
          Full Stack Developer
        </span>
      </h1>
      
      <p className="max-w-xl text-soft-gray mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0.6s' }}>
        Crafting elegant solutions for modern web applications with a focus on user experience and clean code.
      </p>
      
      <div className="flex gap-6 animate-fade-up opacity-0" style={{ animationDelay: '0.8s' }}>
        <SocialLink href="https://twitter.com/_i_gaurav" icon={Twitter} label="Twitter Profile" />
        <SocialLink href="https://linkedin.com/in/i-am-gaurav" icon={Linkedin} label="LinkedIn Profile" />
        <SocialLink href="https://github.com/i-m-Gaurav" icon={Github} label="GitHub Profile" />
        <SocialLink href="https://instagram.com/i.m.gauravkr" icon={Instagram} label="Instagram Profile" />
      </div>
    </section>
  );
};

export default Hero;