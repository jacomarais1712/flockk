import React from 'react';

export const SectionHeader = ({ tagline, title }) => {
  return (
    <header className="flex flex-col items-center font-bold text-center max-md:max-w-full">
      <div className="flex gap-2 justify-center items-center px-4 py-2 text-xs tracking-wide leading-relaxed text-emerald-400 uppercase whitespace-nowrap rounded bg-zinc-900 min-h-8">
        <div className="self-stretch my-auto text-emerald-400">
          {tagline}
        </div>
      </div>
      <h1 className="mt-6 text-5xl tracking-tight leading-tight text-emerald-50 max-md:max-w-full max-md:text-4xl">
        {title}
      </h1>
    </header>
  );
};
