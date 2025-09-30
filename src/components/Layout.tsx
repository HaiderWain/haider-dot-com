'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    // { name: 'Blog', href: '/blog' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <div className='min-h-screen bg-black dark:bg-black light:bg-white relative'>
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full backdrop-blur-md border-b z-50 ${
          theme === 'light' ? 'bg-white/80 border-gray-200/50' : 'bg-black/80 border-gray-800/50'
        }`}
      >
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#hero')}
              className='text-2xl font-bold bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent hover:from-primary-300 hover:to-purple-400 transition-all duration-300'
            >
              Haider Wain
            </button>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-10'>
              {navItems.map(item => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-base font-medium transition-colors hover:text-primary-400 ${
                    theme === 'light' ? 'text-gray-700 hover:text-black' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className='md:hidden flex items-center space-x-2'>
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-colors ${
                  theme === 'light' ? 'text-gray-700 hover:text-black' : 'text-gray-300 hover:text-white'
                }`}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className='md:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1 border-t border-gray-800'>
                {navItems.map(item => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      theme === 'light'
                        ? 'text-gray-700 hover:text-black hover:bg-gray-100'
                        : 'text-gray-300 hover:text-white hover:bg-gray-900'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className='pt-20 relative z-10'>{children}</main>
    </div>
  );
};

export default Layout;
