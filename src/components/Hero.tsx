
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-purple/5 section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="uppercase tracking-wider text-purple-dark font-medium mb-2">Web Developer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Hi, I'm <span className="text-purple-dark">Bilal Karbach</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              A web developer focused on crafting stunning websites and applications 
              that solve real-world problems and enhance user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects">
                <Button className="btn-primary w-full sm:w-auto">View My Projects</Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-purple-dark text-purple-dark hover:bg-purple-dark hover:text-white w-full sm:w-auto">
                  Get In Touch
                </Button>
              </a>
            </div>
          </div>

          <div className="flex-1 max-w-md opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-purple rounded-2xl"></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg relative z-10">
                <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                    alt="Bilal Karbach" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <h3 className="font-bold text-2xl text-purple-dark">3+</h3>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div className="text-center">
                    <h3 className="font-bold text-2xl text-purple-dark">15+</h3>
                    <p className="text-sm text-gray-600">Projects</p>
                  </div>
                  <div className="h-12 w-px bg-gray-200"></div>
                  <div className="text-center">
                    <h3 className="font-bold text-2xl text-purple-dark">5+</h3>
                    <p className="text-sm text-gray-600">Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
