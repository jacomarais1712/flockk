import React from 'react';
import { BackgroundBlur } from '../../reuse/comp/BackgroundBlur';
import { HeroHeadline } from './homeHeaderComp/HeroHeadline';
import { HeroDescription } from './homeHeaderComp/HeroDescription';
import { HeroButtons } from './homeHeaderComp/HeroButtons';

export const HomeHeader = () => {
  const backgroundBlurStyle = 'absolute left-[-24vw] bottom-[-45vh] w-[50vw] h-[50vw] rounded-full opacity-55 z-1 aspect-square';
  const backgroundBlur2Style = 'absolute right-[-414px] top-[-265px] w-[725px] h-[725px] rounded-full opacity-70 z-1 aspect-square';
  const backgroundBlur3Style = 'absolute right-[-440px] bottom-[-291px] w-[725px] h-[725px] rounded-full opacity-50 z-1 aspect-square';
  return (
    <header className="flex overflow-y-visible relative flex-col justify-center items-center self-stretch h-[812px] max-md:h-[700px] max-sm:h-[600px]">
      <div className="flex relative flex-col gap-10 justify-center items-center self-stretch px-16 py-0 flex-[1_0_0] z-2 max-md:gap-8 max-md:px-8 max-md:py-0 max-sm:gap-6 max-sm:px-5 max-sm:py-0">
        <BackgroundBlur backgroundStyle={backgroundBlur2Style} />
        <BackgroundBlur backgroundStyle={backgroundBlurStyle}/>

        <section className="flex relative flex-col gap-6 items-center self-stretch z-3">
          <HeroHeadline />
          <HeroDescription />
        </section>

        <HeroButtons />
      </div>
    </header>
  );
};

export default HomeHeader;
