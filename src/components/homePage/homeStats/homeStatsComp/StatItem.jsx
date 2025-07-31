import React from 'react';

const StatItem = ({ value, description }) => {
  return (
    <div className="flex relative flex-col gap-2 items-start flex-[1_0_0] max-sm:items-center">
      <h2 className="relative self-stretch text-7xl text-neutral-50 font-bold tracking-tighter text-center leading-[88px] text-zinc-200 max-md:text-5xl max-md:tracking-tight max-md:leading-[66px] max-sm:text-5xl max-lg:text-5xl max-sm:tracking-tight max-sm:leading-[52.8px] space-grotesk">
        {value}
      </h2>
      <p className="relative self-stretch text-2xl tracking-wide leading-8 text-center text-slate-500 max-md:text-sm max-md:tracking-wide max-md:leading-7 max-sm:text-base max-sm:tracking-wide max-sm:leading-6">
        {description}
      </p>
    </div>
  );
};

export default StatItem;
