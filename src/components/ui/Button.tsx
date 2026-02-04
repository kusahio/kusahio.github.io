import React from 'react';

interface ButtonProps {
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  target?: string;
}

export default function Button({ 
  as = 'button', 
  children, 
  className = '', 
  variant = 'primary', 
  ...props 
}: ButtonProps) {

  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-2 font-display font-bold uppercase border-2 border-brand-black transition-all active:translate-y-1 active:shadow-none cursor-pointer";
  
  const variants = {
    primary: "bg-brand-red text-white shadow-[4px_4px_0px_0px_var(--color-brand-black)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--color-brand-black)]",
    secondary: "bg-white text-brand-black shadow-[4px_4px_0px_0px_var(--color-brand-black)] hover:bg-brand-yellow hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--color-brand-black)]"
  };

  const Component = as === 'button' ? 'button' : 'a';

  return (
    // @ts-ignore
    <Component 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}