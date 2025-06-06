export default function AboutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p>
        I'm Haider, a software developer with 3+ years of experience building fullstack web applications using the MERN stack.
      </p>
      <p>
        Currently, I’m pursuing an MSc in Advanced Computer Science at the University of Essex to deepen my knowledge in advanced systems, machine learning, and data science.
      </p>
      <p>
        My strengths include building scalable APIs, clean UI/UX design, and deploying apps to cloud platforms like Vercel and Heroku. I'm passionate about learning and always experimenting with new tools and frameworks.
      </p>

      <div>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>
        <ul className="list-disc list-inside grid grid-cols-2 sm:grid-cols-3 gap-1 text-gray-800">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
}
