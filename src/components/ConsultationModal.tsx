import React, { useState } from 'react';
import { X, MessageSquare, Phone, Calendar, User, Mail, CheckCircle2 } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'General Consultation'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService);
  const [preferredTime, setPreferredTime] = useState('Morning (9 AM - 1 PM)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello The Menders Clinic,\n\nI would like to book a consultation with Dr. Stephin Mohan.\n\n*Name:* ${name || 'Patient'}\n*Phone:* ${phone || 'Not provided'}\n*Area of Focus:* ${service}\n*Preferred Time:* ${preferredTime}\n${notes ? `*Message:* ${notes}` : ''}`
    );
    window.open(`https://wa.me/${clinicInfo.whatsapp.raw}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity duration-300">
      <div 
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl border border-[#E2DDD2] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1E3A2F] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#C49A45]/20 text-[#E8C581] border border-[#C49A45]/30 mb-2">
            The Menders Clinic
          </div>
          <h3 className="font-serif text-2xl font-bold tracking-tight">Book a Consultation</h3>
          <p className="text-sm text-[#D1DCD6] mt-1">
            With Dr. Stephin Mohan • Preventive Healthcare Specialist
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-[#2E4A3E]/10 text-[#2E4A3E] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#1E2522]">Consultation Request Initiated</h4>
              <p className="text-sm text-[#5C6660] max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-[#1E2522]">{name || 'valued patient'}</span>. Our clinic desk will confirm your appointment details shortly.
              </p>
              
              <div className="bg-[#F3EFE6] p-4 rounded-xl border border-[#E2DDD2] text-left text-xs text-[#4A524D] space-y-2 mt-4">
                <div className="font-semibold text-[#1E3A2F]">Consultation Overview:</div>
                <div>• <span className="font-medium">Specialist:</span> Dr. Stephin Mohan</div>
                <div>• <span className="font-medium">Selected Focus:</span> {service}</div>
                <div>• <span className="font-medium">Preferred Slot:</span> {preferredTime}</div>
                <div>• <span className="font-medium">Clinic Address:</span> Marthandam, Tamil Nadu</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-medium text-sm hover:bg-[#20bd5a] transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Confirm on WhatsApp Now
                </button>
                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-[#D8D2C6] text-[#333C37] font-medium text-sm hover:bg-[#F3EFE6] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#4A524D] uppercase tracking-wider mb-1.5">
                  Area of Care / Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8D2C6] bg-white text-sm text-[#1E2522] focus:outline-none focus:ring-2 focus:ring-[#2E4A3E]/30"
                >
                  <option value="General Consultation">General Preventive Consultation</option>
                  <option value="Liver & Sugar Care">Liver & Sugar Care (Metabolic Health)</option>
                  <option value="Bone, Joint & Spine Care">Bone, Joint & Spine Care</option>
                  <option value="Siddha Shirodhara">Siddha Shirodhara Therapy</option>
                  <option value="Therapeutic Massages">Therapeutic Massages</option>
                  <option value="Steam Therapy">Herbal Steam Therapy</option>
                  <option value="Wellness Programs">General Wellness Program</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#4A524D] uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-[#8A948E]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananth Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#D8D2C6] bg-white text-sm text-[#1E2522] focus:outline-none focus:ring-2 focus:ring-[#2E4A3E]/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A524D] uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-[#8A948E]" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#D8D2C6] bg-white text-sm text-[#1E2522] focus:outline-none focus:ring-2 focus:ring-[#2E4A3E]/30"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A524D] uppercase tracking-wider mb-1.5">
                  Preferred Time Window
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8D2C6] bg-white text-sm text-[#1E2522] focus:outline-none focus:ring-2 focus:ring-[#2E4A3E]/30"
                >
                  <option value="Morning (9 AM - 1 PM)">Morning Session (9:00 AM – 1:00 PM)</option>
                  <option value="Evening (4:30 PM - 8:30 PM)">Evening Session (4:30 PM – 8:30 PM)</option>
                  <option value="Weekend Appointment">Weekend / Prior Appointment Request</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A524D] uppercase tracking-wider mb-1.5">
                  Brief Note / Health Concern (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention any specific concern or duration of symptoms..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D8D2C6] bg-white text-sm text-[#1E2522] focus:outline-none focus:ring-2 focus:ring-[#2E4A3E]/30"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#1E3A2F] text-white font-medium text-sm hover:bg-[#2A4B3E] transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  Request Appointment
                </button>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-[#E2DDD2]"></div>
                  <span className="flex-shrink mx-3 text-xs text-[#8A948E]">or contact clinic directly</span>
                  <div className="flex-grow border-t border-[#E2DDD2]"></div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="py-2.5 px-3 rounded-xl bg-[#25D366]/10 text-[#128C7E] font-medium text-xs border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp
                  </button>

                  <a
                    href={clinicInfo.phone.telLink}
                    className="py-2.5 px-3 rounded-xl bg-[#1E3A2F]/10 text-[#1E3A2F] font-medium text-xs border border-[#1E3A2F]/20 hover:bg-[#1E3A2F]/20 transition-colors flex items-center justify-center gap-1.5 text-center"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Clinic
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
