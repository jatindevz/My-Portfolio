import React, { useState, useEffect } from 'react';
import { Brush } from 'lucide-react';

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    // Default to light mode if no preference is saved
    return saved ? saved === 'dark' : false;
  });

  useEffect(() => {
    // Apply theme class based on state
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save preference (corrected to save current mode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="relative group">
      <button
        onClick={toggleTheme}
        className="flex flex-col items-center cursor-pointer"
      >
        <div className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
          <Brush className="w-5 h-5" />
        </div>
        <span className="absolute bottom-0 whitespace-nowrap text-xs font-medium text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-bottom-8">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
      </button>
    </div>
  );
};

export default Toggle;