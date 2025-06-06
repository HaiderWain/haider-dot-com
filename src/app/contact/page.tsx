export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p>Feel free to reach out to me via any of the platforms below:</p>

      <ul className="space-y-2 text-lg">
        <li>
          📧 Email:{" "}
          <a
            href="mailto:haiderwain.9@gmail.com"
            className="text-blue-600 hover:underline"
          >
            haiderwain.9@gmail.com
          </a>
        </li>
        <li>
          💼 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/haiderwain"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/haiderwain
          </a>
        </li>
        <li>
          💻 GitHub:{" "}
          <a
            href="https://github.com/HaiderWain"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/HaiderWain
          </a>
        </li>
      </ul>
    </section>
  );
}
