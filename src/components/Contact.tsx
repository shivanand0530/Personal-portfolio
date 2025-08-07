import React, { useState } from 'react';
import { MessageCircle, Send, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { ContactData } from '../types';

const Contact: React.FC = () => {
  const { ref, inView } = useScrollReveal();
  const [formData, setFormData] = useState<ContactData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-8 lg:px-16 xl:px-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Get in touch</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2 mb-8">
              <MessageCircle className="w-5 h-5 text-gray-900 dark:text-white" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Text me</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Email</h4>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">WhatsApp</h4>
                <p className="text-gray-900 dark:text-white mb-2">{personalInfo.phone}</p>
                <a
                  href={`https://api.whatsapp.com/send?phone=918217454465&text=Hello,%20Rajesh!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-medium"
                >
                  {/* <span>Text me</span> */}
                  {/* <ArrowUpRight className="w-4 h-4" /> */}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center space-x-2 mb-8">
              <Send className="w-5 h-5 text-gray-900 dark:text-white" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Have a query for me?</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-2xl bg-transparent focus:border-blue-600 focus:outline-none transition-colors dark:text-white"
                />
                <label className="absolute -top-3 left-4 bg-white dark:bg-gray-900 px-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-2xl bg-transparent focus:border-blue-600 focus:outline-none transition-colors dark:text-white"
                />
                <label className="absolute -top-3 left-4 bg-white dark:bg-gray-900 px-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Ask me something?"
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-2xl bg-transparent focus:border-blue-600 focus:outline-none transition-colors resize-none dark:text-white"
                />
                <label className="absolute -top-3 left-4 bg-white dark:bg-gray-900 px-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;