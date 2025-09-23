import Layout from '@/components/Layout'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

export default function Blog() {
  // This would typically come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14',
      excerpt: 'Learn the fundamentals of Next.js 14 and how to build modern web applications with the latest features.',
      date: '2024-01-15',
      readTime: '5 min read',
      slug: 'getting-started-nextjs-14'
    },
    {
      id: 2,
      title: 'Building Responsive UIs with Tailwind CSS',
      excerpt: 'A comprehensive guide to creating beautiful, responsive user interfaces using Tailwind CSS.',
      date: '2024-01-10',
      readTime: '7 min read',
      slug: 'responsive-ui-tailwind-css'
    },
    {
      id: 3,
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging trends and technologies that will shape the future of web development.',
      date: '2024-01-05',
      readTime: '6 min read',
      slug: 'future-web-development'
    }
  ]

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts on technology, development, and the ever-evolving world of web
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination would go here */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            More posts coming soon...
          </p>
        </div>
      </div>
    </Layout>
  )
}
