// src/app/ubicacion/UbicacionClient.tsx

"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

// URL 'src' de Google Maps
const googleMapsSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.677515355905!2d-66.87991582591971!3d10.206821969443679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2aeec9821e52d9%3A0x8c0eb85d4cac8cd4!2sConjunto%20Residencias%20Las%20Trinitarias!5e0!3m2!1ses!2sve!4v1750881216017!5m2!1ses!2sve";

const UbicacionClient = () => {
  // --- Hooks de Animación ---
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, amount: 0.2 });
  const contentControls = useAnimation();

  useEffect(() => {
    if (isContentInView) {
      contentControls.start("visible");
    }
  }, [isContentInView, contentControls]);

  // --- Variantes de Animación ---
  const heroContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  };

  const infoColumnVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="overflow-x-hidden">
      {/* --- HERO SECTION ANIMADO --- */}
      <section
        id="hero-ubicacion"
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/ubicacion-bg.jpg')" }}
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
            Nuestra Oficina
          </motion.h1>
          <motion.p
            variants={heroItemVariants}
            className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto"
          >
            Le invito a visitarme para discutir sus necesidades legales en un
            entorno profesional y confidencial.
          </motion.p>
        </motion.div>
      </section>

      {/* --- CONTENIDO PRINCIPAL ANIMADO --- */}
      <section ref={contentRef} className="py-24 bg-white">
        <motion.div
          className="container mx-auto px-6"
          variants={gridVariants}
          initial="hidden"
          animate={contentControls}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Columna Izquierda: Información */}
            <motion.div variants={infoColumnVariants}>
              <motion.h2
                variants={listItemVariants}
                className="text-3xl font-bold text-primary mb-6"
              >
                Información de Contacto
              </motion.h2>
              <motion.ul
                variants={{
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
                className="space-y-6 text-lg text-text-dark"
              >
                <motion.li
                  variants={listItemVariants}
                  className="flex items-start"
                >
                  <FaMapMarkerAlt className="text-accent mr-4 mt-1 flex-shrink-0 text-xl" />
                  <div>
                    <p className="font-semibold text-primary">Dirección</p>
                    <p>KM 3 Carretera Nacional Charallave, Cúa, Miranda</p>
                  </div>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  className="flex items-start"
                >
                  <FaPhone className="text-accent mr-4 mt-1 flex-shrink-0 text-xl" />
                  <div>
                    <p className="font-semibold text-primary">Teléfono</p>
                    <p>+34 91 123 45 67</p>
                  </div>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  className="flex items-start"
                >
                  <FaEnvelope className="text-accent mr-4 mt-1 flex-shrink-0 text-xl" />
                  <div>
                    <p className="font-semibold text-primary">Email</p>
                    <p>pedro.salazar@abogados.com</p>
                  </div>
                </motion.li>
                <motion.li
                  variants={listItemVariants}
                  className="flex items-start"
                >
                  <FaClock className="text-accent mr-4 mt-1 flex-shrink-0 text-xl" />
                  <div>
                    <p className="font-semibold text-primary">
                      Horario de Atención
                    </p>
                    <p>Lunes a Viernes: 9:00 - 18:00</p>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Columna Derecha: Mapa */}
            <motion.div
              variants={mapVariants}
              className="w-full h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl"
            >
              <iframe
                src={googleMapsSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la oficina de Pedro Salazar"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default UbicacionClient;
