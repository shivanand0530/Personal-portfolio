import React from 'react';
import { BookOpen, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { education, experience } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Qualifications: React.FC = () => {
  const { ref, inView } = useScrollReveal();

  const QualificationCard: React.FC<{ item: any; index: number }> = ({ item, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8 last:mb-0"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {item.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-1">{item.institution}</p>
      <span className="text-sm text-gray-500">{item.year}</span>
    </motion.div>
  );

  return (
    <section id="qualification" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-8 lg:px-16 xl:px-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Qualifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Experience and Education</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-8">
              <BookOpen className="w-5 h-5 text-gray-900 dark:text-white" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div>
              {education.map((item, index) => (
                <QualificationCard key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Building className="w-5 h-5 text-gray-900 dark:text-white" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Experience</h3>
            </div>
            <div>
              {experience.map((item, index) => (
                <QualificationCard key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative circle */}
        <div className="absolute bottom-20 right-8 w-32 h-32 opacity-5 pointer-events-none">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-900 dark:text-white w-full h-full">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;