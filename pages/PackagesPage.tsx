
import React from 'react';
import { TOURS } from '../constants';
import TourCard from '../components/TourCard';

interface PackagesPageProps {
  viewTour: (tourId: number) => void;
}

const PackagesPage: React.FC<PackagesPageProps> = ({ viewTour }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center text-white text-center bg-brand-dark">
        <img src="https://picsum.photos/seed/packages_hero/1920/1280" alt="Traveler with a backpack" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Tour Packages</h1>
          <p className="text-lg md:text-xl mt-2">Find the adventure that's right for you.</p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS.map(tour => (
            <TourCard key={tour.id} tour={tour} viewTour={viewTour} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
