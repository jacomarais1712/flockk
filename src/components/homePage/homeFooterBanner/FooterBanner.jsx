"use client";
import * as React from "react";
import FooterBannerContent from "./footerBannerComp/FooterBannerContent";

/**
 * CTA27 - Main call-to-action section component with background image
 * Features a centered content area with icon, heading, description, and action button
 */
function FooterBanner() {
  const handleButtonClick = () => {
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  return (
    <section className="flex relative flex-col justify-center items-center px-16 py-32 min-h-[592px] max-md:px-5 max-md:py-24">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a17eea9027d63026c0a708ea887d871e0c9e52e1?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <FooterBannerContent
        iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/31b8cdb16d5402e0fe2c7a90e484bc499c8c0500?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64"
        heading="Ready to Grow with Confidence?"
        description="Get a tailored growth strategy backed by expert media buying and bulletproof tracking."
        buttonText="Speak To Us"
        buttonIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/22a32b9c9ffadccdbeb5b31859a7e848b6261a84?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64"
        onButtonClick={handleButtonClick}
      />
    </section>
  );
}

export default FooterBanner;
