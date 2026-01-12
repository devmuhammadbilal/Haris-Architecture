import React from 'react';
import { motion } from 'framer-motion';

const Consultation = () => {
  return (
    <section id="contact" className="py-24 bg-luxury-charcoal relative overflow-hidden">
      {/* Decorative Gold Circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: The Pitch */}
        <div>
          <span className="text-luxury-gold text-xs tracking-[0.2em] uppercase font-bold">Next Steps</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mt-4 mb-6 leading-tight">
            Ready to Build <br /> Your Vision?
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Stop scrolling through DMs. Let's discuss your plot in Phase 6 or 9 professionally. 
            Schedule a free 15-minute discovery call to see if we are the right fit for your legacy.
          </p>
          
          <ul className="space-y-4 mb-10">
            {['Detailed Floor Plans', '3D Exterior Visualization', 'Cost Estimation'].map((item) => (
              <li key={item} className="flex items-center text-gray-300 text-sm tracking-wide">
                <span className="w-2 h-2 bg-luxury-gold rounded-full mr-4"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: The Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-luxury-black p-8 md:p-12 border border-gray-800"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-gray-700 text-white py-2 focus:outline-none focus:border-luxury-gold transition-colors" placeholder="Enter your name" />
            </div>
            
            <div>
              <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Project Location</label>
              <select className="w-full bg-transparent border-b border-gray-700 text-white py-2 focus:outline-none focus:border-luxury-gold [&>option]:text-black">
                <option>DHA Phase 6</option>
                <option>DHA Phase 9</option>
                <option>Other Location</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Phone Number</label>
              <input type="tel" className="w-full bg-transparent border-b border-gray-700 text-white py-2 focus:outline-none focus:border-luxury-gold transition-colors" placeholder="+92 300 ..." />
            </div>

            <button type="button" className="w-full bg-luxury-gold text-black font-bold uppercase tracking-widest py-4 mt-4 hover:bg-white transition-colors duration-300">
              Request Callback
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Consultation;