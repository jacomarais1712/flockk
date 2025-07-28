import React from 'react';
import TaglineBadge from './TaglineBadge';
import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';

const AboutHeader = () => {
  return (
    <section className="box-border flex relative flex-col gap-20 items-center px-16 py-20 w-full min-h-screen bg-black">
      <div className="flex relative flex-col gap-4 items-center max-w-full w-[768px] max-md:w-full max-md:max-w-[600px] max-sm:gap-6 max-sm:w-full">
        <TaglineBadge>
          About Us
        </TaglineBadge>

        <div className="flex relative flex-col gap-4 items-center self-stretch">
          <div className="flex relative flex-col gap-6 items-center self-stretch">
            <div className="flex relative flex-col gap-4 items-center self-stretch">
              <HeroTitle>
                Your Growth, Our Mission
              </HeroTitle>
            </div>

            <HeroDescription>
              Unlock your business potential with our tailored digital marketing services designed for success.
            </HeroDescription>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
