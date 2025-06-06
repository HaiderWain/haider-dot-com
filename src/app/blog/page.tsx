import Link from 'next/link';
import { posts } from '@/data/blog';

export default function BlogPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link href={`/blog/${post.slug}`} className="block hover:underline">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.date}</p>
              <p className="text-gray-700">{post.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
