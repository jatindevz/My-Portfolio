import React, { useEffect, useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Optional: replace with your routing method

const NotFound = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-950 flex items-center justify-center px-6">
      <div
        className={`text-center max-w-xl transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <h1 className="text-6xl sm:text-7xl font-extrabold text-purple-700 dark:text-purple-400 mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link to="/">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2">
            Go Home <MoveUpRight className="w-4 h-4" />
          </button>
        </Link>
      </div>

      {/* Floating shapes (optional for consistency with other pages) */}
      <div className="absolute top-32 left-24 w-48 h-48 bg-indigo-300 rounded-full opacity-20 blur-2xl animate-pulse" />
      <div className="absolute bottom-24 right-16 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default NotFound;
