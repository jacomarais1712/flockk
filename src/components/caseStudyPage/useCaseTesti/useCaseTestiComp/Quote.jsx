import React from 'react';

export const Quote = ({ children, variant = 'light', className = '' }) => {
  const baseClasses = "leading-relaxed max-sm:text-xl";
  const variantClasses = {
    light: "text-xl font-medium leading-7 text-center text-neutral-950",
    dark: "text-3xl font-medium tracking-normal leading-10 text-emerald-50"
  };

  return (
    <blockquote className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </blockquote>
  );
};
