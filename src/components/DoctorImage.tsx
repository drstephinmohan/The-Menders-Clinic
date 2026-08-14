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

          <div className="flex-1 w-full flex items-center justify-center my-auto pt-6">
            <svg
              viewBox="0 0 240 240"
              className="w-48 h-48 drop-shadow-md text-[#1E3A2F]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Glow Ring */}
              <circle cx="120" cy="120" r="100" fill="#2E4A3E" fillOpacity="0.06" stroke="#2E4A3E" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Face Shape */}
              <path d="M85 85 C85 60 155 60 155 85 C155 125 150 145 120 145 C90 145 85 125 85 85 Z" fill="#EADBC8" stroke="#8C6E54" strokeWidth="1.5"/>
              
              {/* Hair */}
              <path d="M82 78 C80 50 100 40 120 40 C140 40 160 50 158 78 C150 68 135 60 120 60 C105 60 90 68 82 78 Z" fill="#252422" />
              
              {/* Glasses */}
              <rect x="90" y="80" width="24" height="18" rx="4" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
              <rect x="126" y="80" width="24" height="18" rx="4" stroke="#1A1A1A" strokeWidth="2.5" fill="none" />
              <line x1="114" y1="88" x2="126" y2="88" stroke="#1A1A1A" strokeWidth="2.5" />

              {/* Eyes */}
              <circle cx="102" cy="89" r="2.5" fill="#2D2724" />
              <circle cx="138" cy="89" r="2.5" fill="#2D2724" />

              {/* Short Beard / Mustache */}
              <path d="M102 118 C110 122 130 122 138 118" stroke="#3D322B" strokeWidth="2" strokeLinecap="round" />
              <path d="M96 112 C104 115 136 115 144 112 C148 130 140 142 120 142 C100 142 92 130 96 112 Z" fill="#3D322B" fillOpacity="0.8" />

              {/* Smile */}
              <path d="M110 126 Q120 131 130 126" stroke="#FAF8F5" strokeWidth="1.5" strokeLinecap="round" />

              {/* Suit / Collar / Tie */}
              <path d="M60 210 L85 155 L155 155 L180 210 Z" fill="#1C2833" />
              <polygon points="105,155 120,175 135,155" fill="#FFFFFF" />
              <polygon points="116,165 124,165 122,205 118,205" fill="#7B1E38" />

              {/* Stethoscope around neck */}
              <path d="M78 150 C70 170 80 195 100 195 C110 195 110 185 110 185" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
              <path d="M162 150 C170 170 160 195 140 195 C130 195 130 185 130 185" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
              <circle cx="100" cy="195" r="5" fill="#9CA3AF" stroke="#111827" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="text-center z-10 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-[#E2DDD2] w-full">
            <h4 className="font-serif text-lg font-bold text-[#1E3A2F]">Dr. Stephin Mohan</h4>
            <p className="text-xs text-[#5C6660]">Preventive Healthcare Specialist</p>
          </div>
        </div>
      )}

      {/* Decorative Subtle Corner Accent */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#2E4A3E]/10 to-transparent pointer-events-none" />
    </div>
  );
};
