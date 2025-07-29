import React from 'react';

const Logo = ({ logo, alt = "Company logo" }) => {
  return (
    <img
      className="logo scale-75 w-[250px] h-auto flex-0 max-sm:w-[180px]"
      alt={alt}
      src={logo}
    />
  );
};

export default Logo;
