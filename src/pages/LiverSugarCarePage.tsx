import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldAlert, HeartPulse, CheckCircle2, ArrowRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { clinicInfo, areasOfCare } from '../data/clinicData';

interface LiverSugarCarePageProps {
  onOpenBooking: (service?: string) => void;
}

export const LiverSugarCarePage: React.FC<LiverSugarCarePageProps> = ({ onOpenBooking }) => {
  const careData = areasOfCare.find(a => a.id === 'liver-sugar-care') || areasOfCare[0];

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
              <Activity className="w-4 h-4 text-[#C49A45]" />
              <span>Specialized Clinical Focus • The Menders Clinic</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F0E8]">
              {careData.title}
            </h1>
            
            <p className="text-base sm:text-lg text-[#D1DCD6] leading-relaxed">
              Integrated preventive management and personalized support for liver health, blood sugar regulation, and metabolic harmony under Dr. Stephin Mohan.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenBooking(careData.title)}
                className="px-5 py-2.5 rounded-xl bg-[#C49A45] text-white font-medium text-xs sm:text-sm hover:bg-[#B38938] transition-colors shadow-sm"
              >
                Book Liver & Sugar Consultation
              </button>

              <a
                href={clinicInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-medium text-xs sm:text-sm hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article & Pillars (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Card */}
            <div className="bg-white rounded-2xl border border-[#E2DDD2] p-6 sm:p-8 space-y-4 shadow-xs">
              <h2 className="font-serif text-2xl font-bold text-[#1E2522]">
                Understanding Metabolic & Liver Health
              </h2>
              <p className="text-sm text-[#4A524D] leading-relaxed">
                The liver and pancreatic systems act as the metabolic engine of the human body. Fluctuations in blood sugar, lifestyle stress, dietary imbalances, and fatty liver changes require a thoughtful, long-term approach that prioritizes early prevention and natural physiological alignment.
              </p>
              <p className="text-sm text-[#4A524D] leading-relaxed">
                At <span className="font-semibold text-[#1E3A2F]">{clinicInfo.name}</span>, <span className="font-semibold text-[#1E3A2F]">{clinicInfo.doctorName}</span> works closely with patients to evaluate lifestyle patterns, dietary habits, and metabolic indicators to formulate individualized care plans.
              </p>
            </div>

            {/* Core Care Focus Areas */}
            <div className="bg-white rounded-2xl border border-[#E2DDD2] p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#1E2522] flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-[#2E4A3E]" />
                <span>Our Preventive Management Pillars</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {careData.detailedPoints.map((point, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DDD2] flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2E4A3E] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#3E4742] leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expandable Module Placeholder for Future Specific Protocols */}
            <div className="bg-[#F4F0E8] rounded-2xl border border-[#E2DDD2] p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C49A45] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Clinic Protocol Integration Slot</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-[#1E3A2F]">
                Personalized Dietary & Traditional Regimens
              </h4>
              <p className="text-xs sm:text-sm text-[#5C6660] leading-relaxed">
                Specific diagnostic test guidance, customized traditional formulations, and clinical monitoring schedules are structured following an initial personal consultation with Dr. Stephin Mohan.
              </p>
            </div>

          </div>

          {/* Sidebar / Consultation Card (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-[#E2DDD2] p-6 space-y-5 sticky top-24 shadow-xs">
              <div>
                <span className="text-[11px] font-semibold text-[#C49A45] uppercase tracking-wider">
                  Consultation Notice
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1E3A2F] mt-1">
                  Schedule Your Assessment
                </h3>
                <p className="text-xs text-[#5C6660] mt-1 leading-relaxed">
                  Early preventive evaluation supports optimal metabolic equilibrium and vitality.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#F0ECDF] text-xs text-[#3E4742]">
                <div className="font-semibold text-[#1E3A2F]">What to expect:</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#2E4A3E] font-bold">•</span>
                  <span>Personal health history review</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#2E4A3E] font-bold">•</span>
                  <span>Metabolic risk factor discussion</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#2E4A3E] font-bold">•</span>
                  <span>Personalized guidance roadmap</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(careData.title)}
                className="w-full py-3 px-4 rounded-xl bg-[#1E3A2F] text-white text-xs font-medium hover:bg-[#2A4B3E] transition-colors flex items-center justify-center gap-2"
              >
                <span>Book Doctor Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 border-t border-[#E2DDD2] text-center space-y-2">
                <a
                  href={clinicInfo.phone.telLink}
                  className="text-xs font-medium text-[#1E3A2F] hover:underline flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Clinic: {clinicInfo.phone.display}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
