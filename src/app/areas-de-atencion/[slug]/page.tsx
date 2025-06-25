// src/app/areas-de-atencion/[slug]/page.tsx

import { notFound } from 'next/navigation';
import ServiceDetailClient from './ServiceDetailClient';
import { siteContent } from '@/lib/content';
import type { Service } from '@/lib/types';

// Define el tipo para las props que Next.js pasa a la página
type PageProps = {
  params: {
    slug: string;
  };
};

// --- Generación de Metadata (ESTO SÍ PUEDE SER ASYNC) ---
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

// --- Componente de Página Principal (SERVER COMPONENT) ---
// 
//  ▼▼▼ ¡AQUÍ ESTÁ LA CORRECCIÓN CLAVE! ▼▼▼
//  HEMOS QUITADO LA PALABRA "async" DE ESTA LÍNEA.
//
export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = params;

  const service = siteContent.services.items.find(
    (item: Service) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  // Simplemente devolvemos el componente cliente con las props.
  // No hay ninguna operación "await" aquí, por lo que "async" no es necesario.
  return <ServiceDetailClient service={service} />;
}


// --- Generación de Rutas Estáticas (ESTO SÍ PUEDE SER ASYNC) ---
export async function generateStaticParams() {
  return siteContent.services.items.map((service: Service) => ({
    slug: service.slug,
  }));
}