import React, { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const { ref, inView } = useScrollReveal();
  
  const roles = ['Mobile Application Developer', 'Frontend Developer', 'Cyber Security Enthusiast'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = roles[currentRole];
    let index = 0;
    setTypedText('');

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center py-20 lg:py-0" ref={ref}>
      <div className="container mx-auto px-8 lg:px-16 xl:px-24 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-3 lg:order-1"
          >
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2 dark:text-gray-600">BIO - Passionate about:</h3>
              <p className="text-sm dark:text-gray-300 leading-relaxed">
                • Frontend Development<br />
                • Cross Platform Mobile Application Development<br />
                • Cyber Security <br />
                . Machine Learning <br />
                • Artificial Intelligence <br />
                • Data Structures and Algorithms <br />
                 <br />
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2 dark:text-gray-600">CONTACT</h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2 dark:text-gray-600">SOCIAL</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const iconMap = {
                    'LinkedIn': Linkedin,
                    'GitHub': Github,
                    // 'Mail': Mail,
                  };
                  const IconComponent = iconMap[link.label as keyof typeof iconMap] || null;
                  return (
                    <a
                      key={index}
                      href={link.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors text-xl"
                      aria-label={link.label}
                    >
                      {IconComponent ? <IconComponent className="w-6 h-6" /> : null}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-6 order-1 lg:order-2"
          >
            <div className="space-y-2">
              <p className="text-sm font-mono text-gray-500">hello(); I'm</p>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-wide">
                {personalInfo.name}
              </h1>
              <p className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                I'm <span className="text-gray-600 dark:text-gray-300">{typedText}</span>
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Profile Image */}
            <div className="relative mx-auto w-48 h-64 lg:w-64 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full transform rotate-3"></div>
              <div className="relative w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 opacity-20">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-900 dark:text-white">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-900 dark:text-white">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8 order-2 lg:order-3"
          >
            <div className="text-center lg:text-right">
              <h3 className="text-sm font-medium text-gray-500 mb-2"></h3>
              <p className="text-x flex items-start justify-center text-gray-900 dark:text-white">{personalInfo.about}</p>
            </div>

            {/* <div className="flex justify-center lg:justify-end">
              <button className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium">
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;