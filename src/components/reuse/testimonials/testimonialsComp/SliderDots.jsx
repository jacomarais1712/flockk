import React from 'react';

const SliderDots = ({ currentIndex, totalTestimonials, onDotClick, testimonials }) => {
  const totalDots = Math.ceil(totalTestimonials / testimonials);
  
  // Calculate total width needed for all dots
  const dotWidth = 32; // Actual width from your path (xPosition + 2) - (xPosition - 30) = 32px
  const dotSpacing = 12; // Space between dots (44 - 32 = 12)
  const totalWidth = (totalDots * dotWidth) + ((totalDots - 1) * dotSpacing);
  
  // Calculate starting position to center the group
  const svgWidth = Math.max(totalWidth + 40, 200); // Ensure minimum width
  const startX = (svgWidth - totalWidth) / 2;

  const dotsSVG = Array.from({ length: totalDots }, (_, index) => {
    const fillColor = currentIndex === index ? 'white' : '#2E373B';
    // Position where the dot should start (left edge of the dot)
    const dotStartX = startX + (index * (dotWidth + dotSpacing));
    // Your original path expects xPosition to be at the right edge - 2px
    const xPosition = dotStartX + 30;

    return (
      <g key={index} onClick={() => onDotClick(index)} style={{ cursor: 'pointer' }}>
        <path 
          d={`M${xPosition} 0C${xPosition + 1.1046} 0 ${xPosition + 2} 0.895431 ${xPosition + 2} 2V6C${xPosition + 2} 7.10457 ${xPosition + 1.1046} 8 ${xPosition} 8H${xPosition - 28}C${xPosition - 29.1046} 8 ${xPosition - 30} 7.10457 ${xPosition - 30} 6V2C${xPosition - 30} 0.895431 ${xPosition - 29.1046} 0 ${xPosition - 28} 0H${xPosition}Z`} 
          fill={fillColor} 
        />
      </g>
    );
  });

  return (
    <div className="flex relative gap-2 justify-center items-center self-stretch h-7">
      <svg 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="dots-svg h-7"
        width={svgWidth}
        viewBox={`0 0 ${svgWidth} 8`}
      >
        {dotsSVG}
      </svg>
    </div>
  );
};

export default SliderDots;