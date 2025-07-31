import React from 'react';
import { HeroContent } from './expertiseComp/HeroContent';
import { ActionButtons } from './expertiseComp/ActionButtons';

export const ExpertiseHero = ({
  backgroundImage = "/backgrounds/expertise/hero_bg1.svg",
  heroImage = "/owner/Frooz1.png",
  tagText = "Our Expertise",
  heading = "Meet Francois: Director & Paid Media Strategist",
  description = "Leveraging over a decade of hands-on performance marketing experience, Francois drives sustainable growth for brands across Europe and South Africa. He translates complex data into actionable strategy, delivering measurable results through smart, intentional execution. His approach ensures every campaign is meticulously crafted to achieve your core marketing and business objectives.",
  primaryButtonText = "Get In Touch",
  secondaryButtonText = "See Our Work",
  onPrimaryClick,
  onSecondaryClick
}) => {
  const heroButtonClick = (position) => {
    window.scrollTo({ top: position, behavior: 'smooth' });
  };
  return (
    <section className="flex flex-col justify-center items-center px-16 py-20 max-md:px-5">
      <div className="flex relative flex-col gap-10 items-center px-10 w-full max-w-[1306px] min-h-[495px] max-md:px-5 max-md:max-w-full bg-grad">
        <div className="flex relative flex-wrap gap-10 justify-between items-center self-stretch my-auto min-w-60 w-[1226px] max-md:w-[800px] max-sm:w-full max-sm:flex-col max-sm:py-10">
          <img
            src={heroImage}
            className="object-contain self-stretch my-auto aspect-square min-w-60 w-[434px] max-md:max-w-full max-sm:w-full"
            alt="Francois - Paid Media Strategist"
          />
          <div className="flex flex-col self-stretch my-auto min-w-60 w-[712px] max-md:max-w-full max-sm:w-full">
            <HeroContent
              tagText={tagText}
              heading={heading}
              description={description}
            />
            <ActionButtons
              primaryText={primaryButtonText}
              secondaryText={secondaryButtonText}
              onPrimaryClick={heroButtonClick}
              onSecondaryClick={heroButtonClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseHero;
