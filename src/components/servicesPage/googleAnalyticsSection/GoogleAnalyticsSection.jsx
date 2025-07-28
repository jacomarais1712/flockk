import * as React from "react";
import { AnalyticsContent } from "./googleAnalyticsComp/AnalyticsContent";
import { AnalyticsVisual } from "./googleAnalyticsComp/AnalyticsVisual";
import { BackgroundBlur } from "../../reuse/comp/BackgroundBlur";

export function GoogleAnalyticsSection() {
  const backgroundBlurStyle = 'absolute left-[-34vw] bottom-[-55vh] w-[50vw] h-[50vw] rounded-full opacity-47 z-1 aspect-square'
  return (
    <section className="box-border flex relative flex-col gap-20 items-start px-16 py-28 mx-auto my-0 w-full max-w-[1440px] max-md:gap-16 max-md:px-10 max-md:py-20 max-sm:gap-10 max-sm:px-5 max-sm:py-16">
      <div className="flex relative gap-20 items-center self-stretch mx-auto max-w-none max-md:flex-col max-md:gap-16 max-md:max-w-[991px] max-sm:gap-10 max-sm:max-w-(--breakpoint-sm)">
        <AnalyticsContent />
        <AnalyticsVisual />
        <BackgroundBlur backgroundStyle={backgroundBlurStyle}/>
      </div>
    </section>
  );
}

export default GoogleAnalyticsSection;
