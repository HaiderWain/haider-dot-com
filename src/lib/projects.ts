import fs from 'fs';
import path from 'path';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  images: string[];
  category?: string;
  featured?: boolean;
  date?: string;
}

export function getAllProjects(): ProjectItem[] {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw) as ProjectItem[];
  // sort by date desc if present
  return data.sort((a, b) => {
    const da = a.date ? Date.parse(a.date) : 0;
    const db = b.date ? Date.parse(b.date) : 0;
    return db - da;
  });
}

export function getFeaturedProjects(limit?: number): ProjectItem[] {
  const projects = getAllProjects().filter(p => p.featured);
  return typeof limit === 'number' ? projects.slice(0, limit) : projects;
}
