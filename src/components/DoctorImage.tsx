import React, { useState } from 'react';

interface DoctorImageProps {
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'wide';
  priority?: boolean;
}

export const DoctorImage: React.FC<DoctorImageProps> = ({
  className = '',
  aspectRatio = 'square',
}) => {
  const [imageError, setImageError] = useState(false);

  // Aspect ratio class helpers
  const aspectClass =
    aspectRatio === 'portrait'
      ? 'aspect-[3/4]'
      : aspectRatio === 'wide'
      ? 'aspect-[16/10]'
      : 'aspect-square';

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#EFECE6] border border-[#E2DDD2] shadow-sm group ${aspectClass} ${className}`}>
      {!imageError ? (
        <img
          src="/doctor_image.png"
          alt="Dr. Stephin Mohan — Specialist in Preventive Healthcare and Chronic Disease Management at The Menders Clinic"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      ) : (
        /* Stylized Elegant Portrait Illustration Frame representing Dr. Stephin Mohan */
        <div className="w-full h-full flex flex-col items-center justify-between p-6 bg-gradient-to-b from-[#FAF8F5] via-[#EFECE6] to-[#E3DED2] text-[#1E2522] relative">
          <div className="absolute top-4 right-4 bg-[#2E4A3E]/10 text-[#2E4A3E] px-3 py-1 rounded-full text-xs font-medium border border-[#2E4A3E]/20">
            Dr. Stephin Mohan
          </div>

          <div className="flex-1 w-full flex items-center justify-center my-auto pt-4 pb-2">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-[#2E4A3E]/30 bg-[#2E4A3E]/5 flex items-center justify-center p-2 shadow-inner">
              <img 
                src="/doctor-image.jpeg" 
                alt="Dr. Stephin Mohan" 
                className="w-full h-full object-cover rounded-full shadow-md object-top" 
              />
              {/* Subtle outer rings mimicking the previous background glow ring */}
              <div className="absolute inset-0 rounded-full border border-[#2E4A3E] opacity-10 scale-[1.03]" />
              <div className="absolute inset-0 rounded-full border border-[#2E4A3E] opacity-5 scale-[1.06]" />
            </div>
          </div>

          <div className="text-center z-10 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-xl border border-[#E2DDD2] w-full">
            <h4 className="font-serif text-lg font-bold text-[#1E3A2F]">Dr. Stephin Mohan</h4>
            <p className="hidden md:block text-xs text-[#5C6660]">Preventive Healthcare Specialist</p>
            <p className="md:hidden text-[11px] text-[#5C6660] leading-snug">Preventive Healthcare &amp; Chronic Disease Management Specialist</p>
          </div>
        </div>
      )}

      {/* Decorative Subtle Corner Accent */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#2E4A3E]/10 to-transparent pointer-events-none" />
    </div>
  );
};
