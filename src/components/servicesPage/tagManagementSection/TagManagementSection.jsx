import React from 'react';
import { IllustrationSection } from './tagManSectionComp/IllustrationSection';
import { ContentSection } from './tagManSectionComp/ContentSection';
import { BackgroundBlur } from '../../reuse/comp/BackgroundBlur';

export const TagManagementSection = () => {
  const BackgroundBlurStyle = 'absolute right-[-42vw] bottom-[-73vh] w-[50vw] h-[50vw] rounded-full opacity-55 z-1 aspect-square'
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <section className="box-border flex relative flex-col gap-20 items-start px-16 py-28 mx-auto my-0 w-full max-w-[1440px] max-md:gap-16 max-md:px-10 max-md:py-20 max-sm:gap-10 max-sm:px-6 max-sm:py-3">
        <div className="flex relative gap-20 items-center self-stretch w-full max-md:flex-col max-md:gap-16 max-md:items-start max-sm:gap-10">
          <IllustrationSection />
          <ContentSection /> 
          <BackgroundBlur backgroundStyle={BackgroundBlurStyle} />
        </div>
      </section>
    </>
  );
};

export default TagManagementSection;
