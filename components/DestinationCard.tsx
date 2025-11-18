
import React from 'react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  onClick: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative rounded-xl overflow-hidden h-80 shadow-lg cursor-pointer group transform hover:scale-105 transition-transform duration-300"
    >
      <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
      </div>
    </div>
  );
};

export default DestinationCard;
