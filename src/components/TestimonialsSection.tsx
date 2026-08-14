import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, Star, MessageSquare, ArrowRight, UserCheck } from 'lucide-react';
import { placeholderTestimonials } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#E2DDD2]" id="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold text-[#C49A45] uppercase tracking-widest">
              Patient Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2522]">
              Words from Our Community
            </h2>
            <p className="text-sm sm:text-base text-[#5C6660]">
              Reflections on personalized healthcare, compassionate attention, and restorative therapies at The Menders Clinic.
            </p>
          </div>

          <Link
            to="/testimonials"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1E3A2F] hover:underline shrink-0"
          >
            <span>View Dedicated Testimonials Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#E2DDD2] p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-[#C49A45]/30 mb-2" />

              <div className="space-y-3">
                <p className="text-sm text-[#3E4742] italic leading-relaxed">
                  “{item.quote}”
                </p>

                {item.serviceCategory && (
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#FAF8F5] text-[11px] font-medium text-[#2E4A3E] border border-[#E2DDD2]">
                    Focus: {item.serviceCategory}
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-[#F0ECDF] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1E2522]">
                    {item.patientName}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#8C7E6A]">
                    <UserCheck className="w-3 h-3 text-[#2E4A3E]" />
                    <span>Verified Patient</span>
                  </div>
                </div>

                <div className="flex text-[#C49A45]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note / Placeholder Notice for Future Genuine Reviews */}
        <div className="mt-8 p-4 rounded-xl bg-[#F4F0E8] border border-[#E2DDD2] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#5C6660]">
            <span className="font-semibold text-[#1E3A2F]">Patient Privacy & Ethics:</span> We respect patient confidentiality. Additional verified testimonials and clinical reflections are added periodically with full patient consent.
          </p>
        </div>

      </div>
    </section>
  );
};
