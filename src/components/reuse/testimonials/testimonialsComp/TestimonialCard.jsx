// Updated TestimonialCard - minimal changes for responsiveness
import React from 'react';
import Avatar from './Avatar';
import Avatar2 from './Avatar2';

const TestimonialCard = ({ logoSrc, companyName, quote, avatarName, avatarTitle, avatarSvg, cardBackground, testimonies }) => {
  //This is where we define with or without background tailwind className styles
  const withBackGround = 'flex relative flex-col gap-12 items-center p-10 rounded-lg border-solid backdrop-blur-[20px] border-[1.5px] border-emerald-200 border-opacity-30 flex-1 h-full max-md:p-8 max-sm:gap-8 max-sm:p-6 flockk-background1'
  const withoutBackGround = 'flex relative flex-col gap-12 items-center p-10 backdrop-blur-[20px] flex-1 h-full max-md:p-8 max-sm:gap-8 max-sm:p-6 bg-black'
  return (
    <>
    {cardBackground ? 
      <article className={`${cardBackground ? withBackGround : withoutBackGround}`}>
        <div className="flex relative flex-col gap-5 justify-center self-stretch max-sm:gap-8 h-full">
          <div className='flex flex-row justify-left gap-5'>
            <img
              src={logoSrc}
              alt="Company Logo"
              className="relative h-12 w-12 object-contain flex-shrink-0 max-sm:h-10 max-sm:w-10"
            />
            <h2 className='flex flex-col justify-center relative text-2xl font-bold tracking-wide leading-6 text-neutral-100 max-sm:text-lg'>
              {companyName}
            </h2> 
          </div>
          <div className="flex relative flex-col gap-8 items-start self-stretch flex-grow max-sm:gap-6">
            <blockquote className="relative self-stretch text-xl leading-7 text-neutral-300 max-md:text-lg max-sm:text-base max-sm:leading-5 flex-grow">
              {quote}
            </blockquote>
            <div className="mt-auto">
              <Avatar
                name={avatarName}
                title={avatarTitle}
                avatarSvg={avatarSvg}
              />
            </div>
          </div>
        </div>
      </article>
      :
      <article className={`${cardBackground ? withBackGround : withoutBackGround}`}>
        <div className="flex relative flex-col gap-5 justify-center self-stretch max-sm:gap-8 h-full">
          <div className='flex flex-row justify-center gap-5'>
            <img
              src={logoSrc}
              alt="Company Logo"
              className="relative h-12 w-12 object-contain flex-shrink-0 max-sm:h-10 max-sm:w-10"
            />
            <h2 className='flex flex-col justify-center relative text-2xl font-bold tracking-wide leading-6 text-neutral-100 max-sm:text-lg'>
              {companyName}
            </h2> 
          </div>
          { testimonies > 1 ?
            <div id='multiTest' className="flex relative flex-col justify-center gap-8 items-start self-stretch flex-grow max-sm:gap-6">
              <blockquote className="relative self-stretch text-xl leading-7 text-neutral-300 max-md:text-lg max-sm:text-base max-sm:leading-5 pl-5 pr-5 flex-grow">
                <p className='w-full break-words'>"{quote}"</p>
              </blockquote>
              <div className="mt-auto">
                {cardBackground ? 
                  <Avatar
                    name={avatarName}
                    title={avatarTitle}
                    avatarSvg={avatarSvg}
                  />
                  :
                  <Avatar2
                    name={avatarName}
                    title={avatarTitle}
                    avatarSvg={avatarSvg}
                  />
                }
              </div>
            </div>
            :
            <div id='singleTest' className="flex relative flex-col justify-center gap-8 items-start self-stretch flex-grow max-sm:gap-6">
              <blockquote className="flex flex-col relative items-center text-center self-stretch text-xl leading-7 text-neutral-300 max-md:text-lg max-sm:text-base max-sm:leading-5 pl-5 pr-5 flex-grow">
                <p className='flex flex-col justify-center w-full break-words max-w-xl'>"{quote}"</p>
              </blockquote>
              <div className="flex flex-col justify-center w-full mt-auto">
                {cardBackground ? 
                  <Avatar
                    name={avatarName}
                    title={avatarTitle}
                    avatarSvg={avatarSvg}
                  />
                  :
                  <Avatar2
                    name={avatarName}
                    title={avatarTitle}
                    avatarSvg={avatarSvg}
                  />
                }
              </div>
            </div>
          }

        </div>
      </article>
    }
    </>
  );
};

export default TestimonialCard;