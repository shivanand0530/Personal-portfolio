import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { projects } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

/** @jsxImportSource react */


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects: React.FC = () => {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black" ref={ref}>
      <div className="container mx-auto px-8 lg:px-16 xl:px-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400">My personal projects</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="projects-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 dark:bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-gray-300 dark:text-gray-600 mb-1 block">
                      {project.subtitle}
                    </span>
                    <h3 className="text-lg font-semibold text-white dark:text-gray-900 mb-3 line-clamp-2">
                      {project.title}
                    </h3>
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center space-x-2 text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors font-medium text-sm"
                    >
                      <span>Demo</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-800 dark:bg-gray-100 rounded-full shadow-lg flex items-center justify-center text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-800 dark:bg-gray-100 rounded-full shadow-lg flex items-center justify-center text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        .projects-swiper .swiper-pagination {
          bottom: -50px !important;
        }
        
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 50%;
          opacity: 1;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: #3b82f6;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Projects;