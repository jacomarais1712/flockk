import React from 'react';

export const NavigationArrow = ({
  direction = 'left',
  onClick,
  iconSrc,
  className = ""
}) => {
  const positionClass = direction === 'left'
    ? 'absolute left-0 z-0'
    : 'absolute right-0 z-0';

  return (
    <button
      onClick={onClick}
      className={`flex gap-2 justify-center items-center px-3 w-12 h-12 backdrop-blur-sm bg-neutral-700 rounded-[50px] top-[166px] ${positionClass} ${className}`}
      aria-label={`${direction === 'left' ? 'Previous' : 'Next'} testimonial`}
    >
      <img
        src={iconSrc}
        alt={`${direction} arrow`}
        className="object-contain self-stretch my-auto w-6 aspect-square"
      />
    </button>
  );
};
