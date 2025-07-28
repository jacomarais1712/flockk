import React from 'react';

export const HeroHeadline = () => {
  return (
    <h1 className="relative text-6xl font-bold space-grotesk tracking-tight text-center leading-[67.1px] text-zinc-200 w-[1036px] max-md:w-full max-md:text-5xl max-md:tracking-tight max-sm:w-full max-sm:text-3xl max-sm:tracking-normal">
      <span className="text-6xl font-bold text-emerald-400 max-md:text-5xl max-sm:text-3xl">
        Grow Your Revenue
      </span>
      <span className="text-6xl font-bold space-grotesk text-zinc-200 max-md:text-5xl max-sm:text-3xl">
        {' '}with Smarter Ads and Tracking That Works.
      </span>
    </h1>
  );
};
