import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button'
}) => {
  const baseStyles = 'px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-base';
  
  const variants = {
    primary: 'bg-[#3AF2FF] text-[#013A63] hover:bg-[#2DD9E6] hover:shadow-lg hover:shadow-[#3AF2FF]/30 hover:-translate-y-0.5',
    secondary: 'bg-white text-[#013A63] hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5',
    outline: 'border-2 border-[#3AF2FF] text-[#3AF2FF] hover:bg-[#3AF2FF] hover:text-[#013A63] hover:-translate-y-0.5'
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
