import React from 'react';

const steps = [
  { id: '01', title: 'Consultation', desc: 'We meet to discuss your plot specifics, budget, and lifestyle requirements.' },
  { id: '02', title: 'Concept Design', desc: 'We translate your vision into initial sketches and 3D elevations.' },
  { id: '03', title: 'Approvals', desc: 'Handling all submission drawings and approvals with DHA authorities.' },
  { id: '04', title: 'Construction', desc: 'Bringing the blueprint to life with precision execution and supervision.' }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-luxury-black border-t border-gray-900">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">How We Work</h2>
            <p className="text-luxury-muted">From the first sketch to the final key handover.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gray-800 -z-0"></div>

          {steps.map((step) => (
            // ADDED: 'flex flex-col items-center text-center md:items-start md:text-left'
            // This centers content on mobile, but aligns left on desktop to follow the line.
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
              
              {/* The Number Circle */}
              <div className="w-24 h-24 bg-luxury-black border border-gray-800 rounded-full flex items-center justify-center mb-6 text-2xl font-serif text-luxury-gold shadow-2xl">
                {step.id}
              </div>
              
              <h3 className="text-xl text-white font-serif mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed pr-0 md:pr-4">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Process;