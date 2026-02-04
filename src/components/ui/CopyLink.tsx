import { useState } from 'react';
import IconComponent from "./Icons";

interface CopyLinkProps {
  value: string; // El texto a copiar (el email)
  label: string;
  icon?: string;
}

export const CopyLink = ({ value, label, icon }: CopyLinkProps) => {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const styles = 'text-base flex-row-reverse border-4 border-white text-white px-4 py-2 md:hover:scale-[1.02] md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer min-w-28 flex items-center justify-center gap-2 font-bold uppercase';

  return (
    <div className="relative">
      <button 
        onClick={handleCopy}
        className={styles}
        type="button"
      >
        {label}
        {icon && <IconComponent icon={icon} stroke={2} sizeClass="w-8 h-8"/>}
      </button>
      <div 
        className={`
          absolute -top-12 left-1/2 -translate-x-1/2 
          bg-brand-black text-brand-yellow font-bold text-xs uppercase px-3 py-1.5 
          border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]
          transition-all duration-300 pointer-events-none whitespace-nowrap
          ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        `}
      >
        Email Copiado
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-brand-black"></div>
      </div>

    </div>
  );
};