import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CaseStudyDropDown({ navItem, windowLocation, handleNavClick, direction, ...args }) {
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
    handleNavClick('casestudy');
    if (callback) callback();
    setDropdownOpen(false);
  };

  return (
    <div className="text-base font-bold tracking-wide leading-6 max-md:text-sm nav-link">
      <div ref={dropdownRef} className="relative inline-block">
        <span
          onClick={toggle}
          className={`cursor-pointer transition-colors duration-200 select-none max-lg:text-sm ${navItem === 'casestudy' ? 'nav-link-active' : 'nav-link'}`}
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

        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-34 border border-neutral-200 rounded-lg shadow-lg z-50 py-1">
            <div
              onClick={() => handleItemClick(() => console.log('Item 1 clicked'))}
              className="block px-4 py-2 bg-black hover:bg-emerald-700 hover:text-emerald-600 cursor-pointer transition-all duration-150 text-sm font-normal"
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
                style={{color: 'var(--flockk-neutral-50)'}}
                to='/casestudy/1'
              >
                Oh My Cake!
              </Link>
            </div>
            
            <div
              onClick={() => handleItemClick(() => console.log('Item 2 clicked'))}
              className="block px-4 py-2 bg-black hover:bg-emerald-700 hover:text-emerald-600 cursor-pointer transition-all duration-150 text-sm font-normal"
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
                style={{color: 'var(--flockk-neutral-50)'}}
                to='/casestudy/2'
              >
                Entelect
              </Link>
            </div>
            
            <div
              onClick={() => handleItemClick(() => console.log('Item 3 clicked'))}
              className="block px-4 py-2 bg-black hover:bg-emerald-700 hover:text-emerald-600 cursor-pointer transition-all duration-150 text-sm font-normal"
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
                style={{color: 'var(--flockk-neutral-50)'}}
                to='/casestudy/3'
              >
                MoAfrica Tours
              </Link>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default CaseStudyDropDown;