import Link from "next/link"

export default function AboutPage() {
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
              About
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

        <div className="mb-10 overflow-hidden rounded-sm">
          <img
            src="/images/berk_head_shot.jpg"
            alt="Berkley portrait"
            className="h-72 w-full object-cover object-center opacity-90"
          />
        </div>

        <div className="space-y-7 text-lg leading-9 text-white/85">
          <p>
            Brokered By Berk is a personal real estate advisory brand focused on
            thoughtful representation, refined market strategy, and high-touch
            client service across the Pacific Northwest.
          </p>

          <p>
            With an eye for design, architecture, and lifestyle, Berkley brings a
            visually informed perspective to real estate decisions—helping
            clients understand not only property value, but also place, context,
            presentation, and long-term opportunity.
          </p>

          <p>
            The practice is built for clients who value discretion, clarity, and
            strategic guidance in luxury residential real estate, investment
            positioning, and personal property transitions.
          </p>
        </div>
      </section>
    </main>
  )
}