import React from 'react';
import { CTAButton } from './CTAButton.jsx';

export const CTAContent = () => {
  return (
    <section className="flex relative flex-col justify-center items-center px-16 py-32 min-h-[424px] max-md:px-5 max-md:py-24">
        <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d9d9453ba30d0d8f03bbea748b4c1b90abc43b9?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c"
            className="object-cover absolute inset-0 size-full"
            alt="Background"
        />
        <div className="flex relative flex-col gap-8 items-center max-w-full w-[844px] max-md:w-full max-md:max-w-[600px] max-sm:gap-6">
            <div className="flex relative flex-col gap-5 items-center self-stretch max-sm:gap-4">
                <h1 className="relative self-stretch text-5xl font-bold tracking-tight text-center text-emerald-50 leading-[56.4px] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:tracking-normal max-sm:leading-8">
                Not Sure Which Plan Is Right for You?
                </h1>
                <p className="relative self-stretch text-xl tracking-wide leading-8 text-center text-neutral-300 max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:tracking-wide max-sm:leading-6">
                We'll help you pick the right package based on your goals and budget.
                </p>
            </div>
            <button className="flex gap-3 justify-center items-center self-center py-1.5 pr-1.5 pl-3.5 mt-8 text-base font-bold tracking-wide rounded bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)] text-zinc-900">
            <span className="self-stretch my-auto">
                Speak To Us
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
};
