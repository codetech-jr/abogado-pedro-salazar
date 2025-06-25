// src/components/sections/AboutMe.tsx

"use client"; // <-- 1. Marcar como Client Component

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion"; // <-- 2. Importar lo necesario
import { siteContent } from "@/lib/content";
import { FaArrowRight } from "react-icons/fa";

import aboutImage from "@/../public/img/about-me/balanza-justicia.jpg";

const AboutMe = () => {
  const { kicker, title, description, values, cta } = siteContent.aboutMe;

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
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Retraso entre la animación de la columna izq y der
      },
    },
  };

  const textColumnVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15, // Retraso entre los elementos de esta columna
      },
    },
  };

  const imageColumnVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Variante para cada item de texto dentro de la columna izquierda
  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    // <-- 5. Añadir la referencia y overflow-hidden
    <section ref={ref} id="sobre-mi" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          // <-- 6. Orquestar la animación de las dos columnas
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
        >
          {/* Columna Izquierda: Texto */}
          <motion.div
            className="flex flex-col"
            variants={textColumnVariants} // <-- 7. Animar toda la columna de texto
          >
            <motion.span
              className="text-sm font-bold text-accent uppercase tracking-wider mb-2"
              variants={textItemVariants} // <-- 8. Animar cada elemento individualmente
            >
              {kicker}
            </motion.span>
            <motion.h2
              className="text-4xl xl:text-[36px] lg:text-5xl font-bold text-primary leading-tight mb-6"
              variants={textItemVariants}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-lg text-text-dark mb-8"
              variants={textItemVariants}
            >
              {description}
            </motion.p>

            {/* Sub-grid para los valores */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10"
              variants={textItemVariants}
            >
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-slate-50 p-6 rounded-lg shadow-md h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-dark">{value.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div className="mt-auto" variants={textItemVariants}>
              <Link
                href={cta.href}
                className="inline-flex items-center font-bold text-accent hover:underline"
              >
                {cta.text}
                <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Imagen */}
          <motion.div
            className="w-full h-full"
            variants={imageColumnVariants} // <-- 9. Animar la columna de la imagen
          >
            <Image
              src={aboutImage}
              alt="Imagen representativa de los valores del despacho"
              width={600}
              height={700}
              className="rounded-lg object-cover w-full h-full shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
