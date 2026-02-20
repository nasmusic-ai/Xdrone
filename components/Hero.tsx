import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import VideoModal from './VideoModal';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-900 uppercase bg-blue-100 rounded-full">
              Next Gen Aviation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              4-Seater Drone <br />
              <span className="text-blue-900">Aircraft Analysis</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Explore the dimensions, propulsion, performance, and advanced flight control architecture of the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#specs" 
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-900 hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/20"
              >
                View Specifications
              </a>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-sm group"
              >
                <div className="bg-slate-100 rounded-full p-1 mr-3 group-hover:bg-blue-100 transition-colors">
                  <Play className="h-4 w-4 text-blue-900 fill-blue-900 relative left-0.5" />
                </div>
                Watch Demo
              </button>
            </div>
            <div className="mt-6">
              <a 
                href="#design" 
                className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-blue-900 transition-colors"
              >
                Learn more about the design <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="relative mt-10 lg:mt-0">
             <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-200 relative group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                <img 
                  src="https://github.com/nasmusic-ai/RAW/blob/main/aa2.png?raw=true" 
                  alt="Futuristic Drone Aircraft" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent mix-blend-multiply pointer-events-none" />
                
                {/* Play button overlay on image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="h-8 w-8 text-blue-900 fill-blue-900 relative left-0.5" />
                  </div>
                </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
};

export default Hero;