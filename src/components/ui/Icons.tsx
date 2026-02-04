import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGit,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWordpress,
  IconDatabase,
  IconApi,
  IconCode,
  IconExternalLink,
  IconMail,
  IconCopyright
} from '@tabler/icons-react'

const ICON_MAP = {
  react: IconBrandReact,
  nextjs: IconBrandNextjs,
  typescript: IconBrandTypescript,
  python: IconBrandPython,
  docker: IconBrandDocker,
  figma: IconBrandFigma,
  git: IconBrandGit,
  github: IconBrandGithub,
  wordpress: IconBrandWordpress,
  postgresql: IconDatabase,
  fastapi: IconApi,
  linkedin: IconBrandLinkedin,
  externalLink: IconExternalLink,
  email: IconMail,
  copyright: IconCopyright
};

export type IconName = keyof typeof ICON_MAP;

interface IconProps {
  icon: string;
  stroke?: number;
  sizeClass?: string; 
}

export default function IconComponent({ icon, stroke=1.7, sizeClass='w-7 h-7 md:w-10 md:h-10' }: IconProps) {

  const IconRender = ICON_MAP[icon as IconName] || IconCode;

  return (
    <IconRender
      stroke={stroke}
      className={`text-current transition-colors duration-300 ${sizeClass}`}
    />
  );
}