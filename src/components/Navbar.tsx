import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, User, FileText, Video, BookOpen, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Cover', icon: <User size={16} /> },
  { path: '/introduction', label: 'Introduction', icon: <BookOpen size={16} /> },
  { path: '/table-of-contents', label: 'Contents', icon: <FileText size={16} /> },
  { path: '/debate-video', label: 'Debate', icon: <Video size={16} /> },
  { path: '/self-assessment', label: 'Self Assessment', icon: <Award size={16} /> },
  { path: '/peer-assessment', label: 'Peer Assessment', icon: <Award size={16} /> },
  { path: '/job-advertisement', label: 'Job Ad', icon: <Briefcase size={16} /> },
  { path: '/resume', label: 'Resume', icon: <FileText size={16} /> },
  { path: '/application-letter', label: 'Application', icon: <FileText size={16} /> },
  { path: '/video-introduction', label: 'Video Intro', icon: <Video size={16} /> },
  { path: '/conclusion', label: 'Conclusion', icon: <BookOpen size={16} /> }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-purple-950/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container flex items-center justify-between px-4 py-4 mx-auto">
        {/* Left - Logo */}
        <NavLink to="/" className="font-serif text-2xl font-extrabold tracking-wide md:text-3xl text-gold-400">
          Portfolio
        </NavLink>

        {/* Mobile Menu Button */}
        <button 
          className="text-white transition-colors md:hidden hover:text-gold-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Right - Desktop Navigation */}
        <ul className="flex-row items-center hidden space-x-4 md:flex">
          {navItems.map(item => (
            <li key={item.path}>
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-gold-400 bg-purple-800/50' 
                      : 'text-white/80 hover:text-gold-400 hover:bg-purple-800/30'
                  }`
                }
              >
                {item.icon}
                <span className="whitespace-nowrap">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <motion.div 
        className={`md:hidden fixed inset-0 bg-purple-950/95 backdrop-blur-md z-40 pt-20 ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col items-center justify-center h-full p-8 space-y-6">
          {navItems.map(item => (
            <li key={item.path} className="w-full">
              <NavLink 
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-medium w-full transition-all duration-300 ${
                    isActive 
                      ? 'text-gold-400 bg-purple-800/50' 
                      : 'text-white hover:text-gold-400 hover:bg-purple-800/30'
                  }`
                }
              >
                {item.icon}
                <span className="whitespace-nowrap">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
