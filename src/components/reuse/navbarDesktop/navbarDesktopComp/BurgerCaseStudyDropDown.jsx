import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CaseStudyDropDown({ direction, handleMenuClose, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleItemClick = (callback) => {
    if (callback) callback();
    setDropdownOpen(false);
  };

  return (
    <>
      <div className="text-base font-bold tracking-wide leading-6 max-md:text-sm max-sm:text-base nav-link">
        <div ref={dropdownRef} className="relative inline-block text-center">
          <span
            onClick={toggle}
            className="cursor-pointer transition-colors duration-200 select-none"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle();
              }
            }}
          >
            Case Studies
            <span className={`ml-2 inline-block transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </span>

            <div className={`relative top-full shadow-lg z-50 py-1 transition-all duration-300 ${
              dropdownOpen 
                ? 'opacity-100 scale-y-100' 
                : 'opacity-0 scale-y-0 pointer-events-none'
              }`}>
              <div
                onClick={() => handleMenuClose()}
                className="block px-4 py-2 bg-black text-zinc-900 hover:bg-emerald-500 hover:text-emerald-600 cursor-pointer transition-all duration-150 text-sm font-normal"
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleItemClick(() => console.log('Item 1 clicked'));
                  }
                }}
              >
                <Link
                  style={{color:'gray'}}
                  to='/casestudy/1'
                >
                  Oh My Cake!
                </Link>
              </div>
              
              <div
                onClick={() => handleMenuClose()}
                className="block px-4 py-2 bg-black hover:bg-emerald-500 hover:text-emerald-600 cursor-pointer transition-all duration-150 text-sm font-normal"
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleItemClick(() => console.log('Item 2 clicked'));
                  }
                }}
              >
                <Link
                  style={{color:'gray'}}
                  to='/casestudy/2'
                >
                  Entelect
                </Link>
              </div>
              
              <div
                onClick={() => handleMenuClose()}
                className="block px-4 py-2 bg-black hover:bg-emerald-500 hover:text-emerald-600 cursor-pointer transition-all duration-150 text-sm font-normal"
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleItemClick(() => console.log('Item 3 clicked'));
                  }
                }}
              >
                <Link
                  style={{color:'gray'}}
                  to='/casestudy/3'
                >
                  MoAfrica Tours
                </Link>
              </div>
              
            </div>
        </div>
      </div>
    </>
  );
}

export default CaseStudyDropDown;