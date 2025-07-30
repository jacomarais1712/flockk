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
    <div className="lg:hidden">
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

          {/* Menu Panel */}
          <div className="fixed top-20 left-0 w-full h-screen z-50 bg-black">
            <div className="flex flex-col justify-evenly pb-20 h-full items-center">
              {/* Close Button */}

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
              <hr className='w-full text-zinc-500'></hr>
              <div className="flex flex-row gap-2 justify-center items-center w-full">
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};