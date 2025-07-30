import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CaseStudyDropDown from "./caseStudyDropDown";

export const NavigationLinks = ({ navItem, handleNavClick }) => {
  const windowLocation = window.location.pathname;
  return (
    <nav className="flex relative gap-8 items-center max-md:gap-6 max-sm:hidden max-lg:hidden">
      <ul className="flex gap-8 items-center max-md:gap-6 max-lg:gap-4">
        <li>
          <Link to='/'
            onClick={() => {handleNavClick('home')}}
            className="flex relative gap-1 justify-center items-center"
          >
            <span className={`relative text-base font-bold tracking-wide leading-6 max-lg:text-xs ${windowLocation === '/' || windowLocation === '/contact' ? 'nav-link-active' : 'nav-link'}`}>
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link to='/about'
            onClick={() => {handleNavClick('about')}}
            className="flex relative gap-1 justify-center items-center"
          >
            <span className={`relative text-base font-bold tracking-wide leading-6 max-lg:text-xs ${windowLocation === '/about' ? 'nav-link-active' : 'nav-link'}`}>
              About Us
            </span>
          </Link>
        </li>
        <li>
          <Link 
            to='/services'
            onClick={() => {handleNavClick('services')}}
            className="flex relative gap-1 justify-center items-center"
          >
            <span className={`relative text-base font-bold tracking-wide leading-6 max-lg:text-xs ${windowLocation === '/services' ? 'nav-link-active' : 'nav-link'}`}>
              Services
            </span>
          </Link>
        </li>
        <li>
          <Link 
            to='/pricing'
            onClick={() => {handleNavClick('pricing')}}
            className="flex relative gap-1 justify-center items-center"
          >
            <span className={`relative text-base font-bold tracking-wide leading-6 max-lg:text-xs ${windowLocation === '/pricing' ? 'nav-link-active' : 'nav-link'}`}>
              Pricing
            </span>
          </Link>
        </li>
        <li className="flex relative flex-col gap-2 items-start">
            <span className={`${windowLocation.includes('/caseStudy/') ? 'nav-link-active' : 'nav-link'}`}>
              <CaseStudyDropDown />
            </span>
        </li>
      </ul>
    </nav>
  );
};
