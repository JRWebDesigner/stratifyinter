import { ExternalLink, Github, ChevronRight } from 'lucide-react';
export default function Proyects(){
  const proyects=[
    {
      id: 'ecommerce',
      title: 'E-commerce Platform',
      description: 'A fully responsive e-commerce platform with cart functionality, product filtering, and user authentication.',
      image: 'https://images.pexels.com/photos/6956/person-woman-apple-laptop.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Redux', 'Tailwind CSS', 'Firebase'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'dashboard',
      title: 'Analytics Dashboard',
      description: 'Interactive dashboard with real-time data visualization, filtering capabilities, and responsive design.',
      image: 'https://images.pexels.com/photos/7654049/pexels-photo-7654049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'D3.js', 'TypeScript', 'Styled Components'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'social',
      title: 'Social Media App',
      description: 'A social platform with real-time messaging, profile customization, and content sharing features.',
      image: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'travel',
      title: 'Travel Planner',
      description: 'An application for planning trips with interactive maps, itinerary building, and expense tracking.',
      image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Vue.js', 'Vuex', 'Leaflet', 'Firebase'],
      demoUrl: '#',
      githubUrl: '#',
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
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-full transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
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
