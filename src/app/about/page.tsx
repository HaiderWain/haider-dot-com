import Layout from '@/components/Layout';
import { Code, Database, Globe, Users } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl sm:text-6xl font-bold text-white mb-6'>About Me</h1>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
          {/* About Text */}
          <div>
            <h2 className='text-3xl font-semibold text-white mb-6'>My Story</h2>
            <div className='space-y-4 text-gray-300 leading-relaxed text-lg'>
              <p>
                I'm a full-stack developer who loves building impactful web applications that solve real-world problems.
                With over 3+ years of experience in modern JavaScript frameworks and full-stack development, I have
                created solutions that are both powerful and user-friendly.
              </p>
              <p>
                After completing my Bachelor's degree in Computer Science in 2021, I spent over 3 years working as a
                software developer, almost always in fast moving startup environments where they allowed me to have a
                direct impact, take ownership of products from idea to deployment, and grow quickly by solving real
                challenges across the entire stack.
              </p>
              <p>
                In 2024, I moved to the UK to pursue a Master’s degree in Advanced Computer Science at the University of
                Essex. This experience improved my technical knowledge and strengthened my ability to approach complex
                problems with a research-driven mindset.
              </p>
              <p>
                I’m very curious about tech. I spend my free time exploring tools, building side projects, reading about
                the latest trends in software development. I also enjoy helping others with their projects and sharing
                what I’ve learned along the way.
              </p>
              <p>
                When not coding, you’ll probably find me gaming. I’m a competitive Dota 2 player ranked among the top
                0.5% globally, or diving into something new that challenges me to grow.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className='text-3xl font-semibold text-white mb-6'>Skills & Technologies</h2>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex items-center space-x-3'>
                <Database className='h-6 w-6 text-purple-400' />
                <span className='text-gray-300 text-lg'>Backend Development</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Code className='h-6 w-6 text-primary-400' />
                <span className='text-gray-300 text-lg'>Frontend Development</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Globe className='h-6 w-6 text-primary-500' />
                <span className='text-gray-300 text-lg'>Web Technologies</span>
              </div>
              <div className='flex items-center space-x-3'>
                <Users className='h-6 w-6 text-purple-500' />
                <span className='text-gray-300 text-lg'>Team Collaboration</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className='mt-8'>
              <h3 className='text-xl font-medium text-white mb-4'>Tech Stack</h3>
              <div className='flex flex-wrap gap-2'>
                {[
                  'JavaScript',
                  'TypeScript',
                  'NestJS',
                  'Node.js',
                  'Next.js',
                  'React',
                  'Jest',
                  'Python',
                  'PHP',
                  'Laravel',
                  'SQL',
                  'PostgreSQL',
                  'MongoDB',
                  'Tailwind CSS',
                  'Git',
                  'AWS',
                  'Kafka',
                ].map(tech => (
                  <span
                    key={tech}
                    className='px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-primary-400 hover:text-black transition-colors'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <p className='text-xl text-gray-300 mb-6'>Interested in working together?</p>
          <a
            href='/contact'
            className='inline-flex items-center px-10 py-4 border border-transparent text-lg font-medium rounded-lg text-black bg-primary-400 hover:bg-primary-500 transition-colors'
          >
            Get In Touch
          </a>
        </div>
      </div>
    </Layout>
  );
}
