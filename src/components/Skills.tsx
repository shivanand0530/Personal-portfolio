import React from 'react';
import { Code, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { developmentSkills, Framework } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills: React.FC = () => {
  const { ref, inView } = useScrollReveal();

  const SkillCard: React.FC<{ skill: any; index: number }> = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="w-16 h-20 bg-gray-800 dark:bg-gray-100 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <img
          src={skill.image}
          alt={skill.name}
          className="w-10 h-10 object-cover rounded-lg"
        />
      </div>
      <h3 className="font-medium text-gray-900 dark:text-white mb-1">{skill.name}</h3>
      <span className="text-sm text-gray-500">{skill.level}</span>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black" ref={ref}>
      <div className="container mx-auto px-8 lg:px-16 xl:px-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400">My Tech Stack</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Development Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Code className="w-5 h-5 text-gray-900 dark:text-white" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Development</h3>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {developmentSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Database className="w-5 h-5 text-gray-900 dark:text-white" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frameworks & Tools</h3>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {Framework.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;