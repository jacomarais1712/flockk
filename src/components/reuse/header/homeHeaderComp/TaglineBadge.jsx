import React from 'react';

const TaglineBadge = ({ children }) => {
  return (
    <div className="flex relative gap-2 justify-center items-center px-4 py-1.5 h-8 rounded bg-zinc-900 max-sm:px-3 max-sm:py-1 max-sm:h-7">
      <span className="relative text-xs font-bold tracking-wide leading-5 text-center text-emerald-400 uppercase">
        <span className="text-xs font-bold text-emerald-400 max-sm:text-xs">
          {children}
        </span>
      </span>
    </div>
  );
};

export default TaglineBadge;