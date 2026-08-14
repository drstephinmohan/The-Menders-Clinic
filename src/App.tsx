import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConsultationModal } from './components/ConsultationModal';

import { HomePage } from './pages/HomePage';
import { LiverSugarCarePage } from './pages/LiverSugarCarePage';
import { BoneJointSpineCarePage } from './pages/BoneJointSpineCarePage';
import { WellnessProgramsPage } from './pages/WellnessProgramsPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { AboutPage } from './pages/AboutPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingService, setBookingService] = useState('General Consultation');

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setBookingService(service);
    } else {
      setBookingService('General Consultation');
    }
    setBookingModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E2522]">
        {/* Navigation Bar */}
        <Header onOpenBooking={handleOpenBooking} />

        {/* Main Content View Container */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/liver-sugar-care" element={<LiverSugarCarePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/bone-joint-spine-care" element={<BoneJointSpineCarePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/wellness-programs" element={<WellnessProgramsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/testimonials" element={<TestimonialsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Consultation Booking Modal */}
        <ConsultationModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          defaultService={bookingService}
        />
      </div>
    </Router>
  );
}
