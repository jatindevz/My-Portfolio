import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import pfp1 from '../assets/images/pfp1.png';

const Home = () => {
  const typedTextRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);

    const typed = new Typed(typedTextRef.current, {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI/UX Designer",
        "Backend Engineer",
        "Open Source Contributor"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      backDelay: 1000,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-950">
      <div className="h-full flex flex-col justify-center pl-6 sm:pl-12 md:pl-24 lg:pl-32 relative z-10">
        {/* Heading */}
        <h2
          className={`text-4xl sm:text-5xl font-extrabold mb-3 text-gray-900 dark:text-white transition-all duration-150 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}
        >
          Hi! I'm <span className="text-purple-600 dark:text-purple-400">Jatin</span>
        </h2>

        {/* Typing text */}
        <h1
          className={`text-3xl sm:text-4xl font-bold mb-6 text-gray-700 dark:text-gray-300 transition-all duration-300 delay-100 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}
        >
          I am a <span ref={typedTextRef} className="text-indigo-500" aria-label="typing animation"></span>
        </h1>

        {/* Bio */}
        <p
          className={`max-w-md text-lg font-light mb-8 text-gray-600 dark:text-gray-400 transition-all duration-450 delay-200 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}
        >
          I'm a software developer passionate about building exceptional digital experiences. Explore my portfolio to see the journey.
        </p>

        {/* Action Buttons */}
        <div
          className={`flex space-x-4 transition-all duration-600 delay-300 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}
        >
          <a href="https://github.com/jatindevz" target="_blank" rel="noopener noreferrer">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all">
              GitHub
            </button>
          </a>
          <a href="https://www.linkedin.com/in/jatin-patil-31075b259/" target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all">
              LinkedIn
            </button>
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div 
        className={` hidden md:block absolute right-12 z-10 lg:right-24 bottom-1/2 transform translate-y-1/2 w-72 h-96 rounded-2xl overflow-hidden border-4 border-indigo-500 shadow-xl transition-all duration-500 delay-100 ${
          isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
        }`}
      >
        <img
          src= {pfp1}
          alt="Jatin Patil"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating background shapes */}
      <div className="absolute top-24 right-32 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-xl animate-pulse" />
      <div className="absolute bottom-24 right-24 w-40 h-40 bg-indigo-400 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="hidden md:block absolute top-1/4 right-1/2 w-12 h-12 bg-yellow-300 rounded-lg opacity-10 animate-bounce" style={{ animationDuration: '6s' }} />
      <div className="hidden md:block absolute bottom-1/4 right-1/3 w-8 h-8 bg-green-300 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '2s' }} />
    </section>
  );
};

export default Home;
