import React from 'react';

export const SocialLinks = () => {
  return (
    <div className="flex gap-2 justify-end items-center flex-[1_0_0] max-lg:justify-center max-sm:gap-3">
      <div className="flex gap-2 items-center p-2 bg-neutral-800 rounded-[40px] hover:bg-emerald-400">
        <div>
          <a className='cursor-pointer' href='https://www.instagram.com/flockk_digital_marketing/' target='_blank'>
            <img src='/social_links/Instagram.png' alt='Instagram'/>
          </a>
        </div>
      </div>
      <div className="group flex gap-2 items-center p-2 bg-neutral-800 rounded-[40px] hover:bg-emerald-400">
        <div>
          <a className='group cursor-pointer' href='https://www.linkedin.com/in/francois-marais-b46b8656' target='_blank'>
            <img src='/social_links/LinkedIn.png' alt='linkedIn'/>
          </a>
        </div>
      </div>
    </div>
  );
};
