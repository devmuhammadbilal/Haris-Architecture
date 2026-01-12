import React from 'react';
import { motion } from 'framer-motion';
import { Layers, PenTool, HardHat, Ruler } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <PenTool size={32} />,
    title: 'Architectural Design',
    desc: 'Bespoke residential concepts tailored to the unique dimensions of DHA Phase 6 & 9 plots. We blend functionality with high-impact aesthetics.'
  },
  {
    id: 2,
    icon: <Layers size={32} />,
    title: 'Interior Detailing',
    desc: 'Curating the soul of the home. From material selection to lighting layouts, we design interiors that breathe luxury.'
  },
  {
    id: 3,
    icon: <HardHat size={32} />,
    title: 'Project Management',
    desc: 'Rigorous on-site supervision. We act as your representative, ensuring contractors adhere to the highest standards of quality.'
  },
  {
    id: 4,
    icon: <Ruler size={32} />,
    title: 'Structural Planning',
    desc: 'Precision engineering that ensures your investment stands the test of time. Safety meets sophistication.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-luxury-charcoal relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-luxury-gold text-xs tracking-[0.2em] uppercase font-bold">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Holistic Design Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-luxury-black p-8 border border-gray-800 hover:border-luxury-gold transition-colors duration-500 group"
            >
              <div className="text-gray-400 group-hover:text-luxury-gold transition-colors duration-500 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;