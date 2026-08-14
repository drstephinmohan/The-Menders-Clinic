import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Menu, X, ChevronDown, Calendar } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wellnessDropdownOpen, setWellnessDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setWellnessDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Liver & Sugar Care', path: '/liver-sugar-care' },
    { label: 'Bone, Joint & Spine Care', path: '/bone-joint-spine-care' },
    {
      label: 'Wellness Programs',
      path: '/wellness-programs',
      hasDropdown: true,
      subItems: [
        { label: 'Siddha Shirodhara', hash: 'siddha-shirodhara' },
        { label: 'Therapeutic Massages', hash: 'therapeutic-massages' },
        { label: 'Steam Therapy', hash: 'steam-therapy' }
      ]
    },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'About', path: '/about' }
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E2DDD2] shadow-xs py-3'
          : 'bg-[#FAF8F5] border-b border-[#E2DDD2]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <Link to="/" className="flex flex-col group">
            <span className="font-serif text-2xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1E3A2F] group-hover:text-[#2A5243] transition-colors">
              {clinicInfo.name}
            </span>
            <span className="text-[10px] sm:text-xs tracking-wider uppercase text-[#736858] font-medium -mt-0.5">
              Traditional Wisdom • Personalized Healing
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setWellnessDropdownOpen(true)}
                    onMouseLeave={() => setWellnessDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? 'text-[#1E3A2F] bg-[#1E3A2F]/8 font-semibold'
                          : 'text-[#3E4742] hover:text-[#1E3A2F] hover:bg-[#EFECE6]/60'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </Link>

                    {/* Dropdown Menu */}
                    {wellnessDropdownOpen && (
                      <div className="absolute left-0 mt-1 w-56 rounded-xl bg-white border border-[#E2DDD2] shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="px-3 py-1.5 text-[11px] font-semibold text-[#8C7E6A] uppercase tracking-wider border-b border-[#F0ECDF] mb-1">
                          Wellness Therapies
                        </div>
                        {link.subItems?.map((sub) => (
                          <Link
                            key={sub.label}
                            to={`/wellness-programs#${sub.hash}`}
                            className="block px-4 py-2 text-xs font-medium text-[#333C37] hover:bg-[#FAF8F5] hover:text-[#1E3A2F] transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-[#1E3A2F] bg-[#1E3A2F]/8 font-semibold'
                      : 'text-[#3E4742] hover:text-[#1E3A2F] hover:bg-[#EFECE6]/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar (Contact & Book) */}
          <div className="hidden md:flex items-center space-x-3 xl:space-x-4">
            {/* WhatsApp */}
            <a
              href={clinicInfo.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#128C7E] bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{clinicInfo.whatsapp.display}</span>
            </a>

            {/* Phone Call */}
            <a
              href={clinicInfo.phone.telLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1E3A2F] bg-[#1E3A2F]/10 border border-[#1E3A2F]/20 hover:bg-[#1E3A2F]/20 transition-all"
              title="Call Clinic"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{clinicInfo.phone.display}</span>
            </a>

            {/* Book Consultation Button */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1E3A2F] text-white font-medium text-xs sm:text-sm hover:bg-[#2A4B3E] transition-all shadow-xs active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="p-2 rounded-lg bg-[#1E3A2F] text-white text-xs font-medium flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#1E3A2F] hover:bg-[#EFECE6] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E2DDD2] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1 pb-3 border-b border-[#E2DDD2]/60">
            {navLinks.map((link) => (
              <React.Fragment key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#1E3A2F] bg-[#1E3A2F]/10 font-bold'
                      : 'text-[#3E4742] hover:bg-[#EFECE6]'
                  }`}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 space-y-1 my-1">
                    {link.subItems?.map((sub) => (
                      <Link
                        key={sub.label}
                        to={`/wellness-programs#${sub.hash}`}
                        className="block px-3 py-1.5 rounded-lg text-sm text-[#5C6660] hover:text-[#1E3A2F]"
                      >
                        • {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={clinicInfo.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 font-medium text-xs"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Us
            </a>

            <a
              href={clinicInfo.phone.telLink}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#1E3A2F]/10 text-[#1E3A2F] border border-[#1E3A2F]/20 font-medium text-xs"
            >
              <Phone className="w-4 h-4" />
              Call Clinic
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
