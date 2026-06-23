/// <reference types="astro/client" />

declare module 'astro:assets' {
  export const Image: any;
  const _default: any;
  export default _default;
}

declare module '@/*';

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
