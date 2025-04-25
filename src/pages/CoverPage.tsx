import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoverPage: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-16">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-purple-900/50 to-purple-950/50"></div>
      
      <motion.div 
        className="z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="relative w-48 h-48 mx-auto mb-8 overflow-hidden border-4 rounded-full shadow-lg border-gold-400/50 group"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-tr from-purple-600/20 to-transparent group-hover:opacity-100"></div>
          <img 
            src="name.jpg" 
            alt="Profile"
            className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
          />
        </motion.div>

        <motion.h1 
          className="mb-4 font-serif text-5xl font-bold text-transparent md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          A Path in the Exploring the World of Communication
        </motion.h1>

        <motion.h2 
          className="mb-6 font-serif text-3xl md:text-4xl text-gold-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Trixie Mae C. Lim
        </motion.h2>

        <motion.h3 
          className="mb-8 text-xl text-purple-200 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Bachelor of Science in Information Technology
        </motion.h3>

        <motion.div
          className="relative max-w-2xl p-6 mx-auto mb-12 overflow-hidden border rounded-lg bg-purple-900/30 backdrop-blur-sm border-purple-500/30 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <p className="relative z-10 font-serif text-lg italic md:text-xl text-white/90">
            "Beyond Communication is a Journey of Self-discovery"
          </p>
          <p className="relative z-10 mt-2 text-gold-400">— Lim, Trixie</p>
        </motion.div>
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <Link 
            to="/introduction" 
            className="relative inline-flex items-center px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-purple-800 to-purple-900 hover:from-purple-700 hover:to-purple-800 hover:shadow-xl hover:-translate-y-1 group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gold-400/0 via-gold-400/20 to-gold-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            <span className="relative z-10">Begin Exploring</span>
          </Link>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute left-0 right-0 flex justify-center bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <ChevronDown size={32} className="text-gold-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CoverPage;