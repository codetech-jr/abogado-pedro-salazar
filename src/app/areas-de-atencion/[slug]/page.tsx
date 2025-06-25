// src/app/areas-de-atencion/[slug]/page.tsx

import { siteContent } from "@/lib/content";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient"; // Importamos el componente cliente que ya tienes

// --- Metadata Dinámica (Opcional pero MUY recomendado para SEO) ---
// Esta función genera el título y la descripción para la pestaña del navegador.
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const service = siteContent.services.items.find(
    (item) => item.slug === params.slug
  );

  if (!service) {
    return {
      title: "Servicio no encontrado",
      description: "La página que buscas no existe.",
    };
  }

  return {
    title: `${service.title} | Pedro Salazar Abogados`,
    description: service.description,
  };
}

// --- Componente de Página (Server Component) ---
export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // 1. Extraemos el slug de la URL que nos pasa Next.js
  const { slug } = params;

  // 2. Buscamos en nuestra lista de servicios el que tenga el mismo slug
  const service = siteContent.services.items.find((item) => item.slug === slug);

  // 3. Si no encontramos ningún servicio con ese slug, mostramos una página 404.
  //    Esto es crucial para evitar el error "cannot read properties of undefined".
  if (!service) {
    notFound();
  }

  // 4. Si encontramos el servicio, renderizamos el componente cliente
  //    y le pasamos el objeto 'service' completo como una prop.
  return <ServiceDetailClient service={service} />;
}

// --- Generación de Rutas Estáticas (Opcional pero recomendado para rendimiento) ---
// Esta función le dice a Next.js qué páginas debe pre-construir.
export async function generateStaticParams() {
  return siteContent.services.items.map((service) => ({
    slug: service.slug,
  }));
}
