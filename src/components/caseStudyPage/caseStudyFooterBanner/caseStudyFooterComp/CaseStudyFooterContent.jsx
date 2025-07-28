"use client";
import * as React from "react";

export const CaseStudyFooterContent = ({
  heading = "Ready To Create Your Own Success Story?",
  description = "Get data-backed growth strategies that actually move the needle.",
  headingClassName = "",
  descriptionClassName = ""
}) => {
  return (
    <div className="flex flex-col gap-5 items-center w-full max-sm:gap-4">
      <h1 className={`w-full text-5xl font-bold tracking-tight text-center leading-[56.4px] text-neutral-50 drop-shadow-xs drop-shadow-white max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:tracking-normal max-sm:leading-8 ${headingClassName}`}>
        {heading}
      </h1>
      <p className={`w-full text-xl tracking-wide leading-8 text-center text-zinc-200 max-md:text-lg max-sm:text-base max-sm:leading-6 ${descriptionClassName}`}>
        {description}
      </p>
    </div>
  );
};
