import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const hoverStyles = hover 
    ? 'hover:shadow-xl hover:shadow-[#3AF2FF]/20 hover:-translate-y-1 cursor-pointer' 
    : '';

  return (
    <div 
      className={`
        bg-white/10 backdrop-blur-md rounded-xl p-6 
        shadow-lg border border-white/20
        transition-all duration-300
        ${hoverStyles}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
