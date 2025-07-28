import React from 'react';

export const TestimonialAvatar = ({
  imageSrc,
  name,
  title,
  textColor = "text-emerald-50",
  showDetails = true
}) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-full w-[102px]">
      <img
        src={imageSrc}
        alt={`${name} avatar`}
        className="object-contain w-14 rounded-full aspect-square"
      />
      {showDetails && (
        <div className="flex flex-col items-start mt-5 w-full">
          <div className={`text-base font-bold tracking-wide ${textColor}`}>
            {name}
          </div>
          <div className={`text-xs tracking-wide leading-relaxed ${textColor}`}>
            {title}
          </div>
        </div>
      )}
    </div>
  );
};
