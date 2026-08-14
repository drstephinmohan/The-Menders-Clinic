import React from 'react';
import { ShieldCheck, HeartHandshake, Feather, Activity } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export const PhilosophySection: React.FC = () => {
  const principles = [
    {
      icon: ShieldCheck,
      title: 'Preventive Healthcare First',
      description: 'Identifying metabolic and lifestyle vulnerabilities early before they develop into progressive medical conditions.'
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Care',
      description: 'Every individual possesses a distinct biological constitution. Treatment paths are thoughtfully customized for each patient.'
    },
    {
      icon: Feather,
      title: 'Traditional Wisdom',
      description: 'Drawing upon time-tested traditional therapeutic knowledge to restore organic physiological balance naturally.'
    },
    {
      icon: Activity,
      title: 'Long-Term Wellbeing',
      description: 'Fostering sustained vitality and functional health through continuous, compassionate clinical guidance.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-semibold text-[#C49A45] uppercase tracking-widest">
            Philosophy & Approach
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2522]">
            Healthcare Built on Trust, Understanding & Roots
          </h2>
          <p className="text-sm sm:text-base text-[#5C6660] leading-relaxed">
            At <span className="font-semibold text-[#1E3A2F]">{clinicInfo.name}</span>, under the guidance of <span className="font-semibold text-[#1E3A2F]">{clinicInfo.doctorName}</span>, we believe true healing happens when traditional therapeutic wisdom meets focused, modern preventive management.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E2DDD2] hover:border-[#2E4A3E]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2E4A3E]/10 text-[#2E4A3E] flex items-center justify-center group-hover:bg-[#2E4A3E] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1E2522]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6660] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Quote Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F4F0E8] border border-[#E2DDD2] text-center max-w-4xl mx-auto">
          <p className="font-serif text-lg sm:text-xl text-[#1E3A2F] italic leading-relaxed">
            “Our commitment is to guide you toward lasting health through careful diagnostic attention, therapeutic comfort, and sustainable lifestyle alignment.”
          </p>
          <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#736858]">
            — Dr. Stephin Mohan • The Menders Clinic
          </div>
        </div>

      </div>
    </section>
  );
};
