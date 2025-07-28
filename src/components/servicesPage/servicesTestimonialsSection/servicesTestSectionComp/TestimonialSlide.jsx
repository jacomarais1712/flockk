import React from 'react';
import { TestimonialAvatar } from './servicesTestSectionComp/TestimonialAvatar';

export const TestimonialSlide = ({
  logoSrc,
  quote,
  avatarSrc,
  name,
  title,
  textColor = "text-emerald-50",
  quoteSize = "text-3xl",
  showLogo = true,
  showAvatar = true,
  centered = true
}) => {
  const containerClasses = centered
    ? "flex flex-col items-center self-stretch my-auto text-center min-w-60 w-[1312px] max-md:max-w-full"
    : "flex flex-col items-center self-stretch my-auto min-w-60 w-[1312px] max-md:max-w-full";

  return (
    <div className={`${containerClasses} ${textColor}`}>
      <div className="flex overflow-hidden flex-col items-center max-w-full w-[768px]">
        {showLogo && logoSrc && (
          <img
            src={logoSrc}
            alt="Company logo"
            className="object-contain max-w-full aspect-[4.67] w-[187px]"
          />
        )}
        <blockquote className={`self-stretch mt-10 ${quoteSize} font-medium tracking-normal leading-10 max-md:max-w-full ${centered ? 'text-center' : ''}`}>
          {quote}
        </blockquote>
        {showAvatar && avatarSrc && (
          <div className="mt-10">
            <TestimonialAvatar
              imageSrc={avatarSrc}
              name={name}
              title={title}
              textColor={textColor}
              showDetails={!!name}
            />
          </div>
        )}
      </div>
    </div>
  );
};
