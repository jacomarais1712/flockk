import React, { useState, useEffect } from 'react';
import SectionTitle from './testimonialsComp/SectionTitle';
import TestimonialCard from './testimonialsComp/TestimonialCard';
import SliderDots from './testimonialsComp/SliderDots';
import SliderArrow from './testimonialsComp/SliderArrow';

const testimoniesExample = {
  header: true,
  amount: 2,
  background: true
};

const TestimonialSection = ({ testimonies }) => {
  const cardBackground = "https://cdn.builder.io/api/v1/image/assets/TEMP/7fd17ebebb70c18718711336563eca67a7ca46dc?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9";
  const testimonials = [
    {
      logoSrc: "/fakecomp/thumbnails/company1.svg",
      companyName: "Lorem Ipsum",
      quote: "Working with Flockk gave us total clarity and control over our ad spend. Performance is up, stress is down.",
      avatarName: "Ben Finnigan",
      avatarTitle: "Founder, Qost",
      avatarSvg: '/testimonial-avatars/mock.svg'
    },
    {
      logoSrc: "/fakecomp/comp2logo.svg",
      companyName: "Graphismo",
      quote: "Everything just made sense. We finally knew what was working — and what to stop spending on.",
      avatarName: "Ava Leonard",
      avatarTitle: "Marketing, Fleeq",
      avatarSvg: '/testimonial-avatars/mock2.svg'
    },
    {
      logoSrc: "/fakecomp/comp3logo.svg",
      companyName: "Abstract Company",
      quote: "Everything just made sense. We finally knew what was working — and what to stop spending on.",
      avatarName: "Ava Leonard",
      avatarTitle: "Marketing, Fleeq",
      avatarSvg: '/testimonial-avatars/mock3.svg'
    },
    {
      logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a53dcbba800b2a4d7e990b72eea33ef662f7f46d?width=374",
      companyName: "Logoipsum",
      quote: "Everything just made sense. We finally knew what was working — and what to stop spending on.",
      avatarName: "Ava Leonard",
      avatarTitle: "Marketing, Fleeq",
      avatarSvg: '/testimonial-avatars/mock4.svg'
    },
    {
      logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a53dcbba800b2a4d7e990b72eea33ef662f7f46d?width=374",
      companyName: "Logoipsum",
      quote: "Everything just made sense. We finally knew what was working — and what to stop spending on.",
      avatarName: "Ava Leonard",
      avatarTitle: "Marketing, Fleeq",
      avatarSvg: '/testimonial-avatars/mock5.svg'
    },
    {
      logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a53dcbba800b2a4d7e990b72eea33ef662f7f46d?width=374",
      companyName: "Logoipsum",
      quote: "Everything just made sense. We finally knew what was working — and what to stop spending on.",
      avatarName: "Ava Leonard",
      avatarTitle: "Marketing, Fleeq",
      avatarSvg: '/testimonial-avatars/mock6.svg'
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = testimonies.amount;
  const [isExiting, setIsExiting] = useState(false);

  const handleNext = () => {
    const lastIndex = testimonials.length - 1;
    const maxIndex = Math.floor(lastIndex / testimonialsPerPage) * testimonialsPerPage;

    if (currentIndex < maxIndex) {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + testimonialsPerPage, maxIndex));
        setIsExiting(false);
      }, 500);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - testimonialsPerPage, 0));
        setIsExiting(false);
      }, 500);
    }
  };

  const handleDotClick = (index) => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentIndex(index * testimonialsPerPage);
      setIsExiting(false);
    }, 500);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage);

  return (
    <section className="flex relative flex-col gap-20 items-center px-16 pt-28 pb-32 max-sm:px-8 max-sm:pt-5 max-sm:pb-24">
      {testimonies.heading === true || testimonies.heading === undefined ? (
        <SectionTitle tagline="TESTIMONIALS" title="What Our Clients Say About Us"/>
      ): null}      

      <div className="flex relative flex-col gap-5 items-center w-full">
        <div className="flex relative gap-6 items-stretch w-full max-sm:flex-col max-sm:items-center">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-slide ${isExiting ? 'testimonial-exit' : 'testimonial-enter'} flex-1 max-sm:w-full max-sm:max-w-md`}
              style={{ opacity: isExiting ? 0 : 1 }}
              onAnimationEnd={() => {
                if (isExiting) {
                  setIsExiting(false);
                }
              }}
            >
              <TestimonialCard
                logoSrc={testimonial.logoSrc}
                companyName={testimonial.companyName}
                quote={testimonial.quote}
                avatarName={testimonial.avatarName}
                avatarTitle={testimonial.avatarTitle}
                avatarSvg={testimonial.avatarSvg}
                cardBackground={testimonies.background}
                testimonies={testimonies}
              />
            </div>
          ))}
        </div>
        <div className='flex flex-col w-full justify-center'>
          <SliderDots 
            currentIndex={Math.floor(currentIndex / testimonialsPerPage)}
            totalTestimonials={testimonials.length}
            onDotClick={handleDotClick}
            testimonials={testimonies.amount}
          />
        </div>

        <SliderArrow direction="left" onClick={handlePrev} />
        <SliderArrow direction="right" onClick={handleNext} />
      </div>
    </section>
  );
};

export default TestimonialSection;