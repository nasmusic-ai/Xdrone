import React from 'react';
import { ShieldCheck, Activity, Cpu, Map } from 'lucide-react';

const ControlSection: React.FC = () => {
  return (
    <section id="control" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              Flight Control <br/>Architecture
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              By eliminating traditional mechanical surfaces, the X Drone reduces weight and complexity while increasing reliability through fly-by-wire thrust vectoring.
            </p>

            <div className="space-y-6">
              {[
                { title: "No Ailerons", desc: "Fly-by-Wire thrust-vectoring system enabled." },
                { title: "No Flaps", desc: "Fly-by-Wire thrust-vectoring system enabled." },
                { title: "No Vertical Stabilizer", desc: "Maneuvered by thrust vectoring only." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-900 flex items-center justify-center mt-1">
                     <span className="text-white text-xs font-bold">{idx + 1}</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
             <h3 className="text-xl font-bold text-slate-900 mb-6">Avionics & Control Systems</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                   <div className="flex items-center gap-2 mb-2">
                     <Activity className="w-5 h-5 text-blue-600" />
                     <span className="font-bold text-slate-900">Pitch</span>
                   </div>
                   <p className="text-sm text-slate-600">Thrust vector angle modulation.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                   <div className="flex items-center gap-2 mb-2">
                     <Activity className="w-5 h-5 text-blue-600" />
                     <span className="font-bold text-slate-900">Roll</span>
                   </div>
                   <p className="text-sm text-slate-600">Differential thrust between left/right fans.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                   <div className="flex items-center gap-2 mb-2">
                     <Activity className="w-5 h-5 text-blue-600" />
                     <span className="font-bold text-slate-900">Yaw</span>
                   </div>
                   <p className="text-sm text-slate-600">Asymmetric thrust balancing.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                   <div className="flex items-center gap-2 mb-2">
                     <ShieldCheck className="w-5 h-5 text-blue-600" />
                     <span className="font-bold text-slate-900">Hover</span>
                   </div>
                   <p className="text-sm text-slate-600">Lift motor stabilization.</p>
                </div>
                <div className="sm:col-span-2 p-4 bg-slate-50 rounded-xl border border-slate-200">
                   <div className="flex items-center gap-2 mb-2">
                     <Cpu className="w-5 h-5 text-blue-600" />
                     <span className="font-bold text-slate-900">Cruise</span>
                   </div>
                   <p className="text-sm text-slate-600">Software-controlled propulsion modulation.</p>
                </div>
                <div className="sm:col-span-2 p-4 bg-blue-50 rounded-xl border border-blue-100">
                   <div className="flex items-center gap-2 mb-2">
                     <Map className="w-5 h-5 text-blue-600" />
                     <span className="font-bold text-slate-900">Navigation</span>
                   </div>
                   <p className="text-sm text-slate-700">
                     Advanced image processing navigation backed up by GPS. Includes pre-loaded topographic maps for autonomous terrain following.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlSection;