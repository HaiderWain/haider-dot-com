import Layout from '@/components/Layout'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

// This would typically come from a CMS or API
const getBlogPost = (slug: string) => {
  const posts = {
    'getting-started-nextjs-14': {
      title: 'Getting Started with Next.js 14',
      date: '2024-01-15',
      readTime: '5 min read',
      content: `
        <h2>Introduction</h2>
        <p>Next.js 14 brings exciting new features and improvements that make building web applications even more enjoyable. In this post, we'll explore the key features and how to get started with the latest version.</p>
        
        <h2>Key Features</h2>
        <p>Let's explore the main features that make Next.js 14 special:</p>
        
        <ul>
          <li><strong>Improved Performance:</strong> Better optimization and faster builds</li>
          <li><strong>Enhanced Developer Experience:</strong> Better debugging tools and error messages</li>
          <li><strong>Security Features:</strong> Built-in security improvements</li>
          <li><strong>App Router:</strong> The new routing system for better performance</li>
        </ul>
        
        <h2>Getting Started</h2>
        <p>To start a new Next.js 14 project, you can use the following command:</p>
        
        <pre><code>npx create-next-app@latest my-app</code></pre>
        
        <p>This will create a new Next.js application with all the latest features and best practices.</p>
        
        <h2>Conclusion</h2>
        <p>Next.js 14 continues to push the boundaries of what's possible with React applications. With its improved performance, better developer experience, and enhanced security features, it's an excellent choice for building modern web applications.</p>
      `
    },
    'responsive-ui-tailwind-css': {
      title: 'Building Responsive UIs with Tailwind CSS',
      date: '2024-01-10',
      readTime: '7 min read',
      content: `
        <h2>Why Tailwind CSS?</h2>
        <p>Tailwind CSS has revolutionized how we approach styling in modern web development. Its utility-first approach allows developers to build custom designs without leaving their HTML.</p>
        
        <h2>Getting Started</h2>
        <p>Setting up Tailwind CSS is straightforward and well-documented. You can install it via npm and configure it with your build process.</p>
        
        <h2>Responsive Design</h2>
        <p>Tailwind's responsive utilities make it easy to create designs that work across all devices:</p>
        
        <ul>
          <li><strong>Mobile-first approach:</strong> Start with mobile styles and scale up</li>
          <li><strong>Breakpoint system:</strong> Consistent breakpoints for different screen sizes</li>
          <li><strong>Flexible layouts:</strong> Easy grid and flexbox utilities</li>
        </ul>
        
        <h2>Best Practices</h2>
        <p>Here are some best practices to follow when using Tailwind CSS:</p>
        
        <ul>
          <li>Use the mobile-first approach</li>
          <li>Keep your utility classes organized</li>
          <li>Leverage Tailwind's design system</li>
          <li>Use components for repeated patterns</li>
        </ul>
      `
    },
    'future-web-development': {
      title: 'The Future of Web Development',
      date: '2024-01-05',
      readTime: '6 min read',
      content: `
        <h2>Emerging Trends</h2>
        <p>The web development landscape is constantly evolving. New technologies and frameworks are emerging that promise to make development faster, more efficient, and more enjoyable.</p>
        
        <h2>New Technologies</h2>
        <p>Several exciting technologies are shaping the future:</p>
        
        <ul>
          <li><strong>WebAssembly:</strong> Bringing near-native performance to the web</li>
          <li><strong>Progressive Web Apps:</strong> Bridging the gap between web and native apps</li>
          <li><strong>Server Components:</strong> Reducing client-side JavaScript</li>
          <li><strong>Edge Computing:</strong> Bringing computation closer to users</li>
        </ul>
        
        <h2>Framework Evolution</h2>
        <p>Modern frameworks are becoming more powerful and easier to use:</p>
        
        <ul>
          <li>Better performance optimizations</li>
          <li>Improved developer experience</li>
          <li>Enhanced security features</li>
          <li>Better TypeScript integration</li>
        </ul>
        
        <h2>What to Expect</h2>
        <p>Looking ahead, we can expect to see:</p>
        
        <ul>
          <li>Faster development cycles</li>
          <li>Better performance out of the box</li>
          <li>Improved accessibility features</li>
          <li>Enhanced security measures</li>
        </ul>
      `
    }
  }

  return posts[slug as keyof typeof posts] || null
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-gray-700 dark:text-gray-300 leading-relaxed [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-gray-900 [&>h2]:dark:text-white [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-4 [&>ul]:mb-4 [&>li]:mb-2 [&>pre]:bg-gray-100 [&>pre]:dark:bg-gray-800 [&>pre]:p-4 [&>pre]:rounded-lg [&>code]:bg-gray-100 [&>code]:dark:bg-gray-800 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded"
          />
        </article>

        {/* Comments Section Placeholder */}
        <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Comments
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Comments feature coming soon!
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              We're working on adding a comments system where you can share your thoughts and engage with other readers.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}
