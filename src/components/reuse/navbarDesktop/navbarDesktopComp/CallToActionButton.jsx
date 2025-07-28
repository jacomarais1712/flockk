import * as React from "react";
import { Link } from 'react-router-dom';

export const CallToActionButton = () => {
  return (
    <>
    <Link to='/contact'>
      <button
        className="flex relative gap-3 justify-center items-center py-1 pr-1 pl-3 rounded cursor-pointer max-sm:gap-2 max-sm:px-3 max-sm:py-2 bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)] hover:bg-emerald-100 hover:bg-none"
        type="button"
      >
        <span className="relative text-base font-bold tracking-wide leading-6 text-zinc-900 max-md:text-sm max-sm:text-sm">
          Let's Talk
        </span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/84b28ebd52cf9d4f383ad2f25e7b2c4f30573878?width=64"
          alt="Arrow-Right-Up-Line--Streamline-Remix"
          className="relative w-8 h-8 fill-emerald-950 max-sm:w-6 max-sm:h-6"
        />
      </button>
    </Link>
    </>
  );
};
