import React from 'react';
import { HeroHeadline } from './homeHeaderComp/HeroHeadline';
import { HeroDescription } from './homeHeaderComp/HeroDescription';
import { HeroButtons } from './homeHeaderComp/HeroButtons';
import TaglineBadge from './homeHeaderComp/TaglineBadge';
import { BackgroundBlur } from '../comp/BackgroundBlur'

const BgStyleA ='absolute left-[-24vw] bottom-[-100vh] w-[50vw] h-[50vw] rounded-full opacity-45 z-1 aspect-square'
const BgStyleB = 'absolute right-[-26vw] bottom-[-10vh] w-[50vw] h-[50vw] rounded-full opacity-55 z-1 aspect-square'

const headerObjExample = {
  height: "513px",
  width: '455px',
  backgroundBlur: 1, //if only 1 is received, top right will be displayed but not bottom left, 2 will display both
  tagline: 'Example',
  headline: {
    title: "Example Headline",
    color: "neutral-50"
  },
  extHeadline: {
    title: "is good for the environment",
    color: 'neutral-50'
  },
  description: "Example description of a description to pass",
  radialBgs: {
    radial1: {
        style: BgStyleA
    },
    radial2: {
        style: BgStyleB
    }
  }, // set to 1 or 2 depending on amount of background radial gradients
  buttons: { //set the 2 buttons you need, the second button will not have an arrow
    button1: {
      name: "call us",
      arrowIcon: true,
      link: '/contact'
    },
    button2: {
      name: "see what we do",
      link: '/about'
    }
  }
}

export const Header = ({ headerObj }) => {
  const defaultStyle = '{`flex overflow-hidden relative flex-col justify-center items-center self-stretch h-[${headerObj.height}] max-md:h-[700px] max-sm:h-[600px]`}'
  const BackgroundBlurStyle ='absolute left-[-24vw] bottom-[-100vh] w-[50vw] h-[50vw] rounded-full opacity-45 z-1 aspect-square'
  const BackgroundBlurStyle2 = 'absolute right-[-26vw] bottom-[-10vh] w-[50vw] h-[50vw] rounded-full opacity-55 z-1 aspect-square'
  return (
    <header className={`flex overflow-y-visible relative flex-col justify-center items-center self-stretch ${headerObj.height ? 'h-[calc(100vh-150px)]' : '' } max-sm:h-[calc(100vh-120px)] max-lg:h-[calc(100vh-70px)]`}>
      <div className="flex relative flex-col gap-8 lg:gap-10 xl:gap-12 justify-center items-center self-stretch px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-0 flex-[1_0_0] z-2 max-w-6xl mx-auto w-full">
        {headerObj.radialBgs?.radial1 && (
            <BackgroundBlur backgroundStyle={headerObj.radialBgs.radial1.style}/>
        )}
        {headerObj.radialBgs?.radial2 && (
            <BackgroundBlur backgroundStyle={headerObj.radialBgs.radial2.style}/>
        )}
        {headerObj.tagline &&
          <TaglineBadge>
            {headerObj.tagline}
          </TaglineBadge>
        }

        <section className="flex relative flex-col gap-4 md:gap-6 lg:gap-8 items-center self-stretch z-3 text-center">
          <HeroHeadline headline={headerObj.headline} extHeadline={headerObj.extHeadline} headingW={headerObj.width}/>
          <HeroDescription description={headerObj.description}/>
        </section>

        {headerObj.buttons ? <HeroButtons buttons={headerObj.buttons} /> : <></>}
      </div>
    </header>
  );
};

export default Header;
