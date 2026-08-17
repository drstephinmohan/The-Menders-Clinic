import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { PhilosophySection } from '../components/PhilosophySection';
import { AreasOfCareSection } from '../components/AreasOfCareSection';
import { WellnessProgramsSection } from '../components/WellnessProgramsSection';
import { DoctorAboutSection } from '../components/DoctorAboutSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { MobilePhilosophySection } from '../components/MobilePhilosophySection';

interface HomePageProps {
  onOpenBooking: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Section 01: Hero */}
      <HeroSection onOpenBooking={onOpenBooking} />

      {/* Section 02: Philosophy & Introduction (hidden on mobile, shown at different position) */}
      <div className="hidden md:block">
        <PhilosophySection />
      </div>

      {/* Section 03: Areas of Care */}
      <AreasOfCareSection onOpenBooking={onOpenBooking} />

      {/* Section 04: Wellness Programs */}
      <WellnessProgramsSection onOpenBooking={onOpenBooking} />

      {/* Mobile-Only: Philosophy & Approach (between Wellness and About) */}
      <MobilePhilosophySection />

      {/* Section 05: Doctor / About */}
      <DoctorAboutSection onOpenBooking={onOpenBooking} />

      {/* Section 06: Testimonials */}
      <TestimonialsSection />

      {/* Section 07: Contact / Consultation */}
      <ContactSection onOpenBooking={onOpenBooking} />
    </div>
  );
};
