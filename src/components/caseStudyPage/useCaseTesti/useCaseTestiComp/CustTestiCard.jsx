import React from 'react';
import { Quote } from './Quote';
import { Avatar } from './Avatar';

export const CustTestiCard = ({
  quote,
  avatarSrc,
  avatarAlt,
  name,
  title,
  variant = 'light',
  logo,
  logoAlt,
  className = ''
}) => {
  const containerClasses = variant === 'dark'
    ? "flex flex-col items-center text-center text-emerald-50"
    : "flex flex-col";

  const contentMaxWidth = variant === 'dark' ? "max-w-full w-[768px]" : "max-w-full w-[768px]";
  const avatarMaxWidth = variant === 'dark' ? "max-w-full w-full" : "max-w-full w-full";

  return (
    <div className={`flex flex-col items-center my-auto min-w-60 w-full max-md:max-w-full ${className}`}>
      <div className={`flex overflow-hidden flex-col ${contentMaxWidth}`}>
        {logo && (
          <img
            src={logo}
            alt={logoAlt || "Company logo"}
            className="object-contain max-w-full aspect-[4.67] w-[187px] mx-auto"
          />
        )}

        <Quote
          variant={variant}
          className={logo ? "mt-10 max-md:max-w-full" : "max-md:max-w-full"}
        >
          {quote}
        </Quote>

        <div className={`flex flex-col justify-center items-center ${logo ? 'mt-10' : 'mt-8'} ${avatarMaxWidth} ${variant === 'dark' ? '' : 'self-center'}`}>
          <Avatar
            src={avatarSrc}
            alt={avatarAlt}
            name={name}
            title={title}
            variant={variant}
          />
        </div>
      </div>
    </div>
  );
};
