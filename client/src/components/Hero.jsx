import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-luxury-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Text Content (Centered in the middle of screen) */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        
        {/* Top Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-luxury-gold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-sm font-semibold mb-4 md:mb-6"
        >
          Innovate • Build • Excel
        </motion.p>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl font-serif text-white mb-6 leading-tight"
        >
          Architecting <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-yellow-200">
            Legacy.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          // Note: We can reduce the bottom margin slightly now that the arrow is separate, 
          // but keeping some space ensures text doesn't overlap the arrow on tiny screens.
          className="text-gray-300 font-light text-sm sm:text-lg max-w-xs sm:max-w-xl mx-auto leading-relaxed"
        >
          Specializing in premium residential architecture for DHA Phase 6 & 9. 
          Transforming standard plots into landmarks.
        </motion.p>
      </div>

      {/* 3. Scroll Arrow (INDEPENDENT - Pinned to bottom of screen) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        // absolute bottom-8 pins it relative to the Section, not the text.
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce text-luxury-gold"
      >
        <ArrowDown size={24} className="md:w-8 md:h-8" />
      </motion.div>

    </section>
  );
};

export default Hero;