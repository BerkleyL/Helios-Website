export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
          Helios Website
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          Building a brighter digital presence.
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-slate-300">
          This is the first custom homepage deployed through Next.js, GitHub,
          Vercel, and Sanity.
        </p>

        <div className="flex gap-4">
          <a
            href="/studio"
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Open Studio
          </a>

          <a
            href="https://github.com/BerkleyL/Helios-Website"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:bg-white/10"
          >
            View GitHub
          </a>
        </div>
      </section>
    </main>
  )
}