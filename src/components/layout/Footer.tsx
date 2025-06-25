// src/components/layout/Footer.tsx

"use client"; // <-- 1. Marcar como Client Component

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion"; // <-- 2. Importar lo necesario
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

import logo from "@/../public/img/logo/Logo-ps-negro-abogado.png";

const Footer = () => {
  const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Áreas de Atención", href: "/areas-de-atencion" },
    { label: "Ubicación", href: "/ubicacion" },
    { label: "Contacto", href: "/contacto" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: <FaLinkedin />,
    },
    { name: "Twitter", href: "https://twitter.com/", icon: <FaTwitter /> },
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: <FaFacebook />,
    },
  ];

  const copyrightText = `© ${new Date().getFullYear()} Pedro Salazar Abogado Corporativo. Todos los derechos reservados.`;

  // <-- 3. Hooks para la animación al hacer scroll
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 }); // Se activa cuando el 10% es visible
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // <-- 4. Definir las variantes de animación
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const copyrightVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.8 } }, // Delay para que aparezca al final
  };

  return (
    // <-- 5. Añadir la referencia y overflow-hidden
    <motion.footer
      ref={ref}
      className="bg-neutral text-primary overflow-hidden"
      initial="hidden"
      animate={mainControls}
    >
      <div className="container mx-auto px-6 pt-16 pb-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          // <-- 6. Orquestar la animación de las columnas
          variants={containerVariants}
        >
          {/* <-- 7. Convertir cada columna en un motion.div */}
          <motion.div
            variants={columnVariants}
            className="sm:col-span-2 lg:col-span-1"
            transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }} // Usar un easing válido para Framer Motion
          >
            <Link href="/">
              <Image
                src={logo}
                alt="Logo de Pedro Salazar Abogado"
                width={300}
                height={50}
                className="h-auto"
              />
            </Link>
            <p className="mt-4 text-sm max-w-xs">
              Asesoría legal estratégica para un mundo empresarial competitivo.
            </p>
          </motion.div>

          <motion.div variants={columnVariants}>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={columnVariants}>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm">
              <li>KM 3 Carretera Nacional Charallave, Cúa, Miranda</li>
              <li>+58 4123998217</li>
              <li>pedro.salazar@abogados.com</li>
            </ul>
          </motion.div>

          <motion.div variants={columnVariants}>
            <h3 className="text-lg font-semibold text-primary mb-4">Sígueme</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-accent transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-300 pt-8 text-center"
          // <-- 8. Animar la barra de copyright por separado
          variants={copyrightVariants}
        >
          <p className="text-sm text-gray-500">{copyrightText}</p>
          <p className="text-center text-gray-500 text-sm pt-2 md:pt-3">
            Creado por{" "}
            <Link
              href="https://portfolio-codetech.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark hover:text-accent border-b transition-colors"
            >
              Codetech Junior
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
