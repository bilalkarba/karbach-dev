import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "Agri-Doctor",
    title: "Agri Doctor",
    description:
      "A web application that connects farmers with agricultural experts for advice and support. Built with React, Node.js, and MongoDB.",
    image: "/images/agridoctor.png",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    liveUrl: "https://agri-doctor.vercel.app/home",
    repoUrl: "https://github.com/bilalkarba/AgriDoctor",
  },
  {
    id: "Souk-Bladi",
    title: "Souk Bladi",
    description:
      "An e-commerce platform for Moroccan artisans to showcase and sell their handmade products. Built with React, Node.js, and MongoDB.",
    image: "/images/sookbladi.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveUrl: "https://souk-bladi.vercel.app/",
    repoUrl: "https://github.com/bilalkarba/souk-bladi",
  },
  {
    id: "moroccan-recipes",
    title: "Moroccan Recipes App",
    description:
      "A recipe app that showcases authentic Moroccan cuisine with video tutorials, ingredient lists, and step-by-step instructions. Built with Flutter and Firebase.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
    liveUrl: "https://moroccan-recipes.example.com",
    repoUrl: "https://github.com/bilalkarbach/moroccan-recipes",
  },
];
