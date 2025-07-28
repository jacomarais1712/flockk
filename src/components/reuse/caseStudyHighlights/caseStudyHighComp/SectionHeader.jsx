import React from 'react';

export const SectionHeader = () => {
  return (
    <header className="flex relative justify-center items-end self-stretch">
      <div className="flex relative flex-col gap-4 items-center w-[487px] max-md:w-full">
        <div className="flex relative gap-2 justify-center items-center px-4 py-1.5 h-8 rounded bg-zinc-900 max-sm:px-3 max-sm:py-1 max-sm:h-7">
          <span className="relative text-xs font-bold tracking-wide leading-5 text-center text-emerald-400 uppercase max-sm:text-xs">
            Case Studies
          </span>
        </div>
        <div className="flex relative flex-col gap-6 items-center self-stretch">
          <h1 className="relative self-stretch text-5xl font-bold space-grotesk tracking-tight text-center text-emerald-50 leading-[56.4px] max-md:text-4xl max-sm:text-3xl max-sm:leading-8">
            Our Success Stories
          </h1>
          <p className="relative self-stretch text-xl tracking-wide leading-8 text-center text-slate-500 max-md:text-lg max-sm:text-base">
            87+ clients. 10+ years specialising in paid media and analytics.
            Explore a few of the stories behind the numbers.
          </p>
        </div>
      </div>
    </header>
  );
};
