import React from 'react';

export const HeroHeadline = ({ headline, extHeadline, headingW }) => {
  return (
    <h1 className={`relative text-6xl text-center font-bold space-grotesk tracking-tight leading-[67.1px] text-neutral-50 w-[${headingW ? headingW : '1037px'}] max-md:w-full max-md:text-5xl max-md:tracking-tight max-sm:w-full max-sm:text-3xl max-sm:tracking-normal max-md:leading-[43.1px] max-sm:leading-[45.1px]`}>
      <span className={`text-6xl drop-shadow-xs drop-shadow-${headline.start?.shadow ? headline.start.shadow : 'white'}/40 font-bold text-emerald-400 max-md:text-5xl max-sm:text-3xl inline`}>
        {headline.start?.text}
      </span>
      <span className={`text-6xl font-bold text-${headline.titleColor ? headline.titleColor : 'neutral-50'} max-md:text-5xl max-sm:text-3xl inline`}>
        {headline.start?.text ? headline.title : headline.title}
      </span>
      <span className={`text-6xl font-bold drop-shadow-xs drop-shadow-${extHeadline.shadow ? extHeadline.shadow : 'white'}/40 space-grotesk text-${extHeadline.color ? extHeadline.color : 'emerald-400'} max-md:text-5xl max-sm:text-3xl`}>
        {' '}{extHeadline.title}
      </span>
    </h1>
  );
};
