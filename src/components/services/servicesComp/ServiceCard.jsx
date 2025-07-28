"use client";
import React from 'react';

// Props: icon (string - SVG HTML), title (string), description (string), onLearnMore (function)
const ServiceCard = ({ icon, title, description, onLearnMore }) => {
  return (
    <article className="flex flex-col gap-12 items-center px-6 pt-6 pb-8 rounded-lg border-solid backdrop-blur-[20px] border-[1.5px] border-emerald-200 border-opacity-30 flex-[1_0_0] max-md:gap-9 max-md:px-5 max-md:pt-5 max-md:pb-7 max-sm:gap-6 max-sm:px-4 max-sm:pt-4 max-sm:pb-6">
      <div className="flex flex-col gap-4 items-start w-full">
        <div className="flex gap-2 items-center p-5 bg-black bg-opacity-30 max-sm:p-4">
          <div dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
      </div>
      <div className="flex flex-col gap-6 items-start w-full">
        <div className="flex flex-col gap-2 items-start w-full">
          <h3 className="w-full text-3xl font-medium tracking-normal leading-9 text-emerald-50 max-md:text-2xl max-sm:text-xl">
            {title}
          </h3>
          <p className="w-full text-base tracking-wide leading-6 text-gray-400 max-md:text-base max-sm:text-sm">
            {description}
          </p>
        </div>
        <div className="flex gap-6 items-center w-full">
          <button
            className="flex gap-1.5 justify-center items-center cursor-pointer"
            onClick={onLearnMore}
            aria-label={`Learn more about ${title}`}
          >
            <span className="text-base font-bold tracking-wide leading-6 text-emerald-400 max-sm:text-sm hover:text-emerald-100">
              Learn More
            </span>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<svg layer-name=\"Icon / chevron-right\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"chevron-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M9.70697 16.9496L15.414 11.2426L9.70697 5.53564L8.29297 6.94964L12.586 11.2426L8.29297 15.5356L9.70697 16.9496Z\" fill=\"#19E48B\"></path> </svg>",
                }}
              />
            </div>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
