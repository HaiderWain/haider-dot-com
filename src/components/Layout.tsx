'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className='min-h-screen bg-black relative'>
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <nav className='fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800 z-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            {/* Logo */}
            <Link href='/' className='text-2xl font-bold text-white'>
              Haider
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex space-x-10'>
              {navItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-primary-400 ${
                    pathname === item.href ? 'text-primary-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden p-2 rounded-md text-gray-300 hover:text-white'
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className='md:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1 border-t border-gray-800'>
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      pathname === item.href
                        ? 'text-primary-400 bg-gray-900'
                        : 'text-gray-300 hover:text-white hover:bg-gray-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
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
