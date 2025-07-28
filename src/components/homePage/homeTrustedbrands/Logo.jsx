import React from 'react';

const Logo = ({ logo, alt = "Company logo" }) => {
  return (
    <img
      className="logo scale-75"
      style={{ width: '250px', height: 'auto', flexShrink: 0 }}
      alt={alt}
      src={logo}
    />
  );
};

export default Logo;
