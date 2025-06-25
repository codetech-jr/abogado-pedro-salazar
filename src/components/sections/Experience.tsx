// src/components/sections/Experience.tsx

"use client"; // <-- 1. Marcar como Client Component

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion"; // <-- 2. Importar herramientas de Framer Motion
import { siteContent } from "@/lib/content";

import profileImage from "@/../public/img/experience/experience-placeholder.jpg";

const Experience = () => {
  const { title, paragraphs, cta } = siteContent.experience;

  // <-- 3. Hooks para la animación al hacer scroll
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 }); // Activamos cuando el 25% sea visible
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

  const textColumnVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2, // Anima los elementos internos de forma escalonada
      },
    },
  };

  // Variante para cada ítem de texto (título, párrafo, botón)
  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    // <-- 5. Añadir la referencia y overflow-hidden
    <section
      ref={ref}
      id="experiencia"
      className="py-24 bg-primary text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
          // <-- 6. Orquestar la animación de las dos columnas
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
        >
          {/* Columna de Texto */}
          <motion.div
            className="text-left"
            variants={textColumnVariants} // <-- 7. Animar la columna de texto
          >
            <motion.h2
              className="text-4xl font-bold text-white mb-6"
              variants={textItemVariants} // <-- 8. Animar cada elemento interno
            >
              {title}
            </motion.h2>

            <div className="space-y-4 text-gray-300 text-lg">
              {" "}
              {/* Cambiado a gray-300 para mejor contraste */}
              {paragraphs.map((paragraph, index) => (
                <motion.p key={index} variants={textItemVariants}>
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div className="mt-8" variants={textItemVariants}>
              <Link
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-md transition-all duration-300 hover:bg-[#D4AF37] hover:scale-105"
              >
                {cta.text}
              </Link>
            </motion.div>
          </motion.div>

          {/* Columna de Imagen */}
          <motion.div
            className="flex justify-center md:justify-end"
            variants={imageVariants} // <-- 9. Animar la columna de la imagen
          >
            <Image
              src={profileImage}
              alt="Retrato profesional del abogado Pedro Salazar"
              width={500}
              height={600}
              className="rounded-lg object-cover shadow-2xl w-full h-auto max-w-md"
              style={{ objectPosition: "top" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
