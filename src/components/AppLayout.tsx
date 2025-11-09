import React, { useState, useEffect } from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export const AppLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'Solutions':
        return <SolutionsPage onNavigate={handleNavigate} />;
      case 'About':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'Contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#013A63]">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default AppLayout;
