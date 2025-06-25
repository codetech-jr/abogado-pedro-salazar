// src/components/sections/Services.tsx

"use client"; // <-- 1. Marcar como Client Component

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion'; // <-- 2. Importaciones necesarias
import { siteContent } from '@/lib/content';

import { 
    FaFileSignature, FaBuilding, FaGavel, FaLightbulb, 
    FaBalanceScale, FaGlobeAmericas 
} from 'react-icons/fa';

const iconMap: { [key: string]: React.ReactNode } = {
    contratos: <FaFileSignature />,
    societario: <FaBuilding />,
    litigios: <FaGavel />,
    propiedad: <FaLightbulb />,
    cumplimiento: <FaBalanceScale />,
    internacional: <FaGlobeAmericas />,
};

const Services = () => {
    const { title, subtitle, items } = siteContent.services;

    // <-- 3. Hooks para la animación al hacer scroll
    const ref = useRef(null); // Referencia al elemento que queremos observar (la sección entera)
    const isInView = useInView(ref, { once: true, amount: 0.2 }); // Detecta si la sección está visible. `once: true` para que la animación solo se ejecute una vez. `amount: 0.2` activa la animación cuando el 20% del elemento es visible.
    const controls = useAnimation(); // Controles para iniciar la animación manualmente

    // <-- 4. Efecto que se ejecuta cuando el estado de `isInView` cambia
    useEffect(() => {
        if (isInView) {
            // Si la sección es visible, inicia la animación
            controls.start("visible");
        }
    }, [isInView, controls]);

    // <-- 5. Variantes para el contenedor de la cuadrícula y las tarjetas individuales
    const gridContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                // Anima los hijos (las tarjetas) con un pequeño retraso entre cada uno
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 }, // Empiezan invisibles, un poco más abajo y más pequeñas
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1, // Vuelven a su posición y tamaño original
            transition: { duration: 0.5, ease: "easeOut" }
        },
    };

    return (
        // <-- 6. Añadir la referencia al elemento <section>
        <section ref={ref} id="services" className="py-24 bg-neutral overflow-hidden"> {/* overflow-hidden para que el 'y: 50' no cause scroll */}
            <div className="container mx-auto px-6">
                
                {/* Encabezado de la sección (también animado) */}
                <motion.div 
                    className="text-center mb-16"
                    // Animación simple de fade-in-up para el encabezado
                    initial={{ opacity: 0, y: -30 }}
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                >
                    <h2 className="text-4xl font-bold text-primary mb-4">{title}</h2>
                    <p className="text-lg text-text-dark max-w-3xl mx-auto">{subtitle}</p>
                </motion.div>
                
                {/* Cuadrícula (Grid) de servicios */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    // <-- 7. Aplicar las variantes y los controles de animación
                    variants={gridContainerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {items.map((service) => (
                        // <-- 8. Convertir cada tarjeta en un motion.div y aplicar las variantes de tarjeta
                        <motion.div 
                            key={service.title} 
                            variants={cardVariants}
                            className="bg-white p-8 rounded-lg border border-gray-200 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className="text-accent text-5xl mb-6 inline-block">
                                {iconMap[service.iconIdentifier]}
                            </div>
                            
                            <h3 className="text-xl font-semibold text-primary mb-2">
                                {service.title}
                            </h3>
                            
                            <p className="text-text-dark">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Services;