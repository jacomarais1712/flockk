"use client";
import React, { useState } from 'react';
import { TestimonialSlide } from './servicesTestSectionComp/TestimonialSlide';
import { NavigationArrow } from './servicesTestSectionComp/NavigationArrow';
import { SliderDots } from './servicesTestSectionComp/SliderDots';

const testimonialData = [
  {
    id: 1,
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c2f03cc4ad53254367ab6660355172ad1e43806?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    quote: "Flockk helped us simplify a messy setup and understand what was actually working. Huge relief.",
    avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/537e1dc5acbb7dd5fb0656798c32d45d02b664e1?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    name: "Ava Leonard",
    title: "Marketing, Fleeq",
    textColor: "text-emerald-50",
    quoteSize: "text-3xl",
    showLogo: true,
    showAvatar: true,
    centered: true
  },
  {
    id: 2,
    logoSrc: null,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8559cde1d85afa8752521dd1ea31d0054ba77f05?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    name: null,
    title: null,
    textColor: "text-neutral-950",
    quoteSize: "text-xl",
    showLogo: false,
    showAvatar: true,
    centered: true
  },
  {
    id: 3,
    logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c2f03cc4ad53254367ab6660355172ad1e43806?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    quote: "Another testimonial that demonstrates the quality of our service and the satisfaction of our clients.",
    avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/537e1dc5acbb7dd5fb0656798c32d45d02b664e1?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    name: "John Smith",
    title: "CEO, TechCorp",
    textColor: "text-emerald-50",
    quoteSize: "text-3xl",
    showLogo: true,
    showAvatar: true,
    centered: true
  },
  {
    id: 4,
    logoSrc: null,
    quote: "Final testimonial showcasing the impact and results achieved through our innovative solutions.",
    avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8559cde1d85afa8752521dd1ea31d0054ba77f05?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c",
    name: "Sarah Johnson",
    title: "Director, Innovation Labs",
    textColor: "text-neutral-950",
    quoteSize: "text-xl",
    showLogo: false,
    showAvatar: true,
    centered: true
  }
];

export default function Testimonial31() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = testimonialData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentTestimonial = testimonialData[currentSlide];
  const nextTestimonial = testimonialData[(currentSlide + 1) % totalSlides];

  return (
    <section className="flex flex-col justify-center px-16 py-20 max-md:px-5">
      <div className="relative w-full max-md:max-w-full">
        <div className="flex overflow-hidden z-0 items-center w-full max-md:max-w-full">
          <TestimonialSlide
            logoSrc={currentTestimonial.logoSrc}
            quote={currentTestimonial.quote}
            avatarSrc={currentTestimonial.avatarSrc}
            name={currentTestimonial.name}
            title={currentTestimonial.title}
            textColor={currentTestimonial.textColor}
            quoteSize={currentTestimonial.quoteSize}
            showLogo={currentTestimonial.showLogo}
            showAvatar={currentTestimonial.showAvatar}
            centered={currentTestimonial.centered}
          />
          <TestimonialSlide
            logoSrc={nextTestimonial.logoSrc}
            quote={nextTestimonial.quote}
            avatarSrc={nextTestimonial.avatarSrc}
            name={nextTestimonial.name}
            title={nextTestimonial.title}
            textColor={nextTestimonial.textColor}
            quoteSize={nextTestimonial.quoteSize}
            showLogo={nextTestimonial.showLogo}
            showAvatar={nextTestimonial.showAvatar}
            centered={nextTestimonial.centered}
          />
        </div>

        <NavigationArrow
          direction="left"
          onClick={prevSlide}
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6aa8a3be75de28ccf1f88ac06458a568258ec099?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c"
        />

        <NavigationArrow
          direction="right"
          onClick={nextSlide}
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9fe311a013fe487bdfd29d4c58629c895086597e?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c"
        />

        <SliderDots
          totalSlides={totalSlides}
          currentSlide={currentSlide}
          onDotClick={goToSlide}
        />
      </div>
    </section>
  );
}
