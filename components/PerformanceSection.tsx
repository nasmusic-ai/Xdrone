import React from 'react';
import { Gauge, Battery, Users, Volume2, Leaf, Zap, Recycle } from 'lucide-react';

const PerformanceSection: React.FC = () => {
  return (
    <section id="performance" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Performance & Capabilities</h2>
          <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
            Optimized for urban air mobility with class-leading efficiency and low noise profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Speed */}
          <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-700">
            <Gauge className="h-10 w-10 text-blue-300 mb-4" />
            <p className="text-sm font-medium text-blue-200 uppercase">Cruise Speed</p>
            <p className="text-4xl font-bold mt-1">250 <span className="text-lg font-normal text-blue-300">km/h</span></p>
            <p className="text-xs text-blue-300 mt-2">Max Speed: 300 km/h</p>
          </div>

          {/* Range/Battery */}
          <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-700">
            <Battery className="h-10 w-10 text-blue-300 mb-4" />
            <p className="text-sm font-medium text-blue-200 uppercase">Range</p>
            <p className="text-4xl font-bold mt-1">250 <span className="text-lg font-normal text-blue-300">km</span></p>
            <p className="text-xs text-blue-300 mt-2">85 kWh Battery Capacity</p>
          </div>

          {/* Capacity */}
          <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-700">
            <Users className="h-10 w-10 text-blue-300 mb-4" />
            <p className="text-sm font-medium text-blue-200 uppercase">Capacity</p>
            <p className="text-4xl font-bold mt-1">4 <span className="text-lg font-normal text-blue-300">Seats</span></p>
            <p className="text-xs text-blue-300 mt-2">2 Pilots + 2 Passengers</p>
          </div>

           {/* Noise */}
           <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-700">
            <Volume2 className="h-10 w-10 text-blue-300 mb-4" />
            <p className="text-sm font-medium text-blue-200 uppercase">Acoustics</p>
            <p className="text-xl font-bold mt-1">Low Noise</p>
            <p className="text-xs text-blue-300 mt-2">Significantly quieter than helicopter class</p>
          </div>
        </div>

        {/* Sustainability Subsection */}
        <div className="mb-16 bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-8 lg:p-12 border border-blue-700">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
                        <Leaf className="w-4 h-4" />
                        <span>Sustainability First</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-6">Engineered for a Greener Tomorrow</h3>
                    <p className="text-blue-200 text-lg leading-relaxed mb-8">
                        The X Drone eliminates direct carbon emissions through its advanced electric powertrain. 
                        Coupled with a lightweight airframe utilizing recycled carbon composites, it represents the sustainable future of urban mobility.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-800 rounded-lg">
                                <Zap className="w-5 h-5 text-yellow-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Zero Emissions</h4>
                                <p className="text-sm text-blue-300 mt-1">100% electric flight operation with no exhaust pollutants.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-800 rounded-lg">
                                <Recycle className="w-5 h-5 text-green-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Eco-Materials</h4>
                                <p className="text-sm text-blue-300 mt-1">Constructed using 85% recyclable aerospace-grade composites.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-950/50 rounded-2xl p-6 lg:p-8 border border-blue-800 shadow-xl">
                    <h4 className="font-bold text-lg mb-6 text-white">Environmental Impact Analysis</h4>
                    
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-blue-200">CO₂ Emissions (g/km)</span>
                                <span className="text-green-400 font-bold">0 g</span>
                            </div>
                            <div className="h-2 bg-blue-900 rounded-full overflow-hidden relative">
                                <div className="absolute top-0 left-0 h-full w-full opacity-20 bg-slate-500"></div>
                                <div className="absolute top-0 left-0 h-full bg-green-500 w-1 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                            </div>
                            <div className="flex justify-between text-xs text-blue-400 mt-1">
                                <span>X Drone (Electric)</span>
                                <span>Helicopter (~250g)</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-blue-200">Energy Efficiency</span>
                                <span className="text-blue-100 font-bold">94%</span>
                            </div>
                            <div className="h-2 bg-blue-900 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-400 w-[94%] rounded-full"></div>
                            </div>
                             <p className="text-xs text-blue-400 mt-1">Electric Motor Efficiency</p>
                        </div>

                         <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-blue-200">Recyclability</span>
                                <span className="text-blue-100 font-bold">85%</span>
                            </div>
                            <div className="h-2 bg-blue-900 rounded-full overflow-hidden">
                                <div className="h-full bg-teal-400 w-[85%] rounded-full"></div>
                            </div>
                            <p className="text-xs text-blue-400 mt-1">Airframe Materials</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>

        <div className="mt-8 bg-blue-800 rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-700">
           <div>
             <h3 className="text-2xl font-bold mb-2">Summary Configuration</h3>
             <ul className="space-y-2 text-blue-200">
               <li className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                 160 kW Peak Power
               </li>
               <li className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                 115 kg/m² Wing Loading
               </li>
               <li className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                 Autonomous-capable architecture
               </li>
             </ul>
           </div>
           <div>
              <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
                Download Brochure
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;