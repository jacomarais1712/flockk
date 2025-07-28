import React from 'react';

export const BackgroundBlur = () => {
  return (
    <div id='background-blur' className="absolute left-[-24vw] bottom-[-58vh] w-[50vw] h-[50vw] rounded-full opacity-55 z-1 aspect-square"
         style={{
           background: 'radial-gradient(50% 50% at 50% 50%, #23F399 0%, rgba(20, 141, 89, 0.00) 100%)',
           filter: 'blur(150px)'
         }}>
      <svg
        width="698"
        height="1304"
        viewBox="0 0 698 1304"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
      >
        <g opacity="0.7" filter="url(#filter0_f_4066_282)">
          <circle cx="35.5" cy="641.5" r="362.5" fill="url(#paint0_radial_4066_282)" />
        </g>
        <defs>
          <filter
            id="filter0_f_4066_282"
            x="-627"
            y="-21"
            width="1325"
            height="1325"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_4066_282" />
          </filter>
          <radialGradient
            id="paint0_radial_4066_282"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(35.5 641.5) rotate(90) scale(362.5)"
          >
            <stop stopColor="#23F399" />
            <stop offset="1" stopColor="#148D59" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};
