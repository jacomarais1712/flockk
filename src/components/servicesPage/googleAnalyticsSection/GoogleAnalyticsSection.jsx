import * as React from "react";
import { AnalyticsContent } from "./googleAnalyticsComp/AnalyticsContent";
import { AnalyticsVisual } from "./googleAnalyticsComp/AnalyticsVisual";
import { BackgroundBlur } from "../../reuse/comp/BackgroundBlur";

export function GoogleAnalyticsSection() {
  const backgroundBlurStyle = 'absolute left-[-600px] bottom-[-265px] w-[725px] h-[725px] max-sm:opacity-90 rounded-full opacity-50 z-1 aspect-square'
  return (
    <section className="box-border flex relative flex-col gap-20 items-start px-16 py-28 mx-auto my-0 w-full max-w-[1440px] max-md:gap-16 max-md:px-10 max-md:py-20 max-sm:gap-10 max-sm:px-5 max-sm:py-3">
      <div className="flex relative gap-20 items-center self-stretch mx-auto max-w-none max-md:flex-col max-md:gap-16 max-md:max-w-[991px] max-sm:gap-10 max-sm:max-w-(--breakpoint-sm)">
        <AnalyticsContent />
        <AnalyticsVisual />
        <BackgroundBlur backgroundStyle={backgroundBlurStyle}/>
      </div>
    </section>
  );
}

export default GoogleAnalyticsSection;
