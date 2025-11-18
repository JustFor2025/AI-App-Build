
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <button onClick={() => navigateTo(Page.Home)} className="flex items-center space-x-2">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.881 4.043A9.046 9.046 0 0112 3c2.492 0 4.773.98 6.533 2.618m-13.066 0A9.01 9.01 0 013 11m11.119-6.957a9.006 9.006 0 013.412 3.412" />
              </svg>
              <span className="text-2xl font-bold">Wanderlust</span>
            </button>
            <p className="mt-4 text-gray-400 text-sm">Find your perfect tour and discover the world with us.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => navigateTo(Page.About)} className="text-gray-400 hover:text-white">About</button></li>
              <li><button onClick={() => navigateTo(Page.Packages)} className="text-gray-400 hover:text-white">Packages</button></li>
              <li><button onClick={() => navigateTo(Page.Destinations)} className="text-gray-400 hover:text-white">Destinations</button></li>
              <li><button onClick={() => navigateTo(Page.Contact)} className="text-gray-400 hover:text-white">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>123 Travel Lane, Wanderlust City, 98765</li>
              <li>Email: contact@wanderlust.tours</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Wanderlust Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
