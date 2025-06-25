// src/components/sections/Hero.tsx

"use client"; // <-- 1. Marcar como Client Component

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // <-- 2. Importar motion
import { siteContent } from '@/lib/content';
import heroImage from '@/../public/img/hero-bg/pedro-salazar-placeholder.jpg';

const Hero = () => {
    const { title, subtitle1, subtitle2, description, ctaButton, secondaryButton } = siteContent.hero;

    // <-- 3. Definir variantes para la animación escalonada
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                // El staggerChildren hará que los elementos hijos (items) se animen uno tras otro
                staggerChildren: 0.25, 
            },
        },
    };

    // Variantes para cada elemento de texto/botón
    const itemVariants = {
        hidden: { opacity: 0, y: 20 }, // Empieza invisible y 20px más abajo
        visible: {
            opacity: 1,
            y: 0, // Vuelve a su posición original
            transition: {
                duration: 0.6,
                ease: "easeOut", // Use a valid string for ease
            },
        },
    };

    return (
        <section 
            id="hero" 
            className="relative bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${heroImage.src})` }} 
        >
            <div 
                className="absolute inset-0" 
                style={{ backgroundColor: 'rgba(28, 28, 28, 0.8)' }}
            ></div>
            
            <div className="container mx-auto relative z-10 flex flex-col items-center text-center px-6 py-32 md:py-48">
                
                {/* <-- 4. Envolver el contenido principal en un motion.div para orquestar la animación */}
                <motion.div 
                    className="max-w-2xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* <-- 5. Convertir cada elemento en un componente 'motion' y aplicar las variantes 'item' */}
                    <motion.h1 
                        className="text-5xl lg:text-7xl font-bold mb-2"
                        variants={itemVariants}
                    >
                        {title}
                    </motion.h1>

                    <motion.h2 
                        className="text-3xl lg:text-4xl font-light mb-6"
                        variants={itemVariants}
                    >
                        {subtitle1} <span className="font-semibold text-accent">{subtitle2}</span>
                    </motion.h2>

                    <motion.p 
                        className="text-lg text-gray-200 mb-8"
                        variants={itemVariants}
                    >
                        {description}
                    </motion.p>
                    
                    <motion.div 
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                        variants={itemVariants}
                    >
                        <a 
                            href="https://wa.me/5211234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-accent text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 text-center hover:bg-[#D4AF37]"
                        >
                            {ctaButton}
                        </a>
                        <Link
                            href="/#services" 
                            className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-primary transition-all duration-300 text-center"
                        >
                            {secondaryButton}
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;