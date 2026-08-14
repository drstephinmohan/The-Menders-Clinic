import React, { useEffect } from 'react';
import { Quote, Star, UserCheck, MessageSquare, ShieldCheck, HeartHandshake } from 'lucide-react';
import { clinicInfo, placeholderTestimonials } from '../data/clinicData';

interface TestimonialsPageProps {
  onOpenBooking: (service?: string) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenBooking }) => {
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
              <HeartHandshake className="w-4 h-4 text-[#C49A45]" />
              <span>Patient Experiences • The Menders Clinic</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F0E8]">
              Testimonials & Patient Reflections
            </h1>
            
            <p className="text-base sm:text-lg text-[#D1DCD6] leading-relaxed">
              Read authentic experiences and community reflections on care delivered by Dr. Stephin Mohan in Marthandam.
            </p>
          </div>
        </div>
      </section>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
        
        {/* Ethics & Consent Note */}
        <div className="p-6 rounded-2xl bg-[#F4F0E8] border border-[#E2DDD2] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-bold text-[#1E3A2F] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C49A45]" />
              <span>Ethical Patient Privacy Commitment</span>
            </h3>
            <p className="text-xs text-[#5C6660] leading-relaxed max-w-2xl">
              We respect medical confidentiality. All published reflections are documented with direct patient consent. Additional verified feedback is compiled periodically.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="px-5 py-2.5 rounded-xl bg-[#1E3A2F] text-white font-medium text-xs sm:text-sm hover:bg-[#2A4B3E] transition-colors shrink-0"
          >
            Share Your Experience
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#E2DDD2] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <Quote className="w-8 h-8 text-[#C49A45]/30" />
                <p className="text-sm text-[#3E4742] italic leading-relaxed">
                  “{item.quote}”
                </p>

                {item.serviceCategory && (
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#FAF8F5] text-[11px] font-medium text-[#2E4A3E] border border-[#E2DDD2]">
                    Focus: {item.serviceCategory}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#F0ECDF] flex items-center justify-between">
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

        {/* Future Testimonials Slot Container */}
        <div className="p-8 rounded-2xl border-2 border-dashed border-[#E2DDD2] bg-[#FAF8F5] text-center space-y-3">
          <MessageSquare className="w-8 h-8 text-[#8C7E6A] mx-auto" />
          <h4 className="font-serif text-xl font-bold text-[#1E3A2F]">
            More Patient Stories Coming Soon
          </h4>
          <p className="text-xs text-[#5C6660] max-w-md mx-auto">
            This layout is structured to seamlessly receive further genuine patient reviews and video reflections in future updates.
          </p>
        </div>

      </div>
    </div>
  );
};
