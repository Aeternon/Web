export default function Contact() {
  return (
    <main className="min-h-screen p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold">Contact</h1>

      <ul className="mt-4 list-disc list-inside">
        <li>
          Email:
          {" "}
          <a href="mailto:iamudassir11@gmail.com" className="underline">
            iamudassir11@gmail.com
          </a>
        </li>

        <li>
          LinkedIn:
          {" "}
          <a
            href="https://www.linkedin.com/in/aeternon"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin.com/in/aeternon
          </a>
        </li>
      </ul>
    </main>
  );
}

