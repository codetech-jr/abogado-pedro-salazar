// src/app/areas-de-atencion/[slug]/page.tsx

// Importa React para usar sus tipos, es la clave de esta solución
import React from 'react'; 
import { notFound } from 'next/navigation';
import ServiceDetailClient from './ServiceDetailClient';
import { siteContent } from '@/lib/content';
import type { Service } from '@/lib/types';

// Define el tipo para las props que Next.js pasa a la página.
// Este tipo se usará en múltiples lugares.
type PageProps = {
  params: {
    slug: string;
  };
};

// --- Generación de Metadata Dinámica (para SEO) ---
// Esta función SÍ puede ser `async`.
export async function generateMetadata({ params }: PageProps) {
  const service = siteContent.services.items.find(
    (item: Service) => item.slug === params.slug
  );

  if (!service) {
    return {
      title: "Servicio no encontrado",
      description: "El área de atención que buscas no existe en nuestro sitio.",
    };
  }

  return {
    title: `${service.title} | Pedro Salazar Abogados`,
    description: service.description,
  };
}

// --- Componente de Página Principal (Server Component) ---
// 
//  ▼▼▼ CAMBIO PRINCIPAL APLICADO AQUÍ ▼▼▼
// 
// Usamos `React.FC<PageProps>` para definir explícitamente que esto es un
// Function Component de React que recibe `PageProps`. Esto elimina el error
// de tipo que Vercel está encontrando.
//
const ServiceDetailPage: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;

  const service = siteContent.services.items.find(
    (item: Service) => item.slug === slug
  );

  // Si el servicio no se encuentra en nuestros datos, activamos la página 404.
  if (!service) {
    notFound();
  }

  // Renderizamos el componente cliente, pasándole los datos del servicio.
  return <ServiceDetailClient service={service} />;
};

export default ServiceDetailPage;


// --- Generación de Rutas Estáticas (para rendimiento y despliegue) ---
// Esta función también SÍ puede ser `async`.
export async function generateStaticParams() {
  return siteContent.services.items.map((service: Service) => ({
    slug: service.slug,
  }));
}