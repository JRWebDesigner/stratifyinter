import { ExternalLink, ChevronRight } from 'lucide-react';
export default function Proyects(){
  const proyects=[
    {
      id: 'ecommerce',
      title: 'E-commerce Desechables Bacan',
      description: 'Una plataforma de comercio electrónico totalmente interactiva con funcionalidad de carrito y filtrado de productos.',
      image: '/bacan.png',
      tags: [''],
      demoUrl: 'https://desechables-bacan.com/',
    },
    {
      id: 'dashboard',
      title: 'AJS eventos',
      description: 'Página web profesional para una empresa especializada en la organización de eventos sociales y corporativos. El sitio está enfocado en captar clientes potenciales a través de una estructura clara, diseño atractivo y contenido optimizado para SEO.',
      image: '/ajs.png',
      tags: [''],
      demoUrl: 'https://ajseventos.com/',
    },
    {
      id: 'social',
      title: 'Sunrise Residence',
      description: 'Página web multilingüe (español, inglés, italiano y francés) para promocionar un departamento turístico en Albà, Italia. El sitio incluye galería de fotos, detalles del alojamiento, mapa interactivo y formulario de contacto.',
      image: '/sunrise.png',
      tags: [''],
      demoUrl: '#',
    },
    {
      id: 'travel',
      title: 'Innovations biosupply ',
      description: 'Sitio web para una empresa importadora de productos de laboratorio, con catálogo dinámico y diseño profesional.',
      image: '/biosupply.png',
      tags: [''],
      demoUrl: 'https://www.n-innovationsbiosupply.com/',
    },
  ]
  return(
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-6'>
      {proyects.map((project) => (
        <div
        key={project.id}
        className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        <div className="relative h-60 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6">
              <div className="flex space-x-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
                
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={`${project.id}-${tag}`}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#"
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            View Details
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
      ))}
    </div>
  )
}
