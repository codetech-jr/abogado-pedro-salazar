// src/app/areas-de-atencion/[slug]/ServiceDetailClient.tsx

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

// 1. Importa el tipo que acabamos de crear
import type { Service } from "@/lib/types";

// 2. Usa el tipo 'Service' en lugar de 'unknown'
const ServiceDetailClient = ({ service }: { service: Service }) => {
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 });
  const contentControls = useAnimation();

  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });
  const ctaControls = useAnimation();

  useEffect(() => {
    if (isContentInView) contentControls.start("visible");
  }, [isContentInView, contentControls]);

  useEffect(() => {
    if (isCtaInView) ctaControls.start("visible");
  }, [isCtaInView, ctaControls]);

  const bannerContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const bannerItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="overflow-x-hidden">
      <section
        className="relative bg-cover bg-center text-white py-28 text-center"
        // 3. ¡Esta línea ahora es 100% segura para TypeScript!
        style={{ backgroundImage: `url(${service.bannerImageSrc})` }}
      >
        <div className="absolute inset-0 bg-primary opacity-75"></div>
        <motion.div
          className="container mx-auto px-6 relative z-10"
          variants={bannerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={bannerItemVariants}
            className="text-5xl font-bold"
          >
            {service.title}
          </motion.h1>
          <motion.p
            variants={bannerItemVariants}
            className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto"
          >
            {service.description}
          </motion.p>
        </motion.div>
      </section>

      <motion.section
        ref={contentRef}
        className="py-24 bg-white"
        variants={listVariants}
        initial="hidden"
        animate={contentControls}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose lg:prose-lg mx-auto text-lg">
            <div className="space-y-6">
              {service.detailedDescription.map(
                (paragraph: string, index: number) => (
                  <motion.p key={index} variants={contentItemVariants}>
                    {paragraph}
                  </motion.p>
                )
              )}
            </div>

            {service.keyPoints && (
              <>
                <motion.h2
                  variants={contentItemVariants}
                  className="text-3xl font-bold text-primary mt-16 mb-6"
                >
                  Puntos Clave del Servicio
                </motion.h2>
                <motion.ul variants={listVariants} className="space-y-3">
                  {service.keyPoints.map((point: string, index: number) => (
                    <motion.li
                      key={index}
                      variants={listItemVariants}
                      className="flex items-start"
                    >
                      <FaCheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </>
            )}
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={ctaRef}
        className="bg-primary py-20"
        variants={ctaVariants}
        initial="hidden"
        animate={ctaControls}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para discutir su caso?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Contácteme para una consulta confidencial sobre{" "}
            {service.title.toLowerCase()}.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-md hover:bg-[#D4AF37] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Contactar Ahora
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default ServiceDetailClient;