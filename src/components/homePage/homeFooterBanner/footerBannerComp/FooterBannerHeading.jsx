"use client";
import * as React from "react";

/**
 * CTAHeading component for displaying the main heading and description text
 * @param {Object} props - Component props
 * @param {string} props.heading - Main heading text
 * @param {string} props.description - Description text
 */
function FooterBannerHeading({ heading, description }) {
  return (
    <div className="self-stretch mt-8 w-full text-center max-md:max-w-full">
      <h1 className="text-5xl font-bold space-grotesk tracking-tight leading-tight max-md:max-w-full max-md:text-4xl">
        {heading}
      </h1>
      <p className="mt-5 text-xl tracking-wide leading-8 text-neutral-300 max-md:max-w-full">
        {description}
      </p>
    </div>
  );
}

export default FooterBannerHeading;
