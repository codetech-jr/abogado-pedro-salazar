// src/app/asociados/page.tsx

import React from "react";
import { Metadata } from "next";
import { siteContent } from "@/lib/content";
import AlliancesClient from "./AlliancesClient"; // <-- 1. Importa el nuevo componente

// La metadata se queda igual
export const metadata: Metadata = {
  title: "Alianzas Estratégicas | Pedro Salazar Abogado",
  description:
    "Conozca la red de colaboradores y especialistas que trabajan con Pedro Salazar para ofrecer soluciones legales integrales.",
};

const AlianzasPage = () => {
  // 2. Extrae los datos como antes
  const { title, subtitle, collaborators } = siteContent.alliances;

  // 3. Renderiza el componente cliente, pasándole los datos como props
  return (
    <AlliancesClient
      title={title}
      subtitle={subtitle}
      collaborators={collaborators}
    />
  );
};

export default AlianzasPage;
