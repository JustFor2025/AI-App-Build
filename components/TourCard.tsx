
import React from 'react';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
  viewTour: (tourId: number) => void;
}

const TourCard: React.FC<TourCardProps> = ({ tour, viewTour }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
      onClick={() => viewTour(tour.id)}
    >
      <div className="relative h-56">
        <img className="w-full h-full object-cover" src={tour.heroImage} alt={tour.title} />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-dark mb-2">{tour.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{tour.excerpt}</p>
        <button
          className="font-semibold text-brand-primary group-hover:text-teal-700 transition-colors duration-300"
        >
          View More &rarr;
        </button>
      </div>
    </div>
  );
};

export default TourCard;
