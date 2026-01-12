import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detect scroll to darken navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Services', 'Process', 'Portfolio'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-luxury-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-2xl font-serif font-bold text-white tracking-wider z-50">
          HARRIS <span className="text-luxury-gold">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-luxury-gold transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#contact" className="border border-luxury-gold px-6 py-2 text-luxury-gold text-sm uppercase tracking-widest hover:bg-luxury-gold hover:text-black transition-all duration-300">
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white z-50 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-luxury-black flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {navLinks.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif text-white hover:text-luxury-gold transition-colors"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="mt-4 border border-luxury-gold px-8 py-3 text-luxury-gold uppercase tracking-widest"
              >
                Book Consultation
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;