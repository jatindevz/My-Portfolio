import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900  dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Navigation Links */}
        <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-300">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/store" className="hover:underline">Store</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-gray-600 dark:text-gray-300">
          <a href="https://x.com/jatinnvw" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="w-5 h-5 hover:text-blue-500" />
          </a>
          <a href="https://github.com/jatindevz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-5 h-5 hover:text-blue-500 dark:hover:text-blue-500" />
          </a>
          <a href="https://www.linkedin.com/in/jatin-patil-31075b259/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 hover:text-blue-700" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
