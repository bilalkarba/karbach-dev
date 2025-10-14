import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "Agri-Doctor",
    title: "Agri Doctor",
    description:
      "موقع Agri Doctor على Vercel هو منصة رقمية مبتكرة تهدف إلى مساعدة المزارعين والبستانيين في تشخيص صحة نباتاتهم باستخدام تقنيات الذكاء الاصطناعي.",
    image: "/images/agridoctor.png",
    technologies: ["React js", "Next js", "Api gemini ", ],
    liveUrl: "https://agri-doctor.vercel.app/home",
    repoUrl: "https://github.com/bilalkarba/AgriDoctor",
  },
  {
    id: "Souk-Bladi",
    title: "Souk Bladi",
    description:
      "موقع souk-bladi.vercel.app هو منصة إلكترونية مغربية تهدف إلى تسهيل عملية شراء وبيع المنتجات المحلية عبر الإنترنت.",
    image: "/images/sookbladi.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveUrl: "https://souk-bladi.vercel.app/",
    repoUrl: "https://github.com/bilalkarba/souk-bladi",
  },
  {
    id: "Karbach-chat",
    title: "Karbach-chat",
    description:
      "موقع karbach-chat.vercel.app هو تطبيق دردشة بسيط يعتمد على الذكاء الاصطناعي، يتم تشغيله على منصة Vercel. يبدو أنه يستخدم قالب الدردشة الافتراضي الذي توفره Vercel، والذي يعتمد على تقنيات مثل Next.js وVercel AI SDK.",
    image:
      "/images/karbachchat.png",
    technologies: ['react js','Api gemini'],
    liveUrl: "karbach-chat.vercel.app",
    repoUrl: "https://github.com/bilalkarba/karbach-chat",
  },
];
