import React from 'react';
import { Code, Settings, Bitcoin } from 'lucide-react';

const SummarySection: React.FC = () => {
  const skills = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'React • React Native • Node.js • TypeScript • Next.js',
      color: 'bg-blue-100 text-blue-600',
      bgColor: 'bg-blue-500'
    },
    {
      icon: Settings,
      title: 'Product Engineering',
      description: 'End-to-End Solutions • UX/UI • Architecture • Scalability',
      color: 'bg-purple-100 text-purple-600',
      bgColor: 'bg-purple-500'
    },
    {
      icon: Bitcoin,
      title: 'DevOps & Deployment',
      description: 'CI/CD • AWS • Automation • Production Management',
      color: 'bg-green-100 text-green-600',
      bgColor: 'bg-green-500'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto text-center px-2 md:px-0 pt-20">
      <div className="mb-8 md:mb-12 animate-fade-in">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
          Professional Summary
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6 text-gray-700 text-base md:text-lg leading-relaxed px-2">
          <p className="animate-fade-in delay-100">
            <strong>Full Stack Product Engineer</strong> with expertise across the entire product lifecycle—from ideation and design to development and deployment.
          </p>
          <p className="animate-fade-in delay-200">
            Building complete solutions with React, React Native, TypeScript, Node.js, and Next.js. Strong focus on product thinking, user experience, and delivering features that create real business value.
          </p>
          <p className="animate-fade-in delay-300">
            Leading development initiatives, implementing CI/CD pipelines, and managing production systems on AWS with a product-first mindset.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in group cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`w-10 h-10 md:w-12 md:h-12 ${skill.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4 transition-transform duration-300`}>
              <skill.icon size={20} className="md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1.5 md:mb-2 group-hover:text-indigo-600 transition-colors duration-300">
              {skill.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummarySection;