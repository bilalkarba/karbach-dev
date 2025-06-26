
import React from "react";
import { Button } from "@/components/ui/button";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center mt-16">
          <div className="flex-1 lg:order-2 opacity-0 animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                  alt="Bilal working on code" 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-purple text-white py-2 px-4 rounded-lg shadow-lg">
                <p className="font-medium">Web Developer</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 opacity-0 animate-fade-in-left" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold mb-4 font-heading text-gray-800">My Journey</h3>
            <p className="text-gray-600 mb-4">
              I am Bilal Karbach, a passionate web developer from Morocco. I am a person with a disability, 
              specifically dealing with Multiple Sclerosis (IMS), but I believe that challenges never limit potential; 
              they only drive me to be better.
            </p>
            <p className="text-gray-600 mb-4">
              With a deep passion for programming and web development, I specialize in creating elegant, user-friendly, 
              and functional web applications. I have experience working with a variety of technologies such as React, 
              Flutter, NodeJS, MongoDB, Firebase, and Power BI.
            </p>
            <p className="text-gray-600 mb-6">
              I hold a diploma in IT development and have a keen interest in enhancing my skills through real-world projects. 
              My mission is to create impactful digital products that improve the user experience and solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white rounded-lg shadow-sm px-5 py-3">
                <span className="font-medium text-purple-dark">IT Development</span>
              </div>
              <div className="bg-white rounded-lg shadow-sm px-5 py-3">
                <span className="font-medium text-purple-dark">Web Applications</span>
              </div>
              <div className="bg-white rounded-lg shadow-sm px-5 py-3">
                <span className="font-medium text-purple-dark">UX/UI Design</span>
              </div>
            </div>
            
            <Button className="btn-primary">
              <a href="/bilal-karbach-resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
