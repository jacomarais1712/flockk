"use client";
import { TaglineBadge } from './servicesPageComp/TaglineBadge';
import { HeroHeading } from './servicesPageComp/HeroHeading';
import { CallToActionButton } from './servicesPageComp/CallToActionButton';
import { BackgroundBlur } from '../../reuse/comp/BackgroundBlur';

/**
 * Header65 - A hero section component with tagline, heading, description, and CTA button
 */
export function ServicesHeader() {
  const handleBookCall = () => {
    // Add your booking logic here
    console.log('Book a call clicked');
  };
  const BackgroundBlurStyle ='absolute left-[-24vw] bottom-[-100vh] w-[50vw] h-[50vw] rounded-full opacity-45 z-1 aspect-square'
  const BackgroundBlurStyle2 = 'absolute right-[-26vw] bottom-[-10vh] w-[50vw] h-[50vw] rounded-full opacity-55 z-1 aspect-square'
  return (
    <header className="flex relative flex-col gap-20 items-center px-16 py-20 w-full max-md:gap-16 max-md:px-8 max-md:py-16 max-sm:gap-10 max-sm:px-4 max-sm:py-10">
      <div className="flex relative flex-col gap-10 mt-20 items-center mx-auto max-w-full w-[768px] max-md:gap-8 max-md:w-full max-md:max-w-[991px] max-sm:gap-6 max-sm:max-w-(--breakpoint-sm)">
        <section className="flex relative flex-col gap-4 items-center self-stretch max-sm:gap-3">
          <TaglineBadge text="SERVICES" />

          <div className="flex relative flex-col gap-6 items-center self-stretch max-sm:gap-4">
            <HeroHeading
              primaryText="Drive Growth With Our"
              accentText="Expert Solutions"
            />

            <p className="relative max-w-full text-xl leading-7 text-center text-neutral-300 w-[644px] max-md:w-full max-md:text-lg max-sm:text-base max-sm:leading-6">
              Unlock your business potential with our tailored digital marketing
              services designed for success.
            </p>
          </div>
        </section>

        <CallToActionButton
          text="Book a Call"
          onClick={handleBookCall}
        />
      </div>
      <BackgroundBlur backgroundStyle={BackgroundBlurStyle2} />
      <BackgroundBlur backgroundStyle={BackgroundBlurStyle} />
    </header>
  );
}

export default ServicesHeader;
