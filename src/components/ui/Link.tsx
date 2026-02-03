import IconComponent from "./Icons";

interface LinkProps {
  href: string;
  label?: string;
  type?: 'contact' | 'link' | 'navbar';
  icon?: string;
}

export const Link = ({ href, label, type='link', icon } : LinkProps) => {

  const typeLink = {
    link: 'border-3 border-brand-black px-4 py-1 hover:bg-brand-yellow text-xs transition-colors',
    contact: 'text-base flex-row-reverse border-4 border-white text-white px-4 py-2 md:hover:scale-[1.02] md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all',
    navbar: ''
  };
  return (
    <a 
      href={href.trim()}
      target="_blank" 
      rel="noopener noreferrer" 
      className={`min-w-28 flex items-center justify-center gap-2 font-bold uppercase ${typeLink[type]}`}
    >
      {label}
      {icon ? (
        <IconComponent icon={icon} stroke={2} sizeClass="w-8 h-8"/>
      ) : (
        type === 'link' && <IconComponent icon='externalLink' sizeClass='w-5 h-5'/>
      )}
    </a>
  );
};