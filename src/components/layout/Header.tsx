import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Solutions', 'About', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div onClick={() => onNavigate('Home')} className="cursor-pointer">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/68852dbea4a63d4bcec921eb_1762670515043_22236cad.png" 
            alt="EPIC Business Intelligence" 
            className="h-12 w-auto"
          />
        </div>

        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className={`text-black hover:text-[#3AF2FF] transition-colors ${currentPage === item ? 'text-[#3AF2FF]' : ''}`}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('Contact')}
            className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-base bg-[#b1f2ff] text-black hover:bg-[#9de8f5] hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Started
          </button>
        </nav>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-black">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#013A63] border-t border-white/10">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => { onNavigate(item); setMobileMenuOpen(false); }}
                className="text-white text-left hover:text-[#3AF2FF] transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
