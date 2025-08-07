import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Code, BookOpen, Briefcase, MessageCircle, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      
      // Check which section is currently in view
      const sections = ['home', 'skills', 'qualification', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', icon: Home, label: 'Home' },
    { href: '#skills', icon: Code, label: 'Skills' },
    { href: '#qualification', icon: BookOpen, label: 'Qualifications' },
    { href: '#projects', icon: Briefcase, label: 'Projects' },
    { href: '#contact', icon: MessageCircle, label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav className="container mx-auto px-8 lg:px-16 xl:px-24 max-w-7xl">
        <div className={`flex items-center justify-between  h-16 bg-white dark:bg-black transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}>
          <a href="#" className="font-mono font-semibold text-lg transition-colors duration-300 text-gray-900 dark:text-white">
            &#60;Shivananda Bharathi K<span className="font-sans">/</span>&#62;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-start space-x-14">
            {navItems.map(({ href, label }) => {
              const sectionId = href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={href}
                  href={href}
                  className={`transition-colors duration-300 font-medium relative ${
                    isActive 
                      ? 'text-gray-900 dark:text-white font-semibold' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center ml-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute bottom-20 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6">
            <div className="grid grid-cols-3 gap-4">
              {navItems.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex flex-col items-center space-y-2 p-3 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-600" />
                  <span className="text-xs font-medium text-gray-600">{label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;