import React from 'react';

export const Avatar = ({ imageSrc, name, title }) => {
  return (
    <div className="flex gap-5 items-center self-start mt-8 text-center text-emerald-50 max-sm:flex-col max-sm:justify-center max-sm:self-center max-sm:mt-4">
      <img
        src={imageSrc}
        alt={`${name} avatar`}
        className="object-contain shrink-0 self-stretch my-auto w-14 rounded-full aspect-square max-sm:self-center max-sm:w-12"
      />
      <div className="flex flex-col items-start self-stretch my-auto">
        <div className="text-base font-bold tracking-wide max-sm:text-sm">
          {name}
        </div>
        <div className="text-xs tracking-wide leading-relaxed max-sm:text-xs">
          {title}
        </div>
      </div>
    </div>
  );
};
