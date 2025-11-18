
import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  navigateTo: (page: Page) => void;
  currentPage: Page;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  navigateTo: (page: Page) => void;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ page, currentPage, navigateTo, children, onClick }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => {
        navigateTo(page);
        if (onClick) onClick();
      }}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'text-brand-primary'
          : 'text-gray-600 hover:text-brand-primary hover:bg-brand-secondary'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ navigateTo, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 w-full shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => navigateTo(Page.Home)} className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.881 4.043A9.046 9.046 0 0112 3c2.492 0 4.773.98 6.533 2.618m-13.066 0A9.01 9.01 0 013 11m11.119-6.957a9.006 9.006 0 013.412 3.412" />
              </svg>
              <span className="text-2xl font-bold text-brand-dark">Wanderlust</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink page={Page.Home} currentPage={currentPage} navigateTo={navigateTo}>Home</NavLink>
              <NavLink page={Page.Destinations} currentPage={currentPage} navigateTo={navigateTo}>Destinations</NavLink>
              <NavLink page={Page.Packages} currentPage={currentPage} navigateTo={navigateTo}>Packages</NavLink>
              <NavLink page={Page.About} currentPage={currentPage} navigateTo={navigateTo}>About</NavLink>
              <NavLink page={Page.Contact} currentPage={currentPage} navigateTo={navigateTo}>Contact</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
             <button
              onClick={() => navigateTo(Page.Packages)}
              className="bg-brand-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              Book a Tour
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-brand-primary hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-brand-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink page={Page.Home} currentPage={currentPage} navigateTo={navigateTo} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink page={Page.Destinations} currentPage={currentPage} navigateTo={navigateTo} onClick={() => setIsMenuOpen(false)}>Destinations</NavLink>
            <NavLink page={Page.Packages} currentPage={currentPage} navigateTo={navigateTo} onClick={() => setIsMenuOpen(false)}>Packages</NavLink>
            <NavLink page={Page.About} currentPage={currentPage} navigateTo={navigateTo} onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink page={Page.Contact} currentPage={currentPage} navigateTo={navigateTo} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            <div className="px-2 py-2">
                <button
                    onClick={() => { navigateTo(Page.Packages); setIsMenuOpen(false); }}
                    className="w-full bg-brand-primary text-white px-5 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all duration-300"
                >
                    Book a Tour
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
