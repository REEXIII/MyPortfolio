import React from 'react';
import { motion } from 'framer-motion';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="mb-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-gold-300 text-lg md:text-xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-purple-500 via-gold-400 to-purple-500 rounded-full"></div>
    </motion.div>
  );
};

export default PageTitle;