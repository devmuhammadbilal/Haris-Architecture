import React from 'react';

const projects = [
  { id: 1, title: 'The Opal Residence', loc: 'DHA Phase 6', img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop' },
  { id: 2, title: 'Onyx Villa', loc: 'DHA Phase 9', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop' },
  { id: 3, title: 'Grey Structure HQ', loc: 'Phase 6', img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop' }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-luxury-black">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">Selected Works</h2>
            <p className="text-luxury-muted">A curation of our finest residential projects.</p>
          </div>
          <div className="mt-6 md:mt-0">
             <button className="text-luxury-gold border-b border-luxury-gold pb-1 uppercase text-xs tracking-widest hover:text-white hover:border-white transition-all">View All Projects</button>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Image Container with Hover Zoom */}
              <div className="overflow-hidden aspect-[4/5] mb-6 grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              
              {/* Project Details */}
              <div className="flex justify-between items-start border-t border-gray-800 pt-4">
                <div>
                  <h3 className="text-2xl font-serif text-white group-hover:text-luxury-gold transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{project.loc}</p>
                </div>
                <span className="text-gray-700 text-xs">0{project.id}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;