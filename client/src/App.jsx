import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services'; // New Import
import Process from './components/Process';   // New Import
import Portfolio from './components/Portfolio';
import Consultation from './components/Consultation';

function App() {
  return (
    <div className="bg-luxury-black min-h-screen text-white font-sans selection:bg-luxury-gold selection:text-black overflow-x-hidden">
      
      {/* 1. Navigation (Fixed Glass Effect) */}
      <Navbar />

      {/* 2. Hero Section (First Impression) */}
      <Hero />

      {/* 3. About Section (The Philosophy) */}
      <About />

      {/* 4. Services Section (What we do) */}
      <Services />

      {/* 5. Process Section (How we work - Builds Trust) */}
      <Process />

      {/* 6. Portfolio Grid (The Proof) */}
      <Portfolio />

      {/* 7. Consultation Form (The Closer) */}
      <Consultation />

      {/* 8. Minimalist Footer */}
      <footer className="py-8 border-t border-gray-900 bg-black text-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs tracking-widest uppercase">
          
          <p>&copy; 2024 Harris Associates. All Rights Reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-luxury-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Email</a>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;