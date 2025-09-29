'use client';

import Layout from '@/components/Layout';
import ResumeModal from '@/components/ResumeModal';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  return (
    <Layout>
      {/* Hero Section */}
      <section className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8'>
            Hello, I&apos;m{' '}
            <span className='bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent'>
              Haider
            </span>
          </h1>

          <p className='text-2xl sm:text-3xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Full Stack Developer & Tech Enthusiast
          </p>

          <p className='text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed'>
            I build functional, scalable applications with modern technologies. Passionate about creating experiences
            that make a difference.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center mb-16'>
            <a
              href='/about'
              className='inline-flex items-center px-10 py-4 border border-transparent text-lg font-medium rounded-lg text-black bg-primary-400 hover:bg-primary-500 transition-colors'
            >
              Read more about me
            </a>
            <a
              href='/contact'
              className='inline-flex items-center px-10 py-4 border border-primary-400 text-lg font-medium rounded-lg text-primary-400 bg-transparent hover:bg-primary-400 hover:text-black transition-colors'
            >
              Contact me
            </a>
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className='inline-flex items-center px-10 py-4 border border-purple-500 text-lg font-medium rounded-lg text-purple-500 bg-transparent hover:bg-purple-500 hover:text-black transition-colors'
            >
              View Resume
            </button>
          </div>

          {/* Social Links */}
          <div className='flex justify-center space-x-6'>
            <a
              href='https://github.com/HaiderWain'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-primary-400 transition-colors'
            >
              <Github size={32} />
            </a>
            <a
              href='https://linkedin.com/in/haiderwain'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-primary-400 transition-colors'
            >
              <Linkedin size={32} />
            </a>
            <a href='mailto:haiderwain.9@gmail.com' className='text-gray-400 hover:text-primary-400 transition-colors'>
              <Mail size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className='py-20 bg-gray-900'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <h3 className='text-2xl font-semibold text-white mb-4'>Recent Projects</h3>
              <p className='text-gray-400 mb-6'>Check out my latest work and side projects</p>
              <a
                href='/projects'
                className='text-primary-400 hover:text-primary-300 hover:underline font-medium text-lg'
              >
                View Projects →
              </a>
            </div>

            <div className='text-center'>
              <h3 className='text-2xl font-semibold text-white mb-4'>Latest Blog Posts</h3>
              <p className='text-gray-400 mb-6'>Thoughts on technology, development, random opinions and more</p>
              <a href='/blog' className='text-primary-400 hover:text-primary-300 hover:underline font-medium text-lg'>
                Read Blog →
              </a>
            </div>

            <div className='text-center'>
              <h3 className='text-2xl font-semibold text-white mb-4'>Get In Touch</h3>
              <p className='text-gray-400 mb-6'>Let&apos;s discuss your next project</p>
              <a
                href='/contact'
                className='text-primary-400 hover:text-primary-300 hover:underline font-medium text-lg'
              >
                Contact Me →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </Layout>
  );
}
