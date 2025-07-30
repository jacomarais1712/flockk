import * as React from "react";
import MissionTagline from "./MissionTagline";
import { BackgroundBlur } from "../../../reuse/comp/BackgroundBlur";

function MissionContent() {
  const BackgroundBlurStyle = 'absolute right-[-500px] bottom-[-450px] w-[725px] h-[725px] max-sm:opacity-50 rounded-full opacity-55 z-1 aspect-square'
  const BackgroundBlurStyle2 = 'absolute left-[-1000px] bottom-[-999px] w-[725px] h-[725px] max-sm:left-[-508px] max-sm:opacity-58 rounded-full opacity-45 z-1 aspect-square'
  return (
    <div className="flex relative flex-col gap-6 items-start self-stretch max-md:gap-8 max-sm:gap-6">
      <MissionTagline />
      <h1 className="relative self-stretch text-5xl font-bold tracking-tight leading-[56.4px] text-zinc-200 max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-8 max-sm:text-center space-grotesk">
        Technical Excellence That Leads to Measurable Growth
      </h1>
      <p className="relative self-stretch text-base tracking-wide leading-6 text-gray-400 max-sm:text-center">
        For us, technical excellence is a means to an end: your growth. 
        We use our expertise to bring clarity to the chaos, 
        grounding every decision in clean data to build and scale 
        what truly drives your business forward.
      </p>
      <BackgroundBlur backgroundStyle={BackgroundBlurStyle}/>
      <BackgroundBlur backgroundStyle={BackgroundBlurStyle2}/>
    </div>
  );
}

export default MissionContent;
