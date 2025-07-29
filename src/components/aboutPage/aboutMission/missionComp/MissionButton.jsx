import * as React from "react";
import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="arrow-icon"
    style={{ width: "32px", height: "32px", position: "relative" }}
  >
    <rect width="32" height="32" fill="#002921" />
    <path
      d="M21.3383 12.5523L9.86291 24.0277L7.97729 22.1421L19.4527 10.6667H9.33839V8H24.005V22.6667H21.3383V12.5523Z"
      fill="#E9FEF5"
    />
  </svg>
);

function MissionButton() {
  const missionButtonClick = (position) => {
    window.scrollTo({ top: position, behavior: 'smooth' });
  };
  return (
    <Link className="max-sm:flex max-sm:flex-row max-sm:justify-center max-sm:w-full" to='/contact'>
      <button onClick={() => missionButtonClick(600)} className="flex relative gap-3 justify-center items-center py-1 pr-1 pl-3 rounded cursor-pointer max-sm:gap-2 max-sm:px-1 bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)] hover:bg-emerald-100 hover:bg-none">
        <span className="relative text-base font-bold tracking-wide leading-6 text-zinc-900 max-sm:py-2 max-sm:pr-2 max-sm:pl-4">
          Get In Touch
        </span>
        <div>
          <ArrowIcon />
        </div>
      </button>
    </Link>
  );
}

export default MissionButton;
