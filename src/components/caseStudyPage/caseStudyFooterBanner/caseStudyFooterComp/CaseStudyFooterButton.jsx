import * as React from "react";
import { Link } from 'react-router-dom';

export const CaseStudyFooterButton = ({
  children = "Let's Talk",
  scrollToTop,
  className = "",
  ...props
}) => {
  return (
    <Link to='/contact'>
      <button
        className={`flex gap-3 justify-center items-center py-1.5 pr-1.5 pl-3.5 cursor-pointer text-base font-bold rounded bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)] hover:bg-emerald-100 hover:bg-none focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 hover:shadow-sm shadow-emerald-100/50 ${className}`}
        onClick={() => scrollToTop(600)}
        {...props}
      >
        <span className="text-base font-bold leading-6 text-zinc-900 max-sm:text-sm">
          {children}
        </span>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"33\" height=\"32\" viewBox=\"0 0 33 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"arrow-icon\" style=\"width: 32px; height: 32px; fill: #002921\"> <rect width=\"32\" height=\"32\" transform=\"translate(0.5)\" fill=\"#002921\"></rect> <path d=\"M21.8386 12.5523L10.3632 24.0277L8.47754 22.1421L19.953 10.6667H9.83863V8H24.5053V22.6667H21.8386V12.5523Z\" fill=\"#E9FEF5\"></path> </svg>",
            }}
          />
        </div>
      </button>
    </Link>
  );
};
