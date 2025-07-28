import React from 'react';
import { Logo } from './footerComp/Logo';
import { NavigationLinks } from './footerComp/NavigationLinks';
import { SocialLinks } from './footerComp/SocialLinks';
import { FooterCredits } from './footerComp/FooterCredits';

export const Footer = ({ navItem, handleNavClick }) => {
  return (
    <footer className="box-border flex flex-col gap-20 items-center px-16 py-20 w-full bg-neutral-950 max-md:gap-16 max-md:px-8 max-md:py-16 max-sm:gap-10 max-sm:px-4 max-sm:py-10">
      <div className="flex gap-8 items-center w-full max-w-full max-md:flex-col max-md:gap-6 max-md:items-start max-sm:items-center">
        <Logo />
        <NavigationLinks navItem={navItem} handleNavClick={handleNavClick}/>
        <SocialLinks />
      </div>
      <FooterCredits />
    </footer>
  );
};

export default Footer;
