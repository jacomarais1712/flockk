"use client";
import React from 'react';
import SectionTitle from './testimonialsComp/SectionTitle';
import TestimonialCard from './testimonialsComp/TestimonialCard';
import SliderDots from './testimonialsComp/SliderDots';
import SliderArrow from './testimonialsComp/SliderArrow';

const TestimonialSection = () => {
  const testimonials = [
    {
      logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a53dcbba800b2a4d7e990b72eea33ef662f7f46d?width=374",
      quote: "Working with Flockk gave us total clarity and control over our ad spend. Performance is up, stress is down.",
      avatarName: "Ben Finnigan",
      avatarTitle: "Founder, Qost",
      avatarSvg: "<svg id=\"4066:512\" style=\"width:56px;height:56px;border-radius:56px;background:url(<path-to-image class=\" avatar-image\"=\"\">) lightgray 50% / cover no-repeat;position:relative\" width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <circle cx=\"28\" cy=\"28\" r=\"28\" fill=\"url(#pattern0_4066_512)\"></circle> <defs> <pattern id=\"pattern0_4066_512\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"> <use xlink:href=\"#image0_4066_512\" transform=\"translate(0 -0.34507) scale(0.00352113)\"></use> </pattern>  </defs> </svg>"
    },
    {
      logoSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a53dcbba800b2a4d7e990b72eea33ef662f7f46d?width=374",
      quote: "Everything just made sense. We finally knew what was working — and what to stop spending on.",
      avatarName: "Ava Leonard",
      avatarTitle: "Marketing, Fleeq",
      avatarSvg: "<svg id=\"4066:537\" style=\"width:56px;height:56px;border-radius:56px;background:url(<path-to-image class=\" avatar-image\"=\"\">) lightgray 50% / cover no-repeat;position:relative\" width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <circle cx=\"28\" cy=\"28\" r=\"28\" fill=\"url(#pattern0_4066_537)\"></circle> <defs> <pattern id=\"pattern0_4066_537\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"> <use xlink:href=\"#image0_4066_537\" transform=\"translate(-0.248438) scale(0.003125)\"></use> </pattern>  </defs> </svg>"
    }
  ];

  return (
    <section className="flex relative flex-col gap-20 items-center self-stretch px-16 pt-28 pb-32 max-md:gap-16 max-md:px-8 max-md:pt-20 max-md:pb-24 max-sm:gap-10 max-sm:px-5 max-sm:pt-16 max-sm:pb-16">
      <SectionTitle
        tagline="TESTIMONIALS"
        title="What Our Clients Say About Us"
      />

      <div className="flex relative flex-col gap-10 items-center self-stretch">
        <div className="flex relative gap-6 items-start self-stretch max-md:flex-col max-md:gap-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              logoSrc={testimonial.logoSrc}
              quote={testimonial.quote}
              avatarName={testimonial.avatarName}
              avatarTitle={testimonial.avatarTitle}
              avatarSvg={testimonial.avatarSvg}
            />
          ))}
        </div>

        <SliderDots />

        <SliderArrow direction="left" />
        <SliderArrow direction="right" />
      </div>
    </section>
  );
};

export default TestimonialSection;
