interface Project {
  title: string;
  achievements: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  summary?: string;
  responsibilities?: string[];
  projects?: Project[]
}

interface Skill {
  name: string;
  icon: string;
}

interface CVData {
  header: {
    fullName: {
      name: string;
      lastname: string;
    };
    role: string;
    subtitle1?: string;
    subtitle2?: string;
    location: string;
    yearsExperience: string;
  };
  about: {
    title: string;
    description: string;
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    phone: string;
  };
  experience: Experience[];
  skills: Skill[];
}

export const CV: CVData = {
  header: {
    fullName: {
      name: 'Camilo',
      lastname: 'Illanes'
    },
    role: 'Full Stack Developer',
    subtitle1: 'Frontend enfocado en producción, integración con APIs y backend',
    location: 'Coquimbo, Chile',
    yearsExperience: '7+'
  },
  about: {
    title: 'Sobre mí',
    description: 'Soy Desarrollador Full Stack con foco en Frontend, con experiencia en aplicaciones en producción y trabajo colaborativo con equipos de UX, producto y backend.n\
      Desarrollo interfaces con React y Next.js, integrando APIs REST y backend en Python (FastAPI, PostgreSQL). Mi formación en UX/UI me permite construir productos accesibles, mantenibles y pensados para usuarios reales, no solo desde lo visual sino también desde lo técnico.'
  },
  contact: {
    email: 'c.illanesdonoso@gmail.com',
    linkedin: 'https://www.linkedin.com/in/camiloillanes/',
    github: 'https://github.com/kusahio',
    phone: '+56990717236',
  },
  experience: [
    {
      company: 'Red MTS',
      role: 'Desarrollador Front-End / UI',
      period: 'Jul 2020 - Oct 2024',
      responsibilities: [
        'Desarrollo de interfaces con React y componentes reutilizables.',
        'Integración de aplicaciones con APIs REST.',
        'Participación en migraciones de sistemas y optimización de flujos bajo arquitectura MVC.',
        'Trabajo en equipos ágiles utilizando Git y control de versiones.'
      ],
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
      ]
    }
  ],
  skills: [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Python", icon: "python" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Docker", icon: "docker" },
    { name: "Figma", icon: "figma" },
  ]
}