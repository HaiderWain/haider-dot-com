// Define a type for blog posts
export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;       // e.g. "2025-06-01"
  content: string;    // For now, a simple string. Later you can load Markdown.
}

// Example posts array
export const posts: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    summary: 'A quick guide to setting up your first Next.js project.',
    date: '2025-06-01',
    content: `
Next.js is a React framework that provides server-side rendering, static site generation, and more. 
In this post, we’ll walk through installing Next.js, creating your first page, and exploring routing.

1. Install Next.js:
\`\`\`bash
npx create-next-app@latest my-blog
\`\`\`

2. Create a new page:
\`\`\`tsx
// src/app/hello/page.tsx
export default function HelloPage() {
  return <h1>Hello, Next.js!</h1>;
}
\`\`\`

3. Start the dev server:
\`\`\`bash
npm run dev
\`\`\`

Visit http://localhost:3000/hello to see your page. From here, you can explore layouts, API routes, and more.
    `,
  },
  {
    slug: 'why-typeScript-with-nextjs',
    title: 'Why TypeScript with Next.js?',
    summary: 'Benefits of using TypeScript in your Next.js applications.',
    date: '2025-06-05',
    content: `
TypeScript adds static typing to JavaScript, which helps catch errors early and improves IDE support. 
With Next.js, TypeScript comes built-in by creating a \`tsconfig.json\`. Some key advantages:

- **Type safety**: Catches type errors at compile time.
- **Autocomplete**: Better IntelliSense in VS Code.
- **Self-documenting code**: Types serve as documentation.

To add TypeScript to an existing Next.js project:

1. Install dependencies:
\`\`\`bash
npm install --save-dev typescript @types/react @types/node
\`\`\`

2. Rename any \`.js\` page to \`.tsx\`. Restart the dev server and Next.js will create a default \`tsconfig.json\`.
    `,
  },
];
