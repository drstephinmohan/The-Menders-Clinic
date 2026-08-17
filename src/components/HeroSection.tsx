import React from 'react';
import { ArrowRight, Shield, HeartPulse, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import { DoctorImage } from './DoctorImage';

interface HeroSectionProps {
  onOpenBooking: (service?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4F0E8] to-[#FAF8F5] pt-6 pb-12 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24 border-b border-[#E2DDD2]">
      {/* Delicate background ambient pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#2E4A3E_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2F]/10 border border-[#1E3A2F]/20 text-[#1E3A2F] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#C49A45]" />
              <span>Marthandam, Tamil Nadu • Clinical Excellence</span>
            </div>

            {/* Doctor Name & Specialization */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E2522] leading-[1.12]">
                Dr. Stephin Mohan
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-medium text-[#2E4A3E] max-w-2xl">
                {clinicInfo.specialization}
              </p>
            </div>

            {/* Main Tagline */}
            <div className="py-2 border-y border-[#E2DDD2]/80 max-w-xl mx-auto lg:mx-0">
              <blockquote className="font-serif text-xl sm:text-2xl font-semibold italic text-[#1E3A2F] tracking-wide">
                “{clinicInfo.tagline}”
              </blockquote>
            </div>

            {/* Supporting Introduction */}
            <p className="text-sm sm:text-base text-[#4A524D] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <span className="font-semibold text-[#1E2522]">The Menders Clinic</span>. We specialize in root-cause preventive healthcare, personalized chronic disease management, and authentic traditional therapeutic protocols tailored precisely to your unique health needs.
            </p>

            {/* Key Trust Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs text-[#3E4742]">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-[#E2DDD2]">
                <Shield className="w-4 h-4 text-[#2E4A3E]" />
                <span>Personalized Consultation</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-[#E2DDD2]">
                <HeartPulse className="w-4 h-4 text-[#2E4A3E]" />
                <span>Preventive Metabolic Care</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-[#E2DDD2]">
                <Sparkles className="w-4 h-4 text-[#C49A45]" />
                <span>Siddha & Traditional Therapies</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1E3A2F] text-white font-medium text-sm sm:text-base hover:bg-[#2A4B3E] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#contact-section"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#C2BBB0] bg-white/80 text-[#1E2522] font-medium text-sm sm:text-base hover:bg-[#EFECE6] transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Contact the Clinic</span>
              </a>
            </div>

            {/* Direct Instant Contact Bar */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-[#5C6660]">
              <a
                href={clinicInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#128C7E] font-medium hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {clinicInfo.whatsapp.display}</span>
              </a>
              <span>•</span>
              <a
                href={clinicInfo.phone.telLink}
                className="flex items-center gap-1.5 font-medium hover:underline text-[#1E3A2F]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: {clinicInfo.phone.display}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Doctor Portrait Composition (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-[340px]">
              
              {/* Background Glow Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#2E4A3E]/20 via-[#C49A45]/20 to-transparent blur-lg opacity-70 pointer-events-none" />

              {/* Main Doctor Image Component */}
              <DoctorImage aspectRatio="portrait" priority className="shadow-xl" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-[#E2DDD2] shadow-lg flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#1E3A2F]">The Menders Clinic</div>
                  <div className="text-[11px] text-[#5C6660]">Marthandam • Tamil Nadu</div>
                </div>
                <button
                  onClick={() => onOpenBooking()}
                  className="px-3 py-1.5 rounded-lg bg-[#1E3A2F] text-white text-xs font-medium hover:bg-[#2A4B3E] transition-colors shrink-0"
                >
                  Book Visit
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
