import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I am{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Haider
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Full Stack Developer & Tech Enthusiast
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            I build beautiful, functional web applications with modern technologies. 
            Passionate about creating digital experiences that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Read more about me
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Recent Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Check out my latest work and side projects
              </p>
              <a
                href="/projects"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                View Projects →
              </a>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Latest Blog Posts
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Thoughts on technology, development, and more
              </p>
              <a
                href="/blog"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Read Blog →
              </a>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Let's discuss your next project
              </p>
              <a
                href="/contact"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Contact Me →
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
