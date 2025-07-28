"use client";
import { SectionTitle } from './pricingPageComp/SectionTitle';

function PricingHeader() {
  return (
    <header className="flex relative flex-col gap-20 items-center px-16 py-20 w-full bg-black max-md:px-8 max-md:py-16 max-sm:gap-10 max-sm:px-5 max-sm:py-10">
      <div className="flex relative flex-col gap-8 items-center mx-auto max-w-none w-[782px] max-md:w-full max-md:max-w-[700px] max-sm:gap-6 max-sm:max-w-(--breakpoint-sm)">
        <SectionTitle
          tagline="PRICING"
          title="Transparent Plans. Expert Support. Clear Results."
          description="Whether you're just getting started or scaling aggressively, we've got a plan built for your goals."
        />
      </div>
    </header>
  );
}

export default PricingHeader;
