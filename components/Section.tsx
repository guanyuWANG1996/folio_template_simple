import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, title, subtitle, dark = false }) => {
  return (
    <section id={id} className={`py-20 lg:py-32 ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} ${className}`}>
      <div className="container mx-auto px-6">
        {title && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
            {subtitle && <p className={`text-lg ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{subtitle}</p>}
            <div className={`h-1 w-20 mx-auto mt-6 rounded-full ${dark ? 'bg-secondary' : 'bg-primary'}`} />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};