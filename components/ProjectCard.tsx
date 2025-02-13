import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image'

interface Project {
    name: string;
    description: string;
    technologies: string[];
    link: string;
    github: string;
    image: string;
    id: number; // Make sure id is defined
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  // Check if project is from GitHub by checking if image URL contains 'opengraph.github.com'
  const isGithubProject = project.image.includes('opengraph.github.com');

  return (
    <div
      className="glass-effect rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] animate-fade-up opacity-0"
      style={{ animationDelay: `${0.2 * (index + 1)}s` }}
    >
      {!isGithubProject && (
        <div className="relative aspect-video">
          <Image
            src={project.image} 
            width={1920}
            height={1080}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="View GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="View Live Project"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <p className="text-soft-gray mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full glass-effect"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;