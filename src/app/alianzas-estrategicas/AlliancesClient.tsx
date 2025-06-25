// src/app/asociados/AlliancesClient.tsx

"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";

// Definimos el tipo de datos para mayor claridad
type Collaborator = {
  name: string;
  specialty: string;
  description: string;
  imageSrc: string;
};

const AlliancesClient = ({
  title,
  subtitle,
  collaborators,
}: {
  title: string;
  subtitle: string;
  collaborators: Collaborator[];
}) => {
  // --- Hooks de Animación ---
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });
  const gridControls = useAnimation();

  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });
  const ctaControls = useAnimation();

  useEffect(() => {
    if (isGridInView) gridControls.start("visible");
  }, [isGridInView, gridControls]);

  useEffect(() => {
    if (isCtaInView) ctaControls.start("visible");
  }, [isCtaInView, ctaControls]);

  // --- Variantes de Animación ---
  const heroContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const gridContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="overflow-x-hidden">
      {/* --- Hero Section Animado --- */}
      <section
        id="hero-alianzas"
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/alianzas-bg.jpg')" }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(28, 28, 28, 0.75)" }}
        ></div>
        <motion.div
          className="container mx-auto relative z-10 text-center px-6 py-32"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={heroItemVariants}
            className="text-5xl font-bold text-white"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={heroItemVariants}
            className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </section>

      {/* --- Contenido Principal Animado --- */}
      <section ref={gridRef} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12"
            variants={gridContainerVariants}
            initial="hidden"
            animate={gridControls}
          >
            {collaborators.map((person) => (
              <motion.div
                key={person.name}
                variants={cardVariants}
                className="relative"
              >
                <div className="h-full flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 md:hidden">
                    <Image
                      src={person.imageSrc}
                      alt={`Avatar de ${person.name}`}
                      width={96}
                      height={96}
                      className="rounded-full border-4 border-white object-cover w-full h-full"
                    />
                  </div>
                  <div className="hidden md:block md:w-1/3 flex-shrink-0">
                    <Image
                      src={person.imageSrc}
                      alt={`Foto de ${person.name}`}
                      width={250}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col p-6 text-center md:text-left pt-16 md:pt-6 md:w-2/3">
                    <h3 className="text-2xl font-bold text-primary">
                      {person.name}
                    </h3>
                    <p className="text-md font-semibold text-accent mb-2">
                      {person.specialty}
                    </p>
                    <p className="text-text-dark text-base mt-2 flex-grow">
                      {person.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CTA Final Animado --- */}
      <motion.section
        ref={ctaRef}
        className="bg-primary text-white py-20"
        variants={ctaVariants}
        initial="hidden"
        animate={ctaControls}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Un equipo extendido a su servicio
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Mi red de alianzas estratégicas me permite ofrecerle la mejor
            solución para cada desafío.
          </p>
          <Link
            href="/#contacto"
            className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300"
          >
            Contactar
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default AlliancesClient;
