import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import BurgerCaseStudyDropDown from "./BurgerCaseStudyDropDown";

export const BurgerMenuNav = ({ handleNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const windowLocation = window.location.pathname;

  const handleMenuClose = () => {
    console.log('handle menu close run');
    setIsMenuOpen(false);
  };

  const handleLinkClick = (page) => {
    handleNavClick(page);
    handleMenuClose();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="sm:hidden">
      {/* Burger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex flex-col justify-center items-center w-8 h-8 pl-2 space-y-1 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-emerald-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-emerald-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-emerald-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleMenuClose}
          />

          {/* Menu Panel */}
          <div className="fixed top-0 left-0 w-full h-screen z-50 bg-black">
            <div className="flex flex-col justify-evenly mt-10 pb-20 h-full p-6 space-y-6 items-center">
              {/* Close Button */}
              <button
                onClick={handleMenuClose}
                className="absolute top-5 right-5 flex flex-col justify-center items-center w-8 h-8 pl-2 space-y-1 focus:outline-none"
                aria-label="Close menu"
              >
                <span className={`block w-6 h-0.5 bg-emerald-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-emerald-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-emerald-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>

              <Link to='/' onClick={() => handleLinkClick('home')} className="block">
                <span className={`text-lg font-bold tracking-wide ${windowLocation === '/' || windowLocation === '/contact' ? 'nav-link-active' : 'nav-link'}`}>
                  Home
                </span>
              </Link>
              
              <Link to='/about' onClick={() => handleLinkClick('about')} className="block">
                <span className={`text-lg font-bold tracking-wide ${windowLocation === '/about' ? 'nav-link-active' : 'nav-link'}`}>
                  About Us
                </span>
              </Link>
              
              <Link to='/services' onClick={() => handleLinkClick('services')} className="block">
                <span className={`text-lg font-bold tracking-wide ${windowLocation === '/services' ? 'nav-link-active' : 'nav-link'}`}>
                  Services
                </span>
              </Link>
              
              <Link to='/pricing' onClick={() => handleLinkClick('pricing')} className="block">
                <span className={`text-lg font-bold tracking-wide ${windowLocation === '/pricing' ? 'nav-link-active' : 'nav-link'}`}>
                  Pricing
                </span>
              </Link>
              
              <div className="block">
                <span className={`${windowLocation.includes('/caseStudy/') ? 'nav-link-active' : 'nav-link'}`}>
                  <BurgerCaseStudyDropDown onItemClick={handleMenuClose} handleMenuClose={handleMenuClose}  />
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};