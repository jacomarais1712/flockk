import React from 'react';
import Avatar from './Avatar';

const TestimonialCard = ({ logoSrc, quote, avatarName, avatarTitle, avatarSvg }) => {
  return (
    <article className="flex relative flex-col gap-12 items-center p-10 rounded-lg border-solid backdrop-blur-[20px] border-[1.5px] border-emerald-200 border-opacity-30 flex-[1_0_0] max-md:p-8 max-sm:gap-8 max-sm:p-6">
      <div className="flex relative flex-col gap-12 items-start self-stretch max-sm:gap-8">
        <img
          src={logoSrc}
          alt="Company Logo"
          className="relative h-10 aspect-187/40 w-[187px]"
        />
        <div className="flex relative flex-col gap-8 items-start self-stretch max-sm:gap-6">
          <blockquote className="relative self-stretch text-xl leading-7 text-neutral-300 max-md:text-lg max-sm:text-base max-sm:leading-5">
            {quote}
          </blockquote>
          <Avatar
            name={avatarName}
            title={avatarTitle}
            avatarSvg={avatarSvg}
          />
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
