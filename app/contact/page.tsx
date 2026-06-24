import Link from "next/link"

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWeixin,
} from "react-icons/fa"

import { SiXiaohongshu } from "react-icons/si"

export default function ContactPage() {
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
              Contact
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
             src="/images/contact_page_pic.jpg"
             alt="Contact"
             className="h-80 w-full object-cover opacity-90"
             style={{
             objectPosition: "center 63%",
             }}
            />
        </div>
<div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
  <form
  action="https://formspree.io/f/xeewwndp"
  method="POST"
  className="space-y-7"
>
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-white/80">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full border border-white/70 bg-transparent px-4 py-4 text-white outline-none transition focus:bg-white/10"
        />
      </div>

      <div>
        <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-white/80">
          Phone (Optional)
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full border border-white/70 bg-transparent px-4 py-4 text-white outline-none transition focus:bg-white/10"
        />
      </div>
    </div>

    <div>
      <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-white/80">
        Email
      </label>
      <input
        type="email"
        name="email"
        required
        className="w-full border border-white/70 bg-transparent px-4 py-4 text-white outline-none transition focus:bg-white/10"
      />
    </div>

    <div>
  <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-white/80">
    Preferred Language
  </label>

  <select
    name="language"
    defaultValue="Either"
    className="w-full border border-white/70 bg-transparent px-4 py-4 text-white outline-none transition focus:bg-white/10"
  >
    <option value="English" className="bg-neutral-900">
      English
    </option>

    <option value="Chinese" className="bg-neutral-900">
      中文
    </option>

    <option value="Either" className="bg-neutral-900">
      Either / Either is Fine
    </option>
  </select>
</div>

    <div>
      <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-white/80">
        Message
      </label>
      <textarea
        name="message"
        required
        rows={7}
        className="w-full border border-white/70 bg-transparent px-4 py-4 text-white outline-none transition focus:bg-white/10"
      />
    </div>

    <div className="flex flex-wrap gap-5">
      <button
        type="submit"
        className="bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-950 transition hover:bg-white/80"
      >
        Send Message
      </button>

      <button
        type="reset"
        className="border border-white/70 px-7 py-4 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-neutral-950"
      >
        Reset
      </button>
    </div>
  </form>

  <aside className="space-y-8 text-white/85">
    <div>
      <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">
        Email
      </h2>
      <p className="text-lg">Berkley@BrokeredByBerk.com</p>
    </div>

    <div>
      <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">
        Phone
      </h2>
      <p className="text-lg">(206) 693-8497</p>
    </div>

    <div>
      <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">
        Social
      </h2>
      <div className="flex flex-col gap-4">

  <a
    href="#"
    className="flex items-center gap-3 text-lg transition hover:text-white"
  >
    <FaWeixin size={16} />
    <span>WeChat</span>
  </a>

  <a
    href="#"
    className="flex items-center gap-3 text-lg transition hover:text-white"
  >
    <SiXiaohongshu size={16} />
    <span>RedNote (小红书)</span>
  </a>

  <a
    href="#"
    className="flex items-center gap-3 text-lg transition hover:text-white"
  >
    <FaInstagram size={16} />
    <span>Instagram</span>
  </a>

  <a
    href="#"
    className="flex items-center gap-3 text-lg transition hover:text-white"
  >
    <FaLinkedinIn size={16} />
    <span>LinkedIn</span>
  </a>

  <a
    href="#"
    className="flex items-center gap-3 text-lg transition hover:text-white"
  >
    <FaFacebookF size={16} />
    <span>Facebook</span>
  </a>

</div>
    </div>

    <div>
      <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">
        Service Area
      </h2>
      <p className="text-lg leading-8">
        Greater Seattle and the Pacific Northwest.
      </p>
    </div>
  </aside>
</div>


        
      </section>
    </main>
  )
}