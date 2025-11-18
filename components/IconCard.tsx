
import React from 'react';

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-secondary mx-auto mb-4 text-brand-primary">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-brand-dark mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default IconCard;
