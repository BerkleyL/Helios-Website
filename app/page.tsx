"use client"

import { useState } from "react"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "zh">("en")

  const navItems =
    language === "en"
      ? ["About", "Services", "Listings", "Contact"]
      : ["关于", "服务", "房源", "联系"]

  const description =
    language === "en"
      ? "Luxury real estate advisory, personal representation, and strategic market guidance in the Pacific Northwest."
      : "面向太平洋西北地区的高端房地产顾问、个人化代理服务与战略市场指导。"

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-[center_18%] bg-no-repeat"
        style={{
          backgroundImage: "url('/images/condo_w_balconies_w_sky.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/45" />

      <button
        onClick={() => setLanguage(language === "en" ? "zh" : "en")}
        className="absolute right-6 top-6 z-20 border-2 border-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition duration-300 hover:bg-white hover:text-neutral-950"
      >
        {language === "en" ? "中文" : "EN"}
      </button>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-10 flex h-80 w-80 items-center justify-center overflow-hidden rounded-full border-2 border-white/70">
            <img
              src="/images/berk_head_shot.jpg"
              alt="Berkley portrait"
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="mb-8 text-5xl font-light tracking-[0.18em] md:text-7xl">
            Brokered By Berk
          </h1>

          <div className="relative mx-auto flex justify-center">
            <div className="h-16 w-[2px] bg-white/40" />
          </div>

          <div className="relative mx-auto mb-8 flex justify-center">
            <div className="h-[2px] w-[48rem] max-w-full bg-white/40" />
          </div>

          <p className="mx-auto mb-10 max-w-3xl text-sm uppercase leading-8 tracking-[0.28em] text-white/85 md:text-base">
            {description}
          </p>

          <div className="relative mx-auto flex justify-center">
            <div className="h-[2px] w-[48rem] max-w-full bg-white/40" />
          </div>

          <div className="mx-auto h-16 w-[2px] bg-white/40" />

          <nav className="mx-auto grid max-w-4xl border-2 border-white/70 md:grid-cols-4">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={item === "About" || item === "关于" ? "/about" : `#${item.toLowerCase()}`}
                className={`px-6 py-5 text-sm uppercase tracking-[0.25em] text-white/85 transition duration-300 hover:bg-white hover:text-neutral-950 hover:tracking-[0.32em] ${
                  index !== navItems.length - 1 ? "border-r-2 border-white/40" : ""
                }`}
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