import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C211F] text-[#E8E6E1] pt-16 pb-12 border-t border-[#2A332F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2E3A35]">
          {/* Col 1: Clinic Brand & Info */}
          <div className="space-y-4">
            <div>
              <div className="h-6 sm:h-8 md:h-10 w-40 sm:w-48 md:w-56 relative flex items-center">
                <img 
                  src="/logo-tmc-footer.svg" 
                  alt={clinicInfo.name} 
                  className="absolute -left-2.5 sm:-left-3.5 md:-left-4.5 top-1/2 -translate-y-[42%] sm:-translate-y-[50%] -mt-[3px] sm:mt-0 -ml-[2.5px] sm:ml-0 h-[120px] sm:h-32 md:h-36 w-auto object-contain max-w-none pointer-events-none"
                />
              </div>
              <p className="hidden sm:block text-[7px] sm:text-[8px] md:text-[8.5px] font-medium text-[#A69C8A] uppercase tracking-[0.1em] mt-1 sm:mt-1.5 relative z-10 pl-[1px] leading-[1.3]">
                Traditional Wisdom <br /> Personalized Healing
              </p>
            </div>
            
            <p className="text-xs text-[#B8B0A0] leading-relaxed">
              Dr. Stephin Mohan • Preventive Healthcare & Chronic Disease Management Specialist. Integrating traditional therapeutic wisdom with evidence-informed, personalized care.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium bg-[#C49A45]/20 text-[#E8C581] border border-[#C49A45]/30">
                Marthandam • Tamil Nadu
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-[#F4F0E8]">Care & Programs</h4>
            <ul className="space-y-2 text-xs text-[#C2BBB0]">
              <li>
                <Link to="/liver-sugar-care" className="hover:text-[#E8C581] transition-colors">
                  Liver & Sugar Care
                </Link>
              </li>
              <li>
                <Link to="/bone-joint-spine-care" className="hover:text-[#E8C581] transition-colors">
                  Bone, Joint & Spine Care
                </Link>
              </li>
              <li>
                <Link to="/wellness-programs" className="hover:text-[#E8C581] transition-colors">
                  Wellness Programs & Packages
                </Link>
              </li>
              <li>
                <Link to="/wellness-programs#siddha-shirodhara" className="hover:text-[#E8C581] transition-colors pl-2 border-l border-[#3D4A43]">
                  • Siddha Shirodhara
                </Link>
              </li>
              <li>
                <Link to="/wellness-programs#therapeutic-massages" className="hover:text-[#E8C581] transition-colors pl-2 border-l border-[#3D4A43]">
                  • Therapeutic Massages
                </Link>
              </li>
              <li>
                <Link to="/wellness-programs#steam-therapy" className="hover:text-[#E8C581] transition-colors pl-2 border-l border-[#3D4A43]">
                  • Steam Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation & Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-[#F4F0E8]">Clinic Information</h4>
            <ul className="space-y-2 text-xs text-[#C2BBB0]">
              <li>
                <Link to="/about" className="hover:text-[#E8C581] transition-colors">
                  About Dr. Stephin Mohan
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-[#E8C581] transition-colors">
                  Patient Reviews & Experience
                </Link>
              </li>
            </ul>

            <div className="pt-3 border-t border-[#2A332F]">
              <p className="text-xs font-semibold text-[#A69C8A] uppercase tracking-wider mb-1.5">
                Consultation Hours
              </p>
              {clinicInfo.hours.map((h, i) => (
                <div key={i} className="text-[11px] text-[#A39B8C]">
                  <span className="font-medium text-[#D4CDBF]">{h.days}:</span> {h.timing}
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Contact & Directions */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-[#F4F0E8]">Contact & Location</h4>
            <div className="space-y-2.5 text-xs text-[#C2BBB0]">
              <a
                href={clinicInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:underline"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {clinicInfo.whatsapp.display}</span>
              </a>

              <a
                href={clinicInfo.phone.telLink}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C49A45]" />
                <span>Phone: {clinicInfo.phone.display}</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-[#A39B8C]">
                <MapPin className="w-4 h-4 text-[#C49A45] shrink-0 mt-0.5" />
                <span>
                  {clinicInfo.address.full}
                </span>
              </div>

              <a
                href={clinicInfo.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E8C581] hover:underline pt-1"
              >
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8A8274]">
          <p className="max-w-2xl leading-relaxed text-[11px]">
            <span className="font-semibold text-[#A69C8A]">Medical Disclaimer:</span> The Menders Clinic provides preventive healthcare, chronic disease management, and traditional wellness therapies under the clinical direction of Dr. Stephin Mohan. Content on this website is for general educational awareness and does not substitute for formal in-person medical evaluation.
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <span>© {new Date().getFullYear()} {clinicInfo.name}. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#2A332F] hover:bg-[#38453F] text-[#E8E6E1] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
