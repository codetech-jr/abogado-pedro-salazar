// src/app/contacto/ContactClient.tsx

"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const socialIconMap: { [key: string]: React.ReactNode } = {
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
  facebook: <FaFacebook />,
};

const googleMapsSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.033789370001!2d-3.692099684592231!3d40.45233197936113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e2a5a7c299%3A0x6B35251E5B942D5A!2sP.º%20de%20la%20Castellana%2C%20123%2C%2028046%20Madrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1624200000000!5m2!1sen!2sus";

const ContactClient = ({ contact }: { contact: unknown }) => {
  // --- Hooks de Animación ---
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 });
  const contentControls = useAnimation();

  const mapRef = useRef(null);
  const isMapInView = useInView(mapRef, { once: true, amount: 0.3 });
  const mapControls = useAnimation();

  useEffect(() => {
    if (isContentInView) contentControls.start("visible");
  }, [isContentInView, contentControls]);

  useEffect(() => {
    if (isMapInView) mapControls.start("visible");
  }, [isMapInView, mapControls]);

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

  const gridContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const columnVariants = (from: "left" | "right") => ({
    hidden: { opacity: 0, x: from === "left" ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.1 },
    },
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="overflow-x-hidden">
      {/* --- HERO SECTION ANIMADO --- */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/contacto-bg.jpg')" }}
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
            Póngase en Contacto
          </motion.h1>
          <motion.p
            variants={heroItemVariants}
            className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto"
          >
            {contact.description}
          </motion.p>
        </motion.div>
      </section>

      {/* --- CONTENIDO PRINCIPAL ANIMADO --- */}
      <section ref={contentRef} className="py-24 bg-white">
        <motion.div
          className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12"
          variants={gridContainerVariants}
          initial="hidden"
          animate={contentControls}
        >
          {/* Columna Izquierda: Formulario */}
          <motion.div
            className="lg:col-span-3"
            variants={columnVariants("left")}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-primary mb-8"
            >
              {contact.form.title}
            </motion.h2>
            <form>
              <motion.div variants={itemVariants} className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  {contact.form.fields.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </motion.div>
              <motion.div variants={itemVariants} className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  {contact.form.fields.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </motion.div>
              <motion.div variants={itemVariants} className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  {contact.form.fields.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </motion.div>
              <motion.div variants={itemVariants} className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-700 mb-2"
                >
                  {contact.form.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
              </motion.div>
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full bg-accent text-white font-bold py-4 px-6 rounded-md hover:bg-[#D4AF37] transition-all duration-300"
                >
                  {contact.form.buttonText}
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Columna Derecha: Información */}
          <motion.div
            className="lg:col-span-2"
            variants={columnVariants("right")}
          >
            <div className="bg-neutral p-8 rounded-lg">
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-primary mb-6"
              >
                {contact.info.title}
              </motion.h3>
              <motion.ul
                variants={itemVariants}
                className="space-y-6 text-text-dark"
              >
                {/* ...Items de lista */}
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-accent mr-4 mt-1 flex-shrink-0 text-xl" />
                  <span>{contact.info.address}</span>
                </li>
                <li className="flex items-start">
                  <FaPhone className="text-accent mr-4 mt-1 flex-shrink-0 text-xl" />
                  <span>{contact.info.phone}</span>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-accent mr-4 mt-1 flex-shrink-0 text-xl" />
                  <span>{contact.info.email}</span>
                </li>
                <li className="flex items-start">
                  <FaClock className="text-accent mr-4 mt-1 flex-shrink-0 text-xl" />
                  <span>Lunes a Viernes: 9:00 - 18:00</span>
                </li>
              </motion.ul>
              <motion.div
                variants={itemVariants}
                className="border-t border-gray-200 mt-8 pt-6"
              >
                <h4 className="text-lg font-semibold text-primary mb-4">
                  {contact.social.title}
                </h4>
                <div className="flex space-x-4">
                  {contact.social.links.map((link: unknown) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-gray-500 hover:text-accent transition-colors"
                    >
                      {socialIconMap[link.icon]}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- MAPA ANIMADO --- */}
      <motion.section
        ref={mapRef}
        className="w-full h-[500px]"
        variants={mapVariants}
        initial="hidden"
        animate={mapControls}
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
      </motion.section>
    </div>
  );
};

export default ContactClient;
