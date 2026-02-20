import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/2g811Eo7K8U?autoplay=1"
          title="X Drone Capabilities"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;