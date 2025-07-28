import React from 'react';

export const HeroDescription = ({ description }) => {
  return (
    <p className="relative text-xl font-medium leading-7 text-center text-neutral-100 w-[1036px] max-md:w-full max-md:text-lg max-sm:w-full max-sm:text-base">
      {description}
    </p>
  );
};
