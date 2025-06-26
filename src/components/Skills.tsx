
import React from "react";
import { Skill } from "@/types";
import { Progress } from "@/components/ui/progress";

const skills: Skill[] = [
  {
    name: "React",
    icon: "react",
    level: 90,
  },
  {
    name: "Flutter",
    icon: "mobile",
    level: 85,
  },
  {
    name: "Node.js",
    icon: "node-js",
    level: 80,
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    level: 75,
  },
  {
    name: "Firebase",
    icon: "firebase",
    level: 85,
  },
  {
    name: "Power BI",
    icon: "chart",
    level: 70,
  },
];

const skillIcons: Record<string, string> = {
  react: "fab fa-react",
  "node-js": "fab fa-node-js",
  mobile: "fas fa-mobile-alt",
  mongodb: "fas fa-database",
  firebase: "fas fa-fire",
  chart: "fas fa-chart-bar",
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-white p-6 rounded-lg shadow-md opacity-0 animate-fade-in card-hover"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center mr-4">
                  <i className={`${skillIcons[skill.icon]} text-2xl text-purple-dark`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{skill.name}</h3>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-500">Proficiency</span>
                  <span className="text-sm font-medium text-purple-dark">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
