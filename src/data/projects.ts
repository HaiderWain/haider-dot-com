// -------- Project type (optional but handy) ----------
export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

// -------- The data itself ----------------------------
export const projects: Project[] = [
  {
    slug: 'photosync',
    title: 'PhotoSync App',
    description:
      'A personal Google Photos alternative built with the MERN stack.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/HaiderWain/photosync',
  },
  {
    slug: 'nhs-adhd',
    title: 'NHS ADHD Classifier',
    description:
      'ML model that predicts ADHD and sex from brain & behavioural data.',
    tech: ['Python', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/HaiderWain/nhs-adhd',
  },
];

// -------- Helpers (optional) -------------------------
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
