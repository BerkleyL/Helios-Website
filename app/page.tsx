export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_35%),linear-gradient(135deg,rgba(20,20,20,0.95),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 bg-black/45" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/40 text-2xl tracking-widest">
            BB
          </div>

          <h1 className="mb-6 text-5xl font-light tracking-[0.18em] md:text-7xl">
            BERKLEY L
          </h1>

          <div className="mx-auto mb-8 h-px w-40 bg-white/40" />

          <p className="mx-auto mb-10 max-w-2xl text-sm uppercase leading-7 tracking-[0.28em] text-white/80 md:text-base">
            Luxury real estate advisory, personal representation, and
            strategic market guidance in the Pacific Northwest.
          </p>

          <nav className="grid gap-3 md:grid-cols-4">
            {["About", "Services", "Listings", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="border border-white/30 px-6 py-4 text-sm uppercase tracking-[0.25em] text-white/80 transition hover:bg-white hover:text-neutral-950"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </section>
    </main>
  )
}