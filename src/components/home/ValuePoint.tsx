import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ValuePointProps {
  icon: LucideIcon;
  title: string;
  benefit: string;
}

export const ValuePoint: React.FC<ValuePointProps> = ({ icon: Icon, title, benefit }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6">
      <div className="w-16 h-16 rounded-full bg-[#3AF2FF]/20 flex items-center justify-center">
        <Icon className="w-8 h-8 text-[#3AF2FF]" />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{benefit}</p>
    </div>
  );
};
