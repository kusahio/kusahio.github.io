import type { CVData } from "./types";
/*import { getProjectImage } from "./utils";*/

export type { CVData } from "./types";

export const CV: CVData = {
  header: {
    fullName: {
      name: "Camilo",
      lastname: "Illanes",
    },
    role: "Software Developer",
    tagline: "Python • FastAPI • React • Next.js",
    location: "Chile",
    yearsExperience: "8+",
    yearsLabel: "Años en\nDesarrollo Web",
  },
  about: {
    title: "Sobre mí",
    description: `Desarrollador de software con experiencia construyendo aplicaciones web para entornos productivos.

He trabajado tanto en frontend como en backend, desarrollando interfaces, APIs e integraciones entre sistemas. Disfruto entender los problemas antes de elegir una tecnología y construir soluciones claras, mantenibles y preparadas para evolucionar.`,
  },
  experience: {
    title: "Experiencia",
    jobs: [
      {
        company: "SocialTravel",
        role: "Backend Developer | Automatización e Integración de IA",
        period: "Jul 2025 - Mar 2026",
        responsibilities: [
          "Desarrollo de APIs en Python (FastAPI) para gestión de disponibilidad y consultas de reservas.",
          "Implementación de automatizaciones con n8n para orquestación de flujos entre formularios, base de datos y servicios internos.",
          "Integración de APIs de IA (OpenAI y Gemini) para consultas inteligentes y sugerencia de fechas alternativas.",
          "Desarrollo de flujos automatizados para procesamiento de solicitudes y atención de usuarios.",
          "Integración de herramientas como Typeform y WordPress (Elementor) como capas de entrada y visualización del sistema.",
        ],
        summary:
          "Desarrollo de APIs backend, automatización de flujos e integración de IA en plataforma de gestión hotelera.",
      },
      {
        company: "Red MTS",
        role: "Frontend Developer",
        period: "Jul 2020 - Oct 2024",
        responsibilities: [
          "Desarrollo de interfaces en producción con React y componentes reutilizables.",
          "Integración con APIs REST y optimización de flujos.",
          "Trabajo en equipos ágiles bajo control de versiones (Git)",
        ],
        summary:
          "Interfaces en producción con React, integración con APIs REST y trabajo en equipos ágiles.",
        projects: [
          {
            title: "Plataforma E-commerce MTS (Portal del socio)",
            achievements: [
              "Desarrollo de componentes frontend con React.",
              "Integración con APIs REST.",
              "Optimización de rendimiento y mantenibilidad.",
            ],
          },
        ],
      },
      {
        company: "Walmart Chile",
        role: "Frontend Developer | Web Designer",
        period: "Jul 2017 - Ene 2020",
        responsibilities: [
          "Desarrollo y mantenimiento de interfaces web accesibles y responsive.",
          "Mejora de semántica HTML y flujos mobile-first.",
          'Participación en el diseño e implementación del checkout "Buy Smart"',
        ],
        summary:
          "Desarrollo de interfaces web accesibles y optimizadas para e-commerce, con foco mobile-first.",
        projects: [
          {
            title: 'Checkout "Buy Smart" - Walmart',
            achievements: [
              "Implementación de interfaz accesible y optimizada para el proceso de pago.",
              "Enfoque mobile-first y mejora de experiencia de usuario.",
            ],
          },
        ],
      },
      {
        company: "Falabella Retail S.A",
        role: "Web Designer",
        period: "Feb 2017 - Jul 2017",
        responsibilities: [
          "Implementación de vistas web responsivas.",
          "Soporte frontend utilizando JavaScript.",
        ],
        summary:
          "Implementación de vistas web responsivas y soporte frontend con JavaScript.",
      },
    ],
  },
  skills: {
    title: "Tech Stack",
    skillSet: [
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "n8n", icon: "n8n" },
    ],
  },
  worksProjects: {
    title: "Proyectos",
    projects: [
      {
        title: "FastAPI Multi-Tenant SaaS",
        description:
          "Laboratorio personal para explorar arquitectura backend, multi-tenancy, RBAC y diseño de aplicaciones SaaS utilizando FastAPI, SQLAlchemy y PostgreSQL.",
        repoLink: "https://github.com/kusahio/fastapi-multitenant-saas",
        tags: ["python", "fastapi", "postgresql", "sqlalchemy", "jwt"],
        /*thumb: getProjectImage('fastapi-multitenant-saas.png')*/
      },
      {
        title: "TaskFlow IA",
        description:
          "Aplicación Full Stack para gestión de tareas mediante IA generativa, integrando FastAPI, Next.js, PostgreSQL y modelos LLM.",
        repoLink: "https://github.com/kusahio/taskFlow",
        tags: ["nextjs", "python", "fastapi", "postgresql", "ai"],
        /*thumb: getProjectImage('task-manager.png')*/
      },
    ],
  },
  contact: {
    title: "Hablemos",
    description:
      "Abierto a nuevas oportunidades y proyectos. Puedes escribirme por email o LinkedIn.",
    copyToast: "¡Email Copiado!",
    contactLinks: [
      {
        title: "Email",
        link: "c.illanesdonoso@gmail.com",
        icon: "email",
      },
      {
        title: "Linkedin",
        link: "https://www.linkedin.com/in/camiloillanes/",
        icon: "linkedin",
      },
      {
        title: "Github",
        link: "https://github.com/kusahio",
        icon: "github",
      },
    ],
  },
};
