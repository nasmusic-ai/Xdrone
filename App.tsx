import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DesignSection from './components/DesignSection';
import ControlSection from './components/ControlSection';
import SpecsSection from './components/SpecsSection';
import PerformanceSection from './components/PerformanceSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <DesignSection />
        <ControlSection />
        <SpecsSection />
        <PerformanceSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;