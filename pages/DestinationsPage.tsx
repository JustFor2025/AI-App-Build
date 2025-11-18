
import React from 'react';
import { Page } from '../types';
import { DESTINATIONS } from '../constants';
import DestinationCard from '../components/DestinationCard';

interface DestinationsPageProps {
  navigateTo: (page: Page) => void;
}

const DestinationsPage: React.FC<DestinationsPageProps> = ({ navigateTo }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white text-center bg-brand-dark">
        <img src="https://picsum.photos/seed/destinations_hero/1920/1280" alt="World map with travel pins" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our Destinations</h1>
          <p className="text-lg md:text-xl mt-2">Explore every corner of the world.</p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map(destination => (
            <DestinationCard 
              key={destination.id} 
              destination={destination} 
              onClick={() => navigateTo(Page.Packages)} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;
