import Link from "next/link"

export default function IntroPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 px-6 py-16 text-white">
      <div
        className="absolute inset-0 bg-cover bg-[center_18%] bg-no-repeat"
        style={{
          backgroundImage: "url('/images/condo_w_balconies_w_sky.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

      <section className="relative z-10 mx-auto max-w-5xl rounded-sm bg-neutral-950/80 px-8 py-10 shadow-2xl ring-1 ring-white/20 md:px-14 md:py-14">
        <div className="mb-10 flex items-start justify-between gap-8">
          <div>
            <h1 className="text-3xl font-light uppercase tracking-[0.35em]">
              Intro
            </h1>
            <div className="mt-5 h-[2px] w-40 bg-white/70" />
          </div>

          <Link
            href="/"
            className="text-3xl font-light text-white/80 transition hover:text-white"
            aria-label="Return home"
          >
            ×
          </Link>
        </div>

        <div className="space-y-7 text-lg leading-9 text-white/85">
          <p>
            Brokered By Berk begins with a simple idea: real estate is not only
            about property, but about people, timing, context, and trust.
          </p>

          <p>
            Whether you are buying, selling, exploring, or simply trying to
            understand your options, my role is to help clarify the next step
            and facilitate the right conversation.
          </p>

          <p>
            This site is an evolving introduction to my work, my approach, and
            the clients I hope to serve.
          </p>
        </div>
      </section>
    </main>
  )
}