import fs from 'fs';
import path from 'path';

export interface BlogMeta {
  title: string;
  date: string;
  excerpt?: string;
  slug: string;
  tags?: string[];
  readTime?: string;
}

export interface BlogPost extends BlogMeta {
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

function parseFrontMatter(markdown: string): { meta: Partial<BlogMeta>; content: string } {
  if (!markdown.startsWith('---')) return { meta: {}, content: markdown };
  const end = markdown.indexOf('\n---');
  if (end === -1) return { meta: {}, content: markdown };
  const fm = markdown.slice(3, end).trim();
  const body = markdown.slice(end + 4).trim();
  const meta: Record<string, any> = {};
  for (const line of fm.split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      try {
        value = JSON.parse(value);
      } catch (_) {}
    } else {
      value = value.replace(/^"|"$/g, '').replace(/^'|'$/g, '');
    }
    meta[key] = value;
  }
  return { meta, content: body };
}

export function getAllBlogMeta(): BlogMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
  const posts: BlogMeta[] = files.map(file => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
    const { meta } = parseFrontMatter(raw);
    return {
      title: String(meta.title || file.replace(/\.md$/, '')),
      date: String(meta.date || new Date().toISOString()),
      excerpt: meta.excerpt ? String(meta.excerpt) : undefined,
      slug: String(meta.slug || file.replace(/\.md$/, '')),
      tags: Array.isArray(meta.tags) ? (meta.tags as string[]) : undefined,
      readTime: meta.readTime ? String(meta.readTime) : undefined,
    };
  });
  return posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { meta, content } = parseFrontMatter(raw);
  const metaResolved: BlogMeta = {
    title: String(meta.title || slug),
    date: String(meta.date || new Date().toISOString()),
    excerpt: meta.excerpt ? String(meta.excerpt) : undefined,
    slug: String(meta.slug || slug),
    tags: Array.isArray(meta.tags) ? (meta.tags as string[]) : undefined,
    readTime: meta.readTime ? String(meta.readTime) : undefined,
  };
  return { ...metaResolved, content };
}
