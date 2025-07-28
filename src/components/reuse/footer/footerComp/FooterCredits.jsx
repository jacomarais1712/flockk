import React from 'react';

export const FooterCredits = () => {
  return (
    <section className="flex flex-col gap-8 items-center w-full max-w-[1312px]">
      <div className="w-full h-px bg-neutral-800" />
      <div className="flex gap-8 items-start max-md:flex-wrap max-md:gap-4 max-md:justify-center max-sm:flex-col max-sm:gap-3 max-sm:items-center max-sm:text-center">
        <p className="text-sm tracking-wide leading-6 text-emerald-500">
          © 2025 Flockk. All rights reserved.
        </p>
        <a
          href="#"
          className="text-sm tracking-wide leading-6 text-emerald-500 underline"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-sm tracking-wide leading-6 text-emerald-500 underline"
        >
          Terms of Use
        </a>
        <a
          href="#"
          className="text-sm tracking-wide leading-6 text-emerald-500 underline"
        >
          Cookie Policy
        </a>
      </div>
    </section>
  );
};
