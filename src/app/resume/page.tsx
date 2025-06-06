export default function ResumePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Resume</h1>

      <p>
        You can also{" "}
        <a
          href="/Haider-Wain-Resume.pdf"
          download
          className="text-blue-600 hover:underline"
        >
          download my resume as PDF
        </a>
        .
      </p>

      <div>
        <h2 className="text-xl font-semibold">Education</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>MSc Advanced Computer Science</strong> – University of Essex (2024–2025)
          </li>
          <li>
            <strong>BSc Computer Science</strong> – 2017–2021
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Experience</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Fullstack Developer</strong> – Various startups (2021–2024)
          </li>
          <li>
            Built and maintained production apps using the MERN stack
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 list-disc list-inside gap-y-1">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>MongoDB / PostgreSQL</li>
          <li>Tailwind CSS</li>
          <li>Git / GitHub</li>
        </ul>
      </div>
    </section>
  );
}
