import React from 'react';
import { CTAContent } from './contactFooterComp/CTAContent';

function ContactFooter({ scrollToContact }) {
  return (
    <section className="flex relative flex-col justify-center items-center px-16 py-32 min-h-[424px] max-md:px-5 max-md:py-24">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-36 w-full rounded-xl min-h-[456px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/687e1c327ca8da9e00e8df3ba16df89e17106a17?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col max-w-full max-w-[780px]">
          <div className="w-full text-center max-md:max-w-full">
            <h1 className="space-grotesk text-5xl drop-shadow-xs drop-shadow-white font-bold tracking-tight leading-tight text-neutral-50 max-md:max-w-full max-md:text-4xl">
              Don't Just Follow the Flock-Lead it.
            </h1>
            <p className="mt-5 text-xl tracking-wide text-neutral-300 max-md:max-w-full">
              Work with us to outpace competition and lead your industry.
            </p>
          </div>
          <button className="flex gap-3 justify-center items-center self-center cursor-pointer hover:bg-emerald-100 hover:bg-none py-1.5 pr-1.5 pl-3.5 mt-8 text-base font-bold tracking-wide rounded bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)] text-zinc-900">
            <span onClick={() => scrollToContact(600, 0)} className="self-stretch my-auto">
              Let's talk
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6083b9b2d7ebc08787b571e067de24a9be6794b?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square fill-emerald-950"
              alt="Arrow icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactFooter;
