import { notFound } from 'next/navigation';
import { posts, BlogPost } from '@/data/blog';

// Tell Next.js which slugs to pre-render
export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

interface PageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post: BlogPost | undefined = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="prose max-w-none space-y-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600">{post.date}</p>
      <div>
        {post.content
          .trim()
          .split('\n\n')
          .map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
      </div>
    </article>
  );
}
