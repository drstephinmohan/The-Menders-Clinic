import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldPlus, Activity, CheckCircle2, ArrowRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { clinicInfo, areasOfCare } from '../data/clinicData';

interface BoneJointSpineCarePageProps {
  onOpenBooking: (service?: string) => void;
}

export const BoneJointSpineCarePage: React.FC<BoneJointSpineCarePageProps> = ({ onOpenBooking }) => {
  const careData = areasOfCare.find(a => a.id === 'bone-joint-spine-care') || areasOfCare[1];

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
              <ShieldPlus className="w-4 h-4 text-[#C49A45]" />
              <span>Musculoskeletal Specialty • The Menders Clinic</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F0E8]">
              {careData.title}
            </h1>
            
            <p className="text-base sm:text-lg text-[#D1DCD6] leading-relaxed">
              Focused non-invasive management and traditional therapeutic protocols aimed at improving spinal alignment, joint flexibility, and bone comfort.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenBooking(careData.title)}
                className="px-5 py-2.5 rounded-xl bg-[#C49A45] text-white font-medium text-xs sm:text-sm hover:bg-[#B38938] transition-colors shadow-sm"
              >
                Book Joint & Spine Consultation
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
          
          {/* Main Article (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Card */}
            <div className="bg-white rounded-2xl border border-[#E2DDD2] p-6 sm:p-8 space-y-4 shadow-xs">
              <h2 className="font-serif text-2xl font-bold text-[#1E2522]">
                Restoring Musculoskeletal Mobility & Comfort
              </h2>
              <p className="text-sm text-[#4A524D] leading-relaxed">
                Chronic back stiffness, knee pain, neck tension, and spine rigidity significantly impact daily quality of life. Modern posture habits, sedentary routines, and age-related wear require gentle, restorative care that targets both structural tension and tissue vitality.
              </p>
              <p className="text-sm text-[#4A524D] leading-relaxed">
                Dr. Stephin Mohan approaches bone and joint care through detailed structural evaluation, ergonomic counsel, and the integrative application of traditional therapeutic massage oils and warm herbal compress protocols.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="bg-white rounded-2xl border border-[#E2DDD2] p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#1E2522] flex items-center gap-2">
                <ShieldPlus className="w-5 h-5 text-[#2E4A3E]" />
                <span>Clinical Musculoskeletal Principles</span>
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

            {/* Expandable Module Placeholder for Future Therapies */}
            <div className="bg-[#F4F0E8] rounded-2xl border border-[#E2DDD2] p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C49A45] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Therapeutic Combination Slot</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-[#1E3A2F]">
                Integration with Wellness & Steam Therapies
              </h4>
              <p className="text-xs sm:text-sm text-[#5C6660] leading-relaxed">
                For patients suffering from chronic stiffness, spine discomfort is frequently managed in combination with our specialized Therapeutic Massages and Herbal Steam Therapy to ease muscle tension and improve local circulation.
              </p>
            </div>

          </div>

          {/* Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-[#E2DDD2] p-6 space-y-5 sticky top-24 shadow-xs">
              <div>
                <span className="text-[11px] font-semibold text-[#C49A45] uppercase tracking-wider">
                  Consultation Notice
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1E3A2F] mt-1">
                  Book Mobility Assessment
                </h3>
                <p className="text-xs text-[#5C6660] mt-1 leading-relaxed">
                  Personalized consultation to discuss joint health and traditional therapy suitabilities.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#F0ECDF] text-xs text-[#3E4742]">
                <div className="font-semibold text-[#1E3A2F]">Key Benefits:</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#2E4A3E] font-bold">•</span>
                  <span>Spine alignment evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#2E4A3E] font-bold">•</span>
                  <span>Non-invasive pain management</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#2E4A3E] font-bold">•</span>
                  <span>Authentic traditional herbal oil application</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(careData.title)}
                className="w-full py-3 px-4 rounded-xl bg-[#1E3A2F] text-white text-xs font-medium hover:bg-[#2A4B3E] transition-colors flex items-center justify-center gap-2"
              >
                <span>Book Joint & Spine Session</span>
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
