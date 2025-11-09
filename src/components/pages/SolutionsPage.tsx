import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { CreditCard, Users, Headphones, Mail, Database, Wrench, Globe, Package } from 'lucide-react';


interface SolutionsPageProps {
  onNavigate: (page: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  const solutions = [
    {
      icon: CreditCard,
      title: 'Financial Automations',
      description: 'Automate invoicing, billing cycles, payroll, vendor payments, and monthly reporting.',
      outcome: 'Administrative work disappears.'
    },
    {
      icon: Users,
      title: 'Project Management & HR Automations',
      description: 'Automate task hand-offs, onboarding flows, scheduling, and internal approvals.',
      outcome: 'Teams operate smoothly and consistently.'
    },
    {
      icon: Headphones,
      title: 'Customer Service & Scheduling Automations',
      description: 'AI voice agents + chatbots handle calls, inquiries, appointment booking, and FAQs — 24/7.',
      outcome: 'Customers get immediate support, even when you\'re unavailable.'
    },
    {
      icon: Mail,
      title: 'Marketing Automations',
      description: 'AI systems schedule social content, run email sequences, engage leads, and encourage reviews.',
      outcome: 'Your brand stays visible automatically.'
    },
    {
      icon: Database,
      title: 'CRM & Client Relationship Automations',
      description: 'Automated nurture sequences, renewals, check-ins, and post-service touches.',
      outcome: 'Stronger relationships with zero effort.'
    },
    {
      icon: Wrench,
      title: 'IT & Support Desk Automations',
      description: 'Automated ticket triage, troubleshooting steps, and system alerts.',
      outcome: 'Faster support, lower workload.'
    },
    {
      icon: Globe,
      title: 'Website Creation & Maintenance Automations',
      description: 'AI builds your site. AI updates your site. AI monitors performance.',
      outcome: 'A website that doesn\'t require maintenance.'
    },
    {
      icon: Package,

      title: 'Washer & Dryer Subscription Rentals',
      description: 'Monthly appliance rentals with optional maintenance plans, delivery, and installation.',
      outcome: 'Convenience without upfront cost.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#013A63] to-[#002244] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Automation Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive automation systems designed to transform every aspect of your business operations.
          </p>
        </div>

        <div className="space-y-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <Card key={idx} hover={false} className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-[#3AF2FF]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-[#3AF2FF]" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                    <p className="text-gray-300 mb-3 leading-relaxed">{solution.description}</p>
                    <p className="text-[#3AF2FF] font-semibold">Outcome: {solution.outcome}</p>
                  </div>
                  <Button variant="outline" onClick={() => onNavigate('Contact')} className="flex-shrink-0">
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <Button variant="primary" onClick={() => onNavigate('Contact')}>
            Get Your Free Automation Audit
          </Button>
        </div>
      </div>
    </div>
  );
};
