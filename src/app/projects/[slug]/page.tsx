import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';

// 1️⃣  Tell Next what slugs exist so it can prerender them
export async function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

interface PageProps {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p>{project.description}</p>

      <div>
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="bg-gray-200 px-2 py-1 rounded text-sm">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-x-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="text-blue-600 underline"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="text-green-600 underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </section>
  );
}
