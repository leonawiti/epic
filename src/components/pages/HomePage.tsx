import React from 'react';
import { Button } from '../ui/Button';
import { ValuePoint } from '../home/ValuePoint';
import { SolutionCard } from '../home/SolutionCard';
import { Zap, MessageCircle, TrendingUp, DollarSign, CreditCard, Users, Headphones, Mail, Database, Wrench, Globe, Package } from 'lucide-react';


interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const valuePoints = [
    { icon: Zap, title: 'Reduce Manual Work', benefit: 'Eliminate repetitive tasks.' },
    { icon: MessageCircle, title: 'Respond 24/7', benefit: 'Never miss a customer or lead.' },
    { icon: TrendingUp, title: 'Scale Without Hiring', benefit: 'Grow without adding overhead.' },
    { icon: DollarSign, title: 'Increase Profit & Productivity', benefit: 'Do more with less effort.' }
  ];

  const solutions = [
    { icon: CreditCard, title: 'Financial Automations', description: 'Automate billing, payroll, and payments — accurately and on time.' },
    { icon: Users, title: 'Project Management & HR', description: 'Streamline onboarding, scheduling, and internal workflows.' },
    { icon: Headphones, title: 'Customer Service & Scheduling', description: 'Chatbots + AI voice agents handle inquiries and book appointments 24/7.' },
    { icon: Mail, title: 'Marketing Automations', description: 'AI-driven social content, email outreach, and lead nurturing at scale.' },
    { icon: Database, title: 'CRM & Customer Relationships', description: 'Automated follow-ups, renewals, and customer experience workflows.' },
    { icon: Wrench, title: 'IT & Support Desk', description: 'Instant ticket routing and troubleshooting flows — without delays.' },
    { icon: Globe, title: 'Website Creation & Maintenance', description: 'AI-built websites with integrated lead capture, chat, and analytics.' },
    { icon: Package, title: 'Washer & Dryer Rentals', description: 'Convenience-focused appliance rentals with delivery and maintenance.' }

  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/691030e8ae91d68446212d9f_1762668831164_a6c3d06c.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#013A63]/90 via-[#013A63]/80 to-[#013A63]/90"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Business. <span className="text-[#3AF2FF]">Fully Automated.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            EPIC designs intelligent systems that handle your workflows, customer interactions, internal processes, and day-to-day operations — so you and your team can focus on the work that actually matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="primary" onClick={() => onNavigate('Contact')}>Get a Free Automation Audit</Button>
            <Button variant="outline">Watch Demo</Button>
          </div>
          <p className="text-sm text-gray-400">
            Automation. AI. Efficiency. Real results — built for real businesses.
          </p>
        </div>
      </section>


      {/* Value Points */}
      <section className="py-20 bg-gradient-to-b from-[#013A63] to-[#002244]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePoints.map((point, idx) => (
              <ValuePoint key={idx} {...point} />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-20 bg-[#002244]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, idx) => (
              <SolutionCard key={idx} {...solution} onClick={() => onNavigate('Solutions')} />
            ))}
          </div>
        </div>
      </section>

      {/* Work Smarter Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/691030e8ae91d68446212d9f_1762668832757_e33fd482.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[#013A63]/85"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Work Smarter. Not Harder.
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Your time is the most valuable asset in your business. We build systems that protect it — by automating everything that can be automated, without disrupting the way you already work.
          </p>
          <Button variant="primary" onClick={() => onNavigate('Contact')}>Book Consultation</Button>
        </div>
      </section>
    </div>
  );
};
