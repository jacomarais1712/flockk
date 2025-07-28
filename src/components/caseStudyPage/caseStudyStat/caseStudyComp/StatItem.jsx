"use client";
import * as React from "react";

export const StatItem = ({ value, description }) => {
  return (
    <div className="flex relative flex-col gap-2 items-start flex-[1_0_0] max-sm:items-center">
      <div className="relative self-stretch text-7xl font-bold tracking-tighter text-center leading-[88px] text-zinc-200 max-md:text-6xl max-md:tracking-tighter max-md:leading-[70.4px] max-sm:text-5xl max-sm:tracking-tight max-sm:leading-[52.8px]">
        {value}
      </div>
      <p className="relative self-stretch text-xl leading-7 text-center text-slate-500 max-md:text-lg max-sm:text-base max-sm:leading-6">
        {description}
      </p>
    </div>
  );
};
