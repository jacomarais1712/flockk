import React from 'react';

export const Tag = ({ children, className = "" }) => {
  return (
    <div className={`flex relative items-start px-2.5 py-1.5 bg-emerald-900 rounded-sm max-sm:px-2 max-sm:py-1 ${className}`}>
      <span className="relative text-xs font-semibold tracking-wide leading-3 text-center uppercase text-neutral-300 max-sm:text-[10px]">
        {children}
      </span>
    </div>
  );
};
