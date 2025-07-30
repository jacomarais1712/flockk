import React from 'react';
import { Avatar } from './Avatar';

export const TestimonialCard = ({
  windowWidth,
  backgroundImage,
  companyLogo,
  quote,
  avatarImage,
  name,
  title
}) => {
  return (
    <article className="flex relative flex-col flex-1 shrink justify-center p-8 rounded-lg basis-0 m-4 min-h-[385px] min-w-30 max-md:px-5 max-md:max-w-full max-sm:py-5">
      <img
        src={backgroundImage}
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative w-full">
        <img
          src={companyLogo}
          alt="Company logo"
          className="object-contain max-w-full aspect-[4.67] w-[187px]"
        />
        <div className="flex flex-col mt-12 w-full max-md:mt-10 max-sm:mt-5">
          <blockquote className="text-xl font-medium leading-7 text-neutral-300 max-sm:text-[10px] max-sm:text-center">
            {quote}
          </blockquote>
          <Avatar
            imageSrc={avatarImage}
            name={name}
            title={title}
          />
        </div>
      </div>
    </article>
  );
};
