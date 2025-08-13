import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white relative">
      {/* Top Glow Line */}
      <div className="h-1 w-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"></div>

      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left - Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-wide">
            Saiful<span className="text-red-500">Islam</span>
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Building creative, modern & user-friendly web experiences.
          </p>
        </div>

        {/* Center - Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm">
          <a href="#about" className="hover:text-red-400 transition-colors">
            About
          </a>
          <a href="#education" className="hover:text-red-400 transition-colors">
            Education
          </a>
          <a href="#projects" className="hover:text-red-400 transition-colors">
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-red-400 transition-colors"
          >
            Experience
          </a>
          <a href="#contact" className="hover:text-red-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right - Social Icons */}
        <div className="flex gap-4">
          {[
            { icon: Facebook, link: '#' },
            { icon: Instagram, link: '#' },
            { icon: Linkedin, link: '#' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="p-2 rounded-full bg-gray-700 hover:bg-red-500 transition-colors"
            >
              <item.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Sub Footer */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Saiful Islam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
