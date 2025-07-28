import React from 'react';

const SectionTitle = ({ tagline, title }) => {
  return (
    <header className="flex relative flex-col gap-6 items-center">
      <div className="flex relative gap-2 justify-center items-center px-4 py-1.5 h-8 rounded bg-zinc-900">
        <span className="relative text-xs font-bold tracking-wide leading-5 text-center text-emerald-400 uppercase">
          {tagline}
        </span>
      </div>
      <h1 className="relative text-5xl font-bold space-grotesk tracking-tight text-center text-emerald-50 leading-[56.4px] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-7">
        {title}
      </h1>
    </header>
  );
};

export default SectionTitle;
