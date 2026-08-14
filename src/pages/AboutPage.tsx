import React, { useEffect } from 'react';
import { Shield, BookOpen, Heart, Award, ArrowRight, Phone, MessageSquare, MapPin } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';
import { DoctorImage } from '../components/DoctorImage';

interface AboutPageProps {
  onOpenBooking: (service?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#1E3A2F] to-[#2A4B3E] text-white py-16 md:py-20 border-b border-[#E2DDD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#E8C581] border border-white/20 text-xs font-semibold">
              <Shield className="w-4 h-4 text-[#C49A45]" />
              <span>Clinical Profile • The Menders Clinic</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F0E8]">
              About Dr. Stephin Mohan
            </h1>
            
            <p className="text-base sm:text-lg text-[#D1DCD6] leading-relaxed">
              {clinicInfo.specialization}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Doctor Portrait & Quick Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sticky top-24 space-y-6">
              <DoctorImage aspectRatio="portrait" priority className="shadow-xl" />

              <div className="bg-white rounded-2xl border border-[#E2DDD2] p-6 space-y-4 shadow-xs">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1E3A2F]">
                    {clinicInfo.doctorName}
                  </h3>
                  <p className="text-xs font-semibold text-[#8C7E6A] mt-0.5">
                    {clinicInfo.specialization}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-[#F0ECDF] text-xs text-[#4A524D]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C49A45] shrink-0" />
                    <span>The Menders Clinic • Marthandam, Tamil Nadu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>WhatsApp: {clinicInfo.whatsapp.display}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#1E3A2F] shrink-0" />
                    <span>Phone: {clinicInfo.phone.display}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking('General Consultation')}
                  className="w-full py-3 px-4 rounded-xl bg-[#1E3A2F] text-white text-xs font-medium hover:bg-[#2A4B3E] transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Details & Philosophy (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Overview Card */}
            <div className="bg-white rounded-2xl border border-[#E2DDD2] p-6 sm:p-8 space-y-4 shadow-xs">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2522]">
                Clinical Vision & Healing Approach
              </h2>
              <p className="text-sm text-[#4A524D] leading-relaxed">
                At <span className="font-semibold text-[#1E3A2F]">The Menders Clinic</span>, Dr. Stephin Mohan brings a patient-centric, empathetic ethos to healthcare. Recognizing that health is an intricate balance between metabolic wellness, physical bone and joint integrity, and mental calm, Dr. Mohan offers comprehensive evaluations tailored to individual lifestyles.
              </p>
              <p className="text-sm text-[#4A524D] leading-relaxed">
                Our clinical philosophy bridges time-tested traditional therapies with structured preventive protocols, giving patients clear, practical, and sustainable roads toward long-term vitality.
              </p>
            </div>

            {/* Core Practice Areas */}
            <div className="bg-white rounded-2xl border border-[#E2DDD2] p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#1E2522] flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#2E4A3E]" />
                <span>Primary Clinical Interests</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DDD2] space-y-1">
                  <div className="font-serif font-bold text-[#1E3A2F] text-base">
                    Preventive Healthcare
                  </div>
                  <p className="text-xs text-[#5C6660]">
                    Early lifestyle and metabolic intervention to prevent progressive metabolic disorders.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DDD2] space-y-1">
                  <div className="font-serif font-bold text-[#1E3A2F] text-base">
                    Chronic Disease Support
                  </div>
                  <p className="text-xs text-[#5C6660]">
                    Long-term clinical guidance for blood sugar regulation, liver health, and spine wellness.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DDD2] space-y-1">
                  <div className="font-serif font-bold text-[#1E3A2F] text-base">
                    Traditional Therapies
                  </div>
                  <p className="text-xs text-[#5C6660]">
                    Integrating authentic Siddha Shirodhara, therapeutic oils, and herbal steam baths.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DDD2] space-y-1">
                  <div className="font-serif font-bold text-[#1E3A2F] text-base">
                    Personalized Healing
                  </div>
                  <p className="text-xs text-[#5C6660]">
                    Respecting individual patient history and body constitution in every care plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Expandable Qualifications & Experience Placeholder */}
            <div className="bg-[#F4F0E8] rounded-2xl border border-[#E2DDD2] p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C49A45] uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Academic & Clinical Qualifications Section</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-[#1E3A2F]">
                Expandable Biography Framework
              </h4>
              <p className="text-xs sm:text-sm text-[#5C6660] leading-relaxed">
                This space is structured to receive Dr. Stephin Mohan's complete medical degrees, university affiliations, research publications, and clinical milestones as additional verified details become available.
              </p>
            </div>

            {/* Clinic Values */}
            <div className="p-6 rounded-2xl bg-[#1E3A2F] text-white space-y-3">
              <h4 className="font-serif text-xl font-bold text-[#F4F0E8]">
                Visit The Menders Clinic
              </h4>
              <p className="text-xs text-[#D1DCD6] leading-relaxed">
                Located on North Street, opposite Standard Auditorium in Marthandam, Tamil Nadu. Consultations are available Monday through Saturday.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-5 py-2.5 rounded-xl bg-[#C49A45] text-white font-medium text-xs hover:bg-[#B38938] transition-colors"
                >
                  Schedule an Appointment
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
