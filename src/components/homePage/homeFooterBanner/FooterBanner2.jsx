"use client";
import * as React from "react";
import FooterBannerContent from "./footerBannerComp/FooterBannerContent";

function FooterBanner() {
  const handleButtonClick = () => {
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  return (
    <section className="relative flex flex-col justify-center items-center px-16 py-32 min-h-[592px] max-md:px-5 max-md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src=""
          alt="Footer Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14B16D] to-[#0C814E] opacity-80"></div>
      </div>
      <div className="relative z-10">
        <FooterBannerContent
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/31b8cdb16d5402e0fe2c7a90e484bc499c8c0500?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64"
          heading="Ready to Grow with Confidence?"
          description="Get a tailored growth strategy backed by expert media buying and bulletproof tracking."
          buttonText="Speak To Us"
          buttonIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/22a32b9c9ffadccdbeb5b31859a7e848b6261a84?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64"
          onButtonClick={handleButtonClick}
        />
      </div>
    </section>
  );
}

export default FooterBanner;
