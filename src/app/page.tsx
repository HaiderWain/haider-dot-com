'use client';

import Layout from '@/components/Layout';
import ResumeModal from '@/components/ResumeModal';
import { Github, Linkedin, Mail, ChevronDown, ExternalLink } from 'lucide-react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiPython,
  SiPhp,
  SiLaravel,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiAmazonwebservices,
  SiGit,
  SiDocker,
  SiExpress,
  SiAmazons3,
  SiGithubactions,
} from 'react-icons/si';
import { useState, useEffect } from 'react';
import ProjectSlideshow from '@/components/ProjectSlideshow';
import { useTheme } from '@/contexts/ThemeContext';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  images: string[];
  category?: string;
  featured?: boolean;
  date?: string;
}

export default function Home() {
  const { theme } = useTheme();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    // Fetch projects data from API route
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section id='hero' className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8'>
            <span className='inline-block animate-fade-in-up delay-100'>Hello, I&apos;m</span>{' '}
            <span className='inline-block animate-fade-in-up delay-300'>
              <span className='bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent'>
                Haider
              </span>
            </span>
          </h1>

          <p className='text-2xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Full-stack Developer & Tech Enthusiast
          </p>

          <p className='text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed'>
            I build functional, scalable applications that make a difference.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
            <button
              onClick={() => {
                const aboutSection = document.querySelector('#about');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className='group relative inline-flex items-center px-12 py-6 border border-primary-400 text-base font-medium rounded-xl text-primary-400 bg-transparent hover:bg-primary-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-primary-400/25 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 backdrop-blur-sm'
            >
              <span className='relative z-10'>Learn About Me</span>
              <div className='absolute inset-0 rounded-xl bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </button>
            <button
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className='group relative inline-flex items-center px-12 py-6 border border-primary-400 text-base font-medium rounded-xl text-primary-400 bg-transparent hover:bg-primary-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-primary-400/25 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 backdrop-blur-sm'
            >
              <span className='relative z-10'>Get In Touch</span>
              <div className='absolute inset-0 rounded-xl bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </button>
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className='group relative inline-flex items-center px-12 py-6 border border-purple-500 text-base font-medium rounded-xl text-purple-500 bg-transparent hover:bg-purple-500 hover:text-black transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 backdrop-blur-sm'
            >
              <span className='relative z-10'>View Resume</span>
              <div className='absolute inset-0 rounded-xl bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </button>
          </div>

          {/* Social Links */}
          <div className='flex justify-center space-x-6 mb-8'>
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

          {/* Scroll Indicator */}
          <div className='flex justify-center'>
            <button
              onClick={() => {
                const aboutSection = document.querySelector('#about');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className='text-gray-400 hover:text-primary-400 transition-colors animate-bounce'
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-16'>
            <h2 className='text-5xl sm:text-6xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent'>
                About Me
              </span>
            </h2>
          </div>

          {/* Main Content */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* About Text */}
            <div>
              <h3 className='text-3xl font-semibold text-white mb-6'>My Story</h3>
              <div className='space-y-6 text-gray-300 leading-relaxed text-lg'>
                <p>
                  I&apos;m a Computer Science postgraduate from University of Essex, UK and a full-stack developer who
                  loves building impactful web applications that solve real-world problems. With over 3+ years of
                  experience in modern JavaScript/TypeScript frameworks and full-stack development, I have created
                  solutions that are both powerful and user-friendly.
                </p>
                <p>
                  I specialize in building scalable applications using modern technologies and best practices. My
                  expertise spans across frontend and backend development, with a passion for creating seamless user
                  experiences and robust system architectures.
                </p>
              </div>
            </div>

            {/* Technology Stack */}
            <div>
              <h3 className='text-3xl font-semibold text-white mb-8'>Technology Stack</h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                {[
                  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
                  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
                  { name: 'React', Icon: SiReact, color: '#61DAFB' },
                  { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
                  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
                  { name: 'Express.js', Icon: SiExpress, color: '#000000' },
                  { name: 'NestJS', Icon: SiNestjs, color: '#E0234E' },
                  { name: 'Python', Icon: SiPython, color: '#3776AB' },
                  { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
                  { name: 'Laravel', Icon: SiLaravel, color: '#FF2D20' },
                  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
                  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
                  { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
                  { name: 'AWS', Icon: SiAmazonwebservices, color: '#FF9900' },
                  { name: 'Amazon S3', Icon: SiAmazons3, color: '#569A31' },
                  { name: 'Git', Icon: SiGit, color: '#F05032' },
                  { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088FF' },
                  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
                ].map(tech => {
                  const IconComponent = tech.Icon;
                  return (
                    <div
                      key={tech.name}
                      className={`group p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                        theme === 'light'
                          ? 'bg-white/80 border-gray-200/50 hover:border-primary-400/50'
                          : 'bg-gray-800/30 border-gray-700/50 hover:border-primary-400/50'
                      }`}
                    >
                      <div className='flex flex-col items-center space-y-2'>
                        <IconComponent size={24} style={{ color: tech.color }} />
                        <span
                          className={`font-medium text-xs text-center leading-tight ${
                            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                          }`}
                        >
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl sm:text-6xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent'>
                Featured Projects
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
              A showcase of my recent work and side projects that demonstrate my skills and passion for development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-16'>
            {projects
              .filter(project => project.featured)
              .map(project => (
                <div
                  key={project.id}
                  className={`group bg-gradient-to-br backdrop-blur-xl rounded-3xl p-6 shadow-2xl border hover:shadow-primary-400/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:border-primary-400/30 ${
                    theme === 'light'
                      ? 'from-white to-white border-gray-200/50'
                      : 'from-gray-800/50 to-gray-900/50 border-gray-700/50'
                  }`}
                >
                  {/* Project Image */}
                  <div
                    className={`relative mb-6 rounded-2xl overflow-hidden shadow-xl ${
                      theme === 'light' ? 'bg-white' : 'bg-gray-800/50'
                    }`}
                  >
                    <ProjectSlideshow images={project.images} title={project.title} />

                    {/* Hover Overlay with Action Buttons */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm ${
                        theme === 'light'
                          ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/50'
                          : 'bg-black/40'
                      }`}
                    >
                      <div className='flex space-x-4'>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center px-6 py-3 bg-primary-400 text-black rounded-lg font-medium hover:bg-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-400/50 hover:scale-105'
                          >
                            <Github size={18} className='mr-2' />
                            View Code
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center px-6 py-3 border-2 border-primary-400 text-primary-400 rounded-lg font-medium hover:bg-primary-400 hover:text-black transition-all duration-300 backdrop-blur-sm hover:scale-105'
                          >
                            <ExternalLink size={18} className='mr-2' />
                            View Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className='space-y-4'>
                    {/* Category */}
                    {project.category && (
                      <div className='inline-flex items-center'>
                        <span className='px-3 py-1 bg-primary-400/10 text-primary-400 rounded-full text-xs font-medium border border-primary-400/20'>
                          {project.category}
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className='text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300'>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className='text-gray-300 text-sm leading-relaxed'>{project.description}</p>

                    {/* Technologies - Show All */}
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className='px-3 py-1 bg-primary-400/20 text-primary-400 rounded-full text-xs border border-primary-400/30'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-16'>
            <h2 className='text-5xl sm:text-6xl font-bold mb-6'>
              <span className='bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent'>
                Get In Touch
              </span>
            </h2>
            <p className='text-2xl text-gray-300 max-w-2xl mx-auto'>
              Have a project in mind or just want to chat? I&apos;d love to hear from you.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div>
              <h3 className='text-3xl font-semibold text-white mb-8'>Let&apos;s Connect</h3>

              <div className='space-y-6'>
                <a
                  href='mailto:haiderwain.9@gmail.com'
                  className='flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-800/30 transition-all duration-300 group'
                >
                  <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-300'>
                    <Mail className='h-6 w-6 text-primary-400 group-hover:text-white transition-colors' />
                  </div>
                  <div>
                    <h4 className='text-lg font-medium text-white group-hover:text-primary-400 transition-colors'>
                      Email
                    </h4>
                    <p className='text-gray-300 group-hover:text-white transition-colors'>haiderwain.9@gmail.com</p>
                  </div>
                </a>

                <a
                  href='https://linkedin.com/in/haiderwain'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-800/30 transition-all duration-300 group'
                >
                  <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300'>
                    <Linkedin className='h-6 w-6 text-blue-400 group-hover:text-white transition-colors' />
                  </div>
                  <div>
                    <h4 className='text-lg font-medium text-white group-hover:text-blue-400 transition-colors'>
                      LinkedIn
                    </h4>
                    <p className='text-gray-300 group-hover:text-white transition-colors'>linkedin.com/in/haiderwain</p>
                  </div>
                </a>
              </div>

              <div className='mt-8'>
                <p className='text-gray-300 leading-relaxed'>
                  I&apos;m always interested in new opportunities and exciting projects. Whether you have a question,
                  want to collaborate, or just want to say hi, feel free to reach out!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const name = formData.get('name') as string;
                  const email = formData.get('email') as string;
                  const subject = formData.get('subject') as string;
                  const message = formData.get('message') as string;

                  const mailtoLink = `mailto:haiderwain.9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Haider.\n\n${message}\n\nBest regards,\n${name}\n${email}`)}`;
                  window.location.href = mailtoLink;
                }}
                className='space-y-6'
              >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-2'>
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      required
                      className='w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-800 text-white'
                    />
                  </div>

                  <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-2'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      required
                      className='w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-800 text-white'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='subject' className='block text-sm font-medium text-gray-300 mb-2'>
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    required
                    className='w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-800 text-white'
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={6}
                    required
                    className='w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-800 text-white resize-none'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full px-8 py-3 border border-transparent text-base font-medium rounded-lg text-black bg-primary-400 hover:bg-primary-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </Layout>
  );
}
