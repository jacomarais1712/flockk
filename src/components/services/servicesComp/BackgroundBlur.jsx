import React from 'react';

const BackgroundBlur = () => {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<svg id=\"4066:1071\" width=\"541\" height=\"1027\" viewBox=\"0 0 541 1027\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"background-blur\" style=\"width: 427px; height: 427px; position: absolute; left: -186px; top: 0; border-radius: 427px; opacity: 0.6; background: radial-gradient(50% 50% at 50% 50%,#23F399 0%,rgba(20,141,89,0.00) 100%); filter: blur(150px); z-index: 0\"> <g opacity=\"0.6\" filter=\"url(#filter0_f_4066_1071)\"> <circle cx=\"27.5\" cy=\"513.5\" r=\"213.5\" fill=\"url(#paint0_radial_4066_1071)\"></circle> </g> <defs> <filter id=\"filter0_f_4066_1071\" x=\"-486\" y=\"0\" width=\"1027\" height=\"1027\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"> <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood> <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"></feBlend> <feGaussianBlur stdDeviation=\"150\" result=\"effect1_foregroundBlur_4066_1071\"></feGaussianBlur> </filter> <radialGradient id=\"paint0_radial_4066_1071\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(27.5 513.5) rotate(90) scale(213.5)\"> <stop stop-color=\"#23F399\"></stop> <stop offset=\"1\" stop-color=\"#148D59\" stop-opacity=\"0\"></stop> </radialGradient> </defs> </svg>",
        }}
      />
    </div>
  );
};

export default BackgroundBlur;