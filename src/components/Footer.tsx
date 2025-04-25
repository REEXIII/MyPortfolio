import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-950/80 text-white/80 py-8 border-t border-purple-800/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-gold-400 font-serif text-xl font-bold">E-Portfolio</h2>
            <p className="mt-2 text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 md:items-center">
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-white/70 hover:text-gold-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gold-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gold-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            
            <div className="h-0.5 w-full md:h-6 md:w-0.5 bg-purple-800/30"></div>
            
            <nav>
              <ul className="flex space-x-4 text-sm justify-center">
                <li><NavLink to="/" className="text-white/70 hover:text-gold-400 transition-colors">Home</NavLink></li>
                <li><NavLink to="/table-of-contents" className="text-white/70 hover:text-gold-400 transition-colors">Contents</NavLink></li>
                <li><NavLink to="/conclusion" className="text-white/70 hover:text-gold-400 transition-colors">Conclusion</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;