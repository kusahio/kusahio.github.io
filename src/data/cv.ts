import type { ImageMetadata } from "astro";

const projectThumbs = import.meta.glob<{
  default: ImageMetadata
}>('/src/assets/projectThumbs/*.{jpeg,jpg,png,gif,webp}', { eager: true });

function getProjectImage(filename: string): ImageMetadata | undefined {
  const path = `/src/assets/projectThumbs/${filename}`;
  return projectThumbs[path]?.default;
}

interface HighlightedProject {
  title: string;
  achievements: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  summary?: string;
  responsibilities?: string[];
  projects?: HighlightedProject[]
}

interface Skill {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  description?: string;
  tags?: string[];
  label?: string;
  repoLink?: string;
  demoLink?: string;
  thumb?: ImageMetadata;
}

interface Contact {
  title: string;
  link: string;
  icon: string;
}

interface CVData {
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
  };
  about: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    description: string;
    contactLinks: Contact[]
  };
  experience: {
    title: string,
    jobs: Experience[];
  };
  skills: {
    title: string;
    skillSet: Skill[];
  }
  worksProjects: {
    title: string;
    projects: Project[];
  }
}

export const CV: CVData = {
  header: {
    fullName: {
      name: 'Camilo',
      lastname: 'Illanes'
    },
    role: 'Full Stack Developer',
    tagline: 'Frontend enfocado en producción, integración con APIs y backend',
    location: 'Coquimbo, Chile',
    yearsExperience: '7+'
  },
  about: {
    title: 'Sobre mí',
    description: 'Soy desarrollador Full Stack con foco en frontend y experiencia trabajando en aplicaciones en producción. Desarrollo interfaces con React y Next.js, integrando APIs REST y backend en Python con FastAPI y bases de datos relacionales. Mi formación en UX/UI me ayuda a tomar mejores decisiones técnicas en la construcción de interfaces claras, accesibles y fáciles de mantener'
  },
  experience: {
    title: 'Experiencia',
    jobs: [
      {
        company: 'Red MTS',
        role: 'Desarrollador Front-End / UI',
        period: 'Jul 2020 - Oct 2024',
        responsibilities: [
          'Desarrollo de interfaces en producción con React y componentes reutilizables.',
          'Integración con APIs REST y optimización de flujos.',
          'Trabajo en equipos ágiles bajo control de versiones (Git)',
        ],
        summary: 'Interfaces en producción con React, integración con APIs REST y trabajo en equipos ágiles.',
        projects: [
          {
            title: 'Plataforma E-commerce MTS (Portal del socio)',
            achievements: [
              'Desarrollo de componentes frontend con React.',
              'Integración con APIs REST.',
              'Optimización de rendimiento y mantenibilidad.'
            ]
          },
        ]
      },
      {
        company: 'Walmart Chile',
        role: 'Diseñador Web',
        period: 'Jul 2017 - Ene 2020',
        responsibilities: [
          'Desarrollo y mantenimiento de interfaces web accesibles y responsive.',
          'Mejora de semántica HTML y flujos mobile-first.',
          'Participación en el diseño e implementación del checkout “Buy Smart”'
        ],
        summary: 'Desarrollo de interfaces web accesibles y optimizadas para e-commerce, con foco mobile-first.',
        projects: [
          {
            title: 'Checkout “Buy Smart” - Walmart',
            achievements: [
              'Implementación de interfaz accesible y optimizada para el proceso de pago.',
              'Enfoque mobile-first y mejora de experiencia de usuario.'
            ]
          },
        ]
      },
      {
        company: 'Falabella Retail S.A',
        role: 'Diseñador Web',
        period: 'Feb 2017 - Jul 2017',
        responsibilities: [
          'Implementación de vistas web responsivas.',
          'Soporte frontend utilizando JavaScript.',
        ],
        summary: 'Implementación de vistas web responsivas y soporte frontend con JavaScript.'
      }
    ]
  },
  skills: {
    title: 'Tech Stack',
    skillSet: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "Figma", icon: "figma" },
    ]
  },
  worksProjects: {
    title: 'Proyectos',
    projects: [
      {
        title: 'Web Dentimagen',
        description: 'Diseño y desarrollo web enfocado en la experiencia de usuario.',
        demoLink: 'https://dentimagen.cl/',
        tags: ['wordpress'],
        thumb: getProjectImage('dentimagen.jpg')
      },
      {
        title: 'Task Manager',
        description: 'Sistema de gestión de tareas Full Stack con Next.js y FastAPI, autenticación JWT y base de datos PostgreSQL.',
        demoLink: 'https://task-manager-brown-tau.vercel.app/',
        repoLink: 'https://github.com/kusahio/task_manager',
        tags: ['nextjs', 'python', 'typescript', 'postgresql', 'fastapi'],
        thumb: getProjectImage('task-manager.png')
      }
    ]
  },
  contact: {
    title: 'Hablemos',
    description: 'Abierto a nuevas oportunidades y proyectos. Puedes escribirme por email o LinkedIn.',
    contactLinks: [
      {
        title: 'Email',
        link: 'c.illanesdonoso@gmail.com',
        icon: 'email'
      },
      {
        title: 'Linkedin',
        link: 'https://www.linkedin.com/in/camiloillanes/',
        icon: 'linkedin'
      },
      {
        title: 'Github',
        link: 'https://github.com/kusahio',
        icon: 'github'
      }
    ]
  }
}