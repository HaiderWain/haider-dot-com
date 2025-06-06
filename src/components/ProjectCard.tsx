// src/components/ProjectCard.tsx
'use client'            // ← add this line

import Link from 'next/link'
import { FC } from 'react'

interface ProjectCardProps {
  slug: string
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

const ProjectCard: FC<ProjectCardProps> = ({
  slug,
  title,
  description,
  tech,
  github,
  demo,
}) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className="block border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-3">{description}</p>

      <ul className="flex flex-wrap gap-2 text-sm text-gray-600 mb-3">
        {tech.map((t) => (
          <li key={t} className="bg-gray-200 px-2 py-1 rounded">
            {t}
          </li>
        ))}
      </ul>

      <div className="flex space-x-4 text-sm">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            /* stop click from bubbling so the outer Link doesn't also trigger */
            onClick={(e) => e.stopPropagation()}
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-green-600 hover:underline"
          >
            Live&nbsp;Demo
          </a>
        )}
      </div>
    </Link>
  )
}

export default ProjectCard
