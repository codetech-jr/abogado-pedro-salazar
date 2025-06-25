// src/components/sections/Testimonials.tsx

"use client"; // <-- 1. Marcar como Client Component

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion"; // <-- 2. Importar lo necesario
import { FaQuoteLeft } from "react-icons/fa";
import { siteContent } from "@/lib/content";

const Testimonials = () => {
  const { title, subtitle, items } = siteContent.testimonials;

  // <-- 3. Hooks para la animación al hacer scroll
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // <-- 4. Definir las variantes de animación
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const gridContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Retraso de 0.2s entre la animación de cada tarjeta
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    // <-- 5. Añadir la referencia y overflow-hidden
    <section
      ref={ref}
      id="testimonials"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Encabezado de la sección */}
        <motion.div
          className="text-center mb-16"
          // <-- 6. Aplicar animación al encabezado
          variants={headerVariants}
          initial="hidden"
          animate={mainControls}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-lg text-text-dark max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Cuadrícula de testimonios */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          // <-- 7. Aplicar animación al contenedor de la cuadrícula para orquestar las tarjetas
          variants={gridContainerVariants}
          initial="hidden"
          animate={mainControls}
        >
          {items.map((testimonial) => (
            // <-- 8. Convertir cada tarjeta en un motion.div y aplicar sus variantes
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="bg-neutral p-8 rounded-lg flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-accent text-3xl mb-4">
                <FaQuoteLeft />
              </div>

              <blockquote className="text-text-dark italic flex-grow mb-6">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <div className="w-16 border-t-2 border-accent mb-6"></div>

              <div className="flex items-center">
                <Image
                  src={testimonial.imageSrc}
                  alt={`Foto de ${testimonial.name}`}
                  width={56}
                  height={56}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
