import React, { useEffect, useState } from 'react';
import { MoveUpRight } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen pt-24 px-4 bg-gradient-to-b from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-950 pb-16">
      <div
        className={`max-w-5xl mx-auto w-full transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* Heading */}
        <div className="text-center py-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-950 dark:text-purple-200">
            My <span className="text-purple-600 dark:text-purple-400">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-6">
            Current Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard 
                title="Nike Shoe Store" 
                description="An e-commerce platform for buying Nike shoes."                
              />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description }) => (
  <div className="bg-purple-50 dark:bg-gray-700/30 rounded-xl p-5 hover:shadow-md transition-all border border-transparent hover:border-purple-200 dark:hover:border-purple-800">
    <h4 className="font-bold text-lg text-purple-900 dark:text-purple-300 mb-2">{title}</h4>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
    <div className="mt-4">
      <button className="flex items-center text-sm font-medium text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors">
        <span>Learn More</span>
        <MoveUpRight className="w-3 h-3 ml-1" />
      </button>
    </div>
  </div>
);

export default Projects;
