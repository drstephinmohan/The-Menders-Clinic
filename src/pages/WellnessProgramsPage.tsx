import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Sparkles, Clock, CheckCircle2, Package, ArrowRight, MessageSquare, Shield } from 'lucide-react';
import { clinicInfo, wellnessPrograms } from '../data/clinicData';

interface WellnessProgramsPageProps {
  onOpenBooking: (service?: string) => void;
}

export const WellnessProgramsPage: React.FC<WellnessProgramsPageProps> = ({ onOpenBooking }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#1E3A2F] to-[#2A4B3E] text-white py-16 md:py-20 border-b border-[#E2DDD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#E8C581] border border-white/20 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-[#C49A45]" />
              <span>Authentic Traditional Therapies • The Menders Clinic</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F0E8]">
              Wellness & Restorative Programs
            </h1>
            
            <p className="text-base sm:text-lg text-[#D1DCD6] leading-relaxed">
              Explore our core traditional therapeutic offerings and multi-session wellness package structures crafted under clinical supervision in Marthandam.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        
        {/* Section A: Detailed 3 Offerings */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-[#1E2522]">
              Therapeutic Offerings
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6660] mt-1">
              Siddha Shirodhara, Therapeutic Massages, and Herbal Steam Therapy.
            </p>
          </div>

          <div className="space-y-8">
            {wellnessPrograms.map((program) => (
              <div
                key={program.id}
                id={program.id}
                className="bg-white rounded-2xl border border-[#E2DDD2] p-6 sm:p-8 shadow-xs hover:border-[#2E4A3E]/30 transition-all duration-300 scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column Info (8 Cols) */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#2E4A3E]/10 text-[#2E4A3E] border border-[#2E4A3E]/20">
                        Traditional Offering
                      </span>
                      {program.tamilName && (
                        <span className="font-serif text-sm font-semibold text-[#8C7E6A]">
                          {program.tamilName}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2522]">
                      {program.title}
                    </h3>

                    <p className="text-sm text-[#4A524D] leading-relaxed">
                      {program.fullDescription}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#F0ECDF]">
                      <div className="text-xs font-bold text-[#1E3A2F] uppercase tracking-wider">
                        Key Health Benefits:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {program.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#3E4742]">
                            <CheckCircle2 className="w-4 h-4 text-[#2E4A3E] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column Action & Duration (4 Cols) */}
                  <div className="lg:col-span-4 bg-[#FAF8F5] p-6 rounded-xl border border-[#E2DDD2] space-y-4">
                    <div className="flex items-center gap-2 text-xs text-[#5C6660]">
                      <Clock className="w-4 h-4 text-[#2E4A3E]" />
                      <span className="font-semibold text-[#1E2522]">Session Duration:</span>
                    </div>
                    <div className="font-serif text-lg font-bold text-[#1E3A2F]">
                      {program.durationPlaceholder}
                    </div>

                    <p className="text-xs text-[#5C6660] leading-relaxed">
                      Customized herbal oils or decoctions selected based on individual body constitution during consultation.
                    </p>

                    <button
                      onClick={() => onOpenBooking(program.title)}
                      className="w-full py-3 px-4 rounded-xl bg-[#1E3A2F] text-white text-xs font-medium hover:bg-[#2A4B3E] transition-colors"
                    >
                      Enquire for {program.title}
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section B: Dedicated 3 Packages Structure */}
        <div className="pt-8 border-t border-[#E2DDD2] space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-[#C49A45] uppercase tracking-widest flex items-center justify-center gap-1">
              <Package className="w-4 h-4" />
              Structured Packages
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1E2522]">
              Wellness Care Packages
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6660]">
              Curated multi-session therapy packages associated with each wellness offering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {wellnessPrograms.map((program) => {
              const pkg = program.packagePlaceholder;
              return (
                <div
                  key={program.id}
                  className="bg-white rounded-2xl border-2 border-[#E2DDD2] p-6 shadow-sm hover:border-[#C49A45] transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#C49A45]/15 text-[#8C6E2E] border border-[#C49A45]/30">
                        {program.title} Package
                      </span>
                      <Shield className="w-4 h-4 text-[#C49A45]" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#1E2522]">
                      {pkg.packageName}
                    </h3>

                    <p className="text-xs text-[#5C6660] leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#E2DDD2] text-xs">
                      <span className="font-semibold text-[#1E3A2F]">Package Duration:</span>{' '}
                      <span className="text-[#3E4742]">{pkg.duration}</span>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#F0ECDF]">
                      <div className="text-xs font-bold text-[#1E3A2F] uppercase tracking-wider">
                        Included Services:
                      </div>
                      {pkg.includedServices.map((svc, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#3E4742]">
                          <span className="text-[#C49A45] font-bold">•</span>
                          <span>{svc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E2DDD2] space-y-3">
                    <div className="text-xs font-semibold text-[#736858] text-center">
                      {pkg.pricing}
                    </div>

                    <button
                      onClick={() => onOpenBooking(`${pkg.packageName}`)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#1E3A2F] text-white text-xs font-medium hover:bg-[#2A4B3E] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Inquire Package Schedule</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
