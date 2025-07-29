"use client";
import * as React from "react";

export function ServiceCard({
  backgroundImage,
  icon,
  title,
  description,
  buttonIcon = "https://cdn.builder.io/api/v1/image/assets/TEMP/bb1c1813981520cd36804b905f1bf902776d688b?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
  iconShadow = false
}) {
  return (
    <article className="flex overflow-hidden relative flex-col flex-1 shrink px-6 pt-6 pb-8 rounded-lg aspect-[0.852] basis-0 min-w-60 max-md:px-5 h-110 max-sm:h-90">
      <img
        src={backgroundImage}
        alt=""
        className="object-cover absolute inset-0 size-full"
      />

      <div className="flex relative flex-col items-start w-full">
        <div className="flex gap-2 items-center p-5 w-20 h-20 bg-black bg-opacity-30">
          <img
            src={icon}
            alt=""
            className={`object-contain self-stretch my-auto w-10 aspect-square ${
              iconShadow ? 'shadow-[0px_0px_8px_rgba(35,243,153,0.3)]' : ''
            }`}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between relative mt-20 w-full h-full max-md:mt-10">
        <div className="w-full">
          <h2 className="text-2xl font-medium tracking-normal leading-10 text-emerald-50">
            {title}
          </h2>
          <p className="mt-8 text-xl tracking-wide leading-6 text-gray-400">
            {description}
          </p>
        </div>

        <div className="flex gap-6 items-center mt-12 w-full text-base font-bold tracking-wide text-emerald-400">
          <button className="flex gap-1.5 justify-center items-center self-stretch my-auto cursor-pointer">
            <span className="flex flex-row self-stretch my-auto hover:text-emerald-100">
              Learn More
              <span className="self-stretch my-auto">
                <svg width="50" height="12" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 2 L12 8 L4 14" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}
