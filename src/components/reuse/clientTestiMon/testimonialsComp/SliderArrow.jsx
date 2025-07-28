import React from 'react';

const SliderArrow = ({ direction, position }) => {
  const isLeft = direction === 'left';
  const positionClass = isLeft
    ? 'left-[calc(50%-400px)] max-md:left-5'
    : 'right-[calc(50%-400px)] max-md:right-5';

  const arrowSvg = isLeft
    ? "<svg id=\"4066:550\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"arrow-icon\" style=\"width: 24px; height: 24px; position: relative\"> <path d=\"M4.8358 12.0001L11.0429 5.79297L12.4571 7.20718L7.6642 12.0001L12.4571 16.793L11.0429 18.2072L4.8358 12.0001ZM10.4857 12.0001L16.6928 5.79297L18.107 7.20718L13.3141 12.0001L18.107 16.793L16.6928 18.2072L10.4857 12.0001Z\" fill=\"#E3E7E8\"></path> </svg>"
    : "<svg id=\"4066:553\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"arrow-icon\" style=\"width: 24px; height: 24px; position: relative\"> <path d=\"M19.1643 12.0001L12.9572 5.79297L11.543 7.20718L16.3359 12.0001L11.543 16.793L12.9572 18.2072L19.1643 12.0001ZM13.5144 12.0001L7.30728 5.79297L5.89307 7.20718L10.686 12.0001L5.89307 16.793L7.30728 18.2072L13.5144 12.0001Z\" fill=\"#E3E7E8\"></path> </svg>";

  return (
    <button
      className={`flex absolute top-2/4 gap-2 justify-center items-center p-3 backdrop-blur-sm -translate-y-2/4 cursor-pointer bg-neutral-700 rounded-[50px] max-sm:hidden ${positionClass}`}
      aria-label={`${direction === 'left' ? 'Previous' : 'Next'} testimonial`}
    >
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: arrowSvg
          }}
        />
      </div>
    </button>
  );
};

export default SliderArrow;
