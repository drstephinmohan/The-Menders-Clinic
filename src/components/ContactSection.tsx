import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ExternalLink, Calendar, Navigation } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

interface ContactSectionProps {
  onOpenBooking: (service?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 md:py-24 bg-[#1E3A2F] text-white relative overflow-hidden" id="contact-section">
      {/* Decorative ambient backdrop shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C49A45]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#C49A45]/20 text-[#E8C581] border border-[#C49A45]/30 mb-3">
                Begin Your Path to Health
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F4F0E8]">
                Contact The Menders Clinic
              </h2>
              <p className="text-sm sm:text-base text-[#D1DCD6] mt-3 max-w-xl leading-relaxed">
                Whether seeking guidance for metabolic health, spine & joint support, or authentic Siddha wellness therapies, Dr. Stephin Mohan and our clinic team are here to assist you.
              </p>
            </div>

            {/* Quick Contact Buttons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp CTA Card */}
              <a
                href={clinicInfo.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 hover:bg-[#25D366]/25 transition-all group flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A7F3D0]">
                    Fastest Response
                  </span>
                </div>
                <div>
                  <div className="text-xs text-[#D1DCD6]">WhatsApp Message</div>
                  <div className="font-serif text-xl font-bold text-white group-hover:text-[#A7F3D0] transition-colors">
                    {clinicInfo.whatsapp.display}
                  </div>
                </div>
              </a>

              {/* Phone CTA Card */}
              <a
                href={clinicInfo.phone.telLink}
                className="p-5 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all group flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#C49A45] text-white flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E8C581]">
                    Direct Call
                  </span>
                </div>
                <div>
                  <div className="text-xs text-[#D1DCD6]">Telephone Line</div>
                  <div className="font-serif text-xl font-bold text-white group-hover:text-[#E8C581] transition-colors">
                    {clinicInfo.phone.display}
                  </div>
                </div>
              </a>
            </div>

            {/* Address & Timings Information */}
            <div className="space-y-4 pt-2 border-t border-[#2E4A3E]/80">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#E8C581]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#E8C581] uppercase tracking-wider">
                    Clinic Address
                  </div>
                  <div className="text-sm text-[#F4F0E8] font-medium mt-0.5">
                    {clinicInfo.name}
                  </div>
                  <div className="text-xs text-[#D1DCD6] leading-relaxed">
                    {clinicInfo.address.full}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#E8C581]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#E8C581] uppercase tracking-wider">
                    Consultation Hours
                  </div>
                  {clinicInfo.hours.map((h, idx) => (
                    <div key={idx} className="text-xs text-[#D1DCD6] mt-0.5">
                      <span className="font-medium text-white">{h.days}:</span> {h.timing}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3.5 rounded-xl bg-[#C49A45] text-white font-medium text-sm hover:bg-[#B38938] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation Slot</span>
              </button>

              <a
                href={clinicInfo.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-center"
              >
                <Navigation className="w-4 h-4 text-[#E8C581]" />
                <span>Get Google Maps Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Map & Location Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-4">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Find Us in Marthandam</h3>
                  <p className="text-xs text-[#D1DCD6]">Opposite to Standard Auditorium</p>
                </div>
                <MapPin className="w-6 h-6 text-[#E8C581]" />
              </div>

              {/* Map Container / Link */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/20 bg-[#162B23] group">
                <iframe
                  title="The Menders Clinic Location Map"
                  src="https://maps.google.com/maps?q=North+St,+opposite+to+Standard+Auditorium,+Marthandam,+Tamil+Nadu+629165&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <a
                  href={clinicInfo.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#1E3A2F]/90 text-white text-xs font-semibold shadow-md flex items-center gap-1 hover:bg-[#1E3A2F]"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-[#D1DCD6] leading-relaxed">
                <span className="font-semibold text-white">Location Landmark:</span> Conveniently situated on North Street, directly opposite Standard Auditorium in Marthandam, Tamil Nadu. Parking and step-free clinic access available.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
