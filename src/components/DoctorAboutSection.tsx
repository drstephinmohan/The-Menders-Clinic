import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Heart, BookOpen, ArrowRight } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import { DoctorImage } from './DoctorImage';

interface DoctorAboutSectionProps {
  onOpenBooking: (service?: string) => void;
}

export const DoctorAboutSection: React.FC<DoctorAboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F0E8] border-b border-[#E2DDD2]" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Doctor Image (5 Cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <DoctorImage aspectRatio="portrait" className="shadow-lg border-2 border-white" />
              <div className="mt-4 bg-white p-4 rounded-xl border border-[#E2DDD2] text-center shadow-xs">
                <h4 className="font-serif text-xl font-bold text-[#1E3A2F]">{clinicInfo.doctorName}</h4>
                <p className="text-xs text-[#5C6660] mt-0.5">{clinicInfo.specialization}</p>
                <div className="mt-2 text-[11px] font-semibold text-[#8C7E6A] uppercase tracking-wider">
                  The Menders Clinic • Marthandam
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Clinical Focus (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <div>
              <span className="text-xs font-semibold text-[#C49A45] uppercase tracking-widest">
                Meet Your Physician
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2522] mt-1">
                {clinicInfo.doctorName}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#2E4A3E] mt-1">
                {clinicInfo.specialization}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#4A524D] leading-relaxed">
              Dr. Stephin Mohan leads <span className="font-semibold text-[#1E2522]">The Menders Clinic</span> with a clinical vision centered on preventive healthcare, metabolic balance, and personalized chronic disease support. By combining rigorous clinical assessment with gentle traditional therapeutic wisdom, Dr. Mohan helps patients navigate complex health challenges with clarity and confidence.
            </p>

            {/* Core Values / Focus Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-2">
              <div className="bg-white p-4 rounded-xl border border-[#E2DDD2]">
                <div className="flex items-center gap-2 font-serif font-bold text-[#1E3A2F] text-base">
                  <ShieldCheck className="w-4 h-4 text-[#C49A45]" />
                  <span>Preventive Healthcare</span>
                </div>
                <p className="text-xs text-[#5C6660] mt-1">
                  Focusing on early detection, metabolic stabilization, and long-term vitality.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E2DDD2]">
                <div className="flex items-center gap-2 font-serif font-bold text-[#1E3A2F] text-base">
                  <Heart className="w-4 h-4 text-[#C49A45]" />
                  <span>Personalized Healing</span>
                </div>
                <p className="text-xs text-[#5C6660] mt-1">
                  Tailored management plans respecting every patient's unique biological story.
                </p>
              </div>
            </div>

            {/* Expandable Biography Placeholder Notice */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DDD2] text-xs text-[#5C6660] space-y-1">
              <div className="font-semibold text-[#1E3A2F] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#C49A45]" />
                <span>Full Clinical Biography & Academic Credentials</span>
              </div>
              <p>
                Detailed qualifications, institutional background, and clinical research credentials can be explored on the dedicated About page.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                to="/about"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1E3A2F] text-white font-medium text-sm hover:bg-[#2A4B3E] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Read Full About & Biography</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => onOpenBooking('General Consultation')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#C2BBB0] bg-white text-[#1E2522] font-medium text-sm hover:bg-[#FAF8F5] transition-colors"
              >
                Book Consultation with Dr. Mohan
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
