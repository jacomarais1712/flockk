import React from 'react';

export const SliderDots = ({ totalSlides, currentSlide, onDotClick }) => {
  return (
    <nav
      className="flex z-0 gap-2 justify-center items-center mt-10 w-full min-h-7 max-md:max-w-full"
      aria-label="Testimonial navigation"
    >
      <div className="flex gap-3 items-center self-stretch my-auto">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`flex shrink-0 self-stretch my-auto w-8 h-2 rounded-sm ${
              index === currentSlide ? 'bg-white' : 'bg-neutral-700'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
          />
        ))}
      </div>
    </nav>
  );
};
