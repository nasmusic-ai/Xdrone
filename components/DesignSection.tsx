import React from 'react';
import { Zap, Wind, Layers, ArrowDown } from 'lucide-react';

const DesignSection: React.FC = () => {
  const features = [
    {
      title: "Thrust-Vectoring Control",
      description: "No conventional control surfaces required. Direct modulation of thrust for maneuverability.",
      icon: <ArrowDown className="h-6 w-6 text-white" />,
      color: "bg-blue-600",
      image: "https://github.com/nasmusic-ai/RAW/blob/main/engine2.png?raw=true"
    },
    {
      title: "Electric Propulsion",
      description: "Low noise signature and high safety operation standards through distributed electric power.",
      icon: <Zap className="h-6 w-6 text-white" />,
      color: "bg-blue-700",
      image: "https://github.com/nasmusic-ai/RAW/blob/main/electric-propulsion-2.png?raw=true"
    },
	 {
  title: "Interior of a Futuristic Six-Seater Drone",
  description: "Engineered with distributed electric propulsion for ultra-quiet performance, enhanced efficiency, and advanced safety reliability.",
  icon: <Zap className="h-6 w-6 text-white" />,
  color: "bg-blue-700",
  image: "https://github.com/nasmusic-ai/RAW/blob/main/engine-xray.png?raw=true"
},
    {
      title: "Mid-Mounted Wings",
      description: "Improves stability and load distribution across the airframe structure.",
      icon: <Layers className="h-6 w-6 text-white" />,
      color: "bg-blue-800",
      image: "https://github.com/nasmusic-ai/RAW/blob/main/Mid-mounted-wing2.png?raw=true"
    },
  ];

  return (
    <section id="design" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Innovation</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Design Overview
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            A hierarchical approach to modern eVTOL architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`relative group bg-slate-50 rounded-2xl border border-slate-100 flex flex-col overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl`}
            >
              {feature.image && (
                <div className="h-48 w-full relative overflow-hidden">
                   <img 
                     src={feature.image} 
                     alt={feature.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
              )}

              {/* Icon */}
              <div className={`absolute ${feature.image ? 'top-4 right-4' : 'top-0 right-0 -mt-4 -mr-4'} w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 z-10`}>
                {feature.icon}
              </div>

              <div className={feature.image ? 'p-6 pt-4' : 'p-6'}>
                 <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                 <p className="mt-2 text-slate-600 leading-relaxed">
                    {feature.description}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignSection;