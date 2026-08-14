import { ClinicInfo, ServiceItem, WellnessProgramItem, TestimonialItem } from '../types';

export const clinicInfo: ClinicInfo = {
  name: 'The Menders Clinic',
  doctorName: 'Dr. Stephin Mohan',
  doctorRole: 'Lead Physician & Specialist',
  specialization: 'Preventive Healthcare & Chronic Disease Management Specialist',
  tagline: 'Traditional Wisdom. Personalized Healing.',
  website: 'www.themendersclinic.com',
  whatsapp: {
    display: '+91 93636 36177',
    raw: '919363636177',
    link: 'https://wa.me/919363636177?text=Hello%20The%20Menders%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.'
  },
  phone: {
    display: '+91 75300 33177',
    raw: '917530033177',
    telLink: 'tel:+917530033177'
  },
  address: {
    line1: 'North St, opposite to Standard Auditorium',
    line2: 'Marthandam',
    cityStateZip: 'Tamil Nadu 629165',
    full: 'North St, opposite to Standard Auditorium, Marthandam, Tamil Nadu 629165',
    mapUrl: 'https://maps.google.com/?q=North+St,+opposite+to+Standard+Auditorium,+Marthandam,+Tamil+Nadu+629165',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.514332912!2d77.2281!3d8.3039!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0500123456789%3A0x123456789!2sStandard%20Auditorium%2C%20Marthandam!5e0!3m2!1sen!2sin!4v1680000000000'
  },
  hours: [
    { days: 'Monday – Saturday', timing: '9:00 AM – 1:00 PM | 4:30 PM – 8:30 PM' },
    { days: 'Sunday', timing: 'Prior Appointment Only' }
  ]
};

export const areasOfCare: ServiceItem[] = [
  {
    id: 'liver-sugar-care',
    title: 'Liver & Sugar Care',
    subtitle: 'Comprehensive Metabolic & Hepatic Management',
    description: 'Specialized preventive strategies and personalized management protocols for liver health, blood sugar regulation, fatty liver, and metabolic balance.',
    detailedPoints: [
      'Individualized blood sugar monitoring and lifestyle management plans',
      'Preventive protocols for non-alcoholic fatty liver and metabolic stress',
      'Dietary and traditional therapeutic integration for long-term health',
      'Focus on root-cause management rather than temporary symptom relief'
    ],
    iconName: 'Activity',
    link: '/liver-sugar-care',
    tag: 'Core Focus Area'
  },
  {
    id: 'bone-joint-spine-care',
    title: 'Bone, Joint & Spine Care',
    subtitle: 'Musculoskeletal Health & Traditional Mobility Support',
    description: 'Focused clinical management for chronic joint pain, spine rigidity, postural stiffness, and degenerative bone conditions utilizing gentle, evidence-informed traditional therapies.',
    detailedPoints: [
      'Comprehensive musculoskeletal assessments and mobility evaluations',
      'Traditional therapeutic application for spine and joint comfort',
      'Postural realignment and ergonomic guidance for chronic back care',
      'Non-invasive therapeutic care aimed at preserving natural joint movement'
    ],
    iconName: 'ShieldPlus',
    link: '/bone-joint-spine-care',
    tag: 'Therapeutic Specialty'
  }
];

export const wellnessPrograms: WellnessProgramItem[] = [
  {
    id: 'siddha-shirodhara',
    title: 'Siddha Shirodhara',
    tamilName: 'சித்த சிரோதாரா',
    shortDescription: 'A deeply soothing traditional therapy involving a steady, continuous stream of warm medicated liquid over the forehead, promoting mental calm and neural balance.',
    fullDescription: 'Siddha Shirodhara is an ancient therapeutic procedure where specially prepared warm herbal oils or medicated decoctions are continuously poured in a precise rhythm over the forehead. This gentle stimulation supports stress reduction, headache relief, mental fatigue alleviation, and sleep quality.',
    benefits: [
      'Promotes deep relaxation and nervous system calm',
      'Supports natural sleep quality and stress alleviation',
      'Helps ease tension headaches and mental exhaustion',
      'Harmonizes mind-body equilibrium using traditional formulations'
    ],
    durationPlaceholder: '45–60 Mins / Session',
    packagePlaceholder: {
      packageName: 'Siddha Shirodhara Restorative Care Package',
      description: 'Customizable multi-session therapy package designed for chronic stress alleviation and sleep revitalization. Details and schedules tailored after consultation.',
      duration: 'Comprehensive Multi-Day Therapy',
      includedServices: [
        'Initial clinical health evaluation with Dr. Stephin Mohan',
        'Customized herbal formulation selection for Shirodhara',
        'Post-therapy relaxation & restorative tea regimen',
        'Follow-up wellness guidance'
      ],
      pricing: 'Pricing & Schedule Available Upon Consultation'
    }
  },
  {
    id: 'therapeutic-massages',
    title: 'Therapeutic Massages',
    tamilName: 'சிகிச்சை மசாஜ்',
    shortDescription: 'Customized full-body or targeted manual therapies using authentic medicated herbal oils to ease muscular tension, improve circulation, and revitalize vital energy.',
    fullDescription: 'Our therapeutic massage treatments combine time-tested traditional pressure point techniques with therapeutic herbal oils. Tailored specifically to address muscle stiffness, joint discomfort, fatigue, and poor circulatory flow under medical guidance.',
    benefits: [
      'Relieves chronic muscle tightness and body ache',
      'Enhances peripheral circulation and lymphatic flow',
      'Supports joint flexibility and soft tissue recovery',
      'Restores physical vitality through authentic herbal oil absorption'
    ],
    durationPlaceholder: '60 Mins / Session',
    packagePlaceholder: {
      packageName: 'Therapeutic Musculoskeletal Rejuvenation Package',
      description: 'Curated series of targeted therapeutic massages aimed at chronic neck, back, or full-body muscular relief. Formulated specifically to your physical condition.',
      duration: 'Tailored Multi-Session Package',
      includedServices: [
        'Personalized body constitution assessment',
        'Application of medically selected traditional oils',
        'Targeted joint and muscle pressure techniques',
        'Warm compress & guidance for home posture care'
      ],
      pricing: 'Pricing & Schedule Available Upon Consultation'
    }
  },
  {
    id: 'steam-therapy',
    title: 'Steam Therapy',
    tamilName: 'நீராவி சிகிச்சை',
    shortDescription: 'Medicated herbal steam baths that facilitate deep tissue detoxification, open cutaneous pores, alleviate stiffness, and promote natural systemic lightness.',
    fullDescription: 'Therapeutic Steam Therapy utilizes steam infused with fresh local medicinal leaves and traditional herbs. As warm vapor permeates the body, it encourages gentle perspiration, opens skin pores, relaxes tense muscles, and enhances the therapeutic efficacy of prior massage treatments.',
    benefits: [
      'Facilitates natural perspiration and pore clearing',
      'Enhances flexibility and reduces post-massage muscle soreness',
      'Aids respiratory clarity with soothing aromatic herbs',
      'Leaves the body feeling refreshed, light, and invigorated'
    ],
    durationPlaceholder: '20–30 Mins / Session',
    packagePlaceholder: {
      packageName: 'Herbal Steam & Detoxification Package',
      description: 'Integrated steam therapy regimen, frequently combined with therapeutic massages for optimal muscle relaxation and systemic rejuvenation.',
      duration: 'Combined Session Protocol',
      includedServices: [
        'Fresh herbal decoction steam chamber setup',
        'Continuous temperature and comfort monitoring',
        'Hydration support with warm traditional herbal infusions',
        'Post-steam recovery assessment'
      ],
      pricing: 'Pricing & Schedule Available Upon Consultation'
    }
  }
];

export const placeholderTestimonials: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Dr. Stephin Mohan takes the time to listen and understand the root cause of health issues. His personalized guidance for blood sugar and lifestyle balance made a genuine difference in my daily wellbeing.',
    patientName: 'Patient from Marthandam',
    serviceCategory: 'Liver & Sugar Care',
    verifiedPatient: true
  },
  {
    id: 'test-2',
    quote: 'The combination of traditional therapeutic massages and calm medical advice provided immense comfort for my long-standing back stiffness. The clinic environment is exceptionally serene.',
    patientName: 'Local Resident',
    serviceCategory: 'Bone & Joint Care',
    verifiedPatient: true
  },
  {
    id: 'test-3',
    quote: 'The Siddha Shirodhara treatment at The Menders Clinic was extremely soothing. Highly recommend visiting for authentic, trustworthy healthcare.',
    patientName: 'Wellness Consultation Visitor',
    serviceCategory: 'Siddha Shirodhara',
    verifiedPatient: true
  }
];
