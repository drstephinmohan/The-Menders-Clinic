import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Clock, Package } from 'lucide-react';
import { wellnessPrograms } from '../data/clinicData';

interface WellnessProgramsSectionProps {
  onOpenBooking: (service?: string) => void;
}

export const WellnessProgramsSection: React.FC<WellnessProgramsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-semibold text-[#C49A45] uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Traditional Therapeutic Regimens
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2522]">
            Wellness & Restorative Programs
          </h2>
          <p className="text-sm sm:text-base text-[#5C6660] leading-relaxed">
            Authentic traditional therapies designed to soothe the nervous system, alleviate muscular fatigue, and promote systemic vitality under clinical supervision.
          </p>
        </div>

        {/* 3 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wellnessPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-[#E2DDD2] p-6 shadow-sm hover:border-[#2E4A3E]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#2E4A3E] bg-[#2E4A3E]/10 px-3 py-1 rounded-full border border-[#2E4A3E]/20">
                    Traditional Therapy
                  </span>
                  {program.tamilName && (
                    <span className="text-xs font-medium text-[#8C7E6A] font-serif">
                      {program.tamilName}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-[#1E2522] group-hover:text-[#1E3A2F] transition-colors">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5C6660] leading-relaxed">
                  {program.shortDescription}
                </p>

                {/* Key Benefits */}
                <div className="space-y-1.5 pt-2 border-t border-[#F0ECDF]">
                  <div className="text-[11px] font-semibold text-[#8C7E6A] uppercase tracking-wider mb-1">
                    Therapeutic Outcomes:
                  </div>
                  {program.benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="text-xs text-[#3E4742] flex items-start gap-1.5">
                      <span className="text-[#C49A45] font-bold">•</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Duration Placeholder */}
                <div className="flex items-center gap-1.5 text-xs text-[#5C6660] bg-[#FAF8F5] p-2.5 rounded-xl border border-[#E2DDD2]/70">
                  <Clock className="w-3.5 h-3.5 text-[#2E4A3E]" />
                  <span>Standard Session: {program.durationPlaceholder}</span>
                </div>

                {/* Structured Package Preview Card Placeholder */}
                <div className="p-3.5 bg-[#F4F0E8] rounded-xl border border-[#E2DDD2] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E3A2F]">
                    <Package className="w-3.5 h-3.5 text-[#C49A45]" />
                    <span>Package Available</span>
                  </div>
                  <p className="text-[11px] text-[#5C6660] line-clamp-2">
                    {program.packagePlaceholder.packageName} — Personalized multi-session care.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 mt-6 border-t border-[#E2DDD2] flex items-center justify-between gap-2">
                <Link
                  to={`/wellness-programs#${program.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E3A2F] hover:underline"
                >
                  <span>Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => onOpenBooking(program.title)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#1E3A2F] text-white text-xs font-medium hover:bg-[#2A4B3E] transition-colors"
                >
                  Enquire Therapy
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <Link
            to="/wellness-programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1E3A2F] text-white font-medium text-sm hover:bg-[#2A4B3E] transition-all shadow-sm"
          >
            <span>View All Wellness Offerings & Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
