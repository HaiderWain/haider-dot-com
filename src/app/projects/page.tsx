import Layout from '@/components/Layout';
import { ExternalLink, Github } from 'lucide-react';
import { getAllProjects } from '@/lib/projects';
import ProjectSlideshow from '@/components/ProjectSlideshow';

export default function Projects() {
  const projects = getAllProjects();

  return (
    <Layout>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        {/* Header */}
        <div className='text-center mb-24'>
          <h1 className='text-6xl sm:text-7xl font-bold text-white mb-8'>
            <span className='bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent'>
              Projects
            </span>
          </h1>
          <p className='text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            A collection of projects I&apos;ve worked on from scratch or contributed.
          </p>
        </div>

        {/* Projects List */}
        <div className='space-y-32'>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 min-h-[70vh]`}
            >
              {/* Project Visual */}
              <div className='w-full lg:w-1/2 flex-shrink-0'>
                <div className='relative group'>
                  {/* Floating background effect */}
                  <div className='absolute -inset-4 bg-gradient-to-r from-primary-400/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500'></div>

                  {/* Main image container with slideshow */}
                  <div className='relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 group-hover:border-primary-400/50 transition-all duration-500 shadow-2xl'>
                    <ProjectSlideshow images={project.images} title={project.title} />

                    {/* Overlay on hover - only show if liveUrl exists */}
                    {project.liveUrl && (
                      <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                        <a
                          href={project.liveUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center space-x-2 px-6 py-3 bg-primary-400 text-black rounded-lg font-medium hover:bg-primary-500 transition-colors'
                        >
                          <ExternalLink size={20} />
                          <span>View Live</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className='w-full lg:w-1/2 flex flex-col justify-center space-y-6'>
                {/* Category */}
                {project.category && (
                  <div className='inline-flex items-center'>
                    <span className='px-4 py-2 bg-primary-400/10 text-primary-400 rounded-full text-sm font-medium border border-primary-400/20'>
                      {project.category}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className='text-4xl sm:text-5xl font-bold text-white leading-tight'>{project.title}</h3>

                {/* Description */}
                <p className='text-xl text-gray-300 leading-relaxed'>{project.description}</p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-3'>
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className='px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm font-medium border border-gray-700/50 hover:border-primary-400/50 hover:text-primary-400 transition-all duration-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center justify-center space-x-3 px-8 py-4 bg-primary-400 text-black rounded-lg font-semibold text-lg hover:bg-primary-500 transition-all duration-300 hover:scale-105'
                    >
                      <ExternalLink size={24} />
                      <span>LIVE APP</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center justify-center space-x-3 px-8 py-4 border-2 border-primary-400 text-primary-400 rounded-lg font-semibold text-lg hover:bg-primary-400 hover:text-black transition-all duration-300'
                    >
                      <Github size={24} />
                      <span>LEARN MORE</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-32'>
          <p className='text-2xl text-gray-300 mb-8'>Want to see more of my work?</p>
          <a
            href='https://github.com/HaiderWain'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center space-x-3 px-10 py-4 border-2 border-purple-500 text-purple-500 rounded-lg font-semibold text-lg hover:bg-purple-500 hover:text-black transition-all duration-300'
          >
            <Github size={24} />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </Layout>
  );
}
