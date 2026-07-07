"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWeixin,
} from "react-icons/fa"

import { SiXiaohongshu } from "react-icons/si"

export default function ContactPage() {
  const [language, setLanguage] = useState<"en" | "zh">("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");

    if (savedLanguage === "en" || savedLanguage === "zh") {
      setLanguage(savedLanguage);
    }
  }, []);

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
              {language === "en" ? "Contact" : "联系"}
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

        <div className="mb-14 mt-8 overflow-hidden rounded-sm md:mb-10 md:mt-0">
          <img
             src="/images/contact_page_pic.jpg"
             alt="Contact"
             className="h-64 w-full object-cover opacity-90 md:h-80"
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
          {language === "en" ? "Name" : "姓名"}
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
          {language === "en" ? "Phone (Optional)" : "电话（可选）"}
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
        {language === "en" ? "Email" : "电子邮箱"}
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
    {language === "en" ? "Preferred Language" : "偏好语言"}
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
      Either
    </option>
  </select>
</div>

    <div>
      <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-white/80">
        {language === "en" ? "Message" : "留言"}
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
        {language === "en" ? "Send Message" : "发送消息"}
      </button>

      <button
        type="reset"
        className="border border-white/70 px-7 py-4 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-neutral-950"
      >
        {language === "en" ? "Reset" : "重置"}
      </button>
    </div>
  </form>

  <aside className="space-y-8 text-white/85">
    <div>
      <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">
        {language === "en" ? "Email" : "电子邮箱"}
      </h2>
      <p className="text-lg">Berkley@BrokeredByBerk.com</p>
    </div>

    <div>
      <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">
        {language === "en" ? "Phone" : "电话"}
      </h2>
      <p className="text-lg">(206) 693-8497</p>
    </div>

    <div>
      <h2 className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">
        {language === "en" ? "Social" : "社交媒体"}
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
        {language === "en" ? "Service Area" : "服务区域"}
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