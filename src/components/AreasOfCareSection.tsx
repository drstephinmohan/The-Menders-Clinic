import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldPlus, ArrowRight, CheckCircle2 } from 'lucide-react';
import { areasOfCare } from '../data/clinicData';

interface AreasOfCareSectionProps {
  onOpenBooking: (service?: string) => void;
}

export const AreasOfCareSection: React.FC<AreasOfCareSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 md:py-24 bg-[#F4F0E8] border-b border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold text-[#C49A45] uppercase tracking-widest">
              Core Clinical Focus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2522]">
              Specialized Areas of Care
            </h2>
            <p className="text-sm sm:text-base text-[#5C6660]">
              Personalized management strategies for metabolic disorders and musculoskeletal joint health.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1E3A2F] hover:underline shrink-0"
          >
            <span>Learn about Dr. Stephin Mohan's Approach</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2 Core Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areasOfCare.map((area) => {
            const isLiver = area.id === 'liver-sugar-care';
            return (
              <div
                key={area.id}
                className="bg-white rounded-2xl border border-[#E2DDD2] p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Visual Top Decorative Banner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#2E4A3E]/10 to-transparent rounded-bl-full pointer-events-none" />

                <div className="space-y-5 relative z-10">
                  {/* Tag & Icon Header */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#1E3A2F]/10 text-[#1E3A2F] border border-[#1E3A2F]/20">
                      {area.tag}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#2E4A3E]/10 text-[#2E4A3E] flex items-center justify-center group-hover:scale-110 transition-transform">
                      {isLiver ? <Activity className="w-6 h-6" /> : <ShieldPlus className="w-6 h-6" />}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#1E2522] group-hover:text-[#1E3A2F] transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#8C7E6A] uppercase tracking-wider mt-0.5">
                      {area.subtitle}
                    </p>
                  </div>

                  {/* Main Description */}
                  <p className="text-sm text-[#5C6660] leading-relaxed">
                    {area.description}
                  </p>

                  {/* Key Highlights Bullet Points */}
                  <div className="space-y-2 pt-2 border-t border-[#F0ECDF]">
                    {area.detailedPoints.slice(0, 3).map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#3E4742]">
                        <CheckCircle2 className="w-4 h-4 text-[#2E4A3E] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-6 mt-6 border-t border-[#E2DDD2] flex items-center justify-between gap-4 relative z-10">
                  <Link
                    to={area.link}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1E3A2F] group-hover:text-[#2A5243] transition-colors"
                  >
                    <span>Explore Care Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => onOpenBooking(area.title)}
                    className="px-4 py-2 rounded-xl bg-[#1E3A2F]/10 text-[#1E3A2F] text-xs font-semibold hover:bg-[#1E3A2F] hover:text-white transition-colors"
                  >
                    Consult for {isLiver ? 'Metabolic' : 'Joints'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
