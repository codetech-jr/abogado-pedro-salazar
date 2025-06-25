// src/app/contacto/page.tsx

import React from "react";
import { Metadata } from "next";
import { siteContent } from "@/lib/content";
import ContactClient from "./ContactClient"; // <-- 1. Importa el componente cliente

// La metadata se mantiene igual
export const metadata: Metadata = {
  title: "Contacto | Pedro Salazar Abogado",
  description:
    "Póngase en contacto con Pedro Salazar para consultas legales. Encuentre la dirección, teléfono, email y formulario de contacto.",
};

const ContactoPage = () => {
  // 2. Extrae los datos
  const { contact } = siteContent;

  // 3. Renderiza el componente cliente, pasándole los datos
  return <ContactClient contact={contact} />;
};

export default ContactoPage;
