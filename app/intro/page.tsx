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
        <div className="mb-10 overflow-hidden rounded-sm">
          <img
            src="/images/intro_page_pic.jpg"
            alt="Berkley portrait"
            className="h-72 w-full object-cover object-center opacity-90"
          />
        </div>
        <div className="space-y-7 text-lg leading-9 text-white/85">
          <p>
            A Canadian prairie farm boy at heart and now a proud Pacific Northwest resident, I was born on the Prairies, raised among the rolling hills and forests east of the Canadian Rockies, and eventually moved to the PNW following my wife’s career path. Once here, I quickly fell in love with the region — especially its real estate and endless outdoor activities. From unique landscapes and distinctive neighbourhoods to the incredible diversity of architecture and vegetation, the Pacific Northwest offers a character and beauty unlike anywhere else.
          </p>

          <p>
            Not being a local is, in many ways, one of my strengths. I bring fresh eyes to every neighbourhood, community, and property, helping clients discover opportunities and possibilities they may otherwise overlook. Seattle and the surrounding region have so much to offer, and helping others find a place they are proud to call HOME is both exciting and deeply rewarding.
          </p>

          <p>
            To me, a home is not about size or grandeur; it is about how it makes you feel. That perspective shapes how I work with clients: understanding what truly matters to you and helping you find a home that enhances your quality of life. My approach is simple: listen carefully, ask the right questions, and help you articulate what “home” truly means for you. Whether you are buying your first property, relocating, upgrading, or searching for your forever home, I look forward to helping you find it. 
          </p>
        </div>
      </section>
    </main>
  )
}