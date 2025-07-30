import React, { useState, useEffect } from 'react';
import Slider from 'react-infinite-logo-slider'
import { SectionHeader } from './clientTestComp/SectionHeader';
import { TestimonialCard } from './clientTestComp/TestimonialCard';

const testimonialData = [
  {
    id: 1,
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/c36e96e8ee097473cee239d855125871b7b1c521?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/66badc10be68887496db59a64d9022e698f66aab?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    avatarImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/537e1dc5acbb7dd5fb0656798c32d45d02b664e1?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    name: "Ava Leonard",
    title: "Marketing, Fleeq"
  },
  {
    id: 2,
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/c36e96e8ee097473cee239d855125871b7b1c521?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/66badc10be68887496db59a64d9022e698f66aab?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    avatarImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/537e1dc5acbb7dd5fb0656798c32d45d02b664e1?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    name: "Ava Leonard",
    title: "Marketing, Fleeq"
  },
  {
    id: 3,
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/c36e96e8ee097473cee239d855125871b7b1c521?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/66badc10be68887496db59a64d9022e698f66aab?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    avatarImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/537e1dc5acbb7dd5fb0656798c32d45d02b664e1?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    name: "Ava Leonard",
    title: "Marketing, Fleeq"
  },
  {
    id: 4,
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/c36e96e8ee097473cee239d855125871b7b1c521?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1fd1be130265254b55f4fae608cb591aa3ccf5f?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    avatarImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/36e4e5b4d4b1aaef3e73f23f654f0fb81bc29572?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    name: "Ava Leonard",
    title: "Marketing, Fleeq"
  }
];

export const ClientTestimonials = () => {
  const [windowWidth, setWindowWidth] = useState(600);

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
  });

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <div className="flex flex-col items-center max-md:pl-5">
      <section className="flex flex-col items-center pt-20 pb-32 w-full max-w-full max-md:pb-24 max-md:max-w-full">
        <SectionHeader
          tagline="Testimonials"
          title="What Our Clients Say About Us"
        />
        <div className="flex flex-col items-center mt-20 w-full max-w-[1818px] max-md:mt-10 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-8 justify-center items-start w-full">
            <Slider
              width={`${windowWidth < 590 ? '200px' : '400px'}`}
              duration={40}
              pauseOnHover={true}
              blurBorders={false}
              blurBorderColor={'#fff'}
            > 
              {testimonialData.map((testimonial) => (
                <Slider.Slide> 
                  <TestimonialCard windowWidth={windowWidth}
                    key={testimonial.id}
                    backgroundImage={testimonial.backgroundImage}
                    companyLogo={testimonial.companyLogo}
                    quote={`"${testimonial.quote}"`}
                    avatarImage={testimonial.avatarImage}
                    name={testimonial.name}
                    title={testimonial.title}
                  />
                </Slider.Slide> 
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientTestimonials;
