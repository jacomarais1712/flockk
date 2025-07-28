"use client";
import React from 'react';
import { Tag } from './Tag';
import { ReadMoreButton } from './ReadMoreButton';

export const CaseStudyCard = ({
  imageUrl,
  logoSvg,
  logoPosition = {},
  tags = [],
  title,
  description,
  readTime = "5 min read",
  onReadMore
}) => {
  return (
    <article className="flex relative flex-col items-start rounded-lg border-solid border-[1.5px] border-emerald-200 border-opacity-30 flex-[1_0_0] max-md:flex-none">
      <div className="flex relative flex-col items-start self-stretch">
        <img
          src={imageUrl}
          alt=""
          className="relative self-stretch h-[300px]"
        />
        {logoSvg && (
          <div
            className="absolute"
            style={{
              right: logoPosition.right || '90px',
              bottom: logoPosition.bottom || '88px',
              width: logoPosition.width || '240px',
              height: logoPosition.height || '122px'
            }}
            dangerouslySetInnerHTML={{ __html: logoSvg }}
          />
        )}
      </div>
      <div className="flex relative flex-col gap-6 items-start self-stretch px-6 pt-6 pb-8">
        <div className="flex relative flex-col gap-4 items-start self-stretch">
          <div className="flex relative gap-3 items-center">
            <div className="flex relative gap-2 items-center">
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
            <div>
              <svg
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
              </svg>
            </div>
            <span className="relative text-xs font-semibold tracking-wide leading-3 uppercase text-neutral-300 max-sm:text-xs">
              {readTime}
            </span>
          </div>
          <div className="flex relative flex-col gap-2 items-start self-stretch">
            <h3 className="relative self-stretch text-3xl font-medium tracking-normal leading-9 text-emerald-50 max-sm:text-2xl">
              {title}
            </h3>
            <p className="relative self-stretch text-sm tracking-wide leading-6 text-gray-400 max-sm:text-sm">
              {description}
            </p>
          </div>
        </div>
        <ReadMoreButton onClick={onReadMore} />
      </div>
    </article>
  );
};
