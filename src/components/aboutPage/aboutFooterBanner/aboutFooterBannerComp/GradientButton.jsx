import * as React from "react";
import { Link } from 'react-router-dom';

export const GradientButton = ({
  children,
  handleButtonClick,
  iconSrc,
  iconAlt = "Button icon",
  className = "",
  ...props
}) => {
  return (
    <Link to='/contact'>
      <button
        className={`flex gap-3 justify-center cursor-pointer text-zinc-900 items-center py-1.5 pr-1.5 pl-3.5 mt-8 text-base font-bold rounded bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)] hover:bg-emerald-100 hover:bg-none focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 hover:shadow-sm shadow-emerald-100/50 ${className}`}
        onClick={() => handleButtonClick(600)}
        {...props}
      >
        <span className="my-auto">
          {children}
        </span>
        {iconSrc && (
          <img
            src={iconSrc}
            alt={iconAlt}
            className="object-contain shrink-0 my-auto w-8 aspect-square fill-emerald-950"
          />
        )}
      </button>
    </Link>
  );
};
