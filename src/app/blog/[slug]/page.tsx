import Layout from '@/components/Layout';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        {/* Back Button */}
        <div className='mb-8'>
          <Link
            href='/blog'
            className='inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className='mb-12'>
          <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6'>{post.title}</h1>

          <div className='flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-8'>
            <div className='flex items-center space-x-1'>
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            {post.readTime && (
              <div className='flex items-center space-x-1'>
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
        </header>

        {/* Article Content */}
        <article className='prose prose-lg max-w-none dark:prose-invert'>
          {/* Render markdown as plain HTML-like blocks without executing HTML */}
          {post.content.split('\n').map((line, idx) => (
            <p key={idx} className='text-gray-300 leading-relaxed'>
              {line}
            </p>
          ))}
        </article>

        {/* Comments Section Placeholder */}
        <section className='mt-16 pt-8 border-t border-gray-200 dark:border-gray-700'>
          <h2 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>Comments</h2>
          <div className='bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center'>
            <p className='text-gray-600 dark:text-gray-400 mb-4'>Comments feature coming soon!</p>
            <p className='text-sm text-gray-500 dark:text-gray-500'>
              We&apos;re working on adding a comments system where you can share your thoughts and engage with other
              readers.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
