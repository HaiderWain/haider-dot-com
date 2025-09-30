'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
        theme === 'light'
          ? 'bg-white/80 border-gray-200/50 hover:bg-gray-50/80 hover:border-gray-300/50'
          : 'bg-gray-800/50 border-gray-700/50 hover:bg-primary-400/20 hover:border-primary-400/50'
      }`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Sun size={20} className='text-yellow-400' /> : <Moon size={20} className='text-blue-400' />}
    </button>
  );
}
