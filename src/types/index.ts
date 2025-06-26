
export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface NavItem {
  title: string;
  href: string;
}
