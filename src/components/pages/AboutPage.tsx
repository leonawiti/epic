import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Target, Eye, Lightbulb, Shield } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    { icon: Lightbulb, title: 'Simplicity', description: 'Clean solutions that just work.' },
    { icon: Shield, title: 'Reliability', description: 'Systems you can depend on.' },
    { icon: Target, title: 'Efficiency', description: 'Maximum results, minimal effort.' },
    { icon: Eye, title: 'Innovation', description: 'Always pushing forward.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#013A63] to-[#002244] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            We Build Systems That <span className="text-[#3AF2FF]">Work For You.</span>
          </h1>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card hover={false} className="p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To help businesses operate efficiently by eliminating repetitive tasks and implementing intelligent automation.
            </p>
          </Card>
          <Card hover={false} className="p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              A world where work feels lighter, faster, and more meaningful — powered by automation that quietly handles the rest.
            </p>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} hover={false} className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#3AF2FF]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#3AF2FF]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Founder Message */}
        <Card hover={false} className="p-8 md:p-12 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed mb-6 italic">
              "At EPIC, we believe your business should run smoothly — even when you're not actively pushing it forward. Automation gives you time back. And time is freedom."
            </p>
            <p className="text-[#3AF2FF] font-semibold">— Founder, EPIC</p>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <Button variant="primary" onClick={() => onNavigate('Contact')}>
            Get Started Today
          </Button>
        </div>
      </div>
    </div>
  );
};
