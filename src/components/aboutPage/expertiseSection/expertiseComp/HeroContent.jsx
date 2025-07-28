import React from 'react';
import { ExpertiseTag } from './ExpertiseTag';

export const HeroContent = ({
  tagText = "Our Expertise",
  heading = "Meet Francois: Your Paid Media Strategist",
  description = "Francois brings over a decade of hands-on experience in performance marketing. With a sharp eye for data and a practical mindset, he's helped brands across Europe and South Africa grow through strategy, structure, and smart execution. Every ad, insight, and optimisation is made with intention — and your business in mind."
}) => {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <ExpertiseTag>{tagText}</ExpertiseTag>
      <div className="mt-4 w-full max-md:max-w-full">
        <h1 className="text-5xl font-bold tracking-tight text-neutral-50 leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
          {heading}
        </h1>
        <p className="mt-6 text-base tracking-wide leading-6 text-gray-400 max-md:max-w-full">
          {description}
        </p>
      </div>
    </div>
  );
};
