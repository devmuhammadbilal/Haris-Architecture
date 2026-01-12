import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, PenTool, Home } from 'lucide-react';

const About = () => {
  const demoManImage = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop";

  return (
    <section id="about" className="py-24 bg-luxury-black relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* FLEXBOX LOCK: 'md:flex-row' + 'items-stretch' makes them equal height */}
        <div className="flex flex-col md:flex-row gap-16 items-stretch">
          
          {/* LEFT: IMAGE (Adaptive Height) 
             - Mobile: We force 'h-[500px]' so it looks good.
             - Desktop: We set 'md:h-auto' so it listens to the Flexbox height.
             - 'relative': allows absolute positioning inside.
          */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative h-[500px] md:h-auto"
          >
            {/* 1. The Gold Offset Border (Pinned to the background) */}
            <div className="absolute top-6 -left-6 w-full h-full border border-luxury-gold/40 z-0 hidden md:block"></div>

            {/* 2. The Image Container (Pinned to fill the available height) */}
            <div className="absolute inset-0 w-full h-full border border-gray-800 bg-gray-900 z-10 overflow-hidden">
              <img 
                src={demoManImage} 
                alt="Harris - Principal Architect" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            {/* 3. The Badge (Floating on top) */}
            <div className="absolute bottom-0 right-0 bg-luxury-gold p-6 text-black z-20 shadow-xl hidden md:block">
              <p className="text-4xl font-serif font-bold leading-none">05<span className="text-lg">+</span></p>
              <p className="text-[10px] uppercase tracking-widest font-bold mt-1">Years Exp.</p>
            </div>
          </motion.div>

          {/* RIGHT: TEXT CONTENT (Height Master) 
             - The content here dictates how tall the image on the left becomes.
          */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-luxury-gold"></div>
              <span className="text-luxury-gold text-xs tracking-[0.3em] uppercase font-bold">The Philosophy</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Designing the future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600 italic">modern living.</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              At Harris Associates, luxury isn't just expensive materials—it’s about <strong className="text-white font-normal">space, light, and flow.</strong> 
              Specializing in the distinct landscape of DHA Phase 6 & 9, we craft residences that don't just house people, but define them.
            </p>

            {/* Icons Grid */}
            <div className="grid grid-cols-3 gap-4 border-t border-gray-800 pt-8 mb-10">
              {[
                { icon: PenTool, label: "Design", sub: "Minimalist" },
                { icon: Ruler, label: "Plan", sub: "Precise" },
                { icon: Home, label: "Build", sub: "Turnkey" }
              ].map((item, idx) => (
                <div key={idx} className="group cursor-default">
                  <item.icon className="text-gray-600 group-hover:text-luxury-gold transition-colors mb-3" size={20} />
                  <h4 className="text-white font-serif text-lg">{item.label}</h4>
                  <p className="text-gray-600 text-xs uppercase tracking-wider group-hover:text-gray-400 transition-colors">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div>
              <p className="text-3xl font-serif italic text-luxury-gold/80 font-bold">Harris.</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Principal Architect</p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;