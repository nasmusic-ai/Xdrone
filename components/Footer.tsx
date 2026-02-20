import React from 'react';
import { Plane, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Plane className="h-6 w-6 text-white" />
            <span className="text-white font-bold text-lg">X DRONE</span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} X Drone Aviation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;