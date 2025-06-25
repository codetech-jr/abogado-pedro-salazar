// src/app/areas-de-atencion/[slug]/page.tsx

import { notFound } from 'next/navigation';
import ServiceDetailClient from './ServiceDetailClient'; // Componente que crearemos en el siguiente paso

// Supongamos que tienes tus datos en un archivo centralizado como este
// Ajusta la ruta si es diferente
import { siteContent } from '@/lib/content'; 

// Define el tipo para las props de la página
type PageProps = {
  params: {
    slug: string;
  };
};

// --- Generación de Metadata Dinámica (para SEO) ---
export async function generateMetadata({ params }: PageProps) {
  const service = siteContent.services.items.find(
    (item) => item.slug === params.slug
  );

  if (!service) {
    return {
      title: "Servicio no encontrado",
      description: "El área de atención que buscas no existe.",
    };
  }

  return {
    title: `${service.title} | Pedro Salazar Abogados`,
    description: service.description,
    // Puedes agregar más metadata aquí, como openGraph, etc.
  };
}

// --- Componente de Página (Server Component) ---
// Este componente se encarga de la lógica de datos y de pasar la información al cliente.
export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = params;

  // Busca el servicio correspondiente al slug
  const service = siteContent.services.items.find((item) => item.slug === slug);

  // Si no se encuentra el servicio, muestra la página 404 de Next.js
  if (!service) {
    notFound();
  }

  // Renderiza el componente cliente y le pasa los datos del servicio
  return <ServiceDetailClient service={service} />;
}


// --- Generación de Rutas Estáticas (para Vercel y rendimiento) ---
// Le dice a Next.js qué páginas pre-construir durante el 'build'
export async function generateStaticParams() {
  return siteContent.services.items.map((service) => ({
    slug: service.slug,
  }));
}