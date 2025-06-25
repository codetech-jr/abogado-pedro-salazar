"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence} from 'framer-motion'; // <-- 1. Importar de Framer Motion

import logo from '@/../public/img/logo/Logo-ps-negro-abogado.png'; 

const Header = () => {
    const navLinks = [
        { href: "/", label: "Inicio" },
        { 
            label: "Áreas de Atención", 
            href: "/areas-de-atencion", // <-- Es buena práctica que el link principal también lleve a una página
            submenu: [
                { href: "/areas-de-atencion/contratos-comerciales", label: "Contratos Comerciales" },
                { href: "/areas-de-atencion/derecho-societario", label: "Derecho Societario" },
                { href: "/areas-de-atencion/litigios-corporativos", label: "Litigios Corporativos" },
                { href: "/areas-de-atencion/propiedad-intelectual", label: "Propiedad Intelectual" },
                { href: "/areas-de-atencion/cumplimiento-normativo", label: "Cumplimiento Normativo" },
                { href: "/areas-de-atencion/derecho-internacional", label: "Derecho Internacional" },
            ]
        },
        { href: "/alianzas-estrategicas", label: "Alianzas Estratégicas" },
        { href: "/ubicacion", label: "Ubicación" },
        { href: "/contacto", label: "Contacto" },
    ];

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // <-- 2. Definir variantes de animación para los menús
    const menuVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeInOut" } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeInOut" } }
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeInOut" } }
    };


    return (
        <header className="bg-white text-primary shadow-md sticky top-0 z-50 h-20">
            <div className="container mx-auto flex justify-between items-center h-full px-4">
                
                <div>
                    <Link href="/">
                        <Image 
                            src={logo}
                            alt="Logo de Pedro Salazar Abogado"
                            width={250}
                            height={50}
                            priority
                            className="h-auto"
                        />
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-12">
                    <nav>
                        <ul className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <div 
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() => link.submenu && setOpenDropdown(link.label)}
                                    onMouseLeave={() => link.submenu && setOpenDropdown(null)}
                                >
                                    <li>
                                        <Link 
                                            href={link.href}
                                            className="flex items-center font-medium text-primary hover:text-accent transition-colors duration-300 py-4"
                                        >
                                            {link.label}
                                            {link.submenu && (
                                                // <-- 3. Animar el ícono de flecha
                                                <motion.span
                                                    animate={{ rotate: openDropdown === link.label ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <FaChevronDown className="ml-2 h-3 w-3" />
                                                </motion.span>
                                            )}
                                        </Link>
                                    </li>

                                    {/* <-- 4. Envolver el menú desplegable con AnimatePresence */}
                                    <AnimatePresence>
                                        {link.submenu && openDropdown === link.label && (
                                            <motion.ul 
                                                className="absolute top-full left-0 mt-0 w-64 bg-white text-primary rounded-md shadow-lg py-2"
                                                variants={menuVariants} // <-- Aplicar variantes
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                {link.submenu.map((sublink) => (
                                                    <li key={sublink.label}>
                                                        <Link 
                                                            href={sublink.href}
                                                            className="block px-4 py-2 text-sm hover:bg-neutral hover:text-accent transition-colors duration-200"
                                                            onClick={() => setOpenDropdown(null)}
                                                        >
                                                            {sublink.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </ul>
                    </nav>

                    <a 
                        href="https://wa.me/5211234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent text-white font-bold py-2 px-6 rounded-md transition-all duration-300 hover:bg-[#D4AF37] hover:scale-105" // <-- Pequeño efecto de escala
                    >
                        Agendar Consulta
                    </a>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-primary text-2xl z-20 relative">
                        {/* <-- 5. Animar el cambio de icono */}
                        <AnimatePresence mode="wait">
                            {isMobileMenuOpen ? (
                                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                    <HiX />
                                </motion.div>
                            ) : (
                                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                    <HiMenu />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* <-- 6. Animar el menú móvil */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        className="md:hidden bg-white w-full absolute left-0 top-full shadow-lg border-t border-gray-200"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <nav className="flex flex-col p-4">
                            {navLinks.map((link) => (
                                <div key={link.label} className="py-2">
                                    <Link
                                        href={link.href}
                                        className="text-primary font-semibold hover:text-accent transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                    {link.submenu && (
                                        <ul className="pl-4 mt-2 space-y-2">
                                            {link.submenu.map((sublink) => (
                                                <li key={sublink.label}>
                                                    <Link 
                                                        href={sublink.href}
                                                        className="text-gray-600 hover:text-accent transition-colors duration-200"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {sublink.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                            <a 
                                href="https://wa.me/5211234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-accent text-white font-bold py-3 px-6 rounded-md text-center mt-4 hover:bg-[#D4AF37] transition-colors duration-300"
                            >
                                Agendar Consulta
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;