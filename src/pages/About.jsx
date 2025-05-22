


import React, { useState, useEffect } from 'react';
import { FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Twitter, Github, MoveUpRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-b from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-950 pb-10">
      <div 
        className={`max-w-5xl mx-auto w-full transform transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="text-center py-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-950 dark:text-purple-200">
            About <span className="text-purple-600 dark:text-purple-400">Me</span>
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white p-6 md:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column - Bio & Achievements */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl md:text-4xl font-bold">Jatin Patil</h2>
                  <div className="hidden sm:flex space-x-4">
                    <SocialButton icon={<FaLinkedin className="w-5 h-5" />} label="LinkedIn" link="https://www.linkedin.com/in/jatin-patil-31075b259/" />
                    <SocialButton icon={<Twitter className="w-5 h-5" />} label="Twitter" link="https://x.com/jatinnvw"/>
                    <SocialButton icon={<Github className="w-5 h-5" />} label="Github" link="https://github.com/jatindevz"/>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl">
                  <ul className="space-y-3 text-lg">
                    <AchievementItem text="Nothing to show" />
                    <AchievementItem text="Nothing to show" />
                    <AchievementItem text="Nothing to show" />
                    <AchievementItem text="Nothing to show" />
                    <AchievementItem text="Nothing to show" />
                  </ul>
                </div>
                
                <div className="relative p-4 bg-white/5 rounded-xl hover:bg-white/10 cursor-pointer">
                  <div className="text-4xl font-serif absolute top-1 left-2 opacity-50">"</div>
                  <p className="text-lg italic pl-6 pr-6">
                    it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </p>
                  <div className="text-4xl font-serif absolute bottom-1 right-2 opacity-50">"</div>
                </div>
                
              
              </div>
              
              {/* Right Column - Profile Image & Social Buttons */}
              <div className="lg:w-72 flex flex-col items-center">
                <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-2xl border-4 border-white/30 shadow-lg mb-6 group">
                  <div className="relative h-full">
                    <img 
                      src="src/assets/images/pfp.png" 
                      alt="Jatin Patil" 
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/20 transition-all duration-300"></div>
                  </div>
                </div>
                
                <ContactButton />
              </div>
            </div>
          </div>
          
          {/* Additional Content Section */}
          <div className="p-6 md:p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-4">Current Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ProjectCard 
                title="Nike Shoe Store" 
                description="An e-commerce platform for buying Nike shoes."       
                link = "https://e-com-web-page-fe.vercel.app/"         
              />
              {/* <ProjectCard 
                title="Algorithm Masterclass" 
                description="Advanced algorithm training for top competitive programmers."
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AchievementItem = ({ text }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0 pt-1">
      <div className="w-2 h-2 bg-purple-300 rounded-full mr-2"></div>
    </div>
    <div className="font-medium">{text}</div>
  </li>
);

const SocialButton = ({ icon, label,link }) => (
  <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white flex items-center space-x-2" onClick={() => window.open(link, '_blank')}>
    {icon}
    {label && <span className="text-sm hidden md:inline">{label}</span>}
    
  </button>
);

const ContactButton = () => (
  <button className="flex items-center gap-2 px-6 py-3 bg-white text-purple-900 rounded-full font-medium hover:bg-purple-50 transition-colors shadow-md hover:shadow-lg">
    <span>Contact Me</span>
    <MoveUpRight className="w-4 h-4" />
  </button>
);

const ProjectCard = ({ title, description,link }) => (
  <div className="bg-purple-50 dark:bg-gray-700/30 rounded-xl p-5 hover:shadow-md transition-all border border-transparent hover:border-purple-200 dark:hover:border-purple-800">
    <h4 className="font-bold text-lg text-purple-900 dark:text-purple-300 mb-2">{title}</h4>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
    <div className="mt-4">
      <button className="flex items-center text-sm font-medium text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 transition-colors" >
      <a href= {link} target="_blank" rel="noopener noreferrer">
        <span>Visit</span>
      </a>
        <MoveUpRight className="w-3 h-3 ml-1" />
      </button>
    </div>
  </div>
);

export default About;