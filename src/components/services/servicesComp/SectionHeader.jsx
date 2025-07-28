import React from 'react';

// Props: tagline (string), heading (string), description (string)
const SectionHeader = ({ tagline, heading, description }) => {
  return (
    <header className="flex relative flex-col gap-4 items-center w-full max-w-(--breakpoint-md) z-1">
      <div className="flex gap-2 justify-center items-center px-4 py-1.5 h-8 rounded bg-zinc-900">
        <span className="text-xs font-bold tracking-wide leading-5 text-center text-emerald-400 uppercase">
          {tagline}
        </span>
      </div>
      <div className="flex flex-col gap-6 items-center w-full">
        <h1 className="w-full text-5xl font-bold tracking-tight text-center text-emerald-50 leading-[56.4px] max-md:text-4xl max-sm:text-3xl max-sm:leading-8">
          {heading}
        </h1>
        <p className="w-full text-xl tracking-wide leading-8 text-center text-slate-500 max-md:text-lg max-sm:text-base">
          {description}
        </p>
      </div>
    </header>
  );
};

export default SectionHeader;
