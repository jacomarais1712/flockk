import React from 'react';
import { Link } from 'react-router-dom';

export const ReadMoreButton = ({ onClick, className = "", caseStudyId }) => {
  return (
    <div className={`group flex relative flex-col gap-2 items-start py-2 pr-1.5 pl-3.5 rounded border-solid border-[1.5px] border-neutral-700 ${className} hover:border-emerald-100 cursor-pointer`}>
      <Link to={`/casestudy/${caseStudyId}`}>
        <button
          onClick={onClick}
          className="group flex relative justify-center items-center"
        >
          <span className="group relative text-base font-bold tracking-wide leading-6 text-emerald-400 max-sm:text-sm group-hover:text-emerald-100 cursor-pointer">
            Read More
          </span>
          <div>
            <div className='group-hover:color-emerald-100'
              dangerouslySetInnerHTML={{
                __html:
                  "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"chevron-icon\" style=\"width: 24px; height: 24px; position: relative\"> <path d=\"M9.70703 16.9496L15.414 11.2426L9.70703 5.53564L8.29303 6.94964L12.586 11.2426L8.29303 15.5356L9.70703 16.9496Z\" fill=\"#19E48B\"></path> </svg>",
              }}
            />
          </div>
        </button>
      </Link>
    </div>
  );
};
