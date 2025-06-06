import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Transform Your Digital Presence',
    'hero.subtitle': 'Professional web development solutions that drive results. We create stunning, high-performance websites that captivate your audience and grow your business.',
    'hero.cta.primary': 'Start Your Project',
    'hero.cta.secondary': 'View Our Work',
    'hero.pros.delivery':'Fast Delivery',
    'hero.pros.deliverypros':'Quick turnaround times without compromising quality',
    'hero.pros.design':'Modern Design',
    'hero.pros.designdesc':'Cutting-edge designs that stand out from the crowd',
    'hero.pros.support':'24/7 Support',
    'hero.pros.supportdesc':'Round-the-clock support for all your needs',
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive web development solutions tailored to your needs',
    'services.web.title': 'Custom Web Development',
    'services.web.desc': 'Bespoke websites built with cutting-edge technologies, optimized for performance and user experience.',
    'services.ecommerce.title': 'E-Commerce Solutions',
    'services.ecommerce.desc': 'Complete online stores with secure payment processing, inventory management, and analytics.',
    'services.mobile.title': 'Mobile-First Design',
    'services.mobile.desc': 'Responsive designs that look perfect on every device, from smartphones to desktop computers.',
    'services.seo.title': 'SEO Optimization',
    'services.seo.desc': 'Search engine optimization to increase your visibility and drive organic traffic to your website.',
    'services.maintenance.title': 'Maintenance & Support',
    'services.maintenance.desc': 'Ongoing support, updates, and maintenance to keep your website running smoothly.',
    'services.consulting.title': 'Digital Strategy',
    'services.consulting.desc': 'Strategic consulting to align your digital presence with your business objectives.',
    'services.ready.title':'¿Ready to discuss your project?',
    'services.ready.boton':'Get Started Today',
    // About
    'about.title': 'About Stratify',
    'about.subtitle': 'Your trusted partner in digital transformation',
    'about.desc1': 'At Stratify, we believe every business deserves a digital presence that truly represents their brand and drives growth. Our team of experienced developers and designers work closely with clients to deliver exceptional web solutions.',
    'about.desc2': 'With years of experience in the industry, we\'ve helped hundreds of businesses establish their online presence and achieve their digital goals through innovative, scalable, and user-focused web solutions.',
    'about.stats.projects': 'Projects Completed',
    'about.stats.clients': 'Happy Clients',
    'about.stats.experience': 'Years Experience',
    'about.stats.satisfaction': 'Client Satisfaction',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your project? Let\'s discuss how we can help you achieve your goals.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company (Optional)',
    'contact.form.service': 'Service Needed',
    'contact.form.service.web': 'Web Development',
    'contact.form.service.ecommerce': 'E-Commerce',
    'contact.form.service.design': 'Design',
    'contact.form.message': 'Project Details',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.desc': 'Get in touch with us through any of these channels.',
    'contact.links.phone': 'Phone',
    'contact.response.title': 'Quick Response',
    'contact.response.respond':'We typically respond to all inquiries within 24 hours during business days.',
    // Footer
    'footer.desc': 'Professional web development solutions that drive results and grow your business.',
    'footer.services.title': 'Services',
    'footer.company.title': 'Company',
    'footer.company.about': 'About Us',
    'footer.company.careers': 'Careers',
    'footer.company.blog': 'Blog',
    'footer.support.title': 'Support',
    'footer.support.help': 'Help Center',
    'footer.support.contact': 'Contact Us',
    'footer.support.faq': 'FAQ',
    'footer.rights': 'All rights reserved.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Transforma Tu Presencia Digital',
    'hero.subtitle': 'Soluciones profesionales de desarrollo web que generan resultados. Creamos sitios web impresionantes y de alto rendimiento que cautivan a tu audiencia y hacen crecer tu negocio.',
    'hero.cta.primary': 'Iniciar Proyecto',
    'hero.cta.secondary': 'Ver Nuestro Trabajo',
    'hero.pros.delivery':'Entrega rápida',
    'hero.pros.deliverypros':'Plazos de entrega rápidos sin comprometer la calidad',
    'hero.pros.design':'Diseño moderno',
    'hero.pros.designdesc':'Diseños de vanguardia que destacan entre la multitud',
    'hero.pros.support':'Soporte 24/7',
    'hero.pros.supportdesc':'Soporte las 24 horas para todas tus necesidades',
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones integrales de desarrollo web adaptadas a tus necesidades',
    'services.web.title': 'Desarrollo Web Personalizado',
    'services.web.desc': 'Sitios web a medida construidos con tecnologías de vanguardia, optimizados para rendimiento y experiencia de usuario.',
    'services.ecommerce.title': 'Soluciones E-Commerce',
    'services.ecommerce.desc': 'Tiendas online completas con procesamiento seguro de pagos, gestión de inventario y analíticas.',
    'services.mobile.title': 'Diseño Mobile-First',
    'services.mobile.desc': 'Diseños responsivos que se ven perfectos en cualquier dispositivo, desde smartphones hasta computadoras de escritorio.',
    'services.seo.title': 'Optimización SEO',
    'services.seo.desc': 'Optimización para motores de búsqueda para aumentar tu visibilidad y atraer tráfico orgánico a tu sitio web.',
    'services.maintenance.title': 'Mantenimiento y Soporte',
    'services.maintenance.desc': 'Soporte continuo, actualizaciones y mantenimiento para mantener tu sitio web funcionando sin problemas.',
    'services.consulting.title': 'Estrategia Digital',
    'services.consulting.desc': 'Consultoría estratégica para alinear tu presencia digital con tus objetivos de negocio.',
    'services.ready.title':'¿Listo para hablar sobre tu proyecto?',
    'services.ready.boton':'¡Empieza hoy!',
    // About
    'about.title': 'Acerca de Stratify',
    'about.subtitle': 'Tu socio de confianza en transformación digital',
    'about.desc1': 'En Stratify, creemos que cada negocio merece una presencia digital que realmente represente su marca y impulse el crecimiento. Nuestro equipo de desarrolladores y diseñadores experimentados trabaja estrechamente con los clientes para entregar soluciones web excepcionales.',
    'about.desc2': 'Con años de experiencia en la industria, hemos ayudado a cientos de empresas a establecer su presencia online y lograr sus objetivos digitales a través de soluciones web innovadoras, escalables y centradas en el usuario.',
    'about.stats.projects': 'Proyectos Completados',
    'about.stats.clients': 'Clientes Satisfechos',
    'about.stats.experience': 'Años de Experiencia',
    'about.stats.satisfaction': 'Satisfacción del Cliente',
    
    // Contact
    'contact.title': 'Contáctanos',
    'contact.subtitle': '¿Listo para comenzar tu proyecto? Hablemos sobre cómo podemos ayudarte a lograr tus objetivos.',
    'contact.form.name': 'Nombre Completo',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.company': 'Empresa (Opcional)',
    'contact.form.service': 'Servicio Requerido',
    'contact.form.service.web': 'Desarrollo Web',
    'contact.form.service.ecommerce': 'E-Commerce',
    'contact.form.service.design': 'Diseño',
    'contact.form.message': 'Detalles del Proyecto',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.info.title': 'Información de Contacto',
    'contact.info.desc': 'Ponte en contacto con nosotros a través de cualquiera de estos canales.',
    'contact.links.phone': 'Celular/Telefono',
    'contact.response.title': 'Respuesta rápida',
    'contact.response.respond':'Normalmente respondemos a todas las consultas en un plazo de 24 horas durante los días laborables.',
    // Footer
    'footer.desc': 'Soluciones profesionales de desarrollo web que generan resultados y hacen crecer tu negocio.',
    'footer.services.title': 'Servicios',
    'footer.company.title': 'Empresa',
    'footer.company.about': 'Nosotros',
    'footer.company.careers': 'Carreras',
    'footer.company.blog': 'Blog',
    'footer.support.title': 'Soporte',
    'footer.support.help': 'Centro de Ayuda',
    'footer.support.contact': 'Contáctanos',
    'footer.support.faq': 'Preguntas Frecuentes',
    'footer.rights': 'Todos los derechos reservados.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
