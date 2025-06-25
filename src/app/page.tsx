import React from 'react';

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import AboutMe from "@/components/sections/AboutMe";
import Experience from "@/components/sections/Experience";
import ClientsBrands from "@/components/sections/ClientsBrands";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
    <main>
      <Hero />
      <Services />
      <AboutMe />
      <Experience />
      <ClientsBrands />
      <Testimonials />
      <Contact />
    </main>
    </>
  );
}
