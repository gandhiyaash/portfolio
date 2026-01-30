import React from 'react';
import { Calendar } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: 'Lead Frontend Engineer',
      company: 'Evolotek.ai',
      location: 'Mumbai, India',
      period: 'Jun 2024 – Present',
      color: 'bg-orange-500',
      achievements: [
        'Spearheading UI/UX design and development for web and mobile apps using React, Next.js, and React Native',
        'Collaborating across the stack with Node.js + APIs while specializing in frontend delivery',
        'Established CI/CD pipelines, Dockerized deployments, and automation for faster, reliable releases',
        'Designed scalable, intuitive dashboards and client-facing portals improving user engagement'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Barclays',
      location: 'New Jersey, US',
      period: 'Jun 2023 – May 2024',
      color: 'bg-blue-500',
      achievements: [
        'Delivered scalable enterprise apps with CI/CD pipelines, automation, and cloud deployments',
        'Implemented Dockerized services and automated pipelines to accelerate production releases',
        'Contributed to frontend dashboards, improving usability and system reliability'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto pt-20">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500 bg-clip-text text-transparent">
          Experience
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-102 animate-fade-in group cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${exp.color} rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300`}>
                  <Calendar size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-orange-500 font-medium transition-colors duration-300">
                    {exp.company}
                  </p>
                  <p className="text-gray-600">
                    {exp.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-orange-500 font-medium mt-2 md:mt-0">
                <Calendar size={16} className="mr-2" />
                {exp.period}
              </div>
            </div>

            <ul className="space-y-3">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;