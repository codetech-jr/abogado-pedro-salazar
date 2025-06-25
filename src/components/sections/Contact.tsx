// src/components/sections/Contact.tsx

"use client"; // <-- 1. Marcar como Client Component

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"; // <-- 2. Importar herramientas de Framer Motion
import { siteContent } from "@/lib/content";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const socialIconMap: { [key: string]: React.ReactNode } = {
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
  facebook: <FaFacebook />,
};

const Contact = () => {
  const { title, description, info, social, form } = siteContent.contact;

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
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const columnVariants = (direction: "left" | "right") => ({
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.1, // Anima los elementos internos de forma escalonada
      },
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

  return (
    // <-- 5. Añadir la referencia y overflow-hidden
    <section
      ref={ref}
      id="contacto"
      className="bg-primary py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden shadow-2xl"
          // <-- 6. Orquestar la animación de las dos columnas
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
        >
          <motion.div
            className="bg-primary text-white p-12 md:p-16 flex flex-col"
            variants={columnVariants("left")} // <-- 7. Animar la columna izquierda
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-4"
            >
              {title}
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-24 border-b-4 border-accent mb-8"
            ></motion.div>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-12"
            >
              {description}
            </motion.p>

            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-6"
            >
              {info.title}
            </motion.h3>
            <motion.ul variants={itemVariants} className="space-y-4 text-lg">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-accent mr-4" />
                <span>{info.address}</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-accent mr-4" />
                <span>{info.phone}</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-accent mr-4" />
                <span>{info.email}</span>
              </li>
            </motion.ul>

            <div className="mt-auto pt-8">
              {" "}
              {/* Empuja las redes sociales hacia abajo */}
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-semibold mb-4"
              >
                {social.title}
              </motion.h3>
              <motion.div variants={itemVariants} className="flex space-x-4">
                {social.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-gray-400 hover:text-accent transition-colors"
                  >
                    {socialIconMap[link.icon]}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-12 md:p-16 text-primary"
            variants={columnVariants("right")} // <-- 8. Animar la columna derecha
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold mb-8"
            >
              {form.title}
            </motion.h3>
            <form>
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="name" className="block text-sm font-bold mb-2">
                  {form.fields.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </motion.div>
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  {form.fields.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </motion.div>
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="phone" className="block text-sm font-bold mb-2">
                  {form.fields.phone}
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
                  className="block text-sm font-bold mb-2"
                >
                  {form.fields.message}
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
                  className="w-full bg-accent text-white font-bold py-4 px-6 rounded-md transition-all duration-300 hover:bg-[#D4AF37] hover:scale-105"
                >
                  {form.buttonText}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
