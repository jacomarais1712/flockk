import * as React from "react";

export const SectionTitle = ({ tagline, heading, description }) => {
  return (
    <header className="flex flex-col min-w-60 w-[533px] max-md:max-w-full">
      <div className="flex gap-2 justify-center items-center self-start px-4 py-2 text-xs font-bold tracking-wide leading-relaxed text-center text-emerald-400 uppercase rounded bg-zinc-900 min-h-8 max-sm:self-center">
        <span className="self-stretch my-auto text-emerald-400">
          {tagline}
        </span>
      </div>
      <div className="mt-4 w-full max-md:max-w-full">
        <h1 className="text-5xl font-bold tracking-tight text-emerald-50 leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-sm:text-center">
          {heading}
        </h1>
        <p className="mt-6 text-xl tracking-wide leading-8 text-slate-500 max-md:max-w-full max-sm:text-center">
          {description}
        </p>
      </div>
    </header>
  );
};
