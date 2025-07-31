import * as React from "react";
import { GradientButton } from "./aboutFooterBannerComp/GradientButton";

function AboutFooterBanner() {
  const handleButtonClick = (position) => {
    window.scrollTo({ top: position, behavior: 'smooth' });
  };

  return (
    <section className="flex flex-col justify-center px-16 py-20 max-md:px-5">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-36 w-full rounded-xl min-h-[456px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/687e1c327ca8da9e00e8df3ba16df89e17106a17?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col self-stretch my-auto min-w-60 w-full">
          <header className="w-full text-center text-neutral-50 max-md:max-w-full">
            <h1 className="text-5xl font-bold tracking-tight leading-tight max-md:max-w-full max-md:text-4xl space-grotesk">
              Let’s Find Your Flockk
            </h1>
            <p className="mt-5 text-xl text-neutral-300 tracking-wide max-md:max-w-full">
              We’ll deliver a custom Google Ads strategy with meticulous execution and transparent tracking for confident scaling.
            </p>
          </header>
          <div className="flex justify-center items-center self-center mt-8">
            <GradientButton
              handleButtonClick={handleButtonClick}
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/526482164ebe7541eb4c3abb23766804a7113542?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce"
              iconAlt="Arrow icon"
            >
              Contact Us
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFooterBanner;
