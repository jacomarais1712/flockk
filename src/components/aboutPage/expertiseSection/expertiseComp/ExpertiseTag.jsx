import React from 'react';

export const ExpertiseTag = ({ children = "Our Expertise" }) => {
  return (
    <div className="flex gap-2 justify-center items-center self-start px-4 py-2 text-xs font-bold tracking-wide leading-relaxed text-center text-emerald-400 uppercase bg-emerald-900 rounded min-h-8">
      <div className="self-stretch my-auto">
        {children}
      </div>
    </div>
  );
};
