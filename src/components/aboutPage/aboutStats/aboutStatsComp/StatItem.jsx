import React from 'react';

const StatItem = ({ value, description }) => {
  return (
    <article className="flex relative flex-col flex-1 gap-2 items-start max-sm:items-center max-sm:w-full">
      <div className="relative w-full text-6xl font-bold tracking-tight text-center leading-[67.1px] text-zinc-200 max-md:text-5xl max-sm:text-4xl space-grotesk">
        {value}
      </div>
      <p className="relative w-full text-base tracking-wide leading-6 text-center text-slate-500 max-md:text-sm max-sm:text-sm max-sm:text-center">
        {description}
      </p>
    </article>
  );
};

export default StatItem;
