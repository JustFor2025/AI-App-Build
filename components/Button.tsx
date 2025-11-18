
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-brand-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
