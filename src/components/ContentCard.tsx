import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContentCardProps {
  children: ReactNode;
  delay?: number;
}

const ContentCard: React.FC<ContentCardProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-purple-950/50 backdrop-blur-sm border border-purple-800/30 rounded-lg p-6 shadow-xl relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-600/5 to-purple-800/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default ContentCard;