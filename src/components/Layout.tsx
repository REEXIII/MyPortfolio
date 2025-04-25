import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticleBackground from './ParticleBackground';
import { motion } from 'framer-motion';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950">
      <ParticleBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-purple-950/40 to-purple-950/60 -z-10"></div>
      <Navbar />
      <motion.main 
        className="flex-grow relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;