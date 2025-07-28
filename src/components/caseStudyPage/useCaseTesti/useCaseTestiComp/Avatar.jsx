import React from 'react';

export const Avatar = ({
  src,
  alt = "Avatar",
  name,
  title,
  variant = 'light',
  className = ''
}) => {
  const textColorClass = variant === 'dark' ? 'text-emerald-50' : 'text-neutral-950';

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img
        src={src}
        alt={alt}
        className="object-contain w-14 rounded-full aspect-square"
      />
      {(name || title) && (
        <div className="flex flex-col items-start mt-5 w-full">
          {name && (
            <div className={`text-base font-bold tracking-wide ${textColorClass}`}>
              {name}
            </div>
          )}
          {title && (
            <div className={`text-xs tracking-wide leading-relaxed ${textColorClass}`}>
              {title}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
