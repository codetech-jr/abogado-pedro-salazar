// src/lib/content.ts

import type { SiteContent } from "./types"; // Importamos AMBOS tipos desde nuestro archivo central

export const siteContent: SiteContent = {
  hero: {
    title: "Pedro Salazar",
    subtitle1: "Abogado Corporativo",
    subtitle2: "Especializado",
    description:
      "Asesoramiento legal estratégico para empresas que buscan crecer con seguridad jurídica en un entorno empresarial competitivo.",
    ctaButton: "Agendar Consulta",
    secondaryButton: "Conocer Servicios",
  },

  services: {
    title: "Servicios Legales Corporativos",
    subtitle:
      "Ofrezco soluciones legales integrales adaptadas a las necesidades específicas de su empresa.",
    items: [
      {
        slug: "contratos-comerciales",
        iconIdentifier: "contratos",
        title: "Contratos Comerciales",
        description:
          "Redacción, revisión y negociación de contratos para proteger los intereses de su empresa.",
        detailedDescription: [
          "Un contrato sólido es la base de cualquier relación comercial exitosa. Mi enfoque se centra en la creación de documentos claros, precisos y legalmente vinculantes que minimizan los riesgos y maximizan las oportunidades para su negocio.",
          "Desde acuerdos de distribución y licencias hasta contratos de servicio y compraventa, ofrezco un análisis exhaustivo para asegurar que cada cláusula defienda sus intereses y cumpla con la normativa vigente.",
        ],
        keyPoints: [
          "Redacción y negociación de contratos a medida.",
          "Revisión de acuerdos existentes para identificar riesgos.",
          "Asesoría en disputas contractuales y resolución de conflictos.",
          "Adaptación de contratos a la normativa internacional.",
        ],
        bannerImageSrc: "/services/contrato-comercial.png",
      },
      {
        slug: "derecho-societario",
        iconIdentifier: "societario",
        title: "Derecho Societario",
        description:
          "Asesoría integral en la estructura y gobernanza de su empresa.",
        detailedDescription: [
          "La correcta estructuración societaria es fundamental para el crecimiento y la estabilidad de cualquier empresa. Ofrezco asesoramiento desde la constitución de la sociedad, eligiendo la forma jurídica más adecuada, hasta la gestión de operaciones complejas como fusiones, adquisiciones y reestructuraciones.",
          "Trabajo de cerca con juntas directivas y accionistas para la redacción de pactos de socios, la celebración de juntas y la resolución de conflictos internos, garantizando siempre el cumplimiento normativo y la protección de los intereses de todos los involucrados.",
        ],
        keyPoints: [
          "Constitución y disolución de sociedades.",
          "Reformas estatutarias y aumentos de capital.",
          "Asesoramiento en fusiones y adquisiciones (M&A).",
          "Secretaría de consejo y gestión de juntas.",
        ],
        bannerImageSrc: "/services/derecho-societario.png",
      },
      {
        slug: "litigios-corporativos",
        iconIdentifier: "litigios",
        title: "Litigios Corporativos",
        description:
          "Defensa estratégica y representación en disputas empresariales.",
        detailedDescription: [
          "Cuando surgen disputas, una representación legal eficaz es crucial. Mi objetivo es resolver conflictos de la manera más eficiente y favorable para su empresa, ya sea a través de la negociación, la mediación, el arbitraje o, si es necesario, el litigio en los tribunales.",
          "Analizo cada caso meticulosamente para desarrollar una estrategia procesal sólida, defendiendo sus intereses en conflictos contractuales, disputas entre socios, competencia desleal y otras controversias comerciales.",
        ],
        keyPoints: [
          "Análisis de viabilidad y estrategia procesal.",
          "Representación ante tribunales y cortes de arbitraje.",
          "Negociación y redacción de acuerdos transaccionales.",
          "Medidas cautelares y ejecución de sentencias.",
        ],
        bannerImageSrc: "/services/litigios-corporativos.jpg",
      },
      {
        slug: "propiedad-intelectual",
        iconIdentifier: "propiedad",
        title: "Propiedad Intelectual",
        description:
          "Protección y gestión de sus activos intangibles más valiosos.",
        detailedDescription: [
          "En la economía del conocimiento, los activos intangibles como marcas, patentes y derechos de autor son fundamentales. Ofrezco un servicio integral para la protección, gestión y defensa de sus derechos de propiedad intelectual e industrial.",
          "Desde el registro de marcas y patentes hasta la redacción de contratos de licencia y la defensa contra infracciones, aseguro que su innovación y su identidad de marca estén legalmente protegidas.",
        ],
        keyPoints: [
          "Registro y mantenimiento de marcas y patentes.",
          "Contratos de licencia, cesión y franquicia.",
          "Defensa contra la piratería y la competencia desleal.",
          "Protección de secretos comerciales y know-how.",
        ],
        bannerImageSrc: "/services/propiedad-intelectual.png",
      },
      {
        slug: "cumplimiento-normativo",
        iconIdentifier: "cumplimiento",
        title: "Cumplimiento Normativo",
        description:
          "Implementación de programas de compliance para prevenir riesgos.",
        detailedDescription: [
          "Navegar el complejo entorno regulatorio es un desafío constante. Ayudo a las empresas a diseñar e implementar programas de cumplimiento (compliance) efectivos para prevenir riesgos legales y reputacionales.",
          "Realizo auditorías legales, elaboro mapas de riesgos, diseño canales de denuncia y formo a directivos y empleados para fomentar una cultura de ética y cumplimiento en toda la organización.",
        ],
        keyPoints: [
          "Diseño e implementación de modelos de compliance penal.",
          "Prevención de blanqueo de capitales y financiación del terrorismo.",
          "Protección de datos (RGPD).",
          "Auditorías y due diligence en materia de cumplimiento.",
        ],
        bannerImageSrc: "/services/cumplimiento-normativo.jpg",
      },
      {
        slug: "derecho-internacional",
        iconIdentifier: "internacional",
        title: "Derecho Internacional",
        description:
          "Asesoría para la expansión y operaciones en mercados globales.",
        detailedDescription: [
          "La globalización ofrece enormes oportunidades, pero también desafíos legales complejos. Asesoro a empresas en sus operaciones internacionales, desde la redacción de contratos de compraventa internacional hasta la planificación de inversiones extranjeras.",
          "Mi experiencia abarca la elección de la ley aplicable y el foro competente, la resolución de disputas transfronterizas y la adaptación de las operaciones a las diferentes normativas locales, facilitando una expansión segura y exitosa.",
        ],
        keyPoints: [
          "Contratación internacional y uso de Incoterms.",
          "Inversión extranjera directa (IED).",
          "Arbitraje comercial internacional.",
          "Adaptación a tratados y convenios internacionales.",
        ],
        bannerImageSrc: "/services/derecho-internacional.jpg",
      },
    ],
  },

  experience: {
    title: "Experiencia y Trayectoria",
    paragraphs: [
      "Con más de 15 años de experiencia en derecho corporativo, he asesorado a empresas nacionales e internacionales en operaciones complejas y estratégicas, garantizando siempre la máxima seguridad jurídica.",
      "Mi formación académica incluye un Doctorado en Derecho Mercantil por la Universidad Complutense de Madrid y he participado en más de 300 transacciones corporativas exitosas, incluyendo fusiones, adquisiciones y reestructuraciones por valor de más de 500 millones de euros.",
      "Mi compromiso es ofrecer un asesoramiento cercano y de alto valor, funcionando como un socio estratégico para el crecimiento y la protección de su negocio.",
    ],
    cta: {
      text: "Ver CV Completo",
      href: "/cv-pedro-salazar.pdf",
    },
  },

  clientBrands: {
    title: "Empresas que han confiado en mi asesoría",
    substitle: "Una trayectoria de confianza y resultados comprobados.",
    logos: [
      { src: "/brands/alfonzo-rivas.png", alt: "Alfonzo Rivas" },
      { src: "/brands/caledonia.png", alt: "Galletas Caledonia" },
      { src: "/brands/iselitas.png", alt: "Iselitas" },
      { src: "/brands/Pepsi-2023.png", alt: "Pepsi" },
      { src: "/brands/san-cipriano.png", alt: "Alimentos San Cipriano" },
      { src: "/brands/tiendas-montana.png", alt: "Tiendas Montana" },
      { src: "/brands/alfonzo-rivas.png", alt: "Alfonzo Rivas" },
      { src: "/brands/caledonia.png", alt: "Galletas Caledonia" },
      { src: "/brands/iselitas.png", alt: "Iselitas" },
      { src: "/brands/Pepsi-2023.png", alt: "Pepsi" },
      { src: "/brands/san-cipriano.png", alt: "Alimentos San Cipriano" },
      { src: "/brands/tiendas-montana.png", alt: "Tiendas Montana" },
    ],
  },

  testimonials: {
    title: "Lo que dicen mis clientes",
    subtitle:
      "La confianza y los resultados son la base de cada relación profesional.",
    items: [
      {
        quote:
          "La asesoría legal de Pedro ha sido fundamental para nuestra expansión. Su enfoque estratégico y profundo conocimiento del derecho corporativo nos permitió escalar con total seguridad jurídica.",
        name: "Carlos Méndez",
        title: "CEO, Tech Solutions",
        imageSrc: "/testimonials/quote-1.jpg",
      },
      {
        quote:
          "Pedro no solo es un excelente abogado, sino un verdadero socio de negocio. Su capacidad para anticipar problemas y ofrecer soluciones prácticas es un valor incalculable para nuestra empresa.",
        name: "Ana Gómez",
        title: "Directora Financiera, Inversia Group",
        imageSrc: "/testimonials/quote-2.jpg",
      },
      {
        quote:
          "Trabajar con Pedro Salazar nos ha dado la tranquilidad de saber que nuestros intereses están protegidos. Su profesionalismo y atención al detalle son impecables. Lo recomiendo sin dudarlo.",
        name: "Miguel Torres",
        title: "Fundador, Edificar Constructora",
        imageSrc: "/testimonials/quote-3.jpg",
      },
    ],
  },

  contact: {
    title: "Contacto",
    description:
      "Estoy a su disposición para resolver cualquier consulta legal que pueda tener. No dude en ponerse en contacto conmigo.",
    info: {
      title: "Información de Contacto",
      address: "KM 3 Carretera Nacional Charallave, Cúa, Miranda",
      phone: "+34 91 123 45 67",
      email: "pedro.salazar@abogados.com",
    },
    social: {
      title: "Sígueme",
      links: [
        { name: "LinkedIn", href: "#", icon: "linkedin" },
        { name: "Twitter", href: "#", icon: "twitter" },
        { name: "Facebook", href: "#", icon: "facebook" },
      ],
    },
    form: {
      title: "Solicitar Información",
      fields: {
        name: "Nombre completo",
        email: "Email",
        phone: "Teléfono",
        message: "Mensaje",
      },
      buttonText: "Enviar Consulta",
    },
  },

  alliances: {
    title: "Alianzas Estratégicas",
    subtitle:
      "La colaboración con los mejores especialistas es clave para ofrecer un servicio integral. Cuento con una red de confianza de expertos en diversas áreas para abordar los casos más complejos.",
    collaborators: [
      {
        name: "Ana Martínez",
        specialty: "Experta en Derecho Fiscal",
        description:
          "Ana es una reconocida fiscalista con más de 20 años de experiencia. Su colaboración es fundamental para la planificación fiscal de operaciones corporativas complejas, asegurando la máxima eficiencia y el cumplimiento normativo.",
        imageSrc: "/team/team-1.jpg",
      },
      {
        name: "Carlos Mendoza",
        specialty: "Especialista en Derecho Laboral",
        description:
          "Carlos aporta un profundo conocimiento en materia laboral, esencial en procesos de reestructuración, fusiones y adquisiciones. Su asesoramiento garantiza una correcta gestión del capital humano y previene contingencias laborales.",
        imageSrc: "/team/team-2.jpg",
      },
      {
        name: "Lucía Fernández",
        specialty: "Consultora en Propiedad Industrial",
        description:
          "Lucía es una ingeniera y agente de la propiedad industrial. Su expertise técnico es vital para la valoración y protección de patentes y activos tecnológicos en transacciones y litigios de alto valor.",
        imageSrc: "/team/team-3.jpg",
      },
    ],
  },

  aboutMe: {
    kicker: "Mi Filosofía",
    title: "Más que un abogado, un socio estratégico para su negocio",
    description:
      "Entiendo que detrás de cada consulta legal hay un objetivo de negocio. Por eso, mi enfoque va más allá de la simple aplicación de la ley; busco comprender a fondo su empresa para ofrecer soluciones que no solo resuelvan problemas, sino que también impulsen su crecimiento y protejan su futuro.",
    values: [
      {
        title: "Ética Profesional",
        description:
          "Actúo con la máxima integridad y transparencia en cada caso, construyendo relaciones basadas en la confianza y el respeto mutuo.",
      },
      {
        title: "Enfoque en Resultados",
        description:
          "Mi prioridad es alcanzar los objetivos de mis clientes de la manera más eficiente y efectiva, ofreciendo soluciones prácticas y orientadas al negocio.",
      },
    ],
    cta: {
      text: "Contáctanos",
      href: "/#contacto",
    },
  },
};
