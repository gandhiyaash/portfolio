import React from 'react';
import { ExternalLink, Smartphone, Globe, Database, Shield } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Sipstr Customer App',
      description: 'Mobile application for customers to browse, order, and track alcohol deliveries with real-time updates.',
      image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
      icon: Smartphone,
      color: 'bg-blue-500',
      url: 'https://vendor.sandbox.sipstr.com/'
    },
    {
      title: 'Sipstr Delivery App',
      description: 'Driver-focused mobile app for managing deliveries, navigation, and order fulfillment with location tracking.',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'TypeScript', 'Maps API', 'Real-time'],
      icon: Smartphone,
      color: 'bg-green-500',
      url: 'https://vendor.sandbox.sipstr.com/'
    },
    {
      title: 'Sipstr Vendor Web',
      description: 'Comprehensive vendor management dashboard for inventory, orders, analytics, and business operations.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      icon: Globe,
      color: 'bg-purple-500',
      url: 'https://vendor.sandbox.sipstr.com/'
    },
    {
      title: 'KAPS Admin Dashboard',
      description: 'Enterprise admin panel with advanced analytics, user management, and system configuration tools.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Node.js', 'Dashboard'],
      icon: Shield,
      color: 'bg-indigo-500',
      url: 'https://admin.dev.kaps9.in/login'
    },
    {
      title: 'Bitcoin Policy India',
      description: 'Bitcoin-focused frontend app providing policy insights, regulatory analysis, and community resources for India.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      icon: Globe,
      color: 'bg-orange-500',
      url: 'https://bitcoinpolicy.in'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-2 md:px-0 pt-20">
      <div className="text-center mb-8 md:mb-12 animate-fade-in">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-base md:text-lg text-gray-600 animate-fade-in delay-100 px-2">
          Showcase of frontend development and Bitcoin ecosystem projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in group cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-40 md:h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-3 md:top-4 right-3 md:right-4">
                <div className={`w-6 h-6 md:w-8 md:h-8 ${project.color} rounded-full flex items-center justify-center`}>
                  <project.icon size={12} className="md:w-4 md:h-4 text-white" />
                </div>
              </div>
            </div>
            
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 transition-colors duration-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 md:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.url !== '#' && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 px-4 md:px-6 py-2.5 md:py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <ExternalLink size={14} className="md:w-4 md:h-4" />
                  <span className="text-sm md:text-base">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;