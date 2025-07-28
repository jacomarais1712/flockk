import React from 'react';

const SliderDots = () => {
  return (
    <div className="flex relative gap-2 justify-center items-center self-stretch h-7">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=\"4066:544\" width=\"164\" height=\"8\" viewBox=\"0 0 164 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"dots-svg\" style=\"display: flex; align-items: center; gap: 12px; position: relative\"> <path d=\"M30 0C31.1046 0 32 0.895431 32 2V6C32 7.10457 31.1046 8 30 8H2C0.895431 8 0 7.10457 0 6V2C0 0.895431 0.895431 0 2 0H30Z\" fill=\"white\"></path> <path d=\"M74 0C75.1046 0 76 0.895431 76 2V6C76 7.10457 75.1046 8 74 8H46C44.8954 8 44 7.10457 44 6V2C44 0.895431 44.8954 0 46 0H74Z\" fill=\"#2E373B\"></path> <path d=\"M118 0C119.105 0 120 0.895431 120 2V6C120 7.10457 119.105 8 118 8H90C88.8954 8 88 7.10457 88 6V2C88 0.895431 88.8954 0 90 0H118Z\" fill=\"#2E373B\"></path> <path d=\"M162 0C163.105 0 164 0.895431 164 2V6C164 7.10457 163.105 8 162 8H134C132.895 8 132 7.10457 132 6V2C132 0.895431 132.895 0 134 0H162Z\" fill=\"#2E373B\"></path> </svg>",
          }}
        />
      </div>
    </div>
  );
};

export default SliderDots;
