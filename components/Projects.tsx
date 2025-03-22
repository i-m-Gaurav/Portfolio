'use client'

import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

type Project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  image: string;
};

const personalProjects: Project[] = [
  {
    id: 1,
    name: "Ideos",
    description: "Ideos is a collaborative platform for innovators to share project ideas, connect with contributors, and access feedback, resources, or team members. It fosters a dynamic community of creators working together to turn ideas into reality. Join to innovate and build the future!",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    link: "https://ideos.vercel.app",
    github: "https://github.com/i-m-Gaurav/ideos",
    image: "/ideos.png"

  },
  {
    id: 2,
    name: "Show Time",
    description: "Find and book tickets to must-see shows and events",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    link: "https://showtimee.vercel.app",
    github: "https://github.com/i-m-Gaurav/bookmyshow-clone",
    image: "/showtime.png"
  },
  {
    id: 3,
    name: "GGV Mart",
    description: "A dynamic marketplace app enabling users to buy, sell, and trade items locally with ease. Connect with your community.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://ggvmart.vercel.app",
    github: "https://github.com/yashraj22/GGVMart",
    image: "/ggvmart.png"
  },
  {
    id: 4,
    name: "TechVerse",
    description: "A community of tech enthusiasts sharing knowledge, resources, and opportunities. Connect, learn, and grow together.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://techversecommunity.vercel.app",
    github: "https://github.com/i-m-Gaurav/Techverse",
    image: "/techverse.png"
  },
  {
    id: 5,
    name: "CosmoDrome",
    description: "A web app showcasing daily images captured by the Mars rover. Explore an extensive gallery of Martian landscapes.",
    technologies: ["React", "NASA API", "Tailwind"],
    link: "https://i-m-gaurav.github.io/mars.github.io/",
    github: "https://github.com/i-m-Gaurav/mars.github.io",
    image: "/cosmodrome.png"
  },
  {
    id: 6,
    name: "Prompt Store",
    description: "Secure, authenticated platform for sharing and discovering AI prompts, streamlining creativity across various needs.",
    technologies: ["Next.js", "MongoDB", "OAuth"],
    link: "https://post-it-umber.vercel.app/",
    github: "https://github.com/i-m-Gaurav/Post.it",
    image: "/prompt.png"
  },
  // {
  //   id: 7,
  //   name: "design1",
  //   description: "Modern Design frontend design with NextJS and Tailwind CSS equipped with modern ui components.",
  //   technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
  //   link: "https://design1-gray.vercel.app/",
  //   github: "https://github.com/i-m-Gaurav/design1",
  //   image: "/design1.png"
  // },
  // {
  //   id: 8,
  //   name: "Dribble UI",
  //   description: "Pixel-perfect recreation of Dribbble's home page, showcasing frontend skills and attention to detail.",
  //   technologies: ["React", "Tailwind CSS", "TypeScript"],
  //   link: "https://dribble-ivory.vercel.app/",
  //   github: "https://github.com/i-m-Gaurav/Dribble",
  //   image: "/dribble.png"
  // }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'github'>('personal');
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      setLoading(true);
      try {
        const response = await fetch("/api/github");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`); // More informative error
        }
        const data: any[] = await response.json(); // Type as 'any[]' initially
        const projects: Project[] = data.map(repo => ({ // Map to Project type
          id: repo.id,
          name: repo.name,
          description: repo.description || "No description available", // Handle missing descriptions
          technologies: repo.language ? [repo.language] : [], // Adapt to GitHub data
          link: repo.homepage || repo.html_url || "", // Prioritize homepage, fallback to html_url
          github: repo.html_url,
          image: `https://opengraph.github.com/${repo.owner.login}/${repo.name}`, // Construct image URL
        }));
        setGithubProjects(projects);
        setError(null); // Clear any previous errors
      } catch (error: any) {
        console.error("Error fetching GitHub repos:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (activeTab === 'github') {
      fetchRepos();
    }
  }, [activeTab]);

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-up opacity-0">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass-effect mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-soft-gray max-w-xl mx-auto">
            A selection of my favorite works, including both personal and open-source projects.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('personal')}
            className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`}
          >
            Personal Projects
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`tab-button ${activeTab === 'github' ? 'active' : ''}`}
          >
            GitHub Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'personal' ? (
            personalProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))
          ) : (
            loading ? (
              <div className="col-span-full text-center py-12">
                <div className="animate-pulse">Loading projects...</div>
              </div>
            ) : error ? (
              <div className="col-span-full text-center py-12">
                <div className="text-red-500">{error}</div>
              </div>
            ) : (
              githubProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
