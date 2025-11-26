export default function Home() {
  return (
    <main className="min-h-screen p-10 max-w-3xl mx-auto">
      <section className="mb-8">
        <h1 className="text-4xl font-semibold">Mudassir</h1>
        <p className="mt-2 text-lg">Building my own space on the internet. Ideas. Projects. Notes.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-medium">What I do</h2>
        <ul className="list-disc list-inside">
          <li>Design & build small web projects</li>
          <li>Write about AI & temporal-loop storytelling</li>
          <li>Experiment with personal tools and demos</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-medium">Latest</h2>
        <p className="mt-2 text-sm text-slate-600">No polished releases yet. Working on a temporal-loop short film concept — check back.</p>
      </section>
    </main>
  );
}

