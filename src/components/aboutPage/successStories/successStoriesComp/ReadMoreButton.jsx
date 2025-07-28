import React from 'react';

export const ReadMoreButton = ({ onClick, className = "" }) => {
  return (
    <div className={`flex relative flex-col gap-2 items-start py-2 pr-1.5 pl-3.5 rounded border-solid border-[1.5px] border-neutral-700 ${className}`}>
      <button
        className="flex relative justify-center items-center"
        onClick={onClick}
        aria-label="Read more about this case study"
      >
        <span className="relative text-base font-bold tracking-wide leading-6 text-emerald-400 max-sm:text-sm">
          Read More
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative"
          aria-hidden="true"
        >
          <path
            d="M9.70703 16.9496L15.414 11.2426L9.70703 5.53564L8.29303 6.94964L12.586 11.2426L8.29303 15.5356L9.70703 16.9496Z"
            fill="#19E48B"
          />
        </svg>
      </button>
    </div>
  );
};
