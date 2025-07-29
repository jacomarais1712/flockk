import React from 'react';
import { Link } from 'react-router-dom'

export const ActionButtons = ({
  primaryText = "Get In Touch",
  secondaryText = "See Our Work",
  onPrimaryClick,
  onSecondaryClick
}) => {
  return (
    <div className="flex gap-5 items-center self-start mt-10 text-base font-bold tracking-wide max-md:max-w-full max-sm:w-full max-sm:flex-col">
      <Link to='/contact'>
        <button
          className="flex gap-3 justify-center items-center cursor-pointer py-1.5 pr-1.5 pl-3.5 text-base text-zinc-900 font-bold rounded bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)] hover:bg-emerald-100 hover:bg-none focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 hover:shadow-sm shadow-emerald-100/50"
          onClick={() => onPrimaryClick(600)}
        >
          <span className="self-stretch my-auto">
            {primaryText}
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/35082c6e85f5939c0cbcada60a1d85dc66d53fc0?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square fill-emerald-950"
            alt=""
          />
        </button>
      </Link>
      <Link to='/caseStudy/1'>
        <button
          className="flex gap-1 justify-center items-center cursor-pointer self-stretch py-2.5 pr-1.5 pl-3.5 my-auto text-neutral-50 rounded link max-sm:border-1 max-sm:border-neutral-50 max-sm:border-solid"
          onClick={() => onSecondaryClick(0)}
        >
          <span className="self-stretch my-auto">
            {secondaryText}
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be7f0169dbdf99ec93410a398a4c30a93dbf5bf9?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt=""
          />
        </button>
      </Link>
    </div>
  );
};
