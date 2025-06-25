// src/components/sections/ClientBrands.tsx

"use client"; // <-- 1. Marcar como Client Component

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion"; // <-- 2. Importar lo necesario
import { siteContent } from "@/lib/content";

const ClientBrands = () => {
  const { title, substitle, logos } = siteContent.clientBrands;

  // <-- 3. Hooks para animación al hacer scroll
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // <-- 4. Variantes para la animación de entrada
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scrollerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    // <-- 5. Añadir la referencia y overflow-hidden
    <section ref={ref} className="py-20 bg-neutral overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-semibold text-center text-primary mb-4" // Cambié text-text-dark por text-primary para más consistencia
            // <-- 6. Aplicar animación al título
            variants={textVariants}
            initial="hidden"
            animate={mainControls}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-lg text-text-dark max-w-3xl mx-auto"
            // <-- 7. Aplicar animación al subtítulo
            variants={textVariants}
            initial="hidden"
            animate={mainControls}
            style={{ transitionDelay: "0.1s" }} // Un pequeño delay para que aparezca después del título
          >
            {substitle}
          </motion.p>
        </div>

        <motion.div
          // <-- 8. Aplicar animación al carrusel completo
          variants={scrollerVariants}
          initial="hidden"
          animate={mainControls}
          className="relative w-full overflow-hidden"
        >
          <div className="flex animate-infinite-scroll">
            {logos.map((logo, index) => (
              <div
                key={`logo1-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ width: "160px" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div
                key={`logo2-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ width: "160px" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientBrands;
