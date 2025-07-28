import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyDropDown from "./caseStudyDropDown";

export const NavigationLinks = ({ navItem, handleNavClick }) => {
  const windowLocation = window.location.pathname;
  return (
    <nav className="flex gap-8 items-center max-md:flex-wrap max-md:gap-6 max-md:justify-center max-sm:justify-center max-sm:flex-col">
      <div className="flex gap-1 justify-center items-center">
        <Link
          to='/'
          onClick={() => {handleNavClick('home')}}
          className="flex relative gap-1 justify-center items-center"
        >
          <span className={`text-base font-bold tracking-wide leading-6 ${windowLocation === '/' || windowLocation === '/contact' ? 'nav-link-active' : 'nav-link'}`}>
            Home
          </span>
        </Link>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <Link
          to='/about'
          onClick={() => {handleNavClick('about')}}
          className="flex relative gap-1 justify-center items-center"
        >
          <span className={`text-base font-bold tracking-wide leading-6 ${windowLocation === '/about' ? 'nav-link-active' : 'nav-link'}`}>
            About Us
          </span>
        </Link>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <Link
          to='/services'
          onClick={() => {handleNavClick('services')}}
          className="flex relative gap-1 justify-center items-center"
        >
          <span className={`text-base font-bold tracking-wide leading-6 ${windowLocation === '/services' ? 'nav-link-active' : 'nav-link'}`}>
            Services
          </span>
        </Link>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <Link
          to='/pricing'
          onClick={() => {handleNavClick('pricing')}}
          className="flex relative gap-1 justify-center items-center"
        >
          <span className={`text-base font-bold tracking-wide leading-6 ${windowLocation === '/pricing' ? 'nav-link-active' : 'nav-link'}`}>
            Pricing
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-2 justify-center items-start">
        <CaseStudyDropDown />
      </div>
    </nav>
  );
};
