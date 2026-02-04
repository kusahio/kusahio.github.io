# Portafolio Profesional - Camilo Illanes

![Estado del Despliegue](https://github.com/kusahio/kusahio.github.io/actions/workflows/deploy.yml/badge.svg)
![Licencia](https://img.shields.io/badge/license-MIT-green)
![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=flat&logo=astro&logoColor=white)

Este repositorio contiene el código fuente de mi portafolio profesional personal. Es un proyecto web estático diseñado para mostrar mis habilidades, proyectos y experiencia laboral, con un enfoque radical en el rendimiento y el diseño minimalista.

**Ver Online:** [kusahio.github.io](https://kusahio.github.io)

## Sobre el Proyecto

El objetivo principal de este sitio es servir como carta de presentación digital. A diferencia de los portafolios tradicionales cargados de scripts pesados, esta web está construida sobre una arquitectura de **"Cero JavaScript por defecto"**.

Esto significa que el sitio carga instantáneamente incluso en conexiones lentas, ya que todo el contenido se renderiza como HTML estático en el servidor, y la interactividad (como copiar el email) se maneja con micro-scripts nativos del navegador.

## Stack Tecnológico

El proyecto ha sido migrado de una arquitectura basada en React a una solución nativa de Astro para maximizar la velocidad:

- **Core:** [Astro](https://astro.build/) (v5) - Generador de sitios estáticos de alto rendimiento.
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (v4) - Framework de utilidad para un diseño "Brutalista" y responsivo.
- **Iconos:** [Astro Icon](https://www.astroicon.dev/) + [Tabler Icons](https://tabler.io/) - Sistema de iconos SVG optimizados que no aumentan el bundle.
- **Lenguaje:** TypeScript - Para una experiencia de desarrollo robusta y segura.
- **Despliegue:** GitHub Actions & GitHub Pages.

## Arquitectura y Construcción

El sitio sigue una estructura de componentes reutilizables `.astro`:

1.  **Componentes UI:** Botones, enlaces y tarjetas son componentes aislados que reciben `props` tipadas.
2.  **Interactividad Ligera:** En lugar de cargar librerías como React para acciones simples, se utiliza JavaScript nativo (`Vanilla JS`) dentro de etiquetas `<script>` que se ejecutan solo cuando el componente está presente.
3.  **Gestión de Assets:** Las imágenes y fuentes están optimizadas automáticamente por Astro.

## Instalación y Configuración Local

Si deseas clonar y ejecutar este proyecto en tu entorno local:

### Prerrequisitos
- Node.js (v18 o superior)
- npm

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/kusahio/kusahio.github.io.git](https://github.com/kusahio/kusahio.github.io.git)
    cd kusahio.github.io
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    El sitio estará disponible en `http://localhost:4321`.

4.  **Construir para producción (opcional):**
    ```bash
    npm run build
    ```

## Estructura del Proyecto

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

## Licencia

Este proyecto está bajo la **Licencia MIT**.

Esto significa que eres libre de usar este código como base para tu propio portafolio, estudiarlo o modificarlo, siempre y cuando se incluya una copia de la licencia original y el aviso de copyright.

---
Hecho por [Camilo Illanes](https://www.linkedin.com/in/camilo-illanes/).