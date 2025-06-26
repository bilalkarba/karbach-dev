
import React, { useState } from "react";
import { Project } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const projects: Project[] = [
  {
    id: "Agri-Doctor",
    title: "Agri Doctor",
    description: "A web application that connects farmers with agricultural experts for advice and support. Built with React, Node.js, and MongoDB.",
    image: "/src/images/agridoctor.png",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    liveUrl: "https://agri-doctor.vercel.app/home",
    repoUrl: "https://github.com/bilalkarba/AgriDoctor",
  },
  {
    id: "Souk-Bladi",
    title: "Souk Bladi",
    description: "An e-commerce platform for Moroccan artisans to showcase and sell their handmade products. Built with React, Node.js, and MongoDB.",
    image:  "/src/images/sookbladi.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveUrl: "https://souk-bladi.vercel.app/",
    repoUrl: "https://github.com/bilalkarba/souk-bladi",
  },
  {
    id: "moroccan-recipes",
    title: "Moroccan Recipes App",
    description: "A recipe app that showcases authentic Moroccan cuisine with video tutorials, ingredient lists, and step-by-step instructions. Built with Flutter and Firebase.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
    liveUrl: "https://moroccan-recipes.example.com",
    repoUrl: "https://github.com/bilalkarbach/moroccan-recipes",
  },
];

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden opacity-0 animate-fade-in border-none shadow-lg"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold font-heading">{project.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={`${project.id}-${tech}`} 
                      className="text-xs px-2 py-1 bg-purple/10 text-purple-dark rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between gap-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="default" className="w-full">View Live</Button>
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full">GitHub</Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
