import type { ImageMetadata } from "astro";

export interface HighlightedProject {
  title: string;
  achievements: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary?: string;
  responsibilities?: string[];
  projects?: HighlightedProject[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  description?: string;
  tags?: string[];
  label?: string;
  repoLink?: string;
  demoLink?: string;
  thumb?: ImageMetadata;
}

export interface Contact {
  title: string;
  link: string;
  icon: string;
}

export interface CVData {
  header: {
    fullName: {
      name: string;
      lastname: string;
    };
    role: string;
    tagline?: string;
    availability?: string;
    location: string;
    yearsExperience: string;
    yearsLabel: string;
  };
  about: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    description: string;
    copyToast: string;
    contactLinks: Contact[];
  };
  experience: {
    title: string;
    jobs: Experience[];
  };
  skills: {
    title: string;
    skillSet: Skill[];
  };
  worksProjects: {
    title: string;
    projects: Project[];
  };
}
