import React from 'react';
import { CTAContent } from './pricingFooterComp/CTAContent';

function PricingFooterBanner() {
  return (
    <section className="flex relative flex-col justify-center items-center px-16 py-32 min-h-[424px] max-md:px-5 max-md:py-24">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d9d9453ba30d0d8f03bbea748b4c1b90abc43b9?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c"
        className="object-cover absolute inset-0 size-full"
        alt="Background"
      />
      <div className="flex relative flex-col max-w-full w-[768px]">
        <div className="w-full text-center max-md:max-w-full">
          <h1 className="text-5xl text-shadow-xs text-shadow-white font-bold tracking-tight leading-tight text-zinc-200 max-md:max-w-full max-md:text-4xl">
            Let’s Find Your Flockk
          </h1>
          <p className="mt-5 text-xl tracking-wide text-neutral-300 max-md:max-w-full">
            We’ll deliver a custom Google Ads strategy with meticulous execution and transparent tracking for confident scaling.
          </p>
        </div>
        <button className="flex gap-3 justify-center items-center self-center cursor-pointer hover:bg-emerald-100 hover:bg-none py-1.5 pr-1.5 pl-3.5 mt-8 text-base font-bold tracking-wide rounded bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)] text-zinc-900">
          <span className="self-stretch my-auto">
            Book a free consultation
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6083b9b2d7ebc08787b571e067de24a9be6794b?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square fill-emerald-950"
            alt="Arrow icon"
          />
        </button>
      </div>
    </section>
  );
}

export default PricingFooterBanner;
