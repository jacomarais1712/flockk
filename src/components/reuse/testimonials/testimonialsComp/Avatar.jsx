import React from 'react';

const Avatar = ({ name, title, avatarSvg }) => {
  return (
    <div className="flex relative gap-5 items-center max-sm:gap-4">
      <div>
        <img 
          src={avatarSvg}
          alt='avatar image'
          className='rounded-full'
        />
      </div>
      <div className="flex relative flex-col items-start">
        <h3 className="relative text-base font-bold tracking-wide leading-6 text-emerald-50 max-sm:text-sm">
          {name}
        </h3>
        <p className="relative text-base tracking-wide leading-6 text-emerald-50 max-sm:text-sm">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Avatar;
