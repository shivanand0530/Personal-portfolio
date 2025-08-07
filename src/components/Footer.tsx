import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-black py-8 relative">
      <div className="container mx-auto px-8 lg:px-16 xl:px-24 max-w-7xl">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © Copyright {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-10 h-10 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg shadow-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center justify-center z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;