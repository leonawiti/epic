import React from 'react';
import { Card } from '../ui/Card';
import { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ icon: Icon, title, description, onClick }) => {
  return (
    <Card className="h-full" hover={true}>
      <div onClick={onClick} className="flex flex-col h-full space-y-4">
        <div className="w-12 h-12 rounded-lg bg-[#3AF2FF]/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#3AF2FF]" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed flex-grow">{description}</p>
      </div>
    </Card>
  );
};
