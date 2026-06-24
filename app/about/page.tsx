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
            src="/images/cropped_orange_sunset_pic.jpg"
            alt="Berkley portrait"
            className="h-72 w-full object-cover object-center opacity-90"
          />
        </div>

        <div className="space-y-7 text-lg leading-9 text-white/85">
          <p>
            I bring more than 30 years of experience as a business owner and contractor in construction, renovation, and water-loss restoration. This background gives me a trained eye during home tours and a practical understanding of how homes are built, maintained, and improved.
          </p>

          <p>
            Over the past decade, my company specialized in water-loss restoration, primarily within high-rise condominium communities. My team and I worked inside thousands of condo units and throughout every part of the building—from mechanical and electrical rooms to elevators, security systems, rooftops, parking garages, and common areas. As a result, I understand the strengths, weaknesses, and long-term maintenance challenges of condo properties better than most.
          </p>

          <p>
            I have also worked closely with property management companies and condominium boards to plan reserve fund projects, oversee repairs, and support bylaw compliance. Let my experience provide you with a deeper perspective and greater confidence when evaluating condo ownership.
          </p>
        </div>
      </section>
    </main>
  )
}