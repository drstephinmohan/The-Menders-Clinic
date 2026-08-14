import React from 'react';
import { MessageSquare } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={clinicInfo.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-medium text-xs sm:text-sm shadow-xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      aria-label="Chat with The Menders Clinic on WhatsApp"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <MessageSquare className="w-5 h-5 fill-current" />
      <span className="hidden sm:inline font-semibold tracking-wide">
        WhatsApp Us
      </span>
    </a>
  );
};
