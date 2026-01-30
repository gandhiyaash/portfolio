import React from 'react';
import { BookOpen, Zap, Users, Bitcoin } from 'lucide-react';

const CommunitySection: React.FC = () => {
  const learningAreas = [
    {
      icon: BookOpen,
      title: 'Mastering Bitcoin',
      description: 'Deep diving into Bitcoin fundamentals, cryptography, and protocol mechanics',
      progress: 65,
      color: 'bg-orange-500'
    },
    {
      icon: Zap,
      title: 'Lightning SDK',
      description: 'Exploring Lightning Network development for instant Bitcoin payments',
      progress: 40,
      color: 'bg-yellow-500'
    },
    {
      icon: Users,
      title: 'Bitshala Community',
      description: 'Active member contributing to Bitcoin education and open-source projects',
      progress: 80,
      color: 'bg-orange-600'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto text-center pt-20">
      <div className="mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
          Community & Learning
        </h2>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg mb-12 animate-fade-in delay-100 transition-all duration-300 hover:scale-102 group cursor-pointer">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center transition-transform duration-300">
            <Bitcoin size={32} className="text-white" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
          Product Engineer & Frontend Specialist
        </h3>
        
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8 transition-colors duration-300">
          Crafting seamless user experiences with modern web and mobile technologies. 
          Committed to building products that are intuitive, scalable, and deliver real value to users.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {learningAreas.map((area, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-fade-in group cursor-pointer hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 ${area.color} rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform duration-300`}>
                <area.icon size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                {area.title}
              </h4>
              
              <p className="text-sm text-gray-600 mb-4 leading-relaxed transition-colors duration-300">
                {area.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium text-orange-600">{area.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${area.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-orange-50 rounded-2xl p-6 animate-fade-in delay-200 hover:bg-orange-100 transition-all duration-300 group cursor-pointer hover:shadow-lg mb-16">
        <div className="flex items-center justify-center space-x-2 text-orange-600 transition-colors duration-300">
          <Bitcoin size={20} />
          <span className="font-medium italic">
            "Great products are built with empathy, executed with precision, and refined through iteration."
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;