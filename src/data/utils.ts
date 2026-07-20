import type { ImageMetadata } from "astro";

const projectThumbs = import.meta.glob<{
  default: ImageMetadata;
}>("/src/assets/projectThumbs/*.{jpeg,jpg,png,gif,webp}", { eager: true });

export function getProjectImage(
  filename: string,
): ImageMetadata | undefined {
  const path = `/src/assets/projectThumbs/${filename}`;
  return projectThumbs[path]?.default;
}
