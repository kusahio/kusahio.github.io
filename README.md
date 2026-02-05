# Portafolio Web de Camilo Illanes

![Estado del Despliegue](https://github.com/kusahio/kusahio.github.io/actions/workflows/deploy.yml/badge.svg)
![Licencia](https://img.shields.io/badge/license-MIT-green)
![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=flat&logo=astro&logoColor=white)

Este repositorio contiene el código fuente de mi sitio web personal de presentación.  
Está pensado para ser simple, rápido y claro, priorizando performance y mantenibilidad por sobre complejidad innecesaria.

Github Page: [https://kusahio.github.io](https://kusahio.github.io)

---

## ¿Qué es este proyecto?

Es mi **sitio web personal / portafolio profesional**, construido como un sitio estático.

El objetivo principal es funcionar como carta de presentación: mostrar mi perfil, experiencia y forma de trabajar, sin intentar ser una aplicación compleja ni una SPA.

---

## Stack tecnológico

El proyecto está construido con **Astro**, apuntando a generar HTML estático y minimizar JavaScript en el cliente.

- **Astro (v5)** – Generación de sitios estáticos, priorizando performance
- **Tailwind CSS (v4)** – Estilos utilitarios y responsive
- **TypeScript** – Tipado y soporte durante el desarrollo
- **Astro Icons / Tabler Icons** – Íconos SVG livianos
- **GitHub Pages + GitHub Actions** – Deploy automático

> No es una SPA ni depende de frameworks de UI pesados.  
> El JavaScript se usa solo cuando es necesario y de forma puntual.

---

## Estructura del proyecto

```text
/
├── public/          # Assets estáticos (CV, Favicon, OG Image)
├── src/
│   ├── components/  # Bloques de construcción (UI y Secciones)
│   │   ├── ui/      # Componentes base (Link, Button, Icons)
│   │   └── sections/# Secciones completas (Hero, About, Projects)
│   ├── layouts/     # Plantilla principal HTML
│   ├── pages/       # Rutas del sitio (index.astro)
│   └── styles/      # CSS Global y configuraciones de Tailwind
├── astro.config.mjs # Configuración de integraciones
└── package.json     # Dependencias del proyecto
```

---

## Cómo levantar el proyecto localmente

### Requisitos

- Node.js v18 o superior
- npm

### Pasos

```bash
git clone https://github.com/kusahio/kusahio.github.io.git
cd kusahio.github.io
npm install
npm run dev
```

Servidor local disponible en:  
`http://localhost:4321`

### Build de producción

```bash
npm run build
```

---

## Decisiones técnicas

- Uso de **HTML estático** para mejorar tiempos de carga y accesibilidad
- Tailwind para evitar CSS innecesario y mantener consistencia visual
- Componentes simples, sin lógica compleja en el cliente
- Deploy automático con GitHub Actions para mantener el sitio siempre actualizado

---

## Licencia y condiciones de uso

Este proyecto se distribuye bajo **MIT License**.

Podés usar, copiar, modificar y distribuir el código libremente, **siempre que se cumplan estas condiciones**:

- Se debe mantener la licencia MIT incluida en el repositorio.
- Se debe dar crédito visible al autor original (**Camilo Illanes**), ya sea:
  - en el README del proyecto derivado, o
  - en la documentación, o
  - en el footer o sección de créditos del sitio resultante.

Esto aplica tanto para uso personal como comercial.

---

## Autor

**Camilo Illanes**  
Full Stack Developer (Frontend-focused).

LinkedIn: [https://www.linkedin.com/in/camiloillanes](https://www.linkedin.com/in/camiloillanes/)