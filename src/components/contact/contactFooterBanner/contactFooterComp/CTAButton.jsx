import React from 'react';
import { ArrowIcon } from './ArrowIcon';

export const CTAButton = () => {
  return (
    <button className="flex relative gap-3 justify-center items-center py-1.5 pr-1.5 pl-3.5 rounded cursor-pointer max-sm:gap-2 max-sm:py-2 max-sm:pr-2 max-sm:pl-4">
      <span className="relative text-base font-bold tracking-wide leading-6 text-zinc-900 max-sm:text-sm max-sm:tracking-wide">
        Book a Free Consultation
      </span>
      <ArrowIcon />
    </button>
  );
};
