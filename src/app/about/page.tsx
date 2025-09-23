import Layout from '@/components/Layout'
import { Code, Database, Globe, Users } from 'lucide-react'

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a love for creating meaningful digital experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              My Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I'm a full-stack developer with a passion for building web applications 
                that solve real-world problems. With expertise in modern JavaScript 
                frameworks and a keen eye for design, I create digital experiences 
                that are both functional and beautiful.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or writing about my experiences 
                in web development.
              </p>
              <p>
                I believe in continuous learning and staying up-to-date with the 
                latest trends in technology. Every project is an opportunity to 
                grow and improve.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">Frontend Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <Database className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300">Backend Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="text-gray-700 dark:text-gray-300">Web Technologies</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                <span className="text-gray-700 dark:text-gray-300">Team Collaboration</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Next.js', 'React', 'TypeScript', 'Node.js', 'Python',
                  'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Git', 'AWS'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Interested in working together?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </Layout>
  )
}
