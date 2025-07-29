import React from 'react';
import { Tag } from './Tag';
import { ReadMoreButton } from './ReadMoreButton';

export const CaseStudyCard = ({
  imageUrl,
  logo,
  logoStyle = {},
  title,
  description,
  tags = ['Google Ads', 'Analytics'],
  readTime = '5 min read',
  onReadMore,
  caseStudyId
}) => {
  return (
    <div className="p-[1.5px] bg-gradient-to-b from-emerald-600 to-neutral-600 rounded-lg flex-[1_0_0] max-md:flex-none">
      <article className="flex relative flex-col items-start rounded-[calc(0.5rem-1.5px)] h-full overflow-hidden">
        <div className="flex relative flex-col items-start self-stretch max-sm:h-[186px]">
          <img
            src={imageUrl}
            alt=""
            className="relative self-stretch h-[300px] rounded-t-[calc(0.5rem-1.5px)]"
          />
          <div className='flex flex-row justify-center absolute w-full h-full object-contain'>
            {logo && (
              <img className='scale-100 w-[300px] h-auto max-w-md object-contain p-5'
                src={logo}
                alt='company logo'
                style={logoStyle}
              />
            )}
          </div>
        </div>
        <div className="flex relative flex-col gap-6 items-start self-stretch px-6 pt-6 pb-8 bg-gradient-to-b from-neutral-800 to-neutral-900 max-sm:px-4">
          <div className="flex relative flex-col gap-4 items-start self-stretch">
            <div className="flex relative gap-3 items-center">
              <div className="flex relative gap-2 items-center">
                {tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </div>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      "<svg width=\"4\" height=\"4\" viewBox=\"0 0 4 4\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"dot-separator\" style=\"width: 4px; height: 4px; fill: #D9D9D9; position: relative\"> <circle cx=\"2\" cy=\"2\" r=\"2\" fill=\"#D9D9D9\"></circle> </svg>",
                  }}
                />
              </div>
              <span className="relative text-xs font-semibold tracking-wide leading-3 uppercase text-neutral-300 max-sm:text-[10px]">
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
          <ReadMoreButton caseStudyId={caseStudyId} onClick={onReadMore} />
        </div>
      </article>
    </div>
  );
};