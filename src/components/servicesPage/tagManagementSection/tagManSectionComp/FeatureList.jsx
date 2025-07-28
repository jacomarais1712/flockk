import React from 'react';
import { ChecklistItem } from './ChecklistItem';

export const FeatureList = () => {
  const features = [
    "GTM container setup and audit",
    "Custom event tracking for any platform.",
    "Debugging and QA of tags",
    "Server-side tagging setup (Including Meta Conversions API)"
  ];

  return (
    <div className="flex relative flex-col gap-4 items-start self-stretch">
      <h3 className="relative self-stretch text-base font-bold tracking-wide leading-6 text-zinc-200 max-md:text-base max-sm:text-sm max-sm:tracking-wide">
        What we can help you with:
      </h3>
      <ul className="flex relative flex-col gap-4 items-start self-stretch">
        {features.map((feature, index) => (
          <ChecklistItem key={index}>
            {feature}
          </ChecklistItem>
        ))}
      </ul>
    </div>
  );
};
