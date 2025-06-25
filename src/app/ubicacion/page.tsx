// src/app/ubicacion/page.tsx

import React from "react";
import { Metadata } from "next";
import UbicacionClient from "./UbicacionClient"; // <-- 1. Importa el componente cliente

// La metadata se mantiene igual
export const metadata: Metadata = {
  title: "Ubicación | Pedro Salazar Abogado",
  description:
    "Encuentre la oficina de Pedro Salazar en Las Trinitarias. Dirección, mapa interactivo y horario de atención.",
};

const UbicacionPage = () => {
  // 2. Renderiza el componente cliente. No necesita props en este caso.
  return <UbicacionClient />;
};

export default UbicacionPage;
