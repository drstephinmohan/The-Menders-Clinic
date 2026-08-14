export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedPoints: string[];
  iconName: string;
  link: string;
  tag?: string;
}

export interface WellnessProgramItem {
  id: string;
  title: string;
  tamilName?: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  durationPlaceholder: string;
  packagePlaceholder: {
    packageName: string;
    description: string;
    duration: string;
    includedServices: string[];
    pricing: string;
  };
}

export interface TestimonialItem {
  id: string;
  quote: string;
  patientName: string;
  serviceCategory?: string;
  date?: string;
  verifiedPatient?: boolean;
}

export interface ClinicInfo {
  name: string;
  doctorName: string;
  doctorRole: string;
  specialization: string;
  tagline: string;
  website: string;
  whatsapp: {
    display: string;
    raw: string;
    link: string;
  };
  phone: {
    display: string;
    raw: string;
    telLink: string;
  };
  address: {
    line1: string;
    line2: string;
    cityStateZip: string;
    full: string;
    mapUrl: string;
    embedUrl: string;
  };
  hours: {
    days: string;
    timing: string;
  }[];
}
