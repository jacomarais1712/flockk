import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { NavigationLinks } from "./navbarDesktopComp/NavigationLinks";
import { CallToActionButton } from "./navbarDesktopComp/CallToActionButton";
import { BurgerMenuNav } from "./navbarDesktopComp/BurgerMenuNav";

export const NavbarDesktop = ({ handleNavClick, navItem }) => {
  return (
    <header className="flex relative justify-center items-center w-full h-20 backdrop-blur-[6px] z-99">
      <div className="flex relative justify-between items-center px-16 py-0 max-w-full w-full max-md:px-8 max-md:py-0 max-sm:px-4 max-sm:py-0">
        <div className="flex relative items-center h-auto flex-shrink-0 max-w-xs md:max-w-sm lg:max-w-md">
          <div className="h-auto object-contain max-h-16">
            <Link to='/'>
              <img
                src="/Flockk_logo_full.svg"
                alt="Content"
              />
            </Link>
          </div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <NavigationLinks navItem={navItem} handleNavClick={handleNavClick}/>
        </div>
        <div className="flex relative gap-4 justify-end items-center flex-shrink-0 max-sm:gap-2">
          <CallToActionButton />
        </div>
        <BurgerMenuNav handleNavClick={handleNavClick}/>
      </div>
    </header>
  );
};

export default NavbarDesktop;
