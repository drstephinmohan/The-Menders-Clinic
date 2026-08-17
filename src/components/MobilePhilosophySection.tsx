import React from 'react';
import { ShieldCheck, HeartHandshake, Leaf, Activity } from 'lucide-react';

export const MobilePhilosophySection = () => {
  return (
    <div className="md:hidden w-full bg-[#FAF8F5] py-12 px-4 border-b border-[#E2DDD2]">
      <div className="max-w-md mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C49A45] mb-2 block">
            Philosophy & Approach
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#1E2522] leading-tight mb-4">
            Healthcare Built on Trust, Understanding & Roots
          </h2>
          <p className="text-[#5C6660] text-sm leading-relaxed">
            At The Menders Clinic, under the guidance of Dr. Stephin Mohan, we believe true healing happens when traditional therapeutic wisdom meets focused, modern preventive management.
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-4">
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-2xl border border-[#E2DDD2] flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E4A3E]/10 text-[#2E4A3E] flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1E2522] mb-1">Preventive Healthcare First</h3>
              <p className="text-xs text-[#5C6660] leading-relaxed">
                Identifying metabolic and lifestyle vulnerabilities early before they develop into progressive medical conditions.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 rounded-2xl border border-[#E2DDD2] flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E4A3E]/10 text-[#2E4A3E] flex items-center justify-center">
              <HeartHandshake size={20} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1E2522] mb-1">Personalized Care</h3>
              <p className="text-xs text-[#5C6660] leading-relaxed">
                Every individual possesses a distinct biological constitution. Treatment paths are thoughtfully customized for each patient.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 rounded-2xl border border-[#E2DDD2] flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E4A3E]/10 text-[#2E4A3E] flex items-center justify-center">
              <Leaf size={20} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1E2522] mb-1">Traditional Wisdom</h3>
              <p className="text-xs text-[#5C6660] leading-relaxed">
                Drawing upon time-tested traditional therapeutic knowledge to restore organic physiological balance naturally.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-5 rounded-2xl border border-[#E2DDD2] flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E4A3E]/10 text-[#2E4A3E] flex items-center justify-center">
              <Activity size={20} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1E2522] mb-1">Long-Term Wellbeing</h3>
              <p className="text-xs text-[#5C6660] leading-relaxed">
                Fostering sustained vitality and functional health through continuous, compassionate clinical guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Quote Block */}
        <div className="bg-[#F4F0E8] p-6 rounded-2xl border border-[#E2DDD2] text-center flex flex-col gap-4">
          <p className="font-serif text-base text-[#1E3A2F] italic leading-relaxed">
            "Our commitment is to guide you toward lasting health through careful diagnostic attention, therapeutic comfort, and sustainable lifestyle alignment."
          </p>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#736858]">
            — Dr. Stephin Mohan • The Menders Clinic
          </div>
        </div>

      </div>
    </div>
  );
};
