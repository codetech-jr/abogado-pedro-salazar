// src/lib/types.ts

// Definimos la estructura completa de un objeto de Servicio
export type Service = {
  slug: string;
  title: string;
  description: string;
  iconIdentifier: string;
  bannerImageSrc: string;
  detailedDescription: string[]; // Un array de strings para los párrafos
  keyPoints?: string[]; // La '?' hace que esta propiedad sea opcional
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
};