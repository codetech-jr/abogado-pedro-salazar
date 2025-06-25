// src/lib/types.ts

// Tipo para un servicio individual
export type Service = {
  slug: string;
  title: string;
  description: string;
  iconIdentifier: string;
  bannerImageSrc: string;
  detailedDescription: string[];
  keyPoints?: string[];
};

// Tipo para un testimonio individual
export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
};

// Tipo para la información de la sección de contacto
export type ContactInfo = {
  title: string;
  description: string;
  info: {
    title: string;
    address: string;
    phone: string;
    email: string;
  };
  social: {
    title: string;
    links: {
      name: string;
      href: string;
      icon: string;
    }[];
  };
  form: {
    title: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    buttonText: string;
  };
};

// Tipo principal que une toda la estructura del sitio
export type SiteContent = {
  hero: {
    title: string;
    subtitle1: string;
    subtitle2: string;
    description: string;
    ctaButton: string;
    secondaryButton: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Service[];
  };
  experience: {
    title: string;
    paragraphs: string[];
    cta: {
      text: string;
      href: string;
    };
  };
  clientBrands: {
    title: string;
    logos: {
      src: string;
      alt: string;
    }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  contact: ContactInfo;
  alliances: {
    title: string;
    subtitle: string;
    collaborators: {
      name: string;
      specialty: string;
      description: string;
      imageSrc: string;
    }[];
  };
  aboutMe: {
    kicker: string;
    title: string;
    description: string;
    values: {
      title: string;
      description: string;
    }[];
    cta: {
      text: string;
      href: string;
    };
  };
};