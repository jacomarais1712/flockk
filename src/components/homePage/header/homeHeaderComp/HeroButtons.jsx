"use client";
import React from 'react';

const ArrowIcon = () => (
  <svg
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 fill-zinc-900"
  >
    <rect width="32" height="32" transform="translate(0 0.5)" fill="#002921" />
    <path
      d="M21.3383 13.0523L9.86285 24.5277L7.97723 22.6421L19.4527 11.1667H9.33833V8.5H24.005V23.1667H21.3383V13.0523Z"
      fill="#E9FEF5"
    />
  </svg>
);

export const HeroButtons = () => {
  const handleBookCall = () => {
    // Handle book a call action
    console.log('Book a call clicked');
  };

  const handleSeeWhatWeDo = () => {
    // Handle see what we do action
    console.log('See what we do clicked');
  };

  return (
    <div className="flex relative gap-5 items-center z-3 max-sm:flex-col max-sm:gap-4 max-sm:w-full">
      <button
        onClick={handleBookCall}
        className="flex relative gap-3 justify-center items-center py-1.5 pr-1.5 pl-3.5 bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)] rounded cursor-pointer max-sm:px-3.5 max-sm:py-3 max-sm:w-full hover:bg-emerald-100 hover:shadow-sm shadow-emerald-100/50 hover:bg-none"
        aria-label="Book a consultation call"
      >
        <span className="relative text-base font-bold tracking-wide leading-6 text-zinc-900">
          Book a Call
        </span>
        <ArrowIcon />
      </button>

      <button
        onClick={handleSeeWhatWeDo}
        className="group flex relative gap-1 justify-center items-center px-3.5 py-2.5 rounded border border-gray-400 border-solid transition-all cursor-pointer duration-[0.2s] ease-[ease] max-sm:px-3.5 max-sm:py-3 max-sm:w-full hover:border-gray-300 hover:bg-emerald-100 hover:shadow-sm shadow-emerald-100/50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Learn more about our services"
      >
        <span className="relative text-base font-bold tracking-wide leading-6 text-zinc-200 group-hover:text-black">
          See What We Do
        </span>
      </button>
    </div>
  );
};
