export interface Product {
  id: string;
  name: string;
  hindiName?: string;
  seedType: string;
  category: 'Everyday Essentials' | 'Traditional Cold-Pressed' | 'Specialty Oils';
  shortDescription: string;
  detailedDescription: string;
  culinaryUsage: string[];
  seedAttributes: string[];
  packagingOptionsPlaceholder: string[];
  priceNote: string;
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  headline: string;
  description: string;
  details: string[];
  image: string;
}

export interface FeatureCard {
  title: string;
  tagline: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  productOfInterest: string;
  message: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  brandConcept: string;
  whatsapp: {
    phoneNumber: string; // configurable placeholder
    displayPhone: string;
    defaultMessage: string;
  };
  contact: {
    phonePlaceholder: string;
    emailPlaceholder: string;
    addressPlaceholder: string;
    workingHours: string;
    socialLinks: {
      instagram: string;
      facebook: string;
      youtube: string;
      linkedin: string;
    };
  };
  palette: {
    forestGreen: string;
    oliveGreen: string;
    warmCream: string;
    goldenYellow: string;
    white: string;
    darkText: string;
  };
}
