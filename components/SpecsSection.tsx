import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const SpecsSection: React.FC = () => {
  const weightData = [
    { name: 'Passenger Load', value: 360, color: '#3b82f6' }, // blue-500
    { name: 'Structure', value: 480, color: '#1e40af' }, // blue-800
    { name: 'Battery System', value: 340, color: '#93c5fd' }, // blue-300
  ];

  const dimensions = [
    { label: "Overall Length", value: "7.2 - 8.2", unit: "m" },
    { label: "Wingspan", value: "9.5 - 11.5", unit: "m" },
    { label: "Height", value: "1.25", unit: "m" },
    { label: "Cabin Width", value: "2.0 - 2.2", unit: "m" },
    { label: "Ground Clearance", value: "0.4 - 0.6", unit: "m" },
    { label: "MTOW", value: "1,320", unit: "kg" },
  ];

  return (
    <section id="specs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Technical Specifications</h2>
          <p className="mt-4 text-slate-500">Precision engineering meets performance.</p>
        </div>

        {/* Technical Diagram Image */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50 relative group">
           <div className="aspect-[16/9] md:aspect-[21/9] w-full relative">
              <img 
                src="https://github.com/nasmusic-ai/RAW/blob/main/Final-XDrone.jpg?raw=true" 
                alt="Aircraft Schematic View" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
              
              {/* Overlay Label */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg border border-slate-100">
                  <div className="flex items-center gap-3">
                     <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
                     <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Schematic</p>
                        <p className="text-sm font-bold text-slate-900">3-View General Arrangement</p>
                     </div>
                  </div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Dimensions Grid */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">General Dimensions</h3>
            <div className="grid grid-cols-2 gap-6">
              {dimensions.map((dim, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-50 hover:border-blue-100 transition-colors">
                  <p className="text-sm text-slate-500 uppercase tracking-wide">{dim.label}</p>
                  <p className="mt-1 text-2xl sm:text-3xl font-bold text-blue-900">
                    {dim.value} <span className="text-lg text-slate-400 font-normal">{dim.unit}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Weight Chart */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Weight Breakdown (kg)</h3>
            <div className="flex-1 min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={weightData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {weightData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-slate-500 mt-4 bg-white py-2 px-4 rounded-full mx-auto inline-block border border-slate-100">
              <span className="font-semibold">Total MTOW:</span> 1,320 kg
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;