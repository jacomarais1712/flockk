import * as React from "react";
import { Link } from 'react-router-dom'

function FooterBannerButton({ text, iconSrc, onClick }) {
  return (
    <Link to='/contact'>
      <button
        className="flex gap-3 justify-center items-center py-1.5 pr-1.5 pl-3.5 mt-8 text-base text-zinc-900 cursor-pointer font-bold rounded bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)] hover:bg-emerald-100 hover:bg-none focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 hover:shadow-sm shadow-emerald-100/50"
        onClick={onClick}
        type="button"
      >
        <span className="self-stretch my-auto">
          {text}
        </span>
        <img
          src={iconSrc}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square fill-emerald-950"
        />
      </button>
    </Link>
  );
}

export default FooterBannerButton;
